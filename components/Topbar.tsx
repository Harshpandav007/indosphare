'use client'
import Image from 'next/image'

const socials = [
  { href:'https://www.facebook.com/share/1BGQRCKGSZ/', src:'/images/social/facebook.webp', alt:'Facebook' },
  { href:'https://www.instagram.com/indosphare.export?igsh=b2cwOG9oZXQzeDM4', src:'/images/social/instagram.avif', alt:'Instagram' },
  { href:'https://www.linkedin.com/company/112805311/', src:'/images/social/linkedin.png', alt:'LinkedIn' },
]

export default function Topbar() {
  return (
    <div style={{ background:'#000', borderBottom:'1px solid rgba(232,96,10,0.18)', padding:'9px 0' }}>
      <div style={{ maxWidth:1360, margin:'0 auto', padding:'0 48px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <div style={{ display:'flex', alignItems:'center', gap:20 }}>
          {[
            { href:'tel:+919106845134', label:'+91 91068 45134' },
            { href:'tel:+916354496611', label:'+91 63544 96611' },
            { href:'mailto:info@indosphareexport.com', label:'info@indosphareexport.com' },
          ].map((item, i) => (
            <div key={i} style={{ display:'flex', alignItems:'center', gap:7 }}>
              {i > 0 && <div style={{ width:1, height:12, background:'rgba(255,255,255,0.08)' }} />}
              <div style={{ width:3, height:3, background:'#E8600A', borderRadius:'50%', flexShrink:0 }} />
              <a href={item.href} style={{ fontSize:12, color:'#888', textDecoration:'none', fontFamily:'var(--font-inter),sans-serif' }}
                 onMouseEnter={e=>(e.currentTarget.style.color='#F97316')}
                 onMouseLeave={e=>(e.currentTarget.style.color='#888')}>
                {item.label}
              </a>
            </div>
          ))}
        </div>
        <div style={{ display:'flex', alignItems:'center', gap:18 }}>
          <div style={{ display:'flex', gap:10 }}>
            {socials.map(s => (
              <a key={s.alt} href={s.href} target="_blank" rel="noopener noreferrer" title={s.alt}
                 style={{ width:34, height:34, borderRadius:'50%', border:'2px solid rgba(255,255,255,0.18)', background:'rgba(255,255,255,0.06)', display:'flex', alignItems:'center', justifyContent:'center', transition:'all 0.25s' }}
                 onMouseEnter={e=>{ const el=e.currentTarget; el.style.borderColor='rgba(34,197,94,0.7)'; el.style.boxShadow='0 0 0 3px rgba(34,197,94,0.18),0 0 12px rgba(34,197,94,0.22)'; el.style.transform='translateY(-2px)' }}
                 onMouseLeave={e=>{ const el=e.currentTarget; el.style.borderColor='rgba(255,255,255,0.18)'; el.style.boxShadow='none'; el.style.transform='none' }}>
                <Image src={s.src} alt={s.alt} width={26} height={26} style={{ borderRadius:'50%', objectFit:'contain', width:26, height:26 }} />
              </a>
            ))}
          </div>
          <div style={{ width:1, height:12, background:'rgba(255,255,255,0.08)' }} />
          <span style={{ fontSize:12, color:'#888', fontFamily:'var(--font-inter),sans-serif' }}>
            Mon – Sun &nbsp;|&nbsp; 9:00 AM – 8:00 PM IST
          </span>
        </div>
      </div>
    </div>
  )
}
