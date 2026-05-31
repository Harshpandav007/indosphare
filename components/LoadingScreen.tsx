'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function LoadingScreen() {
  const [hidden, setHidden] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const fadeTimer = setTimeout(() => setFadeOut(true), 2000)
    const hideTimer = setTimeout(() => {
      setHidden(true)
      document.body.style.overflow = ''
    }, 2500)
    return () => { clearTimeout(fadeTimer); clearTimeout(hideTimer) }
  }, [])

  if (hidden) return null

  return (
    <div style={{
      position: 'fixed', inset: 0, background: '#0A1628', zIndex: 9999,
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      transition: 'opacity 0.5s ease',
      opacity: fadeOut ? 0 : 1,
      pointerEvents: fadeOut ? 'none' : 'all',
    }}>
      {/* Rings */}
      <div style={{ position: 'relative', width: 180, height: 180, marginBottom: 36 }}>
        {[180, 140, 100].map((size, i) => (
          <div key={i} style={{
            position: 'absolute', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)',
            width: size, height: size, top: '50%', left: '50%',
            animation: `ringPulse 2.5s ease-in-out ${i * 0.4}s infinite`,
          }} />
        ))}
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
          width: 72, height: 72, borderRadius: '50%', background: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 0 32px rgba(232,96,10,0.3)',
        }}>
          <Image src="/images/logo.jpg" alt="Indosphare Export" width={58} height={58}
                 style={{ borderRadius: '50%', objectFit: 'contain' }} />
        </div>
      </div>

      <p style={{
        fontFamily: 'var(--font-cormorant), serif', fontStyle: 'italic',
        fontSize: 22, fontWeight: 600, color: 'rgba(255,255,255,0.8)',
        letterSpacing: 4, marginBottom: 20,
      }}>
        Loading{' '}
        <em style={{ fontStyle: 'normal', color: '#F97316' }}>Excellence</em>
      </p>

      <div style={{ width: 220, height: 2, background: 'rgba(255,255,255,0.1)', borderRadius: 2, overflow: 'hidden' }}>
        <div style={{
          height: '100%', background: 'linear-gradient(90deg,#E8600A,#F97316)',
          animation: 'loadBar 2.2s ease forwards',
        }} />
      </div>

      <style>{`
        @keyframes ringPulse {
          0%,100%{opacity:.08;transform:translate(-50%,-50%) scale(1)}
          50%{opacity:.2;transform:translate(-50%,-50%) scale(1.04)}
        }
        @keyframes loadBar { 0%{width:0%} 60%{width:75%} 100%{width:100%} }
      `}</style>
    </div>
  )
}
