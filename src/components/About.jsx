import styles from './About.module.css'

const highlights = [
  { n: '12k+',  l: 'Clientes',    c: 'var(--blue)' },
  { n: '98%',   l: 'Satisfação',  c: 'var(--teal)' },
  { n: '3',     l: 'Unidades',    c: 'var(--orange)' },
  { n: '8 anos',l: 'Experiência', c: '#ff6b6b' },
]

const perks = [
  '✓ Certificação ISO 9001 de qualidade',
  '✓ Produtos 100% biodegradáveis',
  '✓ Sistema de recuperação e reutilização de água',
  '✓ Equipa formada e certificada',
]

export default function About() {
  return (
    <section id="sobre" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {/* Text */}
          <div className={styles.textSide}>
            <span className="section-tag">A nossa história</span>
            <h2 className={`section-title ${styles.title}`}>
              PAIXÃO PELA<br />
              <span className="gradient-text">PERFEIÇÃO</span>
            </h2>
            <p className={styles.para}>
              Fundada em 2017 no Porto, a AquaWash nasceu da crença de que o seu
              automóvel merece os melhores cuidados, sem complicações nem surpresas.
            </p>
            <p className={styles.para}>
              Com produtos ecológicos, tecnologia de ponta e uma equipa apaixonada,
              tornámo-nos a referência em lavagem automóvel premium no norte de Portugal.
            </p>
            <ul className={styles.perks}>
              {perks.map((p) => (
                <li key={p} className={styles.perk}>{p}</li>
              ))}
            </ul>
          </div>

          {/* Stats grid */}
          <div className={styles.metricGrid}>
            {highlights.map((h) => (
              <div key={h.l} className={styles.metricCard}>
                <div className={styles.metricValue} style={{ color: h.c }}>{h.n}</div>
                <div className={styles.metricLabel}>{h.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
