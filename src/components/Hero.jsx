import styles from './Hero.module.css'

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className={styles.hero}>
      {/* Background grid overlay */}
      <div className={styles.grid} aria-hidden="true" />

      {/* Glow blobs */}
      <div className={`${styles.blob} ${styles.blobBlue}`}  aria-hidden="true" />
      <div className={`${styles.blob} ${styles.blobTeal}`}  aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        {/* Left — text */}
        <div className={`${styles.content} animate-fadeup`}>
          <div className="section-tag">🏆 Nº 1 em Porto · Desde 2017</div>

          <h1 className={styles.headline}>
            O SEU CARRO<br />
            <span className="gradient-text">MERECE</span><br />
            O MELHOR
          </h1>

          <p className={styles.sub}>
            Lavagem profissional com mensalidade sem compromisso.
            Produtos premium, equipa especializada e resultados que falam por si.
          </p>

          <div className={styles.ctas}>
            <button className="btn-primary" style={{ fontSize: 16, padding: '16px 36px' }} onClick={() => scrollTo('planos')}>
              Escolher plano →
            </button>
            <button className="btn-outline" onClick={() => scrollTo('servicos')}>
              Ver serviços
            </button>
          </div>

          <div className={styles.badges}>
            {['✓ Sem permanência', '✓ Produtos certificados', '✓ Garantia de satisfação'].map(t => (
              <span key={t} className={styles.badge}>{t}</span>
            ))}
          </div>
        </div>

        {/* Right — floating card */}
        <div className={`${styles.floatingCard} animate-float`} aria-hidden="true">
          <div className={styles.planCard}>
            <div className={styles.planIcon}>🚗</div>
            <div className={styles.planName}>Plano Plus</div>
            <div className={styles.planPrice}>
              €39<span className={styles.planPer}>/mês</span>
            </div>
            <div className={styles.planWashes}>4 lavagens incluídas</div>
          </div>

          <div className={styles.reviewCard}>
            <div className={styles.reviewIcon}>⭐</div>
            <div>
              <div className={styles.reviewScore}>4.9 / 5 avaliação</div>
              <div className={styles.reviewCount}>+2.400 reviews</div>
            </div>
          </div>

          <div className={styles.reviewCard}>
            <div className={styles.reviewIcon}>✅</div>
            <div>
              <div className={styles.reviewScore}>Certificado ISO 9001</div>
              <div className={styles.reviewCount}>Qualidade garantida</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className={styles.scrollHint} onClick={() => scrollTo('stats')} role="button" aria-label="Scroll down">
        <div className={styles.scrollDot} />
      </div>
    </section>
  )
}
