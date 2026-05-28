'use client';

const STEPS = [
  {
    id: 'pstep-1',
    number: '01',
    title: 'Initial Assessment',
    subtitle: '45-Minute Comprehensive Intake',
    description: 'Full health history, lifestyle factors, and chief complaint analysis. We map your complete biomechanical profile and document all contributing variables before recommending anything.',
    iconPath: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
    accent: '#00C4A6',
    accentRgb: '0,196,166',
  },
  {
    id: 'pstep-2',
    number: '02',
    title: 'Digital Imaging',
    subtitle: 'Precision Spinal Radiography',
    description: 'Digital X-ray analysis with computerized measurement of spinal angles, disc spacing, and vertebral alignment. Imaging data becomes the foundation of every decision in your care plan.',
    iconPath: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    accent: '#6B5FE8',
    accentRgb: '107,95,232',
  },
  {
    id: 'pstep-3',
    number: '03',
    title: 'Custom Care Plan',
    subtitle: 'Protocol Designed for Your Biomechanics',
    description: 'A precise, phased treatment program calibrated to your imaging data and recovery goals. Includes visit frequency, modality selection, milestone checkpoints, and outcome KPIs.',
    iconPath: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    accent: '#00C4A6',
    accentRgb: '0,196,166',
  },
  {
    id: 'pstep-4',
    number: '04',
    title: 'Active Rehabilitation',
    subtitle: 'Progressive Recovery & Structural Strengthening',
    description: 'Guided therapeutic exercise and progressive loading to rebuild stability, restore full range of motion, and prevent recurrence. Your recovery extends beyond the adjustment table.',
    iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
    accent: '#00E8C4',
    accentRgb: '0,232,196',
  },
];

export default function PrecisionTimeline() {
  return (
    <section
      id="precision-timeline"
      style={{
        background: '#0C1018',
        padding: 'clamp(5rem, 10vw, 9rem) clamp(1.25rem, 5vw, 5rem)',
        position: 'relative',
        overflow: 'hidden',
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
        <div id="timeline-header-v4" style={{ marginBottom: '5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.65rem',
              textTransform: 'uppercase',
              letterSpacing: '0.3em',
              color: '#00C4A6',
              fontWeight: 600,
            }}>
              04 / Patient Journey
            </span>
            <div style={{
              flex: 1,
              maxWidth: '200px',
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
            YOUR PATH TO
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #00C4A6, #00E8C4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              display: 'inline-block',
            }}>
              OPTIMAL FUNCTION.
            </span>
          </h2>
        </div>

        {/* Timeline container */}
        <div style={{ position: 'relative' }}>

          {/* Background track */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: '27px',
              top: '28px',
              bottom: '28px',
              width: '2px',
              background: 'rgba(0,196,166,0.07)',
              borderRadius: '2px',
            }}
          />
          {/* Animated progress fill */}
          <div
            id="timeline-progress-v4"
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: '27px',
              top: '28px',
              width: '2px',
              height: '0%',
              background: 'linear-gradient(to bottom, #00C4A6 0%, #6B5FE8 50%, #00E8C4 100%)',
              borderRadius: '2px',
              transformOrigin: 'top center',
            }}
          />

          {/* Steps */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(2rem, 4vw, 3.5rem)' }}>
            {STEPS.map((step, i) => (
              <div
                key={step.id}
                id={step.id}
                className="timeline-step-v4"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '56px 1fr',
                  gap: 'clamp(1.25rem, 3vw, 2.25rem)',
                  alignItems: 'flex-start',
                }}
              >
                {/* Node icon */}
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: `rgba(${step.accentRgb}, 0.08)`,
                  border: `1px solid rgba(${step.accentRgb}, 0.28)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  position: 'relative',
                  zIndex: 1,
                  transition: 'background 300ms, box-shadow 300ms',
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                    stroke={step.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                  >
                    <path d={step.iconPath} />
                  </svg>
                </div>

                {/* Content card */}
                <div
                  style={{
                    padding: 'clamp(1.25rem, 2.5vw, 1.75rem) clamp(1.25rem, 3vw, 2.25rem)',
                    background: 'rgba(6,8,11,0.5)',
                    border: `1px solid rgba(${step.accentRgb}, 0.07)`,
                    borderRadius: '6px',
                    backdropFilter: 'blur(8px)',
                    transition: 'border-color 300ms, box-shadow 300ms',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = `rgba(${step.accentRgb}, 0.22)`;
                    e.currentTarget.style.boxShadow = `0 0 20px rgba(${step.accentRgb}, 0.06)`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = `rgba(${step.accentRgb}, 0.07)`;
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '0.5rem',
                    flexWrap: 'wrap',
                  }}>
                    <span style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '0.6rem',
                      color: step.accent,
                      opacity: 0.55,
                      letterSpacing: '0.1em',
                    }}>
                      {step.number}
                    </span>
                    <span style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '0.58rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.22em',
                      color: step.accent,
                      fontWeight: 600,
                    }}>
                      {step.subtitle}
                    </span>
                  </div>
                  <h3 style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    textTransform: 'uppercase',
                    fontWeight: 800,
                    fontSize: 'clamp(1.35rem, 2.5vw, 1.85rem)',
                    letterSpacing: '-0.01em',
                    color: '#EDF3FA',
                    marginBottom: '0.6rem',
                  }}>
                    {step.title}
                  </h3>
                  <p style={{
                    fontFamily: "'Noto Sans', sans-serif",
                    fontSize: '0.84rem',
                    color: '#3A5468',
                    fontWeight: 300,
                    lineHeight: 1.85,
                    maxWidth: '65ch',
                  }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
