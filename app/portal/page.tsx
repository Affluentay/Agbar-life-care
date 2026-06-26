'use client'
// app/portal/page.tsx

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PaymentModal from '@/components/PaymentModal'

export default function PortalPage() {
  const [modal, setModal] = useState<{ open: boolean; name: string; price: string }>({
    open: false, name: '', price: '',
  })
  const [activeNav, setActiveNav] = useState('dashboard')

  const navItems = [
    { id: 'dashboard', label: 'Care dashboard' },
    { id: 'carelog', label: 'Care log' },
    { id: 'vitals', label: 'Vitals history' },
    { id: 'reports', label: 'Reports' },
    { id: 'messages', label: 'Message nurse' },
    { id: 'subscription', label: 'Subscription' },
  ]

  const cards = [
    { label: "Today's status", val: 'Stable', sub: '✓ Nurse checked in 8:14am', color: 'var(--forest-light)' },
    { label: 'Blood pressure', val: '122/78', sub: '✓ Within normal range', color: 'var(--forest-light)' },
    { label: 'Medications', val: '3 / 3', sub: '✓ All administered on time', color: 'var(--forest-light)' },
  ]

  const logs = [
    {
      time: '08:14', type: 'med',
      text: 'Morning medications administered: Amlodipine 5mg, Lisinopril 10mg, and Metformin 500mg. BP recorded: 122/78 mmHg.',
      nurse: 'Nurse Patience A.',
    },
    {
      time: '10:30', type: 'note',
      text: 'Patient in good spirits. Had breakfast — jollof rice and fish — with good appetite. No complaints of pain or discomfort.',
      nurse: 'Nurse Patience A.',
    },
    {
      time: '13:05', type: 'med',
      text: 'Afternoon vitals: BP 118/76, SpO2 98%, Temp 36.7°C. Afternoon rest completed. Patient sleeping soundly.',
      nurse: 'Nurse Patience A.',
    },
  ]

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
          background: `
            radial-gradient(ellipse 50% 60% at 80% 40%, rgba(196,94,30,0.15) 0%, transparent 70%),
            radial-gradient(ellipse 40% 50% at 10% 80%, rgba(78,122,53,0.2) 0%, transparent 60%)
          `,
        }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px' }}>
          <p style={{
            fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em',
            textTransform: 'uppercase', color: 'var(--terra-light)', marginBottom: '20px',
          }}>Diaspora Bridge</p>
          <h1 style={{
            fontFamily: 'var(--font-serif)', fontSize: 'clamp(40px, 5vw, 68px)',
            fontWeight: 400, color: '#fff', lineHeight: 1.1, marginBottom: '24px',
          }}>
            Your parent's care,<br />
            <em style={{ fontStyle: 'italic', color: 'var(--terra-light)' }}>
              visible from anywhere
            </em>
          </h1>
          <p style={{
            fontSize: '17px', fontWeight: 300, lineHeight: 1.9,
            color: 'rgba(255,255,255,0.6)', maxWidth: '520px', marginBottom: '40px',
          }}>
            Log in from London, Dallas, or Toronto and see exactly what happened today — medications, vitals, nurse notes. Àgbàr gives you the peace of mind that used to require flying home.
          </p>

          {/* Home button */}
          <a href="/" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'transparent', color: 'rgba(255,255,255,0.6)',
            border: '1px solid rgba(255,255,255,0.2)',
            padding: '12px 24px', borderRadius: '2px',
            fontFamily: 'var(--font-sans)', fontSize: '12px',
            fontWeight: 400, letterSpacing: '0.08em',
            textTransform: 'uppercase', textDecoration: 'none',
            transition: 'all 0.2s',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.color = '#fff'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = 'rgba(255,255,255,0.6)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
            }}
          >
            ← Back to home
          </a>
        </div>
      </div>

      {/* Features */}
      <div style={{ padding: '100px 80px', background: '#fff' }}>
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <p style={{
            fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '16px',
          }}>What the portal gives you</p>
          <h2 style={{
            fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 400, color: 'var(--charcoal)', lineHeight: 1.15,
          }}>
            Complete <em style={{ fontStyle: 'italic', color: 'var(--forest)' }}>visibility</em> into your loved one's care
          </h2>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px', background: 'var(--sand)',
        }}>
          {[
            {
              num: '01',
              title: 'Real-time care log',
              text: 'Every nurse visit, medication administered, and vital sign recorded — visible to you within minutes of it happening.',
            },
            {
              num: '02',
              title: 'Vitals dashboard',
              text: 'Blood pressure, temperature, SpO2, and weight tracked over time. Spot trends before they become problems.',
            },
            {
              num: '03',
              title: 'Monthly PDF reports',
              text: 'A comprehensive clinical summary every month — downloadable, shareable with doctors, and permanently archived.',
            },
            {
              num: '04',
              title: 'Message the nurse',
              text: 'Send questions or instructions directly to the nurse caring for your loved one. Responses within the hour.',
            },
            {
              num: '05',
              title: 'Medication tracking',
              text: 'Every medication, every dose, every time — confirmed by the nurse and timestamped for your peace of mind.',
            },
            {
              num: '06',
              title: 'Subscription management',
              text: 'View your active package, renewal dates, and payment history. Upgrade or pause with one click.',
            },
          ].map(feat => (
            <div key={feat.num} style={{
              background: 'var(--ivory)', padding: '48px 40px',
              transition: 'background 0.3s',
            }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--cream)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--ivory)')}
            >
              <div style={{
                fontFamily: 'var(--font-serif)', fontSize: '64px',
                fontWeight: 400, color: 'var(--sand)', lineHeight: 1, marginBottom: '20px',
              }}>{feat.num}</div>
              <h3 style={{
                fontFamily: 'var(--font-serif)', fontSize: '20px',
                fontWeight: 400, color: 'var(--charcoal)', marginBottom: '12px',
              }}>{feat.title}</h3>
              <p style={{
                fontSize: '14px', fontWeight: 300,
                lineHeight: 1.8, color: 'var(--muted)',
              }}>{feat.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Portal mockup */}
      <div style={{ padding: '0 80px 100px', background: '#fff' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{
            fontFamily: 'var(--font-serif)', fontSize: '36px',
            fontWeight: 400, color: 'var(--charcoal)',
          }}>
            See it in <em style={{ fontStyle: 'italic', color: 'var(--forest)' }}>action</em>
          </h2>
        </div>

        <div style={{
          border: '1px solid rgba(0,0,0,0.1)', borderRadius: '8px',
          overflow: 'hidden', boxShadow: '0 24px 80px rgba(0,0,0,0.12)',
        }}>
          {/* Top bar */}
          <div style={{
            background: 'var(--charcoal)', padding: '14px 24px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img src="/logo.png" alt="Àgbàr"
                style={{ height: '22px', filter: 'brightness(0) invert(1)', opacity: 0.85 }} />
              <span style={{
                fontSize: '13px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em',
              }}>Portal</span>
            </div>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.04em' }}>
              Adaeze Okonkwo · London, UK
            </div>
          </div>

          {/* Body */}
          <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', background: '#1a1a14' }}>
            {/* Sidebar */}
            <div style={{
              background: 'rgba(0,0,0,0.25)', padding: '28px 0',
              borderRight: '1px solid rgba(255,255,255,0.05)',
            }}>
              {navItems.map(item => (
                <div
                  key={item.id}
                  onClick={() => setActiveNav(item.id)}
                  style={{
                    padding: activeNav === item.id ? '9px 20px 9px 18px' : '9px 20px',
                    fontSize: '12px', cursor: 'pointer',
                    color: activeNav === item.id ? 'var(--terra-light)' : 'rgba(255,255,255,0.3)',
                    background: activeNav === item.id ? 'rgba(196,94,30,0.12)' : 'transparent',
                    borderLeft: activeNav === item.id ? '2px solid var(--terra)' : '2px solid transparent',
                    transition: 'all 0.2s',
                    display: 'flex', alignItems: 'center', gap: '10px',
                  }}
                >
                  <span style={{
                    width: '5px', height: '5px', borderRadius: '50%',
                    background: 'currentColor', opacity: 0.5, flexShrink: 0,
                  }} />
                  {item.label}
                </div>
              ))}
            </div>

            {/* Content */}
            <div style={{ padding: '28px' }}>
              <div style={{
                fontFamily: 'var(--font-serif)', fontSize: '26px',
                fontWeight: 400, color: '#fff', marginBottom: '4px',
              }}>
                Good morning, <em style={{ fontStyle: 'italic', color: 'var(--terra-light)' }}>Adaeze.</em>
              </div>
              <div style={{
                fontSize: '11px', color: 'rgba(255,255,255,0.28)',
                marginBottom: '22px', letterSpacing: '0.04em',
              }}>
                Saturday, May 16 · Chief (Mrs.) Ngozi Okonkwo · Benin City
              </div>

              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '12px', marginBottom: '22px',
              }}>
                {cards.map(c => (
                  <div key={c.label} style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '4px', padding: '16px',
                  }}>
                    <div style={{
                      fontSize: '10px', letterSpacing: '0.12em',
                      textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)',
                      marginBottom: '8px',
                    }}>{c.label}</div>
                    <div style={{
                      fontFamily: 'var(--font-serif)', fontSize: '22px', color: '#fff',
                    }}>{c.val}</div>
                    <div style={{ fontSize: '11px', color: c.color, marginTop: '4px' }}>{c.sub}</div>
                  </div>
                ))}
              </div>

              <div style={{
                fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.28)', marginBottom: '12px',
              }}>Today's care log</div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {logs.map(log => (
                  <div key={log.time} style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: '4px',
                    padding: '12px 16px', display: 'flex', gap: '14px',
                    borderLeft: `2px solid ${log.type === 'med' ? 'var(--forest-light)' : 'var(--terra)'}`,
                  }}>
                    <div style={{
                      fontSize: '11px', color: 'rgba(255,255,255,0.25)',
                      whiteSpace: 'nowrap', minWidth: '40px',
                    }}>{log.time}</div>
                    <div>
                      <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>
                        {log.text}
                      </div>
                      <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.25)', marginTop: '4px' }}>
                        {log.nurse}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{
        background: 'var(--forest)', padding: '100px 80px', textAlign: 'center',
      }}>
        <p style={{
          fontFamily: 'var(--font-serif)', fontSize: '40px',
          fontWeight: 400, color: '#fff', lineHeight: 1.2, marginBottom: '16px',
        }}>
          Portal access comes with<br />
          <em style={{ fontStyle: 'italic', color: 'var(--terra-light)' }}>every care package</em>
        </p>
        <p style={{
          fontSize: '16px', fontWeight: 300, lineHeight: 1.8,
          color: 'rgba(255,255,255,0.55)', maxWidth: '480px',
          margin: '0 auto 40px',
        }}>
          Subscribe to any Nuru Essentials or Ilera Home package and get full Diaspora Bridge portal access included.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/packages" style={{
            display: 'inline-block', background: 'var(--terra)',
            color: '#fff', padding: '16px 40px', borderRadius: '2px',
            fontFamily: 'var(--font-sans)', fontSize: '13px',
            fontWeight: 500, letterSpacing: '0.08em',
            textTransform: 'uppercase', textDecoration: 'none',
          }}>View care packages →</a>
          <a href="/" style={{
            display: 'inline-block', background: 'transparent',
            color: '#fff', padding: '15px 40px', borderRadius: '2px',
            fontFamily: 'var(--font-sans)', fontSize: '13px',
            fontWeight: 400, letterSpacing: '0.08em',
            textTransform: 'uppercase', textDecoration: 'none',
            border: '1px solid rgba(255,255,255,0.3)',
          }}>← Back to home</a>
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
          div[style*="100px 80px"] { padding: 60px 24px !important; }
          div[style*="0 80px 100px"] { padding: 0 24px 60px !important; }
          div[style*="repeat(3, 1fr)"][style*="gap: 1px"] { grid-template-columns: 1fr !important; }
          div[style*="200px 1fr"] { grid-template-columns: 1fr !important; }
          div[style*="repeat(3, 1fr)"][style*="gap: 12px"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}