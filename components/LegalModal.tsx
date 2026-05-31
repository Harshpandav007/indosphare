'use client'
import { useEffect } from 'react'
import { useApp } from '@/lib/store'

const privacySections = [
  { h:null,     b:'Indosphare Export is committed to protecting your privacy. This Privacy Policy explains how we handle the information you provide when you contact us or submit a business inquiry through our website.' },
  { h:'1. Information We Collect', b:'When you submit a business inquiry, we collect basic contact and business details such as your name, company name, email address, phone number, country, and product requirements. This information is used solely to respond to your inquiry.' },
  { h:'2. How We Use Your Information', b:'The information you share with us is used only to communicate with you regarding your business inquiry, provide product information and quotations, and maintain records of our business correspondence.' },
  { h:'3. Data Protection', b:'We do not sell, share, or disclose your personal information to any third parties. All information shared with us is kept confidential and used only for the purpose of responding to your business inquiry.' },
  { h:'4. Cookies', b:'Our website may use basic cookies for website functionality. No personally identifiable information is collected through cookies.' },
  { h:'5. Contact Us', b:null, contact:true },
]

const termsSections = [
  { h:null,     b:'Welcome to the Indosphare Export website. By accessing and using this website, you agree to the following terms. Please read them before proceeding.' },
  { h:'1. Website Use', b:'This website is intended for business purposes — specifically for parties interested in sourcing dehydrated vegetables and agricultural products from India. All information provided on this website is for general business reference only.' },
  { h:'2. Business Inquiries', b:'Submitting an inquiry form on this website does not constitute a confirmed order or binding agreement. All business transactions are finalised through separate official communication, proforma invoices, and purchase agreements between both parties.' },
  { h:'3. Product Information', b:'Product specifications, availability, and pricing displayed on this website are subject to change. Final details are confirmed through direct communication with our team.' },
  { h:'4. Website Content', b:'All content on this website — including text, images, and the company logo — belongs to Indosphare Export. Please do not reproduce or use any content without prior permission.' },
  { h:'5. Changes to Terms', b:'We may update these terms from time to time. Continued use of the website means you accept any updated terms.' },
  { h:'6. Contact Us', b:null, contact:true },
]

export default function LegalModal({ type }: { type: 'privacy' | 'terms' }) {
  const { legalOpen, closeLegal } = useApp()
  const isOpen = legalOpen === type
  const title   = type === 'privacy' ? 'Privacy Policy' : 'Terms of Service'
  const sections = type === 'privacy' ? privacySections : termsSections

  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape' && isOpen) closeLegal() }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [isOpen, closeLegal])

  return (
    <div onClick={e=>{ if (e.target===e.currentTarget) closeLegal() }}
      style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.78)', zIndex:600, display:'flex', alignItems:'center', justifyContent:'center', padding:24, backdropFilter:'blur(8px)', transition:'opacity 0.3s', opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? 'all' : 'none' }}>
      <div style={{ background:'#fff', borderRadius:20, maxWidth:780, width:'100%', maxHeight:'88vh', overflowY:'auto', position:'relative', transition:'transform 0.35s', transform: isOpen ? 'none' : 'translateY(30px)', boxShadow:'0 40px 100px rgba(0,0,0,0.45)' }}>
        {/* Header */}
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'32px 40px 24px', borderBottom:'1px solid #ECEAE5', position:'sticky', top:0, background:'#fff', zIndex:10 }}>
          <div style={{ fontFamily:'var(--font-oswald),sans-serif', fontSize:24, fontWeight:700, color:'#050505', letterSpacing:'0.5px' }}>{title}</div>
          <button onClick={closeLegal}
            style={{ width:36, height:36, borderRadius:'50%', background:'#F5F3EF', border:'none', cursor:'pointer', fontSize:16, display:'flex', alignItems:'center', justifyContent:'center', transition:'all 0.2s' }}
            onMouseEnter={e=>{e.currentTarget.style.background='#E8600A';e.currentTarget.style.color='#fff'}}
            onMouseLeave={e=>{e.currentTarget.style.background='#F5F3EF';e.currentTarget.style.color='#050505'}}>✕</button>
        </div>
        {/* Body */}
        <div style={{ padding:'32px 40px 40px' }}>
          <p style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:12, color:'#aaa', marginBottom:24, paddingBottom:18, borderBottom:'1px solid #ECEAE5' }}>Last updated: January 2025</p>
          {sections.map((s, i) => (
            <div key={i}>
              {s.h && <h3 style={{ fontFamily:'var(--font-montserrat),sans-serif', fontWeight:900, fontSize:13.5, color:'#050505', textTransform:'uppercase', letterSpacing:'0.3px', margin:'24px 0 10px' }}>{s.h}</h3>}
              {s.b  && <p style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:14, color:'#6A6A65', lineHeight:1.85, fontWeight:300, marginBottom:12 }}>{s.b}</p>}
              {s.contact && (
                <p style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:14, color:'#6A6A65', lineHeight:1.85, fontWeight:300, marginBottom:12 }}>
                  For any questions, please reach out to us:<br/>
                  <strong style={{ color:'#050505', fontWeight:600 }}>Email:</strong>{' '}
                  <a href="mailto:info@indosphareexport.com" style={{ color:'#E8600A' }}>info@indosphareexport.com</a><br/>
                  <strong style={{ color:'#050505', fontWeight:600 }}>Phone:</strong>{' '}+91 91068 45134 &nbsp;|&nbsp; +91 63544 96611
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
