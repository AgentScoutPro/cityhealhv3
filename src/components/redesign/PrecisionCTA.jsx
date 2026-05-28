'use client';

import { useState } from 'react';

const SERVICES_OPTIONS = [
  'Chiropractic Care',
  'Physiotherapy',
  'Spinal Decompression',
  'Comprehensive Assessment',
  'Neuropathy Treatment',
  'Sports Rehabilitation',
  'Other',
];

const LOCATIONS = [
  {
    name: 'Longmore Clinic',
    address: '1840 W Guadalupe Rd, Suite 101',
    city: 'Mesa, AZ 85202',
    phone: '(480) 649-5297',
  },
  {
    name: 'Power Road Clinic',
    address: '6402 E Superstition Springs Blvd',
    city: 'Mesa, AZ 85206',
    phone: '(480) 649-5297',
  },
];

const TRUST_SIGNALS = [
  {
    label: 'Same-Day Appointments Available',
    iconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    label: 'Most Insurance Plans Accepted',
    iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
  {
    label: 'No Referral Required',
    iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
  },
  {
    label: 'HIPAA-Compliant Records',
    iconPath: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
  },
];

const inputBaseStyle = {
  width: '100%',
  padding: '0.85rem 1rem',
  background: 'rgba(12,16,24,0.8)',
  border: '1px solid rgba(0,196,166,0.1)',
  borderRadius: '4px',
  color: '#EDF3FA',
  fontFamily: "'Noto Sans', sans-serif",
  fontSize: '0.86rem',
  fontWeight: 300,
  outline: 'none',
  transition: 'border-color 250ms, box-shadow 250ms',
  appearance: 'none',
  WebkitAppearance: 'none',
};

export default function PrecisionCTA() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const update = key => e => setForm(s => ({ ...s, [key]: e.target.value }));

  const focusStyle = e => {
    e.target.style.borderColor = 'rgba(0,196,166,0.4)';
    e.target.style.boxShadow = '0 0 16px rgba(0,196,166,0.08)';
  };
  const blurStyle = e => {
    e.target.style.borderColor = 'rgba(0,196,166,0.1)';
    e.target.style.boxShadow = 'none';
  };

  return (
    <section
      id="precision-cta"
      style={{
        background: '#0C1018',
        padding: 'clamp(5rem, 10vw, 9rem) clamp(1.25rem, 5vw, 5rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Radial glow top */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 0%, rgba(0,196,166,0.055) 0%, transparent 58%)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '1px',
          background: 'linear-gradient(to right, transparent, rgba(0,196,166,0.2) 30%, rgba(107,95,232,0.15) 70%, transparent)',
        }}
      />

      <div className="max-w-[1280px] mx-auto relative z-10">

        {/* Section header */}
        <div id="cta-header-v4" style={{ marginBottom: '4.5rem', textAlign: 'center' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '1.5rem',
          }}>
            <div style={{ height: '1px', width: '60px', background: 'linear-gradient(to right, transparent, rgba(0,196,166,0.4))' }} />
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.65rem',
              textTransform: 'uppercase',
              letterSpacing: '0.3em',
              color: '#00C4A6',
              fontWeight: 600,
            }}>
              06 / Begin Your Assessment
            </span>
            <div style={{ height: '1px', width: '60px', background: 'linear-gradient(to left, transparent, rgba(0,196,166,0.4))' }} />
          </div>
          <h2
            id="cta-headline-v4"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              textTransform: 'uppercase',
              fontWeight: 900,
              fontSize: 'clamp(2.6rem, 6vw, 5.5rem)',
              letterSpacing: '-0.025em',
              lineHeight: 0.9,
              color: '#EDF3FA',
              marginBottom: '1.25rem',
            }}
          >
            READY TO MOVE
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #00C4A6, #00E8C4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              display: 'inline-block',
            }}>
              WITHOUT PAIN?
            </span>
          </h2>
          <p style={{
            fontFamily: "'Noto Sans', sans-serif",
            fontSize: 'clamp(0.92rem, 1.5vw, 1.02rem)',
            fontWeight: 300,
            color: '#3A5468',
            lineHeight: 1.85,
            maxWidth: '48ch',
            margin: '0 auto',
          }}>
            Book your comprehensive biomechanical assessment.
            Same-day appointments available at both Mesa locations.
          </p>
        </div>

        {/* Layout: form (3/5) + info (2/5) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(2.5rem, 5vw, 4rem)',
          alignItems: 'start',
        }}>

          {/* LEFT: Form */}
          <div style={{ gridColumn: 'span 3 / span 3' }} className="lg:col-span-3">
            {submitted ? (
              <div style={{
                padding: '3.5rem 2.5rem',
                background: 'rgba(0,196,166,0.05)',
                border: '1px solid rgba(0,196,166,0.18)',
                borderRadius: '8px',
                textAlign: 'center',
              }}>
                <div style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 'clamp(1.6rem, 3vw, 2.25rem)',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '-0.01em',
                  color: '#00C4A6',
                  marginBottom: '0.65rem',
                }}>
                  Assessment Requested
                </div>
                <p style={{
                  fontFamily: "'Noto Sans', sans-serif",
                  fontSize: '0.9rem',
                  color: '#3A5468',
                  fontWeight: 300,
                  lineHeight: 1.7,
                }}>
                  Our team will contact you within 2 business hours to confirm your appointment time.
                </p>
              </div>
            ) : (
              <form
                onSubmit={e => { e.preventDefault(); setSubmitted(true); }}
                style={{
                  padding: 'clamp(1.75rem, 3vw, 2.5rem)',
                  background: 'rgba(6,8,11,0.65)',
                  border: '1px solid rgba(0,196,166,0.08)',
                  borderRadius: '8px',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.1rem',
                }}
              >
                {/* Name + Phone row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.1rem' }}>
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    value={form.name}
                    onChange={update('name')}
                    style={inputBaseStyle}
                    onFocus={focusStyle}
                    onBlur={blurStyle}
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    value={form.phone}
                    onChange={update('phone')}
                    style={inputBaseStyle}
                    onFocus={focusStyle}
                    onBlur={blurStyle}
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={form.email}
                  onChange={update('email')}
                  style={inputBaseStyle}
                  onFocus={focusStyle}
                  onBlur={blurStyle}
                />

                {/* Service select */}
                <div style={{ position: 'relative' }}>
                  <select
                    required
                    value={form.service}
                    onChange={update('service')}
                    style={{
                      ...inputBaseStyle,
                      color: form.service ? '#EDF3FA' : '#3A5468',
                      cursor: 'pointer',
                      paddingRight: '2.5rem',
                    }}
                    onFocus={focusStyle}
                    onBlur={blurStyle}
                  >
                    <option value="" disabled style={{ color: '#3A5468' }}>Select Service</option>
                    {SERVICES_OPTIONS.map(s => (
                      <option key={s} value={s} style={{ background: '#0C1018', color: '#EDF3FA' }}>{s}</option>
                    ))}
                  </select>
                  <svg
                    width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="rgba(0,196,166,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>

                <textarea
                  placeholder="Brief description of your condition (optional)"
                  rows={3}
                  value={form.message}
                  onChange={update('message')}
                  style={{ ...inputBaseStyle, resize: 'none', lineHeight: 1.65 }}
                  onFocus={focusStyle}
                  onBlur={blurStyle}
                />

                <button
                  type="submit"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    textTransform: 'uppercase',
                    letterSpacing: '0.14em',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    padding: '1rem 2rem',
                    background: 'linear-gradient(135deg, #00C4A6 0%, #009C83 100%)',
                    color: '#06080B',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    boxShadow: '0 0 28px rgba(0,196,166,0.22)',
                    transition: 'box-shadow 250ms, transform 250ms',
                    width: '100%',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.boxShadow = '0 0 48px rgba(0,196,166,0.45)';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = '0 0 28px rgba(0,196,166,0.22)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  Request My Assessment →
                </button>
              </form>
            )}
          </div>

          {/* RIGHT: Info panel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

            {/* Trust signals */}
            <div style={{
              padding: '1.5rem 1.75rem',
              background: 'rgba(6,8,11,0.5)',
              border: '1px solid rgba(0,196,166,0.07)',
              borderRadius: '6px',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.875rem',
            }}>
              {TRUST_SIGNALS.map(signal => (
                <div key={signal.label} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '6px',
                    background: 'rgba(0,196,166,0.07)',
                    border: '1px solid rgba(0,196,166,0.14)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                      stroke="#00C4A6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                    >
                      <path d={signal.iconPath} />
                    </svg>
                  </div>
                  <span style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '0.78rem',
                    color: '#5A7A90',
                    fontWeight: 500,
                  }}>
                    {signal.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Location cards */}
            {LOCATIONS.map(loc => (
              <div
                key={loc.name}
                style={{
                  padding: '1.4rem 1.6rem',
                  background: 'rgba(6,8,11,0.5)',
                  border: '1px solid rgba(0,196,166,0.07)',
                  borderRadius: '6px',
                  transition: 'border-color 250ms',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,196,166,0.2)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,196,166,0.07)'; }}
              >
                <div style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  letterSpacing: '0.08em',
                  color: '#00C4A6',
                  marginBottom: '0.3rem',
                }}>
                  {loc.name}
                </div>
                <div style={{
                  fontFamily: "'Noto Sans', sans-serif",
                  fontSize: '0.76rem',
                  color: '#3A5468',
                  fontWeight: 300,
                  lineHeight: 1.6,
                  marginBottom: '0.25rem',
                }}>
                  {loc.address}
                  <br />
                  {loc.city}
                </div>
                <a
                  href="tel:+14806495297"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '0.76rem',
                    color: '#00C4A6',
                    textDecoration: 'none',
                    fontWeight: 600,
                    transition: 'opacity 200ms',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = '0.7'; }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
                >
                  {loc.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
