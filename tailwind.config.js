/** @type {import('tailwindcss').Config} */
const tokens = require('./src/tokens/design-tokens');

module.exports = {
    darkMode: ['class'],
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // ── shadcn CSS-variable color tokens (Tailwind v3 format) ──────────
        background:  'var(--background)',
        foreground:  'var(--foreground)',
        border:      'var(--border)',
        input:       'var(--input)',
        ring:        'var(--ring)',
        card:        { DEFAULT: 'var(--card)',    foreground: 'var(--card-foreground)' },
        popover:     { DEFAULT: 'var(--popover)', foreground: 'var(--popover-foreground)' },
        primary:     { DEFAULT: 'var(--primary)', foreground: 'var(--primary-foreground)' },
        secondary:   { DEFAULT: 'var(--secondary)', foreground: 'var(--secondary-foreground)' },
        muted:       { DEFAULT: 'var(--muted)',   foreground: 'var(--muted-foreground)' },
        accent:      { DEFAULT: 'var(--accent)',  foreground: 'var(--accent-foreground)' },
        destructive: { DEFAULT: 'var(--destructive)' },
        // ── Design token aliases ────────────────────────────────────────────
        space: tokens.colors.bg.deepSpace,
        surface: tokens.colors.bg.surface,
        panel: tokens.colors.bg.panel,
        'contrast-white': tokens.colors.contrast.white,
        charcoal: tokens.colors.contrast.charcoal,
        'text-primary': tokens.colors.text.primary,
        'text-muted': tokens.colors.text.muted,
        // ── Blueprint canonical names (Clinical Zen) ───────────────────────
        'deep-space': '#0D1117',
        'clinical-charcoal': '#1C2128',
        'neon-cyan': '#00F2FE',
        'neon-teal': '#4FACFE',
        // ── Desert Southwest palette ───────────────────────────────────────
        'desert-black': '#0A0C0E',
        'desert-stone': '#141618',
        'desert-surface': '#1C1F23',
        'sw-orange': '#E8622A',
        'sw-orange-light': '#F07A45',
        'cactus-green': '#4A7C59',
        'cactus-light': '#5A9C6E',
        'desert-sand': '#C4A882',
        'desert-mist': '#8A9BA8',
        'desert-white': '#F5F0EB',
        // ── Precision MedTech palette (V4) ────────────────────────────────
        'precision-dark': '#06080B',
        'precision-surface': '#0C1018',
        'precision-panel': '#111820',
        'precision-teal': '#00C4A6',
        'precision-teal-light': '#00E8C4',
        'precision-mint': '#A8F5E2',
        'precision-violet': '#6B5FE8',
      },
      fontFamily: {
        heading: tokens.typography.heading.stack,
        body: tokens.typography.body.stack,
      },
      backgroundImage: {
        'neon-gradient': `linear-gradient(135deg, ${tokens.colors.accent.cyan}, ${tokens.colors.accent.teal})`,
        'neon-gradient-h': `linear-gradient(90deg, ${tokens.colors.accent.cyan}, ${tokens.colors.accent.teal})`,
        'clinical-gradient': 'linear-gradient(to right, #00F2FE, #4FACFE)',
        'desert-gradient': 'linear-gradient(135deg, #E8622A 0%, #F07A45 50%, #C4A882 100%)',
        'desert-gradient-v': 'linear-gradient(to bottom, #E8622A, #C44E1E)',
      },
      boxShadow: {
        'neon-sm': tokens.shadows.neonSm,
        'neon-md': tokens.shadows.neonMd,
        'neon-lg': tokens.shadows.neonLg,
        glass: tokens.shadows.glass,
        'orange-sm': '0 0 12px rgba(232,98,42,0.2)',
        'orange-md': '0 0 28px rgba(232,98,42,0.38)',
        'orange-lg': '0 0 56px rgba(232,98,42,0.55)',
        'green-sm': '0 0 12px rgba(74,124,89,0.2)',
      },
      zIndex: {
        canvas: '10',
        content: '20',
        overlay: '30',
        modal: '50',
        toast: '60',
      },
      animation: {
        'neon-pulse': 'neonPulse 2.5s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
        marquee: 'marquee 40s linear infinite',
        'scroll-loop': 'scrollLoop 20s linear infinite',
      },
      keyframes: {
        neonPulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.65' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scrollLoop: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
