import { useState } from 'react'
import { plans } from '../data/index.js'
import styles from './Plans.module.css'

function PlanCard({ plan, selected, onSelect }) {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div
      className={`${styles.card} ${plan.popular ? styles.popular : ''} ${selected ? styles.selected : ''}`}
      style={{ '--accent': plan.accent }}
      onClick={() => onSelect(plan.id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onSelect(plan.id)}
      aria-pressed={selected}
    >
      {plan.popular && <div className={styles.popularBadge}>Mais Popular</div>}

      {selected && (
        <div className={styles.selectedDot} style={{ background: plan.accent }}>✓</div>
      )}

      <div className={styles.planIcon}>{plan.icon}</div>

      <div className={styles.planLabel} style={{ color: plan.accent }}>{plan.name}</div>

      <div className={styles.priceRow}>
        <span className={styles.price}>€{plan.price.toFixed(2).replace('.', ',')}</span>
        <span className={styles.per}>/mês</span>
      </div>

      <div className={styles.washes} style={{ color: plan.accent }}>
        {typeof plan.washes === 'number'
          ? `${plan.washes} lavagens/mês`
          : '🔥 Lavagens ilimitadas'}
      </div>

      <div className={styles.divider} />

      <ul className={styles.featureList}>
        {plan.features.map((f) => (
          <li key={f} className={styles.featureItem}>
            <span className={styles.checkIcon}>✓</span>
            <span className={styles.featureText}>{f}</span>
          </li>
        ))}
        {plan.notIncluded.map((f) => (
          <li key={f} className={`${styles.featureItem} ${styles.excluded}`}>
            <span className={styles.xIcon}>✕</span>
            <span className={styles.featureText}>{f}</span>
          </li>
        ))}
      </ul>

      <button
        className={styles.cta}
        style={selected
          ? { background: plan.accent, color: '#000' }
          : { background: '#1e1e2e', color: '#888' }}
        onClick={(e) => { e.stopPropagation(); scrollTo('contacto') }}
      >
        {selected ? 'Subscrever agora →' : 'Selecionar plano'}
      </button>
    </div>
  )
}

export default function Plans() {
  const [selected, setSelected] = useState('plus')

  return (
    <section id="planos" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-tag">Mensalidade flexível</span>
          <h2 className={`section-title ${styles.title}`}>
            PLANOS PARA<br />
            <span className="gradient-text">CADA NECESSIDADE</span>
          </h2>
          <p className={styles.sub}>
            Cancele quando quiser. Sem letras pequenas. Sem surpresas.
          </p>
        </div>

        <div className={styles.grid}>
          {plans.map((plan) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              selected={selected === plan.id}
              onSelect={setSelected}
            />
          ))}
        </div>

        <p className={styles.footnote}>
          Preços com IVA incluído · Pagamento mensal por débito automático · Cancele a qualquer momento
        </p>
      </div>
    </section>
  )
}
