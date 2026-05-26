'use client';

/**
 * S4_SonoranGrid — Sonoran Grid Alignment Hub
 *
 * Section 4 · Dark base · Geographic text-masked local access panels
 *
 * Architecture:
 *  - SVG <clipPath> text masking: city names act as "windows" into a neon
 *    gradient or image, creating the geographic text-mask visual effect
 *  - Each masked panel is a local SEO anchor: schema.org markup ready
 *  - Grid of city tiles that reveal local details on hover/click
 *  - GSAP hook point: data-gsap-stagger on each tile for entrance animation
 *
 * Local SEO strategy: each panel links to a city-specific service page,
 * boosting geographic relevance signals for Mesa / Phoenix metro searches.
 */

const LOCATIONS = [
  {
    city: 'Mesa',
    state: 'AZ',
    zip: '85204',
    tagline: 'Our Primary Clinic',
    highlight: true,
    href: '/locations/mesa-az',
    description: 'Main clinic location. Pain management and physical medicine.',
  },
  {
    city: 'Chandler',
    state: 'AZ',
    zip: '85225',
    tagline: 'Serving South East Valley',
    highlight: false,
    href: '/locations/chandler-az',
    description: 'Physical therapy and injury recovery for Chandler residents.',
  },
  {
    city: 'Gilbert',
    state: 'AZ',
    zip: '85296',
    tagline: 'East Valley Access',
    highlight: false,
    href: '/locations/gilbert-az',
    description: 'Chronic pain and neuropathy treatment near Gilbert.',
  },
  {
    city: 'Scottsdale',
    state: 'AZ',
    zip: '85251',
    tagline: 'North Valley Reach',
    highlight: false,
    href: '/locations/scottsdale-az',
    description: 'Spinal decompression and pain management for Scottsdale.',
  },
  {
    city: 'Tempe',
    state: 'AZ',
    zip: '85281',
    tagline: 'Central Valley',
    highlight: false,
    href: '/locations/tempe-az',
    description: 'Auto injury recovery and PT for Tempe patients.',
  },
  {
    city: 'Phoenix',
    state: 'AZ',
    zip: '85001',
    tagline: 'Metro-Wide Coverage',
    highlight: false,
    href: '/locations/phoenix-az',
    description: 'Advanced pain care serving all Phoenix neighborhoods.',
  },
];

function TextMaskBadge({ city }) {
  const id = `clip-${city.toLowerCase()}`;
  return (
    <svg
      width="100%"
      height="80"
      viewBox={`0 0 240 80`}
      aria-hidden="true"
      style={{ overflow: 'visible', display: 'block' }}
    >
      <defs>
        <linearGradient id={`grad-${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00F2FE" />
          <stop offset="100%" stopColor="#4FACFE" />
        </linearGradient>
        <clipPath id={id}>
          <text
            x="0"
            y="68"
            fontFamily="'Barlow Condensed', sans-serif"
            fontSize="76"
            fontWeight="800"
            textAnchor="start"
            style={{ textTransform: 'uppercase', letterSpacing: '0.02em' }}
          >
            {city.toUpperCase()}
          </text>
        </clipPath>
      </defs>
      {/* Neon gradient fill, masked to city name text */}
      <rect
        x="-10"
        y="-10"
        width="260"
        height="100"
        fill={`url(#grad-${id})`}
        clipPath={`url(#${id})`}
        opacity="0.9"
      />
      {/* Ghost text for depth */}
      <text
        x="0"
        y="68"
        fontFamily="'Barlow Condensed', sans-serif"
        fontSize="76"
        fontWeight="800"
        fill="none"
        stroke="rgba(255,255,255,0.06)"
        strokeWidth="1"
        style={{ textTransform: 'uppercase', letterSpacing: '0.02em' }}
      >
        {city.toUpperCase()}
      </text>
    </svg>
  );
}

function LocationPanel({ loc }) {
  return (
    <a
      href={loc.href}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        padding: 'clamp(1.25rem, 3vw, 2rem)',
        background: loc.highlight ? 'rgba(0, 242, 254, 0.04)' : '#131920',
        border: `1px solid ${loc.highlight ? 'rgba(0, 242, 254, 0.3)' : 'rgba(255,255,255,0.07)'}`,
        borderRadius: '6px',
        textDecoration: 'none',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'border-color 250ms ease, box-shadow 250ms ease, background 250ms ease',
        boxShadow: loc.highlight ? '0 0 20px rgba(0, 242, 254, 0.12)' : 'none',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(0, 242, 254, 0.45)';
        e.currentTarget.style.boxShadow = '0 0 24px rgba(0, 242, 254, 0.18)';
        e.currentTarget.style.background = 'rgba(0, 242, 254, 0.06)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = loc.highlight ? 'rgba(0, 242, 254, 0.3)' : 'rgba(255,255,255,0.07)';
        e.currentTarget.style.boxShadow = loc.highlight ? '0 0 20px rgba(0, 242, 254, 0.12)' : 'none';
        e.currentTarget.style.background = loc.highlight ? 'rgba(0, 242, 254, 0.04)' : '#131920';
      }}
      // schema.org LocalBusiness hook — hydrate with full schema in production
      itemScope
      itemType="https://schema.org/MedicalClinic"
      data-gsap-stagger="true"
      aria-label={`City Health AZ serving ${loc.city}, ${loc.state}`}
    >
      {/* Text-masked city name */}
      <div style={{ marginBottom: '0.25rem', overflow: 'hidden' }}>
        <TextMaskBadge city={loc.city} />
      </div>

      <p
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          fontSize: '0.7rem',
          color: '#00F2FE',
          opacity: 0.75,
        }}
        itemProp="addressLocality"
      >
        {loc.tagline} · {loc.state} {loc.zip}
      </p>

      <p
        style={{
          fontFamily: "'Noto Sans', sans-serif",
          fontSize: '0.9rem',
          lineHeight: 1.55,
          color: '#7E9BB5',
          maxWidth: '36ch',
        }}
        itemProp="description"
      >
        {loc.description}
      </p>
    </a>
  );
}

export default function S4_SonoranGrid() {
  return (
    <section
      id="section-sonoran"
      aria-label="Serving the Sonoran Valley — Local Access Points"
      style={{
        background: '#0D1117',
        padding: 'clamp(5rem, 10vw, 9rem) clamp(1.25rem, 5vw, 5rem)',
        borderTop: '1px solid rgba(0, 242, 254, 0.08)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* ── Section header ─────────────────────────────────────────────── */}
        <div style={{ marginBottom: '3.5rem', maxWidth: '650px' }}>
          <p
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              fontSize: '0.78rem',
              color: '#00F2FE',
              marginBottom: '0.75rem',
            }}
          >
            Serving the Phoenix Metro
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              fontSize: 'clamp(2.25rem, 5vw, 4rem)',
              fontWeight: 800,
              lineHeight: 1.0,
              color: '#E8EDF4',
            }}
          >
            Your Neighborhood.
            <br />
            Our Expertise.
          </h2>
          <p
            style={{
              fontFamily: "'Noto Sans', sans-serif",
              fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
              lineHeight: 1.7,
              color: '#7E9BB5',
              marginTop: '1.25rem',
              maxWidth: '56ch',
            }}
          >
            City Health AZ serves patients across the East and Central Valley. Find the
            care closest to you.
          </p>
        </div>

        {/* ── Geographic Grid ────────────────────────────────────────────── */}
        <div
          id="s4-geo-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem',
          }}
          className="geo-grid"
        >
          {LOCATIONS.map(loc => (
            <LocationPanel key={loc.city} loc={loc} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .geo-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .geo-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
