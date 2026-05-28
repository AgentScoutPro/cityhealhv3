'use client';

const METRICS = [
  {
    number: '94',
    suffix: '%',
    label: 'Patient Satisfaction Score',
    description: 'Based on 300+ verified post-treatment outcome surveys',
    accentRgb: '0,196,166',
  },
  {
    number: '3.2',
    suffix: 'x',
    label: 'Faster Recovery Rate',
    description: 'vs. standard chiropractic protocols — tracked at 90 days',
    accentRgb: '107,95,232',
  },
  {
    number: '28',
    suffix: 'min',
    label: 'Average Adjustment Time',
    description: 'Precision-focused, never rushed — every session is data-backed',
    accentRgb: '0,232,196',
  },
];

export default function PrecisionMetrics() {
  return (
    <section
      id="precision-metrics"
      style={{
        background: '#0C1018',
        padding: 'clamp(5rem, 10vw, 9rem) clamp(1.25rem, 5vw, 5rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle top border */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '1px',
          background: 'linear-gradient(to right, transparent, rgba(0,196,166,0.2) 30%, rgba(107,95,232,0.2) 70%, transparent)',
        }}
      />

      <div className="max-w-[1280px] mx-auto">

        {/* Section header */}
        <div id="metrics-header-v4" style={{ marginBottom: '5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.65rem',
              textTransform: 'uppercase',
              letterSpacing: '0.3em',
              color: '#00C4A6',
              fontWeight: 600,
            }}>
              02 / Clinical Outcomes
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
            PRECISION-DRIVEN
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #00C4A6 0%, #6B5FE8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              display: 'inline-block',
            }}>
              OUTCOMES.
            </span>
          </h2>
        </div>

        {/* Two-column layout: metrics left, venn right */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'clamp(3rem, 6vw, 6rem)',
          alignItems: 'center',
        }}>

          {/* LEFT: metric cards */}
          <div id="metrics-stats-col" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {METRICS.map((metric, i) => (
              <div
                key={metric.label}
                className="metric-card-v4"
                style={{
                  padding: '1.75rem 2.25rem',
                  background: 'rgba(6,8,11,0.6)',
                  border: `1px solid rgba(${metric.accentRgb}, 0.08)`,
                  borderRadius: '6px',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'border-color 300ms, box-shadow 300ms',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = `rgba(${metric.accentRgb}, 0.28)`;
                  e.currentTarget.style.boxShadow = `0 0 24px rgba(${metric.accentRgb}, 0.07)`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = `rgba(${metric.accentRgb}, 0.08)`;
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Left accent bar */}
                <div style={{
                  position: 'absolute',
                  left: 0, top: '18%', bottom: '18%',
                  width: '2px',
                  background: `linear-gradient(to bottom, rgba(${metric.accentRgb}, 0.0), rgba(${metric.accentRgb}, 0.8), rgba(${metric.accentRgb}, 0.0))`,
                  borderRadius: '0 2px 2px 0',
                }} />

                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '0.35rem', marginBottom: '0.4rem' }}>
                  <span style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 'clamp(2.8rem, 4.5vw, 3.75rem)',
                    fontWeight: 900,
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                    color: `rgba(${metric.accentRgb}, 1)`,
                  }}>
                    {metric.number}
                  </span>
                  <span style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    color: `rgba(${metric.accentRgb}, 0.45)`,
                    lineHeight: 1.5,
                    marginBottom: '0.3rem',
                  }}>
                    {metric.suffix}
                  </span>
                </div>

                <div style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  color: '#C8D8E4',
                  marginBottom: '0.25rem',
                }}>
                  {metric.label}
                </div>
                <div style={{
                  fontFamily: "'Noto Sans', sans-serif",
                  fontSize: '0.76rem',
                  color: '#3A5468',
                  fontWeight: 300,
                  lineHeight: 1.6,
                }}>
                  {metric.description}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: Venn diagram */}
          <div id="metrics-venn-col" style={{ position: 'relative' }}>
            <div style={{ position: 'relative', paddingBottom: '85%' }}>
              <svg
                viewBox="0 0 400 350"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
              >
                {/* Connector lines */}
                <line x1="122" y1="132" x2="278" y2="132" stroke="rgba(0,196,166,0.12)" strokeWidth="1" strokeDasharray="3 4" />
                <line x1="122" y1="132" x2="200" y2="242" stroke="rgba(0,196,166,0.12)" strokeWidth="1" strokeDasharray="3 4" />
                <line x1="278" y1="132" x2="200" y2="242" stroke="rgba(107,95,232,0.12)" strokeWidth="1" strokeDasharray="3 4" />

                {/* Teal circle */}
                <circle cx="122" cy="132" r="74"
                  fill="rgba(0,196,166,0.04)"
                  stroke="rgba(0,196,166,0.22)"
                  strokeWidth="1"
                  className="venn-circle-v4"
                />
                {/* Violet circle */}
                <circle cx="278" cy="132" r="74"
                  fill="rgba(107,95,232,0.04)"
                  stroke="rgba(107,95,232,0.22)"
                  strokeWidth="1"
                  className="venn-circle-v4"
                />
                {/* Mint circle */}
                <circle cx="200" cy="242" r="74"
                  fill="rgba(0,232,196,0.03)"
                  stroke="rgba(0,232,196,0.18)"
                  strokeWidth="1"
                  className="venn-circle-v4"
                />

                {/* Center glow */}
                <circle cx="200" cy="168" r="32" fill="url(#venn-glow)" />

                {/* Junction nodes */}
                <circle cx="200" cy="132" r="3.5" fill="#00C4A6" opacity="0.5" />
                <circle cx="152" cy="210" r="3.5" fill="#00E8C4" opacity="0.5" />
                <circle cx="248" cy="210" r="3.5" fill="#6B5FE8" opacity="0.5" />

                {/* Labels */}
                <text x="82" y="107" textAnchor="middle" fontFamily="'Space Grotesk',sans-serif" fontSize="10" fill="#00C4A6" fontWeight="600" opacity="0.9">DIAGNOSTIC</text>
                <text x="82" y="122" textAnchor="middle" fontFamily="'Space Grotesk',sans-serif" fontSize="10" fill="#00C4A6" fontWeight="600" opacity="0.9">CONSULTATION</text>

                <text x="318" y="107" textAnchor="middle" fontFamily="'Space Grotesk',sans-serif" fontSize="10" fill="#6B5FE8" fontWeight="600" opacity="0.9">CUSTOM</text>
                <text x="318" y="122" textAnchor="middle" fontFamily="'Space Grotesk',sans-serif" fontSize="10" fill="#6B5FE8" fontWeight="600" opacity="0.9">CARE PLANS</text>

                <text x="200" y="300" textAnchor="middle" fontFamily="'Space Grotesk',sans-serif" fontSize="10" fill="#00E8C4" fontWeight="600" opacity="0.9">ACTIVE</text>
                <text x="200" y="315" textAnchor="middle" fontFamily="'Space Grotesk',sans-serif" fontSize="10" fill="#00E8C4" fontWeight="600" opacity="0.9">ADJUSTMENTS</text>

                {/* Center label */}
                <text x="200" y="164" textAnchor="middle" fontFamily="'Barlow Condensed',sans-serif" fontSize="10" fill="#EDF3FA" fontWeight="700" letterSpacing="0.12em">TOTAL</text>
                <text x="200" y="177" textAnchor="middle" fontFamily="'Barlow Condensed',sans-serif" fontSize="10" fill="#EDF3FA" fontWeight="700" letterSpacing="0.12em">WELLNESS</text>

                <defs>
                  <radialGradient id="venn-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#00C4A6" stopOpacity="0.12" />
                    <stop offset="60%" stopColor="#6B5FE8" stopOpacity="0.06" />
                    <stop offset="100%" stopColor="#00C4A6" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>
            </div>

            {/* Caption */}
            <p style={{
              textAlign: 'center',
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.7rem',
              color: '#2A4055',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              marginTop: '1rem',
            }}>
              Integrated Care Model
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
