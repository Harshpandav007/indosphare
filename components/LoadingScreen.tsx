'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function LoadingScreen() {
  const [hidden, setHidden]   = useState(false)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const fadeTimer = setTimeout(() => setFadeOut(true), 2000)
    const hideTimer = setTimeout(() => {
      setHidden(true)
      document.body.style.overflow = ''
    }, 2600)
    return () => { clearTimeout(fadeTimer); clearTimeout(hideTimer) }
  }, [])

  if (hidden) return null

  return (
    <>
      <div
        id="loading-screen"
        style={{
          position: 'fixed', inset: 0, background: '#0A1628',
          zIndex: 9999, display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          transition: 'opacity 0.6s ease, visibility 0.6s ease',
          opacity: fadeOut ? 0 : 1,
          visibility: fadeOut ? 'hidden' : 'visible',
          pointerEvents: fadeOut ? 'none' : 'all',
        }}>

        {/* Rings container — must be position:relative with fixed size */}
        <div className="loader-rings">
          <div className="loader-ring" style={{ width:180, height:180, animationDelay:'0s' }} />
          <div className="loader-ring" style={{ width:140, height:140, animationDelay:'0.4s' }} />
          <div className="loader-ring" style={{ width:100, height:100, animationDelay:'0.8s' }} />
          {/* Logo circle — centered inside rings */}
          <div className="loader-logo-circle">
            <Image
              src="/images/logo.jpg"
              alt="Indosphare Export"
              width={58}
              height={58}
              style={{ borderRadius: '50%', objectFit: 'contain' }}
              priority
            />
          </div>
        </div>

        {/* Loading text */}
        <p className="loader-text">
          Loading <span>Excellence</span>
        </p>

        {/* Progress bar */}
        <div className="loader-bar-wrap">
          <div className="loader-bar" />
        </div>
      </div>

      {/* CSS — exact same as original HTML file */}
      <style>{`
        .loader-rings {
          position: relative;
          width: 180px;
          height: 180px;
          margin-bottom: 36px;
        }
        .loader-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.08);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: ringPulse 2.5s ease-in-out infinite;
        }
        .loader-logo-circle {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 32px rgba(232,96,10,0.3);
          z-index: 2;
        }
        .loader-text {
          font-family: 'Cormorant Garamond', serif !important;
          font-size: 22px !important;
          font-weight: 600 !important;
          font-style: italic !important;
          letter-spacing: 4px !important;
          color: rgba(255,255,255,0.8) !important;
          margin-bottom: 20px;
        }
        .loader-text span {
          color: #F97316 !important;
          font-style: normal !important;
        }
        .loader-bar-wrap {
          width: 220px;
          height: 2px;
          background: rgba(255,255,255,0.1);
          border-radius: 2px;
          overflow: hidden;
        }
        .loader-bar {
          height: 100%;
          background: linear-gradient(90deg, #E8600A, #F97316);
          border-radius: 2px;
          width: 0%;
          animation: loadBar 2.2s ease forwards;
        }
        @keyframes ringPulse {
          0%, 100% {
            opacity: 0.08;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.2;
            transform: translate(-50%, -50%) scale(1.04);
          }
        }
        @keyframes loadBar {
          0%   { width: 0%; }
          60%  { width: 75%; }
          100% { width: 100%; }
        }
      `}</style>
    </>
  )
}