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
    <div
      onClick={e => { if (e.target === e.currentTarget) closePanel() }}
      style={{
        position:'fixed', inset:0, background:'rgba(0,0,0,0.76)', zIndex:500,
        display:'flex', alignItems:'center', justifyContent:'center',
        padding:'clamp(12px,3vw,24px)',
        backdropFilter:'blur(8px)',
        transition:'opacity 0.3s',
        opacity: panelProduct ? 1 : 0,
        pointerEvents: panelProduct ? 'all' : 'none',
      }}>
      <div style={{
        background:'#fff', borderRadius:'clamp(16px,3vw,24px)',
        maxWidth:760, width:'100%', maxHeight:'90vh', overflowY:'auto',
        position:'relative', transition:'transform 0.35s',
        transform: panelProduct ? 'none' : 'translateY(36px) scale(0.96)',
        boxShadow:'0 48px 120px rgba(0,0,0,0.45)',
      }}>
        {/* Close button */}
        <button onClick={closePanel}
          style={{ position:'absolute', top:14, right:14, width:34, height:34, background:'#F5F3EF', border:'none', borderRadius:'50%', cursor:'pointer', fontSize:15, display:'flex', alignItems:'center', justifyContent:'center', zIndex:10, transition:'all 0.2s' }}
          onMouseEnter={e=>{ e.currentTarget.style.background='#E8600A'; e.currentTarget.style.color='#fff' }}
          onMouseLeave={e=>{ e.currentTarget.style.background='#F5F3EF'; e.currentTarget.style.color='#050505' }}>✕</button>

        {/* Image */}
        <div style={{ width:'100%', height:'clamp(180px,35vw,260px)', background:'#F5F3EF', borderRadius:'clamp(16px,3vw,24px) clamp(16px,3vw,24px) 0 0', overflow:'hidden', position:'relative' }}>
          {panelProduct && (
            <Image src={panelProduct.image} alt={panelProduct.name} fill style={{ objectFit:'cover' }} sizes="760px" />
          )}
        </div>

        {/* Body */}
        {panelProduct && (
          <div style={{ padding:'clamp(20px,4vw,38px)' }}>
            <div style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:10, fontWeight:700, letterSpacing:'3px', textTransform:'uppercase', color:'#E8600A', marginBottom:8 }}>
              {panelProduct.category}
            </div>
            <h2 style={{ fontFamily:'var(--font-cormorant),serif', fontStyle:'italic', fontSize:'clamp(26px,6vw,36px)', fontWeight:700, color:'#050505', marginBottom:12, lineHeight:1.1 }}>
              {panelProduct.name}
            </h2>
            <p style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:'clamp(13px,3.5vw,14.5px)', color:'#6A6A65', lineHeight:1.87, marginBottom:20, fontWeight:300 }}>
              {panelProduct.fullDescription}
            </p>

            {/* Specs — 2 cols desktop, 2 cols mobile (smaller) */}
            <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:'clamp(8px,2vw,10px)', marginBottom:20 }}>
              {Object.entries(panelProduct.specs).map(([k, v]) => (
                <div key={k} style={{ background:'#F5F3EF', borderRadius:10, padding:'clamp(10px,2vw,13px) clamp(12px,2.5vw,15px)', border:'1px solid rgba(0,0,0,0.06)' }}>
                  <label style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:'clamp(9px,2vw,10px)', fontWeight:600, letterSpacing:'2px', textTransform:'uppercase', color:'#6A6A65', display:'block', marginBottom:4 }}>{k}</label>
                  <span style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:'clamp(12px,3vw,14.5px)', fontWeight:700, color:'#1A1A1A', display:'block', lineHeight:1.3 }}>{v}</span>
                </div>
              ))}
            </div>

            {/* Action buttons — stack on small mobile */}
            <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
              <button
                onClick={() => { closePanel(); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior:'smooth' }), 300) }}
                style={{ flex:1, minWidth:'calc(50% - 5px)', padding:'clamp(11px,2.5vw,13px)', background:'#E8600A', color:'#fff', border:'none', borderRadius:9, fontFamily:'var(--font-oswald),sans-serif', fontSize:'clamp(11px,3vw,13px)', fontWeight:700, letterSpacing:'1.5px', textTransform:'uppercase', cursor:'pointer', transition:'background 0.2s', whiteSpace:'nowrap' }}
                onMouseEnter={e=>(e.currentTarget.style.background='#B84A06')}
                onMouseLeave={e=>(e.currentTarget.style.background='#E8600A')}>
                Request a Quote
              </button>
              <button
                onClick={() => window.open('https://api.whatsapp.com/send?phone=919106845134&text=Hello%2C%20I%20am%20interested%20in%20your%20products.','_blank')}
                style={{ flex:1, minWidth:'calc(50% - 5px)', padding:'clamp(11px,2.5vw,13px)', background:'#050505', color:'#fff', border:'none', borderRadius:9, fontFamily:'var(--font-oswald),sans-serif', fontSize:'clamp(11px,3vw,13px)', fontWeight:700, letterSpacing:'1.5px', textTransform:'uppercase', cursor:'pointer', transition:'background 0.2s', whiteSpace:'nowrap' }}
                onMouseEnter={e=>(e.currentTarget.style.background='#128C7E')}
                onMouseLeave={e=>(e.currentTarget.style.background='#050505')}>
                WhatsApp Us
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}