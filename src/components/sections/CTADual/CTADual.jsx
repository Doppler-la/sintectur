import { Link } from 'react-router-dom'
import { useModal } from '../../../context/ModalContext'
import styles from './CTADual.module.css'

export default function CTADual() {
  const { openModal } = useModal()

  return (
    <section className={styles.section}>
      <div className={styles.grid}>

        <div className={`${styles.panel} ${styles.light}`}>
          <div className={styles.textGroup}>
            <span className={styles.label}>Contacto</span>
            <h2 className={styles.title}>Un pequeño clic, un gran paso hacia tus objetivos.</h2>
            <button className={styles.cta} onClick={() => openModal('contacto')}>Escribinos</button>
          </div>
        </div>

        <div className={`${styles.panel} ${styles.color}`}>
          <div className={styles.textGroup}>
            <span className={styles.label}>Sobre nosotros</span>
            <h2 className={styles.title}>No empezamos ayer. Sumergite en nuestra historia.</h2>
            <Link to="/nosotros" className={styles.cta}>Conocenos</Link>
          </div>
        </div>

      </div>
    </section>
  )
}
