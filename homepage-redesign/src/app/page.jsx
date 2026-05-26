'use client';

import { useState } from 'react';

const PHONE      = '(480) 649-5297';
const PHONE_HREF = 'tel:+14806495297';

const PILLARS = [
  {
    label:  'NEUROPATHY REPAIR',
    body:   'Wake up sleeping nerves. RST-Sanexas electric cell signaling delivers pharmaceutical-grade electronic pulses to repair damaged peripheral nerve pathways, clear chronic numbness, and silence burning pain at the source.',
    cta:    '[ ACCESS NEURAL RESTORATION ]',
    status: '// DELIVERING QUANTUM CELL SIGNALING TO DAMAGED AFFERENT FIBERS',
  },
  {
    label:  'PHYSICAL MEDICINE',
    body:   'Reclaim biological fluidity. Our integrated team of physicians, chiropractors, and physical therapists align your structural framework to eliminate back pain, sciatica, arthritis, and personal injuries without surgery.',
    cta:    '[ ALIGN BIO-MECHANICS ]',
    status: '// CALCULATING VECTOR FORCE ALIGNMENT FOR KINETIC FLUIDITY',
  },
  {
    label:  'WEIGHT LOSS PROTOCOL',
    body:   'Engineered metabolic shift. Physician-supervised peptide therapy (Tirzepatide), IV nutrition, and biometric monitoring produce sustainable body composition change via precision metabolic cascade protocol.',
    cta:    '[ REWIRE METABOLISM ]',
    status: '// MONITORING TIRZEPATIDE PEPTIDE SYNTHESIS & METABOLIC RATE CASCADE',
  },
  {
    label:  'LONGEVITY & HRT',
    body:   'Defy chronological limits. Clinical Hormone Replacement Therapy, cellular anti-aging protocols, and regenerative aesthetic treatments restore internal vitality and outward performance simultaneously.',
    cta:    '[ RECLAIM VITALITY ]',
    status: '// OPTIMIZING CELLULAR PERFORMANCE & HRT BIOMETRIC EQUILIBRIUM',
  },
];

const INSURANCE = ['MEDICARE','UNITEDHEALTHCARE','BCBS','CIGNA','AETNA','HUMANA','TRICARE','HEALTH NET','UMR'];

// ── Shared style tokens ─────────────────────────────────────────────────────
const CYAN      = '#00F2FE';
const TEAL      = '#43E97B';
const DEEP      = '#0D1117';
const CARD_BG   = 'rgba(255,255,255,0.02)';
const CARD_BDR  = '1px solid rgba(255,255,255,0.1)';
const MONO      = "'SF Mono', 'Fira Code', 'Fira Mono', monospace";
const SANS      = "'Inter', 'Helvetica Neue', Arial, sans-serif";
const CONDENSED = "'Arial Narrow', 'Helvetica Condensed', Arial, sans-serif";

export default function HomePage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 700));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <>
      {/* ── Global CSS animations ─────────────────────────────────────────── */}
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: ${DEEP}; }

        @keyframes gridPulse {
          0%,100% { opacity: 0.04; }
          50%      { opacity: 0.09; }
        }
        @keyframes scanDown {
          0%   { transform: translateY(-100%); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes glowBreathe {
          0%,100% { box-shadow: 0 0 24px rgba(0,242,254,0.08); }
          50%     { box-shadow: 0 0 48px rgba(0,242,254,0.22); }
        }
        @keyframes neonFlicker {
          0%,100% { opacity: 1;   }
          92%     { opacity: 1;   }
          93%     { opacity: 0.4; }
          94%     { opacity: 1;   }
          96%     { opacity: 0.6; }
          97%     { opacity: 1;   }
        }
        @keyframes marqueeScroll {
          from { transform: translateX(0);    }
          to   { transform: translateX(-50%); }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes dotPing {
          0%,100% { transform: scale(1);   opacity: 1; }
          50%     { transform: scale(1.6); opacity: 0.5; }
        }

        .pill-card {
          transition: border-color 300ms ease, box-shadow 300ms ease, transform 200ms ease;
        }
        .pill-card:hover {
          border-color: rgba(0,242,254,0.4) !important;
          box-shadow: 0 0 40px rgba(0,242,254,0.14) !important;
          transform: translateY(-3px);
        }
        .loc-card {
          transition: border-color 300ms ease, box-shadow 300ms ease;
        }
        .loc-card:hover {
          border-color: rgba(0,242,254,0.35) !important;
          box-shadow: 0 0 50px rgba(0,242,254,0.12) !important;
        }
        .cta-btn {
          transition: opacity 200ms ease, box-shadow 200ms ease;
        }
        .cta-btn:hover {
          opacity: 0.88;
          box-shadow: 0 0 40px rgba(0,242,254,0.4) !important;
        }
        .ghost-btn {
          transition: background 200ms ease, color 200ms ease;
        }
        .ghost-btn:hover {
          background: rgba(0,242,254,0.08) !important;
        }
        select option { background: #0D1117; color: #E8EDF4; }
        input::placeholder { color: #3a4a5a; }
        input:focus, select:focus { outline: none; border-color: ${CYAN} !important; }

        @media (max-width: 768px) {
          .bento-grid { grid-template-columns: 1fr !important; }
          .loc-grid   { flex-direction: column !important; }
          .hero-ctas  { flex-direction: column; align-items: stretch; }
          .hero-ctas a { text-align: center; }
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div style={{ background: DEEP, minHeight: '100vh', color: '#E8EDF4', overflowX: 'hidden' }}>

        {/* ── NAV ──────────────────────────────────────────────────────────── */}
        <nav style={{
          position: 'sticky', top: 0, zIndex: 100,
          background: 'rgba(13,17,23,0.96)', backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0,242,254,0.1)',
          padding: '0 clamp(1.25rem,5vw,5rem)',
          height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <span style={{
            fontFamily: CONDENSED, fontWeight: 800, fontSize: '1.2rem',
            textTransform: 'uppercase', letterSpacing: '0.08em',
            background: 'linear-gradient(90deg,#00F2FE,#4FACFE)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            animation: 'neonFlicker 8s ease-in-out infinite',
          }}>
            City Health AZ
          </span>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            {['Services','Locations','About'].map(l => (
              <a key={l} href="#" style={{ fontFamily: MONO, fontSize: '0.7rem', color: '#7E9BB5', textDecoration: 'none', letterSpacing: '0.12em', textTransform: 'uppercase', transition: 'color 150ms ease' }}
                onMouseEnter={e => e.currentTarget.style.color = CYAN}
                onMouseLeave={e => e.currentTarget.style.color = '#7E9BB5'}
              >{l}</a>
            ))}
            <a href={PHONE_HREF} style={{
              fontFamily: MONO, fontSize: '0.75rem', fontWeight: 700,
              color: CYAN, textDecoration: 'none', letterSpacing: '0.06em',
            }}>{PHONE}</a>
          </div>
        </nav>

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section style={{
          position: 'relative', minHeight: 'calc(100vh - 64px)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          padding: 'clamp(4rem,10vw,8rem) clamp(1.5rem,5vw,5rem)',
          overflow: 'hidden', textAlign: 'center',
        }}>
          {/* Animated dot-grid */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            backgroundImage: `radial-gradient(circle, rgba(0,242,254,0.15) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            animation: 'gridPulse 5s ease-in-out infinite',
          }} aria-hidden="true" />

          {/* Scanning horizontal line */}
          <div style={{
            position: 'absolute', left: 0, right: 0, height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(0,242,254,0.6), transparent)',
            animation: 'scanDown 6s linear infinite',
            pointerEvents: 'none',
          }} aria-hidden="true" />

          {/* Radial bloom */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%,-50%)',
            width: '900px', height: '900px',
            background: 'radial-gradient(ellipse, rgba(79,172,254,0.06) 0%, transparent 65%)',
            pointerEvents: 'none',
          }} aria-hidden="true" />

          <div style={{ position: 'relative', zIndex: 10, maxWidth: '960px', animation: 'fadeUp 0.8s ease both' }}>
            <p style={{ fontFamily: MONO, fontSize: '0.65rem', letterSpacing: '0.3em', color: CYAN, marginBottom: '1.75rem', textTransform: 'uppercase' }}>
              <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: CYAN, marginRight: '0.6rem', verticalAlign: 'middle', animation: 'dotPing 2s ease-in-out infinite' }} />
              MESA, AZ — EAST VALLEY CLINICAL NETWORK — ACCEPTING NEW PATIENTS
            </p>

            <h1 style={{
              fontSize: 'clamp(3rem,8.5vw,7rem)', fontWeight: 900,
              lineHeight: 0.95, letterSpacing: '-0.025em',
              textTransform: 'uppercase', marginBottom: '2rem', fontFamily: CONDENSED,
            }}>
              PAIN MANAGEMENT,{' '}
              <br />
              <span style={{
                background: 'linear-gradient(90deg,#00F2FE 0%,#4FACFE 50%,#43E97B 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>
                REWIRED.
              </span>
            </h1>

            <p style={{
              fontSize: 'clamp(0.9rem,2vw,1.1rem)', color: '#7E9BB5',
              lineHeight: 1.75, maxWidth: '580px', margin: '0 auto 2.75rem',
              fontWeight: 300, fontFamily: SANS,
            }}>
              Advanced neuropathy repair, physical medicine, metabolic optimization, and regenerative therapies — engineered around your biology, not around your symptoms.
            </p>

            <div className="hero-ctas" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#booking" className="cta-btn" style={{
                padding: '1rem 2.75rem',
                background: 'linear-gradient(90deg,#00F2FE,#4FACFE)',
                color: DEEP, fontFamily: MONO, fontSize: '0.7rem', fontWeight: 700,
                letterSpacing: '0.2em', textTransform: 'uppercase',
                textDecoration: 'none', cursor: 'pointer',
                boxShadow: '0 0 30px rgba(0,242,254,0.3)',
              }}>
                [ INITIALIZE RECOVERY ]
              </a>
              <a href={PHONE_HREF} className="ghost-btn" style={{
                padding: '1rem 2.75rem',
                background: 'transparent',
                border: '1px solid rgba(0,242,254,0.3)',
                color: CYAN, fontFamily: MONO, fontSize: '0.7rem', fontWeight: 700,
                letterSpacing: '0.2em', textTransform: 'uppercase',
                textDecoration: 'none', cursor: 'pointer',
              }}>
                {PHONE}
              </a>
            </div>
          </div>
        </section>

        {/* ── BENTO SERVICE GRID ───────────────────────────────────────────── */}
        <section style={{
          padding: 'clamp(5rem,10vw,8rem) clamp(1.5rem,5vw,5rem)',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          position: 'relative',
        }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ marginBottom: '3.5rem' }}>
              <p style={{ fontFamily: MONO, fontSize: '0.65rem', letterSpacing: '0.3em', color: CYAN, marginBottom: '0.5rem' }}>
                // INTEGRATED PATHWAYS
              </p>
              <h2 style={{ fontFamily: CONDENSED, fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.01em' }}>
                THE RESTORATIONS
              </h2>
            </div>

            <div className="bento-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1.5rem' }}>
              {PILLARS.map((p, i) => (
                <div
                  key={p.label}
                  className="pill-card"
                  style={{
                    background: CARD_BG, border: CARD_BDR,
                    backdropFilter: 'blur(24px)',
                    padding: '2.5rem',
                    minHeight: '340px',
                    display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                    position: 'relative', overflow: 'hidden', cursor: 'pointer',
                    animation: `fadeUp 0.6s ${0.1 + i * 0.1}s ease both`,
                    boxShadow: hoveredCard === i ? '0 0 40px rgba(0,242,254,0.14)' : 'none',
                  }}
                  onMouseEnter={() => setHoveredCard(i)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Top neon accent */}
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,transparent,rgba(0,242,254,0.5),transparent)' }} />
                  {/* Corner accents */}
                  <div style={{ position: 'absolute', top: 0, right: 0, width: '14px', height: '14px', borderTop: `2px solid ${hoveredCard === i ? CYAN : 'transparent'}`, borderRight: `2px solid ${hoveredCard === i ? CYAN : 'transparent'}`, transition: 'border-color 300ms ease' }} />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, width: '14px', height: '14px', borderBottom: `2px solid ${hoveredCard === i ? CYAN : 'transparent'}`, borderLeft: `2px solid ${hoveredCard === i ? CYAN : 'transparent'}`, transition: 'border-color 300ms ease' }} />

                  <div>
                    <h3 style={{
                      fontFamily: CONDENSED, fontSize: 'clamp(1.1rem,2.5vw,1.4rem)',
                      fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.04em',
                      color: hoveredCard === i ? CYAN : '#E8EDF4',
                      transition: 'color 300ms ease', marginBottom: '1.25rem',
                    }}>
                      {p.label}
                    </h3>
                    <p style={{ fontFamily: SANS, fontSize: '0.875rem', color: '#94A3B8', lineHeight: 1.7, fontWeight: 300 }}>
                      {p.body}
                    </p>
                  </div>

                  <div style={{ marginTop: '2rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <p style={{ fontFamily: MONO, fontSize: '0.68rem', fontWeight: 700, color: hoveredCard === i ? '#E8EDF4' : TEAL, letterSpacing: '0.15em', transition: 'color 300ms ease', marginBottom: '0.6rem' }}>
                      {p.cta} →
                    </p>
                    <p style={{ fontFamily: MONO, fontSize: '0.6rem', color: '#3a4a5a', letterSpacing: '0.08em', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {p.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LOCATION CARDS ───────────────────────────────────────────────── */}
        <section style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          padding: 'clamp(5rem,10vw,8rem) clamp(1.5rem,5vw,5rem)',
        }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ marginBottom: '3.5rem' }}>
              <p style={{ fontFamily: MONO, fontSize: '0.65rem', letterSpacing: '0.3em', color: CYAN, marginBottom: '0.5rem' }}>
                // FACILITY ACCESS POINTS
              </p>
              <h2 style={{ fontFamily: CONDENSED, fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.01em' }}>
                TWO MODERN SPACES
              </h2>
            </div>

            <div className="loc-grid" style={{ display: 'flex', gap: '1.5rem' }}>
              {[
                {
                  mask: 'LONGMORE',
                  title: 'Central Mesa Hub',
                  address: '1303 S Longmore #8\nMesa, AZ 85202',
                  coverage: 'Serving Mesa, Tempe, and the Central East Valley. Walk-in slots available. Multi-specialty team on-site.',
                  maps: 'https://maps.app.goo.gl/Xpu1YzR7T1DPsNK1A',
                  statusA: '[ HUB: LONGMORE_RD ] // ACCEPTING NEW PATIENTS',
                  statusB: '[ WALK-IN SYSTEM OPERATIONAL ] // CENTRAL MESA NODE CONNECTED',
                },
                {
                  mask: 'POWER',
                  title: 'East Mesa Gateway Hub',
                  address: '1234 S Power Rd Suite 202\nMesa, AZ 85206',
                  coverage: 'Serving East Mesa, Gilbert, Apache Junction, and Queen Creek. Full diagnostic suite. Integrated multi-specialty team.',
                  maps: 'https://maps.app.goo.gl/Tz165GJY2pBQNi996',
                  statusA: '[ HUB: POWER_RD ] // ACCEPTING NEW PATIENTS',
                  statusB: '[ EAST MESA NODE CONNECTED ] // INTEGRATED TEAM READY',
                },
              ].map((loc, i) => (
                <div
                  key={loc.mask}
                  className="loc-card"
                  style={{
                    flex: 1, minHeight: '400px',
                    background: CARD_BG, border: CARD_BDR,
                    backdropFilter: 'blur(24px)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    position: 'relative', overflow: 'hidden', cursor: 'pointer',
                    animation: `fadeUp 0.6s ${0.2 + i * 0.15}s ease both`,
                  }}
                >
                  {/* Mask text */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    pointerEvents: 'none', userSelect: 'none',
                    opacity: 0.04,
                  }}>
                    <span style={{ fontFamily: CONDENSED, fontSize: '14vw', fontWeight: 900, color: '#fff', letterSpacing: '-0.05em', textTransform: 'uppercase' }}>
                      {loc.mask}
                    </span>
                  </div>

                  {/* Content */}
                  <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '3rem 2rem', maxWidth: '380px' }}>
                    <p style={{ fontFamily: MONO, fontSize: '0.6rem', letterSpacing: '0.2em', color: CYAN, marginBottom: '0.75rem', textTransform: 'uppercase' }}>
                      // ACCESS POINT DISCOVERED
                    </p>
                    <h3 style={{ fontFamily: CONDENSED, fontSize: '1.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#E8EDF4', marginBottom: '0.75rem' }}>
                      {loc.title}
                    </h3>
                    <p style={{ fontFamily: MONO, fontSize: '0.75rem', color: '#7E9BB5', lineHeight: 1.6, letterSpacing: '0.05em', whiteSpace: 'pre-line', marginBottom: '0.75rem' }}>
                      {loc.address}
                    </p>
                    <p style={{ fontFamily: SANS, fontSize: '0.8rem', color: '#4E6A7E', lineHeight: 1.65, marginBottom: '1.75rem' }}>
                      {loc.coverage}
                    </p>
                    <a href={loc.maps} target="_blank" rel="noopener noreferrer" style={{
                      display: 'inline-block',
                      padding: '0.75rem 1.75rem',
                      border: '1px solid rgba(255,255,255,0.1)',
                      background: 'rgba(255,255,255,0.03)',
                      color: '#E8EDF4', fontFamily: MONO, fontSize: '0.65rem',
                      letterSpacing: '0.15em', textTransform: 'uppercase',
                      textDecoration: 'none', cursor: 'pointer',
                      transition: 'background 200ms ease, border-color 200ms ease',
                    }}
                      onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = DEEP; }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.color = '#E8EDF4'; }}
                    >
                      [ ROUTE TO {loc.mask} ]
                    </a>
                    <p style={{ fontFamily: MONO, fontSize: '0.58rem', color: '#2a3a4a', marginTop: '1.25rem', letterSpacing: '0.08em' }}>
                      {loc.statusA}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INSURANCE MARQUEE ────────────────────────────────────────────── */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          background: 'rgba(0,0,0,0.3)', padding: '1.25rem 0',
          overflow: 'hidden',
        }}>
          <div style={{ display: 'flex', animation: 'marqueeScroll 28s linear infinite' }}>
            {[...INSURANCE, ...INSURANCE, ...INSURANCE, ...INSURANCE].map((ins, idx) => (
              <span key={idx} style={{ fontFamily: MONO, fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', color: '#3a5a6a', textTransform: 'uppercase', whiteSpace: 'nowrap', padding: '0 2.5rem', flexShrink: 0 }}>
                <span style={{ color: CYAN, marginRight: '0.5rem' }}>•</span>
                NETWORK COMPATIBLE: {ins}
              </span>
            ))}
          </div>
        </div>

        {/* ── BOOKING CARD ─────────────────────────────────────────────────── */}
        <section id="booking" style={{
          padding: 'clamp(5rem,10vw,9rem) clamp(1.5rem,5vw,5rem)',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          position: 'relative', overflow: 'hidden',
        }}>
          {/* Bloom */}
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(79,172,254,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 10 }}>
            <p style={{ fontFamily: MONO, fontSize: '0.65rem', letterSpacing: '0.3em', color: CYAN, marginBottom: '1rem' }}>
              // SELECT YOUR TREATMENT TRACK
            </p>
            <h2 style={{
              fontFamily: CONDENSED, fontSize: 'clamp(1.8rem,5vw,4rem)',
              fontWeight: 900, textTransform: 'uppercase', lineHeight: 1,
              marginBottom: '3.5rem', letterSpacing: '-0.01em',
            }}>
              LESS THAN 1% OF PATIENTS APPRECIATE COPING.{' '}
              <span style={{ background: 'linear-gradient(90deg,#00F2FE,#4FACFE)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                START REPAIRING.
              </span>
            </h2>

            {/* Booking card */}
            <div style={{
              maxWidth: '520px', margin: '0 auto',
              background: CARD_BG, border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(32px)', padding: 'clamp(2rem,5vw,3rem)',
              position: 'relative', animation: 'glowBreathe 4s ease-in-out infinite',
            }}>
              {/* Top neon line */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,transparent,#00F2FE,transparent)' }} />

              {submitted ? (
                <div style={{ padding: '2rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
                  <div style={{
                    width: '52px', height: '52px', borderRadius: '50%',
                    background: 'linear-gradient(135deg,#00F2FE,#4FACFE)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path d="M4 12l5 5 9-10" stroke={DEEP} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 style={{ fontFamily: CONDENSED, fontSize: '1.3rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.15em', color: CYAN }}>
                    Protocol Initialized
                  </h3>
                  <p style={{ fontFamily: SANS, fontSize: '0.875rem', color: '#7E9BB5', maxWidth: '30ch', lineHeight: 1.65, textAlign: 'center' }}>
                    Our team will contact you within 2 business hours to confirm your appointment.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left' }}>
                  <div>
                    <label style={{ display: 'block', fontFamily: MONO, fontSize: '0.6rem', color: '#7E9BB5', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                      Primary Symptom / Treatment Track
                    </label>
                    <select style={{
                      width: '100%', background: DEEP, border: '1px solid rgba(255,255,255,0.1)',
                      padding: '0.875rem 1rem', fontFamily: MONO, fontSize: '0.75rem', color: '#E8EDF4',
                      appearance: 'none', cursor: 'pointer', colorScheme: 'dark',
                    }}>
                      <option>Neuropathy Track</option>
                      <option>Back &amp; Joint Path</option>
                      <option>Weight Loss Protocol</option>
                      <option>Longevity &amp; HRT Baseline</option>
                      <option>Personal Injury Rehab</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontFamily: MONO, fontSize: '0.6rem', color: '#7E9BB5', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                      Preferred Hub
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                      {['Longmore Rd','Power Rd'].map((hub, i) => (
                        <label key={hub} style={{
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          padding: '0.875rem', border: '1px solid rgba(255,255,255,0.1)',
                          background: DEEP, cursor: 'pointer', fontFamily: MONO, fontSize: '0.7rem',
                          color: '#E8EDF4', letterSpacing: '0.08em',
                          transition: 'border-color 200ms ease',
                        }}
                          onMouseEnter={e => e.currentTarget.style.borderColor = CYAN}
                          onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
                        >
                          <input type="radio" name="hub" value={hub} defaultChecked={i === 0} style={{ marginRight: '0.5rem', accentColor: CYAN }} />
                          {hub}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontFamily: MONO, fontSize: '0.6rem', color: '#7E9BB5', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                      Name + Phone Number
                    </label>
                    <input
                      type="text" name="contact" required
                      placeholder="e.g. John Doe · (480) 555-0100"
                      style={{
                        width: '100%', background: DEEP,
                        border: '1px solid rgba(255,255,255,0.1)',
                        padding: '0.875rem 1rem', fontFamily: MONO, fontSize: '0.75rem', color: '#E8EDF4',
                      }}
                    />
                  </div>

                  <button
                    type="submit" disabled={loading}
                    className="cta-btn"
                    style={{
                      width: '100%', padding: '1rem',
                      background: 'linear-gradient(90deg,#00F2FE,#4FACFE)',
                      color: DEEP, fontFamily: MONO, fontSize: '0.68rem', fontWeight: 700,
                      letterSpacing: '0.2em', textTransform: 'uppercase', cursor: loading ? 'not-allowed' : 'pointer',
                      border: 'none', opacity: loading ? 0.6 : 1,
                      boxShadow: '0 0 30px rgba(0,242,254,0.25)',
                    }}
                  >
                    {loading ? (
                      <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
                        <span style={{ width: '14px', height: '14px', border: `2px solid rgba(13,17,23,0.3)`, borderTopColor: DEEP, borderRadius: '50%', animation: 'spin 0.7s linear infinite', display: 'inline-block' }} />
                        INITIALIZING...
                      </span>
                    ) : 'INITIALIZE RECOVERY PROTOCOL'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* ── FOOTER ───────────────────────────────────────────────────────── */}
        <footer style={{
          background: '#090C10',
          borderTop: '1px solid rgba(0,242,254,0.08)',
          padding: 'clamp(3rem,6vw,5rem) clamp(1.5rem,5vw,5rem) 2rem',
        }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '3rem', marginBottom: '3rem' }}>

              {/* Brand */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <span style={{ fontFamily: CONDENSED, fontSize: '1.2rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', background: 'linear-gradient(90deg,#00F2FE,#4FACFE)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: '0.25rem' }}>
                  City Health AZ
                </span>
                <p style={{ fontFamily: SANS, fontSize: '0.85rem', color: '#4E6A7E', lineHeight: 1.65, maxWidth: '28ch' }}>
                  Advanced pain management and physical medicine serving Mesa and the greater Phoenix metro.
                </p>
                <a href={PHONE_HREF} style={{ fontFamily: MONO, fontSize: '0.95rem', fontWeight: 700, color: CYAN, textDecoration: 'none', letterSpacing: '0.05em', marginTop: '0.25rem' }}>
                  {PHONE}
                </a>
                {[
                  { name: 'Longmore Clinic', addr: '1303 S Longmore #8, Mesa AZ 85202', maps: 'https://maps.app.goo.gl/Xpu1YzR7T1DPsNK1A' },
                  { name: 'Power Road Clinic', addr: '1234 S Power Rd Suite 202, Mesa AZ 85206', maps: 'https://maps.app.goo.gl/Tz165GJY2pBQNi996' },
                ].map(loc => (
                  <a key={loc.name} href={loc.maps} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', marginTop: '0.5rem' }}>
                    <p style={{ fontFamily: MONO, fontSize: '0.65rem', fontWeight: 700, color: '#E8EDF4', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.1rem' }}>{loc.name}</p>
                    <p style={{ fontFamily: SANS, fontSize: '0.78rem', color: '#4E6A7E', lineHeight: 1.5, transition: 'color 150ms ease' }}
                      onMouseEnter={e => e.currentTarget.style.color = CYAN}
                      onMouseLeave={e => e.currentTarget.style.color = '#4E6A7E'}
                    >{loc.addr}</p>
                  </a>
                ))}
              </div>

              {/* Nav columns */}
              {[
                { heading: 'Services', links: [['Pain Management','/services/pain-management/'],['Neuropathy','/services/neuropathy/'],['Physical Medicine','/services/physical-medicine/'],['Anti-Aging','/services/anti-aging/'],['Personal Injury','/services/personal-injury/']] },
                { heading: 'Service Areas', links: [['Mesa, AZ','/locations/mesa-az/'],['Chandler, AZ','/locations/chandler-az/'],['Gilbert, AZ','/locations/gilbert-az/'],['Scottsdale, AZ','/locations/scottsdale-az/'],['Tempe, AZ','/locations/tempe-az/']] },
                { heading: 'Company', links: [['About Us','/about/'],['Reviews','/reviews/'],['Blog','/blog/'],['Contact','/contact/'],['Privacy Policy','/privacy-policy/']] },
              ].map(col => (
                <nav key={col.heading} style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  <p style={{ fontFamily: MONO, fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#E8EDF4', marginBottom: '0.25rem' }}>{col.heading}</p>
                  {col.links.map(([label, href]) => (
                    <a key={href} href={href} style={{ fontFamily: SANS, fontSize: '0.85rem', color: '#4E6A7E', textDecoration: 'none', lineHeight: 1.5, transition: 'color 150ms ease' }}
                      onMouseEnter={e => e.currentTarget.style.color = CYAN}
                      onMouseLeave={e => e.currentTarget.style.color = '#4E6A7E'}
                    >{label}</a>
                  ))}
                </nav>
              ))}
            </div>

            <div style={{ paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'space-between', alignItems: 'center' }}>
              <p style={{ fontFamily: SANS, fontSize: '0.72rem', color: 'rgba(126,155,181,0.5)' }}>
                © {new Date().getFullYear()} City Health Services · Mesa, AZ · All rights reserved.
              </p>
              <p style={{ fontFamily: SANS, fontSize: '0.68rem', color: 'rgba(126,155,181,0.35)', maxWidth: '60ch', textAlign: 'right', lineHeight: 1.5 }}>
                Content on this site is for informational purposes only and does not constitute medical advice. Consult a qualified healthcare provider for diagnosis and treatment.
              </p>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}
