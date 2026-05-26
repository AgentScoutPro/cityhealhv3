'use client';

import { useState } from 'react';

export default function ConversionFooter() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // TODO: wire to CRM / form endpoint
    await new Promise(r => setTimeout(r, 700));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <footer
      id="section-footer"
      className="relative w-full bg-gradient-to-b from-[#0D1117] via-[#120D1A] to-[#0A0D12] text-white pt-32 pb-12 px-6 overflow-hidden border-t border-white/5"
    >
      {/* Background radial bloom */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4FACFE]/5 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-6xl font-black tracking-tighter uppercase mb-16 leading-none">
          LESS THAN 1% OF PATIENTS APPRECIATE COPING.{' '}
          <br className="hidden md:inline" />
          <span className="bg-clip-text text-transparent bg-clinical-gradient">
            START REPAIRING.
          </span>
        </h2>

        {/* ── Conversion card ─────────────────────────────────────────────── */}
        <div className="bg-white/[0.02] backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-none max-w-xl mx-auto shadow-2xl relative">
          {/* Top neon border line */}
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent" aria-hidden="true" />

          {submitted ? (
            <div className="py-8 flex flex-col items-center gap-4">
              <div
                style={{
                  width: '52px', height: '52px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, #00F2FE, #4FACFE)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
                aria-hidden="true"
              >
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M4 12l5 5 9-10" stroke="#0D1117" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-black uppercase tracking-widest text-neon-cyan">
                Protocol Initialized
              </h3>
              <p className="text-sm text-slate-400 max-w-xs leading-relaxed">
                Our team will contact you within 2 business hours to confirm your appointment.
              </p>
            </div>
          ) : (
            <form className="space-y-6 text-left" onSubmit={handleSubmit} noValidate>
              <h4 className="text-xs font-mono tracking-[0.3em] text-neon-cyan uppercase mb-8">
                SELECT YOUR TREATMENT TRACK
              </h4>

              <div>
                <label className="block text-[10px] font-mono text-slate-400 tracking-wider uppercase mb-2" htmlFor="treatment-track">
                  Primary Symptom
                </label>
                <select
                  id="treatment-track"
                  name="track"
                  className="w-full bg-[#0D1117] border border-white/10 rounded-none px-4 py-3 text-xs font-mono text-white focus:outline-none focus:border-neon-cyan transition-colors appearance-none cursor-pointer"
                  style={{ colorScheme: 'dark' }}
                >
                  <option>Neuropathy Track</option>
                  <option>Back &amp; Joint Path</option>
                  <option>Weight Loss Protocol</option>
                  <option>Longevity &amp; HRT Baseline</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-mono text-slate-400 tracking-wider uppercase mb-2">
                  Preferred Hub
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {['Longmore Rd', 'Power Rd'].map((hub, i) => (
                    <label
                      key={hub}
                      className="flex items-center justify-center p-3 border border-white/10 bg-[#0D1117] cursor-pointer text-xs font-mono select-none hover:border-neon-teal has-[:checked]:border-neon-cyan transition-colors"
                    >
                      <input
                        type="radio"
                        name="hub"
                        value={hub}
                        className="sr-only"
                        defaultChecked={i === 0}
                      />
                      {hub}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono text-slate-400 tracking-wider uppercase mb-2" htmlFor="contact-token">
                  Contact Token
                </label>
                <input
                  id="contact-token"
                  type="text"
                  name="contact"
                  required
                  placeholder="Name + Phone Number"
                  className="w-full bg-[#0D1117] border border-white/10 rounded-none px-4 py-3 text-xs font-mono text-white placeholder-slate-600 focus:outline-none focus:border-neon-cyan transition-colors"
                  autoComplete="name tel"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-clinical-gradient text-black text-[10px] md:text-xs font-mono font-bold tracking-wider md:tracking-[0.25em] uppercase hover:opacity-90 transition-opacity mt-4 shadow-[0_0_30px_rgba(0,242,254,0.25)] cursor-pointer disabled:opacity-50 whitespace-nowrap"
              >
                {loading ? 'INITIALIZING...' : 'INITIALIZE RECOVERY PROTOCOL'}
              </button>
            </form>
          )}
        </div>

      </div>
    </footer>
  );
}
