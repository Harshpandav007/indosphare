'use client'
import Image from 'next/image'
import { products, categories } from '@/lib/products'
import { useApp } from '@/lib/store'

export default function Products() {
  const { openPanel } = useApp()

  return (
    <section id="products" style={{ background:'#F5F3EF', padding:'clamp(60px,10vw,96px) 0' }}>
      <div style={{ maxWidth:1360, margin:'0 auto', padding:'0 clamp(16px,4vw,48px)' }}>

        {/* Header */}
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', gap:24, flexWrap:'wrap', marginBottom:'clamp(36px,6vw,60px)' }}>
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:14 }}>
              <div style={{ width:26, height:1, background:'#E8600A' }} />
              <span style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:10.5, fontWeight:700, letterSpacing:'3.5px', textTransform:'uppercase', color:'#E8600A' }}>Our Products</span>
            </div>
            <h2 style={{ fontFamily:'var(--font-montserrat),sans-serif', fontWeight:900, fontSize:'clamp(22px,5vw,40px)', color:'#1A3A6E', lineHeight:1.1, letterSpacing:-1, margin:0 }}>
              Export-Grade Product Catalog
            </h2>
            <div style={{ width:42, height:'2.5px', background:'linear-gradient(90deg,#E8600A,#F97316)', borderRadius:2, marginTop:18 }} />
          </div>
          <p style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:'clamp(13px,3.5vw,15px)', color:'#6A6A65', lineHeight:1.9, maxWidth:320, fontWeight:300, margin:0 }}>
            Hygienic processing. Bulk supply. International standards. Ready for your market.
          </p>
        </div>

        {/* Category blocks */}
        {categories.map(cat => {
          const catProds = products.filter(p => p.categorySlug === cat.slug)
          return (
            <div key={cat.slug} id={`cat-${cat.slug}`} style={{ marginBottom:'clamp(40px,7vw,60px)' }}>

              {/* Category heading */}
              <div style={{ display:'flex', alignItems:'center', gap:14, marginBottom:'clamp(18px,4vw,30px)', flexWrap:'wrap' }}>
                <div style={{ width:28, height:2, background:'#E8600A', borderRadius:2, flexShrink:0 }} />
                <span style={{ fontFamily:'var(--font-oswald),sans-serif', fontSize:'clamp(13px,3.5vw,16px)', fontWeight:700, letterSpacing:'1.5px', color:'#050505', textTransform:'uppercase' }}>{cat.label}</span>
                <div style={{ flex:1, minWidth:20, height:1, background:'linear-gradient(90deg,rgba(232,96,10,0.22),transparent)' }} />
                <span style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:10, fontWeight:700, letterSpacing:'2px', color:'#E8600A', background:'#FFF4ED', border:'1px solid rgba(232,96,10,0.14)', padding:'5px 12px', borderRadius:20, textTransform:'uppercase', flexShrink:0 }}>{cat.count} Products</span>
              </div>

              {/* FIXED 5-col grid — responsive on mobile */}
              <div className="pgrid-responsive" style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:'clamp(12px,2.5vw,18px)' }}>
                {catProds.map(product => (
                  <div key={product.id} onClick={()=>openPanel(product)}
                    style={{ background:'#fff', borderRadius:16, overflow:'hidden', border:'1px solid rgba(0,0,0,0.07)', cursor:'pointer', display:'flex', flexDirection:'column', transition:'transform 0.3s,box-shadow 0.3s' }}
                    onMouseEnter={e=>{ const el=e.currentTarget; el.style.transform='translateY(-6px)'; el.style.boxShadow='0 22px 52px rgba(0,0,0,0.13)' }}
                    onMouseLeave={e=>{ const el=e.currentTarget; el.style.transform='none'; el.style.boxShadow='none' }}>
                    <div style={{ width:'100%', height:'clamp(140px,25vw,200px)', background:'#ECEAE5', flexShrink:0, overflow:'hidden', position:'relative' }}>
                      <Image src={product.image} alt={product.name} fill style={{ objectFit:'cover' }} sizes="(max-width:600px) 45vw, (max-width:900px) 30vw, 20vw" />
                    </div>
                    <div style={{ padding:'clamp(12px,2.5vw,16px)', display:'flex', flexDirection:'column', flex:1 }}>
                      <div style={{ fontFamily:'var(--font-oswald),sans-serif', fontSize:'clamp(13px,3vw,15px)', fontWeight:700, color:'#050505', marginBottom:6, lineHeight:1.25, letterSpacing:'0.3px' }}>{product.name}</div>
                      <p style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:'clamp(11px,2.5vw,12px)', color:'#6A6A65', lineHeight:1.6, marginBottom:'clamp(10px,2vw,14px)', flex:1, fontWeight:300 }}>{product.description}</p>
                      <button style={{ width:'100%', padding:'clamp(8px,2vw,10px) 12px', background:'#050505', color:'#fff', border:'none', borderRadius:8, fontFamily:'var(--font-oswald),sans-serif', fontSize:'clamp(10px,2.5vw,12px)', fontWeight:600, letterSpacing:'1.5px', textTransform:'uppercase', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', gap:6, flexShrink:0, transition:'background 0.2s' }}
                        onMouseEnter={e=>(e.currentTarget.style.background='#E8600A')}
                        onMouseLeave={e=>(e.currentTarget.style.background='#050505')}>
                        Explore
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      <style>{`
        @media (max-width: 1100px) { .pgrid-responsive { grid-template-columns: repeat(4,1fr) !important; } }
        @media (max-width: 860px)  { .pgrid-responsive { grid-template-columns: repeat(3,1fr) !important; } }
        @media (max-width: 600px)  { .pgrid-responsive { grid-template-columns: repeat(2,1fr) !important; } }
      `}</style>
    </section>
  )
}