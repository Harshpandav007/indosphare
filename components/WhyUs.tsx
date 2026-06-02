'use client'

const cards = [
  { icon:'🏆', title:'Uncompromising Quality',     body:'Every batch is rigorously tested against international food safety standards before dispatch — no exceptions.' },
  { icon:'💰', title:'Competitive Export Pricing', body:'Direct sourcing from certified farmers and manufacturers ensures the best market value without quality trade-offs.' },
  { icon:'🚢', title:'Reliable Global Logistics',  body:'Timely dispatch, complete documentation, and global shipping support for smooth customs clearance worldwide.' },
  { icon:'📦', title:'Custom Packaging Solutions', body:'Private label and customized packaging tailored to your brand requirements and destination market regulations.' },
  { icon:'🤝', title:'Long-Term Partnerships',     body:'Serving importers, wholesalers, distributors, food manufacturers and HoReCa businesses with full commitment.' },
  { icon:'✅', title:'Certified & Compliant',      body:'FSSAI, APEDA, IEC and GST certified — ensuring seamless compliance with international trade regulations.' },
]

export default function WhyUs() {
  return (
    <section style={{ background:'#080808', padding:'clamp(60px,10vw,96px) 0' }}>
      <div style={{ maxWidth:1360, margin:'0 auto', padding:'0 clamp(16px,4vw,48px)' }}>

        {/* Header */}
        <div style={{ textAlign:'center', maxWidth:600, margin:'0 auto clamp(40px,7vw,60px)' }}>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:12, marginBottom:14 }}>
            <div style={{ width:26, height:1, background:'#E8600A' }} />
            <span style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:10.5, fontWeight:700, letterSpacing:'3.5px', textTransform:'uppercase', color:'#E8600A' }}>Why Choose Us</span>
            <div style={{ width:26, height:1, background:'#E8600A' }} />
          </div>
          <h2 style={{ fontFamily:'var(--font-montserrat),sans-serif', fontWeight:900, fontSize:'clamp(22px,5vw,40px)', color:'#fff', lineHeight:1.1, letterSpacing:-1, margin:'0 0 12px' }}>
            Why Global Buyers Trust Indosphare
          </h2>
          <div style={{ width:42, height:'2.5px', background:'linear-gradient(90deg,#E8600A,#F97316)', borderRadius:2, margin:'0 auto 18px' }} />
          <p style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:'clamp(14px,3.5vw,15px)', color:'rgba(255,255,255,0.5)', lineHeight:1.9, fontWeight:300, margin:0 }}>
            We go beyond supply — we build long-term partnerships grounded in quality, reliability, and complete transparency.
          </p>
        </div>

        {/* Cards — 3 cols desktop, 2 cols tablet, 1 col mobile */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(min(100%,280px),1fr))', gap:'clamp(12px,2.5vw,18px)' }}>
          {cards.map(c => (
            <div key={c.title}
              style={{ background:'rgba(255,255,255,0.025)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:20, padding:'clamp(24px,4vw,36px) clamp(20px,3vw,28px)', position:'relative', overflow:'hidden', transition:'all 0.3s', cursor:'default' }}
              onMouseEnter={e=>{ const el=e.currentTarget; el.style.borderColor='rgba(232,96,10,0.2)'; el.style.background='rgba(232,96,10,0.04)'; el.style.transform='translateY(-4px)' }}
              onMouseLeave={e=>{ const el=e.currentTarget; el.style.borderColor='rgba(255,255,255,0.07)'; el.style.background='rgba(255,255,255,0.025)'; el.style.transform='none' }}>
              <div style={{ width:'clamp(44px,8vw,52px)', height:'clamp(44px,8vw,52px)', borderRadius:14, background:'rgba(232,96,10,0.1)', border:'1px solid rgba(232,96,10,0.18)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'clamp(18px,4vw,22px)', marginBottom:'clamp(16px,3vw,24px)' }}>{c.icon}</div>
              <h3 style={{ fontFamily:'var(--font-oswald),sans-serif', fontSize:'clamp(15px,3.5vw,17px)', fontWeight:600, color:'#fff', marginBottom:10, letterSpacing:'0.4px' }}>{c.title}</h3>
              <p style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:'clamp(13px,3vw,14px)', color:'rgba(255,255,255,0.42)', lineHeight:1.8, fontWeight:300, margin:0 }}>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}