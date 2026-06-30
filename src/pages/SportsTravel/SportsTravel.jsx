import Nav from '../../components/layout/Nav/Nav'

const mediaUrl = import.meta.env.VITE_MEDIA_URL + '/Images/'
import Footer from '../../components/layout/Footer/Footer'
import ProductHero from '../../components/sections/ProductHero/ProductHero'
import ProductContent from '../../components/sections/ProductContent/ProductContent'
import ProductCTA from '../../components/sections/ProductCTA/ProductCTA'
import styles from './SportsTravel.module.css'

const CHAPTERS = [
  {
    id: 'sports-travel',
    label: 'Sports & Travel',
    paragraphs: [
      { text: 'Para la victoria, cada integrante debe estar con la mente en el juego. Y para eso, la logística del viaje debe ser tan fluida y tan exacta como el propio entrenamiento.', emphasis: 'primary' },
      { text: 'Somos especialistas porque desde la coordinación de horarios y el control de gastos hasta el cuidado del equipamiento y el acompañamiento en destino, trabajamos como un integrante más de tu equipo.', emphasis: 'secondary' },
    ],
  },
  {
    id: 'tus-desafios',
    label: 'Tus Desafios',
    paragraphs: [
      { text: 'La logística de viajes para deportistas y delegaciones empieza mucho antes de la partida.', emphasis: 'primary' },
      { text: 'A la hora de coordinar grupos numerosos, gestionar equipamiento sensible, respetar cronogramas ajustados y resolver imprevistos, cada pieza y cada movimiento deben funcionar, cual reloj, en un perfecto conjunto.', emphasis: 'secondary' },
      { text: 'Nosotros estamos para allanar el camino hasta el lugar y momento exactos en el que tienen que estar.', emphasis: 'primary' },
    ],
  },
  {
    id: 'nuestra-solucion',
    label: 'Nuestra solución',
    paragraphs: [
      { text: 'Más de seis décadas de trayectoria nos permitieron conocer tu rubro, entender tus exigencias y saber lo que está en juego.', emphasis: 'primary' },
      { text: '¿Cómo lo hacemos?', emphasis: 'primary' },
      {
        emphasis: 'grid',
        items: [
          { text: 'Centralizamos toda la operación, gestionando la logística ida y vuelta con soporte 24/7.' },
          { text: 'Armamos itinerarios adaptados a tus cronogramas de partidos y entrenamientos.' },
          { text: 'Transportamos tu equipamiento como si fueran un integrante más de tu delegación.' },
          { text: 'Coordinamos traslados, alojamientos y horarios para asegurar que el equipo llegue bien descansado y rinda al máximo.' },
        ],
      },
      { text: 'Respaldamos tu viaje para que vos te puedas ocupar del objetivo final.', emphasis: 'primary' },
    ],
  },
]

export default function SportsTravel() {
  return (
    <div className={styles.page}>
      <Nav />
      <div className={styles.navSpacer} />

      <ProductHero
        leftColor="var(--gold)"
        title={<>Viajes para<br />delegaciones<br />deportivas</>}
        tagline="Que el único desafío sea el deportivo."
        photo={`${mediaUrl}incentives2.jpg`}
      />

      <ProductContent chapters={CHAPTERS} />

      <ProductCTA
        leftColor="var(--gold)"
        text="Sabemos lo que está en juego. Escribinos."
        ctaLabel="Escribinos"
        photo={`${mediaUrl}incentives1.png`}
      />

      <Footer />
    </div>
  )
}
