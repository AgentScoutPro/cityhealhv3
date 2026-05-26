'use client';

/**
 * S3_ServiceCore — Interactive Service Core
 *
 * Section 3 · Dark base · Bento grid array
 *
 * Architecture:
 *  - CSS Grid bento layout: 3-col × variable rows, asymmetric cell sizing
 *  - Each card is a hook point for its own GSAP ScrollTrigger reveal
 *  - Neon border tracks animate in via clipPath on scroll
 *  - id="s3-bento-grid" is the GSAP ScrollTrigger parent scroller
 *
 * Cell size map:
 *   [Featured: 2×2] [Tall: 1×2] [Wide: 2×1] [Standard: 1×1] ...
 */

const SERVICES = [
  {
    id: 'pain-management',
    title: 'Pain Management',
    body: 'Targeted injections, nerve blocks, and medication management for chronic and acute pain in Mesa and the Phoenix valley.',
    span: 'col-span-2 row-span-2',   // featured large cell
    accentColor: '#00F2FE',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="13" stroke="#00F2FE" strokeWidth="1.5"/>
        <path d="M16 9v7l4 4" stroke="#00F2FE" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'physical-therapy',
    title: 'Physical Therapy',
    body: 'Evidence-based rehab plans to restore strength, range of motion, and independence after injury or surgery.',
    span: 'col-span-1 row-span-2',
    accentColor: '#4FACFE',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M7 21l7-14 7 14" stroke="#4FACFE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.5 16h9" stroke="#4FACFE" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'spinal-decompression',
    title: 'Spinal Decompression',
    body: 'Computerized traction therapy for disc herniation and sciatica.',
    span: 'col-span-1 row-span-1',
    accentColor: '#00F2FE',
    icon: null,
  },
  {
    id: 'dry-needling',
    title: 'Dry Needling',
    body: 'Precision myofascial trigger-point release for muscle tension and pain.',
    span: 'col-span-1 row-span-1',
    accentColor: '#4FACFE',
    icon: null,
  },
  {
    id: 'neuropathy',
    title: 'Neuropathy Treatment',
    body: 'Regenerative and pharmacological protocols targeting peripheral nerve damage.',
    span: 'col-span-2 row-span-1',
    accentColor: '#00F2FE',
    icon: null,
  },
  {
    id: 'injury-recovery',
    title: 'Auto & Work Injury',
    body: 'Comprehensive injury documentation and recovery for MVA, workers\' comp, and personal injury cases.',
    span: 'col-span-1 row-span-1',
    accentColor: '#4FACFE',
    icon: null,
  },
];

function ServiceCard({ service }) {
  return (
    <article
      key={service.id}
      className={service.span}
      style={{
        position: 'relative',
        background: '#131920',
        border: '1px solid rgba(0, 242, 254, 0.12)',
        borderRadius: '8px',
        padding: 'clamp(1.5rem, 3vw, 2.5rem)',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'border-color 250ms ease, box-shadow 250ms ease',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        minHeight: service.span.includes('row-span-2') ? '320px' : '180px',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = `${service.accentColor}55`;
        e.currentTarget.style.boxShadow = `0 0 24px ${service.accentColor}22`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(0, 242, 254, 0.12)';
        e.currentTarget.style.boxShadow = 'none';
      }}
      // GSAP hook: data-gsap-reveal for staggered entrance
      data-gsap-reveal="true"
    >
      {/* Subtle corner accent */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '80px',
          height: '80px',
          background: `radial-gradient(circle at top right, ${service.accentColor}14, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />

      {service.icon && <div style={{ color: service.accentColor }}>{service.icon}</div>}

      <h3
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          fontSize: service.span.includes('col-span-2') ? 'clamp(1.4rem, 3vw, 2rem)' : 'clamp(1.1rem, 2.5vw, 1.5rem)',
          fontWeight: 700,
          color: '#E8EDF4',
          lineHeight: 1.1,
        }}
      >
        {service.title}
      </h3>

      <p
        style={{
          fontFamily: "'Noto Sans', sans-serif",
          fontSize: 'clamp(0.875rem, 1.3vw, 1rem)',
          lineHeight: 1.65,
          color: '#7E9BB5',
          maxWidth: '52ch',
        }}
      >
        {service.body}
      </p>

      <div style={{ marginTop: 'auto' }}>
        <span
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            fontSize: '0.78rem',
            color: service.accentColor,
            opacity: 0.8,
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
          }}
        >
          Learn More
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
        </span>
      </div>
    </article>
  );
}

export default function S3_ServiceCore() {
  return (
    <section
      id="section-services"
      aria-label="Our Services"
      style={{
        background: '#0D1117',
        padding: 'clamp(5rem, 10vw, 9rem) clamp(1.25rem, 5vw, 5rem)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* ── Section header ─────────────────────────────────────────────── */}
        <div style={{ marginBottom: '3.5rem' }}>
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
            What We Treat
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
              maxWidth: '22ch',
            }}
          >
            Advanced Care,
            <br />
            Precisely Delivered.
          </h2>
        </div>

        {/* ── Bento Grid ─────────────────────────────────────────────────── */}
        <div
          id="s3-bento-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridAutoRows: 'minmax(180px, auto)',
            gap: '1rem',
          }}
          className="bento-grid"
        >
          {SERVICES.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .bento-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .bento-grid {
            grid-template-columns: 1fr !important;
          }
          .bento-grid > * {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
