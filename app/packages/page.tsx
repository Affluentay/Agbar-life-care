'use client'
// app/packages/page.tsx

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PaymentModal from '@/components/PaymentModal'

const categories = [
  {
    id: 'nuru',
    name: 'Nuru Essentials',
    tagline: 'Essential in-home nursing care',
    description: 'Professional, dignified, evidence-based nursing care for your elderly loved one in Nigeria. The Nuru Essentials range is designed for families who want consistent, reliable care delivered by qualified nurses.',
    color: '#3a5a27',
    packages: [
      {
        name: 'Nuru Oba',
        days: 15,
        price: 120000,
        gbp: '£63',
        featured: true,
        features: [
          'Professional in-home nursing care',
          '15 days of dedicated care',
          'Daily vitals monitoring and logging',
          'Medication management',
          'Family update reports',
          'Emergency response protocol',
          'Diaspora Bridge portal access',
          'Monthly clinical report PDF',
        ],
      },
      {
        name: 'Nuru Odogwu',
        days: 15,
        price: 120000,
        gbp: '£63',
        featured: false,
        features: [
          'Professional in-home nursing care',
          '15 days of dedicated care',
          'Daily vitals monitoring and logging',
          'Medication management',
          'Family update reports',
          'Emergency response protocol',
        ],
      },
      {
        name: 'Nuru Iroko',
        days: 15,
        price: 82500,
        gbp: '£43',
        featured: false,
        features: [
          'Professional in-home nursing care',
          '15 days of dedicated care',
          'Vitals monitoring',
          'Medication reminders',
          'Family WhatsApp updates',
          'Emergency response protocol',
        ],
      },
    ],
  },
  {
    id: 'ilera',
    name: 'Ilera Home',
    tagline: 'Premium home care with enhanced clinical oversight',
    description: 'For families who want the very best. Ilera Home packages offer enhanced clinical oversight, priority response, and comprehensive health monitoring — giving you complete peace of mind from anywhere in the world.',
    color: '#c45e1e',
    packages: [
      {
        name: 'Ilera Oba',
        days: 15,
        price: 150000,
        gbp: '£79',
        featured: true,
        features: [
          'Premium in-home nursing care',
          '15 days of dedicated care',
          'Enhanced clinical oversight',
          'Daily vitals and health assessment',
          'Medication management',
          'Full Diaspora Bridge portal access',
          'Monthly clinical report PDF',
          'Video consultation with nurse',
          'Priority emergency response',
        ],
      },
      {
        name: 'Ilera Odogwu',
        days: 15,
        price: 150000,
        gbp: '£79',
        featured: false,
        features: [
          'Premium in-home nursing care',
          '15 days of dedicated care',
          'Enhanced clinical oversight',
          'Daily vitals and health assessment',
          'Medication management',
          'Family portal access',
          'Priority emergency response',
        ],
      },
      {
        name: 'Ilera Iroko',
        days: 15,
        price: 130000,
        gbp: '£68',
        featured: false,
        features: [
          'Premium in-home nursing care',
          '15 days of dedicated care',
          'Daily vitals monitoring',
          'Medication management',
          'Family update reports',
          'Emergency response protocol',
        ],
      },
    ],
  },
  {
    id: 'ayo',
    name: 'Ayo Visits',
    tagline: 'Flexible visit-based care',
    description: 'Ideal for families who need periodic professional check-ins rather than continuous care. Ayo Visits packages are flexible, affordable, and delivered by the same qualified nurses.',
    color: '#7a5c3a',
    packages: [
      {
        name: 'Ayo Oba',
        days: 12,
        price: 66000,
        gbp: '£35',
        featured: false,
        features: [
          '12 professional nurse visits',
          'Vitals check on every visit',
          'Medication administration',
          'Visit summary report',
          'Emergency response protocol',
          'Family WhatsApp updates',
        ],
      },
      {
        name: 'Ayo Odogwu',
        days: 8,
        price: 40000,
        gbp: '£21',
        featured: false,
        features: [
          '8 professional nurse visits',
          'Vitals check on every visit',
          'Medication administration',
          'Visit summary report',
          'Family WhatsApp updates',
        ],
      },
      {
        name: 'Ayo Iroko',
        days: 4,
        price: 18000,
        gbp: '£9',
        featured: false,
        features: [
          '4 professional nurse visits',
          'Vitals check on every visit',
          'Basic health assessment',
          'Family WhatsApp updates',
        ],
      },
    ],
  },
]

export default function PackagesPage() {
  const [modal, setModal] = useState<{ open: boolean; name: string; price: string }>({
    open: false, name: '', price: '',
  })

  const openModal = (name: string, price: string) => setModal({ open: true, name, price })
  const closeModal = () => setModal(prev => ({ ...prev, open: false }))

  return (
    <>
      <Navbar onBookClick={() => openModal('Nuru Oba', '₦120,000/cycle')} />

      {/* Hero */}
      <div style={{
        background: 'var(--forest-dark)',
        padding: '160px 80px 100px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 60% 60% at 80% 50%, rgba(196,94,30,0.15) 0%, transparent 70%)',
        }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px' }}>
          <p style={{
            fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em',
            textTransform: 'uppercase', color: 'var(--terra-light)', marginBottom: '20px',
          }}>Care packages</p>
          <h1 style={{
            fontFamily: 'var(--font-serif)', fontSize: 'clamp(40px, 5vw, 68px)',
            fontWeight: 400, color: '#fff', lineHeight: 1.1, marginBottom: '24px',
          }}>
            Find the right plan<br />
            <em style={{ fontStyle: 'italic', color: 'var(--terra-light)' }}>for your family</em>
          </h1>
          <p style={{
            fontSize: '17px', fontWeight: 300, lineHeight: 1.9,
            color: 'rgba(255,255,255,0.6)', maxWidth: '520px',
          }}>
            Three categories of care, nine packages — each designed for a different level of need and budget. All delivered by qualified Nigerian nurses in Benin City.
          </p>
        </div>
      </div>

      {/* Categories */}
      {categories.map((cat) => (
        <div key={cat.id} style={{ background: cat.id === 'ilera' ? 'var(--cream)' : '#fff' }}>
          {/* Category intro */}
          <div style={{ padding: '80px 80px 48px' }}>
            <div style={{
              display: 'flex', alignItems: 'flex-start', gap: '20px',
              paddingBottom: '32px', borderBottom: `2px solid ${cat.color}`,
            }}>
              <div style={{
                width: '48px', height: '48px', borderRadius: '50%',
                background: cat.color, flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', fontFamily: 'var(--font-serif)', fontSize: '18px',
              }}>
                {cat.name.charAt(0)}
              </div>
              <div>
                <h2 style={{
                  fontFamily: 'var(--font-serif)', fontSize: '36px',
                  fontWeight: 400, color: 'var(--charcoal)', marginBottom: '8px',
                }}>{cat.name}</h2>
                <p style={{
                  fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em',
                  textTransform: 'uppercase', color: cat.color, marginBottom: '12px',
                }}>{cat.tagline}</p>
                <p style={{
                  fontSize: '15px', fontWeight: 300, lineHeight: 1.8,
                  color: 'var(--muted)', maxWidth: '600px',
                }}>{cat.description}</p>
              </div>
            </div>
          </div>

          {/* Package cards */}
          <div style={{
            padding: '0 80px 80px',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }}>
            {cat.packages.map((pkg, pi) => (
              <div
                key={pkg.name}
                className="hover-lift"
                style={{
                  background: pkg.featured ? cat.color : '#fff',
                  border: `1px solid ${pkg.featured ? cat.color : 'var(--sand)'}`,
                  borderRadius: '4px',
                  padding: '40px 32px',
                  position: 'relative',
                  boxShadow: pkg.featured ? `0 8px 32px ${cat.color}33` : 'none',
                }}
              >
                {pkg.featured && (
                  <div style={{
                    position: 'absolute', top: '-13px', left: '50%',
                    transform: 'translateX(-50%)',
                    background: cat.id === 'nuru' ? 'var(--terra)' : cat.id === 'ilera' ? 'var(--forest)' : 'var(--forest)',
                    color: '#fff',
                    fontSize: '10px', fontWeight: 500, letterSpacing: '0.12em',
                    textTransform: 'uppercase', padding: '4px 16px',
                    borderRadius: '20px', whiteSpace: 'nowrap',
                  }}>
                    Most popular
                  </div>
                )}

                <div style={{
                  display: 'inline-block',
                  background: pkg.featured ? 'rgba(255,255,255,0.15)' : 'var(--cream)',
                  color: pkg.featured ? 'rgba(255,255,255,0.8)' : 'var(--muted)',
                  fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em',
                  textTransform: 'uppercase', padding: '4px 12px',
                  borderRadius: '20px', marginBottom: '16px',
                }}>
                  {pkg.days} days
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-serif)', fontSize: '24px',
                  fontWeight: 400,
                  color: pkg.featured ? '#fff' : 'var(--charcoal)',
                  marginBottom: '20px',
                }}>{pkg.name}</h3>

                <div style={{
                  paddingBottom: '20px',
                  borderBottom: `1px solid ${pkg.featured ? 'rgba(255,255,255,0.15)' : 'var(--sand)'}`,
                  marginBottom: '20px',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-serif)', fontSize: '44px',
                    fontWeight: 400, lineHeight: 1,
                    color: pkg.featured ? '#fff' : 'var(--charcoal)',
                  }}>
                    <span style={{
                      fontSize: '20px', verticalAlign: 'top',
                      marginTop: '10px', display: 'inline-block',
                    }}>₦</span>
                    {pkg.price.toLocaleString()}
                  </div>
                  <div style={{
                    fontSize: '12px', fontWeight: 300, marginTop: '6px',
                    color: pkg.featured ? 'rgba(255,255,255,0.5)' : 'var(--muted)',
                  }}>
                    per cycle · approx. {pkg.gbp} GBP
                  </div>
                </div>

                <ul style={{
                  listStyle: 'none', marginBottom: '32px',
                  display: 'flex', flexDirection: 'column', gap: 0,
                }}>
                  {pkg.features.map(feat => (
                    <li key={feat} style={{
                      fontSize: '13px', fontWeight: 300,
                      color: pkg.featured ? 'rgba(255,255,255,0.75)' : 'var(--muted)',
                      padding: '9px 0',
                      borderBottom: `1px solid ${pkg.featured ? 'rgba(255,255,255,0.08)' : 'var(--cream)'}`,
                      display: 'flex', alignItems: 'flex-start',
                      gap: '8px', lineHeight: 1.5,
                    }}>
                      <span style={{
                        color: pkg.featured ? 'rgba(255,255,255,0.6)' : cat.color,
                        fontWeight: 500, flexShrink: 0,
                      }}>✓</span>
                      {feat}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => openModal(pkg.name, `₦${pkg.price.toLocaleString()}/cycle`)}
                  style={{
                    width: '100%', padding: '14px',
                    fontFamily: 'var(--font-sans)', fontSize: '12px',
                    fontWeight: 500, letterSpacing: '0.1em',
                    textTransform: 'uppercase', borderRadius: '2px',
                    cursor: 'pointer', transition: 'all 0.22s',
                    background: pkg.featured ? '#fff' : 'transparent',
                    color: pkg.featured ? cat.color : cat.color,
                    border: pkg.featured ? '1px solid #fff' : `1px solid ${cat.color}`,
                  }}
                >
                  Select this plan
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* FAQ / note */}
      <div style={{
        background: 'var(--charcoal)', padding: '80px',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: 'var(--font-serif)', fontSize: '28px',
          fontWeight: 400, color: '#fff', marginBottom: '16px',
        }}>
          Not sure which plan is right?
        </p>
        <p style={{
          fontSize: '15px', fontWeight: 300, lineHeight: 1.8,
          color: 'rgba(255,255,255,0.5)', maxWidth: '480px',
          margin: '0 auto 32px',
        }}>
          Our clinical team will guide you to the right package based on your loved one's needs. Reach out and we'll respond within 24 hours.
        </p>
        <a href="/contact" style={{
          display: 'inline-block',
          background: 'var(--terra)', color: '#fff',
          padding: '16px 40px', borderRadius: '2px',
          fontFamily: 'var(--font-sans)', fontSize: '13px',
          fontWeight: 500, letterSpacing: '0.08em',
          textTransform: 'uppercase', textDecoration: 'none',
          transition: 'background 0.2s',
        }}>
          Talk to our team →
        </a>
      </div>

      <Footer />

      <PaymentModal
        isOpen={modal.open}
        onClose={closeModal}
        packageName={modal.name}
        packagePrice={modal.price}
      />

      <style>{`
        @media (max-width: 900px) {
          div[style*="160px 80px"] { padding: 120px 24px 60px !important; }
          div[style*="80px 80px 48px"] { padding: 48px 24px 32px !important; }
          div[style*="0 80px 80px"] { 
            padding: 0 24px 48px !important; 
            grid-template-columns: 1fr !important; 
          }
          div[style*="80px"][style*="text-align: center"] { padding: 60px 24px !important; }
        }
      `}</style>
    </>
  )
}