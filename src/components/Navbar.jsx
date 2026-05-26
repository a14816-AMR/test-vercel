import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const navLinks = [
  { id: 'servicos', label: 'Serviços' },
  { id: 'planos',   label: 'Planos' },
  { id: 'sobre',    label: 'Sobre' },
  { id: 'contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className={`container ${styles.inner}`}>
          {/* Logo */}
          <button className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className={styles.logoIcon}>💧</div>
            <span>AQUA<span className={styles.logoAccent}>WASH</span></span>
          </button>

          {/* Desktop links */}
          <div className={`${styles.links} hide-mobile`}>
            {navLinks.map(link => (
              <button key={link.id} className={styles.link} onClick={() => scrollTo(link.id)}>
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className={`${styles.ctas} hide-mobile`}>
            <button className="btn-outline" style={{ padding: '9px 22px', fontSize: 13 }} onClick={() => scrollTo('planos')}>
              Ver planos
            </button>
            <button className="btn-primary" style={{ padding: '10px 22px', fontSize: 13 }} onClick={() => scrollTo('contacto')}>
              Subscrever
            </button>
          </div>

          {/* Hamburger */}
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ''}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ''}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        <div className={styles.mobileLinks}>
          {navLinks.map((link, i) => (
            <button
              key={link.id}
              className={styles.mobileLink}
              style={{ transitionDelay: `${i * 60}ms` }}
              onClick={() => scrollTo(link.id)}
            >
              {link.label}
            </button>
          ))}
        </div>
        <div className={styles.mobileCtas}>
          <button className="btn-primary" style={{ width: '100%', padding: '16px', fontSize: 16 }} onClick={() => scrollTo('contacto')}>
            Subscrever agora →
          </button>
        </div>
      </div>
    </>
  )
}
