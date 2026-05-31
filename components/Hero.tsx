'use client'
import Image from 'next/image'

function scrollTo(id: string) { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }

export default function Hero() {
  return (
    <section id="top" style={{ background:'#080808', minHeight:'100vh', display:'flex', alignItems:'center', position:'relative', overflow:'hidden' }}>
      {/* BG effects */}
      <div style={{ position:'absolute', inset:0, pointerEvents:'none' }}>
        <div style={{ position:'absolute', width:720, height:720, borderRadius:'50%', top:-180, right:-80, background:'radial-gradient(circle,rgba(232,96,10,0.13) 0%,transparent 70%)' }} />
        <div style={{ position:'absolute', width:460, height:460, borderRadius:'50%', bottom:-130, left:-60, background:'radial-gradient(circle,rgba(249,115,22,0.07) 0%,transparent 70%)' }} />
        <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at center,transparent 35%,rgba(0,0,0,0.58) 100%)' }} />
      </div>

      <div style={{ maxWidth:1360, margin:'0 auto', padding:'80px 48px', width:'100%', display:'grid', gridTemplateColumns:'1fr 1fr', gap:56, alignItems:'center', position:'relative', zIndex:2 }}>
        {/* LEFT */}
        <div>
          <div style={{ display:'flex', alignItems:'center', gap:13, marginBottom:30 }}>
            <div style={{ width:38, height:1, background:'#E8600A' }} />
            <span style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:11, fontWeight:600, letterSpacing:'4px', textTransform:'uppercase', color:'#F97316' }}>Premium Agro Export from India</span>
          </div>
          <h1 style={{ fontFamily:'var(--font-cormorant),serif', fontStyle:'italic', fontSize:'clamp(54px,5.8vw,82px)', fontWeight:700, color:'#fff', lineHeight:1.02, marginBottom:6, margin:'0 0 6px' }}>
            Crafting <em style={{ fontStyle:'normal', color:'#F97316' }}>Quality,</em>
          </h1>
          <div style={{ fontFamily:'var(--font-montserrat),sans-serif', fontWeight:900, fontSize:'clamp(28px,3vw,44px)', color:'#fff', lineHeight:1.05, letterSpacing:-1, marginBottom:26 }}>
            Exporting Flavours<br/>to the World.
          </div>
          <p style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:15, color:'rgba(255,255,255,0.52)', lineHeight:1.92, maxWidth:480, marginBottom:42, fontWeight:300 }}>
            Indosphare Export delivers premium dehydrated onions, garlic, spices, and processed agro commodities — serving importers, wholesalers, and distributors across international markets with reliability and precision.
          </p>
          <div style={{ display:'flex', gap:14, flexWrap:'wrap' }}>
            <button onClick={()=>scrollTo('products')} style={{ background:'#E8600A', color:'#fff', padding:'14px 34px', borderRadius:7, fontFamily:'var(--font-inter),sans-serif', fontWeight:600, fontSize:14, display:'inline-flex', alignItems:'center', gap:9, border:'none', cursor:'pointer', boxShadow:'0 6px 22px rgba(232,96,10,0.3)', letterSpacing:'0.3px', transition:'all 0.2s' }}
              onMouseEnter={e=>{e.currentTarget.style.background='#B84A06';e.currentTarget.style.transform='translateY(-2px)'}}
              onMouseLeave={e=>{e.currentTarget.style.background='#E8600A';e.currentTarget.style.transform='none'}}>
              Explore Products <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <button onClick={()=>scrollTo('contact')} style={{ border:'1.5px solid rgba(255,255,255,0.18)', color:'#fff', padding:'14px 34px', borderRadius:7, fontFamily:'var(--font-inter),sans-serif', fontWeight:500, fontSize:14, background:'transparent', cursor:'pointer', letterSpacing:'0.3px', transition:'all 0.2s' }}
              onMouseEnter={e=>{e.currentTarget.style.borderColor='#E8600A';e.currentTarget.style.color='#E8600A'}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(255,255,255,0.18)';e.currentTarget.style.color='#fff'}}>
              Request a Quote
            </button>
          </div>
        </div>

        {/* RIGHT - Hero image */}
        <div style={{ display:'flex', alignItems:'center', justifyContent:'center' }}>
          <div style={{ position:'relative', width:'100%', maxWidth:560 }}>
            <div
              style={{ borderRadius:22, overflow:'hidden', border:'1.5px solid rgba(255,255,255,0.07)', boxShadow:'0 28px 72px rgba(0,0,0,0.7),0 0 0 1px rgba(232,96,10,0.07)', position:'relative', transition:'box-shadow 0.45s ease,border-color 0.45s ease', cursor:'pointer' }}
              onMouseEnter={e=>{const el=e.currentTarget;el.style.boxShadow='0 28px 72px rgba(0,0,0,0.65),0 0 0 2.5px rgba(232,96,10,0.65),0 0 36px rgba(232,96,10,0.28),0 0 72px rgba(232,96,10,0.12)';el.style.borderColor='rgba(232,96,10,0.55)'}}
              onMouseLeave={e=>{const el=e.currentTarget;el.style.boxShadow='0 28px 72px rgba(0,0,0,0.7),0 0 0 1px rgba(232,96,10,0.07)';el.style.borderColor='rgba(255,255,255,0.07)'}}>
              <div style={{ position:'absolute', inset:0, borderRadius:22, background:'linear-gradient(180deg,transparent 52%,rgba(0,0,0,0.7) 100%)', zIndex:1, pointerEvents:'none' }} />
              <div style={{ position:'absolute', top:18, right:18, zIndex:20, background:'#E8600A', color:'#fff', fontFamily:'var(--font-inter),sans-serif', fontSize:11, fontWeight:700, padding:'8px 16px', borderRadius:22, letterSpacing:'0.5px', boxShadow:'0 4px 16px rgba(232,96,10,0.4)' }}>
                FSSAI & APEDA Certified
              </div>
              <Image src="/images/hero.png" alt="Premium Agro Export from India" width={560} height={430} style={{ width:'100%', height:430, objectFit:'cover', display:'block', borderRadius:22 }} priority />
              <div style={{ position:'absolute', bottom:0, left:0, right:0, padding:'22px 24px 20px', zIndex:2 }}>
                <div style={{ fontFamily:'var(--font-cormorant),serif', fontStyle:'italic', fontSize:20, fontWeight:700, color:'#fff', marginBottom:4 }}>Global Agro Export</div>
                <div style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:10.5, color:'rgba(255,255,255,0.5)', letterSpacing:'2.5px', textTransform:'uppercase' }}>Premium Dehydrated Products from India</div>
                <div style={{ display:'flex', gap:7, flexWrap:'wrap', marginTop:10 }}>
                  {['Dehydrated Onion','Garlic','Spices'].map(t=>(
                    <span key={t} style={{ fontSize:11, fontWeight:500, padding:'5px 13px', border:'1px solid rgba(255,255,255,0.18)', borderRadius:16, color:'rgba(255,255,255,0.68)', fontFamily:'var(--font-inter),sans-serif' }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ position:'absolute', bottom:-22, left:-22, width:130, height:130, borderRadius:'50%', background:'radial-gradient(circle,rgba(232,96,10,0.14),transparent 70%)', pointerEvents:'none' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
