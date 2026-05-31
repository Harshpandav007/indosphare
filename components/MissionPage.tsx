'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import { useApp } from '@/lib/store'

const values = [
  { title:'Quality Without Compromise', desc:'Every product is tested against international food safety standards. We never ship a batch that does not meet our strict quality benchmarks.' },
  { title:'Transparency & Trust',        desc:'We communicate openly with every client — about pricing, specifications, timelines, and documentation. There are no hidden terms.' },
  { title:'Global Vision, Local Roots',  desc:'We are proud of our Indian heritage and the quality of produce our farmers deliver. Our goal is to carry that quality to every corner of the world.' },
  { title:'Client-First Approach',       desc:'Your requirements — from custom packaging to specific certifications — are at the centre of everything we plan and execute.' },
]

export default function MissionPage() {
  const { missionOpen, closeMission } = useApp()
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key==='Escape') closeMission() }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [closeMission])

  return (
    <div style={{ position:'fixed', inset:0, background:'#fff', zIndex:450, overflowY:'auto', transition:'opacity 0.35s', opacity: missionOpen ? 1 : 0, pointerEvents: missionOpen ? 'all' : 'none' }}>
      {/* Navbar */}
      <nav style={{ background:'rgba(4,4,4,0.97)', backdropFilter:'blur(24px)', height:72, display:'flex', alignItems:'center', padding:'0 48px', justifyContent:'space-between', position:'sticky', top:0, zIndex:10, borderBottom:'1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ display:'flex', alignItems:'center', gap:14 }}>
          <div style={{ width:50, height:50, borderRadius:'50%', border:'2px solid rgba(232,96,10,0.4)', background:'rgba(255,255,255,0.05)', display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden' }}>
            <Image src="/images/logo.jpg" alt="Indosphare Export" width={42} height={42} style={{ borderRadius:'50%', objectFit:'contain' }} />
          </div>
          <div>
            <div style={{ fontFamily:'var(--font-montserrat),sans-serif', fontSize:16, fontWeight:900, color:'#fff', letterSpacing:'1.5px', textTransform:'uppercase', lineHeight:1 }}>Indosphare</div>
            <div style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:9, fontWeight:600, color:'#F97316', letterSpacing:'4px', textTransform:'uppercase', marginTop:3 }}>Export</div>
          </div>
        </div>
        <button onClick={closeMission}
          style={{ display:'flex', alignItems:'center', gap:10, color:'rgba(255,255,255,0.65)', fontFamily:'var(--font-inter),sans-serif', fontSize:13.5, fontWeight:500, cursor:'pointer', background:'transparent', border:'none', transition:'color 0.2s' }}
          onMouseEnter={e=>(e.currentTarget.style.color='#F97316')}
          onMouseLeave={e=>(e.currentTarget.style.color='rgba(255,255,255,0.65)')}>
          ← Back to Website
        </button>
      </nav>

      {/* Hero image */}
      <div style={{ maxWidth:1100, margin:'56px auto 0', padding:'0 48px' }}>
        <div style={{ borderRadius:20, overflow:'hidden', border:'1px solid rgba(0,0,0,0.07)', boxShadow:'0 8px 40px rgba(0,0,0,0.08)', transition:'box-shadow 0.4s', cursor:'default' }}
          onMouseEnter={e=>{ (e.currentTarget as HTMLDivElement).style.boxShadow='0 0 0 3px rgba(59,130,246,0.55),0 0 32px rgba(59,130,246,0.22),0 0 70px rgba(59,130,246,0.1)' }}
          onMouseLeave={e=>{ (e.currentTarget as HTMLDivElement).style.boxShadow='0 8px 40px rgba(0,0,0,0.08)' }}>
          <Image src="/images/our-mission.avif" alt="Our Mission" width={1100} height={460} style={{ width:'100%', height:460, objectFit:'cover', display:'block' }} />
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth:860, margin:'56px auto 80px', padding:'0 48px' }}>
        <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:16 }}>
          <div style={{ width:28, height:1, background:'#E8600A' }} />
          <span style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:11, fontWeight:700, letterSpacing:'3.5px', textTransform:'uppercase', color:'#E8600A' }}>Our Mission</span>
        </div>
        <h1 style={{ fontFamily:'var(--font-montserrat),sans-serif', fontWeight:900, fontSize:'clamp(34px,4vw,50px)', color:'#050505', lineHeight:1.1, letterSpacing:-1, margin:'0 0 8px' }}>
          Delivering <span style={{ color:'#E8600A' }}>Premium Quality</span>
        </h1>
        <div style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:'clamp(16px,1.8vw,20px)', fontWeight:500, color:'#3A3A35', marginBottom:28 }}>Building Bridges Between India and the World</div>
        <div style={{ width:44, height:'2.5px', background:'linear-gradient(90deg,#E8600A,#F97316)', borderRadius:2, marginBottom:36 }} />

        <blockquote style={{ borderLeft:'3px solid #E8600A', paddingLeft:24, marginBottom:48, fontStyle:'italic', fontSize:16.5, color:'#2A2A25', lineHeight:1.85, fontWeight:500, fontFamily:'var(--font-inter),sans-serif', margin:'0 0 48px' }}>
          &ldquo;Our mission is to be India&rsquo;s most trusted agro export partner — delivering premium quality dehydrated products with complete transparency, competitive pricing, and a commitment to excellence that our international clients can always rely on.&rdquo;
        </blockquote>

        {[
          { heading:'Who We Are', paras:['Indosphare Export was founded with a clear and focused vision: to connect India\'s finest agricultural produce with buyers, distributors, wholesalers, and food manufacturers across the world. Rooted in Gujarat — one of India\'s leading agro-processing regions — we have established ourselves as a reliable and professional export partner for dehydrated onions, garlic, and processed agro commodities.','We work directly with certified manufacturers and quality-verified suppliers to ensure every product that leaves our facility meets the highest standards of hygiene, consistency, and safety required by international food import regulations.'] },
          { heading:'What Drives Us', paras:['At Indosphare Export, we believe that quality is not just a standard — it is a responsibility. Every batch of product we supply carries our commitment to the buyer, the end consumer, and to the global food industry.','We serve importers, wholesalers, food manufacturers, and HoReCa businesses across Southeast Asia, the Middle East, Europe, and beyond — providing consistent product quality, export-ready documentation, and complete logistics support from order to delivery.'] },
        ].map(section=>(
          <div key={section.heading}>
            <h2 style={{ fontFamily:'var(--font-montserrat),sans-serif', fontWeight:900, fontSize:15, color:'#050505', letterSpacing:'0.5px', textTransform:'uppercase', margin:'38px 0 14px' }}>{section.heading}</h2>
            {section.paras.map((p,i)=><p key={i} style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:15.5, color:'#4A4A45', lineHeight:1.92, fontWeight:300, marginBottom:20 }}>{p}</p>)}
          </div>
        ))}

        <h2 style={{ fontFamily:'var(--font-montserrat),sans-serif', fontWeight:900, fontSize:15, color:'#050505', letterSpacing:'0.5px', textTransform:'uppercase', margin:'38px 0 14px' }}>Our Core Values</h2>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:20, margin:'8px 0 32px' }}>
          {values.map(v=>(
            <div key={v.title} style={{ background:'#F5F3EF', border:'1px solid #ECEAE5', borderRadius:16, padding:'28px 24px', transition:'all 0.25s', position:'relative', overflow:'hidden', cursor:'default' }}
              onMouseEnter={e=>{ const el=e.currentTarget; el.style.borderColor='rgba(232,96,10,0.2)'; el.style.boxShadow='0 8px 32px rgba(0,0,0,0.07)'; el.style.transform='translateY(-2px)' }}
              onMouseLeave={e=>{ const el=e.currentTarget; el.style.borderColor='#ECEAE5'; el.style.boxShadow='none'; el.style.transform='none' }}>
              <h3 style={{ fontFamily:'var(--font-montserrat),sans-serif', fontWeight:900, fontSize:14, color:'#050505', marginBottom:8 }}>{v.title}</h3>
              <p style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:13.5, color:'#5A5A55', lineHeight:1.72, fontWeight:300, margin:0 }}>{v.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={{ fontFamily:'var(--font-montserrat),sans-serif', fontWeight:900, fontSize:15, color:'#050505', letterSpacing:'0.5px', textTransform:'uppercase', margin:'38px 0 14px' }}>Our Commitment to You</h2>
        <p style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:15.5, color:'#4A4A45', lineHeight:1.92, fontWeight:300, marginBottom:20 }}>Whether you are placing your first trial order or managing a recurring bulk supply contract, Indosphare Export ensures that you receive the same level of dedication, responsiveness, and product quality every single time. We are not just a supplier — we are a long-term business partner committed to your growth.</p>
        <p style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:15.5, color:'#4A4A45', lineHeight:1.92, fontWeight:300, marginBottom:40 }}>We are FSSAI, APEDA, IEC, and GST certified — ensuring full regulatory compliance for smooth customs clearance in your destination country. Our team is available Monday through Sunday to answer your queries, provide documentation, and coordinate logistics.</p>

        <div style={{ background:'#050505', borderRadius:18, padding:'40px 44px', display:'flex', justifyContent:'space-between', alignItems:'center', gap:24, flexWrap:'wrap' }}>
          <div>
            <h3 style={{ fontFamily:'var(--font-montserrat),sans-serif', fontWeight:900, fontSize:24, color:'#fff', marginBottom:6 }}>Ready to Source from India?</h3>
            <p style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:14, color:'rgba(255,255,255,0.45)', margin:0 }}>Reach out to us for pricing, samples, and export documentation.</p>
          </div>
          <button onClick={()=>{ closeMission(); setTimeout(()=>document.getElementById('contact')?.scrollIntoView({behavior:'smooth'}),400) }}
            style={{ background:'#E8600A', color:'#fff', padding:'13px 30px', borderRadius:8, fontFamily:'var(--font-inter),sans-serif', fontWeight:600, fontSize:14, display:'inline-flex', alignItems:'center', gap:8, border:'none', cursor:'pointer', flexShrink:0, transition:'background 0.2s' }}
            onMouseEnter={e=>(e.currentTarget.style.background='#B84A06')}
            onMouseLeave={e=>(e.currentTarget.style.background='#E8600A')}>
            Send an Inquiry →
          </button>
        </div>
      </div>
    </div>
  )
}
