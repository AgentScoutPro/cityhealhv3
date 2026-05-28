'use client';

import { useLayoutEffect, useRef } from 'react';
import HeroSonoran from './HeroSonoran';
import DesertProblem from './DesertProblem';
import DesertServiceGrid from './DesertServiceGrid';
import DesertLocations from './DesertLocations';
import DesertCTA from './DesertCTA';
import SiteFooter from './SiteFooter';

export default function DesertOrchestrator() {
  const mainRef = useRef(null);

  useLayoutEffect(() => {
    let ctx;

    const initGSAP = async () => {
      const { default: gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        ctx = gsap.context(() => {

          // ── S1: Hero entrance — staggered fade-up on load ─────────────────
          gsap.timeline({ delay: 0.15 })
            .from('#hero-eyebrow', {
              y: 24,
              opacity: 0,
              duration: 0.6,
              ease: 'power2.out',
            })
            .from('#hero-headline', {
              y: 44,
              opacity: 0,
              duration: 0.8,
              ease: 'power3.out',
            }, '-=0.35')
            .from('#hero-sub', {
              y: 30,
              opacity: 0,
              duration: 0.65,
              ease: 'power2.out',
            }, '-=0.45')
            .from('#hero-ctas', {
              y: 24,
              opacity: 0,
              duration: 0.55,
              ease: 'power2.out',
            }, '-=0.35')
            .from('#hero-stats > *', {
              y: 20,
              opacity: 0,
              stagger: 0.1,
              duration: 0.5,
              ease: 'power2.out',
              clearProps: 'transform',
            }, '-=0.3');

          // ── S2: Why Choose Us grid — scroll-triggered stagger ─────────────
          ScrollTrigger.create({
            trigger: '#problem-grid',
            start: 'top 82%',
            onEnter: () => {
              gsap.from('#problem-grid > *', {
                y: 50,
                opacity: 0,
                stagger: 0.15,
                duration: 0.7,
                ease: 'power3.out',
                clearProps: 'transform,opacity',
              });
            },
          });

          // ── S2b: B2B section — slide in from left ─────────────────────────
          ScrollTrigger.create({
            trigger: '#b2b-section',
            start: 'top 80%',
            onEnter: () => {
              gsap.from('#b2b-section > div > div > *', {
                x: -30,
                opacity: 0,
                stagger: 0.12,
                duration: 0.6,
                ease: 'power2.out',
                clearProps: 'transform,opacity',
              });
            },
          });

          // ── S3: Service bento grid — stagger translate-up ─────────────────
          ScrollTrigger.create({
            trigger: '#service-grid-desert',
            start: 'top 80%',
            onEnter: () => {
              gsap.from('#service-grid-desert > *', {
                y: 60,
                stagger: 0.12,
                duration: 0.8,
                ease: 'power3.out',
                clearProps: 'transform',
              });
            },
          });

          // ── S4: Location cards — slide in from alternating sides ──────────
          ScrollTrigger.create({
            trigger: '#locations-section',
            start: 'top 78%',
            onEnter: () => {
              const cards = document.querySelectorAll('.location-card-desert');
              cards.forEach((card, i) => {
                gsap.from(card, {
                  x: i % 2 === 0 ? -40 : 40,
                  opacity: 0,
                  duration: 0.7,
                  delay: i * 0.1,
                  ease: 'power2.out',
                  clearProps: 'transform,opacity',
                });
              });
            },
          });

          // ── S5: CTA headline — fade up reveal ────────────────────────────
          ScrollTrigger.create({
            trigger: '#desert-cta-section',
            start: 'top 75%',
            onEnter: () => {
              gsap.from('#cta-headline', {
                y: 40,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out',
                clearProps: 'transform,opacity',
              });
            },
          });

          // ── Ambient parallax on hero background ───────────────────────────
          gsap.to('#hero-sonoran', {
            backgroundPositionY: '30%',
            ease: 'none',
            scrollTrigger: {
              trigger: '#hero-sonoran',
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            },
          });

        }, mainRef);

        return () => ctx?.revert();
      });
    };

    initGSAP();
    return () => ctx?.revert();
  }, []);

  return (
    <main
      ref={mainRef}
      id="desert-scroll-root"
      className="w-full overflow-x-hidden relative"
      style={{ background: '#0A0C0E', paddingTop: '64px' }}
    >
      <HeroSonoran />
      <DesertProblem />
      <DesertServiceGrid />
      <DesertLocations />
      <DesertCTA />
      <SiteFooter />
    </main>
  );
}
