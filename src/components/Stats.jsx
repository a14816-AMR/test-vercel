import { stats } from '../data/index.js'
import styles from './Stats.module.css'

export default function Stats() {
  return (
    <section id="stats" className={styles.section}>
      <div className="container">
        <div className="grid-4">
          {stats.map((s) => (
            <div key={s.label} className={styles.item}>
              <div className={styles.value}>{s.value}</div>
              <div className={styles.label}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
