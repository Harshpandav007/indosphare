'use client'
import { useState, FormEvent } from 'react'

const products = ['Dehydrated Red Onion','Dehydrated White Onion','Dehydrated Pink Onion','Dehydrated Garlic','Multiple Products','Other']

const initialForm = { full_name:'', company_name:'', email:'', phone:'', country:'', product_interest:'', quantity:'', message:'' }

const inputStyle: React.CSSProperties = { width:'100%', padding:'12px 14px', border:'1.5px solid #ECEAE5', borderRadius:9, fontSize:14, fontFamily:'var(--font-inter),sans-serif', color:'#050505', background:'#F5F3EF', outline:'none', transition:'border-color 0.2s,background 0.2s', boxSizing:'border-box' }
const labelStyle: React.CSSProperties = { fontSize:10, fontWeight:700, letterSpacing:'2.5px', textTransform:'uppercase' as const, color:'#3A3A35', fontFamily:'var(--font-inter),sans-serif', display:'block', marginBottom:6 }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')
  const [msg, setMsg] = useState('')

  const set = (k: keyof typeof initialForm) => (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) => setForm(f=>({...f,[k]:e.target.value}))

  const submit = async (e: FormEvent) => {
    e.preventDefault(); setStatus('loading'); setMsg('')
    try {
      const res = await fetch('/api/contact', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(form) })
      const data = await res.json()
      if (data.success) { setStatus('success'); setMsg(data.message); setForm(initialForm) }
      else { setStatus('error'); setMsg(data.error ?? 'Something went wrong.') }
    } catch { setStatus('error'); setMsg('Network error. Please try again.') }
  }

  return (
    <section id="contact" style={{ background:'#F5F3EF', padding:'96px 0' }}>
      <div style={{ maxWidth:1360, margin:'0 auto', padding:'0 48px' }}>
        <div style={{ maxWidth:520, marginBottom:48 }}>
          <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:14 }}>
            <div style={{ width:26, height:1, background:'#E8600A' }} />
            <span style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:10.5, fontWeight:700, letterSpacing:'3.5px', textTransform:'uppercase', color:'#E8600A' }}>Get In Touch</span>
          </div>
          <h2 style={{ fontFamily:'var(--font-montserrat),sans-serif', fontWeight:900, fontSize:'clamp(26px,2.8vw,40px)', color:'#050505', lineHeight:1.1, letterSpacing:-1, margin:0 }}>Send Us a Business Inquiry</h2>
          <div style={{ width:42, height:'2.5px', background:'linear-gradient(90deg,#E8600A,#F97316)', borderRadius:2, marginTop:18 }} />
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1.4fr', gap:64, alignItems:'start' }}>
          {/* Left info */}
          <div>
            <p style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:15, color:'#6A6A65', lineHeight:1.9, fontWeight:300, marginBottom:28 }}>We welcome inquiries from importers, wholesalers, distributors, and food manufacturers globally. We respond within 24 business hours.</p>
            {[
              { icon:'📞', label:'Phone / WhatsApp', lines:['+91 91068 45134','+91 63544 96611'] },
              { icon:'✉️', label:'Email', lines:['info@indosphareexport.com'] },
              { icon:'🕐', label:'Business Hours', lines:['Monday – Sunday: 9:00 AM – 8:00 PM IST'] },
            ].map(item=>(
              <div key={item.label} style={{ display:'flex', alignItems:'flex-start', gap:13, marginBottom:18 }}>
                <div style={{ width:42, height:42, borderRadius:11, background:'#FFF4ED', border:'1px solid rgba(232,96,10,0.14)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:17, flexShrink:0 }}>{item.icon}</div>
                <div>
                  <strong style={{ fontFamily:'var(--font-oswald),sans-serif', fontSize:12, fontWeight:600, textTransform:'uppercase', letterSpacing:'0.8px', color:'#050505', display:'block', marginBottom:3 }}>{item.label}</strong>
                  {item.lines.map(l=><div key={l} style={{ fontFamily:'var(--font-inter),sans-serif', fontSize:14, color:'#6A6A65' }}>{l}</div>)}
                </div>
              </div>
            ))}
            <a href="https://wa.me/919106845134" target="_blank" rel="noopener noreferrer"
              style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:9, background:'#25D366', color:'#fff', padding:'13px 22px', borderRadius:10, fontFamily:'var(--font-oswald),sans-serif', fontSize:13, fontWeight:600, textDecoration:'none', marginTop:10, letterSpacing:'1px', textTransform:'uppercase', transition:'background 0.2s' }}
              onMouseEnter={e=>(e.currentTarget.style.background='#128C7E')}
              onMouseLeave={e=>(e.currentTarget.style.background='#25D366')}>Chat on WhatsApp</a>
          </div>

          {/* Right form */}
          <div style={{ background:'#fff', borderRadius:20, padding:40, border:'1px solid rgba(0,0,0,0.07)', boxShadow:'0 8px 40px rgba(0,0,0,0.06)' }}>
            <div style={{ fontFamily:'var(--font-cormorant),serif', fontStyle:'italic', fontSize:28, fontWeight:700, color:'#050505', marginBottom:24, paddingBottom:20, borderBottom:'1px solid #ECEAE5' }}>Business Inquiry Form</div>
            {status==='success' && <div style={{ marginBottom:16, padding:14, background:'#f0fdf4', border:'1px solid #bbf7d0', borderRadius:10, color:'#15803d', fontSize:14, fontWeight:500 }}>✓ {msg}</div>}
            {status==='error'   && <div style={{ marginBottom:16, padding:14, background:'#fef2f2', border:'1px solid #fecaca', borderRadius:10, color:'#dc2626', fontSize:14, fontWeight:500 }}>⚠ {msg}</div>}
            <form onSubmit={submit}>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:13 }}>
                <div style={{ marginBottom:14 }}><label style={labelStyle}>Full Name *</label><input style={inputStyle} placeholder="Your full name" value={form.full_name} onChange={set('full_name')} required onFocus={e=>{e.currentTarget.style.borderColor='#E8600A';e.currentTarget.style.background='#fff'}} onBlur={e=>{e.currentTarget.style.borderColor='#ECEAE5';e.currentTarget.style.background='#F5F3EF'}}/></div>
                <div style={{ marginBottom:14 }}><label style={labelStyle}>Company Name *</label><input style={inputStyle} placeholder="Your company" value={form.company_name} onChange={set('company_name')} required onFocus={e=>{e.currentTarget.style.borderColor='#E8600A';e.currentTarget.style.background='#fff'}} onBlur={e=>{e.currentTarget.style.borderColor='#ECEAE5';e.currentTarget.style.background='#F5F3EF'}}/></div>
              </div>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:13 }}>
                <div style={{ marginBottom:14 }}><label style={labelStyle}>Email Address *</label><input type="email" style={inputStyle} placeholder="your@email.com" value={form.email} onChange={set('email')} required onFocus={e=>{e.currentTarget.style.borderColor='#E8600A';e.currentTarget.style.background='#fff'}} onBlur={e=>{e.currentTarget.style.borderColor='#ECEAE5';e.currentTarget.style.background='#F5F3EF'}}/></div>
                <div style={{ marginBottom:14 }}><label style={labelStyle}>Phone / WhatsApp</label><input type="tel" style={inputStyle} placeholder="+1 234 567 8900" value={form.phone} onChange={set('phone')} onFocus={e=>{e.currentTarget.style.borderColor='#E8600A';e.currentTarget.style.background='#fff'}} onBlur={e=>{e.currentTarget.style.borderColor='#ECEAE5';e.currentTarget.style.background='#F5F3EF'}}/></div>
              </div>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:13 }}>
                <div style={{ marginBottom:14 }}><label style={labelStyle}>Country *</label><input style={inputStyle} placeholder="Your country" value={form.country} onChange={set('country')} required onFocus={e=>{e.currentTarget.style.borderColor='#E8600A';e.currentTarget.style.background='#fff'}} onBlur={e=>{e.currentTarget.style.borderColor='#ECEAE5';e.currentTarget.style.background='#F5F3EF'}}/></div>
                <div style={{ marginBottom:14 }}><label style={labelStyle}>Product Interest *</label>
                  <select style={inputStyle} value={form.product_interest} onChange={set('product_interest')} required onFocus={e=>{e.currentTarget.style.borderColor='#E8600A';e.currentTarget.style.background='#fff'}} onBlur={e=>{e.currentTarget.style.borderColor='#ECEAE5';e.currentTarget.style.background='#F5F3EF'}}>
                    <option value="">Select product</option>
                    {products.map(p=><option key={p}>{p}</option>)}
                  </select>
                </div>
              </div>
              <div style={{ marginBottom:14 }}><label style={labelStyle}>Estimated Quantity</label><input style={inputStyle} placeholder="e.g. 5 MT per month" value={form.quantity} onChange={set('quantity')} onFocus={e=>{e.currentTarget.style.borderColor='#E8600A';e.currentTarget.style.background='#fff'}} onBlur={e=>{e.currentTarget.style.borderColor='#ECEAE5';e.currentTarget.style.background='#F5F3EF'}}/></div>
              <div style={{ marginBottom:16 }}><label style={labelStyle}>Message / Requirements</label><textarea style={{ ...inputStyle, minHeight:104, resize:'vertical' }} placeholder="Describe your requirements, packaging preferences, delivery destination..." value={form.message} onChange={set('message')} onFocus={e=>{e.currentTarget.style.borderColor='#E8600A';e.currentTarget.style.background='#fff'}} onBlur={e=>{e.currentTarget.style.borderColor='#ECEAE5';e.currentTarget.style.background='#F5F3EF'}} /></div>
              <button type="submit" disabled={status==='loading'}
                style={{ width:'100%', padding:'14px', background: status==='loading' ? '#F97316' : '#E8600A', color:'#fff', border:'none', borderRadius:9, fontFamily:'var(--font-oswald),sans-serif', fontSize:14, fontWeight:700, letterSpacing:'2px', textTransform:'uppercase', cursor: status==='loading' ? 'not-allowed' : 'pointer', transition:'all 0.2s', boxShadow:'0 4px 16px rgba(232,96,10,0.25)' }}
                onMouseEnter={e=>{ if(status!=='loading') e.currentTarget.style.background='#B84A06' }}
                onMouseLeave={e=>{ if(status!=='loading') e.currentTarget.style.background='#E8600A' }}>
                {status==='loading' ? 'Sending...' : 'Send Inquiry'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
