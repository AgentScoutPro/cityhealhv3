'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollCanvasSequencer from './ScrollCanvasSequencer';

const fadeIn = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const staggerContainer = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemFadeIn = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const PILLARS = [
  {
    id: 'neuro',
    index: '01',
    title: 'Neuropathy Repair',
    tag: 'RST-SANEXAS PROTOCOL',
    body: 'Wake up sleeping nerves. Targeted pharmaceutical-grade electronic pulses repair damaged peripheral nerve pathways, clear chronic numbness, and silence burning pain at the source.',
    cta: 'ACCESS NEURAL RESTORATION',
    status: 'SYS: DELIVERING QUANTUM CELL SIGNALING → AFFERENT FIBERS',
    accent: 'from-[#00F2FE] to-[#4FACFE]',
    glow: 'rgba(0,242,254,0.15)',
  },
  {
    id: 'physmed',
    index: '02',
    title: 'Physical Medicine',
    tag: 'INTEGRATED BIOMECHANICS',
    body: 'Reclaim biological fluidity. Our team of physicians, chiropractors, and PTs align your structural framework to eliminate back pain, sciatica, and arthritis — without surgery.',
    cta: 'ALIGN BIO-MECHANICS',
    status: 'SYS: CALCULATING VECTOR FORCE ALIGNMENT → KINETIC FLUIDITY',
    accent: 'from-[#4FACFE] to-[#43E97B]',
    glow: 'rgba(79,172,254,0.15)',
  },
  {
    id: 'metabolic',
    index: '03',
    title: 'Metabolic Optimization',
    tag: 'PEPTIDE + IV PROTOCOLS',
    body: 'Engineered longevity. Sustainable body composition shifts through physician-supervised protocols — Tirzepatide, comprehensive IV nutrition, and precise biological monitoring.',
    cta: 'REWIRE METABOLISM',
    status: 'SYS: MONITORING TIRZEPATIDE SYNTHESIS → METABOLIC CASCADE',
    accent: 'from-[#43E97B] to-[#00F2FE]',
    glow: 'rgba(67,233,123,0.12)',
  },
  {
    id: 'regen',
    index: '04',
    title: 'Regen-Aesthetics & HRT',
    tag: 'CELLULAR ANTI-AGING',
    body: 'Defy chronological limits. Clinical HRT, cutting-edge cellular anti-aging therapies, and personalized aesthetic treatments — optimized performance inside and out.',
    cta: 'RECLAIM VITALITY',
    status: 'SYS: OPTIMIZING HRT BIOMETRIC EQUILIBRIUM → CELLULAR REPAIR',
    accent: 'from-[#F093FB] to-[#4FACFE]',
    glow: 'rgba(240,147,251,0.12)',
  },
];

function BentoCard({ index, title, tag, body, cta, status, accent, glow }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative flex flex-col justify-between overflow-hidden cursor-pointer"
      style={{
        background: hovered
          ? 'linear-gradient(145deg, rgba(17,24,39,0.95) 0%, rgba(13,17,23,0.98) 100%)'
          : 'linear-gradient(145deg, rgba(17,24,39,0.8) 0%, rgba(13,17,23,0.9) 100%)',
        border: `1px solid ${hovered ? 'rgba(0,242,254,0.35)' : 'rgba(255,255,255,0.08)'}`,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        minHeight: '420px',
        padding: '2rem',
        transition: 'border-color 350ms ease, box-shadow 350ms ease, background 350ms ease',
        boxShadow: hovered
          ? `0 0 0 1px rgba(0,242,254,0.2), 0 8px 48px ${glow}, inset 0 1px 0 rgba(255,255,255,0.06)`
          : 'inset 0 1px 0 rgba(255,255,255,0.04)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Glow sweep on hover */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(ellipse at 50% 0%, ${glow} 0%, transparent 65%)`,
          opacity: hovered ? 1 : 0,
          transition: 'opacity 400ms ease',
          pointerEvents: 'none',
        }}
      />

      {/* Top gradient border line */}
      <div
        aria-hidden="true"
        className={`absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r ${accent}`}
        style={{ opacity: hovered ? 1 : 0.3, transition: 'opacity 350ms ease' }}
      />

      {/* Card content */}
      <div className="relative z-10 flex flex-col gap-5 flex-1">
        {/* Header row */}
        <div className="flex items-start justify-between">
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.6rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: hovered ? '#00F2FE' : '#4B6A7E',
              transition: 'color 300ms ease',
            }}
          >
            {tag}
          </span>
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.65rem',
              fontWeight: 700,
              color: 'rgba(255,255,255,0.12)',
              letterSpacing: '0.05em',
            }}
          >
            {index}
          </span>
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: 'clamp(1.35rem, 2vw, 1.65rem)',
            fontWeight: 900,
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            lineHeight: 1.1,
            color: hovered ? '#FFFFFF' : '#CBD5E1',
            transition: 'color 300ms ease',
          }}
        >
          {title}
        </h3>

        {/* Body */}
        <p
          style={{
            fontSize: '0.8rem',
            lineHeight: 1.75,
            color: '#7E9BB5',
            fontWeight: 300,
            flex: 1,
          }}
        >
          {body}
        </p>
      </div>

      {/* Footer */}
      <div
        className="relative z-10 mt-6 pt-5 flex flex-col gap-3"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        {/* CTA */}
        <button
          className={`group/btn flex items-center gap-2 text-left`}
          style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
        >
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.62rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: hovered ? '#00F2FE' : '#4B6A7E',
              transition: 'color 300ms ease',
              borderBottom: `1px solid ${hovered ? 'rgba(0,242,254,0.5)' : 'transparent'}`,
              paddingBottom: '1px',
            }}
          >
            [ {cta} ]
          </span>
          <svg
            width="12" height="12" viewBox="0 0 12 12" fill="none"
            style={{
              color: hovered ? '#00F2FE' : '#4B6A7E',
              transition: 'color 300ms ease, transform 300ms ease',
              transform: hovered ? 'translateX(3px)' : 'translateX(0)',
            }}
          >
            <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Status readout */}
        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.58rem',
            letterSpacing: '0.08em',
            color: hovered ? 'rgba(0,242,254,0.45)' : 'rgba(255,255,255,0.12)',
            transition: 'color 350ms ease',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
          }}
        >
          // {status}
        </div>
      </div>
    </div>
  );
}

export default function InteractiveServiceCore() {
  return (
    <section
      id="service-core-trigger"
      className="w-full relative border-t"
      style={{
        background: '#0D1117',
        borderColor: 'rgba(255,255,255,0.06)',
        padding: 'clamp(5rem,10vw,9rem) clamp(1.25rem,5vw,5rem)',
      }}
    >
      {/* Canvas background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.28] mix-blend-screen" aria-hidden="true">
        <ScrollCanvasSequencer
          desktopFolder="/assets/scroll-sequences/service-bento"
          mobileFolder="/assets/scroll-sequences/service-bento"
          framePrefix="aging-frame"
          totalDesktopFrames={120}
          totalMobileFrames={120}
          triggerId="service-core-trigger"
        />
      </div>

      {/* Top neon line */}
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg,transparent,rgba(0,242,254,0.35),transparent)' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section header */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeIn}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <p
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.62rem',
                letterSpacing: '0.3em',
                color: '#00F2FE',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
              }}
            >
              // INTEGRATED PATHWAYS
            </p>
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 'clamp(2.5rem,6vw,4.5rem)',
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '-0.05em',
                lineHeight: 0.95,
                color: '#FFFFFF',
              }}
            >
              THE{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg,#00F2FE 0%,#4FACFE 55%,#43E97B 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                RESTORATIONS
              </span>
            </h2>
          </div>
          <p
            style={{
              fontFamily: "'Noto Sans', sans-serif",
              fontSize: '0.85rem',
              color: '#7E9BB5',
              lineHeight: 1.7,
              maxWidth: '340px',
              fontWeight: 300,
            }}
          >
            Four integrated clinical pathways — each engineered around your biology, not around your symptoms.
          </p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {PILLARS.map((pillar) => (
            <motion.div key={pillar.id} variants={itemFadeIn}>
              <BentoCard {...pillar} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
