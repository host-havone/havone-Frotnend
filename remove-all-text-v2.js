const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function removeBrandText() {
  const backupPath = path.join(__dirname, 'assets/images-backup/tech-sensor-exploded.png');
  const imagePath = path.join(__dirname, 'public/images/tech-sensor-exploded.png');
  const tempPath = path.join(__dirname, 'public/images/tech-sensor-exploded-temp.png');
  
  try {
    // Copy from backup
    fs.copyFileSync(backupPath, imagePath);
    console.log('Restored from backup');
    
    // Get metadata
    const metadata = await sharp(imagePath).metadata();
    console.log(`Image dimensions: ${metadata.width}x${metadata.height}`);
    
    const width = metadata.width;
    const height = metadata.height;
    
    // Create dark overlay SVG to cover all text areas comprehensively
    const svgOverlay = `
      <svg width="${width}" height="${height}">
        <!-- Cover entire top area including all text -->
        <rect x="0" y="0" width="${width}" height="${Math.floor(height * 0.18)}" fill="#0a0f0b"/>
        <!-- Cover left side entirely -->
        <rect x="0" y="0" width="${Math.floor(width * 0.1)}" height="${height}" fill="#0a0f0b"/>
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
