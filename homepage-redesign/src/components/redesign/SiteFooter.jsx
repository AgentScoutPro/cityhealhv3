'use client';

/**
 * SiteFooter — Mirrors the live cityhealthaz.com WordPress footer
 *
 * Data sourced from cityhealthaz_project.json:
 *   Brand: City Health Services / City Health AZ
 *   Locations: Power Road (85206) · Longmore (85202), Mesa AZ
 *   Phone: (480) 649-5297
 *   Services: pain management, neuropathy, anti-aging, physical medicine, PI rehab
 */

const PHONE = '(480) 649-5297';
const PHONE_HREF = 'tel:+14806495297';

const LOCATIONS = [
  {
    name: 'Power Road Clinic',
    address: '1234 S Power Rd, Suite 202',
    city: 'Mesa, AZ 85206',
    maps: 'https://maps.app.goo.gl/Tz165GJY2pBQNi996',
  },
  {
    name: 'Longmore Clinic',
    address: '1303 S Longmore #8',
    city: 'Mesa, AZ 85202',
    maps: 'https://maps.app.goo.gl/Xpu1YzR7T1DPsNK1A',
  },
];

const FOOTER_NAV = {
  Services: [
    { label: 'Pain Management', href: '/services/pain-management/' },
    { label: 'Neuropathy Treatment', href: '/services/neuropathy/' },
    { label: 'Physical Medicine', href: '/services/physical-medicine/' },
    { label: 'Anti-Aging Therapies', href: '/services/anti-aging/' },
    { label: 'Personal Injury Rehab', href: '/services/personal-injury/' },
  ],
  'Service Areas': [
    { label: 'Mesa, AZ', href: '/locations/mesa-az/' },
    { label: 'Chandler, AZ', href: '/locations/chandler-az/' },
    { label: 'Gilbert, AZ', href: '/locations/gilbert-az/' },
    { label: 'Scottsdale, AZ', href: '/locations/scottsdale-az/' },
    { label: 'Tempe, AZ', href: '/locations/tempe-az/' },
    { label: 'Phoenix, AZ', href: '/locations/phoenix-az/' },
  ],
  Company: [
    { label: 'About Us', href: '/about/' },
    { label: 'Reviews', href: '/reviews/' },
    { label: 'Blog', href: '/blog/' },
    { label: 'Contact', href: '/contact/' },
    { label: 'Privacy Policy', href: '/privacy-policy/' },
    { label: 'Terms & Conditions', href: '/terms-conditions/' },
  ],
};

const colStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.6rem',
};

const linkStyle = {
  fontFamily: "'Noto Sans', sans-serif",
  fontSize: '0.875rem',
  color: '#7E9BB5',
  textDecoration: 'none',
  transition: 'color 150ms ease',
  cursor: 'pointer',
  lineHeight: 1.5,
};

const headingStyle = {
  fontFamily: "'Barlow Condensed', sans-serif",
  textTransform: 'uppercase',
  letterSpacing: '0.12em',
  fontSize: '0.75rem',
  fontWeight: 700,
  color: '#E8EDF4',
  marginBottom: '0.5rem',
};

export default function SiteFooter() {
  return (
    <footer
      id="site-footer"
      aria-label="Site footer"
      style={{
        background: '#090C10',
        borderTop: '1px solid rgba(0,242,254,0.1)',
        padding: 'clamp(3rem, 6vw, 5rem) clamp(1.25rem, 5vw, 5rem) 2rem',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* ── Top row: brand + locations + nav columns ─────────────────── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1fr',
            gap: '3rem',
            marginBottom: '3rem',
          }}
          className="footer-top-grid"
        >
          {/* Brand column */}
          <div style={colStyle}>
            <a
              href="/"
              aria-label="City Health AZ — Home"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontSize: '1.3rem',
                fontWeight: 800,
                background: 'linear-gradient(90deg, #00F2FE, #4FACFE)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textDecoration: 'none',
                marginBottom: '0.75rem',
              }}
            >
              City Health AZ
            </a>

            <p
              style={{
                fontFamily: "'Noto Sans', sans-serif",
                fontSize: '0.875rem',
                lineHeight: 1.65,
                color: '#7E9BB5',
                maxWidth: '32ch',
                marginBottom: '1rem',
              }}
            >
              Advanced pain management and physical medicine serving Mesa and
              the greater Phoenix metro area.
            </p>

            <a
              href={PHONE_HREF}
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                fontSize: '1.05rem',
                fontWeight: 700,
                color: '#00F2FE',
                textDecoration: 'none',
                marginBottom: '1.25rem',
                cursor: 'pointer',
              }}
              aria-label={`Call City Health AZ at ${PHONE}`}
            >
              {PHONE}
            </a>

            {/* Locations */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {LOCATIONS.map(loc => (
                <a
                  key={loc.name}
                  href={loc.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', cursor: 'pointer' }}
                  aria-label={`Get directions to our ${loc.name}`}
                  itemScope
                  itemType="https://schema.org/MedicalClinic"
                >
                  <p
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: '#E8EDF4',
                      marginBottom: '0.15rem',
                    }}
                  >
                    {loc.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Noto Sans', sans-serif",
                      fontSize: '0.8rem',
                      color: '#7E9BB5',
                      lineHeight: 1.5,
                      transition: 'color 150ms ease',
                    }}
                    itemProp="address"
                    onMouseEnter={e => (e.currentTarget.style.color = '#00F2FE')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#7E9BB5')}
                  >
                    {loc.address}
                    <br />
                    {loc.city}
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(FOOTER_NAV).map(([group, links]) => (
            <nav key={group} aria-label={`${group} links`} style={colStyle}>
              <p style={headingStyle}>{group}</p>
              {links.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  style={linkStyle}
                  onMouseEnter={e => (e.currentTarget.style.color = '#00F2FE')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#7E9BB5')}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          ))}
        </div>

        {/* ── Bottom bar ─────────────────────────────────────────────────── */}
        <div
          style={{
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <p
            style={{
              fontFamily: "'Noto Sans', sans-serif",
              fontSize: '0.75rem',
              color: 'rgba(126,155,181,0.55)',
            }}
          >
            © {new Date().getFullYear()} City Health Services · Mesa, AZ ·
            All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "'Noto Sans', sans-serif",
              fontSize: '0.72rem',
              color: 'rgba(126,155,181,0.4)',
              maxWidth: '70ch',
              textAlign: 'right',
              lineHeight: 1.5,
            }}
          >
            Content on this site is for informational purposes only and does not
            constitute medical advice. Consult a qualified healthcare provider
            for diagnosis and treatment.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-top-grid {
            grid-template-columns: 1fr 1fr 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .footer-top-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
