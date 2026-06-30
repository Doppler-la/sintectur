import styles from './ProductosBanner.module.css'

const mediaUrl = import.meta.env.VITE_MEDIA_URL + '/Images/'

export default function ProductosBanner() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.textPanel}>
          <div className={styles.textGroup}>
            <span className={styles.label}>Productos</span>
            <h2 className={styles.title}>
              Una plataforma.<br />
              Cinco categorías.<br />
              Una estrategia<br />
              a tu medida.
            </h2>
          </div>
        </div>
        <div className={styles.imagePanel}>
          <img src={`${mediaUrl}eyev1.png`} alt="" className={styles.image} />
        </div>
      </div>
    </section>
  )
}
