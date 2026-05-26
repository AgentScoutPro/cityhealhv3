/** @type {import('tailwindcss').Config} */
const tokens = require('./src/tokens/design-tokens');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Token aliases
        space: tokens.colors.bg.deepSpace,
        surface: tokens.colors.bg.surface,
        panel: tokens.colors.bg.panel,
        'contrast-white': tokens.colors.contrast.white,
        charcoal: tokens.colors.contrast.charcoal,
        'text-primary': tokens.colors.text.primary,
        'text-muted': tokens.colors.text.muted,
        // Blueprint canonical names
        'deep-space': '#0D1117',
        'clinical-charcoal': '#1C2128',
        'neon-cyan': '#00F2FE',
        'neon-teal': '#4FACFE',
      },
      fontFamily: {
        heading: tokens.typography.heading.stack,
        body: tokens.typography.body.stack,
      },
      backgroundImage: {
        'neon-gradient': `linear-gradient(135deg, ${tokens.colors.accent.cyan}, ${tokens.colors.accent.teal})`,
        'neon-gradient-h': `linear-gradient(90deg, ${tokens.colors.accent.cyan}, ${tokens.colors.accent.teal})`,
        'clinical-gradient': 'linear-gradient(to right, #00F2FE, #4FACFE)',
      },
      boxShadow: {
        'neon-sm': tokens.shadows.neonSm,
        'neon-md': tokens.shadows.neonMd,
        'neon-lg': tokens.shadows.neonLg,
        glass: tokens.shadows.glass,
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
