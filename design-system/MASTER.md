# CityHealthAZ — Design System MASTER
**Single source of truth.** All decisions recorded here override visual intuition.
Page-specific overrides live in `design-system/pages/<page-name>.md`.

---

## Concept
**Clinical Zen** — The visual language of advanced medical authority rendered through
a deep-space dark aesthetic with precision neon accents. Not cold, not sterile: calm,
competent, trustworthy. Every interaction feels intentional.

---

## Color System

| Role | Token | Hex | Usage |
|------|-------|-----|-------|
| Base Background | `--color-bg-deep-space` | `#0D1117` | All dark sections (1, 3, 4, 5) |
| Surface Lift | `--color-bg-surface` | `#131920` | Cards, bento cells |
| Panel Lift | `--color-bg-panel` | `#161D27` | Hover states, elevated panels |
| Accent Cyan | `--color-accent-cyan` | `#00F2FE` | Gradient start, borders, icons |
| Accent Teal | `--color-accent-teal` | `#4FACFE` | Gradient end, secondary glows |
| Contrast White | `--color-contrast-white` | `#FFFFFF` | Section 2 left panel background |
| Charcoal Text | `--color-contrast-charcoal` | `#1A1D23` | Text on white panels |
| Text Primary | `--color-text-primary` | `#E8EDF4` | Body text on dark |
| Text Muted | `--color-text-muted` | `#7E9BB5` | Supporting copy, labels |

### Gradients
```css
--gradient-neon:   linear-gradient(135deg, #00F2FE, #4FACFE);  /* diagonal */
--gradient-neon-h: linear-gradient(90deg, #00F2FE, #4FACFE);   /* horizontal */
```

---

## Typography

### Headings — Barlow Condensed (primary) / Space Grotesk (fallback)
- **Always uppercase** (`text-transform: uppercase`)
- Letter spacing: `0.04em` default, `0.18em` for labels/eyebrow text
- Weights: 400 / 600 / 700 / **800** (preferred for H1–H2)
- Line height: `1.0–1.1` for large display, `1.2` for smaller headings

### Body — Noto Sans (primary) / Inter (fallback)
- **Minimum 16px** on mobile
- Line height: `1.65–1.70` for maximum legibility
- Max line length: **52–65ch** (never wider — helps non-native readers and parsers)
- Color: `#E8EDF4` on dark, `#1A1D23` on white panels

```css
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800&family=Noto+Sans:wght@300;400;500;700&display=swap');
```

---

## Section Map

| # | ID | Theme | GSAP Root | Scroll Sequence Dir |
|---|----|----|-----------|---------------------|
| 1 | `#section-hero` | Dark + Canvas | `#s1-timeline-root` | `/assets/scroll-sequences/hero/` |
| 2 | `#section-problem` | Contrast Split | `#s2-timeline-root` | — |
| 3 | `#section-services` | Dark Bento | `#s3-bento-grid` | `/assets/scroll-sequences/services/` |
| 4 | `#section-sonoran` | Dark Geo Grid | `#s4-geo-grid` | `/assets/scroll-sequences/sonoran/` |
| 5 | `#section-footer` | Dark + Glass | `#s5-form-card` | — |

---

## GSAP ScrollTrigger Conventions

- **Scrub:** `1.2` for smooth cinematic feel; `0.4` for tight reactive sections
- **Ease:** `power3.out` default; `power1.inOut` for ambient/ambient reveals
- **Pin trigger:** `#redesign-scroll-root` (the StagingShell main container)
- **Reduced motion guard:** always wrap timelines in:
  ```js
  const mm = gsap.matchMedia();
  mm.add('(prefers-reduced-motion: no-preference)', () => { /* timeline */ });
  ```

---

## Frame Sequence Convention

- **Format:** JPEG, 70% quality, `0001.jpg … NNNN.jpg` (zero-padded 4 digits)
- **Resolution:** 1920×1080 source; canvas auto-scales to cover
- **Export from Google Flow / Runway:**
  ```bash
  ffmpeg -i clip.mp4 -vf fps=24 -q:v 3 %04d.jpg
  ```
- **Target frame counts:** Hero ~120f, Services ~60f, Sonoran ~60f

---

## Accessibility Baselines (WCAG 2.1 AA minimum)

- All text on dark: `#E8EDF4` on `#0D1117` → contrast ratio **9.8:1** ✓
- Muted text `#7E9BB5` on `#0D1117` → **4.7:1** ✓ (meets AA for normal text)
- CTA buttons: `#0D1117` on `#00F2FE` → **12.6:1** ✓
- Minimum touch targets: 44×44px
- All animations respect `prefers-reduced-motion`
- All form fields have associated `<label htmlFor>`
- SVG icons include `aria-hidden="true"`

---

## Anti-Patterns (Do Not Use)

- No emoji icons — use inline SVG from Lucide / Heroicons only
- No `width` / `height` CSS transitions for animation (use `transform` / `opacity`)
- No `#FFFFFF` backgrounds outside Section 2 contrast split
- No AI purple/pink (`#A855F7`, `#EC4899`) — this is a medical brand, not a SaaS
- No layout-shifting hover states (scale transforms must not affect flow)
- Never animate more than 2 elements per viewport simultaneously
