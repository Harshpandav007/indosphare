'use client'
import Image from 'next/image'

function scrollTo(id: string) { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }

export default function Hero() {
  return (
    <section id="top" style={{ background:'#080808', minHeight:'100vh', display:'flex', alignItems:'center', position:'relative', overflow:'hidden' }}>
      {/* BG */}
      <div style={{ position:'absolute', inset:0, pointerEvents:'none' }}>
        <div style={{ position:'absolute', width:'min(720px,100vw)', height:'min(720px,100vw)', borderRadius:'50%', top:-180, right:-80, background:'radial-gradient(circle,rgba(232,96,10,0.13) 0%,transparent 70%)' }} />
        <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at center,transparent 35%,rgba(0,0,0,0.58) 100%)' }} />
      </div>

      <div style={{ maxWidth:1360, margin:'0 auto', padding:'clamp(60px,10vw,80px) clamp(16px,4vw,48px)', width:'100%', position:'relative', zIndex:2 }}>

        {/* RESPONSIVE GRID — 2 col desktop, 1 col mobile */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,460px),1fr))', gap:'clamp(32px,5vw,56px)', alignItems:'center' }}>

          {/* LEFT TEXT */}
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:13, marginBottom:24 }}>
              <div style={{ width:38, height:1, background:'#E8600A', flexShrink:0 }} />
              <span style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:'clamp(10px,2.5vw,11px)', fontWeight:600, letterSpacing:'4px', textTransform:'uppercase', color:'#F97316' }}>Premium Agro Export from India</span>
            </div>
            <h1 style={{ fontFamily:'var(--font-cormorant),serif', fontStyle:'italic', fontSize:'clamp(40px,8vw,82px)', fontWeight:700, color:'#fff', lineHeight:1.02, margin:'0 0 6px' }}>
              Crafting <em style={{ fontStyle:'normal', color:'#F97316' }}>Quality,</em>
            </h1>
            <div style={{ fontFamily:'var(--font-montserrat),sans-serif', fontWeight:900, fontSize:'clamp(22px,5vw,44px)', color:'#fff', lineHeight:1.05, letterSpacing:-1, marginBottom:20 }}>
              Exporting Flavours<br/>to the World.
            </div>
            <p style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:'clamp(14px,3.5vw,15px)', color:'rgba(255,255,255,0.52)', lineHeight:1.9, maxWidth:480, marginBottom:36, fontWeight:300 }}>
              Indosphare Export delivers premium dehydrated onions, garlic, spices, and processed agro commodities — serving importers, wholesalers, and distributors across international markets with reliability and precision.
            </p>
            <div style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
              <button onClick={()=>scrollTo('products')} style={{ background:'#E8600A', color:'#fff', padding:'clamp(11px,3vw,14px) clamp(20px,4vw,34px)', borderRadius:7, fontFamily:'var(--font-inter),sans-serif', fontWeight:600, fontSize:'clamp(13px,3.5vw,14px)', display:'inline-flex', alignItems:'center', gap:8, border:'none', cursor:'pointer', boxShadow:'0 6px 22px rgba(232,96,10,0.3)', transition:'all 0.2s' }}
                onMouseEnter={e=>{e.currentTarget.style.background='#B84A06';e.currentTarget.style.transform='translateY(-2px)'}}
                onMouseLeave={e=>{e.currentTarget.style.background='#E8600A';e.currentTarget.style.transform='none'}}>
                Explore Products
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
              <button onClick={()=>scrollTo('contact')} style={{ border:'1.5px solid rgba(255,255,255,0.18)', color:'#fff', padding:'clamp(11px,3vw,14px) clamp(20px,4vw,34px)', borderRadius:7, fontFamily:'var(--font-inter),sans-serif', fontWeight:500, fontSize:'clamp(13px,3.5vw,14px)', background:'transparent', cursor:'pointer', transition:'all 0.2s' }}
                onMouseEnter={e=>{e.currentTarget.style.borderColor='#E8600A';e.currentTarget.style.color='#E8600A'}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(255,255,255,0.18)';e.currentTarget.style.color='#fff'}}>
                Request a Quote
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE — hidden on small mobile, shown on tablet+ */}
          <div style={{ display:'flex', alignItems:'center', justifyContent:'center' }}>
            <div style={{ position:'relative', width:'100%', maxWidth:560 }}>
              <div style={{ borderRadius:'clamp(14px,3vw,22px)', overflow:'hidden', border:'1.5px solid rgba(255,255,255,0.07)', boxShadow:'0 28px 72px rgba(0,0,0,0.7)', position:'relative', transition:'box-shadow 0.45s ease,border-color 0.45s ease', cursor:'pointer' }}
                onMouseEnter={e=>{const el=e.currentTarget;el.style.boxShadow='0 28px 72px rgba(0,0,0,0.65),0 0 0 2.5px rgba(232,96,10,0.65),0 0 36px rgba(232,96,10,0.28)';el.style.borderColor='rgba(232,96,10,0.55)'}}
                onMouseLeave={e=>{const el=e.currentTarget;el.style.boxShadow='0 28px 72px rgba(0,0,0,0.7)';el.style.borderColor='rgba(255,255,255,0.07)'}}>
                <div style={{ position:'absolute', inset:0, background:'linear-gradient(180deg,transparent 52%,rgba(0,0,0,0.7) 100%)', zIndex:1, pointerEvents:'none' }} />
                <div style={{ position:'absolute', top:14, right:14, zIndex:20, background:'#E8600A', color:'#fff', fontFamily:'var(--font-inter),sans-serif', fontSize:10, fontWeight:700, padding:'6px 13px', borderRadius:22, letterSpacing:'0.5px' }}>
                  FSSAI & APEDA Certified
                </div>
                <Image src="/images/hero.png" alt="Premium Agro Export from India" width={560} height={430}
                  style={{ width:'100%', height:'clamp(260px,40vw,430px)', objectFit:'cover', display:'block', borderRadius:'clamp(14px,3vw,22px)' }} priority />
                <div style={{ position:'absolute', bottom:0, left:0, right:0, padding:'18px 20px 16px', zIndex:2 }}>
                  <div style={{ fontFamily:'var(--font-cormorant),serif', fontStyle:'italic', fontSize:'clamp(16px,4vw,20px)', fontWeight:700, color:'#fff', marginBottom:3 }}>Global Agro Export</div>
                  <div style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:'clamp(9px,2.5vw,10.5px)', color:'rgba(255,255,255,0.5)', letterSpacing:'2px', textTransform:'uppercase' }}>Premium Dehydrated Products from India</div>
                  <div style={{ display:'flex', gap:6, flexWrap:'wrap', marginTop:8 }}>
                    {['Dehydrated Onion','Garlic','Spices'].map(t=>(
                      <span key={t} style={{ fontSize:'clamp(10px,2.5vw,11px)', fontWeight:500, padding:'4px 10px', border:'1px solid rgba(255,255,255,0.18)', borderRadius:16, color:'rgba(255,255,255,0.68)', fontFamily:'var(--font-inter),sans-serif' }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          #hero-img-col { display: none !important; }
        }
      `}</style>
    </section>
  )
}