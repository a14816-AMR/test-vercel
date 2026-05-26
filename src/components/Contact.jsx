import { useState } from 'react'
import { plans } from '../data/index.js'
import styles from './Contact.module.css'

const initialForm = { name: '', phone: '', email: '', plan: '', car: '' }

export default function Contact() {
  const [form, setForm]       = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError]     = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.plan) {
      setError('Por favor preencha os campos obrigatórios (Nome, Email e Plano).')
      return
    }
    // In a real app you'd POST to an API here
    setSubmitted(true)
  }

  return (
    <section id="contacto" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-tag">Comece hoje</span>
          <h2 className={`section-title ${styles.title}`}>
            SUBSCREVA O SEU<br />
            <span className="gradient-text">PLANO AGORA</span>
          </h2>
          <p className={styles.sub}>
            Preencha o formulário e entraremos em contacto nas próximas 24h.
          </p>
        </div>

        <div className={styles.card}>
          {submitted ? (
            <div className={styles.success}>
              <div className={styles.successIcon}>🎉</div>
              <h3 className={styles.successTitle}>Pedido recebido!</h3>
              <p className={styles.successText}>
                Obrigado pelo seu interesse. A nossa equipa vai contactá-lo brevemente para confirmar a subscrição.
              </p>
              <button className="btn-outline" onClick={() => setSubmitted(false)}>
                Novo pedido
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className={styles.row2}>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="name">Nome *</label>
                  <input
                    id="name" name="name" type="text"
                    className="form-input"
                    placeholder="João Silva"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="phone">Telefone</label>
                  <input
                    id="phone" name="phone" type="tel"
                    className="form-input"
                    placeholder="+351 912 345 678"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="email">Email *</label>
                <input
                  id="email" name="email" type="email"
                  className="form-input"
                  placeholder="joao@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="plan">Plano de interesse *</label>
                <select
                  id="plan" name="plan"
                  className="form-input"
                  value={form.plan}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecionar plano...</option>
                  {plans.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} — €{p.price.toFixed(2).replace('.', ',')}/mês
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="car">Viatura</label>
                <input
                  id="car" name="car" type="text"
                  className="form-input"
                  placeholder="ex: Toyota Corolla 2022"
                  value={form.car}
                  onChange={handleChange}
                />
              </div>

              {error && <p className={styles.error}>{error}</p>}

              <button type="submit" className={`btn-primary ${styles.submit}`}>
                Enviar pedido →
              </button>

              <p className={styles.privacy}>
                Ao submeter concorda com a nossa{' '}
                <span className={styles.privacyLink}>política de privacidade</span>.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
