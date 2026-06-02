'use client'

const steps = [
  { n:'01', title:'Sourcing',      body:'Direct procurement from certified farmers & verified suppliers' },
  { n:'02', title:'Processing',    body:'Hygienic dehydration in certified, controlled facilities' },
  { n:'03', title:'Quality Check', body:'Multi-stage lab testing against international safety standards' },
  { n:'04', title:'Packaging',     body:'Custom packaging with proper labelling & documentation' },
  { n:'05', title:'Dispatch',      body:'Timely shipment with full logistics & customs support' },
]

export default function Process() {
  return (
    <section id="process" style={{ background:'#0E0E0E', padding:'clamp(60px,10vw,96px) 0' }}>
      <div style={{ maxWidth:1360, margin:'0 auto', padding:'0 clamp(16px,4vw,48px)' }}>

        {/* Header */}
        <div style={{ textAlign:'center', maxWidth:580, margin:'0 auto clamp(40px,7vw,64px)' }}>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:12, marginBottom:14 }}>
            <div style={{ width:26, height:1, background:'#E8600A' }} />
            <span style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:10.5, fontWeight:700, letterSpacing:'3.5px', textTransform:'uppercase', color:'#E8600A' }}>Our Process</span>
            <div style={{ width:26, height:1, background:'#E8600A' }} />
          </div>
          <h2 style={{ fontFamily:'var(--font-cormorant),serif', fontStyle:'italic', fontSize:'clamp(28px,6vw,50px)', fontWeight:700, color:'#fff', lineHeight:1.08, margin:'0 0 12px' }}>
            From Farm to <em style={{ fontStyle:'normal', color:'#E8600A' }}>Your Facility</em>
          </h2>
          <div style={{ width:42, height:'2.5px', background:'linear-gradient(90deg,#E8600A,#F97316)', borderRadius:2, margin:'0 auto 18px' }} />
          <p style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:'clamp(14px,3.5vw,15px)', color:'rgba(255,255,255,0.5)', lineHeight:1.9, fontWeight:300, margin:0 }}>
            Every step is controlled, monitored, and documented to ensure you receive nothing less than the highest quality.
          </p>
        </div>

        {/* Steps — horizontal on desktop, vertical on mobile */}
        <div className="process-track" style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', position:'relative' }}>
          {/* Connector line — only visible on desktop */}
          <div className="process-line" style={{ position:'absolute', top:32, left:'10%', right:'10%', height:1, background:'linear-gradient(90deg,rgba(232,96,10,0.2),rgba(232,96,10,0.55),rgba(232,96,10,0.2))', zIndex:0 }} />

          {steps.map(s => (
            <div key={s.n} style={{ textAlign:'center', position:'relative', zIndex:1, padding:'0 clamp(4px,1.5vw,10px)' }}>
              <div style={{ width:'clamp(50px,10vw,64px)', height:'clamp(50px,10vw,64px)', borderRadius:'50%', background:'#0E0E0E', border:'2px solid #E8600A', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto clamp(14px,3vw,20px)', boxShadow:'0 0 0 7px rgba(232,96,10,0.07)' }}>
                <span style={{ fontFamily:'var(--font-oswald),sans-serif', fontSize:'clamp(16px,3.5vw,24px)', fontWeight:700, color:'#E8600A', letterSpacing:'1px' }}>{s.n}</span>
              </div>
              <div style={{ fontFamily:'var(--font-oswald),sans-serif', fontSize:'clamp(11px,2.5vw,13px)', fontWeight:600, color:'#fff', marginBottom:6, letterSpacing:'0.5px' }}>{s.title}</div>
              <p style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:'clamp(10px,2.5vw,12px)', color:'rgba(255,255,255,0.38)', lineHeight:1.65, margin:0 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* Mobile: stack process steps vertically */
        @media (max-width: 640px) {
          .process-track {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }
          .process-line {
            display: none !important;
          }
          .process-track > div {
            display: flex !important;
            align-items: flex-start !important;
            text-align: left !important;
            padding: 0 0 28px 0 !important;
            gap: 16px !important;
          }
          .process-track > div > div:first-child {
            flex-shrink: 0 !important;
            margin: 0 !important;
          }
        }
      `}</style>
    </section>
  )
}