'use client';

import { useState } from 'react';

const LOCATIONS = [
  {
    id: 'longmore',
    label: 'Central Mesa',
    name: 'Longmore Clinic',
    address: '1303 S Longmore #8',
    cityState: 'Mesa, AZ 85202',
    coverage: ['Mesa', 'Tempe', 'Chandler', 'Phoenix'],
    hours: 'Mon – Fri  8am – 6pm',
    phone: '(480) 649-5297',
    phoneHref: 'tel:+14806495297',
    maps: 'https://maps.app.goo.gl/Xpu1YzR7T1DPsNK1A',
    accentColor: '#E8622A',
    bgWord: 'LONGMORE',
  },
  {
    id: 'power',
    label: 'East Mesa',
    name: 'Power Road Clinic',
    address: '1234 S Power Rd, Suite 202',
    cityState: 'Mesa, AZ 85206',
    coverage: ['East Mesa', 'Gilbert', 'Apache Junction', 'Queen Creek'],
    hours: 'Mon – Fri  8am – 6pm',
    phone: '(480) 649-5297',
    phoneHref: 'tel:+14806495297',
    maps: 'https://maps.app.goo.gl/Tz165GJY2pBQNi996',
    accentColor: '#4A7C59',
    bgWord: 'POWER',
  },
];

const INSURANCES = [
  'MEDICARE', 'UNITEDHEALTHCARE', 'BCBS', 'CIGNA',
  'AETNA', 'HUMANA', 'TRICARE', 'HEALTH NET', 'UMR', 'MEDICAID',
];

const SERVICE_AREAS = [
  'Mesa', 'Chandler', 'Gilbert', 'Scottsdale', 'Tempe', 'Phoenix',
];

function LocationCard({ loc }) {
  const [hovered, setHovered] = useState(false);
  const isOrange = loc.accentColor === '#E8622A';
  const glowHex = isOrange ? '232,98,42' : '74,124,89';

  return (
    <div
      className="location-card-desert"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: hovered
          ? 'rgba(22,24,26,0.95)'
          : 'rgba(16,18,20,0.75)',
        border: `1px solid ${hovered ? `rgba(${glowHex},0.35)` : 'rgba(255,255,255,0.06)'}`,
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderRadius: '4px',
        padding: '2.5rem 2rem 2rem',
        transition: 'border-color 350ms ease, box-shadow 350ms ease, background 350ms ease',
        boxShadow: hovered ? `0 0 50px rgba(${glowHex},0.1), inset 0 1px 0 rgba(255,255,255,0.06)` : 'none',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background typography watermark */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: '-1rem',
          bottom: '-1rem',
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: 'clamp(5rem, 10vw, 8rem)',
          fontWeight: 900,
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.025)',
          letterSpacing: '-0.04em',
          lineHeight: 1,
          pointerEvents: 'none',
          transition: 'opacity 400ms ease',
          opacity: hovered ? 0.4 : 1,
          userSelect: 'none',
        }}
      >
        {loc.bgWord}
      </div>

      {/* Top accent line */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: `linear-gradient(90deg, ${loc.accentColor}, transparent)`,
          opacity: hovered ? 1 : 0.4,
          transition: 'opacity 350ms ease',
        }}
      />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>

        {/* Label */}
        <span
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            textTransform: 'uppercase',
            letterSpacing: '0.25em',
            fontSize: '0.7rem',
            fontWeight: 700,
            color: loc.accentColor,
            display: 'block',
            marginBottom: '0.75rem',
          }}
        >
          {loc.label}
        </span>

        {/* Clinic name */}
        <h3
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            textTransform: 'uppercase',
            fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
            fontWeight: 900,
            letterSpacing: '0.02em',
            color: '#F5F0EB',
            marginBottom: '1.5rem',
          }}
        >
          {loc.name}
        </h3>

        {/* Address block */}
        <div style={{ marginBottom: '1.5rem' }}>
          <p
            style={{
              fontFamily: "'Noto Sans', sans-serif",
              fontSize: '0.875rem',
              color: '#C4A882',
              lineHeight: 1.6,
              fontWeight: 400,
            }}
          >
            {loc.address}
            <br />
            {loc.cityState}
          </p>
        </div>

        {/* Hours */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            marginBottom: '1.5rem',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <circle cx="7" cy="7" r="6" stroke={loc.accentColor} strokeWidth="1.2" strokeOpacity="0.6" />
            <path d="M7 4v3l2 1.5" stroke={loc.accentColor} strokeWidth="1.2" strokeOpacity="0.6" strokeLinecap="round" />
          </svg>
          <span
            style={{
              fontFamily: "'Noto Sans', sans-serif",
              fontSize: '0.78rem',
              color: '#6E7E8A',
            }}
          >
            {loc.hours}
          </span>
        </div>

        {/* Coverage pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginBottom: '2rem',
          }}
        >
          {loc.coverage.map(area => (
            <span
              key={area}
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontSize: '0.65rem',
                fontWeight: 600,
                padding: '0.3rem 0.7rem',
                background: `rgba(${glowHex},0.08)`,
                border: `1px solid rgba(${glowHex},0.2)`,
                borderRadius: '2px',
                color: loc.accentColor,
              }}
            >
              {area}
            </span>
          ))}
        </div>

        {/* Action row */}
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <a
            href={loc.maps}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              fontSize: '0.78rem',
              fontWeight: 700,
              padding: '0.6rem 1.25rem',
              background: `linear-gradient(135deg, ${loc.accentColor}, ${isOrange ? '#C44E1E' : '#3A6447'})`,
              color: '#FFFFFF',
              borderRadius: '3px',
              textDecoration: 'none',
              cursor: 'pointer',
              boxShadow: `0 0 16px rgba(${glowHex},0.25)`,
              transition: 'box-shadow 250ms ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 0 28px rgba(${glowHex},0.45)`)}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = `0 0 16px rgba(${glowHex},0.25)`)}
          >
            Get Directions
          </a>
          <a
            href={loc.phoneHref}
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              fontSize: '0.78rem',
              fontWeight: 700,
              padding: '0.6rem 1.25rem',
              background: 'rgba(255,255,255,0.04)',
              color: '#C4A882',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '3px',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'border-color 200ms ease, color 200ms ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(196,168,130,0.4)';
              e.currentTarget.style.color = '#F5F0EB';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
              e.currentTarget.style.color = '#C4A882';
            }}
          >
            {loc.phone}
          </a>
        </div>
      </div>
    </div>
  );
}

export default function DesertLocations() {
  const marqueeItems = Array(5).fill(INSURANCES).flat();

  return (
    <section
      id="locations-section"
      style={{
        background: '#0A0C0E',
        padding: 'clamp(5rem,10vw,9rem) clamp(1.25rem,5vw,5rem) 0',
        borderTop: '1px solid rgba(255,255,255,0.04)',
      }}
      aria-label="City Health AZ locations — East Valley"
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Section header */}
        <div style={{ marginBottom: 'clamp(3rem,6vw,5rem)' }}>
          <p
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              textTransform: 'uppercase',
              letterSpacing: '0.28em',
              fontSize: '0.72rem',
              fontWeight: 700,
              color: '#E8622A',
              marginBottom: '0.75rem',
            }}
          >
            Two East Valley Clinics
          </p>
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
              FIND US IN{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #E8622A, #4A7C59)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                MESA
              </span>
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {SERVICE_AREAS.map(area => (
                <span
                  key={area}
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    padding: '0.35rem 0.8rem',
                    background: 'rgba(196,168,130,0.06)',
                    border: '1px solid rgba(196,168,130,0.15)',
                    borderRadius: '2px',
                    color: '#C4A882',
                  }}
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Location cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {LOCATIONS.map(loc => (
            <LocationCard key={loc.id} loc={loc} />
          ))}
        </div>

      </div>

      {/* Insurance marquee */}
      <div
        style={{
          marginTop: 'clamp(5rem,10vw,8rem)',
          background: 'rgba(16,18,20,0.8)',
          borderTop: '1px solid rgba(255,255,255,0.04)',
          borderBottom: '1px solid rgba(255,255,255,0.04)',
          padding: '1.25rem 0',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* Fade edges */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, rgba(10,12,14,0.9) 0%, transparent 15%, transparent 85%, rgba(10,12,14,0.9) 100%)',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            display: 'flex',
            animation: 'marqueeDesert 50s linear infinite',
            whiteSpace: 'nowrap',
          }}
        >
          {marqueeItems.map((ins, i) => (
            <span
              key={i}
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                fontSize: '0.7rem',
                fontWeight: 700,
                color: '#4A5A65',
                marginRight: '3rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  background: '#E8622A',
                  opacity: 0.5,
                  display: 'inline-block',
                  flexShrink: 0,
                }}
                aria-hidden="true"
              />
              {ins}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marqueeDesert {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
