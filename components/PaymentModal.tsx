'use client'
// components/PaymentModal.tsx
// Real Flutterwave payment integration

import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
  packageName: string
  packagePrice: string
}

declare global {
  interface Window {
    FlutterwaveCheckout: (config: any) => void
  }
}

export default function PaymentModal({ isOpen, onClose, packageName, packagePrice }: PaymentModalProps) {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  })

  // Load Flutterwave script
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://checkout.flutterwave.com/v3.js'
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    if (isOpen) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  // Get amount in NGN from price string
  const getAmount = () => {
    if (packageName.includes('Basic')) return 45000
    if (packageName.includes('Premium')) return 140000
    return 85000 // Odogwu default
  }

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.firstName || !form.email || !form.phone) {
      toast.error('Please fill in all required fields.')
      return
    }

    setLoading(true)

    window.FlutterwaveCheckout({
      public_key: process.env.NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY,
      tx_ref: `AGBAR-${Date.now()}`,
      amount: getAmount(),
      currency: 'NGN',
      payment_options: 'card,ussd,banktransfer',
      customer: {
        email: form.email,
        phone_number: form.phone,
        name: `${form.firstName} ${form.lastName}`,
      },
      customizations: {
        title: 'Àgbàr Life Care',
        description: packageName,
        logo: 'https://agbarlifecare.com/logo.png',
      },
      callback: function (response: any) {
        setLoading(false)
        if (response.status === 'successful') {
          setSuccess(true)
          toast.success('Payment successful! Welcome to Àgbàr Life Care.')
        } else {
          toast.error('Payment was not completed. Please try again.')
        }
      },
      onclose: function () {
        setLoading(false)
      },
    })
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '13px 16px',
    border: '1px solid var(--sand)', background: '#fff',
    color: 'var(--charcoal)', fontFamily: 'var(--font-sans)', fontSize: '14px',
    borderRadius: '2px', outline: 'none',
  }

  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(26,26,20,0.78)', backdropFilter: 'blur(6px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px',
      }}
    >
      <div
        className="modal-enter"
        style={{
          background: 'var(--ivory)', borderRadius: '4px',
          padding: '52px', maxWidth: '520px', width: '100%',
          position: 'relative', maxHeight: '92vh', overflowY: 'auto',
        }}
      >
        <button onClick={onClose} style={{
          position: 'absolute', top: '18px', right: '18px',
          background: 'none', border: 'none', fontSize: '22px',
          cursor: 'pointer', color: 'var(--muted)', lineHeight: 1, padding: '4px',
        }}>×</button>

        {!success ? (
          <>
            <div style={{
              background: 'var(--forest)', color: 'rgba(255,255,255,0.75)',
              fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase',
              padding: '4px 14px', borderRadius: '20px', display: 'inline-block', marginBottom: '20px',
            }}>🔒 Secure checkout</div>

            <h2 style={{
              fontFamily: 'var(--font-serif)', fontSize: '30px', fontWeight: 400,
              color: 'var(--charcoal)', marginBottom: '6px', lineHeight: 1.2,
            }}>
              {packageName}
            </h2>
            <p style={{
              fontFamily: 'var(--font-serif)', fontSize: '20px',
              color: 'var(--terra)', marginBottom: '28px',
            }}>
              {packagePrice}
            </p>

            <form onSubmit={handlePayment} noValidate>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                {[
                  { label: 'First name', name: 'firstName', placeholder: 'Adaeze' },
                  { label: 'Last name', name: 'lastName', placeholder: 'Okonkwo' },
                ].map(f => (
                  <div key={f.name}>
                    <label style={{
                      display: 'block', fontSize: '11px', fontWeight: 500,
                      letterSpacing: '0.1em', textTransform: 'uppercase',
                      color: 'var(--muted)', marginBottom: '7px',
                    }}>{f.label}</label>
                    <input
                      style={inputStyle} name={f.name}
                      placeholder={f.placeholder} onChange={handleChange} required
                    />
                  </div>
                ))}
              </div>

              {[
                { label: 'Email address', name: 'email', type: 'email', placeholder: 'adaeze@example.com' },
                { label: 'Phone number', name: 'phone', type: 'tel', placeholder: '+234 800 000 0000' },
              ].map(f => (
                <div key={f.name} style={{ marginBottom: '14px' }}>
                  <label style={{
                    display: 'block', fontSize: '11px', fontWeight: 500,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    color: 'var(--muted)', marginBottom: '7px',
                  }}>{f.label}</label>
                  <input
                    style={inputStyle} name={f.name}
                    type={f.type} placeholder={f.placeholder} onChange={handleChange}
                  />
                </div>
              ))}

              <button
                type="submit"
                className="btn btn-forest"
                disabled={loading}
                style={{
                  width: '100%', marginTop: '8px',
                  opacity: loading ? 0.7 : 1,
                  cursor: loading ? 'not-allowed' : 'pointer',
                }}
              >
                {loading ? 'Opening payment...' : `Pay ${packagePrice} securely →`}
              </button>

              <div style={{
                display: 'flex', gap: '16px', marginTop: '16px',
                paddingTop: '16px', borderTop: '1px solid var(--sand)',
                alignItems: 'center', flexWrap: 'wrap',
              }}>
                {['🔒 SSL Encrypted', '⚡ Flutterwave', '📋 NDPR Compliant'].map(item => (
                  <span key={item} style={{ fontSize: '10px', color: 'var(--muted)', letterSpacing: '0.06em' }}>
                    {item}
                  </span>
                ))}
              </div>
            </form>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '32px 0' }}>
            <div style={{
              width: '64px', height: '64px', borderRadius: '50%',
              background: 'rgba(58,90,39,0.12)', display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 22px', fontSize: '28px', color: 'var(--forest)',
            }}>✓</div>
            <h3 style={{
              fontFamily: 'var(--font-serif)', fontSize: '28px',
              fontWeight: 400, color: 'var(--charcoal)', marginBottom: '12px',
            }}>
              Payment received!
            </h3>
            <p style={{
              fontSize: '14px', fontWeight: 300, color: 'var(--muted)',
              lineHeight: 1.8, marginBottom: '28px',
            }}>
              Your receipt has been sent by email. Nurse Patience has been notified and your Diaspora Bridge portal access is now active. Welcome to Àgbàr Life Care.
            </p>
            <button className="btn btn-forest" onClick={onClose} style={{ width: '100%' }}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  )
}