/**
 * Image Optimization Script
 * Converts all PNG/JPG → WebP using sharp
 * - Hero images: quality 80
 * - Gallery images: quality 70
 * - All others: quality 75
 * Replaces original files in-place (keeps .png/.jpg for fallback, adds .webp)
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const IMAGE_DIR = path.join(__dirname, '..', 'public', 'images');

// Quality rules per filename pattern
function getQuality(filename) {
  const name = filename.toLowerCase();
  if (name.startsWith('hero') || name.startsWith('svc_hero'))   return 80;
  if (name.startsWith('gallery') || name.includes('gallery'))    return 70;
  if (name.startsWith('avatar'))                                  return 75;
  return 75; // default (cta, floral, svc_*)
}

async function optimizeImages() {
  const files = fs.readdirSync(IMAGE_DIR);
  const targets = files.filter(f => /\.(png|jpg|jpeg)$/i.test(f));

  console.log(`\n🖼  Found ${targets.length} images to optimize\n`);

  let totalBefore = 0;
  let totalAfter  = 0;
  const results   = [];

  for (const file of targets) {
    const inputPath  = path.join(IMAGE_DIR, file);
    const webpName   = file.replace(/\.(png|jpg|jpeg)$/i, '.webp');
    const outputPath = path.join(IMAGE_DIR, webpName);

    const quality    = getQuality(file);
    const sizeBefore = fs.statSync(inputPath).size;

    try {
      await sharp(inputPath)
        .webp({ quality, effort: 6 })   // effort 6 = good compression, not too slow
        .toFile(outputPath);

      const sizeAfter = fs.statSync(outputPath).size;
      const saved     = ((1 - sizeAfter / sizeBefore) * 100).toFixed(1);

      totalBefore += sizeBefore;
      totalAfter  += sizeAfter;

      results.push({ file, webpName, sizeBefore, sizeAfter, saved, quality });
      console.log(`  ✅  ${file.padEnd(35)} ${(sizeBefore/1024).toFixed(0).padStart(5)}KB  →  ${(sizeAfter/1024).toFixed(0).padStart(4)}KB  (-${saved}%)  [q${quality}]`);
    } catch (err) {
      console.error(`  ❌  ${file}: ${err.message}`);
    }
  }

  const totalSavedKB = ((totalBefore - totalAfter) / 1024).toFixed(0);
  const totalSavedPct = ((1 - totalAfter / totalBefore) * 100).toFixed(1);

  console.log(`\n${'─'.repeat(70)}`);
  console.log(`  📦  Before : ${(totalBefore / 1024 / 1024).toFixed(2)} MB`);
  console.log(`  📦  After  : ${(totalAfter  / 1024 / 1024).toFixed(2)} MB`);
  console.log(`  💾  Saved  : ${(totalSavedKB / 1024).toFixed(2)} MB  (${totalSavedPct}% reduction)`);
  console.log(`${'─'.repeat(70)}\n`);

  console.log('✔  WebP files written. Old PNGs/JPGs kept as fallback.\n');
}

optimizeImages().catch(console.error);
