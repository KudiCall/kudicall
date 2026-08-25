import fs from 'fs';
import https from 'https';
import path from 'path';
import sharp from 'sharp';

const images = [
  {
    url: 'https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2F71e70cc2-7bc2-4edc-b616-897e1803ee9a.png?alt=media',
    filename: 'hero-desktop.webp',
    width: 1400,
  },
  {
    url: 'https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2Ff8a465ba-7141-406d-9a3d-fbf9e5cf359a.png?alt=media',
    filename: 'hero-mobile.webp',
    width: 768,
  },
  {
    url: 'https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2F0609aa6a-f082-4a1b-8918-cca02bcef38f.png?alt=media',
    filename: 'bg-pattern.webp',
    width: 1400,
  },
  {
    url: 'https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2Fc2f9f179-c440-4f94-b037-b22cd65e53c8.png?alt=media',
    filename: 'footer-bg.webp',
    width: 1400,
  }
];

const targetDir = 'c:/Users/sylve/Desktop/kudicall/public/images';

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function run() {
  for (const img of images) {
    const tempPng = path.join(targetDir, `temp_${img.filename}.png`);
    const finalWebp = path.join(targetDir, img.filename);

    console.log(`Downloading ${img.filename}...`);
    await download(img.url, tempPng);

    console.log(`Optimizing ${img.filename}...`);
    let transformer = sharp(tempPng);
    if (img.width) {
      transformer = transformer.resize({ width: img.width, withoutEnlargement: true });
    }
    await transformer.webp({ quality: 80 }).toFile(finalWebp);

    console.log(`Removing temporary file temp_${img.filename}.png...`);
    fs.unlinkSync(tempPng);

    console.log(`Finished ${img.filename}.`);
  }
  console.log('All images optimized successfully.');
}

run().catch(console.error);
