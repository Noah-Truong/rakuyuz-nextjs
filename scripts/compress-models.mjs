#!/usr/bin/env node

/**
 * GLB Model Compression Script
 * Uses gltf-transform to compress 3D models with Draco compression
 * 
 * Usage: node scripts/compress-models.mjs
 */

import { execSync } from 'child_process';
import { readdirSync, statSync, mkdirSync, existsSync, renameSync, unlinkSync, copyFileSync } from 'fs';
import { join, basename, extname } from 'path';

const MODELS_DIR = './public/models';
const BACKUP_DIR = './public/models/originals';

// Format bytes to human readable
function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Sanitize filename (remove spaces and special chars)
function sanitizeFilename(filename) {
  return filename
    .replace(/\s+/g, '-')           // Replace spaces with hyphens
    .replace(/\+/g, '-')            // Replace + with hyphens
    .replace(/[()]/g, '')           // Remove parentheses
    .replace(/--+/g, '-')           // Replace multiple hyphens with single
    .replace(/^-|-$/g, '')          // Remove leading/trailing hyphens
    .toLowerCase();
}

async function compressModels() {
  console.log('🔧 GLB Model Compression Script\n');
  console.log('='.repeat(50));
  
  // Create backup directory
  if (!existsSync(BACKUP_DIR)) {
    mkdirSync(BACKUP_DIR, { recursive: true });
    console.log(`📁 Created backup directory: ${BACKUP_DIR}\n`);
  }
  
  // Get all GLB files (excluding backup directory)
  const files = readdirSync(MODELS_DIR).filter(f => 
    extname(f).toLowerCase() === '.glb' && 
    statSync(join(MODELS_DIR, f)).isFile()
  );
  
  if (files.length === 0) {
    console.log('No GLB files found in', MODELS_DIR);
    return;
  }
  
  console.log(`Found ${files.length} GLB files to process:\n`);
  
  let totalOriginal = 0;
  let totalCompressed = 0;
  const results = [];
  
  for (const file of files) {
    const inputPath = join(MODELS_DIR, file);
    const originalSize = statSync(inputPath).size;
    totalOriginal += originalSize;
    
    // Create sanitized filename
    const sanitizedName = sanitizeFilename(basename(file, '.glb')) + '.glb';
    const tempPath = join(MODELS_DIR, '__temp_' + sanitizedName);
    const backupPath = join(BACKUP_DIR, file);
    
    console.log(`\n📦 Processing: ${file}`);
    console.log(`   Original size: ${formatBytes(originalSize)}`);
    
    try {
      // Use the locally installed gltf-transform via node_modules
      // Using simpler options that are more likely to work
      const command = `./node_modules/.bin/gltf-transform optimize "${inputPath}" "${tempPath}" --compress draco`;
      
      execSync(command, { stdio: 'pipe', timeout: 120000 });
      
      const compressedSize = statSync(tempPath).size;
      totalCompressed += compressedSize;
      const savings = ((1 - compressedSize / originalSize) * 100).toFixed(1);
      
      // Backup original (copy, don't move yet)
      copyFileSync(inputPath, backupPath);
      
      // Remove original
      unlinkSync(inputPath);
      
      // Move compressed file to final location
      const finalPath = join(MODELS_DIR, sanitizedName);
      renameSync(tempPath, finalPath);
      
      console.log(`   Compressed size: ${formatBytes(compressedSize)}`);
      console.log(`   Savings: ${savings}%`);
      console.log(`   ✓ Saved as: ${sanitizedName}`);
      
      results.push({
        original: file,
        compressed: sanitizedName,
        originalSize,
        compressedSize,
        savings: parseFloat(savings)
      });
      
    } catch (error) {
      console.log(`   ✗ Error compressing, will just rename`);
      
      // Just rename the file with sanitized name
      const finalPath = join(MODELS_DIR, sanitizedName);
      if (file !== sanitizedName) {
        copyFileSync(inputPath, backupPath);
        if (existsSync(finalPath)) {
          unlinkSync(finalPath);
        }
        renameSync(inputPath, finalPath);
        console.log(`   → Renamed to: ${sanitizedName}`);
      }
      
      // Clean up temp file if it exists
      if (existsSync(tempPath)) {
        unlinkSync(tempPath);
      }
      
      totalCompressed += originalSize;
      results.push({
        original: file,
        compressed: sanitizedName,
        originalSize,
        compressedSize: originalSize,
        savings: 0
      });
    }
  }
  
  // Summary
  console.log('\n' + '='.repeat(50));
  console.log('📊 COMPRESSION SUMMARY\n');
  console.log(`Total original size:   ${formatBytes(totalOriginal)}`);
  console.log(`Total compressed size: ${formatBytes(totalCompressed)}`);
  console.log(`Total savings:         ${formatBytes(totalOriginal - totalCompressed)} (${((1 - totalCompressed / totalOriginal) * 100).toFixed(1)}%)`);
  console.log(`\nOriginal files backed up to: ${BACKUP_DIR}`);
  
  // Print filename mapping for updating code
  const renames = results.filter(r => r.original !== r.compressed);
  if (renames.length > 0) {
    console.log('\n📝 FILENAME CHANGES (update your code):\n');
    for (const r of renames) {
      console.log(`  "/models/${r.original}"`);
      console.log(`  → "/models/${r.compressed}"\n`);
    }
  }
}

compressModels().catch(console.error);
