'use client';

import { useState } from 'react';

const DEEP = '#0D1117';
const CYAN = '#00F2FE';
const MONO = "'Space Mono', 'Fira Code', monospace";
const SANS = "'Noto Sans', 'Inter', sans-serif";

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 700));
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <div style={{ padding: '2.5rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
        <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: 'linear-gradient(135deg,#00F2FE,#4FACFE)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M4 12l5 5 9-10" stroke={DEEP} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.3rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.15em', color: CYAN }}>
          Protocol Initialized
        </h3>
        <p style={{ fontFamily: SANS, fontSize: '0.875rem', color: '#7E9BB5', maxWidth: '30ch', lineHeight: 1.65, textAlign: 'center' }}>
          Our team will contact you within 2 business hours to confirm your appointment.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left' }}>
      <div>
        <label style={{ display: 'block', fontFamily: MONO, fontSize: '0.6rem', color: '#7E9BB5', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
          Primary Symptom / Track
        </label>
        <select style={{ width: '100%', background: DEEP, border: '1px solid rgba(255,255,255,0.1)', padding: '0.875rem 1rem', fontFamily: MONO, fontSize: '0.75rem', color: '#E8EDF4', appearance: 'none', cursor: 'pointer', colorScheme: 'dark' }}>
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
          {['Longmore Rd', 'Power Rd'].map((hub, i) => (
            <label key={hub} className="hub-radio" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.875rem', border: '1px solid rgba(255,255,255,0.1)', background: DEEP, cursor: 'pointer', fontFamily: MONO, fontSize: '0.7rem', color: '#E8EDF4', letterSpacing: '0.08em' }}>
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
          style={{ width: '100%', background: DEEP, border: '1px solid rgba(255,255,255,0.1)', padding: '0.875rem 1rem', fontFamily: MONO, fontSize: '0.75rem', color: '#E8EDF4' }}
        />
      </div>

      <button
        type="submit" disabled={loading}
        style={{
          width: '100%', padding: '1.1rem',
          background: 'linear-gradient(90deg,#00F2FE,#4FACFE)',
          color: DEEP, fontFamily: MONO, fontSize: '0.68rem', fontWeight: 700,
          letterSpacing: '0.2em', textTransform: 'uppercase',
          cursor: loading ? 'not-allowed' : 'pointer',
          border: 'none', opacity: loading ? 0.6 : 1,
          boxShadow: '0 0 30px rgba(0,242,254,0.25)',
          transition: 'opacity 200ms ease, box-shadow 200ms ease',
        }}
      >
        {loading ? 'INITIALIZING...' : 'INITIALIZE RECOVERY PROTOCOL'}
      </button>
    </form>
  );
}
