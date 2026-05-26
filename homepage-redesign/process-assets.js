#!/usr/bin/env node
'use strict';

/**
 * process-assets.js
 * City Health V2.0 — Video-to-WebP frame pipeline
 *
 * Usage: node process-assets.js [--section <id>] [--dry-run]
 *
 * Sections: hero | problem | bento | hub | footer | all (default)
 */

const { execSync, spawnSync } = require('child_process');
const path          = require('path');
const fs            = require('fs');
const os            = require('os');

const PROJECT_ROOT  = __dirname;
const ASSETS_ROOT   = path.join(PROJECT_ROOT, 'public/assets/scroll-sequences');
const SOURCE_ROOT   = path.join(os.homedir(), 'Desktop/CITY HEALTH V2.0');

const DRY_RUN       = process.argv.includes('--dry-run');
const SECTION_FILTER = (() => {
  const idx = process.argv.indexOf('--section');
  return idx !== -1 ? process.argv[idx + 1] : 'all';
})();

// ─── Colour helpers ───────────────────────────────────────────────────────────
const C = {
  reset:  '\x1b[0m',
  cyan:   '\x1b[36m',
  green:  '\x1b[32m',
  yellow: '\x1b[33m',
  red:    '\x1b[31m',
  dim:    '\x1b[2m',
  bold:   '\x1b[1m',
};
const log  = (msg) => console.log(msg);
const ok   = (msg) => console.log(`  ${C.green}✓${C.reset} ${msg}`);
const info = (msg) => console.log(`  ${C.cyan}⟳${C.reset} ${msg}`);
const warn = (msg) => console.log(`  ${C.yellow}⚠${C.reset}  ${msg}`);
const fail = (msg) => console.log(`  ${C.red}✗${C.reset} ${msg}`);

// ─── Step 1: Ensure ffmpeg ────────────────────────────────────────────────────
function ensureFFmpeg() {
  log(`\n${C.bold}[1/3] Checking ffmpeg${C.reset}`);

  const found = (() => {
    // Check PATH first
    try { execSync('ffmpeg -version', { stdio: 'ignore' }); return true; } catch {}
    // Check common Homebrew paths
    for (const p of ['/opt/homebrew/bin/ffmpeg', '/usr/local/bin/ffmpeg']) {
      if (fs.existsSync(p)) {
        // Expose to PATH for child processes
        process.env.PATH = `${path.dirname(p)}:${process.env.PATH}`;
        return true;
      }
    }
    return false;
  })();

  if (found) {
    const ver = execSync('ffmpeg -version 2>&1 | head -1', { encoding: 'utf8' }).trim();
    ok(`ffmpeg found — ${C.dim}${ver}${C.reset}`);
    return;
  }

  info('ffmpeg not found — installing via Homebrew (this may take a few minutes)…');
  if (DRY_RUN) { warn('DRY RUN: skipping brew install'); return; }

  execSync('brew install ffmpeg', { stdio: 'inherit' });

  // Re-add brew bin to PATH
  process.env.PATH = `/opt/homebrew/bin:${process.env.PATH}`;
  ok('ffmpeg installed');
}

// ─── Step 2: Ensure npm packages ─────────────────────────────────────────────
function ensurePackages() {
  log(`\n${C.bold}[2/3] Checking npm packages${C.reset}`);

  const pkgs = [];
  const tryRequire = (name) => {
    try { require.resolve(path.join(PROJECT_ROOT, 'node_modules', name)); return true; }
    catch { return false; }
  };

  if (!tryRequire('fluent-ffmpeg')) pkgs.push('fluent-ffmpeg');
  if (!tryRequire('sharp'))         pkgs.push('sharp');

  if (pkgs.length === 0) {
    ok('fluent-ffmpeg and sharp already installed');
    return;
  }

  info(`Installing: ${pkgs.join(', ')}…`);
  if (DRY_RUN) { warn('DRY RUN: skipping npm install'); return; }

  execSync(`npm install --save-dev ${pkgs.join(' ')}`, {
    cwd: PROJECT_ROOT,
    stdio: 'inherit',
  });
  ok(`Installed: ${pkgs.join(', ')}`);
}

// ─── Section config ───────────────────────────────────────────────────────────
// scaleMode:
//   'cover'  — scale up to fill, then centre-crop (most video sources)
//   'crop'   — crop to square first, then scale (S3 bento)
//   'pad'    — scale to fit, letterbox with black (mobile portrait)

const SECTIONS = [
  // ── S1 Hero Neural ──────────────────────────────────────────────────────────
  {
    id:         'hero-desktop',
    group:      'hero',
    label:      'S1 Hero Neural [desktop 1920×1080 @60fps → 240 frames]',
    input:      path.join(SOURCE_ROOT, 'HERO/hero-frame-001.mp4'),
    outputDir:  path.join(ASSETS_ROOT, 'hero-neural/desktop'),
    prefix:     'hero-frame',
    fps:        60,
    maxFrames:  240,
    w:          1920, h: 1080,
    scaleMode:  'cover',
  },
  {
    id:         'hero-mobile',
    group:      'hero',
    label:      'S1 Hero Neural [mobile 750×1334 @30fps → 120 frames]',
    input:      path.join(SOURCE_ROOT, 'HERO/hero-frame-001.mp4'),
    outputDir:  path.join(ASSETS_ROOT, 'hero-neural/mobile'),
    prefix:     'hero-frame',
    fps:        30,
    maxFrames:  120,
    w:          750,  h: 1334,
    scaleMode:  'pad',
  },

  // ── S2 Core Problem ──────────────────────────────────────────────────────────
  {
    id:         'problem-desktop',
    group:      'problem',
    label:      'S2 Core Problem [desktop 1920×1080 @30fps → 120 frames]',
    input:      path.join(SOURCE_ROOT, 'SECTION 2/problem-frame-001.mp4'),
    outputDir:  path.join(ASSETS_ROOT, 'core-problem/desktop'),
    prefix:     'problem-frame',
    fps:        30,
    maxFrames:  120,
    w:          1920, h: 1080,
    scaleMode:  'cover',
  },
  {
    id:         'problem-mobile',
    group:      'problem',
    label:      'S2 Core Problem [mobile 750×1334 @15fps → 60 frames]',
    input:      path.join(SOURCE_ROOT, 'SECTION 2/problem-frame-001.mp4'),
    outputDir:  path.join(ASSETS_ROOT, 'core-problem/mobile'),
    prefix:     'problem-frame',
    fps:        15,
    maxFrames:  60,
    w:          750,  h: 1334,
    scaleMode:  'pad',
  },

  // ── S3 Service Bento (4 loops — square 800×800) ───────────────────────────
  {
    id:         'bento-neuropathy',
    group:      'bento',
    label:      'S3 Bento [neuropathy 800×800 @30fps → 30 frames]',
    input:      path.join(SOURCE_ROOT, 'SECTION 3/neuropathy-frame-001.mp4'),
    outputDir:  path.join(ASSETS_ROOT, 'service-bento'),
    prefix:     'neuropathy-frame',
    fps:        30,
    maxFrames:  30,
    w:          800,  h: 800,
    scaleMode:  'crop',
  },
  {
    id:         'bento-physical',
    group:      'bento',
    label:      'S3 Bento [physical medicine 800×800 @30fps → 30 frames]',
    input:      path.join(SOURCE_ROOT, 'SECTION 3/physical-frame-001.mp4'),
    outputDir:  path.join(ASSETS_ROOT, 'service-bento'),
    prefix:     'physical-frame',
    fps:        30,
    maxFrames:  30,
    w:          800,  h: 800,
    scaleMode:  'crop',
  },
  {
    id:         'bento-weight',
    group:      'bento',
    label:      'S3 Bento [metabolic/weight 800×800 @30fps → 30 frames]',
    input:      path.join(SOURCE_ROOT, 'SECTION 3/weight-frame-001.mp4'),
    outputDir:  path.join(ASSETS_ROOT, 'service-bento'),
    prefix:     'weight-frame',
    fps:        30,
    maxFrames:  30,
    w:          800,  h: 800,
    scaleMode:  'crop',
  },
  {
    id:         'bento-aging',
    group:      'bento',
    label:      'S3 Bento [aging/HRT 800×800 @30fps → 30 frames]',
    input:      path.join(SOURCE_ROOT, 'SECTION 3/aging-frame-001.mp4'),
    outputDir:  path.join(ASSETS_ROOT, 'service-bento'),
    prefix:     'aging-frame',
    fps:        30,
    maxFrames:  30,
    w:          800,  h: 800,
    scaleMode:  'crop',
  },

  // ── S4 East Valley Hub (2 map loops — 1200×800) ───────────────────────────
  {
    id:         'hub-longmore',
    group:      'hub',
    label:      'S4 East Valley [longmore map 1200×800 @30fps → 60 frames]',
    input:      path.join(SOURCE_ROOT, 'SECTION 4/longmore-map-001.mp4'),
    outputDir:  path.join(ASSETS_ROOT, 'east-valley-hub'),
    prefix:     'longmore-map',
    fps:        30,
    maxFrames:  60,
    w:          1200, h: 800,
    scaleMode:  'cover',
  },
  {
    id:         'hub-power',
    group:      'hub',
    label:      'S4 East Valley [power road map 1200×800 @30fps → 60 frames]',
    input:      path.join(SOURCE_ROOT, 'SECTION 4/power-map-001.mp4'),
    outputDir:  path.join(ASSETS_ROOT, 'east-valley-hub'),
    prefix:     'power-map',
    fps:        30,
    maxFrames:  60,
    w:          1200, h: 800,
    scaleMode:  'cover',
  },

  // ── S5 Conversion Footer (background loop) ────────────────────────────────
  {
    id:         'footer-bg',
    group:      'footer',
    // Source file has a typo: "ooter-bg" instead of "footer-bg" — handled explicitly
    label:      'S5 Conversion Footer [bg 1920×1080 @30fps → 60 frames]',
    input:      path.join(SOURCE_ROOT, 'SECTION 5/ooter-bg-001.mp4'),
    outputDir:  path.join(ASSETS_ROOT, 'conversion-footer'),
    prefix:     'footer-bg',
    fps:        30,
    maxFrames:  60,
    w:          1920, h: 1080,
    scaleMode:  'cover',
  },
];

// ─── Build ffmpeg vf filter string ───────────────────────────────────────────
function buildFilter(scaleMode, w, h) {
  switch (scaleMode) {
    case 'cover':
      // Scale up so shortest dimension fills target, then centre-crop
      return `scale=${w}:${h}:force_original_aspect_ratio=increase,crop=${w}:${h}`;

    case 'crop':
      // Crop to centre square first, then scale to target
      return `crop=min(iw\\,ih):min(iw\\,ih),scale=${w}:${h}`;

    case 'pad':
      // Scale to fit within dimensions, pad remainder with black
      return `scale=${w}:${h}:force_original_aspect_ratio=decrease,` +
             `pad=${w}:${h}:(ow-iw)/2:(oh-ih)/2:black`;

    default:
      return `scale=${w}:${h}`;
  }
}

// ─── Process one section (PNG staging → sharp WebP) ─────────────────────────
//
// Two-stage pipeline:
//   1. ffmpeg  → lossless PNG frames in a temp dir (avoids libwebp dependency)
//   2. sharp   → PNG → WebP at quality 85, then deletes the temp PNGs
//
function processSection(s) {
  log(`\n  ${C.cyan}▶${C.reset} ${C.bold}${s.label}${C.reset}`);

  // Verify source
  if (!fs.existsSync(s.input)) {
    fail(`Source not found: ${C.dim}${s.input}${C.reset}`);
    return { id: s.id, ok: false, frames: 0 };
  }
  ok(`Source: ${C.dim}${path.basename(s.input)}${C.reset}`);

  // Create output dir
  fs.mkdirSync(s.outputDir, { recursive: true });

  // Clear existing WebP frames for this prefix
  const existing = fs.readdirSync(s.outputDir)
    .filter(f => f.startsWith(s.prefix) && f.endsWith('.webp'));
  if (existing.length > 0) {
    info(`Removing ${existing.length} stale frames…`);
    if (!DRY_RUN) existing.forEach(f => fs.unlinkSync(path.join(s.outputDir, f)));
  }

  if (DRY_RUN) {
    warn(`DRY RUN: would write to ${path.relative(PROJECT_ROOT, s.outputDir)}`);
    return { id: s.id, ok: true, frames: s.maxFrames };
  }

  // ── Stage 1: Extract PNG frames via ffmpeg ──────────────────────────────
  const tmpDir = path.join(s.outputDir, '.tmp-png');
  fs.mkdirSync(tmpDir, { recursive: true });

  const vf          = buildFilter(s.scaleMode, s.w, s.h);
  const pngPattern  = path.join(tmpDir, 'frame-%04d.png');

  // Args passed directly to spawnSync — no shell, no quoting needed
  const ffArgs = [
    '-i',       s.input,
    '-r',       String(s.fps),
    '-vframes', String(s.maxFrames),
    '-vf',      vf,         // parentheses/commas safe — no shell interpolation
    '-pix_fmt', 'rgb24',
    '-y',
    pngPattern,
  ];

  // Use spawnSync (no shell) so filter parentheses / commas aren't interpreted
  const ffResult = spawnSync('ffmpeg', ffArgs, { stdio: 'inherit' });
  if (ffResult.status !== 0) {
    fail(`ffmpeg PNG extraction failed for ${s.id}`);
    fs.rmSync(tmpDir, { recursive: true, force: true });
    return { id: s.id, ok: false, frames: 0 };
  }

  // ── Stage 2: Batch convert PNG → WebP via a single sharp child process ──
  const pngFiles = fs.readdirSync(tmpDir)
    .filter(f => f.endsWith('.png'))
    .sort();

  if (pngFiles.length === 0) {
    fail(`ffmpeg produced no PNG frames for ${s.id}`);
    fs.rmSync(tmpDir, { recursive: true, force: true });
    return { id: s.id, ok: false, frames: 0 };
  }

  info(`Converting ${pngFiles.length} PNG frames → WebP…`);

  // Build a self-contained async converter script and run it in one Node child
  const sharpPath  = path.join(PROJECT_ROOT, 'node_modules/sharp');
  const jobsJson   = JSON.stringify(
    pngFiles.map((f, i) => ({
      src:  path.join(tmpDir, f),
      dst:  path.join(s.outputDir, `${s.prefix}-${String(i + 1).padStart(3, '0')}.webp`),
    }))
  );

  const converterScript = `
    const sharp = require(${JSON.stringify(sharpPath)});
    const jobs  = ${jobsJson};
    (async () => {
      // Process in batches of 20 to avoid opening too many file handles
      const BATCH = 20;
      for (let i = 0; i < jobs.length; i += BATCH) {
        await Promise.all(
          jobs.slice(i, i + BATCH).map(j =>
            sharp(j.src).webp({ quality: 85, effort: 4 }).toFile(j.dst)
          )
        );
        process.stdout.write('.');
      }
      process.stdout.write('\\n');
    })().catch(e => { console.error(e); process.exit(1); });
  `;

  const tmpScript = path.join(tmpDir, '_convert.js');
  fs.writeFileSync(tmpScript, converterScript);

  try {
    execSync(`node "${tmpScript}"`, { stdio: 'inherit' });
  } catch (e) {
    fail(`sharp batch conversion failed for ${s.id}: ${e.message}`);
    fs.rmSync(tmpDir, { recursive: true, force: true });
    return { id: s.id, ok: false, frames: 0 };
  }

  // Count produced WebP files
  const produced = fs.readdirSync(s.outputDir)
    .filter(f => f.startsWith(s.prefix) && f.endsWith('.webp'));

  // Cleanup temp PNGs
  fs.rmSync(tmpDir, { recursive: true, force: true });

  const rel = path.relative(PROJECT_ROOT, s.outputDir);
  ok(`${produced.length} WebP frames → ${C.dim}${rel}/${C.reset}`);

  return { id: s.id, ok: produced.length > 0, frames: produced.length };
}

// ─── Print asset manifest (for ScrollCanvasSequencer wiring) ─────────────────
function printManifest(results) {
  log(`\n${C.bold}── Asset Manifest ─────────────────────────────────────${C.reset}`);
  log(`${C.dim}Copy into ScrollCanvasSequencer props / section configs:${C.reset}\n`);

  const groups = {};
  SECTIONS.forEach((s, i) => {
    if (!groups[s.group]) groups[s.group] = [];
    groups[s.group].push({ ...s, result: results[i] });
  });

  Object.entries(groups).forEach(([g, items]) => {
    log(`  ${C.cyan}${g.toUpperCase()}${C.reset}`);
    items.forEach(({ id, outputDir, prefix, maxFrames, w, h, result }) => {
      const rel    = path.relative(path.join(PROJECT_ROOT, 'public'), outputDir);
      const status = result?.ok ? C.green + '✓' + C.reset : C.red + '✗' + C.reset;
      log(`    ${status} /${rel}/`);
      log(`      ${C.dim}prefix: "${prefix}" | frames: ${result?.frames ?? maxFrames} | ${w}×${h}${C.reset}`);
    });
    log('');
  });
}

// ─── Update .gitignore for new paths ─────────────────────────────────────────
function updateGitignore() {
  const giPath = path.join(PROJECT_ROOT, '.gitignore');
  if (!fs.existsSync(giPath)) return;

  const content  = fs.readFileSync(giPath, 'utf8');
  const newPaths = [
    'public/assets/scroll-sequences/core-problem/**/*.webp',
    'public/assets/scroll-sequences/service-bento/**/*.webp',
    'public/assets/scroll-sequences/east-valley-hub/**/*.webp',
    'public/assets/scroll-sequences/conversion-footer/**/*.webp',
  ];

  const toAdd = newPaths.filter(p => !content.includes(p));
  if (toAdd.length === 0) return;

  fs.appendFileSync(giPath, '\n' + toAdd.join('\n') + '\n');
  ok(`.gitignore updated with ${toAdd.length} new asset paths`);
}

// ─── Main ─────────────────────────────────────────────────────────────────────
function main() {
  log(`\n${C.bold}${'═'.repeat(56)}`);
  log(`  CITY HEALTH V2.0 — Asset Pipeline`);
  log(`${'═'.repeat(56)}${C.reset}`);
  if (DRY_RUN) log(`  ${C.yellow}DRY RUN MODE — no files will be written${C.reset}`);
  log(`  Source : ${C.dim}${SOURCE_ROOT}${C.reset}`);
  log(`  Output : ${C.dim}${ASSETS_ROOT}${C.reset}`);
  log(`  Filter : ${C.dim}${SECTION_FILTER}${C.reset}`);

  ensureFFmpeg();
  ensurePackages();

  // Select sections to process
  const toProcess = SECTION_FILTER === 'all'
    ? SECTIONS
    : SECTIONS.filter(s => s.group === SECTION_FILTER || s.id === SECTION_FILTER);

  if (toProcess.length === 0) {
    fail(`No sections matched filter: ${SECTION_FILTER}`);
    process.exit(1);
  }

  log(`\n${C.bold}[3/3] Processing ${toProcess.length} section(s)${C.reset}`);

  const results = toProcess.map(s => processSection(s));

  updateGitignore();
  printManifest(results);

  const failed = results.filter(r => !r.ok);

  log(`${C.bold}── Result ──────────────────────────────────────────────${C.reset}`);
  if (failed.length === 0) {
    log(`\n  ${C.green}${C.bold}✅ Pipeline complete.${C.reset} All assets written to public/assets/\n`);
  } else {
    log(`\n  ${C.yellow}⚠  ${failed.length} section(s) failed:${C.reset}`);
    failed.forEach(r => log(`     • ${r.id}`));
    log('');
    process.exit(1);
  }
}

main();
