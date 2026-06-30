import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} style={{ backgroundImage: `url(/fondov1.jpg)` }}>
      <div className={styles.content}>
        <p className={styles.sub}>
          La especialización<br />
          <strong>marca la diferencia</strong>
        </p>
      </div>
      <img src="/logov1.png" alt="Sintectur" className={styles.bottomLogo} />
    </section>
  )
}
