const https = require('https');
const fs = require('fs');
const path = require('path');

const endpoint = process.env.AZURE_OPENAI_ENDPOINT?.replace(/\/openai\/v1\/images\/generations$/, '') || 'https://haveo-mjvf43tr-eastus2.services.ai.azure.com';
const apiKey = process.env.AZURE_OPENAI_API_KEY;
const deployment = process.env.AZURE_OPENAI_IMAGE_DEPLOYMENT || 'gpt-image-1';
const apiVersion = process.env.AZURE_OPENAI_API_VERSION || '2024-02-01';

if (!apiKey) {
  throw new Error('AZURE_OPENAI_API_KEY is required.');
}

const url = `${endpoint}/openai/deployments/${deployment}/images/generations?api-version=${apiVersion}`;

const prompt = `A professional, clean map of India showing all states and union territories with clear borders. The map should be:

- High quality, realistic cartographic style
- States color-coded by road accident severity:
  * RED states (Critical): Uttar Pradesh, Tamil Nadu, Maharashtra, Karnataka, Madhya Pradesh
  * ORANGE states (High): Rajasthan, West Bengal, Andhra Pradesh, Gujarat
  * AMBER/YELLOW states (Medium): Bihar, Telangana, Punjab, Haryana, Odisha
  * GREEN states (Low): Kerala
  * GRAY states: All other states/territories

- Clean white or light gray background
- Clear state boundaries with thin borders
- Professional, minimalist design
- Suitable for a business presentation
- Include a small legend showing the color coding (Critical/High/Medium/Low)
- Top-down view of the entire Indian subcontinent
- Include all states: Kashmir, Himachal Pradesh, Punjab, Haryana, Uttarakhand, Uttar Pradesh, Bihar, West Bengal, Rajasthan, Gujarat, Madhya Pradesh, Maharashtra, Chhattisgarh, Jharkhand, Odisha, Andhra Pradesh, Telangana, Karnataka, Tamil Nadu, Kerala, Goa, and northeastern states
- No text labels on states, just colors
- Clean, modern infographic style
- High contrast colors for easy visibility

The map should look professional and suitable for a data visualization dashboard about road safety statistics.`;

console.log('🗺️ Generating India map with Azure OpenAI DALL-E...');
console.log('📍 Endpoint:', url);

const requestData = JSON.stringify({
  prompt: prompt,
  n: 1,
  size: "1792x1024",
  quality: "hd",
  style: "natural"
});

const urlParts = new URL(url);

const options = {
  hostname: urlParts.hostname,
  port: 443,
  path: urlParts.pathname + urlParts.search,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'api-key': apiKey,
    'Content-Length': Buffer.byteLength(requestData)
  }
};

const req = https.request(options, (res) => {
  let data = '';

  console.log('📡 Response status:', res.statusCode);

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    try {
      const response = JSON.parse(data);

      if (res.statusCode === 202) {
        // Async operation - need to poll
        const operationLocation = res.headers['operation-location'];
        if (!operationLocation) {
          console.error('❌ No operation-location header in 202 response');
          process.exit(1);
        }
        console.log('⏳ Image generation started, polling for results...');
        pollOperation(operationLocation);
      } else if (res.statusCode === 200) {
        // Direct response
        handleImageResponse(response);
      } else {
        console.error('❌ Error:', response.error || response);
        process.exit(1);
      }
    } catch (error) {
      console.error('❌ Failed to parse response:', error.message);
      console.error('Response data:', data);
      process.exit(1);
    }
  });
});

req.on('error', (error) => {
  console.error('❌ Request error:', error.message);
  process.exit(1);
});

req.write(requestData);
req.end();

function pollOperation(operationUrl) {
  const urlParts = new URL(operationUrl);

  const pollOptions = {
    hostname: urlParts.hostname,
    port: 443,
    path: urlParts.pathname + urlParts.search,
    method: 'GET',
    headers: {
      'api-key': apiKey
    }
  };

  let attempts = 0;
  const maxAttempts = 30;

  function poll() {
    attempts++;
    console.log(`⏳ Polling attempt ${attempts}/${maxAttempts}...`);

    const pollReq = https.request(pollOptions, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const response = JSON.parse(data);

          if (response.status === 'succeeded') {
            console.log('✅ Image generation completed!');
            handleImageResponse(response.result || response);
          } else if (response.status === 'failed' || response.status === 'cancelled') {
            console.error('❌ Image generation failed:', response.error || response);
            process.exit(1);
          } else if (attempts >= maxAttempts) {
            console.error('❌ Timeout: Maximum polling attempts reached');
            process.exit(1);
          } else {
            // Still processing, poll again after 2 seconds
            setTimeout(poll, 2000);
          }
        } catch (error) {
          console.error('❌ Failed to parse polling response:', error.message);
          process.exit(1);
        }
      });
    });

    pollReq.on('error', (error) => {
      console.error('❌ Polling error:', error.message);
      process.exit(1);
    });

    pollReq.end();
  }

  // Start polling after 2 seconds
  setTimeout(poll, 2000);
}

function handleImageResponse(response) {
  const imageData = response.data?.[0];

  if (!imageData) {
    console.error('❌ No image data in response');
    process.exit(1);
  }

  const imageUrl = imageData.url;
  const revisedPrompt = imageData.revised_prompt;

  if (revisedPrompt) {
    console.log('📝 Revised prompt:', revisedPrompt);
  }

  if (imageUrl) {
    console.log('🖼️ Image URL:', imageUrl);
    console.log('⬇️ Downloading image...');

    // Download the image
    https.get(imageUrl, (res) => {
      const outputPath = path.join(process.cwd(), 'public', 'images', 'india-map-generated.png');
      const fileStream = fs.createWriteStream(outputPath);

      res.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        console.log('✅ India map image saved to:', outputPath);
        process.exit(0);
      });
    }).on('error', (error) => {
      console.error('❌ Download error:', error.message);
      process.exit(1);
    });
  } else if (imageData.b64_json) {
    console.log('💾 Saving base64 image...');
    const outputPath = path.join(process.cwd(), 'public', 'images', 'india-map-generated.png');
    const imageBuffer = Buffer.from(imageData.b64_json, 'base64');
    fs.writeFileSync(outputPath, imageBuffer);
    console.log('✅ India map image saved to:', outputPath);
    process.exit(0);
  } else {
    console.error('❌ No image URL or base64 data in response');
    process.exit(1);
  }
}
