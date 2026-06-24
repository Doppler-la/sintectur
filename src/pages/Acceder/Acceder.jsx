import Nav from '../../components/layout/Nav/Nav'
import Footer from '../../components/layout/Footer/Footer'
import styles from './Acceder.module.css'

export default function Acceder() {
  return (
    <>
      <Nav />

      <div className={styles.page}>

        {/* ── Hero ───────────────────────────────────────────────── */}
        <section className={styles.hero}>
          {/* <img src="/foto-acceder.jpg" alt="Bienvenidos" className={styles.heroImg} /> */}
          <h1 className={styles.heroTitle}>Bienvenidos</h1>
        </section>

        {/* ── Dos columnas ───────────────────────────────────────── */}
        <section className={styles.main}>

          {/* Columna izquierda — Login */}
          <div className={styles.loginCol}>
            <div className={styles.colContent}>

              <div className={styles.topGroup}>
                <h2 className={styles.colTitle}>Acceso clientes</h2>
                <p className={styles.colSubtitle}>
                  Inicia sesión para acceder a tus reportes y revisar nuestras propuestas.
                </p>
              </div>

              <div className={styles.fieldsArea}>
                <div className={styles.field}>
                  <input type="email" placeholder="Correo Electrónico" className={styles.input} />
                </div>
                <div className={styles.field}>
                  <input type="password" placeholder="Contraseña" className={styles.input} />
                </div>
              </div>

              <div className={styles.btns}>
                <button className={styles.btn}>Iniciar sesión</button>
                <button className={styles.btn}>Registrate</button>
              </div>

            </div>
          </div>

          <div className={styles.colDivider} />

          {/* Columna derecha — Primera vez */}
          <div className={styles.ctaCol}>
            <div className={styles.colContent}>

              <div className={styles.topGroup}>
                <h2 className={styles.ctaTitle}>¿Primera vez aquí?</h2>
                <p className={styles.ctaSubtitle}>
                  Si es tu primera vez, podés hacernos una consulta o cargarnos tu Brief
                  para que nuestro equipo te ayude a planificar tu próximo viaje.
                </p>
              </div>

              {/* espacio equivalente al área de inputs */}
              <div className={styles.fieldsSpacer} />

              <div className={styles.btns}>
                <button className={styles.btn}>Hacenos una consulta</button>
                <button className={styles.btn}>Carganos tu Brief o RFP</button>
              </div>

            </div>
          </div>

        </section>

        <Footer />
      </div>
    </>
  )
}
