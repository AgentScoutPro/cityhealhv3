'use client';

const TEAM = [
  {
    id: 'dr-garcia',
    name: 'Dr. Maria Garcia',
    credential: 'DC, CCSP',
    title: 'Clinical Director',
    specialization: 'Spinal Decompression · Structural Correction',
    bio: 'Doctoral degree in Chiropractic Medicine with 12 years specializing in complex disc conditions. Dr. Garcia has treated 1,400+ decompression cases and developed the clinic\'s proprietary biomechanical assessment protocol.',
    initials: 'MG',
    accentRgb: '0,196,166',
    accent: '#00C4A6',
  },
  {
    id: 'dr-chen',
    name: 'Dr. James Chen',
    credential: 'DC, CSCS',
    title: 'Lead Chiropractor',
    specialization: 'Diversified Technique · Sports Rehab',
    bio: 'Board-certified in chiropractic orthopedics. Former team chiropractor for Division I athletics. Specializes in biomechanical dysfunction and high-performance recovery protocols for active and athletic patients.',
    initials: 'JC',
    accentRgb: '107,95,232',
    accent: '#6B5FE8',
  },
  {
    id: 'dr-okafor',
    name: 'Dr. Adaeze Okafor',
    credential: 'DPT, OCS',
    title: 'Director of Physiotherapy',
    specialization: 'Neuromuscular Rehab · Manual Therapy',
    bio: 'Doctorate in Physical Therapy with post-graduate training in manual orthopedics and dry needling. Dr. Okafor leads the integrative physiotherapy program and corrective exercise system across both Mesa clinics.',
    initials: 'AO',
    accentRgb: '0,232,196',
    accent: '#00E8C4',
  },
];

export default function PrecisionTeam() {
  return (
    <section
      id="precision-team"
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
          background: 'linear-gradient(to right, transparent, rgba(0,196,166,0.1) 50%, transparent)',
        }}
      />

      <div className="max-w-[1280px] mx-auto">

        {/* Section header */}
        <div id="team-header-v4" style={{ marginBottom: '5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.65rem',
              textTransform: 'uppercase',
              letterSpacing: '0.3em',
              color: '#00C4A6',
              fontWeight: 600,
            }}>
              05 / Our Specialists
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
            THE CLINICAL
            <br />
            <span style={{
              WebkitTextStroke: '1px rgba(0,196,166,0.45)',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
              display: 'inline-block',
            }}>
              TEAM.
            </span>
          </h2>
        </div>

        {/* Team grid */}
        <div
          id="team-grid-v4"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {TEAM.map((member) => (
            <div
              key={member.id}
              className="team-card-v4"
              style={{
                background: 'rgba(12,16,24,0.8)',
                border: `1px solid rgba(${member.accentRgb}, 0.08)`,
                borderRadius: '8px',
                overflow: 'hidden',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                cursor: 'default',
                transition: 'border-color 350ms, box-shadow 350ms, transform 300ms',
                position: 'relative',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `rgba(${member.accentRgb}, 0.28)`;
                e.currentTarget.style.boxShadow = `0 0 48px rgba(${member.accentRgb}, 0.07), 0 28px 56px rgba(0,0,0,0.38)`;
                e.currentTarget.style.transform = 'translateY(-6px)';
                const bio = e.currentTarget.querySelector('.team-bio-v4');
                if (bio) {
                  bio.style.maxHeight = '140px';
                  bio.style.opacity = '1';
                }
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = `rgba(${member.accentRgb}, 0.08)`;
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
                const bio = e.currentTarget.querySelector('.team-bio-v4');
                if (bio) {
                  bio.style.maxHeight = '0';
                  bio.style.opacity = '0';
                }
              }}
            >
              {/* Color bar */}
              <div style={{
                height: '4px',
                background: `linear-gradient(to right, rgba(${member.accentRgb}, 0.65), rgba(${member.accentRgb}, 0.1))`,
              }} />

              {/* Avatar + specialization */}
              <div style={{ padding: '2.25rem 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                <div style={{
                  width: '68px',
                  height: '68px',
                  borderRadius: '50%',
                  background: `radial-gradient(circle at 35% 35%, rgba(${member.accentRgb}, 0.28), rgba(${member.accentRgb}, 0.06))`,
                  border: `1px solid rgba(${member.accentRgb}, 0.22)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: '1.35rem',
                  fontWeight: 800,
                  color: `rgba(${member.accentRgb}, 0.9)`,
                  letterSpacing: '-0.02em',
                }}>
                  {member.initials}
                </div>
                <div style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '0.56rem',
                  color: `rgba(${member.accentRgb}, 0.55)`,
                  letterSpacing: '0.06em',
                  lineHeight: 1.7,
                }}>
                  {member.specialization}
                </div>
              </div>

              {/* Name + title */}
              <div style={{ padding: '1rem 2rem 1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.2rem', flexWrap: 'wrap' }}>
                  <h3 style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800,
                    fontSize: '1.15rem',
                    letterSpacing: '-0.01em',
                    color: '#EDF3FA',
                    textTransform: 'uppercase',
                  }}>
                    {member.name}
                  </h3>
                  <span style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.6rem',
                    color: `rgba(${member.accentRgb}, 0.55)`,
                    letterSpacing: '0.06em',
                  }}>
                    {member.credential}
                  </span>
                </div>
                <p style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.68rem',
                  color: `rgba(${member.accentRgb}, 0.65)`,
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  fontWeight: 600,
                  marginBottom: '1rem',
                }}>
                  {member.title}
                </p>

                {/* Expandable bio */}
                <div
                  className="team-bio-v4"
                  style={{
                    maxHeight: '0',
                    opacity: 0,
                    overflow: 'hidden',
                    transition: 'max-height 400ms ease, opacity 320ms ease',
                  }}
                >
                  <p style={{
                    fontFamily: "'Noto Sans', sans-serif",
                    fontSize: '0.78rem',
                    color: '#3A5468',
                    fontWeight: 300,
                    lineHeight: 1.85,
                    borderTop: `1px solid rgba(${member.accentRgb}, 0.1)`,
                    paddingTop: '0.875rem',
                  }}>
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
