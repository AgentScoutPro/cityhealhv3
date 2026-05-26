'use client';

/**
 * RedesignOrchestrator
 *
 * Client-side GSAP ScrollTrigger orchestrator.
 * Rendered from the server-side page.jsx so metadata stays exportable.
 *
 * Timeline sequences:
 *   1. Hero sticky scroll + canvas zoom exit
 *   2. Problem split — white→dark theme inversion
 *   3. Bento grid — staggered entrance
 *   4. Location cards — mask-text parallax
 */

import { useLayoutEffect, useRef } from 'react';
import ScrollCanvasSequencer from './ScrollCanvasSequencer';
import HeroNeuralAwakening from './HeroNeuralAwakening';
import CoreProblemSplit from './CoreProblemSplit';
import InteractiveServiceCore from './InteractiveServiceCore';
import EastValleyHub from './EastValleyHub';
import ConversionFooter from './ConversionFooter';
import SiteFooter from './SiteFooter';

export default function RedesignOrchestrator() {
  const mainRef = useRef(null);

  useLayoutEffect(() => {
    let ctx;

    const initGSAP = async () => {
      const { default: gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      // Wrap in matchMedia so prefers-reduced-motion users skip all animations
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        ctx = gsap.context(() => {

          // ── Sequence 1: Hero sticky canvas zoom + content exit ───────────
          gsap.timeline({
            scrollTrigger: {
              trigger: '#hero-scroll-container',
              start: 'top top',
              end: 'bottom top',
              scrub: true,
              pin: true,
            },
          })
            .to('#canvas-wrapper', {
              scale: 2.2,
              rotation: 30,
              opacity: 0.15,
              ease: 'power1.inOut',
            })
            .to('#hero-content-wrapper', {
              y: -120,
              opacity: 0,
              ease: 'power2.in',
            }, 0);

          // ── Sequence 2: Problem section white→dark theme inversion ────────
          gsap.timeline({
            scrollTrigger: {
              trigger: '#problem-trigger',
              start: 'top 75%',
              end: 'bottom 25%',
              scrub: true,
            },
          }).fromTo(
            '#problem-trigger',
            { backgroundColor: '#FFFFFF', color: '#0D1117' },
            { backgroundColor: '#0D1117', color: '#FFFFFF', ease: 'none' }
          );

          // ── Sequence 3: Bento box stagger entrance ────────────────────────
          // Cards are always visible via CSS; GSAP adds a subtle translateY
          // entrance only — opacity stays 1 throughout.
          ScrollTrigger.create({
            trigger: '#bento-grid-trigger',
            start: 'top 85%',
            onEnter: () => {
              gsap.from('#bento-grid-trigger > div', {
                y: 60,
                stagger: 0.12,
                duration: 0.8,
                ease: 'power3.out',
                clearProps: 'transform',
              });
            },
          });

          // ── Sequence 4: Location mask-text parallax ───────────────────────
          document.querySelectorAll('.location-wrapper > div').forEach((wrapper) => {
            const mask = wrapper.querySelector('span');
            if (!mask) return;
            gsap.fromTo(
              mask,
              { scale: 0.8, opacity: 0.06 },
              {
                scale: 1.1,
                opacity: 0.01,
                scrollTrigger: {
                  trigger: wrapper,
                  start: 'top bottom',
                  end: 'bottom top',
                  scrub: true,
                },
              }
            );
          });

        }, mainRef);

        return () => ctx?.revert();
      });
    };

    initGSAP();

    return () => {
      ctx?.revert();
    };
  }, []);

  return (
    <main
      ref={mainRef}
      id="redesign-scroll-root"
      className="w-full bg-deep-space overflow-x-hidden relative"
      style={{ paddingTop: '64px' }}
    >
      {/* ── Section 1: Hero (300vh sticky scroll container) ─────────────── */}
      <section
        id="hero-scroll-container"
        className="relative w-full bg-deep-space"
        style={{ height: '300vh' }}
        aria-label="Hero — The Neural Awakening"
      >
        <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex flex-col justify-between items-center">
          {/* Canvas sequencer layer */}
          <div
            id="canvas-wrapper"
            className="absolute inset-0 z-0 pointer-events-none opacity-50 mix-blend-screen"
            aria-hidden="true"
          >
            <ScrollCanvasSequencer triggerId="hero-scroll-container" />
          </div>

          {/* Foreground content */}
          <div className="relative z-10 w-full h-full flex flex-col justify-between items-center">
            <HeroNeuralAwakening />
          </div>
        </div>
      </section>

      {/* ── Section 2: Core Problem Split ──────────────────────────────── */}
      <CoreProblemSplit />

      {/* ── Section 3: Bento Service Core ──────────────────────────────── */}
      <InteractiveServiceCore />

      {/* ── Section 4: East Valley Hub ─────────────────────────────────── */}
      <EastValleyHub />

      {/* ── Section 5: Conversion Footer ───────────────────────────────── */}
      <ConversionFooter />

      {/* ── Site Footer: full nav + schema.org + disclaimer ────────────── */}
      <SiteFooter />
    </main>
  );
}
