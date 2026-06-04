'use client'
import Image from 'next/image'
import { useApp } from '@/lib/store'

function scrollTo(id: string) { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }

const socials = [
  { href:'https://www.facebook.com/share/1BGQRCKGSZ/', src:'/images/social/facebook.webp', alt:'Facebook' },
  { href:'https://www.instagram.com/indosphare.export?igsh=b2cwOG9oZXQzeDM4', src:'/images/social/instagram.avif', alt:'Instagram' },
  { href:'https://www.linkedin.com/company/112805311/', src:'/images/social/linkedin.png', alt:'LinkedIn' },
]
const certs = [
  { src:'/images/certs/Fssai.png', name:'FSSAI' },
  { src:'/images/certs/APEDA.png', name:'APEDA' },
  { src:'/images/certs/IEC.png',   name:'IEC'   },
  { src:'/images/certs/GST.webp',  name:'GST'   },
]
const navLinks  = [['top','Home'],['about','About Us'],['products','Our Products'],['certs','Certifications'],['process','Our Process'],['contact','Contact Us']]
const prodLinks = ['Dehydrated Red Onion','Dehydrated White Onion','Dehydrated Pink Onion','Dehydrated Garlic']

const colTitle: React.CSSProperties = {
  fontFamily:'var(--font-inter),sans-serif', fontSize:13, fontWeight:700,
  letterSpacing:'2.5px', textTransform:'uppercase' as const, color:'#F97316',
  marginBottom:22, position:'relative' as const, paddingBottom:12,
}
const linkBtn: React.CSSProperties = {
  fontFamily:'var(--font-inter),sans-serif', fontSize:'clamp(13px,3.5vw,14px)',
  color:'rgba(255,255,255,0.42)', background:'transparent', border:'none',
  cursor:'pointer', padding:'4px 0', display:'block',
  textAlign:'left' as const, transition:'color 0.2s', width:'100%',
}

// SVG icons for contact rows
const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .9h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
)
const EmailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="M2 7l10 7 10-7"/>
  </svg>
)
const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
)
const LocationIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
    <circle cx="12" cy="9" r="2.5"/>
  </svg>
)

const contactRows = [
  {
    icon: <PhoneIcon />,
    label: 'Phone / WhatsApp',
    lines: ['+91 91068 45134', '+91 63544 96611'],
    hrefs: ['tel:+919106845134', 'tel:+916354496611'],
    isLink: true,
  },
  {
    icon: <EmailIcon />,
    label: 'Email',
    lines: ['info@indosphareexport.com'],
    hrefs: ['mailto:info@indosphareexport.com'],
    isLink: true,
  },
  {
    icon: <ClockIcon />,
    label: 'Business Hours',
    lines: ['Mon – Sun: 9 AM – 8 PM IST'],
    hrefs: [],
    isLink: false,
  },
  {
    icon: <LocationIcon />,
    label: 'Location',
    lines: ['India — Exporting Worldwide'],
    hrefs: [],
    isLink: false,
  },
]

export default function Footer() {
  const { openLegal } = useApp()

  return (
    <footer style={{ background:'#000', borderTop:'1px solid rgba(255,255,255,0.05)' }}>

      {/* Main grid — 4 cols desktop → 2 cols tablet → 1 col mobile */}
      <div className="footer-main-grid" style={{
        maxWidth:1360, margin:'0 auto',
        padding:'clamp(40px,8vw,72px) clamp(16px,4vw,48px) clamp(36px,6vw,56px)',
        display:'grid',
        gridTemplateColumns:'2fr 1fr 1fr 1.5fr',
        gap:'clamp(28px,5vw,52px)',
      }}>

        {/* Brand column */}
        <div>
          <div style={{ display:'flex', alignItems:'center', gap:13, marginBottom:20 }}>
            <div style={{ width:50, height:50, borderRadius:'50%', border:'1.5px solid rgba(232,96,10,0.35)', background:'rgba(255,255,255,0.05)', display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden', flexShrink:0 }}>
              <Image src="/images/logo.jpg" alt="Indosphare Export" width={42} height={42} style={{ borderRadius:'50%', objectFit:'contain' }} />
            </div>
            <div>
              <div style={{ fontFamily:'var(--font-montserrat),sans-serif', fontSize:15, fontWeight:900, color:'#fff', letterSpacing:'1px', textTransform:'uppercase', lineHeight:1 }}>Indosphare</div>
              <div style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:9, fontWeight:600, color:'#F97316', letterSpacing:'3.5px', textTransform:'uppercase', marginTop:3 }}>Export</div>
            </div>
          </div>
          <p style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:'clamp(12px,3vw,13.5px)', color:'rgba(255,255,255,0.38)', lineHeight:1.85, maxWidth:265, fontWeight:300, margin:'0 0 6px' }}>
            Crafting Quality, Exporting Flavours.
          </p>
          <p style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:'clamp(12px,3vw,13px)', color:'rgba(255,255,255,0.3)', lineHeight:1.7, maxWidth:265, fontWeight:300, margin:0 }}>
            Premium agricultural products from India to the world — built on trust, transparency, and excellence.
          </p>
          {/* Social icons */}
          <div style={{ display:'flex', gap:10, marginTop:22, flexWrap:'wrap' }}>
            {socials.map(s => (
              <a key={s.alt} href={s.href} target="_blank" rel="noopener noreferrer" title={s.alt}
                style={{ width:38, height:38, borderRadius:'50%', border:'2px solid rgba(255,255,255,0.14)', background:'rgba(255,255,255,0.05)', display:'flex', alignItems:'center', justifyContent:'center', transition:'all 0.25s', flexShrink:0 }}
                onMouseEnter={e=>{ const el=e.currentTarget; el.style.borderColor='rgba(34,197,94,0.7)'; el.style.boxShadow='0 0 0 3px rgba(34,197,94,0.18)'; el.style.transform='translateY(-2px)' }}
                onMouseLeave={e=>{ const el=e.currentTarget; el.style.borderColor='rgba(255,255,255,0.14)'; el.style.boxShadow='none'; el.style.transform='none' }}>
                <Image src={s.src} alt={s.alt} width={28} height={28} style={{ borderRadius:'50%', objectFit:'contain', width:28, height:28 }} />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <div style={{ ...colTitle }}>
            Navigation
            <div style={{ position:'absolute', bottom:0, left:0, width:28, height:'1.5px', background:'#E8600A' }} />
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:4 }}>
            {navLinks.map(([id, label]) => (
              <button key={id} style={linkBtn} onClick={() => scrollTo(id)}
                onMouseEnter={e=>(e.currentTarget.style.color='#F97316')}
                onMouseLeave={e=>(e.currentTarget.style.color='rgba(255,255,255,0.42)')}>
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Products */}
        <div>
          <div style={{ ...colTitle }}>
            Products
            <div style={{ position:'absolute', bottom:0, left:0, width:28, height:'1.5px', background:'#E8600A' }} />
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:4 }}>
            {prodLinks.map(l => (
              <button key={l} style={linkBtn} onClick={() => scrollTo('products')}
                onMouseEnter={e=>(e.currentTarget.style.color='#F97316')}
                onMouseLeave={e=>(e.currentTarget.style.color='rgba(255,255,255,0.42)')}>
                {l}
              </button>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <div style={{ ...colTitle }}>
            Contact Info
            <div style={{ position:'absolute', bottom:0, left:0, width:28, height:'1.5px', background:'#E8600A' }} />
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
            {contactRows.map(item => (
              <div key={item.label} style={{ display:'flex', alignItems:'flex-start', gap:12 }}>
                {/* Icon box with SVG */}
                <div style={{ width:34, height:34, borderRadius:8, background:'rgba(232,96,10,0.12)', border:'1px solid rgba(232,96,10,0.2)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:10.5, fontWeight:700, letterSpacing:'1.5px', textTransform:'uppercase', color:'rgba(255,255,255,0.28)', marginBottom:2 }}>
                    {item.label}
                  </div>
                  {item.lines.map((line, i) => (
                    item.isLink && item.hrefs[i]
                      ? <a key={line} href={item.hrefs[i]} style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:'clamp(12px,3vw,14px)', color:'rgba(255,255,255,0.45)', textDecoration:'none', display:'block', transition:'color 0.2s' }}
                          onMouseEnter={e=>(e.currentTarget.style.color='#F97316')}
                          onMouseLeave={e=>(e.currentTarget.style.color='rgba(255,255,255,0.45)')}>{line}</a>
                      : <p key={line} style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:'clamp(12px,3vw,14px)', color:'rgba(255,255,255,0.45)', margin:0 }}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cert strip */}
      <div style={{ maxWidth:1360, margin:'0 auto', padding:'16px clamp(16px,4vw,48px)', borderTop:'1px solid rgba(255,255,255,0.05)', borderBottom:'1px solid rgba(255,255,255,0.05)', display:'flex', alignItems:'center', gap:16, flexWrap:'wrap' }}>
        <span style={{ fontFamily:'var(--font-oswald),sans-serif', fontSize:11, fontWeight:600, letterSpacing:'2px', textTransform:'uppercase', color:'rgba(255,255,255,0.3)', flexShrink:0 }}>Certified By</span>
        <div style={{ display:'flex', gap:14, alignItems:'center', flexWrap:'wrap' }}>
          {certs.map(c => (
            <div key={c.name} style={{ display:'flex', alignItems:'center', gap:7 }}>
              <div style={{ width:30, height:30, borderRadius:'50%', background:'rgba(255,255,255,0.9)', display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden', flexShrink:0 }}>
                <Image src={c.src} alt={c.name} width={24} height={24} style={{ width:24, height:24, objectFit:'contain' }} />
              </div>
              <span style={{ fontFamily:'var(--font-oswald),sans-serif', fontSize:'clamp(10px,2.5vw,12px)', color:'rgba(255,255,255,0.35)', letterSpacing:'1px' }}>{c.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ maxWidth:1360, margin:'0 auto', padding:'16px clamp(16px,4vw,48px)', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:12 }}>
        <p style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:'clamp(11px,3vw,13px)', color:'rgba(255,255,255,0.22)', margin:0 }}>
          © 2025 Indosphare Export. All rights reserved.
        </p>
        <div style={{ display:'flex', gap:6, alignItems:'center', flexWrap:'wrap' }}>
          {[['privacy','Privacy Policy'],['terms','Terms of Service']].map(([type, label], i) => (
            <span key={type} style={{ display:'flex', alignItems:'center', gap:6 }}>
              {i > 0 && <span style={{ color:'rgba(255,255,255,0.12)', fontSize:12 }}>|</span>}
              <button onClick={() => openLegal(type as 'privacy'|'terms')}
                style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:'clamp(11px,3vw,13px)', color:'rgba(255,255,255,0.3)', background:'transparent', border:'none', cursor:'pointer', padding:'4px 8px', transition:'color 0.2s' }}
                onMouseEnter={e=>(e.currentTarget.style.color='#F97316')}
                onMouseLeave={e=>(e.currentTarget.style.color='rgba(255,255,255,0.3)')}>
                {label}
              </button>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .footer-main-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 580px)  { .footer-main-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  )
}