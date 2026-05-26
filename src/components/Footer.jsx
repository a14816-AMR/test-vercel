import { plans, locations } from '../data/index.js'
import styles from './Footer.module.css'

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>💧</div>
              <span>AQUA<span className={styles.logoAccent}>WASH</span></span>
            </div>
            <p className={styles.tagline}>
              Lavagem automóvel premium no Porto.<br />Qualidade sem compromisso.
            </p>
            <div className={styles.social}>
              {['📘', '📷', '🐦'].map((icon, i) => (
                <div key={i} className={styles.socialIcon}>{icon}</div>
              ))}
            </div>
          </div>

          {/* Planos */}
          <div className={styles.col}>
            <div className={styles.colTitle}>Planos</div>
            {plans.map((p) => (
              <button key={p.id} className={styles.colLink} onClick={() => scrollTo('planos')}>
                {p.name}
              </button>
            ))}
          </div>

          {/* Localização */}
          <div className={styles.col}>
            <div className={styles.colTitle}>Unidades</div>
            {locations.map((loc) => (
              <div key={loc.name} className={styles.location}>
                <div className={styles.locationName}>{loc.name}</div>
                <div className={styles.locationDetail}>{loc.address}</div>
                <div className={styles.locationDetail}>{loc.hours}</div>
              </div>
            ))}
          </div>

          {/* Contacto */}
          <div className={styles.col}>
            <div className={styles.colTitle}>Contactos</div>
            {['📞 +351 220 000 000', '📧 geral@aquawash.pt', '📍 Porto, Portugal'].map((c) => (
              <div key={c} className={styles.colText}>{c}</div>
            ))}
            <div className={styles.colTitle} style={{ marginTop: 24 }}>Horário geral</div>
            {['Seg–Sex: 8h – 20h', 'Sábado: 9h – 19h', 'Domingo: 10h – 17h'].map((h) => (
              <div key={h} className={styles.colText}>{h}</div>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© 2025 AquaWash. Todos os direitos reservados.</span>
          <div className={styles.bottomLinks}>
            <span className={styles.bottomLink}>Política de Privacidade</span>
            <span className={styles.sep}>·</span>
            <span className={styles.bottomLink}>Termos de Uso</span>
            <span className={styles.sep}>·</span>
            <span className={styles.bottomLink}>Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
