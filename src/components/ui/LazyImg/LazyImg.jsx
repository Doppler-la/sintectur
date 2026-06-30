import { useState } from 'react'
import styles from './LazyImg.module.css'

export default function LazyImg({ src, alt, className, wrapperClassName, style }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={`${styles.wrapper} ${wrapperClassName || ''}`}>
      <div className={`${styles.shimmer} ${loaded ? styles.shimmerHidden : ''}`} aria-hidden="true" />
      <img
        src={src}
        alt={alt}
        className={`${styles.img} ${loaded ? styles.imgLoaded : ''} ${className || ''}`}
        style={style}
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
}
