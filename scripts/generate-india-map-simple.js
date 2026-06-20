const http = require('http');
const fs = require('fs');
const path = require('path');

const prompt = `A professional, clean map of India showing all states with clear borders.

Color-coded by road accident severity:
- BRIGHT RED (#DC2626): Uttar Pradesh, Tamil Nadu, Maharashtra, Karnataka, Madhya Pradesh
- ORANGE (#EA580C): Rajasthan, West Bengal, Andhra Pradesh, Gujarat
- AMBER (#F59E0B): Bihar, Telangana, Punjab, Haryana, Odisha
- GREEN (#10B981): Kerala
- LIGHT GRAY: All other states

Requirements:
- Clean white or very light gray background
- Clear state boundaries with thin dark borders
- Professional minimalist cartographic style
- Top-down view of entire India including all states
- Include a small legend in bottom-left corner showing: Critical (Red), High (Orange), Medium (Amber), Low (Green)
- High quality, suitable for business dashboard
- No state name labels, only colors
- Modern infographic style with high contrast colors
- Sharp, crisp borders between states
- Include: Kashmir, Himachal Pradesh, Punjab, Haryana, Uttarakhand, Rajasthan, Uttar Pradesh, Bihar, West Bengal, Gujarat, Madhya Pradesh, Chhattisgarh, Jharkhand, Maharashtra, Odisha, Telangana, Andhra Pradesh, Karnataka, Goa, Tamil Nadu, Kerala, and northeastern states
- Realistic geographical shape of India`;

console.log('🗺️ Generating India map via API...');

const requestData = JSON.stringify({
  prompt: prompt,
  size: "1792x1024",
  quality: "hd"
});

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/api/generate-map-image',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(requestData)
  }
};

const req = http.request(options, (res) => {
  let data = '';

  console.log('📡 Response status:', res.statusCode);

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    try {
      const response = JSON.parse(data);

      if (response.error) {
        console.error('❌ Error:', response.error);
        process.exit(1);
      }

      if (response.image) {
        console.log('✅ Image generated successfully!');

        if (response.revisedPrompt) {
          console.log('📝 Revised prompt:', response.revisedPrompt);
        }

        // If it's a data URL, save it
        if (response.image.startsWith('data:image')) {
          const base64Data = response.image.replace(/^data:image\/\w+;base64,/, '');
          const buffer = Buffer.from(base64Data, 'base64');
          const outputPath = path.join(process.cwd(), 'public', 'images', 'india-map-generated.png');

          fs.writeFileSync(outputPath, buffer);
          console.log('💾 Image saved to:', outputPath);
        } else {
          // It's a URL, we need to download it
          console.log('🖼️ Image URL:', response.image);
          console.log('⚠️ Please download the image manually from the URL above');
        }

        process.exit(0);
      } else {
        console.error('❌ No image in response');
        process.exit(1);
      }
    } catch (error) {
      console.error('❌ Failed to parse response:', error.message);
      console.error('Response:', data);
      process.exit(1);
    }
  });
});

req.on('error', (error) => {
  console.error('❌ Request error:', error.message);
  console.error('⚠️ Make sure the dev server is running on port 3000');
  process.exit(1);
});

req.write(requestData);
req.end();
