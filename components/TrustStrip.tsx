// components/TrustStrip.tsx

const items = [
  { icon: '🔒', label: 'Security', val: 'SSL + Encrypted' },
  { icon: '💳', label: 'Payments', val: 'Flutterwave' },
  { icon: '📋', label: 'Compliance', val: 'NDPR Compliant' },
  { icon: '⚡', label: 'Uptime target', val: '99.9%' },
  { icon: '🌍', label: 'Currencies', val: 'NGN · GBP · USD · EUR' },
]

export default function TrustStrip() {
  return (
    <div id="trust-strip" style={{
  background: 'var(--forest)',
  padding: '56px 80px',
  display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '32px',
  borderTop: '1px solid rgba(255,255,255,0.06)',
}}>
      {items.map(({ icon, label, val }) => (
        <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', textAlign: 'center' }}>
          <span style={{ fontSize: '24px', marginBottom: '4px' }}>{icon}</span>
          <span style={{ fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>{label}</span>
          <span style={{ fontFamily: 'var(--font-serif)', fontSize: '17px', color: '#fff' }}>{val}</span>
        </div>
      ))}

    </div>
  )
}
