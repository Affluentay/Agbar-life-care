// components/PortalSection.tsx

const navItems = ['Care dashboard', 'Care log', 'Vitals history', 'Reports', 'Message nurse', 'Subscription']
const cards = [
  { label: "Today's status", val: 'Stable', sub: '✓ Nurse checked in 8:14am' },
  { label: 'Blood pressure', val: '122/78', sub: '✓ Within normal range' },
  { label: 'Medications', val: '3 / 3', sub: '✓ All administered on time' },
]
const logs = [
  { time: '08:14', type: 'med', text: 'Morning medications administered: Amlodipine 5mg, Lisinopril 10mg, and Metformin 500mg. BP recorded: 122/78 mmHg.', nurse: 'Nurse Patience A.' },
  { time: '10:30', type: 'note', text: 'Patient in good spirits. Had breakfast — jollof rice and fish — with good appetite. No complaints of pain or discomfort.', nurse: 'Nurse Patience A.' },
  { time: '13:05', type: 'med', text: 'Afternoon vitals: BP 118/76, SpO2 98%, Temp 36.7°C. Afternoon rest completed. Patient sleeping soundly.', nurse: 'Nurse Patience A.' },
]

export default function PortalSection() {
  return (
    <section id="portal" style={{ padding: '140px 80px', background: 'var(--charcoal)' }}>
      {/* Header */}
      <div style={{ marginBottom: '64px' }}>
        <p className="eyebrow reveal" style={{ color: 'var(--terra-light)' }}>The Diaspora Bridge</p>
        <h2 className="reveal" style={{
          fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px, 4vw, 56px)',
          fontWeight: 400, color: '#fff', lineHeight: 1.1, marginBottom: '18px',
        }}>
          Your parent's care,<br />
          <em style={{ fontStyle: 'italic', color: 'var(--terra-light)' }}>visible from anywhere</em>
        </h2>
        <p className="reveal" style={{
          fontSize: '16px', fontWeight: 300, lineHeight: 1.9,
          color: 'rgba(255,255,255,0.5)', maxWidth: '560px',
        }}>
          Log in from London, Dallas, or Toronto and see exactly what happened today — medications, vitals, nurse notes. Àgbàr gives you the peace of mind that used to require flying home.
        </p>
      </div>

      {/* Mockup */}
      <div className="reveal-scale" style={{
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '8px', overflow: 'hidden',
        boxShadow: '0 40px 120px rgba(0,0,0,0.5)',
      }}>
        {/* Top bar */}
        <div style={{
          background: 'rgba(255,255,255,0.05)', padding: '14px 24px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img src="/logo.jpg" alt="Àgbàr" style={{ height: '22px', filter: 'brightness(0) invert(1)', opacity: 0.85 }} />
            <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em' }}>Portal</span>
          </div>
          <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.04em' }}>
            Adaeze Okonkwo · London, UK
          </div>
        </div>

        {/* Body */}
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr' }}>
          {/* Sidebar */}
          <div style={{ background: 'rgba(0,0,0,0.25)', borderRight: '1px solid rgba(255,255,255,0.05)', padding: '28px 0' }}>
            {navItems.map((item, i) => (
              <div key={item} style={{
                padding: i === 0 ? '9px 20px 9px 18px' : '9px 20px',
                fontSize: '12px',
                color: i === 0 ? 'var(--terra-light)' : 'rgba(255,255,255,0.3)',
                cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px',
                background: i === 0 ? 'rgba(196,94,30,0.12)' : 'transparent',
                borderLeft: i === 0 ? '2px solid var(--terra)' : '2px solid transparent',
                transition: 'all 0.2s',
              }}>
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'currentColor', opacity: 0.5, flexShrink: 0 }} />
                {item}
              </div>
            ))}
          </div>

          {/* Content */}
          <div style={{ padding: '28px' }}>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '26px', fontWeight: 400, color: '#fff', marginBottom: '4px' }}>
              Good morning, <em style={{ fontStyle: 'italic', color: 'var(--terra-light)' }}>Adaeze.</em>
            </div>
            <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.28)', marginBottom: '22px', letterSpacing: '0.04em' }}>
              Saturday, May 16 · Chief (Mrs.) Ngozi Okonkwo · Benin City
            </div>

            {/* Stat cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '22px' }}>
              {cards.map(c => (
                <div key={c.label} style={{
                  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '4px', padding: '16px',
                }}>
                  <div style={{ fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', marginBottom: '8px' }}>{c.label}</div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', color: '#fff' }}>{c.val}</div>
                  <div style={{ fontSize: '11px', color: 'var(--forest-light)', marginTop: '4px' }}>{c.sub}</div>
                </div>
              ))}
            </div>

            {/* Care log */}
            <div style={{ fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', marginBottom: '12px' }}>
              Today's care log
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {logs.map(log => (
                <div key={log.time} style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: '4px',
                  padding: '12px 16px', display: 'flex', gap: '14px',
                  borderLeft: `2px solid ${log.type === 'med' ? 'var(--forest-light)' : 'var(--terra)'}`,
                }}>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.25)', whiteSpace: 'nowrap', minWidth: '40px' }}>{log.time}</div>
                  <div>
                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>{log.text}</div>
                    <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.25)', marginTop: '4px' }}>{log.nurse}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #portal { padding: 80px 24px !important; }
          #portal .portal-sidebar { display: none; }
        }
      `}</style>
    </section>
  )
}
