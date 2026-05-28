'use client';

import { useLayoutEffect, useRef } from 'react';
import PrecisionHero from './PrecisionHero';
import PrecisionMetrics from './PrecisionMetrics';
import PrecisionServices from './PrecisionServices';
import PrecisionTimeline from './PrecisionTimeline';
import PrecisionTeam from './PrecisionTeam';
import PrecisionCTA from './PrecisionCTA';
import SiteFooter from './SiteFooter';

export default function PrecisionOrchestrator() {
  const mainRef = useRef(null);

  useLayoutEffect(() => {
    let ctx;
    let mouseMoveCleanup;

    const initGSAP = async () => {
      const { default: gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        ctx = gsap.context(() => {

          // ── S1: Hero entrance — staggered sequence ──────────────────────────
          gsap.timeline({ delay: 0.2 })
            .from('#hero-eyebrow-v4', {
              y: 18, opacity: 0, duration: 0.55, ease: 'power2.out',
            })
            .from('#hero-headline-v4', {
              y: 52, opacity: 0, duration: 0.85, ease: 'power3.out',
            }, '-=0.3')
            .from('#hero-rule-v4', {
              scaleX: 0, transformOrigin: 'left center',
              duration: 0.65, ease: 'power2.inOut',
            }, '-=0.55')
            .from('#hero-sub-v4', {
              y: 26, opacity: 0, duration: 0.6, ease: 'power2.out',
            }, '-=0.45')
            .from('#hero-ctas-v4', {
              y: 20, opacity: 0, duration: 0.5, ease: 'power2.out',
            }, '-=0.35')
            .from('#hero-stats-v4 > *', {
              y: 16, opacity: 0, stagger: 0.08, duration: 0.45,
              ease: 'power2.out', clearProps: 'transform',
            }, '-=0.25')
            .from('#hero-graphic-v4', {
              x: 50, opacity: 0, duration: 1.0, ease: 'power2.out',
            }, '-=0.75');

        }, mainRef);

        // ── Hero graphic: mouse parallax ────────────────────────────────────
        const graphicEl = document.getElementById('hero-graphic-v4');
        if (graphicEl) {
          const handleMouseMove = e => {
            const xR = (e.clientX / window.innerWidth - 0.5) * 2;
            const yR = (e.clientY / window.innerHeight - 0.5) * 2;
            gsap.to(graphicEl, {
              rotateY: xR * 6,
              rotateX: -yR * 3.5,
              x: xR * 10,
              y: yR * 6,
              duration: 1.4,
              ease: 'power1.out',
            });
          };
          window.addEventListener('mousemove', handleMouseMove, { passive: true });
          mouseMoveCleanup = () => window.removeEventListener('mousemove', handleMouseMove);
        }

        // ── S2: Metrics section ──────────────────────────────────────────────
        ScrollTrigger.create({
          trigger: '#precision-metrics',
          start: 'top 82%',
          onEnter: () => {
            gsap.from('#metrics-header-v4', {
              y: 38, opacity: 0, duration: 0.72, ease: 'power2.out',
            });
            gsap.from('#metrics-stats-col > *', {
              x: -42, opacity: 0, stagger: 0.14, duration: 0.68,
              ease: 'power2.out', delay: 0.2, clearProps: 'transform,opacity',
            });
            gsap.from('.venn-circle-v4', {
              scale: 0.35, opacity: 0, stagger: 0.1, duration: 0.85,
              ease: 'back.out(1.6)', delay: 0.35,
              transformOrigin: 'center center', clearProps: 'transform,opacity',
            });
          },
        });

        // ── S3: Services section ─────────────────────────────────────────────
        ScrollTrigger.create({
          trigger: '#precision-services',
          start: 'top 82%',
          onEnter: () => {
            gsap.from('#services-header-v4', {
              y: 38, opacity: 0, duration: 0.72, ease: 'power2.out',
            });
            gsap.from('.service-card-v4', {
              y: 64, opacity: 0, stagger: 0.13, duration: 0.8,
              ease: 'power3.out', delay: 0.2, clearProps: 'transform,opacity',
            });
          },
        });

        // ── S4: Timeline progress line — scrub ───────────────────────────────
        ScrollTrigger.create({
          trigger: '#precision-timeline',
          start: 'top 82%',
          onEnter: () => {
            gsap.from('#timeline-header-v4', {
              y: 38, opacity: 0, duration: 0.72, ease: 'power2.out',
            });
            gsap.from('.timeline-step-v4', {
              x: -32, opacity: 0, stagger: 0.18, duration: 0.7,
              ease: 'power2.out', delay: 0.25, clearProps: 'transform,opacity',
            });
          },
        });

        gsap.fromTo(
          '#timeline-progress-v4',
          { height: '0%' },
          {
            height: '100%',
            ease: 'none',
            scrollTrigger: {
              trigger: '#precision-timeline',
              start: 'top 70%',
              end: 'bottom 32%',
              scrub: 0.85,
            },
          }
        );

        // ── S5: Team section ─────────────────────────────────────────────────
        ScrollTrigger.create({
          trigger: '#precision-team',
          start: 'top 82%',
          onEnter: () => {
            gsap.from('#team-header-v4', {
              y: 38, opacity: 0, duration: 0.72, ease: 'power2.out',
            });
            gsap.from('.team-card-v4', {
              y: 42, opacity: 0, scale: 0.96, stagger: 0.11, duration: 0.72,
              ease: 'power2.out', delay: 0.2, clearProps: 'transform,opacity',
            });
          },
        });

        // ── S6: CTA section ──────────────────────────────────────────────────
        ScrollTrigger.create({
          trigger: '#precision-cta',
          start: 'top 82%',
          onEnter: () => {
            gsap.from('#cta-header-v4', {
              y: 38, opacity: 0, duration: 0.72, ease: 'power2.out',
            });
          },
        });

        // ── Metric cards: subtle parallax on scroll ──────────────────────────
        gsap.utils.toArray('.metric-card-v4').forEach((card, i) => {
          gsap.to(card, {
            y: -10 + i * 3,
            ease: 'none',
            scrollTrigger: {
              trigger: '#precision-metrics',
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.5,
            },
          });
        });

        return () => {
          ctx?.revert();
          mouseMoveCleanup?.();
        };
      });
    };

    initGSAP();

    return () => {
      ctx?.revert();
      mouseMoveCleanup?.();
    };
  }, []);

  return (
    <main
      ref={mainRef}
      id="precision-scroll-root"
      className="w-full overflow-x-hidden relative"
      style={{ background: '#06080B', paddingTop: '64px' }}
    >
      <PrecisionHero />
      <PrecisionMetrics />
      <PrecisionServices />
      <PrecisionTimeline />
      <PrecisionTeam />
      <PrecisionCTA />
      <SiteFooter />
    </main>
  );
}
