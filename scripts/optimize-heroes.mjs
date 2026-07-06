#!/usr/bin/env node
/**
 * Hero image optimizer — converts PNG hero images to WebP
 *
 * Usage:
 *   cd gesedge
 *   npm install sharp --save-dev   (if not already installed)
 *   node scripts/optimize-heroes.mjs
 *
 * Or as a one-liner:
 *   cd gesedge && npm install sharp --save-dev && node scripts/optimize-heroes.mjs
 */

import sharp from 'sharp';
import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.join(__dirname, '..', 'public', 'images');

const HERO_FILES = [
  'hero-home.png',
  'hero-bloodline.png',
  'hero-docproc.png',
  'hero-pjcs.png',
];

const MAX_WIDTH = 1920;
const WEBP_QUALITY = 80;

function formatBytes(bytes) {
  if (bytes < 1024) return bytes + ' B';
  const mb = bytes / (1024 * 1024);
  if (mb >= 1) return mb.toFixed(2) + ' MB';
  return (bytes / 1024).toFixed(1) + ' KB';
}

async function optimizeImage(filename) {
  const inputPath = path.join(imagesDir, filename);
  const outputFilename = filename.replace(/\.png$/i, '.webp');
  const outputPath = path.join(imagesDir, outputFilename);

  const inputStat = await stat(inputPath);
  const inputSize = inputStat.size;

  const image = sharp(inputPath);
  const metadata = await image.metadata();

  let pipeline = image;
  if (metadata.width > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }

  await pipeline
    .webp({ quality: WEBP_QUALITY })
    .toFile(outputPath);

  const outputStat = await stat(outputPath);
  const outputSize = outputStat.size;
  const reduction = ((1 - outputSize / inputSize) * 100).toFixed(1);

  return {
    filename,
    outputFilename,
    inputSize,
    outputSize,
    originalDimensions: `${metadata.width}x${metadata.height}`,
    reduction,
  };
}

async function main() {
  console.log('=== Hero Image Optimization ===\n');
  console.log(`Source directory: ${imagesDir}`);
  console.log(`Max width: ${MAX_WIDTH}px | WebP quality: ${WEBP_QUALITY}\n`);

  const results = [];

  for (const file of HERO_FILES) {
    try {
      console.log(`Processing ${file}...`);
      const result = await optimizeImage(file);
      results.push(result);
      console.log(`  -> ${result.outputFilename} created`);
    } catch (err) {
      console.error(`  ERROR processing ${file}: ${err.message}`);
    }
  }

  console.log('\n=== Results ===\n');
  console.log(
    'File'.padEnd(22) +
    'Original'.padStart(12) +
    'Dimensions'.padStart(14) +
    'WebP'.padStart(12) +
    'Savings'.padStart(10)
  );
  console.log('-'.repeat(70));

  let totalOriginal = 0;
  let totalWebp = 0;

  for (const r of results) {
    totalOriginal += r.inputSize;
    totalWebp += r.outputSize;
    console.log(
      r.filename.padEnd(22) +
      formatBytes(r.inputSize).padStart(12) +
      r.originalDimensions.padStart(14) +
      formatBytes(r.outputSize).padStart(12) +
      `${r.reduction}%`.padStart(10)
    );
  }

  console.log('-'.repeat(70));
  const totalReduction = ((1 - totalWebp / totalOriginal) * 100).toFixed(1);
  console.log(
    'TOTAL'.padEnd(22) +
    formatBytes(totalOriginal).padStart(12) +
    ''.padStart(14) +
    formatBytes(totalWebp).padStart(12) +
    `${totalReduction}%`.padStart(10)
  );

  console.log('\nOriginal PNGs preserved. WebP files created alongside them.');
}

main().catch(console.error);
