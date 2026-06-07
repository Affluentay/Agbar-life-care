// components/PackagesSection.tsx

const packages = [
  {
    tier: 'Essential tier',
    name: 'Nuru Basic',
    naira: '45,000',
    gbp: '£24',
    featured: false,
    features: [
      '3 in-home nurse visits per week',
      'Daily vitals check and logging',
      'Family WhatsApp updates',
      'Medication reminders',
      'Emergency response protocol',
    ],
  },
  {
    tier: 'Signature tier',
    name: 'Nuru Essentials Odogwu',
    naira: '85,000',
    gbp: '£45',
    featured: true,
    features: [
      'Daily in-home nurse visits',
      'Full Diaspora Bridge portal access',
      'Real-time care log (24hr view)',
      'Monthly clinical report PDF',
      'Video consultations with nurse',
      'Medication management',
      'Priority emergency response',
    ],
  },
  {
    tier: 'Premium tier',
    name: 'Nuru Premium',
    naira: '140,000',
    gbp: '£74',
    featured: false,
    features: [
      'Dedicated live-in care companion',
      'Full portal + priority support',
      'Weekly GP teleconsultation',
      'Physiotherapy sessions',
      'Nutritional planning and oversight',
      'Cultural and social engagement',
    ],
  },
]

interface PackagesProps {
  onSelect: (name: string, price: string) => void
}

export default function PackagesSection({ onSelect }: PackagesProps) {
  return (
    <section id="packages" style={{ padding: '140px 80px', background: 'var(--cream)' }}>
      <div className="reveal" style={{ marginBottom: '72px' }}>
        <p className="eyebrow">Care packages</p>
        <h2 style={{
          fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px, 4vw, 56px)',
          fontWeight: 400, color: 'var(--charcoal)', lineHeight: 1.1, marginBottom: '18px',
        }}>
          The <em style={{ fontStyle: 'italic', color: 'var(--forest)' }}>Nuru Essentials</em> collection
        </h2>
        <p style={{ fontSize: '16px', fontWeight: 300, lineHeight: 1.9, color: 'var(--muted)', maxWidth: '540px' }}>
          Three tiers of care designed for different family needs and budgets. All packages include digital family access and automated care updates.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
        {packages.map((pkg, i) => (
          <div
            key={pkg.name}
            className={`reveal hover-lift ${pkg.featured ? 'pkg-featured' : ''}`}
            style={{
              background: pkg.featured ? 'var(--forest)' : '#fff',
              border: `1px solid ${pkg.featured ? 'var(--forest)' : 'var(--sand)'}`,
              borderRadius: '4px',
              padding: '52px 40px',
              position: 'relative',
              transitionDelay: `${i * 0.12}s`,
            }}
          >
            {pkg.featured && (
              <div style={{
                position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)',
                background: 'var(--terra)', color: '#fff',
                fontSize: '10px', fontWeight: 500, letterSpacing: '0.12em',
                textTransform: 'uppercase', padding: '5px 20px', borderRadius: '20px',
                whiteSpace: 'nowrap',
              }}>
                Most popular
              </div>
            )}

            <p style={{
              fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase',
              color: pkg.featured ? 'rgba(255,255,255,0.45)' : 'var(--muted)', marginBottom: '10px',
            }}>{pkg.tier}</p>

            <h3 style={{
              fontFamily: 'var(--font-serif)', fontSize: '24px', fontWeight: 400,
              color: pkg.featured ? '#fff' : 'var(--charcoal)', marginBottom: '28px',
            }}>{pkg.name}</h3>

            <div style={{
              paddingBottom: '28px',
              borderBottom: `1px solid ${pkg.featured ? 'rgba(255,255,255,0.15)' : 'var(--sand)'}`,
              marginBottom: '28px',
            }}>
              <div style={{
                fontFamily: 'var(--font-serif)', fontSize: '52px', fontWeight: 400,
                color: pkg.featured ? 'rgba(255,255,255,0.9)' : 'var(--charcoal)', lineHeight: 1,
              }}>
                <span style={{ fontSize: '22px', verticalAlign: 'top', marginTop: '10px', display: 'inline-block' }}>₦</span>
                {pkg.naira}
              </div>
              <div style={{
                fontSize: '13px', fontWeight: 300,
                color: pkg.featured ? 'rgba(255,255,255,0.4)' : 'var(--muted)',
                marginTop: '6px',
              }}>
                per month · approx. {pkg.gbp} GBP
              </div>
            </div>

            <ul style={{ listStyle: 'none', marginBottom: '40px', display: 'flex', flexDirection: 'column', gap: 0 }}>
              {pkg.features.map(feat => (
                <li key={feat} style={{
                  fontSize: '13px', fontWeight: 300,
                  color: pkg.featured ? 'rgba(255,255,255,0.7)' : 'var(--muted)',
                  padding: '10px 0',
                  borderBottom: `1px solid ${pkg.featured ? 'rgba(255,255,255,0.1)' : 'var(--cream)'}`,
                  display: 'flex', alignItems: 'flex-start', gap: '10px', lineHeight: 1.5,
                }}>
                  <span style={{ color: pkg.featured ? 'var(--terra-light)' : 'var(--forest)', fontWeight: 500, flexShrink: 0, marginTop: '1px' }}>✓</span>
                  {feat}
                </li>
              ))}
            </ul>

            <button
              onClick={() => onSelect(pkg.name, `₦${pkg.naira}/month`)}
              style={{
                width: '100%', padding: '14px',
                fontFamily: 'var(--font-sans)', fontSize: '12px', fontWeight: 500,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                borderRadius: '2px', cursor: 'pointer', transition: 'all 0.22s',
                background: pkg.featured ? 'var(--terra)' : 'transparent',
                color: pkg.featured ? '#fff' : 'var(--forest)',
                border: pkg.featured ? '1px solid var(--terra)' : '1px solid var(--forest)',
              }}
              className={pkg.featured ? 'pkg-btn-featured' : 'pkg-btn'}
            >
              {pkg.featured ? 'Subscribe now' : 'Start this plan'}
            </button>
          </div>
        ))}
      </div>
      `
    </section>
  )
}
