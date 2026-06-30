import { useEffect } from 'react'
import styles from './VideoModal.module.css'

export default function VideoModal({ src, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Cerrar">✕</button>
        <video
          className={styles.video}
          src={src}
          controls
          controlsList="nodownload"
          autoPlay
          playsInline
          preload="none"
        />
      </div>
    </div>
  )
}
