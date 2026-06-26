'use client'
// components/HeroSection.tsx

import { useEffect, useRef } from 'react'

interface HeroProps {

  onPackagesClick: () => void
}

export default function HeroSection({ onPackagesClick }: HeroProps) {
  const particlesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = particlesRef.current
    if (!container) return
    const colors = ['#c45e1e', '#e0854a', '#4e7a35', 'rgba(255,255,255,0.6)']
    for (let i = 0; i < 28; i++) {
      const p = document.createElement('div')
      const size = 2 + Math.random() * 5
      Object.assign(p.style, {
        position: 'absolute',
        width: size + 'px',
        height: size + 'px',
        borderRadius: '50%',
        background: colors[Math.floor(Math.random() * colors.length)],
        left: Math.random() * 100 + '%',
        opacity: '0',
        animation: `floatUp ${8 + Math.random() * 16}s linear ${Math.random() * 14}s infinite`,
      })
      container.appendChild(p)
    }
    return () => { container.innerHTML = '' }
  }, [])

  const stats = [
    { val: '24/7', label: 'Care monitoring' },
    { val: '<3s', label: 'Page load guarantee' },
    { val: '100%', label: 'SSL secured' },
    { val: '₦0', label: 'Hidden fees' },
  ]

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '120px 80px 80px',
        background: 'var(--forest-dark)',
      }}
    >
      {/* Background gradients */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
        background: `
          radial-gradient(ellipse 60% 60% at 85% 40%, rgba(196,94,30,0.18) 0%, transparent 70%),
          radial-gradient(ellipse 50% 70% at 10% 80%, rgba(78,122,53,0.25) 0%, transparent 60%),
          radial-gradient(ellipse 80% 40% at 50% 0%, rgba(58,90,39,0.6) 0%, transparent 80%)
        `,
      }} />

      {/* Particles */}
      <div ref={particlesRef} style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none', overflow: 'hidden' }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1100px' }}>

        {/* Logo */}
        <div style={{ marginBottom: '48px', animation: 'fadeDown 1s ease 0.2s both' }}>
          <img src="/logo.png" alt="Àgbàr Life Care"
            style={{ height: '60px', width: 'auto', filter: 'brightness(0) invert(1)' }} />
        </div>

        <p style={{
          fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em',
          textTransform: 'uppercase', color: 'var(--terra-light)',
          marginBottom: '22px', animation: 'fadeUp 1s ease 0.4s both',
        }}>
          Africa's Premier Geriatric Care Ecosystem
        </p>

        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(48px, 7vw, 84px)',
          fontWeight: 400, lineHeight: 1.05, color: '#fff',
          marginBottom: '28px', animation: 'fadeUp 1s ease 0.5s both',
        }}>
          Dignified care,<br />
          <em style={{ fontStyle: 'italic', color: 'var(--terra-light)' }}>across every</em><br />
          border.
        </h1>

        <p style={{
          fontSize: '17px', fontWeight: 300, lineHeight: 1.9,
          color: 'rgba(255,255,255,0.65)', maxWidth: '520px',
          marginBottom: '48px', animation: 'fadeUp 1s ease 0.6s both',
        }}>
          Àgbàr bridges the gap between your elderly parents in Nigeria and your family across the globe — with evidence-based, culturally sensitive geriatric care.
        </p>

        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', animation: 'fadeUp 1s ease 0.7s both' }}>
          <button className="btn btn-terra">
          </button>
          <button className="btn btn-ghost" onClick={onPackagesClick}>
            Explore care packages
          </button>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex', gap: '52px', flexWrap: 'wrap',
          marginTop: '72px', paddingTop: '48px',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          animation: 'fadeUp 1s ease 0.9s both',
        }}>
          {stats.map(({ val, label }) => (
            <div key={label}>
              <div style={{
                fontFamily: 'var(--font-serif)', fontSize: '40px',
                fontWeight: 400, color: '#fff', lineHeight: 1,
              }}>{val}</div>
              <div style={{
                fontSize: '11px', letterSpacing: '0.1em',
                textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)',
                marginTop: '6px',
              }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: 'absolute', bottom: '36px', left: '50%', transform: 'translateX(-50%)',
        zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
        animation: 'fadeUp 1s ease 1.2s both',
      }}>
        <span style={{ fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>
          Scroll
        </span>
        <div className="scroll-line" />
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatUp {
          0%   { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          10%  { opacity: 0.35; }
          90%  { opacity: 0.15; }
          100% { transform: translateY(-15vh) rotate(540deg) translateX(40px); opacity: 0; }
        }
        @media (max-width: 768px) {
          section#home { padding: 110px 24px 60px !important; }
        }
      `}</style>
    </section>
  )
}
