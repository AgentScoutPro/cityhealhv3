// Server Component — full HTML on first byte; client components hydrate after
import ScrollCanvasSequencer   from '@/components/redesign/ScrollCanvasSequencer';
import CoreProblemSplit        from '@/components/redesign/CoreProblemSplit';
import InteractiveServiceCore  from '@/components/redesign/InteractiveServiceCore';
import EastValleyHub           from '@/components/redesign/EastValleyHub';
import ConversionFooter        from '@/components/redesign/ConversionFooter';
import SiteFooter              from '@/components/redesign/SiteFooter';

export const metadata = {
  title: 'City Health AZ | Pain Management & Physical Medicine — Mesa, AZ',
  description:
    'Expert pain management, neuropathy treatment, physical medicine, and anti-aging therapies in Mesa, AZ. Serving Chandler, Gilbert, Scottsdale, and the greater Phoenix metro area.',
  robots: { index: true, follow: true },
};

const PHONE      = '(480) 649-5297';
const PHONE_HREF = 'tel:+14806495297';

export default function HomePage() {
  return (
    <>
      <style>{`
        @keyframes gridPulse { 0%,100%{opacity:.04} 50%{opacity:.09} }
        @keyframes scanDown  { 0%{transform:translateY(-100%);opacity:0} 10%{opacity:1} 90%{opacity:1} 100%{transform:translateY(100vh);opacity:0} }
        @keyframes fadeUp    { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes neonFlick { 0%,100%{opacity:1} 93%{opacity:.4} 96%{opacity:.7} }
        @keyframes dotPing   { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.7);opacity:.4} }

        .ch-nav-link { cursor:pointer; }
        .ch-nav-link:hover { color:#00F2FE!important; }
        .ch-cta-primary:hover { opacity:.88; box-shadow:0 0 48px rgba(0,242,254,.45)!important; }
        .ch-cta-ghost:hover  { background:rgba(0,242,254,.08)!important; }

        @media(max-width:768px){
          .ch-nav-links { display:none!important; }
          .ch-ctas { flex-direction:column; align-items:stretch; }
          .ch-ctas a { text-align:center; }
        }

        @media(prefers-reduced-motion:reduce){
          .ch-cta-primary, .ch-cta-ghost { transition:none!important; }
        }
      `}</style>

      {/* ── Site wrapper ─────────────────────────────────────────── */}
      <div style={{ background:'#0D1117', minHeight:'100vh', color:'#E8EDF4', fontFamily:"'Noto Sans','Inter',sans-serif", overflowX:'hidden' }}>

        {/* ── NAV ───────────────────────────────────────────────── */}
        <nav style={{ position:'sticky', top:0, zIndex:100, background:'rgba(13,17,23,.96)', backdropFilter:'blur(20px)', borderBottom:'1px solid rgba(0,242,254,.1)', padding:'0 clamp(1.25rem,5vw,5rem)', height:'64px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <span style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:900, fontSize:'1.2rem', textTransform:'uppercase', letterSpacing:'.08em', background:'linear-gradient(90deg,#00F2FE,#4FACFE)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text', animation:'neonFlick 8s ease-in-out infinite' }}>
            City Health AZ
          </span>
          <div className="ch-nav-links" style={{ display:'flex', gap:'2rem', alignItems:'center' }}>
            {['Services','Locations','About'].map(l => (
              <a key={l} href="#" className="ch-nav-link" style={{ fontFamily:"'Space Mono',monospace", fontSize:'.7rem', color:'#7E9BB5', textDecoration:'none', letterSpacing:'.12em', textTransform:'uppercase', transition:'color 150ms ease' }}>{l}</a>
            ))}
            <a href={PHONE_HREF} style={{ fontFamily:"'Space Mono',monospace", fontSize:'.75rem', fontWeight:700, color:'#00F2FE', textDecoration:'none', letterSpacing:'.06em' }}>{PHONE}</a>
          </div>
        </nav>

        {/* ── HERO — 200vh sticky scroll container ──────────────── */}
        {/* 200vh = 100vh sticky viewport + 100vh scroll travel (~120% vp) */}
        <section
          id="hero-scroll-container"
          style={{ position:'relative', height:'200vh', background:'#0D1117' }}
          aria-label="Hero — The Neural Awakening"
        >
          <div style={{ position:'sticky', top:0, height:'100vh', overflow:'hidden', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'clamp(4rem,10vw,8rem) clamp(1.5rem,5vw,5rem)', textAlign:'center' }}>

            {/* Canvas scroll sequence — hero-neural frames, lerp 0.15 */}
            <div style={{ position:'absolute', inset:0, zIndex:0, pointerEvents:'none', opacity:0.55, mixBlendMode:'screen' }} aria-hidden="true">
              <ScrollCanvasSequencer
                desktopFolder="/assets/scroll-sequences/hero-neural/desktop"
                mobileFolder="/assets/scroll-sequences/hero-neural/mobile"
                framePrefix="hero-frame"
                totalDesktopFrames={240}
                totalMobileFrames={120}
                triggerId="hero-scroll-container"
              />
            </div>

            {/* CSS fallback layers — always visible */}
            <div style={{ position:'absolute', inset:0, zIndex:1, pointerEvents:'none', backgroundImage:'radial-gradient(circle,rgba(0,242,254,.1) 1px,transparent 1px)', backgroundSize:'40px 40px', animation:'gridPulse 5s ease-in-out infinite' }} aria-hidden="true" />
            <div style={{ position:'absolute', left:0, right:0, height:'1px', zIndex:1, background:'linear-gradient(90deg,transparent,rgba(0,242,254,.45),transparent)', animation:'scanDown 7s linear infinite', pointerEvents:'none' }} aria-hidden="true" />
            <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:'900px', height:'900px', zIndex:1, background:'radial-gradient(ellipse,rgba(79,172,254,.06) 0%,transparent 65%)', pointerEvents:'none' }} aria-hidden="true" />

            {/* Foreground content */}
            <div style={{ position:'relative', zIndex:10, maxWidth:'960px', animation:'fadeUp .9s ease both' }}>
              <p style={{ fontFamily:"'Space Mono',monospace", fontSize:'.65rem', letterSpacing:'.3em', color:'#00F2FE', marginBottom:'1.75rem', textTransform:'uppercase' }}>
                <span style={{ display:'inline-block', width:'7px', height:'7px', borderRadius:'50%', background:'#00F2FE', marginRight:'.6rem', verticalAlign:'middle', animation:'dotPing 2.2s ease-in-out infinite' }} />
                MESA, AZ — EAST VALLEY CLINICAL NETWORK — ACCEPTING NEW PATIENTS
              </p>

              <h1 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:'clamp(3rem,9vw,7.5rem)', fontWeight:900, lineHeight:.93, letterSpacing:'-.02em', textTransform:'uppercase', marginBottom:'2rem' }}>
                PAIN MANAGEMENT,
                <br />
                <span style={{ background:'linear-gradient(90deg,#00F2FE 0%,#4FACFE 55%,#43E97B 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
                  REWIRED.
                </span>
              </h1>

              <p style={{ fontSize:'clamp(.9rem,2vw,1.1rem)', color:'#7E9BB5', lineHeight:1.75, maxWidth:'580px', margin:'0 auto 2.75rem', fontWeight:300 }}>
                Advanced neuropathy repair, physical medicine, metabolic optimization, and regenerative therapies — engineered around your biology, not around your symptoms.
              </p>

              <div className="ch-ctas" style={{ display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap' }}>
                <a href="#section-footer" className="ch-cta-primary" style={{ padding:'1rem 2.75rem', background:'linear-gradient(90deg,#00F2FE,#4FACFE)', color:'#0D1117', fontFamily:"'Space Mono',monospace", fontSize:'.7rem', fontWeight:700, letterSpacing:'.18em', textTransform:'uppercase', textDecoration:'none', boxShadow:'0 0 32px rgba(0,242,254,.3)', transition:'opacity 200ms ease,box-shadow 200ms ease' }}>
                  [ INITIALIZE RECOVERY ]
                </a>
                <a href={PHONE_HREF} className="ch-cta-ghost" style={{ padding:'1rem 2.75rem', background:'transparent', border:'1px solid rgba(0,242,254,.3)', color:'#00F2FE', fontFamily:"'Space Mono',monospace", fontSize:'.7rem', fontWeight:700, letterSpacing:'.18em', textTransform:'uppercase', textDecoration:'none', transition:'background 200ms ease' }}>
                  {PHONE}
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* ── SECTION 2: Core Problem Split ─────────────────────── */}
        <CoreProblemSplit />

        {/* ── SECTION 3: Interactive Service Core (Bento) ───────── */}
        <InteractiveServiceCore />

        {/* ── SECTION 4: East Valley Hub (Locations) ────────────── */}
        <EastValleyHub />

        {/* ── SECTION 5: Conversion Footer (Booking CTA) ────────── */}
        <ConversionFooter />

        {/* ── Site Footer: full nav + schema + disclaimer ────────── */}
        <SiteFooter />

      </div>
    </>
  );
}
