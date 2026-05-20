import { useEffect } from 'react'
import styles from './Modal.module.css'

export default function CarreraModal({ onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.box} onClick={e => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose} aria-label="Cerrar">✕</button>

        <p className={styles.label}>Carrera</p>
        <h2 className={styles.title}>Sumate al equipo</h2>
        <p className={styles.sub}>Dejanos tus datos y te contactamos cuando surja una oportunidad.</p>

        <form className={styles.form} onSubmit={e => e.preventDefault()}>
          <div className={styles.row}>
            <div className={styles.field}>
              <label>Nombre completo</label>
              <input type="text" placeholder="Tu nombre" required />
            </div>
            <div className={styles.field}>
              <label>Email</label>
              <input type="email" placeholder="correo@gmail.com" required />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.field}>
              <label>Teléfono</label>
              <input type="tel" placeholder="+54 11 ..." />
            </div>
            <div className={styles.field}>
              <label>Puesto de interés</label>
              <input type="text" placeholder="¿A qué área apuntás?" />
            </div>
          </div>
          <div className={styles.field}>
            <label>LinkedIn o portfolio</label>
            <input type="url" placeholder="https://..." />
          </div>
          <div className={styles.field}>
            <label>CV <span className={styles.optional}>(PDF)</span></label>
            <input type="file" accept=".pdf" className={styles.fileInput} />
          </div>
          <div className={styles.field}>
            <label>¿Por qué Sintectur?</label>
            <textarea rows={3} placeholder="Contanos un poco sobre vos..." />
          </div>
          <button type="submit" className={styles.submit}>Enviar postulación</button>
        </form>
      </div>
    </div>
  )
}
