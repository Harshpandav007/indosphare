'use client'
import Image from 'next/image'
const certs = [
  { src:'/images/certs/Fssai.png', name:'FSSAI', desc:'Food Safety & Standards Authority of India — ensuring products meet national food safety norms.' },
  { src:'/images/certs/APEDA.png', name:'APEDA', desc:'Agricultural & Processed Food Products Export Development Authority — registered agro exporter.' },
  { src:'/images/certs/IEC.png',   name:'IEC',   desc:'Import Export Code by DGFT — official authorization for international trade operations from India.' },
  { src:'/images/certs/GST.webp',  name:'GST',   desc:'Goods & Services Tax registration — fully compliant with Indian taxation and trade regulations.' },
]
const buyerPoints = [
  'Seamless customs clearance in your destination country',
  'Products meet international food safety and hygiene standards',
  'Legally authorized for international export operations from India',
  'Full documentation available for all regulatory bodies',
  'Reduced risk and faster trade approvals for your business',
]
export default function Certifications() {
  return (
    <section id="certs" style={{ background:'#141414', padding:'96px 0' }}>
      <div style={{ maxWidth:1360, margin:'0 auto', padding:'0 48px' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:68, alignItems:'center', marginBottom:56 }}>
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:14 }}>
              <div style={{ width:26, height:1, background:'#E8600A' }} />
              <span style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:10.5, fontWeight:700, letterSpacing:'3.5px', textTransform:'uppercase', color:'#E8600A' }}>Our Credentials</span>
            </div>
            <h2 style={{ fontFamily:'var(--font-cormorant),serif', fontStyle:'italic', fontSize:'clamp(32px,3.6vw,50px)', fontWeight:700, color:'#fff', lineHeight:1.08, margin:'0 0 4px' }}>
              Government Certified.<br/><em style={{ fontStyle:'normal', color:'#E8600A' }}>Globally</em> Trusted.
            </h2>
            <div style={{ width:42, height:'2.5px', background:'linear-gradient(90deg,#E8600A,#F97316)', borderRadius:2, margin:'18px 0' }} />
            <p style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:15, color:'rgba(255,255,255,0.5)', lineHeight:1.9, fontWeight:300, margin:0 }}>Our certifications reflect an unwavering commitment to food safety, quality, and compliant international trade. Every certificate is maintained, renewed, and proudly displayed.</p>
          </div>
          <div style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:20, padding:34 }}>
            <div style={{ fontFamily:'var(--font-oswald),sans-serif', fontSize:12.5, fontWeight:600, letterSpacing:'2px', textTransform:'uppercase', color:'#F97316', marginBottom:18 }}>What This Means for You as a Buyer</div>
            <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
              {buyerPoints.map(p=>(
                <div key={p} style={{ display:'flex', alignItems:'flex-start', gap:11 }}>
                  <div style={{ width:5, height:5, borderRadius:'50%', background:'#E8600A', flexShrink:0, marginTop:8 }} />
                  <p style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:14, color:'rgba(255,255,255,0.48)', lineHeight:1.65, margin:0 }}>{p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:20 }}>
          {certs.map(cert=>(
            <div key={cert.name} style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:20, padding:'32px 16px 28px', textAlign:'center', position:'relative', overflow:'hidden', transition:'all 0.35s', cursor:'default' }}
              onMouseEnter={e=>{ const el=e.currentTarget; el.style.borderColor='rgba(232,96,10,0.3)'; el.style.transform='translateY(-6px)'; el.style.boxShadow='0 20px 50px rgba(0,0,0,0.5)' }}
              onMouseLeave={e=>{ const el=e.currentTarget; el.style.borderColor='rgba(255,255,255,0.08)'; el.style.transform='none'; el.style.boxShadow='none' }}>
              <div style={{ width:82, height:82, borderRadius:'50%', background:'rgba(255,255,255,0.95)', border:'2px solid rgba(232,96,10,0.18)', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 18px', overflow:'hidden', transition:'all 0.3s' }}>
                <Image src={cert.src} alt={cert.name} width={64} height={64} style={{ width:64, height:64, objectFit:'contain' }} />
              </div>
              <div style={{ fontFamily:'var(--font-oswald),sans-serif', fontSize:20, fontWeight:700, color:'#fff', marginBottom:9, letterSpacing:'1.2px' }}>{cert.name}</div>
              <p style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:12, color:'rgba(255,255,255,0.38)', lineHeight:1.65, margin:'0 0 12px' }}>{cert.desc}</p>
              <div style={{ display:'inline-flex', alignItems:'center', gap:5, background:'rgba(34,197,94,0.12)', border:'1px solid rgba(34,197,94,0.2)', color:'#4ade80', fontFamily:'var(--font-inter),sans-serif', fontSize:9.5, fontWeight:700, padding:'4px 11px', borderRadius:20, letterSpacing:'1.5px', textTransform:'uppercase' }}>✓ Verified</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
