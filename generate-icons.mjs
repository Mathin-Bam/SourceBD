import sharp from 'sharp';
import fs from 'fs';

async function processLogo() {
  const input = 'public/logo.png';
  
  if (!fs.existsSync(input)) {
    console.error(`File not found: ${input}`);
    process.exit(1);
  }

  const metadata = await sharp(input).metadata();
  console.log(`Logo size: ${metadata.width}x${metadata.height}`);

  // The logo is stacked (emblem on top, text on bottom). 
  // We'll crop a square from the top-center to perfectly capture the ship emblem for the favicon.
  const cropSize = Math.min(metadata.width, Math.floor(metadata.height * 0.65));
  const leftOffset = Math.floor((metadata.width - cropSize) / 2);
  
  // App Icon (Next.js 13+ automatically uses this for all favicon links)
  await sharp(input)
    .extract({ left: leftOffset, top: 0, width: cropSize, height: cropSize })
    .resize(512, 512, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .toFile('src/app/icon.png');

  // Apple Touch Icon
  await sharp(input)
    .extract({ left: leftOffset, top: 0, width: cropSize, height: cropSize })
    .resize(180, 180, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .toFile('src/app/apple-icon.png');

  console.log('Successfully generated square favicons (app/icon.png and app/apple-icon.png)!');
}

processLogo().catch(console.error);
