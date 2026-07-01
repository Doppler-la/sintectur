import { Link } from 'react-router-dom'
import Nav from '../../components/layout/Nav/Nav'
import LazyBg from '../../components/ui/LazyImg/LazyBg'

const mediaUrl = import.meta.env.VITE_MEDIA_URL + '/Images/'
import Footer from '../../components/layout/Footer/Footer'
import ProductHero from '../../components/sections/ProductHero/ProductHero'
import ProductContent from '../../components/sections/ProductContent/ProductContent'
import { useModal } from '../../context/ModalContext'
import styles from './ShipsCruises.module.css'

const CHAPTERS_1 = [
  {
    id: 'ships-cruises',
    label: 'Ships & Cruises',
    paragraphs: [
      { text: 'Una premisa atraviesa todos nuestros productos: todo viaje es una experiencia en sí misma.', emphasis: 'primary' },
      { text: 'Pero sin lugar a dudas es en los viajes en crucero donde esa visión se materializa en todo su esplendor. Acá el traslado es el primer destino.', emphasis: 'secondary' },
      { text: 'Ida y vuelta, sin imprevistos ni turbulencias, diseñamos experiencias de viaje premium para quienes buscan ir más allá de lo convencional.', emphasis: 'primary' },
    ],
  },
]

const CHAPTERS_2 = [
  {
    id: 'tus-desafios',
    label: 'Tus Desafíos',
    paragraphs: [
      { text: 'Un pie en el barco o crucero es todo lo que hace falta para dar formal inicio a una experiencia de vacaciones premium. Todo lo que imaginabas para relajar existe tal cual y en un mismo lugar.', emphasis: 'primary' },
      { text: 'Pero antes hay que elegir el crucero, coordinar traslados terrestres y aéreos previos y posteriores, controlar gastos, revisar reseñas, armar itinerarios.', emphasis: 'secondary' },
      { text: 'Y para eso, estamos nosotros.', emphasis: 'primary' },
    ],
  },
  {
    id: 'nuestra-solucion',
    label: 'Nuestra solución',
    paragraphs: [
      { text: 'Todo viaje es una experiencia en sí misma, sí. Pero la experiencia puede iniciar antes del viaje.', emphasis: 'primary' },
      { text: 'Con más de seis décadas de trayectoria gestionando la logística integral de los cruceros de Hapag-Lloyd, contamos con la capacidad para centralizar la coordinación de traslados, vuelos, hoteles y actividades pre y post-crucero.', emphasis: 'secondary' },
      { text: '¿Cómo lo hacemos?', emphasis: 'primary' },
      {
        emphasis: 'grid',
        items: [
          { text: 'Centralizamos toda la operación, gestionando la logística ida y vuelta con soporte 24/7.' },
          { text: 'Aseguramos visibilidad y control del presupuesto sobre el armado del viaje.' },
          { text: 'Armamos itinerarios adaptados a tus intereses y expectativas para el antes y el después del crucero.' },
          { text: 'Coordinamos tours, excursiones y programas terrestres a la medida de cada grupo.' },
        ],
      },
      { text: 'Todo lo que tenés que hacer para tomarte unas merecidas vacaciones, todo eso que quisieras saltearte, lo hacemos nosotros, acompañándote paso a paso.', emphasis: 'primary' },
    ],
  },
]

function BottomCTA() {
  const { openModal } = useModal()

  return (
    <section className={styles.cta}>
      <div className={styles.ctaGrid}>
        <button
          type="button"
          className={`${styles.ctaPanel} ${styles.ctaBlue}`}
          onClick={() => openModal('contacto')}
        >
          <div className={styles.ctaGroup}>
            <p className={styles.ctaLabel}>Hacemos que la experiencia premium trascienda las fechas del crucero.</p>
            <span className={styles.ctaBtn}>Escribinos</span>
          </div>
        </button>
        <Link to="/programas" className={`${styles.ctaPanel} ${styles.ctaWhite}`}>
          <div className={styles.ctaGroup}>
            <p className={styles.ctaLabel}>Mirá todos los programas<br />que tenemos <br/>para vos.</p>
            <span className={styles.ctaBtn}>Programas</span>
          </div>
        </Link>
      </div>
    </section>
  )
}

export default function ShipsCruises() {
  return (
    <div className={styles.page}>
      <Nav />
      <div className={styles.navSpacer} />

      <ProductHero
        leftColor="var(--sky)"
        title={<>Viajes en<br />crucero</>}
        tagline="Una experiencia de viaje premium."
        photo={`${mediaUrl}argentina-experience1.png`}
      />

      <ProductContent chapters={CHAPTERS_1} />

      <div className={styles.photoRow}>
        <LazyBg src={`${mediaUrl}argentina-experience2.jpg`} className={styles.photo} />
        <LazyBg src={`${mediaUrl}argentina-experience3.jpg`} className={styles.photo} />
      </div>

      <ProductContent chapters={CHAPTERS_2} />

      <BottomCTA />

      <Footer />
    </div>
  )
}
