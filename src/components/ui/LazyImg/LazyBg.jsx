import { useState } from 'react'
import styles from './LazyImg.module.css'

export default function LazyBg({ src, className, style, children }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div
      className={`${styles.bgWrapper} ${className || ''}`}
      style={{ ...style, backgroundImage: loaded ? `url(${src})` : 'none' }}
    >
      {src && (
        <img
          src={src}
          alt=""
          aria-hidden="true"
          style={{ display: 'none' }}
          onLoad={() => setLoaded(true)}
        />
      )}
      <div className={`${styles.shimmer} ${loaded ? styles.shimmerHidden : ''}`} aria-hidden="true" />
      {children}
    </div>
  )
}
