'use client'
// app/contact/page.tsx

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PaymentModal from '@/components/PaymentModal'

export default function ContactPage() {
  const [modal, setModal] = useState<{ open: boolean; name: string; price: string }>({
    open: false, name: '', price: '',
  })
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '',
    phone: '', country: 'United Kingdom', message: '',
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const countries = [
    'United Kingdom', 'United States', 'Canada', 'Nigeria',
    'Germany', 'Australia', 'Ireland', 'Netherlands', 'Other',
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (!form.firstName || !form.email || !form.message) {
      setError('Please fill in all required fields.')
      return
    }
    setLoading(true)
    // Simulate submission — replace with real API route later
    await new Promise(r => setTimeout(r, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '13px 16px',
    border: '1px solid var(--sand)', background: '#fff',
    color: 'var(--charcoal)', fontFamily: 'var(--font-sans)',
    fontSize: '14px', borderRadius: '2px', outline: 'none',
    transition: 'border-color 0.2s',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block', fontSize: '11px', fontWeight: 500,
    letterSpacing: '0.1em', textTransform: 'uppercase' as const,
    color: 'var(--muted)', marginBottom: '7px',
  }

  return (
    <>
      <Navbar onBookClick={() => setModal({ open: true, name: 'Nuru Oba', price: '₦120,000/cycle' })} />

      {/* Hero */}
      <div style={{
        background: 'var(--forest-dark)',
        padding: '160px 80px 100px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 50% 60% at 80% 50%, rgba(196,94,30,0.15) 0%, transparent 70%)',
        }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '600px' }}>
          <p style={{
            fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em',
            textTransform: 'uppercase', color: 'var(--terra-light)', marginBottom: '20px',
          }}>Get in touch</p>
          <h1 style={{
            fontFamily: 'var(--font-serif)', fontSize: 'clamp(40px, 5vw, 64px)',
            fontWeight: 400, color: '#fff', lineHeight: 1.1, marginBottom: '24px',
          }}>
            We are here<br />
            <em style={{ fontStyle: 'italic', color: 'var(--terra-light)' }}>for your family</em>
          </h1>
          <p style={{
            fontSize: '17px', fontWeight: 300, lineHeight: 1.9,
            color: 'rgba(255,255,255,0.6)', maxWidth: '480px',
          }}>
            Whether you have questions about our packages, need guidance on the right care plan, or just want to talk — our team responds within 24 hours.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1.4fr',
        gap: '0', background: '#fff',
      }}>
        {/* Left — contact info */}
        <div style={{
          padding: '80px',
          background: 'var(--cream)',
          borderRight: '1px solid var(--sand)',
        }}>
          <h2 style={{
            fontFamily: 'var(--font-serif)', fontSize: '28px',
            fontWeight: 400, color: 'var(--charcoal)', marginBottom: '40px',
          }}>Contact information</h2>

          {[
            {
              label: 'Email',
              val: 'hello@agbarlifecare.com',
              sub: 'We respond within 24 hours',
            },
            {
              label: 'WhatsApp',
              val: '+234 000 000 0000',
              sub: 'Available Mon–Sat, 8am–8pm WAT',
            },
            {
              label: 'Location',
              val: 'Benin City, Edo State',
              sub: 'Nigeria — serving diaspora families worldwide',
            },
          ].map(item => (
            <div key={item.label} style={{
              marginBottom: '36px', paddingBottom: '36px',
              borderBottom: '1px solid var(--sand)',
            }}>
              <p style={{
                fontSize: '10px', fontWeight: 500, letterSpacing: '0.14em',
                textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '8px',
              }}>{item.label}</p>
              <p style={{
                fontFamily: 'var(--font-serif)', fontSize: '18px',
                color: 'var(--charcoal)', marginBottom: '4px',
              }}>{item.val}</p>
              <p style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 300 }}>
                {item.sub}
              </p>
            </div>
          ))}

          {/* Quick links */}
          <div>
            <p style={{
              fontSize: '10px', fontWeight: 500, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '16px',
            }}>Quick links</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'View care packages', href: '/packages' },
                { label: 'Reserve webinar seat', href: '/webinar' },
                { label: 'About Àgbàr Life Care', href: '/about' },
              ].map(link => (
                <a key={link.label} href={link.href} style={{
                  fontSize: '14px', fontWeight: 300, color: 'var(--forest)',
                  textDecoration: 'none', display: 'flex',
                  alignItems: 'center', gap: '8px', transition: 'gap 0.2s',
                }}>
                  → {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div style={{ padding: '80px' }}>
          {!submitted ? (
            <>
              <h2 style={{
                fontFamily: 'var(--font-serif)', fontSize: '28px',
                fontWeight: 400, color: 'var(--charcoal)', marginBottom: '8px',
              }}>Send us a message</h2>
              <p style={{
                fontSize: '14px', fontWeight: 300, color: 'var(--muted)',
                marginBottom: '40px', lineHeight: 1.7,
              }}>
                Tell us about your situation and we'll get back to you with guidance tailored to your family's needs.
              </p>

              <form onSubmit={handleSubmit} noValidate>
                <div style={{
                  display: 'grid', gridTemplateColumns: '1fr 1fr',
                  gap: '16px', marginBottom: '16px',
                }}>
                  <div>
                    <label style={labelStyle}>First name *</label>
                    <input style={inputStyle} name="firstName"
                      value={form.firstName} onChange={handleChange}
                      placeholder="Adaeze" required />
                  </div>
                  <div>
                    <label style={labelStyle}>Last name</label>
                    <input style={inputStyle} name="lastName"
                      value={form.lastName} onChange={handleChange}
                      placeholder="Okonkwo" />
                  </div>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label style={labelStyle}>Email address *</label>
                  <input style={inputStyle} name="email" type="email"
                    value={form.email} onChange={handleChange}
                    placeholder="adaeze@example.com" required />
                </div>

                <div style={{
                  display: 'grid', gridTemplateColumns: '1fr 1fr',
                  gap: '16px', marginBottom: '16px',
                }}>
                  <div>
                    <label style={labelStyle}>Phone number</label>
                    <input style={inputStyle} name="phone" type="tel"
                      value={form.phone} onChange={handleChange}
                      placeholder="+44 7700 000000" />
                  </div>
                  <div>
                    <label style={labelStyle}>Country</label>
                    <select style={{ ...inputStyle, cursor: 'pointer' }}
                      name="country" value={form.country} onChange={handleChange}>
                      {countries.map(c => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: '28px' }}>
                  <label style={labelStyle}>Your message *</label>
                  <textarea
                    style={{
                      ...inputStyle, resize: 'vertical',
                      minHeight: '140px', lineHeight: 1.7,
                    } as React.CSSProperties}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your loved one and what kind of care you're looking for..."
                    required
                  />
                </div>

                {error && (
                  <p style={{
                    fontSize: '13px', color: 'var(--terra)',
                    marginBottom: '16px',
                  }}>{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    width: '100%', padding: '16px',
                    background: 'var(--forest)', color: '#fff',
                    fontFamily: 'var(--font-sans)', fontSize: '13px',
                    fontWeight: 500, letterSpacing: '0.08em',
                    textTransform: 'uppercase', border: 'none',
                    borderRadius: '2px',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    opacity: loading ? 0.7 : 1, transition: 'all 0.2s',
                  }}
                >
                  {loading ? 'Sending...' : 'Send message →'}
                </button>

                <p style={{
                  fontSize: '11px', color: 'var(--muted)',
                  textAlign: 'center', marginTop: '14px', lineHeight: 1.6,
                }}>
                  We respond within 24 hours. Your data is protected.
                </p>
              </form>
            </>
          ) : (
            <div style={{ textAlign: 'center', padding: '64px 0' }}>
              <div style={{
                width: '64px', height: '64px', borderRadius: '50%',
                background: 'rgba(58,90,39,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 24px', fontSize: '28px', color: 'var(--forest)',
              }}>✓</div>
              <h3 style={{
                fontFamily: 'var(--font-serif)', fontSize: '28px',
                fontWeight: 400, color: 'var(--charcoal)', marginBottom: '12px',
              }}>Message received!</h3>
              <p style={{
                fontSize: '14px', fontWeight: 300, color: 'var(--muted)',
                lineHeight: 1.8, maxWidth: '360px', margin: '0 auto',
              }}>
                Thank you for reaching out. A member of our team will respond within 24 hours.
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />

      <PaymentModal
        isOpen={modal.open}
        onClose={() => setModal(prev => ({ ...prev, open: false }))}
        packageName={modal.name}
        packagePrice={modal.price}
      />

      <style>{`
        @media (max-width: 900px) {
          div[style*="160px 80px"] { padding: 120px 24px 60px !important; }
          div[style*="1fr 1.4fr"] { grid-template-columns: 1fr !important; }
          div[style*="padding: 80px"] { padding: 48px 24px !important; }
          div[style*="1fr 1fr"][style*="gap: 16px"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}