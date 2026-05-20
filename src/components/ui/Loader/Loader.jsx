import { useState, useEffect } from 'react'
import styles from './Loader.module.css'

export default function Loader({ visible }) {
  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    if (!visible) {
      const t = setTimeout(() => setMounted(false), 600)
      return () => clearTimeout(t)
    }
  }, [visible])

  if (!mounted) return null

  return (
    <div className={`${styles.loader} ${!visible ? styles.hidden : ''}`}>
      <div className={styles.center}>
        <img src="/Loader_GIf.gif" alt="Turbina" className={styles.turbine} />
        <img src="/Logo_sintectur_color.png" alt="Sintectur" className={styles.logo} />
      </div>
    </div>
  )
}
