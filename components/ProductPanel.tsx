'use client'
import Image from 'next/image'
import { useApp } from '@/lib/store'
import { useEffect } from 'react'

export default function ProductPanel() {
  const { panelProduct, closePanel } = useApp()
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') closePanel() }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [closePanel])

  return (
    <div onClick={e=>{ if (e.target === e.currentTarget) closePanel() }}
      style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.76)', zIndex:500, display:'flex', alignItems:'center', justifyContent:'center', padding:24, backdropFilter:'blur(8px)', transition:'opacity 0.3s', opacity: panelProduct ? 1 : 0, pointerEvents: panelProduct ? 'all' : 'none' }}>
      <div style={{ background:'#fff', borderRadius:24, maxWidth:760, width:'100%', maxHeight:'88vh', overflowY:'auto', position:'relative', transition:'transform 0.35s', transform: panelProduct ? 'none' : 'translateY(36px) scale(0.96)', boxShadow:'0 48px 120px rgba(0,0,0,0.45)' }}>
        <button onClick={closePanel}
          style={{ position:'absolute', top:18, right:18, width:36, height:36, background:'#F5F3EF', border:'none', borderRadius:'50%', cursor:'pointer', fontSize:16, display:'flex', alignItems:'center', justifyContent:'center', zIndex:10, transition:'all 0.2s' }}
          onMouseEnter={e=>{e.currentTarget.style.background='#E8600A';e.currentTarget.style.color='#fff'}}
          onMouseLeave={e=>{e.currentTarget.style.background='#F5F3EF';e.currentTarget.style.color='#050505'}}>✕</button>

        <div style={{ width:'100%', height:260, background:'#F5F3EF', borderRadius:'24px 24px 0 0', overflow:'hidden', position:'relative' }}>
          {panelProduct && <Image src={panelProduct.image} alt={panelProduct.name} fill style={{ objectFit:'cover' }} sizes="760px" />}
        </div>

        {panelProduct && (
          <div style={{ padding:'32px 38px 40px' }}>
            <div style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:10, fontWeight:700, letterSpacing:'3px', textTransform:'uppercase', color:'#E8600A', marginBottom:9 }}>{panelProduct.category}</div>
            <h2 style={{ fontFamily:'var(--font-cormorant),serif', fontStyle:'italic', fontSize:36, fontWeight:700, color:'#050505', marginBottom:14, lineHeight:1.1 }}>{panelProduct.name}</h2>
            <p style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:14.5, color:'#6A6A65', lineHeight:1.87, marginBottom:24, fontWeight:300 }}>{panelProduct.fullDescription}</p>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, marginBottom:24 }}>
              {Object.entries(panelProduct.specs).map(([k,v]) => (
                <div key={k} style={{ background:'#F5F3EF', borderRadius:10, padding:'13px 15px', border:'1px solid rgba(0,0,0,0.06)' }}>
                  <label style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:10, fontWeight:600, letterSpacing:'2px', textTransform:'uppercase', color:'#6A6A65', display:'block', marginBottom:5 }}>{k}</label>
                  <span style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:14.5, fontWeight:700, color:'#1A1A1A', display:'block', lineHeight:1.3 }}>{v}</span>
                </div>
              ))}
            </div>
            <div style={{ display:'flex', gap:11 }}>
              <button onClick={()=>{ closePanel(); setTimeout(()=>document.getElementById('contact')?.scrollIntoView({behavior:'smooth'}),300) }}
                style={{ flex:1, padding:13, background:'#E8600A', color:'#fff', border:'none', borderRadius:9, fontFamily:'var(--font-oswald),sans-serif', fontSize:13, fontWeight:700, letterSpacing:'1.5px', textTransform:'uppercase', cursor:'pointer', transition:'background 0.2s' }}
                onMouseEnter={e=>(e.currentTarget.style.background='#B84A06')}
                onMouseLeave={e=>(e.currentTarget.style.background='#E8600A')}>Request a Quote</button>
              <button onClick={()=>window.open('https://wa.me/919106845134','_blank')}
                style={{ flex:1, padding:13, background:'#050505', color:'#fff', border:'none', borderRadius:9, fontFamily:'var(--font-oswald),sans-serif', fontSize:13, fontWeight:700, letterSpacing:'1.5px', textTransform:'uppercase', cursor:'pointer', transition:'background 0.2s' }}
                onMouseEnter={e=>(e.currentTarget.style.background='#128C7E')}
                onMouseLeave={e=>(e.currentTarget.style.background='#050505')}>WhatsApp Us</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
