import { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'
import styles from './ContactoModal.module.css'

const AREAS = ['RRHH', 'Administración', 'Turismo', 'Producción']

const ROUTE = { to: 'rrhh@sintectur.com.ar', cc: 'manumambretti@sintectur.com.ar' }

const EMPTY = { from_name: '', company: '', subject: '', reply_to: '', message: '' }

export default function CarreraModal({ onClose }) {
  const [fields, setFields] = useState(EMPTY)
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handler)
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const set = (key) => (e) => setFields(f => ({ ...f, [key]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: fields.from_name,
          company:   fields.company,
          subject:   fields.subject,
          reply_to:  fields.reply_to,
          message:   fields.message,
          to_email:  ROUTE.to,
          cc_email:  ROUTE.cc,
        },
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      setStatus('success')
      setFields(EMPTY)
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.panel} onClick={e => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose} aria-label="Cerrar">✕</button>

        <h2 className={styles.title}>Carrera.</h2>
        <p className={styles.sub}>
          Sé parte de nuestro equipo y ayúdanos a crecer.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>

          <div className={styles.field}>
            <label htmlFor="cr-nombre">Nombre</label>
            <input
              id="cr-nombre"
              type="text"
              placeholder="Tu nombre"
              value={fields.from_name}
              onChange={set('from_name')}
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="cr-empresa">Empresa</label>
            <input
              id="cr-empresa"
              type="text"
              placeholder="Tu empresa"
              value={fields.company}
              onChange={set('company')}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="cr-area">Área de interés</label>
            <div className={styles.selectWrap}>
              <select
                id="cr-area"
                value={fields.subject}
                onChange={set('subject')}
                required
              >
                <option value="" disabled>Seleccioná un área</option>
                {AREAS.map(a => (
                  <option key={a} value={a}>{a}</option>
                ))}
              </select>
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="cr-email">Email</label>
            <input
              id="cr-email"
              type="email"
              placeholder="correo@empresa.com"
              value={fields.reply_to}
              onChange={set('reply_to')}
              required
            />
          </div>

          <div className={styles.textareaField}>
            <label htmlFor="cr-mensaje">Mensaje</label>
            <textarea
              id="cr-mensaje"
              className={styles.textarea}
              rows={5}
              placeholder="Contanos sobre vos y por qué querés sumarte al equipo."
              value={fields.message}
              onChange={set('message')}
            />
          </div>

          {status === 'success' && (
            <p className={styles.feedbackSuccess}>
              ¡Postulación enviada! Te contactaremos a la brevedad.
            </p>
          )}
          {status === 'error' && (
            <p className={styles.feedbackError}>
              Ocurrió un error al enviar. Por favor intentá de nuevo.
            </p>
          )}

          <button
            type="submit"
            className={styles.submit}
            disabled={status === 'sending' || status === 'success'}
          >
            {status === 'sending' ? 'Enviando...' : status === 'success' ? 'Enviado' : 'Enviar postulación'}
          </button>

        </form>
      </div>
    </div>
  )
}
