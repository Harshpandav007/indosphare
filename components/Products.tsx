'use client'
import Image from 'next/image'
import { products, categories } from '@/lib/products'
import { useApp } from '@/lib/store'

export default function Products() {
  const { openPanel } = useApp()
  return (
    <section id="products" style={{ background:'#F5F3EF', padding:'96px 0' }}>
      <div style={{ maxWidth:1360, margin:'0 auto', padding:'0 48px' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', gap:24, flexWrap:'wrap', marginBottom:60 }}>
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:14 }}>
              <div style={{ width:26, height:1, background:'#E8600A' }} />
              <span style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:10.5, fontWeight:700, letterSpacing:'3.5px', textTransform:'uppercase', color:'#E8600A' }}>Our Products</span>
            </div>
            <h2 style={{ fontFamily:'var(--font-montserrat),sans-serif', fontWeight:900, fontSize:'clamp(26px,2.8vw,40px)', color:'#1A3A6E', lineHeight:1.1, letterSpacing:-1, margin:0 }}>Export-Grade Product Catalog</h2>
            <div style={{ width:42, height:'2.5px', background:'linear-gradient(90deg,#E8600A,#F97316)', borderRadius:2, marginTop:18 }} />
          </div>
          <p style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:15, color:'#6A6A65', lineHeight:1.9, maxWidth:320, fontWeight:300, margin:0 }}>Hygienic processing. Bulk supply. International standards. Ready for your market.</p>
        </div>

        {categories.map(cat => {
          const catProds = products.filter(p => p.categorySlug === cat.slug)
          return (
            <div key={cat.slug} id={`cat-${cat.slug}`} style={{ marginBottom:60 }}>
              <div style={{ display:'flex', alignItems:'center', gap:16, marginBottom:30 }}>
                <div style={{ width:28, height:2, background:'#E8600A', borderRadius:2, flexShrink:0 }} />
                <span style={{ fontFamily:'var(--font-oswald),sans-serif', fontSize:16, fontWeight:700, letterSpacing:'1.8px', color:'#050505', textTransform:'uppercase' }}>{cat.label}</span>
                <div style={{ flex:1, height:1, background:'linear-gradient(90deg,rgba(232,96,10,0.22),transparent)' }} />
                <span style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:10, fontWeight:700, letterSpacing:'2px', color:'#E8600A', background:'#FFF4ED', border:'1px solid rgba(232,96,10,0.14)', padding:'5px 12px', borderRadius:20, textTransform:'uppercase' }}>{cat.count} Products</span>
              </div>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:18 }}>
                {catProds.map(product => (
                  <div key={product.id} onClick={()=>openPanel(product)}
                    style={{ background:'#fff', borderRadius:16, overflow:'hidden', border:'1px solid rgba(0,0,0,0.07)', cursor:'pointer', display:'flex', flexDirection:'column', transition:'transform 0.3s,box-shadow 0.3s' }}
                    onMouseEnter={e=>{ const el=e.currentTarget; el.style.transform='translateY(-6px)'; el.style.boxShadow='0 22px 52px rgba(0,0,0,0.13)' }}
                    onMouseLeave={e=>{ const el=e.currentTarget; el.style.transform='none'; el.style.boxShadow='none' }}>
                    <div style={{ width:'100%', height:200, background:'#ECEAE5', flexShrink:0, overflow:'hidden', position:'relative' }}>
                      <Image src={product.image} alt={product.name} fill style={{ objectFit:'cover' }} sizes="272px" />
                    </div>
                    <div style={{ padding:'16px 16px 14px', display:'flex', flexDirection:'column', flex:1 }}>
                      <div style={{ fontFamily:'var(--font-oswald),sans-serif', fontSize:15, fontWeight:700, color:'#050505', marginBottom:6, lineHeight:1.25, letterSpacing:'0.4px' }}>{product.name}</div>
                      <p style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:12, color:'#6A6A65', lineHeight:1.6, marginBottom:14, flex:1, fontWeight:300 }}>{product.description}</p>
                      <button style={{ width:'100%', padding:'10px 14px', background:'#050505', color:'#fff', border:'none', borderRadius:8, fontFamily:'var(--font-oswald),sans-serif', fontSize:12, fontWeight:600, letterSpacing:'2px', textTransform:'uppercase', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', gap:8, flexShrink:0, transition:'background 0.2s' }}
                        onMouseEnter={e=>(e.currentTarget.style.background='#E8600A')}
                        onMouseLeave={e=>(e.currentTarget.style.background='#050505')}>
                        Explore <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
