import Nav from '../../components/layout/Nav/Nav'
import Footer from '../../components/layout/Footer/Footer'
import styles from './AboutUs.module.css'

const CAPITULOS = [
  {
    id: 'origen',
    nav: 'El origen',
    paragraphs: [
      { text: 'Antes el tiempo pasaba más lento, las distancias eran más largas. Las fotos de viajes se almacenaban no en Drive o iCloud sino en los folios de los álbumes, y las aerolíneas no conectaban aún Buenos Aires con Jujuy ni con Barcelona.', emphasis: 'primary' },
      { text: 'Lo podemos aseverar porque ya estábamos ahí. Al fin y al cabo, nuestro primer ticket lo mandamos por fax.', emphasis: 'secondary' },
      { text: 'Rondaba el año 1960 cuando un joven Pedro Bachrach, empleado de una aerolínea argentina, decidió dejar su puesto y fundar su propia agencia de viajes, Sintectur, cambiando su vida (y la de muchos más por venir) de una vez y para siempre.', emphasis: 'secondary' },
      { text: 'Sintectur arrancó así haciendo lo que hace toda buena agencia de viajes: vender paquetes a viajeros particulares.', emphasis: 'primary' },
    ],
  },
  {
    id: 'evolucion',
    nav: 'La evolución',
    paragraphs: [
      { text: 'El mundo se empezó a conectar más rápido, las expectativas de los viajeros crecieron y las necesidades se volvieron más complejas. Y con ellas, Sintectur atravesó su primera gran transformación: ¿por qué dedicarnos a emitir tickets cuando podemos gestionar experiencias enteras, con desafíos y objetivos concretos?', emphasis: 'primary' },
      { text: 'Así incorporamos progresivamente nuevos productos y servicios: Corporate Travel, Orchestra & Travel, Incentives Travel, Meetings & Events, Experience Argentina, Ships & Cruises, Study & Travel, Sports & Travel.', emphasis: 'secondary' },
      { text: 'Nuestra evolución fue respuesta a los estímulos externos del mercado y a las nuevas necesidades de las organizaciones y las personas detrás de ellas. Pero sobre todo respondió a una pulsión interna: seguir especializándonos para acercarle a cada cliente una propuesta capaz de entregar valor medible.', emphasis: 'primary' },
    ],
  },
  {
    id: 'desafios',
    nav: 'Los desafíos y el fortalecimiento',
    paragraphs: [
      { text: 'Crecimos, nos especializamos, y sobrevivimos al mítico fin del mundo en los 2000.', emphasis: 'primary' },
      { text: 'Sin pausa, fuimos fortaleciendo nuestros servicios a través de nuestra gente, profesionalizando equipos y sumando herramientas digitales que nos permitieron aportar mayor trazabilidad, orden y control a cada cliente.', emphasis: 'secondary' },
      { text: 'Hacia el 2010, la incorporación de Francisco, Adrián y Mariano Bachrach impulsó una nueva etapa de expansión: establecieron alianzas internacionales y acuerdos globales en pos de potenciar las herramientas construidas y expandir los horizontes de nuestros servicios y productos.', emphasis: 'primary' },
      { text: '¿Nuestra brújula? La especialización, la certeza de que cada caso necesita una estrategia diferente. Hay un orden, sí, hay una estructura, un flujo de trabajo y una guía, pero la estrategia varía necesariamente de cliente a cliente.', emphasis: 'secondary' },
    ],
  },
  {
    id: 'hoy',
    nav: 'Qué es Sintectur hoy',
    paragraphs: [
      { text: 'Nuestra filosofía y cultura se apoyan en los pilares fundamentales que supimos construir: especialización de cada producto, atención plena de las necesidades del cliente, planificación integral con procesos claros, y customización específica para cada caso.', emphasis: 'primary' },
      { text: 'Así, nuestra principal fortaleza es traducir necesidades y desafíos en soluciones concretas y singulares.', emphasis: 'secondary' },
      { text: 'Porque lo que brindamos ya no son servicios tradicionales, sino un ecosistema de productos diseñados a medida en pos de aterrizar los objetivos de cada cliente en su mejor expresión.', emphasis: 'primary' },
      { text: 'Lo que cambió fueron las herramientas. Lo que permanece intacto es lo que nos motoriza desde hace más de 65 años: la convicción de que ayer, hoy y siempre, la especialización marca la diferencia.', emphasis: 'secondary' },
    ],
  },
]

export default function AboutUs() {
  return (
    <div className={styles.page}>
      <Nav />

      <div className={styles.navSpacer} />

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroImg} />
        <h1 className={styles.heroTitle}>Quiénes Somos</h1>
      </section>

      {/* ── Capítulos ──────────────────────────────────────── */}
      <section className={styles.content}>
        {CAPITULOS.map((c, idx) => (
          <>
            <article key={c.id} id={c.id} className={styles.chapter}>
              <div className={styles.chapterLabel}>{c.nav}</div>
              <div className={styles.chapterBody}>
                {c.paragraphs.map((p, i) => (
                  <p key={i} className={p.emphasis === 'secondary' ? styles.secondary : styles.primary}>
                    {p.text}
                  </p>
                ))}
              </div>
            </article>

            {idx === 1 && (
              <section className={styles.photos}>
                <div className={styles.photoCard}>
                  <span className={styles.photoCardText}>Se auténtico.</span>
                </div>
                <div className={styles.photo} />
              </section>
            )}

            {idx === 2 && (
              <div className={styles.fullPhoto} />
            )}
          </>
        ))}
      </section>

      <Footer />
    </div>
  )
}
