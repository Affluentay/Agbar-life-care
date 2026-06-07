// components/Footer.tsx

export default function Footer() {
  const links = {
    Services: ['In-home care', 'Diaspora portal', 'Webinars', 'Care packages'],
    Family: ['How it works', 'Sign in to portal', 'Make a payment', 'Contact us'],
    Legal: ['Privacy policy', 'NDPR compliance', 'Terms of service', 'Data protection'],
  }

  return (
    <footer style={{ background: 'var(--forest-dark)', padding: '96px 80px 48px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '64px', marginBottom: '64px' }}>
        {/* Brand */}
        <div>
          <img src="/logo.png" alt="Àgbàr Life Care"
            style={{ height: '40px', width: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.8, marginBottom: '20px', display: 'block' }} />
          <p style={{ fontSize: '14px', fontWeight: 300, lineHeight: 1.8, color: 'rgba(255,255,255,0.35)', maxWidth: '260px' }}>
            Africa's premier geriatric care ecosystem — bridging Nigerian families across every border with clinical excellence, cultural dignity, and technology.
          </p>
        </div>

        {/* Link columns */}
        {Object.entries(links).map(([col, items]) => (
          <div key={col}>
            <div style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terra-light)', opacity: 0.7, marginBottom: '20px' }}>
              {col}
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {items.map(item => (
                <li key={item}>
                  <a href="#" style={{ fontSize: '13px', fontWeight: 300, color: 'rgba(255,255,255,0.35)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div style={{
        paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.07)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px',
      }}>
        <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.2)' }}>
          © 2026 Àgbàr Life Care. All rights reserved. Registered in Nigeria.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '10px', color: 'var(--forest-light)' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--forest-light)', display: 'inline-block' }} />
          SSL Secured · Flutterwave · NDPR Compliant
        </div>
      </div>
    </footer>
  )
}
