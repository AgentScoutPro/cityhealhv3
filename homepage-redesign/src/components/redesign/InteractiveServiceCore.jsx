'use client';

import ScrollCanvasSequencer from './ScrollCanvasSequencer';

const PILLARS = [
  {
    title: 'Neuropathy Repair',
    body: 'Wake up sleeping nerves. Utilizing advanced electric cell signaling technology like RST-Sanexas, we deliver targeted pharmaceutical-grade electronic pulses to repair damaged peripheral nerve pathways, clear chronic numbness, and silence burning pain at the source.',
    cta: '[ ACCESS NEURAL RESTORATION ]',
    status: '// SYS_STATUS: DELIVERING QUANTUM ELECTRONIC CELL SIGNALING TO damaged AFFErent FIBERS //',
  },
  {
    title: 'Physical Medicine',
    body: 'Reclaim biological fluidity. Our integrated team of physicians, chiropractors, and physical therapists align your structural framework to eliminate back pain, sciatica, arthritis, and lingering personal injuries without invasive surgery.',
    cta: '[ ALIGN BIO-MECHANICS ]',
    status: '// SYS_STATUS: CALCULATING VECTOR FORCE ALIGNMENT FOR KINETIC FLUIDITY //',
  },
  {
    title: 'Metabolic Optimization',
    body: 'Engineered longevity. Achieve sustainable body composition shifts through custom physician-supervised metabolic protocols, including breakthrough Peptide Therapies (Tirzepatide), comprehensive IV nutrition, and precise biological monitoring.',
    cta: '[ REWIRE METABOLISM ]',
    status: '// SYS_STATUS: MONITORING TIRZEPATIDE PEPTIDE SYNTHESIS & METABOLIC RATE CASCADE //',
  },
  {
    title: 'Regen-Aesthetics & HRT',
    body: 'Defy chronological limits. Restore your internal cellular vitality and external radiance with clinical Hormone Replacement Therapy (HRT), cutting-edge cellular anti-aging therapies, and personalized aesthetic treatments designed to optimize performance inside and out.',
    cta: '[ RECLAIM VITALITY ]',
    status: '// SYS_STATUS: OPTIMIZING CELLULAR PERFORMANCE & HRT BIOMETRIC EQUILIBRIUM //',
  },
];

function BentoBox({ title, body, cta, status }) {
  return (
    <div className="group relative p-8 rounded-none transition-all duration-500 hover:shadow-[0_0_45px_rgba(0,242,254,0.18)] flex flex-col justify-between min-h-[380px] overflow-hidden cursor-pointer" style={{ background: '#111827', border: '1px solid rgba(255,255,255,0.14)' }}>
      {/* Animated corner accents */}
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-transparent group-hover:border-neon-cyan transition-all duration-500" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-transparent group-hover:border-neon-cyan transition-all duration-500" />

      <div>
        {/* Top neon accent line */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-neon-cyan/40 to-transparent" aria-hidden="true" />
        <h3 className="text-lg md:text-xl font-black tracking-wide text-white uppercase mb-4 group-hover:text-neon-cyan transition-colors duration-300 leading-tight">
          {title}
        </h3>
        <p className="text-xs md:text-sm text-slate-300 font-light leading-relaxed select-text">
          {body}
        </p>
      </div>

      <div className="mt-8 pt-4 border-t border-white/5 flex flex-col space-y-3">
        <button className="text-left text-[11px] font-mono font-bold tracking-widest text-neon-teal uppercase group-hover:text-white transition-colors duration-300 cursor-pointer">
          {cta} →
        </button>
        <div className="text-[8px] font-mono text-slate-600 tracking-wider overflow-hidden whitespace-nowrap text-ellipsis">
          {status}
        </div>
      </div>
    </div>
  );
}

export default function InteractiveServiceCore() {
  return (
    <section id="service-core-trigger" className="w-full bg-deep-space py-32 px-6 md:px-16 relative border-t border-white/5">
      {/* Canvas background — aging-frame sequence */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.3] mix-blend-screen" aria-hidden="true">
        <ScrollCanvasSequencer
          desktopFolder="/assets/scroll-sequences/service-bento"
          mobileFolder="/assets/scroll-sequences/service-bento"
          framePrefix="aging-frame"
          totalDesktopFrames={120}
          totalMobileFrames={120}
          triggerId="service-core-trigger"
        />
      </div>

      {/* Top neon accent */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent pointer-events-none" aria-hidden="true" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <span className="text-xs font-mono tracking-[0.3em] text-neon-cyan">
            // INTEGRATED PATHWAYS
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase mt-2">
            The Restorations
          </h2>
        </div>

        <div
          id="bento-grid-trigger"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {PILLARS.map((pillar) => (
            <BentoBox key={pillar.title} {...pillar} />
          ))}
        </div>
      </div>
    </section>
  );
}
