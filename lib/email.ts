// lib/email.ts
// Sends transactional emails via SMTP (Gmail App Password or Brevo free tier)
// Called from API routes only (server-side)

import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT) || 587,
  secure: false, // STARTTLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

// ── Webinar confirmation email to the registrant ──
export async function sendWebinarConfirmation(to: string, firstName: string) {
  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to,
    subject: 'Your seat is reserved — Àgbàr Life Care Webinar',
    html: `
      <div style="font-family:'Georgia',serif;max-width:560px;margin:0 auto;color:#1a1a14">
        <div style="background:#3a5a27;padding:32px 40px;text-align:center">
          <h1 style="color:#fff;font-size:28px;font-weight:400;margin:0;letter-spacing:0.02em">Àgbàr Life Care</h1>
          <p style="color:rgba(255,255,255,0.6);font-size:12px;letter-spacing:0.12em;text-transform:uppercase;margin:8px 0 0">Geriatric Care Ecosystem</p>
        </div>
        <div style="padding:48px 40px;background:#faf7f0;border:1px solid #ddd0bb;border-top:none">
          <p style="font-size:13px;letter-spacing:0.12em;text-transform:uppercase;color:#c45e1e;margin-bottom:16px">Your seat is confirmed</p>
          <h2 style="font-size:32px;font-weight:400;color:#1a1a14;line-height:1.2;margin-bottom:24px">
            Welcome, ${firstName}.<br><em style="font-style:italic;color:#3a5a27">We're glad you're here.</em>
          </h2>
          <p style="font-size:15px;line-height:1.9;color:#5a5448;margin-bottom:32px">
            You've successfully registered for our upcoming webinar:<br>
            <strong style="color:#1a1a14">Understanding Geriatric Care in Nigeria: A Guide for Diaspora Families</strong>
          </p>
          <div style="background:#fff;border:1px solid #ddd0bb;border-left:3px solid #c45e1e;padding:24px 28px;margin-bottom:32px">
            <p style="margin:0 0 8px;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#c45e1e">Event details</p>
            <p style="margin:0;font-size:16px;color:#1a1a14">📅 July 12, 2026 &nbsp;·&nbsp; 3:00 PM WAT</p>
            <p style="margin:8px 0 0;font-size:14px;color:#5a5448">Live online · Zoom link will be sent 24 hours before</p>
          </div>
          <p style="font-size:14px;line-height:1.8;color:#5a5448">
            Nurse Patience and our clinical team will guide you through evidence-based care assessment, cultural considerations, and remote monitoring options for your loved one in Nigeria.
          </p>
          <p style="font-size:13px;color:#7a5c3a;margin-top:32px;padding-top:24px;border-top:1px solid #ddd0bb">
            Questions? Reply to this email or WhatsApp us. We're here for you.<br>
            <strong style="color:#3a5a27">— The Àgbàr Life Care Team</strong>
          </p>
        </div>
      </div>
    `,
  })
}

// ── Internal alert to Itunu (CRM manager) when someone registers ──
export async function sendInternalWebinarAlert(
  registrantName: string,
  registrantEmail: string,
  country: string
) {
  const itunuEmail = process.env.EMAIL_USER // update to Itunu's actual email in production

  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: itunuEmail,
    subject: `🎉 New webinar registration — ${registrantName}`,
    html: `
      <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:32px">
        <p style="font-size:12px;letter-spacing:0.1em;text-transform:uppercase;color:#c45e1e">New registration</p>
        <h2 style="font-size:24px;color:#1a1a14;margin:8px 0 24px">${registrantName} just signed up for the webinar</h2>
        <table style="width:100%;border-collapse:collapse;font-size:14px">
          <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#5a5448">Name</td><td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:500">${registrantName}</td></tr>
          <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#5a5448">Email</td><td style="padding:10px 0;border-bottom:1px solid #eee">${registrantEmail}</td></tr>
          <tr><td style="padding:10px 0;color:#5a5448">Country</td><td style="padding:10px 0">${country}</td></tr>
        </table>
        <p style="font-size:13px;color:#7a5c3a;margin-top:24px">👉 Add to CRM and webinar sequence immediately.</p>
      </div>
    `,
  })
}
