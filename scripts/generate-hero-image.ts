import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

async function generateTruckDashboardImage() {
  const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
  const apiKey = process.env.AZURE_OPENAI_API_KEY;
  const apiVersion = process.env.AZURE_OPENAI_API_VERSION;

  if (!endpoint || !apiKey || !apiVersion) {
    throw new Error('Missing required environment variables. Check .env.local file.');
  }

  console.log('🔧 Using endpoint:', endpoint);
  console.log('🔑 API key loaded:', apiKey.substring(0, 10) + '...');

  const prompt = `Realistic interior view from a modern autonomous truck driver's seat, futuristic dashboard with digital displays and heads-up display (HUD), advanced sensors visible through windshield, professional automotive photography, cinematic lighting, high-tech cockpit with glowing blue and green interface elements, wide angle view through windshield showing highway road ahead, dramatic sunset lighting, 8K ultra detailed, photorealistic, commercial vehicle interior`;

  // Construct the full URL with API version
  const url = `${endpoint}?api-version=${apiVersion}`;

  const requestBody = {
    prompt: prompt,
    n: 1,
    size: "1792x1024",
    quality: "hd",
    style: "natural"
  };

  console.log('🎨 Generating truck dashboard image...');
  console.log('🔗 Full URL:', url);
  console.log('📝 Prompt:', prompt);

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API Error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();

    if (!data.data || !data.data[0] || !data.data[0].url) {
      throw new Error('Invalid response format from API');
    }

    const imageUrl = data.data[0].url;
    console.log('✅ Image generated successfully!');
    console.log('🔗 Image URL:', imageUrl);

    // Download the image
    console.log('⬇️  Downloading image...');
    const imageResponse = await fetch(imageUrl);
    const arrayBuffer = await imageResponse.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Save to public/images folder
    const outputPath = path.join(process.cwd(), 'public', 'images', 'truck-dashboard.jpg');
    fs.writeFileSync(outputPath, buffer);

    console.log('✅ Image saved to:', outputPath);
    console.log('🎉 Done! The hero section background is now ready.');

  } catch (error) {
    console.error('❌ Error generating image:', error);
    throw error;
  }
}

generateTruckDashboardImage();
