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
      <div style={{ maxWidth:1360, margin:'0 auto', padding:'0 clamp(16px,4vw,48px)', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:8 }}>

        {/* Left — contact info — hide on mobile to avoid overflow */}
        <div style={{ display:'flex', alignItems:'center', gap:12, flexWrap:'wrap' }}>
          {[
            { href:'tel:+919106845134', label:'+91 91068 45134' },
            { href:'tel:+916354496611', label:'+91 63544 96611' },
            { href:'mailto:info@indosphareexport.com', label:'info@indosphareexport.com' },
          ].map((item,i) => (
            <div key={i} style={{ display:'flex', alignItems:'center', gap:6 }}>
              {i > 0 && <div style={{ width:1, height:11, background:'rgba(255,255,255,0.08)' }} />}
              <div style={{ width:3, height:3, background:'#E8600A', borderRadius:'50%', flexShrink:0 }} />
              <a href={item.href}
                style={{ fontSize:11, color:'#888', textDecoration:'none', fontFamily:'var(--font-inter),sans-serif', whiteSpace:'nowrap' }}
                onMouseEnter={e=>(e.currentTarget.style.color='#F97316')}
                onMouseLeave={e=>(e.currentTarget.style.color='#888')}>
                {item.label}
              </a>
            </div>
          ))}
        </div>

        {/* Right — socials + hours */}
        <div style={{ display:'flex', alignItems:'center', gap:14 }}>
          <div style={{ display:'flex', gap:8 }}>
            {socials.map(s => (
              <a key={s.alt} href={s.href} target="_blank" rel="noopener noreferrer" title={s.alt}
                style={{ width:28, height:28, borderRadius:'50%', border:'1.5px solid rgba(255,255,255,0.18)', background:'rgba(255,255,255,0.06)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, transition:'all 0.25s' }}
                onMouseEnter={e=>{ const el=e.currentTarget; el.style.borderColor='rgba(34,197,94,0.7)'; el.style.boxShadow='0 0 0 3px rgba(34,197,94,0.18)'; el.style.transform='translateY(-2px)' }}
                onMouseLeave={e=>{ const el=e.currentTarget; el.style.borderColor='rgba(255,255,255,0.18)'; el.style.boxShadow='none'; el.style.transform='none' }}>
                <Image src={s.src} alt={s.alt} width={20} height={20} style={{ borderRadius:'50%', objectFit:'contain', width:20, height:20 }} />
              </a>
            ))}
          </div>
          <span style={{ fontSize:11, color:'#888', fontFamily:'var(--font-inter),sans-serif', whiteSpace:'nowrap' }}>
            Mon – Sun | 9AM – 8PM IST
          </span>
        </div>
      </div>

      {/* Mobile-only: show phone number prominently */}
      <style>{`
        @media (max-width: 640px) {
          .tb-left { display: none !important; }
          .tb-right span { display: none !important; }
        }
      `}</style>
    </div>
  )
}