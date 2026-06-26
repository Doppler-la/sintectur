import { useEffect } from 'react'
import styles from './ContactoModal.module.css'

const ASUNTOS = [
  'Corporate Travel',
  'Incentive & Travel',
  'Sports & Travel',
  'Meetings & Events',
  'Travel Experience',
  'Experience Argentina',
  'Cruise Logistics (Hapag Lloyd)',
  'Orchestra Travel',
  'Study & Travel',
  'Becciu',
  'RRHH',
]

export default function ContactoModal({ onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handler)
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.panel} onClick={e => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose} aria-label="Cerrar">✕</button>

        <h2 className={styles.title}>Contacto.</h2>
        <p className={styles.sub}>
          Contanos sobre tu empresa y te armamos una propuesta a medida.
          Respondemos en menos de 24 horas.
        </p>

        <form className={styles.form} onSubmit={e => e.preventDefault()}>

          <div className={styles.field}>
            <label htmlFor="cm-nombre">Nombre</label>
            <input id="cm-nombre" type="text" placeholder="Tu nombre" required />
          </div>

          <div className={styles.field}>
            <label htmlFor="cm-empresa">Empresa</label>
            <input id="cm-empresa" type="text" placeholder="Tu empresa" />
          </div>

          <div className={styles.field}>
            <label htmlFor="cm-asunto">Asunto</label>
            <div className={styles.selectWrap}>
              <select id="cm-asunto" defaultValue="">
                <option value="" disabled>Seleccioná un asunto</option>
                {ASUNTOS.map(a => (
                  <option key={a} value={a}>{a}</option>
                ))}
              </select>
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="cm-email">Email</label>
            <input id="cm-email" type="email" placeholder="correo@empresa.com" required />
          </div>

          <div className={styles.textareaField}>
            <label htmlFor="cm-mensaje">Mensaje</label>
            <textarea
              id="cm-mensaje"
              className={styles.textarea}
              rows={5}
              placeholder="¿En qué podemos ayudarte?"
            />
          </div>

          <button type="submit" className={styles.submit}>Enviar Mensaje</button>
        </form>
      </div>
    </div>
  )
}
