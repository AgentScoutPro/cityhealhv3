// Server Component — renders full HTML on first byte, no JS required for layout
import BookingForm from '@/components/redesign/BookingForm';

export const metadata = {
  title: 'City Health AZ | Pain Management & Physical Medicine — Mesa, AZ',
  description:
    'Expert pain management, neuropathy treatment, physical medicine, and anti-aging therapies in Mesa, AZ. Serving Chandler, Gilbert, Scottsdale, and the greater Phoenix metro area.',
  robots: { index: true, follow: true },
};

const PHONE      = '(480) 649-5297';
const PHONE_HREF = 'tel:+14806495297';

const PILLARS = [
  {
    label:  'NEUROPATHY REPAIR',
    body:   'Wake up sleeping nerves. RST-Sanexas electric cell signaling delivers pharmaceutical-grade electronic pulses to repair damaged peripheral nerve pathways, clear chronic numbness, and silence burning pain at the source.',
    cta:    '[ ACCESS NEURAL RESTORATION ]',
    status: '// DELIVERING QUANTUM CELL SIGNALING TO DAMAGED AFFERENT FIBERS',
  },
  {
    label:  'PHYSICAL MEDICINE',
    body:   'Reclaim biological fluidity. Our integrated team of physicians, chiropractors, and physical therapists align your structural framework to eliminate back pain, sciatica, arthritis, and personal injuries without surgery.',
    cta:    '[ ALIGN BIO-MECHANICS ]',
    status: '// CALCULATING VECTOR FORCE ALIGNMENT FOR KINETIC FLUIDITY',
  },
  {
    label:  'WEIGHT LOSS PROTOCOL',
    body:   'Engineered metabolic shift. Physician-supervised Tirzepatide peptide therapy, IV nutrition, and biometric monitoring produce sustainable body composition change via precision metabolic cascade protocol.',
    cta:    '[ REWIRE METABOLISM ]',
    status: '// MONITORING TIRZEPATIDE PEPTIDE SYNTHESIS & METABOLIC CASCADE',
  },
  {
    label:  'LONGEVITY & HRT',
    body:   'Defy chronological limits. Clinical Hormone Replacement Therapy, cellular anti-aging protocols, and regenerative aesthetic treatments restore internal vitality and external performance simultaneously.',
    cta:    '[ RECLAIM VITALITY ]',
    status: '// OPTIMIZING CELLULAR PERFORMANCE & HRT BIOMETRIC EQUILIBRIUM',
  },
];

const LOCATIONS = [
  {
    mask:    'LONGMORE',
    title:   'Central Mesa Hub',
    address: '1303 S Longmore #8\nMesa, AZ 85202',
    detail:  'Serving Mesa, Tempe, and the Central East Valley. Walk-in slots available. Multi-specialty team on-site.',
    maps:    'https://maps.app.goo.gl/Xpu1YzR7T1DPsNK1A',
    status:  '[ HUB: LONGMORE_RD ] // ACCEPTING NEW PATIENTS',
  },
  {
    mask:    'POWER',
    title:   'East Mesa Gateway',
    address: '1234 S Power Rd Suite 202\nMesa, AZ 85206',
    detail:  'Serving East Mesa, Gilbert, Apache Junction, and Queen Creek. Full diagnostic suite. Integrated multi-specialty team.',
    maps:    'https://maps.app.goo.gl/Tz165GJY2pBQNi996',
    status:  '[ HUB: POWER_RD ] // ACCEPTING NEW PATIENTS',
  },
];

const INSURANCE = ['MEDICARE','UNITEDHEALTHCARE','BCBS','CIGNA','AETNA','HUMANA','TRICARE','HEALTH NET','UMR'];

export default function HomePage() {
  const year = new Date().getFullYear();

  return (
    <>
      <style>{`
        /* ── Font face guarantee ──────────────────────────────── */
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=Noto+Sans:wght@300;400;700&family=Space+Mono:wght@400;700&display=swap');

        /* ── CSS animations ───────────────────────────────────── */
        @keyframes gridPulse  { 0%,100%{opacity:.04} 50%{opacity:.09} }
        @keyframes scanDown   { 0%{transform:translateY(-100%);opacity:0} 10%{opacity:1} 90%{opacity:1} 100%{transform:translateY(100vh);opacity:0} }
        @keyframes fadeUp     { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes glowPulse  { 0%,100%{box-shadow:0 0 20px rgba(0,242,254,.08)} 50%{box-shadow:0 0 48px rgba(0,242,254,.22)} }
        @keyframes neonFlick  { 0%,100%{opacity:1} 93%{opacity:.4} 96%{opacity:.7} }
        @keyframes marquee    { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        @keyframes dotPing    { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.7);opacity:.4} }
        @keyframes spin       { to{transform:rotate(360deg)} }

        /* ── Utility ──────────────────────────────────────────── */
        .ch-card { transition:border-color 300ms ease,box-shadow 300ms ease,transform 200ms ease; }
        .ch-card:hover { border-color:rgba(0,242,254,.4)!important; box-shadow:0 0 44px rgba(0,242,254,.16)!important; transform:translateY(-3px); }
        .ch-card:hover .ch-card-title { color:#00F2FE!important; }
        .ch-card:hover .ch-corner-tr { border-top-color:#00F2FE!important; border-right-color:#00F2FE!important; }
        .ch-card:hover .ch-corner-bl { border-bottom-color:#00F2FE!important; border-left-color:#00F2FE!important; }
        .ch-card:hover .ch-cta        { color:#E8EDF4!important; }

        .ch-loc:hover { border-color:rgba(0,242,254,.35)!important; box-shadow:0 0 50px rgba(0,242,254,.12)!important; }
        .ch-loc:hover .ch-loc-btn { background:#fff!important; color:#0D1117!important; }

        .ch-nav-link:hover { color:#00F2FE!important; }
        .ch-fl-link:hover  { color:#00F2FE!important; }

        .ch-animate-1 { animation:fadeUp .65s .05s ease both; }
        .ch-animate-2 { animation:fadeUp .65s .15s ease both; }
        .ch-animate-3 { animation:fadeUp .65s .25s ease both; }
        .ch-animate-4 { animation:fadeUp .65s .35s ease both; }

        .hub-radio:hover { border-color:#00F2FE!important; }
        input::placeholder { color:#3a4a5a; }
        input:focus,select:focus { outline:none; border-color:#00F2FE!important; }
        select option { background:#0D1117; color:#E8EDF4; }

        @media(max-width:768px){
          .ch-bento  { grid-template-columns:1fr!important; }
          .ch-locs   { flex-direction:column!important; }
          .ch-ctas   { flex-direction:column; align-items:stretch; }
          .ch-ctas a { text-align:center; }
          .ch-ftgrid { grid-template-columns:1fr!important; }
          .ch-nav-links { display:none!important; }
        }
      `}</style>

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

        {/* ── HERO ──────────────────────────────────────────────── */}
        <section style={{ position:'relative', minHeight:'calc(100vh - 64px)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'clamp(4rem,10vw,8rem) clamp(1.5rem,5vw,5rem)', overflow:'hidden', textAlign:'center' }}>
          {/* Dot grid */}
          <div style={{ position:'absolute', inset:0, pointerEvents:'none', backgroundImage:'radial-gradient(circle,rgba(0,242,254,.14) 1px,transparent 1px)', backgroundSize:'40px 40px', animation:'gridPulse 5s ease-in-out infinite' }} aria-hidden="true" />
          {/* Scan line */}
          <div style={{ position:'absolute', left:0, right:0, height:'1px', background:'linear-gradient(90deg,transparent,rgba(0,242,254,.55),transparent)', animation:'scanDown 7s linear infinite', pointerEvents:'none' }} aria-hidden="true" />
          {/* Bloom */}
          <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:'900px', height:'900px', background:'radial-gradient(ellipse,rgba(79,172,254,.06) 0%,transparent 65%)', pointerEvents:'none' }} aria-hidden="true" />

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
              <a href="#booking" style={{ padding:'1rem 2.75rem', background:'linear-gradient(90deg,#00F2FE,#4FACFE)', color:'#0D1117', fontFamily:"'Space Mono',monospace", fontSize:'.7rem', fontWeight:700, letterSpacing:'.18em', textTransform:'uppercase', textDecoration:'none', boxShadow:'0 0 32px rgba(0,242,254,.3)', transition:'opacity 200ms ease,box-shadow 200ms ease' }}>
                [ INITIALIZE RECOVERY ]
              </a>
              <a href={PHONE_HREF} style={{ padding:'1rem 2.75rem', background:'transparent', border:'1px solid rgba(0,242,254,.3)', color:'#00F2FE', fontFamily:"'Space Mono',monospace", fontSize:'.7rem', fontWeight:700, letterSpacing:'.18em', textTransform:'uppercase', textDecoration:'none', transition:'background 200ms ease' }}>
                {PHONE}
              </a>
            </div>
          </div>
        </section>

        {/* ── BENTO SERVICE GRID ────────────────────────────────── */}
        <section style={{ padding:'clamp(5rem,10vw,8rem) clamp(1.5rem,5vw,5rem)', borderTop:'1px solid rgba(255,255,255,.05)', position:'relative' }}>
          <div style={{ maxWidth:'1280px', margin:'0 auto' }}>
            <div style={{ marginBottom:'3.5rem' }}>
              <p style={{ fontFamily:"'Space Mono',monospace", fontSize:'.65rem', letterSpacing:'.3em', color:'#00F2FE', marginBottom:'.5rem' }}>// INTEGRATED PATHWAYS</p>
              <h2 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:'clamp(2rem,5vw,3.5rem)', fontWeight:900, textTransform:'uppercase', letterSpacing:'-.01em' }}>THE RESTORATIONS</h2>
            </div>

            <div className="ch-bento" style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:'1.5rem' }}>
              {PILLARS.map((p, i) => (
                <div key={p.label} className={`ch-card ch-animate-${i + 1}`} style={{ background:'rgba(255,255,255,.02)', border:'1px solid rgba(255,255,255,.1)', backdropFilter:'blur(24px)', padding:'2.5rem', minHeight:'340px', display:'flex', flexDirection:'column', justifyContent:'space-between', position:'relative', overflow:'hidden', cursor:'pointer' }}>
                  {/* Top neon line */}
                  <div style={{ position:'absolute', top:0, left:0, right:0, height:'1px', background:'linear-gradient(90deg,transparent,rgba(0,242,254,.45),transparent)' }} />
                  {/* Corner accents */}
                  <div className="ch-corner-tr" style={{ position:'absolute', top:0, right:0, width:'14px', height:'14px', borderTop:'2px solid transparent', borderRight:'2px solid transparent', transition:'border-color 300ms ease' }} />
                  <div className="ch-corner-bl" style={{ position:'absolute', bottom:0, left:0, width:'14px', height:'14px', borderBottom:'2px solid transparent', borderLeft:'2px solid transparent', transition:'border-color 300ms ease' }} />

                  <div>
                    <h3 className="ch-card-title" style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:'clamp(1.1rem,2.5vw,1.45rem)', fontWeight:900, textTransform:'uppercase', letterSpacing:'.04em', color:'#E8EDF4', transition:'color 300ms ease', marginBottom:'1.25rem' }}>
                      {p.label}
                    </h3>
                    <p style={{ fontSize:'.875rem', color:'#94A3B8', lineHeight:1.72, fontWeight:300 }}>
                      {p.body}
                    </p>
                  </div>

                  <div style={{ marginTop:'2rem', paddingTop:'1.25rem', borderTop:'1px solid rgba(255,255,255,.05)' }}>
                    <p className="ch-cta" style={{ fontFamily:"'Space Mono',monospace", fontSize:'.68rem', fontWeight:700, color:'#4FACFE', letterSpacing:'.15em', transition:'color 300ms ease', marginBottom:'.6rem' }}>
                      {p.cta} →
                    </p>
                    <p style={{ fontFamily:"'Space Mono',monospace", fontSize:'.58rem', color:'#2E3D4A', letterSpacing:'.08em', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>
                      {p.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LOCATION CARDS ────────────────────────────────────── */}
        <section style={{ borderTop:'1px solid rgba(255,255,255,.05)', padding:'clamp(5rem,10vw,8rem) clamp(1.5rem,5vw,5rem)' }}>
          <div style={{ maxWidth:'1280px', margin:'0 auto' }}>
            <div style={{ marginBottom:'3.5rem' }}>
              <p style={{ fontFamily:"'Space Mono',monospace", fontSize:'.65rem', letterSpacing:'.3em', color:'#00F2FE', marginBottom:'.5rem' }}>// FACILITY ACCESS POINTS</p>
              <h2 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:'clamp(2rem,5vw,3.5rem)', fontWeight:900, textTransform:'uppercase', letterSpacing:'-.01em' }}>TWO MODERN SPACES</h2>
            </div>

            <div className="ch-locs" style={{ display:'flex', gap:'1.5rem' }}>
              {LOCATIONS.map((loc, i) => (
                <div key={loc.mask} className={`ch-loc ch-animate-${i + 1}`} style={{ flex:1, minHeight:'420px', background:'rgba(255,255,255,.02)', border:'1px solid rgba(255,255,255,.1)', backdropFilter:'blur(24px)', display:'flex', alignItems:'center', justifyContent:'center', position:'relative', overflow:'hidden', cursor:'pointer', transition:'border-color 300ms ease,box-shadow 300ms ease' }}>
                  {/* Mask text watermark */}
                  <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center', pointerEvents:'none', userSelect:'none', opacity:.04 }}>
                    <span style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:'14vw', fontWeight:900, color:'#fff', letterSpacing:'-.05em', textTransform:'uppercase' }}>{loc.mask}</span>
                  </div>

                  <div style={{ position:'relative', zIndex:10, textAlign:'center', padding:'3rem 2rem', maxWidth:'380px' }}>
                    <p style={{ fontFamily:"'Space Mono',monospace", fontSize:'.6rem', letterSpacing:'.2em', color:'#00F2FE', marginBottom:'.75rem', textTransform:'uppercase' }}>// ACCESS POINT DISCOVERED</p>
                    <h3 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:'1.75rem', fontWeight:900, textTransform:'uppercase', letterSpacing:'.04em', color:'#E8EDF4', marginBottom:'.75rem' }}>{loc.title}</h3>
                    <p style={{ fontFamily:"'Space Mono',monospace", fontSize:'.75rem', color:'#7E9BB5', lineHeight:1.6, whiteSpace:'pre-line', marginBottom:'.75rem' }}>{loc.address}</p>
                    <p style={{ fontSize:'.82rem', color:'#4E6A7E', lineHeight:1.65, marginBottom:'1.75rem' }}>{loc.detail}</p>
                    <a href={loc.maps} target="_blank" rel="noopener noreferrer" className="ch-loc-btn" style={{ display:'inline-block', padding:'.75rem 1.75rem', border:'1px solid rgba(255,255,255,.12)', background:'rgba(255,255,255,.03)', color:'#E8EDF4', fontFamily:"'Space Mono',monospace", fontSize:'.65rem', letterSpacing:'.15em', textTransform:'uppercase', textDecoration:'none', transition:'background 200ms ease,color 200ms ease' }}>
                      [ ROUTE TO {loc.mask} ]
                    </a>
                    <p style={{ fontFamily:"'Space Mono',monospace", fontSize:'.58rem', color:'#2E3D4A', marginTop:'1.25rem', letterSpacing:'.08em' }}>{loc.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INSURANCE MARQUEE ─────────────────────────────────── */}
        <div style={{ borderTop:'1px solid rgba(255,255,255,.05)', borderBottom:'1px solid rgba(255,255,255,.05)', background:'rgba(0,0,0,.35)', padding:'1.25rem 0', overflow:'hidden' }}>
          <div style={{ display:'flex', animation:'marquee 30s linear infinite' }}>
            {[...INSURANCE,...INSURANCE,...INSURANCE,...INSURANCE].map((ins, idx) => (
              <span key={idx} style={{ fontFamily:"'Space Mono',monospace", fontSize:'.62rem', fontWeight:700, letterSpacing:'.2em', color:'#3a5a6a', textTransform:'uppercase', whiteSpace:'nowrap', padding:'0 2.5rem', flexShrink:0 }}>
                <span style={{ color:'#00F2FE', marginRight:'.5rem' }}>•</span>
                NETWORK COMPATIBLE: {ins}
              </span>
            ))}
          </div>
        </div>

        {/* ── BOOKING ───────────────────────────────────────────── */}
        <section id="booking" style={{ padding:'clamp(5rem,10vw,9rem) clamp(1.5rem,5vw,5rem)', borderTop:'1px solid rgba(255,255,255,.05)', position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:'700px', height:'700px', background:'radial-gradient(circle,rgba(79,172,254,.06) 0%,transparent 70%)', pointerEvents:'none' }} aria-hidden="true" />

          <div style={{ maxWidth:'1100px', margin:'0 auto', textAlign:'center', position:'relative', zIndex:10 }}>
            <p style={{ fontFamily:"'Space Mono',monospace", fontSize:'.65rem', letterSpacing:'.3em', color:'#00F2FE', marginBottom:'1rem' }}>// SELECT YOUR TREATMENT TRACK</p>
            <h2 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:'clamp(1.8rem,5vw,4rem)', fontWeight:900, textTransform:'uppercase', lineHeight:1, marginBottom:'3.5rem', letterSpacing:'-.01em' }}>
              LESS THAN 1% OF PATIENTS APPRECIATE COPING.{' '}
              <span style={{ background:'linear-gradient(90deg,#00F2FE,#4FACFE)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
                START REPAIRING.
              </span>
            </h2>

            <div style={{ maxWidth:'520px', margin:'0 auto', background:'rgba(255,255,255,.02)', border:'1px solid rgba(255,255,255,.1)', backdropFilter:'blur(32px)', padding:'clamp(2rem,5vw,3rem)', position:'relative', animation:'glowPulse 4s ease-in-out infinite' }}>
              <div style={{ position:'absolute', top:0, left:0, right:0, height:'1px', background:'linear-gradient(90deg,transparent,#00F2FE,transparent)' }} />
              <BookingForm />
            </div>
          </div>
        </section>

        {/* ── FOOTER ────────────────────────────────────────────── */}
        <footer style={{ background:'#090C10', borderTop:'1px solid rgba(0,242,254,.08)', padding:'clamp(3rem,6vw,5rem) clamp(1.5rem,5vw,5rem) 2rem' }}>
          <div style={{ maxWidth:'1280px', margin:'0 auto' }}>
            <div className="ch-ftgrid" style={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1fr', gap:'3rem', marginBottom:'3rem' }}>
              <div style={{ display:'flex', flexDirection:'column', gap:'.75rem' }}>
                <span style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:'1.2rem', fontWeight:900, textTransform:'uppercase', letterSpacing:'.08em', background:'linear-gradient(90deg,#00F2FE,#4FACFE)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text', marginBottom:'.1rem' }}>City Health AZ</span>
                <p style={{ fontSize:'.85rem', color:'#4E6A7E', lineHeight:1.65, maxWidth:'28ch' }}>Advanced pain management and physical medicine serving Mesa and the greater Phoenix metro.</p>
                <a href={PHONE_HREF} style={{ fontFamily:"'Space Mono',monospace", fontSize:'.95rem', fontWeight:700, color:'#00F2FE', textDecoration:'none', letterSpacing:'.05em' }}>{PHONE}</a>
                {[
                  { name:'Longmore Clinic', addr:'1303 S Longmore #8, Mesa AZ 85202', maps:'https://maps.app.goo.gl/Xpu1YzR7T1DPsNK1A' },
                  { name:'Power Road Clinic', addr:'1234 S Power Rd Suite 202, Mesa AZ 85206', maps:'https://maps.app.goo.gl/Tz165GJY2pBQNi996' },
                ].map(loc => (
                  <a key={loc.name} href={loc.maps} target="_blank" rel="noopener noreferrer" style={{ textDecoration:'none', marginTop:'.4rem' }}>
                    <p style={{ fontFamily:"'Space Mono',monospace", fontSize:'.62rem', fontWeight:700, color:'#E8EDF4', textTransform:'uppercase', letterSpacing:'.1em', marginBottom:'.1rem' }}>{loc.name}</p>
                    <p className="ch-fl-link" style={{ fontSize:'.78rem', color:'#4E6A7E', lineHeight:1.5, transition:'color 150ms ease' }}>{loc.addr}</p>
                  </a>
                ))}
              </div>

              {[
                { h:'Services', links:[['Pain Management','/services/pain-management/'],['Neuropathy','/services/neuropathy/'],['Physical Medicine','/services/physical-medicine/'],['Anti-Aging','/services/anti-aging/'],['Personal Injury','/services/personal-injury/']] },
                { h:'Service Areas', links:[['Mesa, AZ','/locations/mesa-az/'],['Chandler, AZ','/locations/chandler-az/'],['Gilbert, AZ','/locations/gilbert-az/'],['Scottsdale, AZ','/locations/scottsdale-az/'],['Tempe, AZ','/locations/tempe-az/']] },
                { h:'Company', links:[['About Us','/about/'],['Reviews','/reviews/'],['Blog','/blog/'],['Contact','/contact/'],['Privacy Policy','/privacy-policy/']] },
              ].map(col => (
                <nav key={col.h} style={{ display:'flex', flexDirection:'column', gap:'.6rem' }}>
                  <p style={{ fontFamily:"'Space Mono',monospace", fontSize:'.6rem', fontWeight:700, textTransform:'uppercase', letterSpacing:'.15em', color:'#E8EDF4', marginBottom:'.25rem' }}>{col.h}</p>
                  {col.links.map(([label, href]) => (
                    <a key={href} href={href} className="ch-fl-link" style={{ fontSize:'.85rem', color:'#4E6A7E', textDecoration:'none', lineHeight:1.5, transition:'color 150ms ease' }}>{label}</a>
                  ))}
                </nav>
              ))}
            </div>

            <div style={{ paddingTop:'1.5rem', borderTop:'1px solid rgba(255,255,255,.05)', display:'flex', flexWrap:'wrap', gap:'.75rem', justifyContent:'space-between', alignItems:'center' }}>
              <p style={{ fontSize:'.72rem', color:'rgba(126,155,181,.5)' }}>© {year} City Health Services · Mesa, AZ · All rights reserved.</p>
              <p style={{ fontSize:'.68rem', color:'rgba(126,155,181,.35)', maxWidth:'60ch', textAlign:'right', lineHeight:1.5 }}>
                Content on this site is for informational purposes only and does not constitute medical advice. Consult a qualified healthcare provider for diagnosis and treatment.
              </p>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}
