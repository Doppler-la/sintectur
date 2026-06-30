import { useState, useEffect } from 'react'
import styles from './Loader.module.css'

const mediaUrl = import.meta.env.VITE_MEDIA_URL + '/Images/'

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
      <img src={`${mediaUrl}loader.gif`} alt="Cargando" className={styles.gif} />
    </div>
  )
}
