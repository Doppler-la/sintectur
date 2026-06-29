import styles from './WhoWeAre.module.css'

export default function WhoWeAre() {
  return (
    <section className={styles.section}>
      <div className={styles.body}>
        <p className={styles.p}>
          Sintectur es una plataforma que integra servicios
          especializados y profesionales capaces de diseñar y ejecutar proyectos de viaje.
        </p>
        <p className={`${styles.p} ${styles.pGray}`}>
          Ser especialistas nos permite guiarte con procesos claros y ordenados, que evitan la
          improvisación, eliminan la fricción y te brindan previsibilidad. Por eso, antes de
          actuar, escuchamos, analizamos el contexto, definimos una estrategia y
          planificamos cada etapa.
        </p>
        <p className={styles.p}>
          Más de 65 años de experiencia respaldan esta forma de trabajar.
        </p>
      </div>
    </section>
  )
}
