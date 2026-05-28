'use client';

/**
 * SiteHeader — Mirrors the live cityhealthaz.com WordPress nav
 *
 * Navigation derived from cityhealthaz_project.json:
 *   Services (dropdown) · Service Areas · About Us · Reviews · Contact
 *   Phone CTA: (480) 649-5297
 *   Primary CTA: Book Consultation
 *
 * Two locations wired into Services dropdown:
 *   Power Road — 1234 S Power Rd Suite 202, Mesa AZ 85206
 *   Longmore   — 1303 S Longmore #8, Mesa AZ 85202
 */

import { useState, useEffect, useRef } from 'react';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services/',
    dropdown: [
      { label: 'Pain Management', href: '/services/pain-management/' },
      { label: 'Neuropathy Treatment', href: '/services/neuropathy/' },
      { label: 'Physical Medicine', href: '/services/physical-medicine/' },
      { label: 'Anti-Aging Therapies', href: '/services/anti-aging/' },
      { label: 'Personal Injury Rehab', href: '/services/personal-injury/' },
    ],
  },
  {
    label: 'Service Areas',
    href: '/service-areas/',
    dropdown: [
      { label: 'Mesa, AZ', href: '/locations/mesa-az/' },
      { label: 'Chandler, AZ', href: '/locations/chandler-az/' },
      { label: 'Gilbert, AZ', href: '/locations/gilbert-az/' },
      { label: 'Scottsdale, AZ', href: '/locations/scottsdale-az/' },
      { label: 'Tempe, AZ', href: '/locations/tempe-az/' },
      { label: 'Phoenix, AZ', href: '/locations/phoenix-az/' },
    ],
  },
  { label: 'About Us', href: '/about/' },
  { label: 'Reviews', href: '/reviews/' },
  { label: 'Contact', href: '/contact/' },
];

const PHONE = '(480) 649-5297';
const PHONE_HREF = 'tel:+14806495297';

function DropdownMenu({ items }) {
  return (
    <ul
      role="menu"
      style={{
        position: 'absolute',
        top: 'calc(100% + 8px)',
        left: '50%',
        transform: 'translateX(-50%)',
        minWidth: '220px',
        background: 'rgba(13, 17, 23, 0.97)',
        border: '1px solid rgba(0, 242, 254, 0.18)',
        borderRadius: '6px',
        boxShadow: '0 16px 40px rgba(0,0,0,0.6), 0 0 20px rgba(0,242,254,0.06)',
        listStyle: 'none',
        padding: '0.5rem 0',
        zIndex: 60,
        backdropFilter: 'blur(12px)',
      }}
    >
      {items.map(item => (
        <li key={item.href} role="none">
          <a
            href={item.href}
            role="menuitem"
            style={{
              display: 'block',
              padding: '0.6rem 1.25rem',
              fontFamily: "'Noto Sans', sans-serif",
              fontSize: '0.88rem',
              color: '#E8EDF4',
              textDecoration: 'none',
              transition: 'color 150ms ease, background 150ms ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = '#00F2FE';
              e.currentTarget.style.background = 'rgba(0,242,254,0.06)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = '#E8EDF4';
              e.currentTarget.style.background = 'transparent';
            }}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

function NavItem({ link }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const close = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, [open]);

  if (!link.dropdown) {
    return (
      <li>
        <a
          href={link.href}
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            fontSize: '0.9rem',
            fontWeight: 600,
            color: '#E8EDF4',
            textDecoration: 'none',
            padding: '0.25rem 0',
            transition: 'color 150ms ease',
            cursor: 'pointer',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = '#00F2FE')}
          onMouseLeave={e => (e.currentTarget.style.color = '#E8EDF4')}
        >
          {link.label}
        </a>
      </li>
    );
  }

  return (
    <li ref={ref} style={{ position: 'relative' }}>
      <button
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen(v => !v)}
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          fontSize: '0.9rem',
          fontWeight: 600,
          color: open ? '#00F2FE' : '#E8EDF4',
          background: 'none',
          border: 'none',
          padding: '0.25rem 0',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '0.3rem',
          transition: 'color 150ms ease',
        }}
        onMouseEnter={e => (e.currentTarget.style.color = '#00F2FE')}
        onMouseLeave={e => { if (!open) e.currentTarget.style.color = '#E8EDF4'; }}
      >
        {link.label}
        <svg
          width="10" height="10" viewBox="0 0 10 10" fill="none"
          aria-hidden="true"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 150ms ease' }}
        >
          <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {open && <DropdownMenu items={link.dropdown} />}
    </li>
  );
}

export default function SiteHeader({ staging = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      id="site-header"
      aria-label="Site navigation"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: '64px',
        background: scrolled
          ? 'rgba(13, 17, 23, 0.97)'
          : 'rgba(13, 17, 23, 0.82)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: `1px solid ${scrolled ? 'rgba(0,242,254,0.18)' : 'rgba(0,242,254,0.08)'}`,
        transition: 'background 300ms ease, border-color 300ms ease',
        display: 'flex',
        alignItems: 'center',
        padding: '0 clamp(1.25rem, 4vw, 3rem)',
        gap: '2rem',
      }}
    >
      {/* ── Wordmark ─────────────────────────────────────────────────────── */}
      <a
        href="/"
        aria-label="City Health AZ — Home"
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          fontSize: '1.2rem',
          fontWeight: 800,
          background: 'linear-gradient(90deg, #00F2FE, #4FACFE)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textDecoration: 'none',
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        City Health AZ
        {staging && (
          <span
            style={{
              fontSize: '0.6rem',
              fontFamily: 'monospace',
              color: 'rgba(0,242,254,0.5)',
              border: '1px solid rgba(0,242,254,0.25)',
              borderRadius: '3px',
              padding: '1px 5px',
              letterSpacing: '0.06em',
              WebkitTextFillColor: 'rgba(0,242,254,0.5)',
              background: 'none',
            }}
          >
            STAGING
          </span>
        )}
      </a>

      {/* ── Desktop Nav ──────────────────────────────────────────────────── */}
      <nav aria-label="Primary navigation" className="desktop-nav" style={{ marginLeft: 'auto' }}>
        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: 'clamp(1rem, 2.5vw, 2rem)',
          }}
        >
          {NAV_LINKS.map(link => (
            <NavItem key={link.href} link={link} />
          ))}
        </ul>
      </nav>

      {/* ── Phone + CTA ──────────────────────────────────────────────────── */}
      <div className="header-cta" style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexShrink: 0 }}>
        <a
          href={PHONE_HREF}
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            fontSize: '0.9rem',
            fontWeight: 600,
            color: '#E8EDF4',
            textDecoration: 'none',
            transition: 'color 150ms ease',
            cursor: 'pointer',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = '#00F2FE')}
          onMouseLeave={e => (e.currentTarget.style.color = '#E8EDF4')}
          aria-label={`Call us at ${PHONE}`}
        >
          {PHONE}
        </a>

        <a
          href="#section-footer"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            fontSize: '0.85rem',
            fontWeight: 700,
            padding: '0.5rem 1.25rem',
            background: 'linear-gradient(90deg, #00F2FE, #4FACFE)',
            color: '#0D1117',
            borderRadius: '4px',
            textDecoration: 'none',
            cursor: 'pointer',
            transition: 'box-shadow 200ms ease, opacity 200ms ease',
            boxShadow: '0 0 14px rgba(0,242,254,0.28)',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.boxShadow = '0 0 24px rgba(0,242,254,0.5)';
            e.currentTarget.style.opacity = '0.92';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.boxShadow = '0 0 14px rgba(0,242,254,0.28)';
            e.currentTarget.style.opacity = '1';
          }}
        >
          Book Consultation
        </a>
      </div>

      {/* ── Mobile hamburger ─────────────────────────────────────────────── */}
      <button
        className="mobile-menu-btn"
        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen(v => !v)}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '0.25rem',
          color: '#E8EDF4',
          marginLeft: 'auto',
        }}
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
          {mobileOpen ? (
            <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          ) : (
            <>
              <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </>
          )}
        </svg>
      </button>

      {/* ── Mobile dropdown panel ─────────────────────────────────────────── */}
      {mobileOpen && (
        <div
          className="mobile-nav-panel"
          style={{
            position: 'absolute',
            top: '64px',
            left: 0,
            right: 0,
            background: 'rgba(13, 17, 23, 0.98)',
            borderBottom: '1px solid rgba(0,242,254,0.15)',
            padding: '1rem clamp(1.25rem, 4vw, 3rem) 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.25rem',
          }}
        >
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontSize: '1.1rem',
                fontWeight: 600,
                color: '#E8EDF4',
                textDecoration: 'none',
                padding: '0.6rem 0',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                cursor: 'pointer',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={PHONE_HREF}
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              fontSize: '1.1rem',
              fontWeight: 700,
              color: '#00F2FE',
              textDecoration: 'none',
              padding: '0.75rem 0',
              marginTop: '0.5rem',
              cursor: 'pointer',
            }}
          >
            {PHONE}
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .header-cta { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
