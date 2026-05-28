'use client';

const WHY_ITEMS = [
  {
    number: '01',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 3C8.477 3 4 7.477 4 13s4.477 10 10 10 10-4.477 10-10S19.523 3 14 3z" stroke="#4A7C59" strokeWidth="1.5" />
        <path d="M14 8v6l4 2" stroke="#4A7C59" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'No Referral Required',
    body: 'Skip the runaround. Walk in, call, or book online — we see you directly with same-day and next-day appointments available at both Mesa locations.',
    accent: '#4A7C59',
  },
  {
    number: '02',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M4 14h4l3-8 4 16 3-8h6" stroke="#E8622A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Multi-Discipline Under One Roof',
    body: 'Physicians, chiropractors, and physical therapists work in coordination — targeting your pain at every layer: nerve, structure, and muscle.',
    accent: '#E8622A',
  },
  {
    number: '03',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 4l2.5 5 5.5.8-4 3.9.95 5.5L14 16.5l-4.95 2.7.95-5.5-4-3.9 5.5-.8L14 4z" stroke="#C4A882" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Insurance-Friendly Care',
    body: 'We work with Medicare, BCBS, Aetna, United, Cigna, Humana, and more — so you get access to advanced therapies without the financial guesswork.',
    accent: '#C4A882',
  },
];

const B2B_PROGRAMS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="#E8622A" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 22V12h6v10" stroke="#E8622A" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    label: 'Realtors',
    text: 'Refer your clients relocating to the East Valley — we\'ll ensure they have a trusted provider from day one. Referral tracking and client care coordination available.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" stroke="#E8622A" strokeWidth="1.5" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="#E8622A" strokeWidth="1.5" />
        <path d="M12 12v4M10 14h4" stroke="#E8622A" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: 'Property Managers',
    text: 'Provide your tenants and community residents priority access to East Valley healthcare. On-site wellness events and bulk consultation packages available.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="#E8622A" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="9" cy="7" r="4" stroke="#E8622A" strokeWidth="1.5" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="#E8622A" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: 'Employers & HR',
    text: 'Offer your team access to functional medicine and pain management. Reduce worker comp claims and absenteeism with proactive care programs.',
  },
];

export default function DesertProblem() {
  return (
    <div id="problem-section">

      {/* ── Why Choose Us ────────────────────────────────────────────────── */}
      <section
        style={{
          background: '#0A0C0E',
          padding: 'clamp(5rem,10vw,9rem) clamp(1.25rem,5vw,5rem)',
          borderTop: '1px solid rgba(232,98,42,0.1)',
        }}
        aria-label="Why choose City Health AZ"
      >
        {/* Top accent line */}
        <div
          style={{
            width: '100%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(232,98,42,0.4), rgba(74,124,89,0.3), transparent)',
            marginBottom: 'clamp(3rem,7vw,6rem)',
          }}
          aria-hidden="true"
        />

        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

          {/* Section heading */}
          <div style={{ marginBottom: 'clamp(3rem,6vw,5rem)' }}>
            <p
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                textTransform: 'uppercase',
                letterSpacing: '0.28em',
                fontSize: '0.72rem',
                fontWeight: 700,
                color: '#4A7C59',
                marginBottom: '0.75rem',
              }}
            >
              Why City Health AZ
            </p>
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
              HEALTHCARE THAT{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #E8622A, #C4A882)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                WORKS
              </span>{' '}
              FOR YOU
            </h2>
          </div>

          {/* Why grid */}
          <div
            id="problem-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {WHY_ITEMS.map((item) => (
              <div
                key={item.number}
                style={{
                  padding: '2.25rem 2rem',
                  background: 'rgba(20,22,24,0.5)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '4px',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  transition: 'border-color 300ms ease, box-shadow 300ms ease',
                  cursor: 'default',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = `rgba(${item.accent === '#E8622A' ? '232,98,42' : item.accent === '#4A7C59' ? '74,124,89' : '196,168,130'},0.3)`;
                  e.currentTarget.style.boxShadow = `0 0 30px rgba(${item.accent === '#E8622A' ? '232,98,42' : item.accent === '#4A7C59' ? '74,124,89' : '196,168,130'},0.1)`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Top accent line per card */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: `linear-gradient(90deg, ${item.accent}, transparent)`,
                  }}
                  aria-hidden="true"
                />

                {/* Icon + number */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.5rem',
                  }}
                >
                  <div
                    style={{
                      padding: '0.6rem',
                      background: 'rgba(20,22,24,0.9)',
                      border: `1px solid rgba(${item.accent === '#E8622A' ? '232,98,42' : item.accent === '#4A7C59' ? '74,124,89' : '196,168,130'},0.2)`,
                      borderRadius: '6px',
                    }}
                  >
                    {item.icon}
                  </div>
                  <span
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: '3rem',
                      fontWeight: 900,
                      color: 'rgba(255,255,255,0.04)',
                      letterSpacing: '-0.04em',
                      lineHeight: 1,
                    }}
                  >
                    {item.number}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    textTransform: 'uppercase',
                    fontSize: '1.4rem',
                    fontWeight: 800,
                    letterSpacing: '0.02em',
                    color: '#F5F0EB',
                    marginBottom: '0.875rem',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Noto Sans', sans-serif",
                    fontSize: '0.875rem',
                    lineHeight: 1.75,
                    color: '#7E8E9A',
                    fontWeight: 300,
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── B2B / Referral Programs ──────────────────────────────────────── */}
      <section
        id="b2b-section"
        style={{
          background: 'rgba(20,22,24,0.5)',
          padding: 'clamp(4rem,8vw,7rem) clamp(1.25rem,5vw,5rem)',
          borderTop: '1px solid rgba(255,255,255,0.04)',
          borderBottom: '1px solid rgba(255,255,255,0.04)',
        }}
        aria-label="B2B and Referral Programs"
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

          {/* Split layout */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '4rem',
              alignItems: 'start',
            }}
          >
            {/* Left — copy */}
            <div>
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
                Partner Programs
              </p>
              <h2
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  textTransform: 'uppercase',
                  fontWeight: 900,
                  fontSize: 'clamp(2.4rem, 6vw, 4.5rem)',
                  letterSpacing: '-0.03em',
                  lineHeight: 0.92,
                  color: '#F5F0EB',
                  marginBottom: '1.5rem',
                }}
              >
                BUILT FOR{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #E8622A, #C4A882)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  PROFESSIONALS
                </span>
              </h2>
              <p
                style={{
                  fontFamily: "'Noto Sans', sans-serif",
                  fontSize: '0.95rem',
                  lineHeight: 1.8,
                  color: '#7E8E9A',
                  fontWeight: 300,
                  marginBottom: '2rem',
                  maxWidth: '44ch',
                }}
              >
                Realtors, property managers, and employers — partner with
                City Health AZ to give your clients, tenants, and teams access to
                East Valley&apos;s most trusted integrated medical practice.
              </p>
              <a
                href="#desert-cta-section"
                onClick={e => {
                  e.preventDefault();
                  document.getElementById('desert-cta-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  fontFamily: "'Barlow Condensed', sans-serif",
                  textTransform: 'uppercase',
                  letterSpacing: '0.16em',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: '#E8622A',
                  textDecoration: 'none',
                  borderBottom: '1px solid rgba(232,98,42,0.35)',
                  paddingBottom: '2px',
                  cursor: 'pointer',
                  transition: 'border-color 200ms ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(232,98,42,0.8)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(232,98,42,0.35)')}
              >
                Become a Partner
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            {/* Right — program cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {B2B_PROGRAMS.map((prog) => (
                <div
                  key={prog.label}
                  style={{
                    display: 'flex',
                    gap: '1.25rem',
                    alignItems: 'flex-start',
                    padding: '1.5rem',
                    background: 'rgba(10,12,14,0.6)',
                    border: '1px solid rgba(232,98,42,0.1)',
                    borderRadius: '4px',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    transition: 'border-color 250ms ease, box-shadow 250ms ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(232,98,42,0.3)';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(232,98,42,0.08)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(232,98,42,0.1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div
                    style={{
                      padding: '0.5rem',
                      background: 'rgba(232,98,42,0.08)',
                      border: '1px solid rgba(232,98,42,0.18)',
                      borderRadius: '6px',
                      flexShrink: 0,
                    }}
                  >
                    {prog.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        fontSize: '0.95rem',
                        fontWeight: 800,
                        color: '#F5F0EB',
                        marginBottom: '0.4rem',
                      }}
                    >
                      {prog.label}
                    </div>
                    <p
                      style={{
                        fontFamily: "'Noto Sans', sans-serif",
                        fontSize: '0.82rem',
                        lineHeight: 1.7,
                        color: '#7E8E9A',
                        fontWeight: 300,
                      }}
                    >
                      {prog.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
