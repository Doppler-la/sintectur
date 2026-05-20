import styles from './Hero.module.css'
import Button from '../../ui/Button/Button'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <video className={styles.video} autoPlay muted loop playsInline>
        <source src="/Video_Hero.mp4" type="video/mp4" />
      </video>

      <h1 className={styles.title}>
        Business &amp; Leisure Travel Hub
      </h1>

      <div className={styles.btns}>
        <Button variant="primary" href="#">Conocé nuestros servicios</Button>
        <Button variant="ghost" href="#">Hablar con un especialista</Button>
      </div>
    </section>
  )
}
