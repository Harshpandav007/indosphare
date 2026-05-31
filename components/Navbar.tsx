'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useApp } from '@/lib/store'

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
function scrollToCat(slug: string) {
  document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
  setTimeout(() => document.getElementById('cat-' + slug)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 400)
}

const navStyle: React.CSSProperties = {
  position: 'sticky', top: 0, zIndex: 300,
  background: 'rgba(4,4,4,0.97)', backdropFilter: 'blur(24px)',
  borderBottom: '1px solid rgba(255,255,255,0.05)',
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { openMission } = useApp()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const linkStyle: React.CSSProperties = {
    fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.58)',
    padding: '9px 15px', letterSpacing: '0.3px', background: 'transparent',
    border: 'none', cursor: 'pointer', fontFamily: 'var(--font-inter),sans-serif',
    transition: 'color 0.2s',
  }

  return (
    <nav style={{ ...navStyle, boxShadow: scrolled ? '0 4px 48px rgba(0,0,0,0.7)' : 'none' }}>
      <div style={{ maxWidth:1360, margin:'0 auto', padding:'0 48px', display:'flex', justifyContent:'space-between', alignItems:'center', height:80 }}>
        {/* Logo */}
        <a href="#" onClick={e=>{e.preventDefault();scrollTo('top')}} style={{ display:'flex', alignItems:'center', gap:14, textDecoration:'none', flexShrink:0 }}>
          <div style={{ width:54, height:54, borderRadius:'50%', border:'2px solid rgba(232,96,10,0.4)', background:'rgba(255,255,255,0.05)', display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden', boxShadow:'0 0 18px rgba(232,96,10,0.15)' }}>
            <Image src="/images/logo.jpg" alt="Indosphare Export" width={46} height={46} style={{ borderRadius:'50%', objectFit:'contain' }} />
          </div>
          <div>
            <div style={{ fontFamily:'var(--font-montserrat),sans-serif', fontSize:17, fontWeight:900, color:'#fff', letterSpacing:'1.5px', lineHeight:1, textTransform:'uppercase' }}>Indosphare</div>
            <div style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:9, fontWeight:600, color:'#F97316', letterSpacing:'4px', textTransform:'uppercase', marginTop:3 }}>Export</div>
          </div>
        </a>

        {/* Links */}
        <div style={{ display:'flex', alignItems:'center' }}>
          <button style={linkStyle} onClick={()=>scrollTo('top')}
            onMouseEnter={e=>(e.currentTarget.style.color='#fff')}
            onMouseLeave={e=>(e.currentTarget.style.color='rgba(255,255,255,0.58)')}>Home</button>

          {/* About dropdown */}
          <div style={{ position:'relative' }} className="nav-dd-wrap">
            <button style={{ ...linkStyle, display:'flex', alignItems:'center', gap:4 }}
              onClick={()=>scrollTo('about')}
              onMouseEnter={e=>(e.currentTarget.style.color='#fff')}
              onMouseLeave={e=>(e.currentTarget.style.color='rgba(255,255,255,0.58)')}>
              About Us <span style={{ fontSize:8 }}>▼</span>
            </button>
            <div className="nav-dd-menu" style={{ position:'absolute', top:'calc(100% + 8px)', left:'50%', transform:'translateX(-50%)', background:'rgba(10,10,10,0.97)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:12, padding:'8px 0', minWidth:200, opacity:0, pointerEvents:'none', backdropFilter:'blur(16px)', boxShadow:'0 16px 48px rgba(0,0,0,0.6)', zIndex:400, transition:'opacity 0.2s' }}>
              <a href="#" onClick={e=>{e.preventDefault();scrollTo('about')}} style={{ display:'block', fontSize:13, color:'rgba(255,255,255,0.62)', textDecoration:'none', padding:'10px 20px' }}
                 onMouseEnter={e=>{e.currentTarget.style.color='#F97316';e.currentTarget.style.background='rgba(232,96,10,0.08)'}}
                 onMouseLeave={e=>{e.currentTarget.style.color='rgba(255,255,255,0.62)';e.currentTarget.style.background='transparent'}}>Company Profile</a>
              <a href="#" onClick={e=>{e.preventDefault();openMission()}} style={{ display:'block', fontSize:13, color:'rgba(255,255,255,0.62)', textDecoration:'none', padding:'10px 20px' }}
                 onMouseEnter={e=>{e.currentTarget.style.color='#F97316';e.currentTarget.style.background='rgba(232,96,10,0.08)'}}
                 onMouseLeave={e=>{e.currentTarget.style.color='rgba(255,255,255,0.62)';e.currentTarget.style.background='transparent'}}>Our Mission</a>
            </div>
          </div>

          {/* Products dropdown */}
          <div style={{ position:'relative' }} className="nav-dd-wrap">
            <button style={{ ...linkStyle, display:'flex', alignItems:'center', gap:4 }}
              onClick={()=>scrollTo('products')}
              onMouseEnter={e=>(e.currentTarget.style.color='#fff')}
              onMouseLeave={e=>(e.currentTarget.style.color='rgba(255,255,255,0.58)')}>
              Products <span style={{ fontSize:8 }}>▼</span>
            </button>
            <div className="nav-dd-menu" style={{ position:'absolute', top:'calc(100% + 8px)', left:'50%', transform:'translateX(-50%)', background:'rgba(10,10,10,0.97)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:12, padding:'8px 0', minWidth:220, opacity:0, pointerEvents:'none', backdropFilter:'blur(16px)', boxShadow:'0 16px 48px rgba(0,0,0,0.6)', zIndex:400, transition:'opacity 0.2s' }}>
              {[['red-onion','Dehydrated Red Onion'],['white-onion','Dehydrated White Onion'],['pink-onion','Dehydrated Pink Onion'],['garlic','Dehydrated Garlic']].map(([slug,label])=>(
                <a key={slug} href="#" onClick={e=>{e.preventDefault();scrollToCat(slug)}} style={{ display:'block', fontSize:13, color:'rgba(255,255,255,0.62)', textDecoration:'none', padding:'10px 20px' }}
                   onMouseEnter={e=>{e.currentTarget.style.color='#F97316';e.currentTarget.style.background='rgba(232,96,10,0.08)'}}
                   onMouseLeave={e=>{e.currentTarget.style.color='rgba(255,255,255,0.62)';e.currentTarget.style.background='transparent'}}>{label}</a>
              ))}
            </div>
          </div>

          {['certs|Certifications','process|Our Process','contact|Contact'].map(item => {
            const [id, label] = item.split('|')
            return (
              <button key={id} style={linkStyle} onClick={()=>scrollTo(id)}
                onMouseEnter={e=>(e.currentTarget.style.color='#fff')}
                onMouseLeave={e=>(e.currentTarget.style.color='rgba(255,255,255,0.58)')}>
                {label}
              </button>
            )
          })}

          <button onClick={()=>scrollTo('contact')}
            style={{ marginLeft:10, background:'#E8600A', color:'#fff', fontSize:13, fontWeight:600, padding:'11px 26px', borderRadius:7, border:'none', cursor:'pointer', letterSpacing:'0.4px', transition:'background 0.2s', fontFamily:'var(--font-inter),sans-serif' }}
            onMouseEnter={e=>(e.currentTarget.style.background='#B84A06')}
            onMouseLeave={e=>(e.currentTarget.style.background='#E8600A')}>
            Get a Quote
          </button>
        </div>
      </div>
      <style>{`.nav-dd-wrap:hover .nav-dd-menu{opacity:1!important;pointer-events:all!important}`}</style>
    </nav>
  )
}
