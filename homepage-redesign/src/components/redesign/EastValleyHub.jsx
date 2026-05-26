'use client';

import ScrollCanvasSequencer from './ScrollCanvasSequencer';

const INSURANCES = [
  'MEDICARE', 'UNITEDHEALTHCARE', 'BCBS', 'CIGNA',
  'AETNA', 'HUMANA', 'TRICARE', 'HEALTH NET', 'UMR',
];

function LocationCard({ maskText, title, address, coverage, statusDefault, statusReveal }) {
  return (
    <div className="group relative w-full md:w-1/2 min-h-[420px] border border-white/5 bg-[#0D1117] flex items-center justify-center overflow-hidden transition-all duration-500 hover:border-neon-cyan/30 cursor-pointer">

      {/* Background typographic mask layer */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none transition-all duration-700 scale-100 group-hover:scale-105 opacity-[0.05] group-hover:opacity-[0.02]">
        <span className="text-[12vw] font-black font-sans text-white tracking-tighter uppercase">
          {maskText}
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center p-8 flex flex-col items-center max-w-md">
        <span className="text-[10px] font-mono tracking-widest text-neon-cyan mb-2 group-hover:animate-pulse">
          // ACCESS POINT DISCOVERED
        </span>
        <h3 className="text-3xl font-black tracking-wide uppercase mb-3" style={{ color: '#E8EDF4' }}>{title}</h3>
        <p className="text-xs font-mono text-slate-400 mb-4 tracking-wide leading-relaxed">{address}</p>
        <p className="text-xs font-light text-slate-500 mb-8 max-w-xs">{coverage}</p>

        <button className="px-6 py-3 bg-white/5 border border-white/10 text-xs font-mono tracking-widest text-white hover:bg-white hover:text-black transition-all duration-300 mb-6 cursor-pointer">
          [ ROUTE TO {maskText} ]
        </button>

        <div className="text-[8px] font-mono text-slate-600 group-hover:text-neon-cyan/60 transition-colors">
          <span className="inline-block group-hover:hidden">{statusDefault}</span>
          <span className="hidden group-hover:inline-block">{statusReveal}</span>
        </div>
      </div>
    </div>
  );
}

export default function EastValleyHub() {
  // 4× repeat fills the infinite marquee track
  const marqueeItems = Array(4).fill(INSURANCES).flat();

  return (
    <section id="east-valley-trigger" className="relative w-full bg-deep-space pt-32 border-t border-white/5">
      {/* Canvas background — longmore-map sequence */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.22] mix-blend-screen" aria-hidden="true">
        <ScrollCanvasSequencer
          desktopFolder="/assets/scroll-sequences/east-valley-hub"
          mobileFolder="/assets/scroll-sequences/east-valley-hub"
          framePrefix="longmore-map"
          totalDesktopFrames={120}
          totalMobileFrames={120}
          triggerId="east-valley-trigger"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 mb-16 text-center md:text-left relative z-10">
        <span className="text-xs font-mono tracking-[0.3em] text-neon-cyan">
          // FACILITY ACCESS POINTS
        </span>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase mt-2" style={{ color: '#E8EDF4' }}>
          Two Modern Spaces
        </h2>
      </div>

      {/* ── Dual location panels ───────────────────────────────────────────── */}
      <div className="relative z-10 w-full flex flex-col md:flex-row border-b border-white/5 location-wrapper">
        <LocationCard
          maskText="LONGMORE"
          title="Central Mesa Hub"
          address="1303 S Longmore #8, Mesa, AZ 85202"
          coverage="Serving Mesa, Tempe, and the Central East Valley."
          statusDefault="[ HUB: LONGMORE_RD ] // ACCESS STATUS: ACCEPTING NEW PATIENTS"
          statusReveal="[ CENTRAL MESA NODE CONNECTED ] // WALK-IN SYSTEM OPERATIONAL"
        />
        <LocationCard
          maskText="POWER"
          title="East Mesa Gateway Hub"
          address="1234 S Power Rd Suite 202, Mesa, AZ 85206"
          coverage="Serving East Mesa, Gilbert, Apache Junction, and Queen Creek."
          statusDefault="[ HUB: POWER_RD ] // ACCESS STATUS: ACCEPTING NEW PATIENTS"
          statusReveal="[ EAST MESA NODE CONNECTED ] // INTEGRATED MULTI-SPECIALTY TEAM READY"
        />
      </div>

      {/* ── Insurance carrier marquee ──────────────────────────────────────── */}
      <div className="relative z-10 w-full bg-black/40 py-5 overflow-hidden flex whitespace-nowrap border-b border-white/5">
        <div className="animate-marquee flex space-x-12 shrink-0 text-[10px] font-mono font-bold tracking-[0.25em] text-slate-400 uppercase">
          {marqueeItems.map((ins, idx) => (
            <span key={idx} className="flex items-center">
              <span className="text-neon-cyan mr-3">•</span>
              NETWORK COMPATIBLE: {ins}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
