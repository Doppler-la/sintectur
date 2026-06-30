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
      <div className={styles.left} style={{ background: leftColor }}>
        <p className={styles.text}>{text}</p>
        <button className={styles.btn} onClick={() => openModal('contacto')}>{ctaLabel}</button>
      </div>
      <LazyBg src={photo} className={styles.right} />
    </section>
  )
}
