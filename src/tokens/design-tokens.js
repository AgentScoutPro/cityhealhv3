/**
 * CityHealthAZ — Global Design Token System
 * Clinical Zen · Deep Space Dark · Neon Cyan/Teal
 *
 * Single source of truth consumed by:
 *   - tailwind.config.js (extended theme)
 *   - globals.css (CSS custom properties)
 *   - GSAP timelines (JS-side color references)
 */

// ─── COLOR SYSTEM ─────────────────────────────────────────────────────────────

const colors = {
  bg: {
    deepSpace: '#0D1117',   // base layer — Section 1, 3, 4, 5
    surface: '#131920',     // elevated card surfaces
    panel: '#161D27',       // subtle panel lift above deepSpace
  },
  accent: {
    cyan: '#00F2FE',         // gradient start — neon glow source
    teal: '#4FACFE',         // gradient end — cooler transition
    glow: 'rgba(0, 242, 254, 0.18)', // ambient bloom for box-shadow
  },
  contrast: {
    white: '#FFFFFF',        // Section 2 stark-white background half
    charcoal: '#1A1D23',     // Section 2 dark text on white panels
    offWhite: '#F4F7FA',     // body copy on white ground
  },
  text: {
    primary: '#E8EDF4',      // high-legibility on dark bg
    muted: '#7E9BB5',        // secondary / supporting copy
    inverse: '#0D1117',      // text on white-contrast sections
  },
  border: {
    neon: 'rgba(0, 242, 254, 0.35)',
    subtle: 'rgba(255, 255, 255, 0.08)',
    glass: 'rgba(255, 255, 255, 0.12)',
  },
  form: {
    glassBg: 'rgba(13, 17, 23, 0.72)',
    glowTrack: 'rgba(0, 242, 254, 0.55)',
  },
};

// ─── TYPOGRAPHY ───────────────────────────────────────────────────────────────

const typography = {
  heading: {
    // All-caps geometric sans-serif — modern clinical authority
    stack: ['Barlow Condensed', 'Space Grotesk', 'ui-sans-serif', 'system-ui'],
    googleImport:
      "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap",
    transform: 'uppercase',
    tracking: '0.04em',
    weights: { regular: 400, semibold: 600, bold: 700, extrabold: 800 },
  },
  body: {
    // Crisp, ultra-legible — optimized for non-native speakers + SEO parsing
    stack: ['Noto Sans', 'Inter', 'ui-sans-serif', 'system-ui'],
    googleImport:
      "https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;700&family=Inter:wght@300;400;500;600&display=swap",
    lineHeight: 1.7,
    minBodySize: '16px',
    weights: { light: 300, regular: 400, medium: 500, semibold: 600 },
  },
};

// ─── SPACING SCALE ────────────────────────────────────────────────────────────

const spacing = {
  sectionPadY: 'clamp(5rem, 10vw, 9rem)',
  sectionPadX: 'clamp(1.25rem, 5vw, 5rem)',
  containerMax: '1280px',
  gridGap: '1.5rem',
  bentoGap: '1rem',
};

// ─── SHADOWS ──────────────────────────────────────────────────────────────────

const shadows = {
  neonSm: '0 0 8px rgba(0, 242, 254, 0.35)',
  neonMd: '0 0 20px rgba(0, 242, 254, 0.45), 0 0 40px rgba(79, 172, 254, 0.2)',
  neonLg: '0 0 40px rgba(0, 242, 254, 0.55), 0 0 80px rgba(79, 172, 254, 0.25)',
  glass: '0 8px 32px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255,255,255,0.08)',
};

// ─── ANIMATION ────────────────────────────────────────────────────────────────

const animation = {
  // GSAP default ease — used across ScrollTrigger timelines
  ease: 'power3.out',
  easeSoft: 'power1.inOut',
  duration: {
    micro: 0.15,
    fast: 0.3,
    standard: 0.6,
    slow: 1.0,
    cinematic: 1.6,
  },
  // ScrollTrigger scrub values
  scrub: {
    smooth: 1.2,
    tight: 0.4,
  },
  // Frame sequence playback
  frameSequence: {
    totalFrames: 120,   // update per actual exported sequence length
    fps: 24,
  },
};

// ─── SECTION REGISTER ────────────────────────────────────────────────────────
// Maps section IDs to GSAP trigger targets and scroll-sequence asset paths.

const sections = {
  s1Hero: {
    id: 'section-hero',
    trigger: '#section-hero',
    theme: 'dark',
    frameDir: '/assets/scroll-sequences/hero/',
  },
  s2Problem: {
    id: 'section-problem',
    trigger: '#section-problem',
    theme: 'contrast',  // white/charcoal split
    frameDir: null,
  },
  s3Services: {
    id: 'section-services',
    trigger: '#section-services',
    theme: 'dark',
    frameDir: '/assets/scroll-sequences/services/',
  },
  s4Sonoran: {
    id: 'section-sonoran',
    trigger: '#section-sonoran',
    theme: 'dark',
    frameDir: '/assets/scroll-sequences/sonoran/',
  },
  s5Footer: {
    id: 'section-footer',
    trigger: '#section-footer',
    theme: 'dark',
    frameDir: null,
  },
};

// ─── Z-INDEX SCALE ───────────────────────────────────────────────────────────

const zIndex = {
  canvas: 10,
  content: 20,
  overlay: 30,
  modal: 50,
  toast: 60,
};

module.exports = { colors, typography, spacing, shadows, animation, sections, zIndex };
