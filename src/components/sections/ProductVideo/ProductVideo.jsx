import styles from './ProductVideo.module.css'

export default function ProductVideo({ photo }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.img} style={{ backgroundImage: `url(${photo})` }} />
      <button className={styles.play} aria-label="Reproducir video">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
          <polygon points="5,3 19,12 5,21" />
        </svg>
      </button>
    </div>
  )
}
