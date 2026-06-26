'use client'

import { useEffect, useState } from 'react'

interface NavbarProps {
  onBookClick: () => void
}

export default function Navbar({ onBookClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 56px', height: '72px',
        background: scrolled ? 'rgba(26,26,20,0.97)' : 'rgba(58,90,39,0.96)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.3)' : 'none',
        transition: 'all 0.35s ease',
      }}>

        {/* Logo */}
        <a href="/" style={{ display: 'block', lineHeight: 0 }}>
          <img
            src="/logo.png"
            alt="Àgbàr Life Care"
            style={{ height: '36px', width: 'auto', filter: 'brightness(0) invert(1)' }}
          />
        </a>

        {/* Desktop links */}
        <ul style={{
          display: 'flex', gap: '36px', listStyle: 'none', margin: 0, padding: 0,
        }} className="nav-desktop">
          <li>
            <button onClick={() => scrollTo('services')} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontSize: '12px', fontWeight: 400, letterSpacing: '0.12em',
              textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)',
              fontFamily: 'var(--font-sans)', padding: '4px 0',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
            >Services</button>
          </li>
          <li>
            
          </li>
          <li>
            <a href="/packages" style={{
              fontSize: '12px', fontWeight: 400, letterSpacing: '0.12em',
              textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)',
              fontFamily: 'var(--font-sans)', textDecoration: 'none', display: 'block',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
            >Packages</a>
          </li>
          <li>
            <a href="/about" style={{
              fontSize: '12px', fontWeight: 400, letterSpacing: '0.12em',
              textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)',
              fontFamily: 'var(--font-sans)', textDecoration: 'none', display: 'block',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
            >About</a>
          </li>
          <li>
            <a href="/contact" style={{
              fontSize: '12px', fontWeight: 400, letterSpacing: '0.12em',
              textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)',
              fontFamily: 'var(--font-sans)', textDecoration: 'none', display: 'block',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
            >Contact</a>
          </li>
        </ul>

        {/* CTA */}
        <button
          onClick={onBookClick}
          className="btn btn-terra"
          style={{ fontSize: '12px', padding: '11px 24px' }}
        >
          Book a care plan
        </button>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="nav-hamburger"
          style={{
            display: 'none', background: 'none', border: 'none',
            cursor: 'pointer', flexDirection: 'column', gap: '5px', padding: '4px',
          }}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: 'block', width: '22px', height: '2px',
              background: '#fff', borderRadius: '1px', transition: 'all 0.2s',
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: '72px', left: 0, right: 0, zIndex: 499,
          background: 'rgba(26,26,20,0.98)', backdropFilter: 'blur(16px)',
          padding: '24px 32px', borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}>
          <button onClick={() => scrollTo('services')} style={{
            display: 'block', width: '100%', textAlign: 'left',
            background: 'none', border: 'none', cursor: 'pointer',
            fontSize: '14px', fontWeight: 400, letterSpacing: '0.1em',
            textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)',
            fontFamily: 'var(--font-sans)', padding: '14px 0',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
          }}>Services</button>

          {[
            ['Portal', '/Portal'],
            ['Packages', '/packages'],
            ['About', '/about'],
            ['Contact', '/contact'],
          ].map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)} style={{
              display: 'block', width: '100%', textAlign: 'left',
              fontSize: '14px', fontWeight: 400, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)',
              fontFamily: 'var(--font-sans)', padding: '14px 0',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              textDecoration: 'none',
            }}>{label}</a>
          ))}

          <button
            onClick={() => { onBookClick(); setMenuOpen(false) }}
            className="btn btn-terra"
            style={{ marginTop: '20px', width: '100%' }}
          >
            Book a care plan
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
          nav { padding: 0 24px !important; }
          nav .btn-terra { display: none !important; }
        }
      `}</style>
    </>
  )
}