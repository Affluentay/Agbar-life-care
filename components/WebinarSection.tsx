'use client'
// components/WebinarSection.tsx

import { useState } from 'react'
import toast from 'react-hot-toast'

export default function WebinarSection() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', country: 'United Kingdom' })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const countries = [
    'United Kingdom', 'United States', 'Canada', 'Nigeria',
    'Germany', 'Australia', 'Ireland', 'Netherlands', 'Other',
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.firstName || !form.lastName || !form.email) {
      toast.error('Please fill in all fields.')
      return
    }
    setLoading(true)
    try {
      const res = await fetch('/api/webinar-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Registration failed.')
      setSubmitted(true)
      toast.success('Seat reserved! Check your email.')
    } catch (err: any) {
      toast.error(err.message || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="webinar"
      style={{
        padding: '140px 80px',
        background: 'var(--forest)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '96px',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative glow */}
      <div style={{
        position: 'absolute', top: '-200px', right: '-200px',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(196,94,30,0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Left — info */}
      <div className="reveal-left">
        <p className="eyebrow" style={{ color: 'var(--terra-light)' }}>Upcoming event</p>
        <h2 style={{
          fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 3.5vw, 48px)',
          fontWeight: 400, color: '#fff', lineHeight: 1.2, marginBottom: '24px',
        }}>
          <em style={{ fontStyle: 'italic', color: 'var(--terra-light)' }}>Understanding</em>{' '}
          Geriatric Care in Nigeria: A Guide for Diaspora Families
        </h2>
        <p style={{
          fontSize: '15px', fontWeight: 300, lineHeight: 1.9,
          color: 'rgba(255,255,255,0.6)', marginBottom: '36px',
        }}>
          A live, evidence-based session for families abroad who want to make informed decisions about elderly care back home. Nurse Patience and the clinical team guide you through care assessment, cultural considerations, and remote monitoring options.
        </p>

        <div style={{ display: 'flex', gap: '36px', marginBottom: '36px' }}>
          {[
            { label: 'Date', val: 'July 12, 2026' },
            { label: 'Time', val: '3:00 PM WAT' },
            { label: 'Format', val: 'Live + Q&A' },
          ].map(({ label, val }) => (
            <div key={label}>
              <div style={{ fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '4px' }}>{label}</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', color: '#fff' }}>{val}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div className="live-dot" />
          <span style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>
            Limited seats available
          </span>
        </div>
      </div>

      {/* Right — form */}
      <div className="reveal-right">
        <div style={{
          background: 'var(--ivory)', borderRadius: '4px', padding: '52px 48px',
        }}>
          {!submitted ? (
            <>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', fontWeight: 400, color: 'var(--charcoal)', marginBottom: '8px' }}>
                Reserve your free seat
              </h3>
              <p style={{ fontSize: '13px', fontWeight: 300, color: 'var(--muted)', marginBottom: '32px', lineHeight: 1.7 }}>
                Register in under 60 seconds. Confirmation and calendar invite sent immediately.
              </p>

              <form onSubmit={handleSubmit} noValidate>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '18px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '7px' }}>First name</label>
                    <input className="input" name="firstName" value={form.firstName} onChange={handleChange} placeholder="Adaeze" required />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '7px' }}>Last name</label>
                    <input className="input" name="lastName" value={form.lastName} onChange={handleChange} placeholder="Okonkwo" required />
                  </div>
                </div>

                <div style={{ marginBottom: '18px' }}>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '7px' }}>Email address</label>
                  <input className="input" name="email" type="email" value={form.email} onChange={handleChange} placeholder="adaeze@example.com" required />
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '7px' }}>Country of residence</label>
                  <select className="input" name="country" value={form.country} onChange={handleChange} style={{ cursor: 'pointer' }}>
                    {countries.map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>

                <button
                  type="submit"
                  className="btn btn-forest"
                  disabled={loading}
                  style={{ width: '100%', opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
                >
                  {loading ? 'Reserving your seat...' : 'Reserve my seat →'}
                </button>

                <p style={{ fontSize: '11px', color: 'var(--muted)', textAlign: 'center', marginTop: '14px', lineHeight: 1.6 }}>
                  No spam. Your data is protected and will never be sold.
                </p>
              </form>
            </>
          ) : (
            <div style={{ textAlign: 'center', padding: '32px 0' }}>
              <div style={{
                width: '60px', height: '60px', borderRadius: '50%',
                background: 'rgba(58,90,39,0.12)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 20px', fontSize: '26px', color: 'var(--forest)',
              }}>✓</div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '26px', fontWeight: 400, color: 'var(--charcoal)', marginBottom: '12px' }}>
                Seat reserved!
              </h3>
              <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.8 }}>
                A confirmation email is on its way. You've been added to our care community — see you on July 12th.
              </p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #webinar { grid-template-columns: 1fr !important; padding: 80px 24px !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  )
}
