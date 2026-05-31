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
    <section id="process" style={{ background:'#0E0E0E', padding:'96px 0' }}>
      <div style={{ maxWidth:1360, margin:'0 auto', padding:'0 48px' }}>
        <div style={{ textAlign:'center', maxWidth:580, margin:'0 auto 64px' }}>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:12, marginBottom:14 }}>
            <div style={{ width:26, height:1, background:'#E8600A' }} /><span style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:10.5, fontWeight:700, letterSpacing:'3.5px', textTransform:'uppercase', color:'#E8600A' }}>Our Process</span><div style={{ width:26, height:1, background:'#E8600A' }} />
          </div>
          <h2 style={{ fontFamily:'var(--font-cormorant),serif', fontStyle:'italic', fontSize:'clamp(32px,3.6vw,50px)', fontWeight:700, color:'#fff', lineHeight:1.08, margin:'0 0 12px' }}>
            From Farm to <em style={{ fontStyle:'normal', color:'#E8600A' }}>Your Facility</em>
          </h2>
          <div style={{ width:42, height:'2.5px', background:'linear-gradient(90deg,#E8600A,#F97316)', borderRadius:2, margin:'0 auto 18px' }} />
          <p style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:15, color:'rgba(255,255,255,0.5)', lineHeight:1.9, fontWeight:300, margin:0 }}>Every step is controlled, monitored, and documented to ensure you receive nothing less than the highest quality.</p>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', position:'relative' }}>
          <div style={{ position:'absolute', top:32, left:'10%', right:'10%', height:1, background:'linear-gradient(90deg,rgba(232,96,10,0.2),rgba(232,96,10,0.55),rgba(232,96,10,0.2))', zIndex:0 }} />
          {steps.map(s=>(
            <div key={s.n} style={{ textAlign:'center', position:'relative', zIndex:1, padding:'0 10px' }}>
              <div style={{ width:64, height:64, borderRadius:'50%', background:'#0E0E0E', border:'2px solid #E8600A', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 20px', boxShadow:'0 0 0 7px rgba(232,96,10,0.07)' }}>
                <span style={{ fontFamily:'var(--font-oswald),sans-serif', fontSize:24, fontWeight:700, color:'#E8600A', letterSpacing:'1px' }}>{s.n}</span>
              </div>
              <div style={{ fontFamily:'var(--font-oswald),sans-serif', fontSize:13, fontWeight:600, color:'#fff', marginBottom:8, letterSpacing:'0.5px' }}>{s.title}</div>
              <p style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:12, color:'rgba(255,255,255,0.38)', lineHeight:1.65, margin:0 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
