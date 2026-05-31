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
const navLinks = [['top','Home'],['about','About Us'],['products','Our Products'],['certs','Certifications'],['process','Our Process'],['contact','Contact Us']]
const productLinks = ['Dehydrated Red Onion','Dehydrated White Onion','Dehydrated Pink Onion','Dehydrated Garlic']

const colTitle: React.CSSProperties = { fontFamily:'var(--font-inter),sans-serif', fontSize:13, fontWeight:700, letterSpacing:'2.5px', textTransform:'uppercase' as const, color:'#F97316', marginBottom:22, position:'relative' as const, paddingBottom:12, borderBottom:'none' }
const linkBtn: React.CSSProperties = { fontFamily:'var(--font-inter),sans-serif', fontSize:14, color:'rgba(255,255,255,0.42)', background:'transparent', border:'none', cursor:'pointer', padding:'4px 0', display:'block', textAlign:'left' as const, transition:'color 0.2s', width:'100%' }

export default function Footer() {
  const { openLegal } = useApp()
  return (
    <footer style={{ background:'#000', borderTop:'1px solid rgba(255,255,255,0.05)' }}>
      {/* Main grid */}
      <div style={{ maxWidth:1360, margin:'0 auto', padding:'72px 48px 56px', display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1.5fr', gap:52 }}>
        {/* Brand */}
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
          <p style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:13.5, color:'rgba(255,255,255,0.38)', lineHeight:1.85, maxWidth:265, fontWeight:300, margin:'0 0 6px' }}>Crafting Quality, Exporting Flavours.</p>
          <p style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:13, color:'rgba(255,255,255,0.3)', lineHeight:1.7, maxWidth:265, fontWeight:300, margin:0 }}>Premium agricultural products from India to the world — built on trust, transparency, and excellence.</p>
          <div style={{ display:'flex', gap:12, marginTop:22 }}>
            {socials.map(s=>(
              <a key={s.alt} href={s.href} target="_blank" rel="noopener noreferrer" title={s.alt}
                style={{ width:38, height:38, borderRadius:'50%', border:'2px solid rgba(255,255,255,0.14)', background:'rgba(255,255,255,0.05)', display:'flex', alignItems:'center', justifyContent:'center', transition:'all 0.25s' }}
                onMouseEnter={e=>{ const el=e.currentTarget; el.style.borderColor='rgba(34,197,94,0.7)'; el.style.boxShadow='0 0 0 3px rgba(34,197,94,0.18),0 0 14px rgba(34,197,94,0.24)'; el.style.transform='translateY(-2px)' }}
                onMouseLeave={e=>{ const el=e.currentTarget; el.style.borderColor='rgba(255,255,255,0.14)'; el.style.boxShadow='none'; el.style.transform='none' }}>
                <Image src={s.src} alt={s.alt} width={28} height={28} style={{ borderRadius:'50%', objectFit:'contain', width:28, height:28 }} />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <div style={{ ...colTitle, paddingBottom:12, position:'relative' }}>
            Navigation
            <div style={{ position:'absolute', bottom:0, left:0, width:28, height:'1.5px', background:'#E8600A' }} />
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:4 }}>
            {navLinks.map(([id,label])=>(
              <button key={id} style={linkBtn} onClick={()=>scrollTo(id)}
                onMouseEnter={e=>(e.currentTarget.style.color='#F97316')}
                onMouseLeave={e=>(e.currentTarget.style.color='rgba(255,255,255,0.42)')}>
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Products */}
        <div>
          <div style={{ ...colTitle, paddingBottom:12, position:'relative' }}>
            Products
            <div style={{ position:'absolute', bottom:0, left:0, width:28, height:'1.5px', background:'#E8600A' }} />
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:4 }}>
            {productLinks.map(l=>(
              <button key={l} style={linkBtn} onClick={()=>scrollTo('products')}
                onMouseEnter={e=>(e.currentTarget.style.color='#F97316')}
                onMouseLeave={e=>(e.currentTarget.style.color='rgba(255,255,255,0.42)')}>
                {l}
              </button>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <div style={{ ...colTitle, paddingBottom:12, position:'relative' }}>
            Contact Info
            <div style={{ position:'absolute', bottom:0, left:0, width:28, height:'1.5px', background:'#E8600A' }} />
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
            {[
              { icon:'📞', label:'Phone / WhatsApp', lines:['+91 91068 45134','+91 63544 96611'], hrefs:['tel:+919106845134','tel:+916354496611'], isLink:true },
              { icon:'✉️', label:'Email', lines:['info@indosphareexport.com'], hrefs:['mailto:info@indosphareexport.com'], isLink:true },
              { icon:'🕐', label:'Business Hours', lines:['Mon – Sun: 9 AM – 8 PM IST'], hrefs:[], isLink:false },
              { icon:'🇮🇳', label:'Location', lines:['India — Exporting Worldwide'], hrefs:[], isLink:false },
            ].map(item=>(
              <div key={item.label} style={{ display:'flex', alignItems:'flex-start', gap:12 }}>
                <div style={{ width:34, height:34, borderRadius:8, background:'rgba(232,96,10,0.12)', border:'1px solid rgba(232,96,10,0.2)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, fontSize:15 }}>{item.icon}</div>
                <div>
                  <div style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:10.5, fontWeight:700, letterSpacing:'1.5px', textTransform:'uppercase', color:'rgba(255,255,255,0.28)', marginBottom:2 }}>{item.label}</div>
                  {item.lines.map((line,i)=>(
                    item.isLink && item.hrefs[i]
                      ? <a key={line} href={item.hrefs[i]} style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:14, color:'rgba(255,255,255,0.45)', textDecoration:'none', display:'block', transition:'color 0.2s' }} onMouseEnter={e=>(e.currentTarget.style.color='#F97316')} onMouseLeave={e=>(e.currentTarget.style.color='rgba(255,255,255,0.45)')}>{line}</a>
                      : <p key={line} style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:14, color:'rgba(255,255,255,0.45)', margin:0 }}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cert strip */}
      <div style={{ maxWidth:1360, margin:'0 auto', padding:'18px 48px', borderTop:'1px solid rgba(255,255,255,0.05)', borderBottom:'1px solid rgba(255,255,255,0.05)', display:'flex', alignItems:'center', gap:24, flexWrap:'wrap' }}>
        <span style={{ fontFamily:'var(--font-oswald),sans-serif', fontSize:11, fontWeight:600, letterSpacing:'2px', textTransform:'uppercase', color:'rgba(255,255,255,0.3)' }}>Certified By</span>
        <div style={{ display:'flex', gap:18, alignItems:'center', flexWrap:'wrap' }}>
          {certs.map(c=>(
            <div key={c.name} style={{ display:'flex', alignItems:'center', gap:8 }}>
              <div style={{ width:32, height:32, borderRadius:'50%', background:'rgba(255,255,255,0.9)', display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden' }}>
                <Image src={c.src} alt={c.name} width={26} height={26} style={{ width:26, height:26, objectFit:'contain' }} />
              </div>
              <span style={{ fontFamily:'var(--font-oswald),sans-serif', fontSize:12, color:'rgba(255,255,255,0.35)', letterSpacing:'1px' }}>{c.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ maxWidth:1360, margin:'0 auto', padding:'18px 48px', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:12 }}>
        <p style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:13, color:'rgba(255,255,255,0.22)', margin:0 }}>© 2025 Indosphare Export. All rights reserved.</p>
        <div style={{ display:'flex', gap:6, alignItems:'center' }}>
          {[['privacy','Privacy Policy'],['terms','Terms of Service']].map(([type,label],i)=>(
            <span key={type} style={{ display:'flex', alignItems:'center', gap:6 }}>
              {i>0 && <span style={{ color:'rgba(255,255,255,0.12)', fontSize:12 }}>|</span>}
              <button onClick={()=>openLegal(type as 'privacy'|'terms')}
                style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:13, color:'rgba(255,255,255,0.3)', background:'transparent', border:'none', cursor:'pointer', padding:'4px 8px', transition:'color 0.2s' }}
                onMouseEnter={e=>(e.currentTarget.style.color='#F97316')}
                onMouseLeave={e=>(e.currentTarget.style.color='rgba(255,255,255,0.3)')}>
                {label}
              </button>
            </span>
          ))}
        </div>
      </div>
    </footer>
  )
}
