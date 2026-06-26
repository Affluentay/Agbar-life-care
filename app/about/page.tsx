'use client'
// app/about/page.tsx

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useState } from 'react'
import PaymentModal from '@/components/PaymentModal'

export default function AboutPage() {
  const [modal, setModal] = useState<{ open: boolean; name: string; price: string }>({
    open: false, name: '', price: '',
  })

  const team = [
    {
      name: 'Nurse Praise',
      role: 'Founder & Team Lead',
      bio: 'A visionary healthcare entrepreneur dedicated to redefining the aging experience in Nigeria. Nurse Praise founded Àgbàr Life Care to bridge the critical gap in culturally sensitive geriatric care.',
    },
    {
      name: 'Nurse Patience',
      role: 'Clinical Lead',
      bio: 'A qualified geriatric nurse with extensive experience in evidence-based elderly care. Nurse Patience leads our clinical protocols, trains our care team, and ensures every care plan meets international standards.',
    },
    {
      name: 'Itunu',
      role: 'Marketing & CRM Lead',
      bio: 'Responsible for connecting diaspora families with the care their loved ones deserve. Itunu manages our community outreach, digital marketing, and client relationship management.',
    },
    {
      name: 'Treasure',
      role: 'Operations & Finance',
      bio: 'Ensures the business runs smoothly and transparently. Treasure oversees financial operations, client invoicing, and the administrative systems that keep Àgbàr running at full capacity.',
    },
  ]

  const values = [
    {
      num: '01',
      title: 'Dignity above all',
      text: 'Every elder deserves to age with dignity, comfort, and respect — regardless of geography or circumstance.',
    },
    {
      num: '02',
      title: 'Evidence-based care',
      text: 'Every care protocol we implement meets the global gold standard for geriatric health and wellness.',
    },
    {
      num: '03',
      title: 'Cultural sensitivity',
      text: 'Care plans that honour Nigerian traditions, languages, family structures, and spiritual practices.',
    },
    {
      num: '04',
      title: 'Technology as a bridge',
      text: 'We leverage technology to close the distance between families abroad and their loved ones at home.',
    },
    {
      num: '05',
      title: 'Radical transparency',
      text: 'We communicate openly with families, operate with high integrity, and never hide behind jargon.',
    },
    {
      num: '06',
      title: 'Zero human error',
      text: 'Our automation systems ensure nothing falls through the cracks — payments, notifications, care logs.',
    },
  ]

  return (
    <>
      <Navbar onBookClick={() => setModal({ open: true, name: 'Nuru Oba', price: '₦120,000/cycle' })} />

      {/* Hero */}
      <div style={{
        background: 'var(--charcoal)',
        padding: '160px 80px 100px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: `
            radial-gradient(ellipse 50% 60% at 80% 40%, rgba(58,90,39,0.3) 0%, transparent 70%),
            radial-gradient(ellipse 40% 50% at 10% 80%, rgba(196,94,30,0.15) 0%, transparent 60%)
          `,
        }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px' }}>
          <p style={{
            fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em',
            textTransform: 'uppercase', color: 'var(--terra-light)', marginBottom: '20px',
          }}>Our story</p>
          <h1 style={{
            fontFamily: 'var(--font-serif)', fontSize: 'clamp(40px, 5vw, 68px)',
            fontWeight: 400, color: '#fff', lineHeight: 1.1, marginBottom: '24px',
          }}>
            More than a care agency.<br />
            <em style={{ fontStyle: 'italic', color: 'var(--terra-light)' }}>
              A complete ecosystem.
            </em>
          </h1>
          <p style={{
            fontSize: '17px', fontWeight: 300, lineHeight: 1.9,
            color: 'rgba(255,255,255,0.6)', maxWidth: '560px',
          }}>
            Àgbàr Life Care was founded to solve a problem millions of Nigerian diaspora families face — being thousands of miles away from an aging parent with no reliable, professional way to ensure they are safe, cared for, and dignified.
          </p>
        </div>
      </div>

      {/* Mission */}
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        background: '#fff',
      }}>
        <div style={{
          padding: '100px 80px',
          background: 'var(--forest)',
        }}>
          <p style={{
            fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em',
            textTransform: 'uppercase', color: 'var(--terra-light)', marginBottom: '20px',
          }}>Our mission</p>
          <h2 style={{
            fontFamily: 'var(--font-serif)', fontSize: '40px',
            fontWeight: 400, color: '#fff', lineHeight: 1.2, marginBottom: '24px',
          }}>
            To redefine the<br />
            <em style={{ fontStyle: 'italic', color: 'var(--terra-light)' }}>aging experience</em><br />
            in Africa
          </h2>
          <p style={{
            fontSize: '15px', fontWeight: 300, lineHeight: 1.9,
            color: 'rgba(255,255,255,0.65)',
          }}>
            We bridge the critical gap in conventional elderly care by integrating culturally sensitive services with high-tech digital solutions. Our foundation is built on evidence-based research, ensuring every care protocol meets the global gold standard for geriatric health and wellness.
          </p>
        </div>
        <div style={{
          padding: '100px 80px',
          background: 'var(--cream)',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
        }}>
          <p style={{
            fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em',
            textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '20px',
          }}>The problem we solve</p>
          <p style={{
            fontFamily: 'var(--font-serif)', fontSize: '22px',
            fontWeight: 400, color: 'var(--charcoal)', lineHeight: 1.6,
            fontStyle: 'italic', marginBottom: '32px',
          }}>
            "To a son in London or a daughter in Dallas, our digital platform is our clinic. If it is slow or clunky, they will assume our clinical care is just as unreliable."
          </p>
          <p style={{
            fontSize: '13px', color: 'var(--muted)',
            letterSpacing: '0.06em',
          }}>— Nurse Praise, Founder</p>
        </div>
      </div>

      {/* Values */}
      <div style={{ padding: '100px 80px', background: '#fff' }}>
        <div style={{ marginBottom: '64px', textAlign: 'center' }}>
          <p style={{
            fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '16px',
          }}>What we stand for</p>
          <h2 style={{
            fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 400, color: 'var(--charcoal)', lineHeight: 1.15,
          }}>
            Our <em style={{ fontStyle: 'italic', color: 'var(--forest)' }}>core values</em>
          </h2>
        </div>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px', background: 'var(--sand)',
        }}>
          {values.map(v => (
            <div key={v.num} style={{
              background: 'var(--ivory)', padding: '48px 40px',
              transition: 'background 0.3s',
            }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--cream)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--ivory)')}
            >
              <div style={{
                fontFamily: 'var(--font-serif)', fontSize: '64px',
                fontWeight: 400, color: 'var(--sand)', lineHeight: 1,
                marginBottom: '20px',
              }}>{v.num}</div>
              <h3 style={{
                fontFamily: 'var(--font-serif)', fontSize: '20px',
                fontWeight: 400, color: 'var(--charcoal)', marginBottom: '12px',
              }}>{v.title}</h3>
              <p style={{
                fontSize: '14px', fontWeight: 300,
                lineHeight: 1.8, color: 'var(--muted)',
              }}>{v.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div style={{ padding: '100px 80px', background: 'var(--cream)' }}>
        <div style={{ marginBottom: '64px', textAlign: 'center' }}>
          <p style={{
            fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '16px',
          }}>The people behind Àgbàr</p>
          <h2 style={{
            fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 400, color: 'var(--charcoal)', lineHeight: 1.15,
          }}>
            Meet our <em style={{ fontStyle: 'italic', color: 'var(--forest)' }}>founding team</em>
          </h2>
        </div>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px',
        }}>
          {team.map(member => (
            <div key={member.name} style={{
              background: '#fff', borderRadius: '4px',
              border: '1px solid var(--sand)',
              padding: '36px 28px',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 16px 48px rgba(58,90,39,0.1)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'none'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Avatar */}
              <div style={{
                width: '56px', height: '56px', borderRadius: '50%',
                background: 'var(--forest)', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-serif)', fontSize: '22px',
                color: '#fff', marginBottom: '20px',
              }}>
                {member.name.charAt(0)}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-serif)', fontSize: '20px',
                fontWeight: 400, color: 'var(--charcoal)', marginBottom: '6px',
              }}>{member.name}</h3>
              <p style={{
                fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: 'var(--terra)',
                marginBottom: '14px',
              }}>{member.role}</p>
              <p style={{
                fontSize: '13px', fontWeight: 300,
                lineHeight: 1.8, color: 'var(--muted)',
              }}>{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{
        background: 'var(--forest-dark)', padding: '100px 80px',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: 'var(--font-serif)', fontSize: '40px',
          fontWeight: 400, color: '#fff', lineHeight: 1.2,
          marginBottom: '16px',
        }}>
          Ready to get started?
        </p>
        <p style={{
          fontSize: '16px', fontWeight: 300, lineHeight: 1.8,
          color: 'rgba(255,255,255,0.5)', maxWidth: '480px',
          margin: '0 auto 40px',
        }}>
          Join the families who trust Àgbàr Life Care to look after their loved ones in Nigeria.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/packages" style={{
            display: 'inline-block', background: 'var(--terra)',
            color: '#fff', padding: '16px 40px', borderRadius: '2px',
            fontFamily: 'var(--font-sans)', fontSize: '13px',
            fontWeight: 500, letterSpacing: '0.08em',
            textTransform: 'uppercase', textDecoration: 'none',
          }}>View care packages →</a>
          <a href="/webinar" style={{
            display: 'inline-block', background: 'transparent',
            color: '#fff', padding: '15px 40px', borderRadius: '2px',
            fontFamily: 'var(--font-sans)', fontSize: '13px',
            fontWeight: 400, letterSpacing: '0.08em',
            textTransform: 'uppercase', textDecoration: 'none',
            border: '1px solid rgba(255,255,255,0.3)',
          }}>Join our webinar</a>
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
          div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
          div[style*="repeat(3, 1fr)"] { grid-template-columns: 1fr !important; }
          div[style*="repeat(4, 1fr)"] { grid-template-columns: 1fr 1fr !important; }
          div[style*="100px 80px"] { padding: 60px 24px !important; }
        }
      `}</style>
    </>
  )
}