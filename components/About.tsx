'use client'
import Image from 'next/image'

const features = [
  { img:'/images/quality.jpg',    alt:'Premium Quality',    title:'Premium Quality Products',               desc:'Rigorously tested and graded to meet international food safety standards at every stage of production and packaging.' },
  { img:'/images/hygienic.jpg',   alt:'Hygienic Processing', title:'Hygienic Processing & Custom Packaging', desc:'Handled in certified facilities with customised packaging tailored to your market needs and destination regulations.' },
  { img:'/images/reliability.png',alt:'Reliable Logistics',  title:'Timely Dispatch & Logistics Support',    desc:'Reliable supply chain management ensuring on-time delivery worldwide with full documentation and logistics support.' },
]

export default function About() {
  return (
    <section id="about" style={{ background:'#fff', padding:'96px 0' }}>
      <div style={{ maxWidth:1360, margin:'0 auto', padding:'0 48px' }}>
        <div style={{ textAlign:'center', maxWidth:720, margin:'0 auto 56px' }}>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:12, marginBottom:14 }}>
            <div style={{ width:26, height:1, background:'#E8600A' }} />
            <span style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:10.5, fontWeight:700, letterSpacing:'3.5px', textTransform:'uppercase', color:'#E8600A' }}>Who We Are</span>
            <div style={{ width:26, height:1, background:'#E8600A' }} />
          </div>
          <h2 style={{ fontFamily:'var(--font-cormorant),serif', fontStyle:'italic', fontSize:'clamp(32px,3.6vw,50px)', fontWeight:700, color:'#050505', lineHeight:1.08, margin:'0 0 4px' }}>
            India&apos;s Trusted Partner for <em style={{ fontStyle:'normal', color:'#E8600A' }}>Premium</em> Agro Exports
          </h2>
          <div style={{ width:42, height:'2.5px', background:'linear-gradient(90deg,#E8600A,#F97316)', borderRadius:2, margin:'18px auto 20px' }} />
          <p style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:15, color:'#6A6A65', lineHeight:1.9, fontWeight:300, margin:0 }}>
            At Indosphare Export, we specialize in the export and domestic trading of high-quality agricultural and food products, with a strong focus on dehydrated onion, dehydrated garlic, spices, and other processed agro commodities. We work closely with certified manufacturers and suppliers to deliver reliable quality, competitive pricing, and timely service to clients across international and Indian markets.
          </p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:32, marginBottom:48 }}>
          {features.map(f => (
            <div key={f.title} style={{ background:'#fff', border:'1px solid #ECEAE5', borderRadius:20, padding:'36px 28px 32px', textAlign:'center', transition:'all 0.25s', position:'relative', overflow:'hidden', cursor:'default' }}
              onMouseEnter={e=>{ const el=e.currentTarget; el.style.borderColor='rgba(232,96,10,0.2)'; el.style.boxShadow='0 16px 48px rgba(0,0,0,0.08)'; el.style.transform='translateY(-4px)' }}
              onMouseLeave={e=>{ const el=e.currentTarget; el.style.borderColor='#ECEAE5'; el.style.boxShadow='none'; el.style.transform='none' }}>
              <div style={{ width:96, height:96, borderRadius:'50%', overflow:'hidden', margin:'0 auto 24px', border:'2.5px solid rgba(232,96,10,0.2)', background:'#FFF4ED', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 4px 18px rgba(232,96,10,0.12)', flexShrink:0 }}>
                <Image src={f.img} alt={f.alt} width={82} height={82} style={{ width:82, height:82, objectFit:'cover', borderRadius:'50%' }} />
              </div>
              <h3 style={{ fontFamily:'var(--font-montserrat),sans-serif', fontWeight:900, fontSize:15, color:'#050505', marginBottom:12, lineHeight:1.3 }}>{f.title}</h3>
              <p style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:13.5, color:'#6A6A65', lineHeight:1.75, fontWeight:300, margin:0 }}>{f.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign:'center' }}>
          <button onClick={()=>document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}
            style={{ background:'#E8600A', color:'#fff', padding:'14px 34px', borderRadius:7, fontFamily:'var(--font-inter),sans-serif', fontWeight:600, fontSize:14, display:'inline-flex', alignItems:'center', gap:9, border:'none', cursor:'pointer', boxShadow:'0 6px 22px rgba(232,96,10,0.3)', letterSpacing:'0.3px', transition:'all 0.2s' }}
            onMouseEnter={e=>{e.currentTarget.style.background='#B84A06';e.currentTarget.style.transform='translateY(-2px)'}}
            onMouseLeave={e=>{e.currentTarget.style.background='#E8600A';e.currentTarget.style.transform='none'}}>
            Partner With Us <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </section>
  )
}
