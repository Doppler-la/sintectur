import { Link } from 'react-router-dom'
import { useModal } from '../../../context/ModalContext'
import styles from './CTADual.module.css'

export default function CTADual() {
  const { openModal } = useModal()

  return (
    <section className={styles.section}>
      <div className={styles.grid}>

        <button
          type="button"
          className={`${styles.panel} ${styles.light}`}
          onClick={() => openModal('contacto')}
        >
          <div className={styles.textGroup}>
            <span className={styles.label}>Contacto</span>
            <h2 className={styles.title}>Un pequeño clic, un gran paso hacia tus objetivos.</h2>
            <span className={styles.cta}>Escribinos</span>
          </div>
        </button>

        <Link to="/nosotros" className={`${styles.panel} ${styles.color}`}>
          <div className={styles.textGroup}>
            <span className={styles.label}>Sobre nosotros</span>
            <h2 className={styles.title}>No empezamos ayer. Sumergite en nuestra historia.</h2>
            <span className={styles.cta}>Conocenos</span>
          </div>
        </Link>

      </div>
    </section>
  )
}
