import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const submissionMap = new Map<string, number[]>()
const RATE_LIMIT = 3
const RATE_WINDOW = 60000

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const times = (submissionMap.get(ip) ?? []).filter(t => now - t < RATE_WINDOW)
  if (times.length >= RATE_LIMIT) return true
  submissionMap.set(ip, [...times, now])
  return false
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function sanitize(str: string): string {
  return str.replace(/[<>]/g, '').trim().slice(0, 500)
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for') ?? 'unknown'
    if (isRateLimited(ip)) {
      return NextResponse.json({ success: false, error: 'Too many submissions. Please wait a moment.' }, { status: 429 })
    }

    const body = await req.json()
    const { full_name, company_name, email, phone, country, product_interest, quantity, message } = body

    if (!full_name || !company_name || !email || !country || !product_interest) {
      return NextResponse.json({ success: false, error: 'Please fill in all required fields.' }, { status: 400 })
    }
    if (!validateEmail(email)) {
      return NextResponse.json({ success: false, error: 'Please enter a valid email address.' }, { status: 400 })
    }

    const data = {
      full_name: sanitize(full_name),
      company_name: sanitize(company_name),
      email: sanitize(email).toLowerCase(),
      phone: sanitize(phone ?? ''),
      country: sanitize(country),
      product_interest: sanitize(product_interest),
      quantity: sanitize(quantity ?? ''),
      message: sanitize(message ?? ''),
      submitted_at: new Date().toISOString(),
      ip_address: ip,
      status: 'new',
    }

    // Save to Supabase
    try {
      const { createClient } = await import('@supabase/supabase-js')
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
      )
      await supabase.from('inquiries').insert([data])
    } catch (e) {
      console.error('Supabase error:', e)
    }

    // Send email
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD },
      })
      await transporter.sendMail({
        from: `"Indosphare Export Website" <${process.env.GMAIL_USER}>`,
        to: process.env.INQUIRY_RECEIVER_EMAIL,
        replyTo: data.email,
        subject: `New Inquiry: ${data.product_interest} — ${data.company_name} (${data.country})`,
        html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
          <div style="background:#E8600A;padding:24px;border-radius:8px 8px 0 0">
            <h2 style="color:#fff;margin:0">New Business Inquiry — Indosphare Export</h2>
            <p style="color:rgba(255,255,255,0.85);margin:6px 0 0;font-size:13px">${new Date().toLocaleString('en-IN',{timeZone:'Asia/Kolkata'})} IST</p>
          </div>
          <div style="background:#fff;padding:28px;border:1px solid #eee;border-top:none;border-radius:0 0 8px 8px">
            ${Object.entries({Name:data.full_name,Company:data.company_name,Email:data.email,Phone:data.phone||'—',Country:data.country,Product:data.product_interest,Quantity:data.quantity||'—',Message:data.message||'—'}).map(([k,v])=>`<p style="margin:0 0 12px"><strong style="color:#333">${k}:</strong> <span style="color:#555">${v}</span></p>`).join('')}
          </div>
        </div>`,
      })
    } catch (e) {
      console.error('Email error:', e)
    }

    return NextResponse.json({ success: true, message: 'Your inquiry has been received. We will get back to you within 24 hours.' })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ success: false, error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
