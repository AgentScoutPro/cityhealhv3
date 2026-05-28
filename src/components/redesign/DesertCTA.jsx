'use client';

import { useState } from 'react';

const TREATMENT_OPTIONS = [
  'Pain Management Consultation',
  'Neuropathy Evaluation',
  'Physical Medicine Assessment',
  'Anti-Aging & HRT Consultation',
  'Weight Loss Program',
  'Personal Injury Rehab',
  'B2B / Referral Partnership',
  'General Inquiry',
];

const TRUST_SIGNALS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 2l1.8 3.6 4 .6-2.9 2.8.7 4-3.6-1.9-3.6 1.9.7-4L4.2 6.2l4-.6L10 2z" stroke="#4A7C59" strokeWidth="1.3" strokeLinejoin="round" />
      </svg>
    ),
    label: 'HIPAA Certified',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z" stroke="#4A7C59" strokeWidth="1.3" />
        <path d="M6.5 10l2 2 5-5" stroke="#4A7C59" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: 'Licensed Physicians',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="14" height="14" rx="2" stroke="#4A7C59" strokeWidth="1.3" />
        <path d="M7 10h6M10 7v6" stroke="#4A7C59" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
    label: 'Most Insurance Accepted',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="8" stroke="#4A7C59" strokeWidth="1.3" />
        <path d="M10 6v4l2.5 1.5" stroke="#4A7C59" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
    label: 'Same-Day Appointments',
  },
];

export default function DesertCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', track: '', location: 'Longmore Rd' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 800));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <section
      id="desert-cta-section"
      style={{
        position: 'relative',
        background: `
          radial-gradient(ellipse at 0% 50%, rgba(232,98,42,0.08) 0%, transparent 50%),
          radial-gradient(ellipse at 100% 20%, rgba(74,124,89,0.06) 0%, transparent 40%),
          #0A0C0E
        `,
        padding: 'clamp(5rem,10vw,9rem) clamp(1.25rem,5vw,5rem)',
        borderTop: '1px solid rgba(232,98,42,0.12)',
        overflow: 'hidden',
      }}
      aria-label="Book a consultation with City Health AZ"
    >
      {/* Background dot grid */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(196,168,130,0.08) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)',
          pointerEvents: 'none',
        }}
      />

      {/* Large background watermark */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: '-2rem',
          bottom: '-3rem',
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: 'clamp(10rem, 20vw, 18rem)',
          fontWeight: 900,
          textTransform: 'uppercase',
          color: 'rgba(232,98,42,0.025)',
          letterSpacing: '-0.06em',
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        BOOK
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Two-column layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(3rem, 6vw, 6rem)',
            alignItems: 'start',
          }}
        >
          {/* Left: copy + trust signals */}
          <div>
            <p
              id="cta-headline"
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
              Start Your Recovery
            </p>
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                textTransform: 'uppercase',
                fontWeight: 900,
                fontSize: 'clamp(2.8rem, 6vw, 5rem)',
                letterSpacing: '-0.03em',
                lineHeight: 0.9,
                color: '#F5F0EB',
                marginBottom: '1.5rem',
              }}
            >
              LESS THAN 1%{' '}
              <br className="hidden sm:inline" />
              OF PATIENTS{' '}
              <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #E8622A 0%, #F07A45 50%, #C4A882 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                APPRECIATE COPING.
              </span>
            </h2>
            <p
              style={{
                fontFamily: "'Noto Sans', sans-serif",
                fontSize: '0.95rem',
                lineHeight: 1.8,
                color: '#7E8E9A',
                fontWeight: 300,
                maxWidth: '44ch',
                marginBottom: '2.5rem',
              }}
            >
              Stop masking symptoms. Our integrated team will build you a personalized
              recovery protocol — book your consultation today and take the first step.
            </p>

            {/* Trust signals */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.875rem',
              }}
            >
              {TRUST_SIGNALS.map(ts => (
                <div
                  key={ts.label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.625rem',
                    padding: '0.75rem 1rem',
                    background: 'rgba(74,124,89,0.06)',
                    border: '1px solid rgba(74,124,89,0.15)',
                    borderRadius: '4px',
                  }}
                >
                  {ts.icon}
                  <span
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: '#4A7C59',
                    }}
                  >
                    {ts.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: booking form */}
          <div
            style={{
              background: 'rgba(18,20,22,0.85)',
              border: '1px solid rgba(232,98,42,0.18)',
              borderRadius: '6px',
              padding: 'clamp(1.75rem, 4vw, 2.5rem)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              boxShadow: '0 0 60px rgba(232,98,42,0.06), inset 0 1px 0 rgba(255,255,255,0.06)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Form top accent line */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '2px',
                background: 'linear-gradient(90deg, #E8622A, #F07A45, transparent)',
              }}
            />

            {submitted ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: '2.5rem 1rem',
                  gap: '1rem',
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #4A7C59, #5A9C6E)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  aria-hidden="true"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M4 12.5l5 5.5 11-11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    fontSize: '1.4rem',
                    fontWeight: 800,
                    color: '#4A7C59',
                  }}
                >
                  Request Received
                </h3>
                <p
                  style={{
                    fontFamily: "'Noto Sans', sans-serif",
                    fontSize: '0.875rem',
                    color: '#7E8E9A',
                    lineHeight: 1.75,
                    maxWidth: '32ch',
                  }}
                >
                  Our care team will contact you within 2 business hours to confirm your appointment.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <h4
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#C4A882',
                    marginBottom: '0.5rem',
                  }}
                >
                  Book Your Consultation
                </h4>

                {/* Name */}
                <div>
                  <label
                    htmlFor="cta-name"
                    style={{
                      display: 'block',
                      fontFamily: "'Barlow Condensed', sans-serif",
                      textTransform: 'uppercase',
                      letterSpacing: '0.14em',
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      color: '#6E7E8A',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Full Name
                  </label>
                  <input
                    id="cta-name"
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    style={{
                      width: '100%',
                      background: 'rgba(10,12,14,0.7)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '3px',
                      padding: '0.75rem 1rem',
                      fontFamily: "'Noto Sans', sans-serif",
                      fontSize: '0.875rem',
                      color: '#F5F0EB',
                      outline: 'none',
                      transition: 'border-color 200ms ease',
                      colorScheme: 'dark',
                    }}
                    onFocus={e => (e.currentTarget.style.borderColor = 'rgba(232,98,42,0.5)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                    autoComplete="name"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="cta-phone"
                    style={{
                      display: 'block',
                      fontFamily: "'Barlow Condensed', sans-serif",
                      textTransform: 'uppercase',
                      letterSpacing: '0.14em',
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      color: '#6E7E8A',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Phone Number
                  </label>
                  <input
                    id="cta-phone"
                    type="tel"
                    name="phone"
                    required
                    placeholder="(480) 000-0000"
                    value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    style={{
                      width: '100%',
                      background: 'rgba(10,12,14,0.7)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '3px',
                      padding: '0.75rem 1rem',
                      fontFamily: "'Noto Sans', sans-serif",
                      fontSize: '0.875rem',
                      color: '#F5F0EB',
                      outline: 'none',
                      transition: 'border-color 200ms ease',
                      colorScheme: 'dark',
                    }}
                    onFocus={e => (e.currentTarget.style.borderColor = 'rgba(232,98,42,0.5)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                    autoComplete="tel"
                  />
                </div>

                {/* Service track */}
                <div>
                  <label
                    htmlFor="cta-track"
                    style={{
                      display: 'block',
                      fontFamily: "'Barlow Condensed', sans-serif",
                      textTransform: 'uppercase',
                      letterSpacing: '0.14em',
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      color: '#6E7E8A',
                      marginBottom: '0.5rem',
                    }}
                  >
                    How Can We Help?
                  </label>
                  <select
                    id="cta-track"
                    name="track"
                    value={form.track}
                    onChange={e => setForm(f => ({ ...f, track: e.target.value }))}
                    style={{
                      width: '100%',
                      background: 'rgba(10,12,14,0.7)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '3px',
                      padding: '0.75rem 1rem',
                      fontFamily: "'Noto Sans', sans-serif",
                      fontSize: '0.875rem',
                      color: form.track ? '#F5F0EB' : '#4A5A65',
                      outline: 'none',
                      cursor: 'pointer',
                      colorScheme: 'dark',
                      appearance: 'none',
                      WebkitAppearance: 'none',
                      transition: 'border-color 200ms ease',
                    }}
                    onFocus={e => (e.currentTarget.style.borderColor = 'rgba(232,98,42,0.5)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                  >
                    <option value="" disabled>Select a service...</option>
                    {TREATMENT_OPTIONS.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Location selector */}
                <div>
                  <span
                    style={{
                      display: 'block',
                      fontFamily: "'Barlow Condensed', sans-serif",
                      textTransform: 'uppercase',
                      letterSpacing: '0.14em',
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      color: '#6E7E8A',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Preferred Location
                  </span>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                    {['Longmore Rd', 'Power Rd'].map(loc => (
                      <label
                        key={loc}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '0.65rem',
                          background: form.location === loc ? 'rgba(232,98,42,0.12)' : 'rgba(10,12,14,0.7)',
                          border: `1px solid ${form.location === loc ? 'rgba(232,98,42,0.5)' : 'rgba(255,255,255,0.1)'}`,
                          borderRadius: '3px',
                          cursor: 'pointer',
                          transition: 'background 200ms ease, border-color 200ms ease',
                          fontFamily: "'Barlow Condensed', sans-serif",
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          color: form.location === loc ? '#E8622A' : '#6E7E8A',
                        }}
                      >
                        <input
                          type="radio"
                          name="location"
                          value={loc}
                          checked={form.location === loc}
                          onChange={() => setForm(f => ({ ...f, location: loc }))}
                          style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }}
                        />
                        {loc}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: loading ? 'rgba(232,98,42,0.5)' : 'linear-gradient(135deg, #E8622A, #C44E1E)',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '3px',
                    fontFamily: "'Barlow Condensed', sans-serif",
                    textTransform: 'uppercase',
                    letterSpacing: '0.18em',
                    fontSize: '0.85rem',
                    fontWeight: 800,
                    cursor: loading ? 'not-allowed' : 'pointer',
                    boxShadow: '0 0 30px rgba(232,98,42,0.28)',
                    transition: 'box-shadow 250ms ease, opacity 250ms ease',
                    marginTop: '0.5rem',
                  }}
                  onMouseEnter={e => {
                    if (!loading) e.currentTarget.style.boxShadow = '0 0 50px rgba(232,98,42,0.5)';
                  }}
                  onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 0 30px rgba(232,98,42,0.28)')}
                >
                  {loading ? 'Submitting...' : 'Request Consultation →'}
                </button>

                <p
                  style={{
                    fontFamily: "'Noto Sans', sans-serif",
                    fontSize: '0.72rem',
                    color: '#4A5A65',
                    textAlign: 'center',
                    lineHeight: 1.6,
                  }}
                >
                  We&apos;ll contact you within 2 business hours. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
