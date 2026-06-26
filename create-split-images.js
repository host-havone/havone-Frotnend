const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function createSplitImages() {
  const sourceImage = path.join(__dirname, 'assets/images-backup/solutions-grid.png');
  const leftOutput = path.join(__dirname, 'public/images/solutions-grid-left.png');
  const rightOutput = path.join(__dirname, 'public/images/solutions-grid-right.png');
  
  try {
    // Get metadata
    const metadata = await sharp(sourceImage).metadata();
    console.log(`Source image dimensions: ${metadata.width}x${metadata.height}`);
    
    const width = metadata.width;
    const height = metadata.height;
    
    // Create left half - first two columns (trucks/bus area)
    await sharp(sourceImage)
      .extract({
        left: 0,
        top: 0,
        width: Math.floor(width / 2),
        height: height
      })
      .toFile(leftOutput);
    console.log(`Left image created: ${leftOutput}`);
    
    // Create right half - last two columns (insurance area)
    await sharp(sourceImage)
      .extract({
        left: Math.floor(width / 2),
        top: 0,
        width: Math.floor(width / 2),
        height: height
      })
      .toFile(rightOutput);
    console.log(`Right image created: ${rightOutput}`);
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

createSplitImages();
