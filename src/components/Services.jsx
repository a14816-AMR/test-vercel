import { services } from '../data/index.js'
import styles from './Services.module.css'

export default function Services() {
  return (
    <section id="servicos" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-tag">Os nossos serviços</span>
          <h2 className={`section-title ${styles.title}`}>
            CUIDAMOS DE<br />
            <span className="gradient-text">CADA DETALHE</span>
          </h2>
          <p className={styles.sub}>
            Da lavagem básica ao polimento profissional, cada serviço é realizado
            com atenção minuciosa e os melhores produtos do mercado.
          </p>
        </div>

        <div className="grid-3">
          {services.map((s) => (
            <div key={s.title} className={styles.card}>
              <div className={styles.icon}>{s.icon}</div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
