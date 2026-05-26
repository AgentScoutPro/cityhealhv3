'use client';

/**
 * S2_ProblemSplit — From Friction to Fluidity
 *
 * Section 2 · High-contrast split layout
 *
 * Architecture:
 *  - Left half: stark white background, charcoal text — the "problem" state
 *  - Right half: deep space dark, neon accents — the "solution" state
 *  - GSAP hook point: id="s2-timeline-root" for reveal timeline
 *  - Typography: large, commanding, optimized for non-native speakers
 *  - Line lengths capped at ~65ch for readability
 */

export default function S2_ProblemSplit() {
  const items = [
    { problem: 'Long waits at urgent care', solution: 'Same-day appointments, no referral needed' },
    { problem: 'Treatments that mask pain', solution: 'Root-cause plans: injections, PT, and more' },
    { problem: 'No one explains your options', solution: 'Bilingual providers, clear step-by-step care' },
  ];

  return (
    <section
      id="section-problem"
      aria-label="From Friction to Fluidity"
      id="s2-timeline-root"
      style={{ position: 'relative' }}
    >
      {/* ── Desktop: side-by-side split ──────────────────────────────────── */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          minHeight: '600px',
        }}
        className="split-grid"
      >
        {/* ── Left Panel: The Problem (white) ────────────────────────────── */}
        <div
          style={{
            background: '#FFFFFF',
            padding: 'clamp(3rem, 8vw, 6rem) clamp(1.5rem, 5vw, 4rem)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <p
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              fontSize: '0.78rem',
              color: '#7E9BB5',
              marginBottom: '1rem',
            }}
          >
            The Current Reality
          </p>

          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
              fontWeight: 800,
              lineHeight: 1.05,
              color: '#1A1D23',
              marginBottom: '2rem',
              maxWidth: '22ch',
            }}
          >
            Pain Management
            <br />
            Shouldn't Feel Like
            <br />
            a Second Job.
          </h2>

          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {items.map(({ problem }) => (
              <li
                key={problem}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  fontFamily: "'Noto Sans', sans-serif",
                  fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)',
                  lineHeight: 1.6,
                  color: '#1A1D23',
                  maxWidth: '48ch',
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    flexShrink: 0,
                    width: '20px',
                    height: '20px',
                    marginTop: '2px',
                    borderRadius: '50%',
                    border: '1.5px solid #1A1D23',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5h6M5 2l3 3-3 3" stroke="#1A1D23" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </span>
                {problem}
              </li>
            ))}
          </ul>
        </div>

        {/* ── Right Panel: The Solution (dark) ───────────────────────────── */}
        <div
          style={{
            background: '#0D1117',
            padding: 'clamp(3rem, 8vw, 6rem) clamp(1.5rem, 5vw, 4rem)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            borderLeft: '1px solid rgba(0, 242, 254, 0.12)',
          }}
        >
          <p
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              fontSize: '0.78rem',
              color: '#00F2FE',
              marginBottom: '1rem',
            }}
          >
            The City Health Difference
          </p>

          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
              fontWeight: 800,
              lineHeight: 1.05,
              background: 'linear-gradient(90deg, #00F2FE, #4FACFE)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '2rem',
              maxWidth: '22ch',
            }}
          >
            Precision Care.
            <br />
            Clear Communication.
            <br />
            Real Results.
          </h2>

          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {items.map(({ solution }) => (
              <li
                key={solution}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  fontFamily: "'Noto Sans', sans-serif",
                  fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)',
                  lineHeight: 1.6,
                  color: '#E8EDF4',
                  maxWidth: '48ch',
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    flexShrink: 0,
                    width: '20px',
                    height: '20px',
                    marginTop: '2px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #00F2FE, #4FACFE)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5.5l2.5 2.5 4-5" stroke="#0D1117" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                {solution}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Mobile: stacked (CSS handles split via media query) ──────────── */}
      <style>{`
        @media (max-width: 768px) {
          .split-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
