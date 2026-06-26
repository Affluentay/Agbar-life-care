'use client'
// components/PackagesSection.tsx

interface PackagesProps {
  onSelect: (name: string, price: string) => void
}

const categories = [
  {
    id: 'nuru',
    name: 'Nuru Essentials',
    description: 'Essential in-home nursing care for your loved one — professional, dignified and evidence-based.',
    color: 'var(--forest)',
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
    description: 'Premium home care with enhanced clinical oversight — for families who want the very best.',
    color: 'var(--terra)',
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
    description: 'Flexible visit-based care — ideal for families who need periodic professional check-ins.',
    color: 'var(--bark)',
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

export default function PackagesSection({ onSelect }: PackagesProps) {
  return (
    <section id="packages" style={{ background: 'var(--cream)' }}>
      {/* Header */}
      <div style={{ padding: '100px 80px 60px', textAlign: 'center' }}>
        <p className="eyebrow reveal">Care packages</p>
        <h2 className="reveal" style={{
          fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px, 4vw, 56px)',
          fontWeight: 400, color: 'var(--charcoal)', lineHeight: 1.1,
          marginBottom: '18px',
        }}>
          Find the right plan for<br />
          <em style={{ fontStyle: 'italic', color: 'var(--forest)' }}>your family</em>
        </h2>
        <p className="reveal" style={{
          fontSize: '16px', fontWeight: 300, lineHeight: 1.9,
          color: 'var(--muted)', maxWidth: '540px', margin: '0 auto',
        }}>
          Three categories of care, nine packages — each designed for a different level of need and budget. All prices are per care cycle.
        </p>
      </div>

      {/* Categories */}
      {categories.map((cat, ci) => (
        <div key={cat.id} style={{
          padding: '0 80px 80px',
        }}>
          {/* Category header */}
          <div className="reveal" style={{
            display: 'flex', alignItems: 'center', gap: '16px',
            marginBottom: '32px', paddingBottom: '20px',
            borderBottom: `2px solid ${cat.color}`,
          }}>
            <div style={{
              width: '12px', height: '12px', borderRadius: '50%',
              background: cat.color, flexShrink: 0,
            }} />
            <div>
              <h3 style={{
                fontFamily: 'var(--font-serif)', fontSize: '28px',
                fontWeight: 400, color: 'var(--charcoal)', marginBottom: '4px',
              }}>{cat.name}</h3>
              <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--muted)' }}>
                {cat.description}
              </p>
            </div>
          </div>

          {/* Package cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
          }}>
            {cat.packages.map((pkg, pi) => (
              <div
                key={pkg.name}
                className="reveal hover-lift"
                style={{
                  background: pkg.featured ? 'var(--forest)' : '#fff',
                  border: `1px solid ${pkg.featured ? 'var(--forest)' : 'var(--sand)'}`,
                  borderRadius: '4px',
                  padding: '40px 32px',
                  position: 'relative',
                  transitionDelay: `${pi * 0.1}s`,
                }}
              >
                {pkg.featured && (
                  <div style={{
                    position: 'absolute', top: '-13px', left: '50%',
                    transform: 'translateX(-50%)',
                    background: cat.color === 'var(--forest)' ? 'var(--terra)' : cat.color,
                    color: '#fff',
                    fontSize: '10px', fontWeight: 500, letterSpacing: '0.12em',
                    textTransform: 'uppercase', padding: '4px 16px',
                    borderRadius: '20px', whiteSpace: 'nowrap',
                  }}>
                    Most popular
                  </div>
                )}

                {/* Days badge */}
                <div style={{
                  display: 'inline-block',
                  background: pkg.featured ? 'rgba(255,255,255,0.12)' : 'var(--cream)',
                  color: pkg.featured ? 'rgba(255,255,255,0.7)' : 'var(--muted)',
                  fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em',
                  textTransform: 'uppercase', padding: '4px 12px',
                  borderRadius: '20px', marginBottom: '16px',
                }}>
                  {pkg.days} days
                </div>

                <h4 style={{
                  fontFamily: 'var(--font-serif)', fontSize: '22px',
                  fontWeight: 400,
                  color: pkg.featured ? '#fff' : 'var(--charcoal)',
                  marginBottom: '20px',
                }}>{pkg.name}</h4>

                {/* Price */}
                <div style={{
                  paddingBottom: '20px',
                  borderBottom: `1px solid ${pkg.featured ? 'rgba(255,255,255,0.15)' : 'var(--sand)'}`,
                  marginBottom: '20px',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-serif)', fontSize: '42px',
                    fontWeight: 400, lineHeight: 1,
                    color: pkg.featured ? 'rgba(255,255,255,0.9)' : 'var(--charcoal)',
                  }}>
                    <span style={{ fontSize: '20px', verticalAlign: 'top', marginTop: '8px', display: 'inline-block' }}>₦</span>
                    {pkg.price.toLocaleString()}
                  </div>
                  <div style={{
                    fontSize: '12px', fontWeight: 300,
                    color: pkg.featured ? 'rgba(255,255,255,0.4)' : 'var(--muted)',
                    marginTop: '6px',
                  }}>
                    per cycle · approx. {pkg.gbp} GBP
                  </div>
                </div>

                {/* Features */}
                <ul style={{
                  listStyle: 'none', marginBottom: '32px',
                  display: 'flex', flexDirection: 'column', gap: 0,
                }}>
                  {pkg.features.map(feat => (
                    <li key={feat} style={{
                      fontSize: '13px', fontWeight: 300,
                      color: pkg.featured ? 'rgba(255,255,255,0.7)' : 'var(--muted)',
                      padding: '8px 0',
                      borderBottom: `1px solid ${pkg.featured ? 'rgba(255,255,255,0.08)' : 'var(--cream)'}`,
                      display: 'flex', alignItems: 'flex-start',
                      gap: '8px', lineHeight: 1.5,
                    }}>
                      <span style={{
                        color: pkg.featured ? 'var(--terra-light)' : 'var(--forest)',
                        fontWeight: 500, flexShrink: 0, marginTop: '1px',
                      }}>✓</span>
                      {feat}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => onSelect(pkg.name, `₦${pkg.price.toLocaleString()}/cycle`)}
                  style={{
                    width: '100%', padding: '13px',
                    fontFamily: 'var(--font-sans)', fontSize: '12px',
                    fontWeight: 500, letterSpacing: '0.1em',
                    textTransform: 'uppercase', borderRadius: '2px',
                    cursor: 'pointer', transition: 'all 0.22s',
                    background: pkg.featured ? 'var(--terra)' : 'transparent',
                    color: pkg.featured ? '#fff' : 'var(--forest)',
                    border: pkg.featured ? '1px solid var(--terra)' : '1px solid var(--forest)',
                  }}
                  className={pkg.featured ? 'pkg-btn-featured' : 'pkg-btn'}
                >
                  Select this plan
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* View all link */}
      <div style={{ textAlign: 'center', padding: '0 80px 100px' }}>
        <a href="/packages" style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          fontSize: '13px', fontWeight: 500, letterSpacing: '0.08em',
          textTransform: 'uppercase', color: 'var(--forest)',
          textDecoration: 'none', borderBottom: '1px solid var(--forest)',
          paddingBottom: '2px', transition: 'opacity 0.2s',
        }}>
          View all packages in detail →
        </a>
      </div>

      
    </section>
  )
}