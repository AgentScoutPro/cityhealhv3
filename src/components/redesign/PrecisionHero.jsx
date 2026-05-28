'use client';

const STATS = [
  { value: '2,400+', label: 'Patients Treated' },
  { value: '2', label: 'Mesa Clinics' },
  { value: 'Same-Day', label: 'Appointments' },
  { value: '15+', label: 'Years Experience' },
];

function SpinalGraphic() {
  const vertebrae = [80, 134, 188, 242, 296, 350, 404];

  return (
    <div
      id="hero-graphic-v4"
      style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 320 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', maxWidth: '340px', filter: 'drop-shadow(0 0 40px rgba(0,196,166,0.12))' }}
      >
        {/* Outer ambient glow */}
        <ellipse cx="160" cy="250" rx="130" ry="220" fill="url(#ambient-glow)" />

        {/* Vertebrae */}
        {vertebrae.map((cy, i) => {
          const rx = 54 - i * 3.5;
          const ry = 14 - i * 0.6;
          const alpha = 0.75 - i * 0.07;
          return (
            <g key={i}>
              {/* Outer ring */}
              <ellipse cx="160" cy={cy} rx={rx} ry={ry}
                stroke="url(#ring-gradient)" strokeWidth="0.8"
                fill="none" opacity={alpha}
              />
              {/* Mid ring */}
              <ellipse cx="160" cy={cy} rx={rx * 0.62} ry={ry * 0.65}
                stroke={`rgba(0,196,166,${0.25 + i * 0.02})`} strokeWidth="0.6"
                fill="none" opacity={alpha * 0.7}
              />
              {/* Inner nucleus */}
              <ellipse cx="160" cy={cy} rx={rx * 0.25} ry={ry * 0.35}
                fill={`rgba(0,232,196,${0.08 + i * 0.015})`}
              />
              {/* Center node */}
              <circle cx="160" cy={cy} r="2" fill="#00C4A6" opacity={0.55 + i * 0.04} />

              {/* Lateral transverse processes */}
              {i > 0 && i < 6 && (
                <>
                  <line
                    x1={160 - rx * 0.9} y1={cy}
                    x2={160 - rx * 0.9 - 28 + i * 2} y2={cy - 10}
                    stroke={`rgba(0,196,166,${0.15 - i * 0.01})`} strokeWidth="0.7"
                  />
                  <line
                    x1={160 + rx * 0.9} y1={cy}
                    x2={160 + rx * 0.9 + 28 - i * 2} y2={cy - 10}
                    stroke={`rgba(0,196,166,${0.15 - i * 0.01})`} strokeWidth="0.7"
                  />
                  <circle cx={160 - rx * 0.9 - 28 + i * 2} cy={cy - 10} r="1.5" fill="rgba(0,196,166,0.3)" />
                  <circle cx={160 + rx * 0.9 + 28 - i * 2} cy={cy - 10} r="1.5" fill="rgba(0,196,166,0.3)" />
                </>
              )}

              {/* Intervertebral disc spacer */}
              {i < 6 && (
                <>
                  <line x1="160" y1={cy + ry + 2} x2="160" y2={vertebrae[i + 1] - ry - 2}
                    stroke="rgba(0,196,166,0.18)" strokeWidth="0.8" strokeDasharray="2 4"
                  />
                  <rect
                    x={160 - rx * 0.45} y={cy + ry + 4}
                    width={rx * 0.9} height={vertebrae[i + 1] - cy - ry * 2 - 8}
                    rx="2"
                    fill="rgba(0,196,166,0.025)"
                    stroke="rgba(0,196,166,0.08)" strokeWidth="0.5"
                  />
                </>
              )}
            </g>
          );
        })}

        {/* Scanning line */}
        <line x1="90" y1="242" x2="230" y2="242" stroke="rgba(0,196,166,0.35)" strokeWidth="0.6" strokeDasharray="4 3">
          <animate attributeName="y1" values="80;404;80" dur="4s" repeatCount="indefinite" />
          <animate attributeName="y2" values="80;404;80" dur="4s" repeatCount="indefinite" />
        </line>

        <defs>
          <radialGradient id="ambient-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00C4A6" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#00C4A6" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="ring-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00C4A6" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#00E8C4" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#00C4A6" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating data labels */}
      {[
        { label: 'C2 · CERVICAL', top: '12%', right: '4%', color: '#00C4A6', alpha: 1 },
        { label: 'T6 · THORACIC', top: '44%', left: '0%', color: '#00C4A6', alpha: 0.6 },
        { label: 'L4 · LUMBAR', bottom: '22%', right: '2%', color: '#6B5FE8', alpha: 0.8 },
      ].map(tag => (
        <div
          key={tag.label}
          style={{
            position: 'absolute',
            top: tag.top,
            bottom: tag.bottom,
            left: tag.left,
            right: tag.right,
            background: `rgba(6,8,11,0.8)`,
            border: `1px solid rgba(${tag.color === '#6B5FE8' ? '107,95,232' : '0,196,166'}, ${tag.alpha * 0.25})`,
            borderRadius: '3px',
            padding: '0.38rem 0.75rem',
            backdropFilter: 'blur(8px)',
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.6rem',
            color: tag.color,
            opacity: tag.alpha,
            letterSpacing: '0.1em',
            whiteSpace: 'nowrap',
          }}
        >
          {tag.label}
        </div>
      ))}

      {/* Measurement bracket — left side */}
      <div style={{
        position: 'absolute',
        left: '8%',
        top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px',
      }}>
        <div style={{ width: '1px', height: '80px', background: 'linear-gradient(to bottom, transparent, rgba(0,196,166,0.3), transparent)' }} />
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.5rem', color: 'rgba(0,196,166,0.4)', letterSpacing: '0.08em', writingMode: 'vertical-lr' }}>
          ALIGNMENT
        </span>
      </div>
    </div>
  );
}

export default function PrecisionHero() {
  return (
    <section
      id="hero-precision"
      className="relative w-full min-h-screen flex items-center overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at 22% 55%, rgba(0,196,166,0.065) 0%, transparent 52%),
          radial-gradient(ellipse at 80% 18%, rgba(107,95,232,0.05) 0%, transparent 42%),
          radial-gradient(ellipse at 60% 90%, rgba(0,196,166,0.025) 0%, transparent 40%),
          #06080B
        `,
      }}
      aria-label="City Health Chiropractic — Precise Care for Your Body"
    >
      {/* Grid backdrop */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,196,166,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,196,166,0.035) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse at 25% 50%, black 0%, transparent 65%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 25% 50%, black 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />

      {/* Vertical divider */}
      <div
        className="absolute top-0 bottom-0 pointer-events-none hidden lg:block"
        style={{
          left: '59%',
          width: '1px',
          background: 'linear-gradient(to bottom, transparent 5%, rgba(0,196,166,0.1) 25%, rgba(0,196,166,0.1) 75%, transparent 95%)',
        }}
        aria-hidden="true"
      />

      <div
        className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-16 py-28"
        style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }}
      >
        <div
          className="lg:grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0', alignItems: 'center' }}
        >
          {/* LEFT — 3 cols */}
          <div
            style={{ gridColumn: 'span 3', display: 'flex', flexDirection: 'column', paddingRight: 'clamp(2rem, 5vw, 5rem)' }}
          >
            {/* Eyebrow */}
            <div
              id="hero-eyebrow-v4"
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2.5rem' }}
            >
              <span style={{
                fontFamily: "'Space Grotesk', sans-serif",
                textTransform: 'uppercase',
                letterSpacing: '0.3em',
                fontSize: '0.65rem',
                fontWeight: 600,
                color: '#00C4A6',
              }}>
                01 / Biomechanical Precision
              </span>
              <span style={{
                display: 'inline-block',
                height: '1px',
                width: '60px',
                background: 'linear-gradient(to right, rgba(0,196,166,0.6), transparent)',
              }} />
            </div>

            {/* H1 */}
            <h1
              id="hero-headline-v4"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                textTransform: 'uppercase',
                fontWeight: 900,
                letterSpacing: '-0.025em',
                lineHeight: 0.88,
                color: '#EDF3FA',
                fontSize: 'clamp(4rem, 9vw, 8.5rem)',
                marginBottom: '2rem',
              }}
            >
              PRECISE
              <br />
              <span style={{
                background: 'linear-gradient(135deg, #00C4A6 0%, #00E8C4 55%, #A8F5E2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'inline-block',
              }}>
                CARE
              </span>
              <br />
              FOR YOUR
              <br />
              BODY.
            </h1>

            {/* Rule */}
            <div
              id="hero-rule-v4"
              style={{
                width: '100%',
                maxWidth: '440px',
                height: '1px',
                background: 'linear-gradient(to right, rgba(0,196,166,0.4), transparent)',
                marginBottom: '1.75rem',
              }}
            />

            {/* Sub-copy */}
            <p
              id="hero-sub-v4"
              style={{
                fontFamily: "'Noto Sans', sans-serif",
                fontSize: 'clamp(0.95rem, 1.6vw, 1.08rem)',
                fontWeight: 300,
                color: '#6A8A9F',
                lineHeight: 1.9,
                maxWidth: '46ch',
                marginBottom: '2.75rem',
              }}
            >
              Data-driven chiropractic care, spinal decompression, and
              physiotherapy — precision-calibrated to your biomechanics.
              Two Mesa clinics. No referral required.
            </p>

            {/* CTAs */}
            <div
              id="hero-ctas-v4"
              style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem', marginBottom: '4rem' }}
            >
              <button
                onClick={() => document.getElementById('precision-cta')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  padding: '0.95rem 2.75rem',
                  background: 'linear-gradient(135deg, #00C4A6 0%, #009C83 100%)',
                  color: '#06080B',
                  borderRadius: '3px',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 0 32px rgba(0,196,166,0.28), 0 4px 20px rgba(0,196,166,0.18)',
                  transition: 'box-shadow 250ms, transform 250ms',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = '0 0 52px rgba(0,196,166,0.52), 0 8px 28px rgba(0,196,166,0.32)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = '0 0 32px rgba(0,196,166,0.28), 0 4px 20px rgba(0,196,166,0.18)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Book Assessment
              </button>
              <a
                href="tel:+14806495297"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  padding: '0.95rem 2.75rem',
                  background: 'transparent',
                  color: '#00C4A6',
                  border: '1px solid rgba(0,196,166,0.28)',
                  borderRadius: '3px',
                  textDecoration: 'none',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  transition: 'background 250ms, border-color 250ms, box-shadow 250ms',
                  whiteSpace: 'nowrap',
                  display: 'inline-flex',
                  alignItems: 'center',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(0,196,166,0.07)';
                  e.currentTarget.style.borderColor = 'rgba(0,196,166,0.52)';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(0,196,166,0.12)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.borderColor = 'rgba(0,196,166,0.28)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                (480) 649-5297
              </a>
            </div>

            {/* Stats */}
            <div
              id="hero-stats-v4"
              style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}
            >
              {STATS.map(stat => (
                <div
                  key={stat.label}
                  style={{
                    padding: '0.85rem 1.4rem',
                    background: 'rgba(12,16,24,0.7)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid rgba(0,196,166,0.09)',
                    borderRadius: '4px',
                    minWidth: '110px',
                    transition: 'border-color 250ms, box-shadow 250ms',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(0,196,166,0.28)';
                    e.currentTarget.style.boxShadow = '0 0 16px rgba(0,196,166,0.08)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(0,196,166,0.09)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 'clamp(1.4rem, 2.2vw, 1.75rem)',
                    fontWeight: 800,
                    color: '#00C4A6',
                    letterSpacing: '-0.02em',
                    lineHeight: 1,
                    marginBottom: '0.2rem',
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '0.6rem',
                    color: '#3A5468',
                    textTransform: 'uppercase',
                    letterSpacing: '0.14em',
                    fontWeight: 500,
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — 2 cols: spinal graphic */}
          <div
            style={{ gridColumn: 'span 2', minHeight: '500px', position: 'relative' }}
          >
            <SpinalGraphic />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
        style={{ animation: 'precisionBounce 2.2s ease-in-out infinite' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: '20px', height: '1px', background: 'rgba(0,196,166,0.25)' }} />
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            textTransform: 'uppercase',
            letterSpacing: '0.3em',
            fontSize: '0.52rem',
            color: 'rgba(0,196,166,0.3)',
          }}>
            Scroll
          </span>
          <div style={{ width: '20px', height: '1px', background: 'rgba(0,196,166,0.25)' }} />
        </div>
        <svg width="10" height="14" viewBox="0 0 10 14" fill="none" aria-hidden="true">
          <path d="M5 1v9M1 7l4 4 4-4" stroke="rgba(0,196,166,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <style>{`
        @keyframes precisionBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(5px); }
        }
      `}</style>
    </section>
  );
}
