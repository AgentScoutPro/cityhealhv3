'use client';

export default function HeroNeuralAwakening() {
  const tooltips = [
    { label: 'CERVICAL PLEXUS',  signal: 'Signal velocity optimization active.' },
    { label: 'LUMBAR SPINE',     signal: 'Structural load decompression protocol ready.' },
    { label: 'SCIATIC NERVE',    signal: 'Neural inflammation routing path localized.' },
  ];

  return (
    <section className="relative w-full min-h-screen bg-deep-space flex flex-col justify-between items-center px-6 py-12 overflow-hidden select-none">

      {/* ── Background ticker ──────────────────────────────────────────────── */}
      <div className="w-full max-w-7xl flex justify-between items-center border-b border-[#00F2FE]/10 pb-4 text-[9px] font-mono tracking-[0.1em] md:tracking-[0.2em] text-neon-cyan/40 uppercase relative z-20 gap-4">
        <div className="truncate shrink min-w-0">// NEURAL PATHWAY INTEGRITY: ACTIVE</div>
        <div className="hidden md:block shrink-0">// CELLULAR SIGNALING: ENGAGED</div>
        <div className="truncate shrink min-w-0 text-right">// BIOMETRIC ALIGNMENT: OPERATIONAL</div>
      </div>

      {/* ── Central content ────────────────────────────────────────────────── */}
      <div
        id="hero-content-wrapper"
        className="relative z-10 text-center flex flex-col items-center justify-center my-auto max-w-4xl px-4 select-text"
      >
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white leading-none mb-6 drop-shadow-[0_0_30px_rgba(0,242,254,0.15)] [color:white]">
          PAIN MANAGEMENT,{' '}
          <span className="bg-clip-text text-transparent bg-clinical-gradient">
            REWIRED.
          </span>
        </h1>

        <p className="text-sm md:text-lg text-slate-400 font-light tracking-wide max-w-2xl leading-relaxed mb-10">
          Experience the intersection of advanced physical medicine, neural repair, and
          bio-restorative longevity. We don&apos;t just mask symptoms — we reprogram your
          body&apos;s vital pathways for long-term health.
        </p>

        {/* Glassmorphic CTA */}
        <button
          className="group relative px-8 py-4 bg-[#00F2FE]/5 backdrop-blur-md border border-neon-cyan/30 rounded-none overflow-hidden transition-all duration-300 hover:border-neon-cyan hover:shadow-[0_0_25px_rgba(0,242,254,0.3)] cursor-pointer"
          onClick={() => document.getElementById('section-footer')?.scrollIntoView({ behavior: 'smooth' })}
          aria-label="Book an appointment"
        >
          <div className="absolute inset-0 w-0 bg-gradient-to-r from-neon-cyan/10 to-neon-teal/10 transition-all duration-300 group-hover:w-full" />
          <span className="relative text-[10px] md:text-sm font-mono font-bold tracking-wider md:tracking-[0.25em] text-white transition-colors duration-300 group-hover:text-neon-cyan whitespace-nowrap">
            [ SYSTEM RESET: BOOK APPOINTMENT ]
          </span>
        </button>
      </div>

      {/* ── Neural node micro-tooltips (desktop only) ──────────────────────── */}
      <div className="absolute right-6 top-1/3 z-20 flex-col space-y-4 max-w-xs text-right hidden lg:flex">
        {tooltips.map((node) => (
          <div key={node.label} className="group cursor-crosshair">
            <span className="text-[10px] font-mono text-white/40 group-hover:text-neon-cyan transition-colors">
              [ NODE: {node.label} ]
            </span>
            <div className="text-[9px] font-mono text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              // {node.signal}
            </div>
          </div>
        ))}
      </div>

      {/* ── Scroll indicator ───────────────────────────────────────────────── */}
      <div className="text-[10px] font-mono tracking-[0.3em] text-slate-500 animate-pulse uppercase relative z-20">
        Scroll to Initialize System
      </div>
    </section>
  );
}
