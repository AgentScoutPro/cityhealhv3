'use client';

const SERVICES = [
  {
    id: 'chiro',
    number: '01',
    title: 'Chiropractic Care',
    subtitle: 'Structural Alignment & Spinal Health',
    body: 'Advanced manual and instrument-assisted adjustments targeting the root cause of pain. We use computerized spinal analysis to deliver precise, data-backed corrections — not guesswork. Every adjustment is measured, documented, and outcome-tracked.',
    features: ['Diversified Technique', 'Activator Method', 'Drop-Table Adjustments', 'Computerized Analysis'],
    accent: '#00C4A6',
    accentRgb: '0,196,166',
  },
  {
    id: 'physio',
    number: '02',
    title: 'Physiotherapy',
    subtitle: 'Soft Tissue & Neuromuscular Rehabilitation',
    body: 'Targeted physiotherapy protocols combining electrical stimulation, ultrasound therapy, and guided rehabilitation to restore function and accelerate healing at the cellular level. Designed alongside your chiropractic protocol for maximum synergy.',
    features: ['Electrical Stimulation', 'Therapeutic Ultrasound', 'Myofascial Release', 'Corrective Exercise'],
    accent: '#6B5FE8',
    accentRgb: '107,95,232',
  },
  {
    id: 'decomp',
    number: '03',
    title: 'Spinal Decompression',
    subtitle: 'Non-Surgical Disc Restoration',
    body: 'FDA-cleared axial decompression therapy creating negative intradiscal pressure to retract herniated and bulging discs. Clinically validated for chronic disc conditions with no surgery, no injections, and minimal recovery time required.',
    features: ['FDA-Cleared Protocol', 'Herniated Disc Relief', 'Bulge Retraction', 'No Surgery Required'],
    accent: '#00E8C4',
    accentRgb: '0,232,196',
  },
];

export default function PrecisionServices() {
  return (
    <section
      id="precision-services"
      style={{
        background: '#06080B',
        padding: 'clamp(5rem, 10vw, 9rem) clamp(1.25rem, 5vw, 5rem)',
        position: 'relative',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '1px',
          background: 'linear-gradient(to right, transparent, rgba(0,196,166,0.12) 50%, transparent)',
        }}
      />

      <div className="max-w-[1280px] mx-auto">

        {/* Section header */}
        <div id="services-header-v4" style={{ marginBottom: '5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.65rem',
              textTransform: 'uppercase',
              letterSpacing: '0.3em',
              color: '#00C4A6',
              fontWeight: 600,
            }}>
              03 / Treatment Protocols
            </span>
            <div style={{
              flex: 1,
              maxWidth: '220px',
              height: '1px',
              background: 'linear-gradient(to right, rgba(0,196,166,0.3), transparent)',
            }} />
          </div>
          <h2 style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            textTransform: 'uppercase',
            fontWeight: 900,
            fontSize: 'clamp(2.6rem, 6vw, 5.5rem)',
            letterSpacing: '-0.025em',
            lineHeight: 0.9,
            color: '#EDF3FA',
          }}>
            CLINICAL
            <br />
            <span style={{
              WebkitTextStroke: '1px rgba(0,196,166,0.55)',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
              display: 'inline-block',
            }}>
              PROTOCOLS.
            </span>
          </h2>
        </div>

        {/* Service cards */}
        <div
          id="service-stack-v4"
          style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
        >
          {SERVICES.map((svc) => (
            <div
              key={svc.id}
              id={`service-card-${svc.id}`}
              className="service-card-v4"
              style={{
                padding: 'clamp(1.75rem, 3vw, 2.25rem) clamp(1.5rem, 3.5vw, 2.75rem)',
                background: 'rgba(12,16,24,0.75)',
                border: `1px solid rgba(${svc.accentRgb}, 0.08)`,
                borderRadius: '8px',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                gap: 'clamp(1.5rem, 3vw, 3rem)',
                alignItems: 'start',
                cursor: 'default',
                transition: 'border-color 350ms ease, box-shadow 350ms ease, transform 250ms ease',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `rgba(${svc.accentRgb}, 0.28)`;
                e.currentTarget.style.boxShadow = `0 0 48px rgba(${svc.accentRgb}, 0.07), 0 24px 48px rgba(0,0,0,0.28)`;
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = `rgba(${svc.accentRgb}, 0.08)`;
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Ambient background glow */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: '-60%', right: '-15%',
                  width: '45%', height: '220%',
                  background: `radial-gradient(ellipse, rgba(${svc.accentRgb}, 0.035) 0%, transparent 70%)`,
                  pointerEvents: 'none',
                }}
              />

              {/* Number */}
              <div style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 'clamp(3.5rem, 6vw, 5rem)',
                fontWeight: 900,
                color: `rgba(${svc.accentRgb}, 0.1)`,
                lineHeight: 1,
                letterSpacing: '-0.02em',
                minWidth: '3.5rem',
                userSelect: 'none',
                paddingTop: '0.2rem',
              }}>
                {svc.number}
              </div>

              {/* Content */}
              <div>
                <div style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.6rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.25em',
                  color: svc.accent,
                  marginBottom: '0.45rem',
                  fontWeight: 600,
                }}>
                  {svc.subtitle}
                </div>
                <h3 style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  textTransform: 'uppercase',
                  fontWeight: 800,
                  fontSize: 'clamp(1.5rem, 2.8vw, 2.25rem)',
                  letterSpacing: '-0.01em',
                  color: '#EDF3FA',
                  marginBottom: '0.85rem',
                }}>
                  {svc.title}
                </h3>
                <p style={{
                  fontFamily: "'Noto Sans', sans-serif",
                  fontSize: '0.86rem',
                  color: '#4A6478',
                  fontWeight: 300,
                  lineHeight: 1.85,
                  maxWidth: '62ch',
                  marginBottom: '1.25rem',
                }}>
                  {svc.body}
                </p>

                {/* Feature tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {svc.features.map(f => (
                    <span
                      key={f}
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: '0.66rem',
                        fontWeight: 500,
                        padding: '0.28rem 0.75rem',
                        background: `rgba(${svc.accentRgb}, 0.07)`,
                        border: `1px solid rgba(${svc.accentRgb}, 0.15)`,
                        borderRadius: '3px',
                        color: `rgba(${svc.accentRgb}, 0.75)`,
                        letterSpacing: '0.07em',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
