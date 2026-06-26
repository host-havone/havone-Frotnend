const fs = require('fs');
const path = require('path');

const apiKey = fs.readFileSync(path.join(__dirname, '.env.local'), 'utf8')
  .split('\n')
  .find(line => line.startsWith('AZURE_OPENAI_KEY='))
  ?.split('=')[1]
  ?.trim();

const deploymentName = 'gpt-image-2';
const apiVersion = '2024-12-01-preview';

async function generateImage() {
  const prompt = `Exploded/disassembled view of a professional IoT device showing internals — camera modules on top, green PCB (circuit board) in center, metallic antenna and connectors, IMU sensor, battery module below. Components floating in 3D space on dark black background. Green accent lighting (#8DC313) highlighting key components. Professional hardware teardown photography style. Ultra-detailed, clean, no text, no labels, no brand names, no watermarks. Premium technical product visualization.`;

  const requestBody = {
    prompt: prompt,
    n: 1,
    size: "1024x1024",
    quality: "hd",
    style: "natural"
  };

  try {
    const response = await fetch(
      `https://havone.openai.azure.com/openai/deployments/${deploymentName}/images/generations?api-version=${apiVersion}`,
      {
        method: 'POST',
        headers: {
          'api-key': apiKey,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      }
    );

    const data = await response.json();
    
    if (data.data && data.data[0]) {
      const imageUrl = data.data[0].url;
      console.log('Image URL:', imageUrl);

      // Fetch and save image
      const imgResponse = await fetch(imageUrl);
      const buffer = await imgResponse.arrayBuffer();
      const filepath = path.join(__dirname, 'public/images/tech-sensor-exploded.png');
      fs.writeFileSync(filepath, Buffer.from(buffer));
      console.log('Image saved to:', filepath);
    } else {
      console.error('Error:', data);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

generateImage();
