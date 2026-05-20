import { useEffect } from 'react'
import styles from './Modal.module.css'

export default function ContactoModal({ onClose }) {
  // cerrar con Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.box} onClick={e => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose} aria-label="Cerrar">✕</button>

        <p className={styles.label}>Contacto</p>
        <h2 className={styles.title}>Hablemos</h2>
        <p className={styles.sub}>Contanos sobre tu empresa y te armamos una propuesta a medida.</p>

        <form className={styles.form} onSubmit={e => e.preventDefault()}>
          <div className={styles.row}>
            <div className={styles.field}>
              <label>Nombre</label>
              <input type="text" placeholder="Tu nombre" required />
            </div>
            <div className={styles.field}>
              <label>Empresa</label>
              <input type="text" placeholder="Tu empresa" />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.field}>
              <label>Email</label>
              <input type="email" placeholder="correo@empresa.com" required />
            </div>
            <div className={styles.field}>
              <label>Teléfono</label>
              <input type="tel" placeholder="+54 11 ..." />
            </div>
          </div>
          <div className={styles.field}>
            <label>Mensaje</label>
            <textarea rows={4} placeholder="¿En qué podemos ayudarte?" />
          </div>
          <button type="submit" className={styles.submit}>Enviar mensaje</button>
        </form>
      </div>
    </div>
  )
}
