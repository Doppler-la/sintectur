import LazyBg from '../../ui/LazyImg/LazyBg'
import styles from './ProductCTA.module.css'
import { useModal } from '../../../context/ModalContext'

/**
 * ProductCTA — panel izquierdo con color + texto + CTA, panel derecho con foto
 * Props:
 *   leftColor  — color de fondo del panel izquierdo (ej: 'var(--watermelon)')
 *   text       — texto principal
 *   ctaLabel   — texto del botón (default 'Escribinos')
 *   photo      — URL de la imagen del panel derecho
 */
export default function ProductCTA({ leftColor = 'var(--watermelon)', text, ctaLabel = 'Escribinos', photo }) {
  const { openModal } = useModal()

  return (
    <section className={styles.cta}>
      <button
        type="button"
        className={styles.left}
        style={{ background: leftColor }}
        onClick={() => openModal('contacto')}
      >
        <p className={styles.text}>{text}</p>
        <span className={styles.btn}>{ctaLabel}</span>
      </button>
      <LazyBg src={photo} className={styles.right} />
    </section>
  )
}
