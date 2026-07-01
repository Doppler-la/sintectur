import Nav from '../../components/layout/Nav/Nav'
import LazyBg from '../../components/ui/LazyImg/LazyBg'

const mediaUrl = import.meta.env.VITE_MEDIA_URL + '/Images/'
import Footer from '../../components/layout/Footer/Footer'
import ProductHero from '../../components/sections/ProductHero/ProductHero'
import ProductContent from '../../components/sections/ProductContent/ProductContent'
import { useModal } from '../../context/ModalContext'
import styles from './TravelExperience.module.css'

const CHAPTERS_1 = [
  {
    id: 'travel-experience',
    label: 'Travel Experience',
    paragraphs: [
      { text: 'Tenés alma de viajero, no de coordinador.', emphasis: 'primary' },
      { text: 'Querés viajar por América, Europa, Asia, el mundo entero, solo o de a grupos, pero salteándote la parte de organizarlo todo.', emphasis: 'secondary' },
      { text: 'Y si llegaste hasta acá, ya sabés que con nosotros es posible.', emphasis: 'primary' },
      { text: 'Optimizamos tu tiempo y no paramos hasta encontrar el viaje que responda exactamente a lo que tu mente y cuerpo buscan.', emphasis: 'primary' },
    ],
  },
]

const CHAPTERS_2 = [
  {
    id: 'tus-desafios',
    label: 'Tus Desafios',
    paragraphs: [
      { text: 'Buscar hospedajes, revisar reseñas, reservar traslados, tours, museos y actividades, controlar vuelos, horarios, gastos.', emphasis: 'primary' },
      { text: 'Para cada detalle hay infinita información, infinitas posibilidades y demasiadas ofertas, pero pocas confiables.', emphasis: 'secondary' },
      { text: 'Y todo eso sucede a la par del trabajo, los amigos, la familia, la vida. Todo en todas partes al mismo tiempo.', emphasis: 'primary' },
      { text: 'Calma. No hace falta que estés en todo para que todo salga bien.', emphasis: 'primary' },
      { text: 'Para que realmente desconectes sin relegar el cuidado a cada detalle, estamos nosotros.', emphasis: 'primary' },
    ],
  },
  {
    id: 'nuestra-solucion',
    label: 'Nuestra solución',
    paragraphs: [
      { text: 'Hace una vida que nos dedicamos a transformar tus ganas y expectativas en viajes a medida.', emphasis: 'primary' },
      { text: '¿Cómo lo hacemos?', emphasis: 'primary' },
      {
        emphasis: 'grid',
        items: [
          { text: 'Partimos de un diálogo estructurado para entender en todos los niveles cómo y a dónde querés ir.' },
          { text: 'Centralizamos toda la gestión del viaje, desde el análisis de ofertas, logística integral ida y vuelta, y soporte 24/7.' },
          { text: 'Te recomendamos varias opciones de destinos ajustados a tus intereses, cada uno con información completa y tarifas comparables.' },
          { text: 'Te proveemos toda la información reunida sobre requisitos migratorios, seguros y documentación.' },
          { text: 'Armamos itinerarios originales a medida, planificados al detalle y adaptados a tus intereses y tu presupuesto.' },
          { text: 'Te mantenemos siempre al tanto del estado de los vuelos y te acompañamos en cada paso.' },
        ],
      },
      { text: 'Ya no hace falta que caigas en paquetes turísticos estandarizados para optimizar tu tiempo. Estamos nosotros para guiarte hasta dar con ese viaje ideal y auténtico que te calza justo..', emphasis: 'primary' },
    ],
  },
]

function BottomCTA() {
  const { openModal } = useModal()

  return (
    <section className={styles.cta}>
      <button
        type="button"
        className={styles.ctaSingle}
        onClick={() => openModal('contacto')}
      >
        <div className={styles.ctaGroup}>
          <p className={styles.ctaLabel}>Desconectar para disfrutar mientras otro se ocupa de la organización es posible. Escribinos.</p>
          <span className={styles.ctaBtn}>Escribinos</span>
        </div>
      </button>
    </section>
  )
}

export default function TravelExperience() {
  return (
    <div className={styles.page}>
      <Nav />
      <div className={styles.navSpacer} />

      <ProductHero
        leftColor="var(--gold)"
        title={<>Viajes premium<br />personalizados</>}
        tagline="Puerta a puerta, una experiencia de primera."
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
