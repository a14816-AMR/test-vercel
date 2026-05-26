import { useState } from 'react'
import { faqs } from '../data/index.js'
import styles from './FAQ.module.css'

function FaqItem({ faq, open, onToggle }) {
  return (
    <div className={styles.item}>
      <button className={styles.question} onClick={onToggle} aria-expanded={open}>
        <span>{faq.q}</span>
        <span className={`${styles.icon} ${open ? styles.iconOpen : ''}`}>+</span>
      </button>
      <div className={`${styles.answer} ${open ? styles.answerOpen : ''}`}>
        <p className={styles.answerText}>{faq.a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [active, setActive] = useState(null)

  const toggle = (i) => setActive(active === i ? null : i)

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-tag">Dúvidas frequentes</span>
          <h2 className={`section-title ${styles.title}`}>
            TEMOS AS<br />
            <span className="gradient-text">RESPOSTAS</span>
          </h2>
        </div>

        <div className={styles.list}>
          {faqs.map((faq, i) => (
            <FaqItem
              key={i}
              faq={faq}
              open={active === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
