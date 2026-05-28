'use client';

import { useState } from 'react';

const SERVICES = [
  {
    id: 'pain',
    index: '01',
    title: 'Pain Management',
    tag: 'Interventional Medicine',
    body: 'Precision-targeted injections, nerve blocks, and regenerative protocols that address the source of chronic pain — not just the symptom. Back pain, joint pain, sciatica, and arthritis treated without surgery.',
    cta: 'Explore Pain Care',
    href: '/services/pain-management/',
    accentStart: '#E8622A',
    accentEnd: '#F07A45',
    glowColor: 'rgba(232,98,42,0.18)',
    glowHex: '232,98,42',
  },
  {
    id: 'neuro',
    index: '02',
    title: 'Neuropathy Treatment',
    tag: 'RST-Sanexas Protocol',
    body: 'Pharmaceutical-grade electronic cell signaling targets damaged peripheral nerve pathways. Silence burning, tingling, and numbness at the source — often in as few as 6 weeks.',
    cta: 'Explore Neuropathy Care',
    href: '/services/neuropathy/',
    accentStart: '#4A7C59',
    accentEnd: '#5A9C6E',
    glowColor: 'rgba(74,124,89,0.18)',
    glowHex: '74,124,89',
  },
  {
    id: 'physmed',
    index: '03',
    title: 'Physical Medicine',
    tag: 'Integrated Biomechanics',
    body: 'Physicians, chiropractors, and PTs working in tandem to realign your structural framework, restore mobility, and eliminate mechanical pain — no surgery, no referral chain.',
    cta: 'Explore Physical Med',
    href: '/services/physical-medicine/',
    accentStart: '#C4A882',
    accentEnd: '#D4B898',
    glowColor: 'rgba(196,168,130,0.15)',
    glowHex: '196,168,130',
  },
  {
    id: 'regen',
    index: '04',
    title: 'Anti-Aging & HRT',
    tag: 'Longevity & Cellular Repair',
    body: 'Physician-supervised hormone replacement, metabolic optimization via Tirzepatide, IV nutrition therapy, and cellular anti-aging treatments — engineered for performance at any age.',
    cta: 'Explore Longevity Care',
    href: '/services/anti-aging/',
    accentStart: '#E8622A',
    accentEnd: '#C4A882',
    glowColor: 'rgba(232,98,42,0.15)',
    glowHex: '232,98,42',
  },
];

function ServiceCard({ service }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '440px',
        padding: '2rem',
        background: hovered
          ? 'rgba(26,28,30,0.95)'
          : 'rgba(18,20,22,0.85)',
        border: `1px solid ${hovered ? `rgba(${service.glowHex},0.35)` : 'rgba(255,255,255,0.06)'}`,
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderRadius: '4px',
        overflow: 'hidden',
        transition: 'border-color 350ms ease, box-shadow 350ms ease, background 350ms ease',
        boxShadow: hovered
          ? `0 0 0 1px rgba(${service.glowHex},0.15), 0 12px 60px ${service.glowColor}, inset 0 1px 0 rgba(255,255,255,0.06)`
          : 'inset 0 1px 0 rgba(255,255,255,0.03)',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Radial glow on hover */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(ellipse at 50% 0%, ${service.glowColor} 0%, transparent 60%)`,
          opacity: hovered ? 1 : 0,
          transition: 'opacity 400ms ease',
          pointerEvents: 'none',
        }}
      />

      {/* Top gradient accent line */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: `linear-gradient(90deg, ${service.accentStart}, ${service.accentEnd}, transparent)`,
          opacity: hovered ? 1 : 0.3,
          transition: 'opacity 350ms ease',
        }}
      />

      {/* Card body */}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '1.25rem', flex: 1 }}>

        {/* Header: tag + index */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <span
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              fontSize: '0.65rem',
              fontWeight: 700,
              color: hovered ? service.accentStart : '#5A6A75',
              transition: 'color 300ms ease',
            }}
          >
            {service.tag}
          </span>
          <span
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: '2.5rem',
              fontWeight: 900,
              color: 'rgba(255,255,255,0.04)',
              letterSpacing: '-0.04em',
              lineHeight: 1,
            }}
          >
            {service.index}
          </span>
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            textTransform: 'uppercase',
            fontSize: 'clamp(1.4rem, 2.2vw, 1.75rem)',
            fontWeight: 900,
            letterSpacing: '0.02em',
            lineHeight: 1.05,
            color: hovered ? '#F5F0EB' : '#C8CDD5',
            transition: 'color 300ms ease',
          }}
        >
          {service.title}
        </h3>

        {/* Body */}
        <p
          style={{
            fontFamily: "'Noto Sans', sans-serif",
            fontSize: '0.82rem',
            lineHeight: 1.8,
            color: '#6E7E8A',
            fontWeight: 300,
            flex: 1,
          }}
        >
          {service.body}
        </p>
      </div>

      {/* Card footer */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          marginTop: '1.75rem',
          paddingTop: '1.25rem',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <a
          href={service.href}
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            textTransform: 'uppercase',
            letterSpacing: '0.16em',
            fontSize: '0.75rem',
            fontWeight: 700,
            color: hovered ? service.accentStart : '#5A6A75',
            textDecoration: 'none',
            transition: 'color 300ms ease',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            cursor: 'pointer',
          }}
        >
          {service.cta}
          <svg
            width="12" height="12" viewBox="0 0 12 12" fill="none"
            style={{
              transform: hovered ? 'translateX(3px)' : 'translateX(0)',
              transition: 'transform 300ms ease',
              color: 'inherit',
            }}
            aria-hidden="true"
          >
            <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>

        {/* Mini accent dot */}
        <div
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: service.accentStart,
            opacity: hovered ? 0.8 : 0.2,
            transition: 'opacity 300ms ease',
          }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

export default function DesertServiceGrid() {
  return (
    <section
      id="service-section"
      style={{
        background: '#0A0C0E',
        padding: 'clamp(5rem,10vw,9rem) clamp(1.25rem,5vw,5rem)',
        borderTop: '1px solid rgba(255,255,255,0.04)',
        position: 'relative',
      }}
      aria-label="City Health AZ service pillars"
    >
      {/* Subtle background texture */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(232,98,42,0.03) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Section header */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0',
            marginBottom: 'clamp(3rem,6vw,5rem)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <div
              style={{ width: '24px', height: '1px', background: 'rgba(232,98,42,0.5)' }}
              aria-hidden="true"
            />
            <p
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                textTransform: 'uppercase',
                letterSpacing: '0.28em',
                fontSize: '0.72rem',
                fontWeight: 700,
                color: '#E8622A',
              }}
            >
              Integrated Pathways
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '1.5rem',
            }}
          >
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                textTransform: 'uppercase',
                fontWeight: 900,
                fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
                letterSpacing: '-0.03em',
                lineHeight: 0.92,
                color: '#F5F0EB',
              }}
            >
              THE{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #E8622A 0%, #F07A45 40%, #C4A882 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                RESTORATIONS
              </span>
            </h2>
            <p
              style={{
                fontFamily: "'Noto Sans', sans-serif",
                fontSize: '0.875rem',
                color: '#6E7E8A',
                lineHeight: 1.75,
                maxWidth: '38ch',
                fontWeight: 300,
              }}
            >
              Four integrated clinical pathways — each built around your biology, not around insurance billing codes.
            </p>
          </div>
        </div>

        {/* Bento grid */}
        <div
          id="service-grid-desert"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1rem',
          }}
        >
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div
          style={{
            marginTop: '3rem',
            padding: '2rem',
            background: 'rgba(20,22,24,0.4)',
            border: '1px solid rgba(232,98,42,0.12)',
            borderRadius: '4px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                fontSize: '1.1rem',
                fontWeight: 800,
                color: '#F5F0EB',
                marginBottom: '0.25rem',
              }}
            >
              Not sure which pathway is right for you?
            </p>
            <p
              style={{
                fontFamily: "'Noto Sans', sans-serif",
                fontSize: '0.82rem',
                color: '#6E7E8A',
              }}
            >
              Book a free 15-minute discovery call with our care team.
            </p>
          </div>
          <a
            href="#desert-cta-section"
            onClick={e => {
              e.preventDefault();
              document.getElementById('desert-cta-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
              fontSize: '0.85rem',
              fontWeight: 700,
              padding: '0.75rem 2rem',
              background: 'linear-gradient(135deg, #E8622A, #C44E1E)',
              color: '#FFFFFF',
              borderRadius: '3px',
              textDecoration: 'none',
              cursor: 'pointer',
              boxShadow: '0 0 20px rgba(232,98,42,0.25)',
              transition: 'box-shadow 250ms ease, transform 250ms ease',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = '0 0 36px rgba(232,98,42,0.5)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = '0 0 20px rgba(232,98,42,0.25)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Book Discovery Call
          </a>
        </div>

      </div>
    </section>
  );
}
