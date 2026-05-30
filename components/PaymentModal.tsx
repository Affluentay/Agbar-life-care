'use client'
// components/PaymentModal.tsx

import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
  packageName: string
  packagePrice: string
}

type PayMethod = 'card' | 'bank' | 'ussd'

export default function PaymentModal({ isOpen, onClose, packageName, packagePrice }: PaymentModalProps) {
  const [method, setMethod] = useState<PayMethod>('card')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', cardNumber: '', expiry: '', cvv: '' })

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.firstName || !form.email) { toast.error('Please fill in all required fields.'); return }
    setLoading(true)
    // Simulate Flutterwave call — replace with real Flutterwave inline SDK in production
    await new Promise(r => setTimeout(r, 1800))
    setLoading(false)
    setSuccess(true)
    toast.success('Payment received! Welcome to Àgbàr Life Care.')
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
        {/* Close */}
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

            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '30px', fontWeight: 400, color: 'var(--charcoal)', marginBottom: '6px', lineHeight: 1.2 }}>
              {packageName}
            </h2>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', color: 'var(--terra)', marginBottom: '28px' }}>
              {packagePrice}
            </p>

            <form onSubmit={handleSubmit} noValidate>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                {[
                  { label: 'First name', name: 'firstName', placeholder: 'Adaeze' },
                  { label: 'Last name', name: 'lastName', placeholder: 'Okonkwo' },
                ].map(f => (
                  <div key={f.name}>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '7px' }}>{f.label}</label>
                    <input style={inputStyle} name={f.name} placeholder={f.placeholder} onChange={handleChange} required />
                  </div>
                ))}
              </div>

              {[
                { label: 'Email address', name: 'email', type: 'email', placeholder: 'adaeze@example.com' },
                { label: 'Phone number', name: 'phone', type: 'tel', placeholder: '+44 7700 000000' },
              ].map(f => (
                <div key={f.name} style={{ marginBottom: '14px' }}>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '7px' }}>{f.label}</label>
                  <input style={inputStyle} name={f.name} type={f.type} placeholder={f.placeholder} onChange={handleChange} />
                </div>
              ))}

              <div style={{ height: '1px', background: 'var(--sand)', margin: '22px 0' }} />

              <p style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '12px' }}>Pay with</p>
              <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                {(['card', 'bank', 'ussd'] as PayMethod[]).map(m => (
                  <button
                    key={m} type="button" onClick={() => setMethod(m)}
                    style={{
                      flex: 1, padding: '11px',
                      border: `1px solid ${method === m ? 'var(--forest)' : 'var(--sand)'}`,
                      background: method === m ? 'var(--cream)' : '#fff',
                      color: method === m ? 'var(--forest)' : 'var(--muted)',
                      fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 500,
                      letterSpacing: '0.08em', textTransform: 'uppercase',
                      borderRadius: '2px', cursor: 'pointer', transition: 'all 0.2s',
                    }}
                  >
                    {m === 'card' ? 'Card' : m === 'bank' ? 'Bank transfer' : 'USSD'}
                  </button>
                ))}
              </div>

              {method === 'card' && (
                <>
                  <div style={{ marginBottom: '14px' }}>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '7px' }}>Card number</label>
                    <input style={inputStyle} name="cardNumber" placeholder="4242 4242 4242 4242" maxLength={19} onChange={handleChange} />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '20px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '7px' }}>Expiry</label>
                      <input style={inputStyle} name="expiry" placeholder="MM / YY" maxLength={7} onChange={handleChange} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '7px' }}>CVV</label>
                      <input style={inputStyle} name="cvv" placeholder="123" maxLength={4} onChange={handleChange} />
                    </div>
                  </div>
                </>
              )}

              {method === 'bank' && (
                <div style={{ background: 'var(--cream)', padding: '20px', borderRadius: '2px', marginBottom: '20px', fontSize: '13px', color: 'var(--muted)', lineHeight: 1.7 }}>
                  Bank transfer details will be sent to your email after you confirm. Your subscription activates within 2 hours of payment confirmation.
                </div>
              )}

              {method === 'ussd' && (
                <div style={{ background: 'var(--cream)', padding: '20px', borderRadius: '2px', marginBottom: '20px', fontSize: '13px', color: 'var(--muted)', lineHeight: 1.7 }}>
                  Dial <strong>*901*000#</strong> from your Nigerian number to pay. Enter your email above so we can link your payment automatically.
                </div>
              )}

              <button
                type="submit"
                className="btn btn-forest"
                disabled={loading}
                style={{ width: '100%', opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
              >
                {loading ? 'Processing...' : 'Confirm and pay securely →'}
              </button>

              <div style={{ display: 'flex', gap: '16px', marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--sand)', alignItems: 'center' }}>
                {['🔒 SSL Encrypted', '⚡ Flutterwave', '📋 NDPR Compliant'].map(item => (
                  <span key={item} style={{ fontSize: '10px', color: 'var(--muted)', letterSpacing: '0.06em' }}>{item}</span>
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
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', fontWeight: 400, color: 'var(--charcoal)', marginBottom: '12px' }}>
              Payment received!
            </h3>
            <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.8, marginBottom: '28px' }}>
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
