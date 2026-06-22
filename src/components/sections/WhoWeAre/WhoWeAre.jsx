import styles from './WhoWeAre.module.css'

export default function WhoWeAre() {
  return (
    <section className={styles.section}>
      <div className={styles.body}>
        <p className={styles.p}>
          Sintectur no empezó ayer. Empezó hace más de 65 años a trabajar con empresas,
          instituciones, grupos y viajeros sabiendo que cada caso necesitaba una estrategia distinta.
        </p>
        <p className={`${styles.p} ${styles.pGray}`}>
          No somos una simple emisora de tickets. Somos una plataforma 360° de viajes y
          experiencias. Un ecosistema de productos especializados diseñados a medida.
        </p>
        <p className={styles.p}>
          Traducimos desafíos en soluciones concretas a través de procesos claros, planificación
          integral y una mirada creativa. Todo a tu disposición para acompañarte en cada etapa del
          proceso y aterrizar tus objetivos en su mejor expresión.
        </p>
      </div>
    </section>
  )
}
