const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const glob = require('glob');

// Configuration
const publicDir = path.join(__dirname, '../public');
const imageExts = ['jpg', 'jpeg', 'png'];
const targetDirs = ['images']; // Add more directories if needed

async function optimizeImage(filePath) {
  try {
    const ext = path.extname(filePath).toLowerCase().slice(1);
    const fileName = path.basename(filePath);
    
    // Skip already optimized images
    if (fileName.includes('.opt.')) {
      return;
    }
    
    // Create optimized file path
    const dirName = path.dirname(filePath);
    const baseName = path.basename(filePath, path.extname(filePath));
    const newFilePath = path.join(dirName, `${baseName}.opt.${ext}`);
    
    console.log(`Optimizing: ${filePath}`);
    
    // Optimize with Sharp
    const image = sharp(filePath);
    const metadata = await image.metadata();
    
    // If image is larger than 1200px, resize it maintaining aspect ratio
    if (metadata.width > 1200) {
      image.resize({ width: 1200 });
    }
    
    // Optimize based on file type
    if (ext === 'jpg' || ext === 'jpeg') {
      await image.jpeg({ quality: 80, progressive: true }).toFile(newFilePath);
    } else if (ext === 'png') {
      await image.png({ compressionLevel: 8 }).toFile(newFilePath);
    }
    
    // Replace original with optimized version
    fs.unlinkSync(filePath);
    fs.renameSync(newFilePath, filePath);
    
    console.log(`Optimized: ${filePath}`);
  } catch (error) {
    console.error(`Error optimizing ${filePath}:`, error.message);
  }
}

async function main() {
  // Process each target directory
  for (const dir of targetDirs) {
    const targetDir = path.join(publicDir, dir);
    
    // Skip if directory doesn't exist
    if (!fs.existsSync(targetDir)) {
      console.log(`Directory not found: ${targetDir}`);
      continue;
    }
    
    // Find all image files
    const pattern = path.join(targetDir, `**/*.{${imageExts.join(',')}}`);
    const files = glob.sync(pattern);
    
    console.log(`Found ${files.length} images in ${targetDir}`);
    
    // Optimize each image
    for (const file of files) {
      await optimizeImage(file);
    }
  }
  
  console.log('Image optimization complete!');
}

main().catch(console.error); 