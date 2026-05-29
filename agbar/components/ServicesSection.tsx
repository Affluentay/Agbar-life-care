// components/ServicesSection.tsx

const services = [
  {
    num: '01',
    title: 'In-home clinical care',
    text: 'Qualified nurses providing bedside care, medication management, vitals monitoring, and wound care — in the comfort of your parent\'s home in Nigeria.',
  },
  {
    num: '02',
    title: 'Digital health education',
    text: 'Live webinars and on-demand content for diaspora families — understand geriatric care, ask clinical questions, and make informed decisions remotely.',
  },
  {
    num: '03',
    title: 'Diaspora Bridge portal',
    text: 'Secure family login where a son in Dallas or daughter in London views real-time care logs, vitals history, and communicates with the clinical team.',
  },
  {
    num: '04',
    title: 'Evidence-based protocols',
    text: 'Every care plan is grounded in international geriatric research. We bring Africa\'s elderly the same standards used in London or Toronto.',
  },
  {
    num: '05',
    title: 'Cultural sensitivity',
    text: 'Care plans that honour Nigerian traditions, languages, family structures, and spiritual practices. Dignity is never a compromise.',
  },
  {
    num: '06',
    title: 'International payments',
    text: 'Pay in GBP, USD, EUR, or NGN through a frictionless gateway. Automated receipts and welcome packages trigger instantly upon payment.',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" style={{ padding: '140px 80px', background: '#fff' }}>
      <div className="reveal" style={{ marginBottom: '80px' }}>
        <p className="eyebrow">What we do</p>
        <h2 style={{
          fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px, 4vw, 56px)',
          fontWeight: 400, color: 'var(--charcoal)', lineHeight: 1.1, marginBottom: '18px',
        }}>
          A complete ecosystem for<br />
          <em style={{ fontStyle: 'italic', color: 'var(--forest)' }}>geriatric wellbeing</em>
        </h2>
        <p style={{
          fontSize: '16px', fontWeight: 300, lineHeight: 1.9,
          color: 'var(--muted)', maxWidth: '540px',
        }}>
          Six integrated pillars built on global gold-standard protocols, designed specifically for Nigerian families at home and abroad.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1px',
        background: 'var(--sand)',
      }}>
        {services.map((svc, i) => (
          <div
            key={svc.num}
            className="reveal svc-card"
            style={{
              background: 'var(--ivory)',
              padding: '52px 40px',
              position: 'relative',
              overflow: 'hidden',
              transitionDelay: `${(i % 3) * 0.1}s`,
            }}
          >
            <div className="svc-num" style={{
              fontFamily: 'var(--font-serif)', fontSize: '80px',
              fontWeight: 400, color: 'var(--sand)',
              lineHeight: 1, marginBottom: '28px',
              transition: 'color 0.3s',
            }}>
              {svc.num}
            </div>
            <h3 style={{
              fontFamily: 'var(--font-serif)', fontSize: '22px',
              fontWeight: 400, color: 'var(--charcoal)', marginBottom: '14px',
            }}>
              {svc.title}
            </h3>
            <p style={{ fontSize: '14px', fontWeight: 300, lineHeight: 1.9, color: 'var(--muted)' }}>
              {svc.text}
            </p>
            {/* Animated bottom bar */}
            <div className="svc-bar" style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px',
              background: 'var(--terra)', transform: 'scaleX(0)', transformOrigin: 'left',
              transition: 'transform 0.4s ease',
            }} />
          </div>
        ))}
      </div>

      <style>{`
        .svc-card:hover { background: var(--cream) !important; }
        .svc-card:hover .svc-num { color: rgba(196,94,30,0.2) !important; }
        .svc-card:hover .svc-bar { transform: scaleX(1) !important; }
        @media (max-width: 900px) {
          #services { padding: 80px 24px !important; }
          #services > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
