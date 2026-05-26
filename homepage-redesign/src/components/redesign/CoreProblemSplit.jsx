'use client';

import { useState } from 'react';

const CONDITIONS = [
  { name: 'NEUROPATHY',      err: '[ ERROR: 404 PATHWAY NOT FOUND. INITIATING RST-SANEXAS SIGNAL SCAN... ]' },
  { name: 'SCIATICA',        err: '[ COMPRESSION DETECTED L4-S1. PREPARING INTEGRATED DECOMPRESSION MAPPING... ]' },
  { name: 'ARTHRITIS',       err: '[ OVERBURDENED JOINT SPACE. INITIATING RESTORATIVE BIOMECHANICS TRACKING... ]' },
  { name: 'HEADACHES',       err: '[ AUTONOMIC STRESS ELEVATION. DISPATCHING SIGNAL MODULATION PROTOCOL... ]' },
  { name: 'CHRONIC PAIN',    err: '[ OVERLOADED BIO-ELECTRIC SYSTEM. INITIATING NEURAL REWIRE SEQUENCE... ]' },
  { name: 'PERSONAL INJURY', err: '[ STRUCTURAL TRAUMA LOCALIZED. CALIBRATING ACCELERATED REPAIR MODEL... ]' },
];

export default function CoreProblemSplit() {
  const [activeReadout, setActiveReadout] = useState(
    '// HOVER SYSTEM NODE TO INITIATE SIGNAL DIAGNOSIS'
  );
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      id="problem-trigger"
      className="relative w-full min-h-screen bg-white text-[#0D1117] flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-24 border-y border-slate-100"
    >
      {/* ── Left: diagnosis statement ──────────────────────────────────────── */}
      <div className="w-full md:w-1/2 flex flex-col justify-center mb-12 md:mb-0 relative z-20">
        <span className="text-xs font-mono font-bold tracking-widest text-neon-teal uppercase mb-4">
          // THE CORE DIAGNOSIS
        </span>

        <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase leading-none max-w-lg mb-8">
          CHRONIC PAIN IS NOT YOUR PERMANENT REALITY.
        </h2>

        {/* Real-time hover readout scope */}
        <div className="glass-panel border-slate-200 text-slate-800 p-6 rounded-none font-mono text-xs max-w-md shadow-sm">
          <div className="text-[10px] text-neon-teal font-bold mb-2">// CLINICAL RADAR READOUT:</div>
          <p className="min-h-[40px] leading-relaxed transition-all duration-300">{activeReadout}</p>
        </div>
      </div>

      {/* ── Right: kinetic slot-machine condition reel ─────────────────────── */}
      <div className="w-full md:w-1/2 h-[450px] flex items-center justify-center relative overflow-hidden bg-slate-50 border border-slate-200/60 rounded-none p-6">
        {/* Fade masks top/bottom */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />

        <div className="flex flex-col space-y-4 animate-scroll-loop text-center py-12">
          {/* Doubled array for seamless infinite loop */}
          {[...CONDITIONS, ...CONDITIONS].map((cond, idx) => (
            <div
              key={`${cond.name}-${idx}`}
              className={`text-2xl md:text-4xl font-black tracking-widest font-sans cursor-crosshair transition-all duration-300 uppercase py-2 border-y border-transparent ${
                hoveredIndex === idx % CONDITIONS.length
                  ? 'text-neon-cyan scale-105'
                  : 'text-slate-500 hover:text-neon-teal'
              }`}
              onMouseEnter={() => {
                setActiveReadout(`${cond.name} ➔ ${cond.err}`);
                setHoveredIndex(idx % CONDITIONS.length);
              }}
              onMouseLeave={() => {
                setActiveReadout('// HOVER SYSTEM NODE TO INITIATE SIGNAL DIAGNOSIS');
                setHoveredIndex(null);
              }}
            >
              {cond.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
