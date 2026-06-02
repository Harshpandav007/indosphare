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

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [prodOpen, setProdOpen]   = useState(false)
  const { openMission } = useApp()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Close menu when navigating
  const nav = (id: string) => { scrollTo(id); setMenuOpen(false) }
  const navCat = (slug: string) => { scrollToCat(slug); setMenuOpen(false) }

  const linkStyle: React.CSSProperties = {
    fontSize:13, fontWeight:500, color:'rgba(255,255,255,0.58)',
    padding:'9px 15px', background:'transparent', border:'none',
    cursor:'pointer', fontFamily:'var(--font-inter),sans-serif', transition:'color 0.2s',
  }

  return (
    <nav style={{ position:'sticky', top:0, zIndex:300, background:'rgba(4,4,4,0.97)', backdropFilter:'blur(24px)', borderBottom:'1px solid rgba(255,255,255,0.05)', boxShadow: scrolled ? '0 4px 48px rgba(0,0,0,0.7)' : 'none' }}>
      <div style={{ maxWidth:1360, margin:'0 auto', padding:'0 clamp(16px,4vw,48px)', display:'flex', justifyContent:'space-between', alignItems:'center', height:72 }}>

        {/* Logo */}
        <a href="#" onClick={e=>{e.preventDefault();nav('top')}} style={{ display:'flex', alignItems:'center', gap:12, textDecoration:'none', flexShrink:0 }}>
          <div style={{ width:46, height:46, borderRadius:'50%', border:'2px solid rgba(232,96,10,0.4)', background:'rgba(255,255,255,0.05)', display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden', flexShrink:0 }}>
            <Image src="/images/logo.jpg" alt="Indosphare Export" width={38} height={38} style={{ borderRadius:'50%', objectFit:'contain' }} />
          </div>
          <div>
            <div style={{ fontFamily:'var(--font-montserrat),sans-serif', fontSize:15, fontWeight:900, color:'#fff', letterSpacing:'1.5px', lineHeight:1, textTransform:'uppercase' }}>Indosphare</div>
            <div style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:8, fontWeight:600, color:'#F97316', letterSpacing:'3px', textTransform:'uppercase', marginTop:2 }}>Export</div>
          </div>
        </a>

        {/* Desktop links */}
        <div style={{ display:'flex', alignItems:'center' }} className="desktop-nav">
          <button style={linkStyle} onClick={()=>nav('top')} onMouseEnter={e=>(e.currentTarget.style.color='#fff')} onMouseLeave={e=>(e.currentTarget.style.color='rgba(255,255,255,0.58)')}>Home</button>

          {/* About dropdown */}
          <div style={{ position:'relative' }} className="nav-dd-wrap">
            <button style={{ ...linkStyle, display:'flex', alignItems:'center', gap:4 }} onClick={()=>nav('about')} onMouseEnter={e=>(e.currentTarget.style.color='#fff')} onMouseLeave={e=>(e.currentTarget.style.color='rgba(255,255,255,0.58)')}>
              About Us <span style={{ fontSize:8 }}>▼</span>
            </button>
            <div className="nav-dd-menu" style={{ position:'absolute', top:'calc(100% + 8px)', left:'50%', transform:'translateX(-50%)', background:'rgba(10,10,10,0.97)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:12, padding:'8px 0', minWidth:200, opacity:0, pointerEvents:'none', backdropFilter:'blur(16px)', boxShadow:'0 16px 48px rgba(0,0,0,0.6)', zIndex:400, transition:'opacity 0.2s' }}>
              <a href="#" onClick={e=>{e.preventDefault();nav('about')}} style={{ display:'block', fontSize:13, color:'rgba(255,255,255,0.62)', textDecoration:'none', padding:'10px 20px' }} onMouseEnter={e=>{e.currentTarget.style.color='#F97316';e.currentTarget.style.background='rgba(232,96,10,0.08)'}} onMouseLeave={e=>{e.currentTarget.style.color='rgba(255,255,255,0.62)';e.currentTarget.style.background='transparent'}}>Company Profile</a>
              <a href="#" onClick={e=>{e.preventDefault();openMission();setMenuOpen(false)}} style={{ display:'block', fontSize:13, color:'rgba(255,255,255,0.62)', textDecoration:'none', padding:'10px 20px' }} onMouseEnter={e=>{e.currentTarget.style.color='#F97316';e.currentTarget.style.background='rgba(232,96,10,0.08)'}} onMouseLeave={e=>{e.currentTarget.style.color='rgba(255,255,255,0.62)';e.currentTarget.style.background='transparent'}}>Our Mission</a>
            </div>
          </div>

          {/* Products dropdown */}
          <div style={{ position:'relative' }} className="nav-dd-wrap">
            <button style={{ ...linkStyle, display:'flex', alignItems:'center', gap:4 }} onClick={()=>nav('products')} onMouseEnter={e=>(e.currentTarget.style.color='#fff')} onMouseLeave={e=>(e.currentTarget.style.color='rgba(255,255,255,0.58)')}>
              Products <span style={{ fontSize:8 }}>▼</span>
            </button>
            <div className="nav-dd-menu" style={{ position:'absolute', top:'calc(100% + 8px)', left:'50%', transform:'translateX(-50%)', background:'rgba(10,10,10,0.97)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:12, padding:'8px 0', minWidth:220, opacity:0, pointerEvents:'none', backdropFilter:'blur(16px)', boxShadow:'0 16px 48px rgba(0,0,0,0.6)', zIndex:400, transition:'opacity 0.2s' }}>
              {[['red-onion','Dehydrated Red Onion'],['white-onion','Dehydrated White Onion'],['pink-onion','Dehydrated Pink Onion'],['garlic','Dehydrated Garlic']].map(([slug,label])=>(
                <a key={slug} href="#" onClick={e=>{e.preventDefault();navCat(slug)}} style={{ display:'block', fontSize:13, color:'rgba(255,255,255,0.62)', textDecoration:'none', padding:'10px 20px' }} onMouseEnter={e=>{e.currentTarget.style.color='#F97316';e.currentTarget.style.background='rgba(232,96,10,0.08)'}} onMouseLeave={e=>{e.currentTarget.style.color='rgba(255,255,255,0.62)';e.currentTarget.style.background='transparent'}}>{label}</a>
              ))}
            </div>
          </div>

          {['certs|Certifications','process|Our Process','contact|Contact'].map(item=>{
            const [id,label]=item.split('|')
            return <button key={id} style={linkStyle} onClick={()=>nav(id)} onMouseEnter={e=>(e.currentTarget.style.color='#fff')} onMouseLeave={e=>(e.currentTarget.style.color='rgba(255,255,255,0.58)')}>{label}</button>
          })}

          <button onClick={()=>nav('contact')} style={{ marginLeft:10, background:'#E8600A', color:'#fff', fontSize:13, fontWeight:600, padding:'10px 22px', borderRadius:7, border:'none', cursor:'pointer', transition:'background 0.2s', fontFamily:'var(--font-inter),sans-serif', whiteSpace:'nowrap' }} onMouseEnter={e=>(e.currentTarget.style.background='#B84A06')} onMouseLeave={e=>(e.currentTarget.style.background='#E8600A')}>
            Get a Quote
          </button>
        </div>

        {/* Mobile hamburger button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          style={{ display:'none', flexDirection:'column', gap:5, background:'transparent', border:'none', cursor:'pointer', padding:8 }}
          aria-label="Toggle menu">
          <span style={{ display:'block', width:22, height:2, background: menuOpen ? '#F97316' : '#fff', borderRadius:2, transition:'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
          <span style={{ display:'block', width:22, height:2, background: menuOpen ? 'transparent' : '#fff', borderRadius:2, transition:'all 0.3s' }} />
          <span style={{ display:'block', width:22, height:2, background: menuOpen ? '#F97316' : '#fff', borderRadius:2, transition:'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile slide-down menu */}
      {menuOpen && (
        <div style={{ background:'rgba(4,4,4,0.98)', borderTop:'1px solid rgba(255,255,255,0.06)', padding:'12px 0 20px', animation:'fadeIn 0.2s ease' }}>
          {[
            { label:'Home',           action:()=>nav('top') },
            { label:'Company Profile',action:()=>nav('about') },
            { label:'Our Mission',    action:()=>{ openMission(); setMenuOpen(false) } },
            { label:'Certifications', action:()=>nav('certs') },
            { label:'Our Process',    action:()=>nav('process') },
            { label:'Contact',        action:()=>nav('contact') },
          ].map(item=>(
            <button key={item.label} onClick={item.action}
              style={{ display:'block', width:'100%', textAlign:'left', padding:'13px clamp(16px,4vw,48px)', fontSize:15, fontWeight:500, color:'rgba(255,255,255,0.75)', background:'transparent', border:'none', cursor:'pointer', fontFamily:'var(--font-inter),sans-serif', borderBottom:'1px solid rgba(255,255,255,0.04)', transition:'color 0.2s,background 0.2s' }}
              onMouseEnter={e=>{e.currentTarget.style.color='#F97316';e.currentTarget.style.background='rgba(232,96,10,0.06)'}}
              onMouseLeave={e=>{e.currentTarget.style.color='rgba(255,255,255,0.75)';e.currentTarget.style.background='transparent'}}>
              {item.label}
            </button>
          ))}

          {/* Products submenu in mobile */}
          <div style={{ padding:'4px 0' }}>
            <button onClick={()=>setProdOpen(!prodOpen)}
              style={{ display:'flex', alignItems:'center', justifyContent:'space-between', width:'100%', textAlign:'left', padding:'13px clamp(16px,4vw,48px)', fontSize:15, fontWeight:500, color:'rgba(255,255,255,0.75)', background:'transparent', border:'none', borderBottom:'1px solid rgba(255,255,255,0.04)', cursor:'pointer', fontFamily:'var(--font-inter),sans-serif' }}>
              Products <span style={{ fontSize:10, transition:'transform 0.2s', transform: prodOpen ? 'rotate(180deg)' : 'none' }}>▼</span>
            </button>
            {prodOpen && [['red-onion','Dehydrated Red Onion'],['white-onion','Dehydrated White Onion'],['pink-onion','Dehydrated Pink Onion'],['garlic','Dehydrated Garlic']].map(([slug,label])=>(
              <button key={slug} onClick={()=>navCat(slug)}
                style={{ display:'block', width:'100%', textAlign:'left', padding:'11px clamp(32px,8vw,72px)', fontSize:14, color:'rgba(255,255,255,0.5)', background:'transparent', border:'none', borderBottom:'1px solid rgba(255,255,255,0.03)', cursor:'pointer', fontFamily:'var(--font-inter),sans-serif' }}>
                {label}
              </button>
            ))}
          </div>

          <div style={{ padding:'16px clamp(16px,4vw,48px) 4px' }}>
            <button onClick={()=>nav('contact')}
              style={{ width:'100%', padding:'13px', background:'#E8600A', color:'#fff', fontSize:14, fontWeight:600, borderRadius:7, border:'none', cursor:'pointer', fontFamily:'var(--font-inter),sans-serif', letterSpacing:'0.3px' }}>
              Get a Quote
            </button>
          </div>
        </div>
      )}

      <style>{`
        .nav-dd-wrap:hover .nav-dd-menu { opacity:1!important; pointer-events:all!important; }
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}