'use client';

/**
 * S5_FooterHub — Footer / Conversion Hub
 *
 * Section 5 · Dark base · Frosted glass form container + neon border tracks
 *
 * Architecture:
 *  - Frosted glass card: backdrop-filter blur + dark rgba fill
 *  - Neon border track: animated gradient border via CSS border-image or
 *    pseudo-element border + box-shadow glow
 *  - Booking / contact form with accessible labels
 *  - Trust signals: license, bilingual note, response time
 *  - GSAP hook point: id="s5-form-card" for reveal entrance animation
 */

import { useState } from 'react';

const TRACK_STYLE = {
  background: 'rgba(13, 17, 23, 0.72)',
  backdropFilter: 'blur(20px) saturate(1.5)',
  WebkitBackdropFilter: 'blur(20px) saturate(1.5)',
  border: '1px solid rgba(0, 242, 254, 0.35)',
  borderRadius: '12px',
  boxShadow:
    '0 0 40px rgba(0, 242, 254, 0.18), 0 0 80px rgba(79, 172, 254, 0.08), 0 8px 32px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.08)',
};

const INPUT_STYLE = {
  width: '100%',
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '6px',
  padding: '0.875rem 1rem',
  fontFamily: "'Noto Sans', sans-serif",
  fontSize: '0.95rem',
  color: '#E8EDF4',
  outline: 'none',
  transition: 'border-color 200ms ease, box-shadow 200ms ease',
};

function FormField({ label, id, type = 'text', required, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
      <label
        htmlFor={id}
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          fontSize: '0.72rem',
          color: '#7E9BB5',
          fontWeight: 600,
        }}
      >
        {label}
        {required && (
          <span style={{ color: '#00F2FE', marginLeft: '0.25rem' }} aria-hidden="true">*</span>
        )}
      </label>
      {children}
    </div>
  );
}

export default function S5_FooterHub() {
  const [formState, setFormState] = useState({ name: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = e =>
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    // TODO: wire to your form endpoint / CRM integration
    await new Promise(r => setTimeout(r, 800));
    setSubmitted(true);
    setLoading(false);
  };

  const focusStyle = {
    borderColor: 'rgba(0, 242, 254, 0.55)',
    boxShadow: '0 0 0 3px rgba(0, 242, 254, 0.12)',
  };

  return (
    <section
      id="section-footer"
      aria-label="Book an Appointment"
      style={{
        background: '#0D1117',
        padding: 'clamp(5rem, 10vw, 9rem) clamp(1.25rem, 5vw, 5rem)',
        borderTop: '1px solid rgba(0, 242, 254, 0.08)',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(3rem, 6vw, 6rem)',
          alignItems: 'start',
        }}
        className="footer-grid"
      >
        {/* ── Left: Trust / CTA Copy ─────────────────────────────────────── */}
        <div>
          <p
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              fontSize: '0.78rem',
              color: '#00F2FE',
              marginBottom: '0.75rem',
            }}
          >
            Ready to Feel Better?
          </p>

          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              fontSize: 'clamp(2.25rem, 5vw, 4rem)',
              fontWeight: 800,
              lineHeight: 1.0,
              color: '#E8EDF4',
              marginBottom: '1.5rem',
            }}
          >
            Book Your
            <br />
            <span
              style={{
                background: 'linear-gradient(90deg, #00F2FE, #4FACFE)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Free Consultation.
            </span>
          </h2>

          <p
            style={{
              fontFamily: "'Noto Sans', sans-serif",
              fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
              lineHeight: 1.7,
              color: '#7E9BB5',
              maxWidth: '48ch',
              marginBottom: '2.5rem',
            }}
          >
            Our team typically responds within 2 business hours. Bilingual staff
            available — hablamos español. No referral required.
          </p>

          {/* Trust signals */}
          <ul
            style={{
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.875rem',
            }}
          >
            {[
              'Same-day appointments available',
              'Accepts most major insurance plans',
              'Bilingual providers (English / Spanish)',
              'Mesa, AZ — Serving the greater Phoenix metro',
            ].map(item => (
              <li
                key={item}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  fontFamily: "'Noto Sans', sans-serif",
                  fontSize: '0.9rem',
                  color: '#E8EDF4',
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #00F2FE, #4FACFE)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                    <path d="M1.5 4.5l2 2 4-4" stroke="#0D1117" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ── Right: Frosted Glass Form Card ────────────────────────────── */}
        <div
          id="s5-form-card"
          style={TRACK_STYLE}
        >
          {submitted ? (
            <div
              style={{
                padding: 'clamp(2rem, 4vw, 3rem)',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #00F2FE, #4FACFE)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                aria-hidden="true"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13l4 4 10-10" stroke="#0D1117" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#E8EDF4',
                }}
              >
                Request Received
              </h3>
              <p style={{ fontFamily: "'Noto Sans', sans-serif", fontSize: '0.95rem', color: '#7E9BB5', maxWidth: '36ch' }}>
                Our team will contact you within 2 business hours to confirm your appointment.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                padding: 'clamp(2rem, 4vw, 3rem)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
              }}
              noValidate
            >
              <h3
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  color: '#E8EDF4',
                  marginBottom: '0.25rem',
                }}
              >
                Request an Appointment
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <FormField label="Full Name" id="name" required>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    style={INPUT_STYLE}
                    onFocus={e => Object.assign(e.target.style, focusStyle)}
                    onBlur={e => {
                      e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                      e.target.style.boxShadow = 'none';
                    }}
                    placeholder="Maria Garcia"
                  />
                </FormField>

                <FormField label="Phone Number" id="phone" required>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    value={formState.phone}
                    onChange={handleChange}
                    style={INPUT_STYLE}
                    onFocus={e => Object.assign(e.target.style, focusStyle)}
                    onBlur={e => {
                      e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                      e.target.style.boxShadow = 'none';
                    }}
                    placeholder="(480) 000-0000"
                  />
                </FormField>
              </div>

              <FormField label="Service Needed" id="service">
                <select
                  id="service"
                  name="service"
                  value={formState.service}
                  onChange={handleChange}
                  style={{ ...INPUT_STYLE, cursor: 'pointer' }}
                  onFocus={e => Object.assign(e.target.style, focusStyle)}
                  onBlur={e => {
                    e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <option value="" style={{ background: '#131920' }}>Select a service…</option>
                  <option value="pain-management" style={{ background: '#131920' }}>Pain Management</option>
                  <option value="physical-therapy" style={{ background: '#131920' }}>Physical Therapy</option>
                  <option value="spinal-decompression" style={{ background: '#131920' }}>Spinal Decompression</option>
                  <option value="dry-needling" style={{ background: '#131920' }}>Dry Needling</option>
                  <option value="neuropathy" style={{ background: '#131920' }}>Neuropathy Treatment</option>
                  <option value="injury" style={{ background: '#131920' }}>Auto / Work Injury</option>
                  <option value="other" style={{ background: '#131920' }}>Not Sure — Need Evaluation</option>
                </select>
              </FormField>

              <FormField label="Tell Us About Your Pain" id="message">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  style={{ ...INPUT_STYLE, resize: 'vertical', minHeight: '100px' }}
                  onFocus={e => Object.assign(e.target.style, focusStyle)}
                  onBlur={e => {
                    e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.target.style.boxShadow = 'none';
                  }}
                  placeholder="Briefly describe where you're experiencing pain and how long it's been happening."
                />
              </FormField>

              <button
                type="submit"
                disabled={loading}
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontSize: '1rem',
                  fontWeight: 700,
                  padding: '1rem 2rem',
                  background: loading ? 'rgba(0, 242, 254, 0.4)' : 'linear-gradient(90deg, #00F2FE, #4FACFE)',
                  color: '#0D1117',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  width: '100%',
                  transition: 'opacity 200ms ease, box-shadow 200ms ease',
                  boxShadow: '0 0 20px rgba(0, 242, 254, 0.3)',
                }}
                onMouseEnter={e => {
                  if (!loading) e.currentTarget.style.boxShadow = '0 0 32px rgba(0, 242, 254, 0.5)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 242, 254, 0.3)';
                }}
              >
                {loading ? 'Sending…' : 'Request Appointment'}
              </button>

              <p
                style={{
                  fontFamily: "'Noto Sans', sans-serif",
                  fontSize: '0.75rem',
                  color: 'rgba(126, 155, 181, 0.7)',
                  textAlign: 'center',
                }}
              >
                Your information is private and never shared. By submitting you agree to our privacy policy.
              </p>
            </form>
          )}
        </div>
      </div>

      {/* ── Bottom bar ────────────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: '1280px',
          margin: '4rem auto 0',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255,255,255,0.07)',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            fontSize: '1.1rem',
            fontWeight: 700,
            background: 'linear-gradient(90deg, #00F2FE, #4FACFE)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          City Health AZ
        </span>

        <nav aria-label="Footer navigation" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          {['Services', 'About', 'Locations', 'Blog', 'Privacy Policy'].map(link => (
            <a
              key={link}
              href={`/${link.toLowerCase().replace(' ', '-')}`}
              style={{
                fontFamily: "'Noto Sans', sans-serif",
                fontSize: '0.82rem',
                color: '#7E9BB5',
                textDecoration: 'none',
                transition: 'color 200ms ease',
                cursor: 'pointer',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#00F2FE')}
              onMouseLeave={e => (e.currentTarget.style.color = '#7E9BB5')}
            >
              {link}
            </a>
          ))}
        </nav>

        <p
          style={{
            fontFamily: "'Noto Sans', sans-serif",
            fontSize: '0.75rem',
            color: 'rgba(126, 155, 181, 0.5)',
          }}
        >
          © {new Date().getFullYear()} City Health AZ · Mesa, AZ 85204
        </p>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
