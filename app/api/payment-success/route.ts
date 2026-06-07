export const dynamic = 'force-dynamic'

import { NextRequest, NextResponse } from 'next/server'
import { adminDb } from '@/lib/firebase-admin'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { firstName, lastName, email, phone, packageName, amount, txRef, status } = body

    if (status !== 'successful') {
      return NextResponse.json({ error: 'Payment not successful' }, { status: 400 })
    }

    const db = adminDb()

    // ── Save client to Firebase ──
    await db.collection('clients').add({
      firstName,
      lastName,
      fullName: `${firstName} ${lastName}`,
      email: email.toLowerCase(),
      phone,
      packageName,
      amount,
      txRef,
      status: 'active',
      paidAt: new Date().toISOString(),
      addedToCRM: false,
      portalAccess: true,
    })

    // ── Send receipt to client ──
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: `Payment confirmed — ${packageName} · Àgbàr Life Care`,
      html: `
        <div style="font-family:'Georgia',serif;max-width:560px;margin:0 auto;color:#1a1a14">
          <div style="background:#3a5a27;padding:32px 40px;text-align:center">
            <h1 style="color:#fff;font-size:28px;font-weight:400;margin:0">Àgbàr Life Care</h1>
          </div>
          <div style="padding:48px 40px;background:#faf7f0;border:1px solid #ddd0bb;border-top:none">
            <p style="font-size:13px;letter-spacing:0.12em;text-transform:uppercase;color:#c45e1e;margin-bottom:16px">Payment confirmed</p>
            <h2 style="font-size:32px;font-weight:400;color:#1a1a14;margin-bottom:24px">
              Welcome, ${firstName}.<br><em style="font-style:italic;color:#3a5a27">You're now part of Àgbàr.</em>
            </h2>
            <div style="background:#fff;border:1px solid #ddd0bb;border-left:3px solid #c45e1e;padding:24px 28px;margin-bottom:32px">
              <p style="margin:0 0 8px;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#c45e1e">Receipt</p>
              <p style="margin:4px 0;font-size:15px;color:#1a1a14"><strong>Package:</strong> ${packageName}</p>
              <p style="margin:4px 0;font-size:15px;color:#1a1a14"><strong>Amount:</strong> ₦${amount.toLocaleString()}</p>
              <p style="margin:4px 0;font-size:15px;color:#1a1a14"><strong>Reference:</strong> ${txRef}</p>
              <p style="margin:4px 0;font-size:15px;color:#1a1a14"><strong>Date:</strong> ${new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
            </div>
            <p style="font-size:14px;line-height:1.8;color:#5a5448">
              Our clinical team has been notified and will be in touch within 24 hours to begin your care setup. Your Diaspora Bridge portal access will be activated shortly.
            </p>
            <p style="font-size:13px;color:#7a5c3a;margin-top:32px;padding-top:24px;border-top:1px solid #ddd0bb">
              <strong style="color:#3a5a27">— The Àgbàr Life Care Team</strong>
            </p>
          </div>
        </div>
      `,
    })

    // ── Notify clinical team ──
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_USER,
      subject: `🎉 New client payment — ${firstName} ${lastName} · ${packageName}`,
      html: `
        <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:32px">
          <p style="font-size:12px;letter-spacing:0.1em;text-transform:uppercase;color:#c45e1e">New paying client</p>
          <h2 style="font-size:24px;color:#1a1a14;margin:8px 0 24px">${firstName} ${lastName} just subscribed</h2>
          <table style="width:100%;border-collapse:collapse;font-size:14px">
            <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#5a5448">Package</td><td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:500">${packageName}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#5a5448">Amount</td><td style="padding:10px 0;border-bottom:1px solid #eee">₦${amount.toLocaleString()}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#5a5448">Email</td><td style="padding:10px 0;border-bottom:1px solid #eee">${email}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#5a5448">Phone</td><td style="padding:10px 0;border-bottom:1px solid #eee">${phone}</td></tr>
            <tr><td style="padding:10px 0;color:#5a5448">Reference</td><td style="padding:10px 0">${txRef}</td></tr>
          </table>
          <p style="font-size:13px;color:#7a5c3a;margin-top:24px">👉 Contact client within 24 hours to begin care setup.</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true }, { status: 201 })

  } catch (err) {
    console.error('[PAYMENT SUCCESS ERROR]', err)
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}