'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const NAV_LINKS = [
  { label: 'Services', href: 'precision-services' },
  { label: 'Process', href: 'precision-timeline' },
  { label: 'Team', href: 'precision-team' },
  { label: 'Locations', href: 'precision-cta' },
];

export default function SiteHeaderPrecision({ staging }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        padding: '0 clamp(1.25rem, 5vw, 3.5rem)',
        background: scrolled ? 'rgba(6,8,11,0.92)' : 'rgba(6,8,11,0.65)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: scrolled
          ? '1px solid rgba(0,196,166,0.12)'
          : '1px solid rgba(0,196,166,0.04)',
        transition: 'background 300ms ease, border-color 300ms ease',
      }}
    >
      {/* Logo */}
      <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem', flexShrink: 0 }}>
        <div style={{
          width: '28px', height: '28px',
          borderRadius: '6px',
          background: 'linear-gradient(135deg, #00C4A6, #009C83)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 0 16px rgba(0,196,166,0.3)',
        }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1v12M3 5h8M2 9h10" stroke="#06080B" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        <div>
          <div style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            textTransform: 'uppercase',
            fontWeight: 800,
            fontSize: '0.95rem',
            letterSpacing: '0.04em',
            color: '#EDF3FA',
            lineHeight: 1.1,
          }}>
            City Health
          </div>
          <div style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '0.58rem',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            color: '#00C4A6',
            lineHeight: 1,
          }}>
            Chiropractic
          </div>
        </div>
      </Link>

      {staging && (
        <div style={{
          marginLeft: '0.875rem',
          padding: '0.2rem 0.55rem',
          background: 'rgba(0,196,166,0.08)',
          border: '1px solid rgba(0,196,166,0.2)',
          borderRadius: '3px',
          fontFamily: "'Space Mono', monospace",
          fontSize: '0.52rem',
          color: '#00C4A6',
          letterSpacing: '0.1em',
          flexShrink: 0,
        }}>
          V4 STAGING
        </div>
      )}

      {/* Nav */}
      <nav style={{
        marginLeft: 'auto',
        marginRight: '2rem',
        display: 'flex',
        gap: '2rem',
        alignItems: 'center',
      }} className="hidden md:flex">
        {NAV_LINKS.map(link => (
          <button
            key={link.label}
            onClick={() => scrollTo(link.href)}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: '#7A98B0',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 500,
              transition: 'color 200ms',
              padding: 0,
            }}
            onMouseEnter={e => { e.currentTarget.style.color = '#00C4A6'; }}
            onMouseLeave={e => { e.currentTarget.style.color = '#7A98B0'; }}
          >
            {link.label}
          </button>
        ))}
      </nav>

      {/* CTA */}
      <button
        onClick={() => scrollTo('precision-cta')}
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          fontSize: '0.72rem',
          fontWeight: 700,
          padding: '0.6rem 1.5rem',
          background: 'linear-gradient(135deg, #00C4A6, #009C83)',
          color: '#06080B',
          borderRadius: '3px',
          border: 'none',
          cursor: 'pointer',
          transition: 'box-shadow 250ms, transform 250ms',
          whiteSpace: 'nowrap',
          flexShrink: 0,
          boxShadow: '0 0 20px rgba(0,196,166,0.2)',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.boxShadow = '0 0 36px rgba(0,196,166,0.45)';
          e.currentTarget.style.transform = 'translateY(-1px)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.boxShadow = '0 0 20px rgba(0,196,166,0.2)';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        Book Now
      </button>
    </header>
  );
}
