const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function removeBrandText() {
  const imagePath = path.join(__dirname, 'public/images/tech-sensor-exploded.png');
  const tempPath = path.join(__dirname, 'public/images/tech-sensor-exploded-temp.png');
  
  try {
    // Get metadata
    const metadata = await sharp(imagePath).metadata();
    console.log(`Image dimensions: ${metadata.width}x${metadata.height}`);
    
    const width = metadata.width;
    const height = metadata.height;
    
    // Create dark overlay SVG to cover ALL text - both top area and left side
    const svgOverlay = `
      <svg width="${width}" height="${height}">
        <!-- Cover top area where "IoT Device" text is -->
        <rect x="0" y="0" width="${Math.floor(width * 0.3)}" height="${Math.floor(height * 0.12)}" fill="#0a0f0b"/>
        <!-- Cover left side where SENTINEL text is -->
        <rect x="0" y="${Math.floor(height * 0.12)}" width="${Math.floor(width * 0.12)}" height="${Math.floor(height * 0.15)}" fill="#0a0f0b"/>
      </svg>
    `;
    
    // Process image with overlay
    await sharp(imagePath)
      .composite([
        {
          input: Buffer.from(svgOverlay),
          blend: 'over'
        }
      ])
      .toFile(tempPath);
    
    // Replace original with processed image
    fs.renameSync(tempPath, imagePath);
    console.log(`All text removed. Image saved: ${imagePath}`);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

removeBrandText();
