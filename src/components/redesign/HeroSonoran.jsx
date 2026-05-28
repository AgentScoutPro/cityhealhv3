'use client';

const STATS = [
  { value: '500+', label: 'Patients Served' },
  { value: '2', label: 'Mesa Clinics' },
  { value: 'Same-Day', label: 'Consultations' },
  { value: 'HIPAA', label: 'Certified' },
];

export default function HeroSonoran() {
  return (
    <section
      id="hero-sonoran"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at 15% 60%, rgba(232,98,42,0.10) 0%, transparent 50%),
          radial-gradient(ellipse at 85% 15%, rgba(74,124,89,0.07) 0%, transparent 45%),
          radial-gradient(ellipse at 50% 100%, rgba(196,168,130,0.04) 0%, transparent 40%),
          #0A0C0E
        `,
      }}
      aria-label="Hero — Pain Management, Rewired. East Valley AZ"
    >
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(196,168,130,0.12) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
        }}
        aria-hidden="true"
      />

      {/* Warm horizon bar at bottom */}
      <div
        className="absolute bottom-0 inset-x-0 pointer-events-none"
        style={{
          height: '35%',
          background: 'linear-gradient(to top, rgba(232,98,42,0.055) 0%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      {/* Left edge ambient light */}
      <div
        className="absolute left-0 top-0 bottom-0 pointer-events-none"
        style={{
          width: '30%',
          background: 'linear-gradient(to right, rgba(232,98,42,0.04) 0%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      {/* Main content */}
      <div
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 py-24 flex flex-col items-center text-center"
      >
        {/* Eyebrow */}
        <div
          id="hero-eyebrow"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.875rem',
            marginBottom: '2rem',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              width: '36px',
              height: '1px',
              background: 'linear-gradient(to right, transparent, rgba(232,98,42,0.7))',
            }}
          />
          <span
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              textTransform: 'uppercase',
              letterSpacing: '0.28em',
              fontSize: '0.72rem',
              fontWeight: 700,
              color: '#E8622A',
              whiteSpace: 'nowrap',
            }}
          >
            East Valley · Mesa · Gilbert · Chandler · Scottsdale
          </span>
          <span
            style={{
              display: 'inline-block',
              width: '36px',
              height: '1px',
              background: 'linear-gradient(to left, transparent, rgba(232,98,42,0.7))',
            }}
          />
        </div>

        {/* Headline */}
        <h1
          id="hero-headline"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            textTransform: 'uppercase',
            fontWeight: 900,
            letterSpacing: '-0.02em',
            lineHeight: 0.9,
            color: '#F5F0EB',
            fontSize: 'clamp(3.8rem, 11vw, 9.5rem)',
            marginBottom: '2rem',
            maxWidth: '14ch',
          }}
        >
          PAIN
          {' '}
          <br className="hidden sm:inline" />
          MANAGEMENT,
          {' '}
          <br />
          <span
            style={{
              background: 'linear-gradient(135deg, #E8622A 0%, #F07A45 45%, #C4A882 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              display: 'inline-block',
            }}
          >
            REWIRED.
          </span>
        </h1>

        {/* Sub-copy */}
        <p
          id="hero-sub"
          style={{
            fontFamily: "'Noto Sans', sans-serif",
            fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
            fontWeight: 300,
            color: '#8A9BA8',
            lineHeight: 1.8,
            maxWidth: '54ch',
            marginBottom: '3rem',
          }}
        >
          Advanced physical medicine, neuropathy repair, metabolic optimization,
          and longevity therapies — two Mesa clinics, no referral required.
        </p>

        {/* CTA row */}
        <div
          id="hero-ctas"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'center',
            marginBottom: '4.5rem',
          }}
        >
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
              fontSize: '0.95rem',
              fontWeight: 700,
              padding: '0.9rem 2.5rem',
              background: 'linear-gradient(135deg, #E8622A 0%, #C44E1E 100%)',
              color: '#FFFFFF',
              borderRadius: '3px',
              textDecoration: 'none',
              cursor: 'pointer',
              boxShadow: '0 0 32px rgba(232,98,42,0.38), 0 4px 20px rgba(232,98,42,0.28)',
              transition: 'box-shadow 250ms ease, transform 250ms ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = '0 0 56px rgba(232,98,42,0.6), 0 8px 28px rgba(232,98,42,0.45)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = '0 0 32px rgba(232,98,42,0.38), 0 4px 20px rgba(232,98,42,0.28)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Book Consultation
          </a>

          <a
            href="tel:+14806495297"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
              fontSize: '0.95rem',
              fontWeight: 700,
              padding: '0.9rem 2.5rem',
              background: 'rgba(232,98,42,0.07)',
              color: '#E8622A',
              border: '1px solid rgba(232,98,42,0.35)',
              borderRadius: '3px',
              textDecoration: 'none',
              cursor: 'pointer',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              transition: 'background 250ms ease, border-color 250ms ease, box-shadow 250ms ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(232,98,42,0.14)';
              e.currentTarget.style.borderColor = 'rgba(232,98,42,0.65)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(232,98,42,0.2)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(232,98,42,0.07)';
              e.currentTarget.style.borderColor = 'rgba(232,98,42,0.35)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Call (480) 649-5297
          </a>
        </div>

        {/* Stats row */}
        <div
          id="hero-stats"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.875rem',
            justifyContent: 'center',
          }}
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              style={{
                padding: '1rem 1.75rem',
                background: 'rgba(20,22,24,0.65)',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                border: '1px solid rgba(232,98,42,0.14)',
                borderRadius: '4px',
                textAlign: 'center',
                minWidth: '130px',
                transition: 'border-color 250ms ease, box-shadow 250ms ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(232,98,42,0.35)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(232,98,42,0.12)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(232,98,42,0.14)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)',
                  fontWeight: 900,
                  color: '#E8622A',
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                  marginBottom: '0.3rem',
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "'Noto Sans', sans-serif",
                  fontSize: '0.68rem',
                  color: '#6A7A85',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  fontWeight: 500,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
        style={{ animation: 'bounce 2s ease-in-out infinite' }}
      >
        <span
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            textTransform: 'uppercase',
            letterSpacing: '0.25em',
            fontSize: '0.6rem',
            color: 'rgba(196,168,130,0.4)',
          }}
        >
          Explore
        </span>
        <svg width="14" height="20" viewBox="0 0 14 20" fill="none" aria-hidden="true">
          <path d="M7 1v14M1 9l6 6 6-6" stroke="rgba(196,168,130,0.35)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
      `}</style>
    </section>
  );
}
