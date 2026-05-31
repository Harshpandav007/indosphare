'use client'
import { useEffect, useRef, useState } from 'react'

const stats = [
  { to:20, suffix:'+', label:'Product Variants' },
  { to:4,  suffix:'',  label:'Certifications'   },
  { to:99, suffix:'%', label:'Quality Assured'  },
]

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true
        const dur = 1800, start = performance.now()
        const step = (now: number) => {
          const p = Math.min((now - start) / dur, 1)
          setValue(Math.round((1 - Math.pow(1 - p, 3)) * to))
          if (p < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
      }
    }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [to])
  return <div ref={ref} style={{ fontFamily:'var(--font-oswald),sans-serif', fontSize:58, fontWeight:700, color:'#F97316', lineHeight:1, letterSpacing:'2px', marginBottom:10 }}>{value}{suffix}</div>
}

export default function StatsBand() {
  return (
    <div style={{ background:'#0E0E0E', borderTop:'1px solid rgba(232,96,10,0.1)', borderBottom:'1px solid rgba(232,96,10,0.1)' }}>
      <div style={{ maxWidth:1360, margin:'0 auto', padding:'0 48px', display:'grid', gridTemplateColumns:'repeat(3,1fr)' }}>
        {stats.map((s, i) => (
          <div key={s.label} style={{ padding:'52px 32px', textAlign:'center', borderRight: i < stats.length-1 ? '1px solid rgba(255,255,255,0.06)' : 'none', position:'relative', overflow:'hidden', transition:'background 0.25s', cursor:'default' }}
            onMouseEnter={e=>(e.currentTarget.style.background='rgba(232,96,10,0.04)')}
            onMouseLeave={e=>(e.currentTarget.style.background='transparent')}>
            <Counter to={s.to} suffix={s.suffix} />
            <div style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:11, color:'#666', textTransform:'uppercase', letterSpacing:'2.5px', fontWeight:500 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
