import Nav from '../../components/layout/Nav/Nav'

const mediaUrl = import.meta.env.VITE_MEDIA_URL + '/Images/'
import Footer from '../../components/layout/Footer/Footer'
import ProductHero from '../../components/sections/ProductHero/ProductHero'
import ProductContent from '../../components/sections/ProductContent/ProductContent'
import ProductCTA from '../../components/sections/ProductCTA/ProductCTA'
import styles from './OrchestraTravel.module.css'

const CHAPTERS = [
  {
    id: 'orchestra-travel',
    label: 'Orchestra & Travel',
    paragraphs: [
      { text: 'Gestionar la experiencia integral de un viaje para grupos numerosos y cronogramas ajustados conlleva una exigencia mayor de por sí. ¿Pero trasladar también sus instrumentos? El desafío es otro.', emphasis: 'primary' },
      { text: 'Y de ese desafío aprendimos y nos especializamos en todas estas décadas de trayectoria.', emphasis: 'secondary' },
    ],
  },
  {
    id: 'tus-desafios',
    label: 'Tus Desafios',
    paragraphs: [
      { text: 'Cada grupo es un mundo. Y los viajes de orquestas, coros y ballets tienen sus propias reglas.', emphasis: 'primary' },
      { text: 'No se trata solo de gestionar vuelos y coordinar horarios sino de optimizar presupuestos, resolver reprogramaciones, cuidar instrumentos frágiles en trayectos largos y garantizar la mejor experiencia para los protagonistas de esta pieza.', emphasis: 'secondary' },
      { text: 'Para conseguir una experiencia fluida y precisa, emitir tickets o despachar instrumentos no es suficiente. Por eso nosotros somos una plataforma de viajes especializados.', emphasis: 'primary' },
    ],
  },
  {
    id: 'nuestra-solucion',
    label: 'Nuestra solución',
    paragraphs: [
      { text: 'Con la misma rigurosidad con la que los artistas interpretan sus obras, nosotros gestionamos de principio a fin, detalle a detalle, la experiencia de viaje.', emphasis: 'primary' },
      { text: '¿Cómo lo hacemos?', emphasis: 'primary' },
      {
        emphasis: 'grid',
        items: [
          { text: 'Centralizamos toda la operación, gestionando la logística ida y vuelta con soporte 24/7.' },
          { text: 'Aseguramos visibilidad y control del presupuesto sobre el armado del viaje.' },
          { text: 'Armamos itinerarios adaptados a tus cronogramas de ensayos.' },
          { text: 'Transportamos tus instrumentos como si fueran un integrante más de tu orquesta.' },
          { text: 'Coordinamos traslados, alojamientos y horarios para asegurar que todos los músicos lleguen bien descansados.' },
        ],
      },
      { text: 'Te respaldamos en cada etapa del camino para que los protagonistas se puedan enfocar exclusivamente en lo que los espera en destino.', emphasis: 'primary' },
    ],
  },
]

export default function OrchestraTravel() {
  return (
    <div className={styles.page}>
      <Nav />
      <div className={styles.navSpacer} />

      <ProductHero
        leftColor="var(--gold)"
        title={<>Viajes para<br />orquestas</>}
        tagline="Experiencias premium para músicos de elite."
        photo={`${mediaUrl}incentives2.jpg`}
      />

      <ProductContent chapters={CHAPTERS} />

      <ProductCTA
        leftColor="var(--gold)"
        text="Damos en la tecla de lo que precisás. Escribinos."
        ctaLabel="Escribinos"
        photo={`${mediaUrl}incentives1.png`}
      />

      <Footer />
    </div>
  )
}
