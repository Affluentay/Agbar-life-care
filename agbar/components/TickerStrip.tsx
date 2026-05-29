// components/TickerStrip.tsx

const items = [
  'Culturally sensitive geriatric care',
  'Diaspora Bridge portal — live care logs',
  'Pay in GBP · USD · EUR · NGN',
  'Evidence-based protocols',
  'Zero-touch payment automation',
  'NDPR + SSL compliant',
  '99.9% uptime target',
  'Serving families across 3 continents',
]

export default function TickerStrip() {
  // Duplicate items so the loop is seamless
  const doubled = [...items, ...items]

  return (
    <div style={{
      background: 'var(--terra)',
      padding: '15px 0',
      overflow: 'hidden',
      borderTop: '1px solid rgba(255,255,255,0.1)',
    }}>
      <div className="animate-ticker" style={{ display: 'flex', whiteSpace: 'nowrap' }}>
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              fontSize: '12px', fontWeight: 500, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: '#fff',
              padding: '0 48px',
              display: 'inline-flex', alignItems: 'center', gap: '16px',
            }}
          >
            <span style={{
              width: '4px', height: '4px', borderRadius: '50%',
              background: 'rgba(255,255,255,0.5)', display: 'inline-block', flexShrink: 0,
            }} />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
