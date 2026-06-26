'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

function BookingSuccessContent() {
  const searchParams = useSearchParams()
  const txRef = searchParams.get('tx_ref') || ''
  const packageName = searchParams.get('package') || 'Care package'

  const steps = [
    {
      num: '01',
      title: 'Confirmation email sent',
      text: 'A receipt and welcome email has been sent to your inbox. Check your spam folder if you don\'t see it.',
      done: true,
    },
    {
      num: '02',
      title: 'Clinical team notified',
      text: 'Nurse Patience and our clinical team have been alerted and will begin preparing your care plan.',
      done: true,
    },
    {
      num: '03',
      title: 'Care setup call',
      text: 'A member of our team will contact you within 24 hours to discuss your loved one\'s specific needs.',
      done: false,
    },
    {
      num: '04',
      title: 'Portal access activated',
      text: 'Your Diaspora Bridge portal will be activated once your care plan is set up.',
      done: false,
    },
  ]

  return (
    <>
      <Navbar onBookClick={() => {}} />

      {/* Hero */}
      <div style={{
        background: 'var(--forest)',
        padding: '160px 80px 100px',
        position: 'relative', overflow: 'hidden', textAlign: 'center',
      }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(196,94,30,0.15) 0%, transparent 70%)',
        }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            width: '80px', height: '80px', borderRadius: '50%',
            background: 'rgba(255,255,255,0.12)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 32px', fontSize: '36px', color: '#fff',
          }}>✓</div>

          <p style={{
            fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em',
            textTransform: 'uppercase', color: 'var(--terra-light)', marginBottom: '20px',
          }}>Payment confirmed</p>

          <h1 style={{
            fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px, 5vw, 60px)',
            fontWeight: 400, color: '#fff', lineHeight: 1.1, marginBottom: '20px',
          }}>
            Welcome to<br />
            <em style={{ fontStyle: 'italic', color: 'var(--terra-light)' }}>
              Àgbàr Life Care
            </em>
          </h1>

          <p style={{
            fontSize: '17px', fontWeight: 300, lineHeight: 1.9,
            color: 'rgba(255,255,255,0.65)', maxWidth: '480px',
            margin: '0 auto 32px',
          }}>
            Your payment for <strong style={{ color: '#fff' }}>{packageName}</strong> has been received. Your family is now in safe hands.
          </p>

          {txRef && (
            <div style={{
              display: 'inline-block',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '4px', padding: '10px 20px',
            }}>
              <span style={{
                fontSize: '11px', color: 'rgba(255,255,255,0.5)',
                letterSpacing: '0.1em', textTransform: 'uppercase',
              }}>
                Reference: {txRef}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* What happens next */}
      <div style={{ padding: '100px 80px', background: '#fff' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'var(--font-serif)', fontSize: '36px',
            fontWeight: 400, color: 'var(--charcoal)', marginBottom: '16px',
          }}>What happens next</h2>
          <p style={{
            fontSize: '15px', fontWeight: 300, color: 'var(--muted)',
            lineHeight: 1.8, marginBottom: '56px',
          }}>
            Here is exactly what to expect over the next 24–48 hours.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {steps.map((step, i) => (
              <div key={step.num} style={{
                display: 'flex', gap: '24px',
                paddingBottom: i < steps.length - 1 ? '40px' : 0,
                position: 'relative',
              }}>
                {i < steps.length - 1 && (
                  <div style={{
                    position: 'absolute', left: '19px', top: '40px',
                    width: '2px', height: 'calc(100% - 16px)',
                    background: step.done ? 'var(--forest)' : 'var(--sand)',
                  }} />
                )}
                <div style={{
                  width: '40px', height: '40px', borderRadius: '50%',
                  background: step.done ? 'var(--forest)' : 'var(--cream)',
                  border: `2px solid ${step.done ? 'var(--forest)' : 'var(--sand)'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, zIndex: 1,
                  color: step.done ? '#fff' : 'var(--muted)',
                  fontSize: '14px', fontWeight: 500,
                }}>
                  {step.done ? '✓' : i + 1}
                </div>
                <div style={{ paddingTop: '8px' }}>
                  <h3 style={{
                    fontFamily: 'var(--font-serif)', fontSize: '20px',
                    fontWeight: 400, color: 'var(--charcoal)', marginBottom: '8px',
                  }}>{step.title}</h3>
                  <p style={{
                    fontSize: '14px', fontWeight: 300,
                    lineHeight: 1.8, color: 'var(--muted)',
                  }}>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{
        background: 'var(--cream)', padding: '80px', textAlign: 'center',
      }}>
        <h2 style={{
          fontFamily: 'var(--font-serif)', fontSize: '32px',
          fontWeight: 400, color: 'var(--charcoal)', marginBottom: '16px',
        }}>While you wait</h2>
        <p style={{
          fontSize: '15px', fontWeight: 300, color: 'var(--muted)',
          lineHeight: 1.8, maxWidth: '440px', margin: '0 auto 40px',
        }}>
          Explore our portal to see what your family dashboard will look like once your care plan is active.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/portal" style={{
            display: 'inline-block', background: 'var(--forest)',
            color: '#fff', padding: '16px 40px', borderRadius: '2px',
            fontFamily: 'var(--font-sans)', fontSize: '13px',
            fontWeight: 500, letterSpacing: '0.08em',
            textTransform: 'uppercase', textDecoration: 'none',
          }}>
            View the portal →
          </Link>
          <Link href="/contact" style={{
            display: 'inline-block', background: 'transparent',
            color: 'var(--forest)', padding: '15px 40px', borderRadius: '2px',
            fontFamily: 'var(--font-sans)', fontSize: '13px',
            fontWeight: 400, letterSpacing: '0.08em',
            textTransform: 'uppercase', textDecoration: 'none',
            border: '1px solid var(--forest)',
          }}>
            Contact us
          </Link>
        </div>
      </div>

      <Footer />

      <style>{`
        @media (max-width: 900px) {
          div[style*="160px 80px"] { padding: 120px 24px 60px !important; }
          div[style*="100px 80px"] { padding: 60px 24px !important; }
          div[style*="padding: 80px"] { padding: 60px 24px !important; }
        }
      `}</style>
    </>
  )
}

export default function BookingSuccessPage() {
  return (
    <Suspense fallback={
      <div style={{
        minHeight: '100vh', display: 'flex',
        alignItems: 'center', justifyContent: 'center',
        background: 'var(--ivory)',
        fontFamily: 'var(--font-serif)', fontSize: '24px',
        color: 'var(--muted)',
      }}>
        Loading...
      </div>
    }>
      <BookingSuccessContent />
    </Suspense>
  )
}