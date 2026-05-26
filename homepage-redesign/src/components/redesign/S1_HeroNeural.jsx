'use client';

/**
 * S1_HeroNeural — The Neural Awakening
 *
 * Section 1 · Dark base · Full-screen scroll-pinned
 *
 * Frame sequence pipeline:
 *  - useScrollSequence preloads /assets/scroll-sequences/hero/0001.jpg…0120.jpg
 *  - GSAP ScrollTrigger scrubs progress 0→1 through the pinned section
 *  - drawFrame(progress) paints the correct frame onto the canvas layer
 *  - Content layer sits above canvas at z-index 20
 */

import { useRef, useEffect } from 'react';
import { useScrollSequence } from '@/hooks/useScrollSequence';

const FRAME_DIR = '/assets/scroll-sequences/hero/';
const TOTAL_FRAMES = 120;
// Pin duration: scroll this many viewport-heights to traverse all frames
const PIN_SCROLL_HEIGHTS = 4;

export default function S1_HeroNeural() {
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);

  const { drawFrame } = useScrollSequence({
    dir: FRAME_DIR,
    totalFrames: TOTAL_FRAMES,
    canvasRef,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let ctx;

    const initGSAP = async () => {
      const { default: gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      // Draw first frame immediately so canvas isn't blank on load
      drawFrame(0);

      const mm = gsap.matchMedia();

      // Respect prefers-reduced-motion — skip pinning, just show frame 0
      mm.add('(prefers-reduced-motion: reduce)', () => {
        drawFrame(0);
      });

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        ctx = ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top top',
          end: `+=${PIN_SCROLL_HEIGHTS * 100}%`,
          pin: true,
          scrub: 1.2,
          onUpdate: (self) => drawFrame(self.progress),
        });
      });
    };

    initGSAP();

    return () => {
      // cleanup handled by GSAP matchMedia internally
    };
  }, [drawFrame]);

  return (
    <section
      id="section-hero"
      ref={sectionRef}
      aria-label="Hero — The Neural Awakening"
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: '600px',
        background: '#0D1117',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* ── HTML5 Canvas · Frame Sequence Layer ──────────────────────────── */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 10,
          pointerEvents: 'none',
        }}
      />

      {/* ── Ambient vignette overlay ──────────────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 15,
          background:
            'radial-gradient(ellipse 80% 70% at 50% 60%, transparent 30%, rgba(13,17,23,0.85) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* ── Content Layer ─────────────────────────────────────────────────── */}
      <div
        id="s1-timeline-root"
        style={{
          position: 'relative',
          zIndex: 20,
          textAlign: 'center',
          padding: '0 clamp(1.25rem, 5vw, 5rem)',
          maxWidth: '900px',
        }}
      >
        <p
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            textTransform: 'uppercase',
            letterSpacing: '0.18em',
            fontSize: 'clamp(0.7rem, 1.2vw, 0.9rem)',
            color: '#00F2FE',
            marginBottom: '1.25rem',
            opacity: 0.85,
          }}
        >
          Mesa · Chandler · Gilbert · Scottsdale
        </p>

        <h1
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            fontWeight: 800,
            lineHeight: 1,
            marginBottom: '1.5rem',
            background: 'linear-gradient(90deg, #00F2FE, #4FACFE)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Restore
          <br />
          Your Motion
        </h1>

        <p
          style={{
            fontFamily: "'Noto Sans', sans-serif",
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            lineHeight: 1.7,
            color: '#E8EDF4',
            maxWidth: '560px',
            margin: '0 auto 2.5rem',
          }}
        >
          Advanced pain management and physical medicine in Arizona. Same-day
          appointments. Bilingual care. No long waiting rooms.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="#section-footer"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontSize: '1rem',
              fontWeight: 700,
              padding: '0.875rem 2.5rem',
              background: 'linear-gradient(90deg, #00F2FE, #4FACFE)',
              color: '#0D1117',
              borderRadius: '4px',
              textDecoration: 'none',
              display: 'inline-block',
              cursor: 'pointer',
              transition: 'opacity 200ms ease, box-shadow 200ms ease',
              boxShadow: '0 0 20px rgba(0, 242, 254, 0.35)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.opacity = '0.9';
              e.currentTarget.style.boxShadow = '0 0 32px rgba(0, 242, 254, 0.55)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.opacity = '1';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 242, 254, 0.35)';
            }}
          >
            Book an Appointment
          </a>

          <a
            href="#section-services"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontSize: '1rem',
              fontWeight: 600,
              padding: '0.875rem 2.5rem',
              background: 'transparent',
              color: '#00F2FE',
              border: '1px solid rgba(0, 242, 254, 0.45)',
              borderRadius: '4px',
              textDecoration: 'none',
              display: 'inline-block',
              cursor: 'pointer',
              transition: 'border-color 200ms ease, background 200ms ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(0, 242, 254, 0.08)';
              e.currentTarget.style.borderColor = 'rgba(0, 242, 254, 0.7)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = 'rgba(0, 242, 254, 0.45)';
            }}
          >
            Our Services
          </a>
        </div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 20,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          opacity: 0.5,
        }}
      >
        <span
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            textTransform: 'uppercase',
            letterSpacing: '0.18em',
            fontSize: '0.65rem',
            color: '#00F2FE',
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: '1px',
            height: '40px',
            background: 'linear-gradient(to bottom, #00F2FE, transparent)',
          }}
        />
      </div>
    </section>
  );
}
