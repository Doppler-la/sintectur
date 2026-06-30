import Nav from '../../components/layout/Nav/Nav'

const mediaUrl = import.meta.env.VITE_MEDIA_URL + '/Images/'
import Footer from '../../components/layout/Footer/Footer'
import ProductHero from '../../components/sections/ProductHero/ProductHero'
import ProductContent from '../../components/sections/ProductContent/ProductContent'
import ProductCTA from '../../components/sections/ProductCTA/ProductCTA'
import styles from './StudyTravel.module.css'

const CHAPTERS = [
  {
    id: 'study-travel',
    label: 'Study & Travel',
    paragraphs: [
      { text: 'Necesitás que todo, pero todo, salga bien.', emphasis: 'primary' },
      { text: 'Y que todo salga bien en un viaje para adolescentes implica garantizar seguridad y entretenimiento, juntos y a la par en toda instancia.', emphasis: 'secondary' },
    ],
  },
  {
    id: 'tus-desafios',
    label: 'Tus Desafios',
    paragraphs: [
      { text: 'Para un viaje exitoso, no solo la elección del destino debe estar alineada con los objetivos curriculares y los intereses de los estudiantes, sino que planificación y organización deben estar a la altura de la tarea.', emphasis: 'primary' },
      { text: 'Gestionar un viaje de estudio es un rompecabezas de muchas piezas, pero hecho bien, el resultado es la panorámica de lo que será una experiencia formativa inolvidable para el resto de sus vidas.', emphasis: 'secondary' },
    ],
  },
  {
    id: 'nuestra-solucion',
    label: 'Nuestra solución',
    paragraphs: [
      { text: 'Nuestras más de seis décadas dedicándonos a esto nos permitieron armar nuestro propio mapamundi: uno hecho de destinos idóneos para el aprendizaje intercultural y la formación académica.', emphasis: 'primary' },
      { text: 'Siempre con un plan de acción acordado con las áreas educativas involucradas, nos encargamos de diseñar un viaje planificado al detalle para que interpele, estimule y transforme.', emphasis: 'secondary' },
      { text: '¿Cómo lo hacemos?', emphasis: 'primary' },
      {
        emphasis: 'grid',
        items: [
          { text: 'Centralizamos toda la operación, gestionando la logística integral ida y vuelta con soporte 24/7.' },
          { text: 'Armamos itinerarios originales a medida, planificados al detalle y adaptados a los objetivos curriculares de cada institución.' },
          { text: 'Aseguramos visibilidad y control del presupuesto sobre el armado del viaje.' },
        ],
      },
      { text: 'Estamos para garantizar trazabilidad, control administrativo y, sobre todo, la confianza y el respaldo que solo una empresa con trayectoria, estructura y prestigio puede proveer.', emphasis: 'primary' },
    ],
  },
]

export default function StudyTravel() {
  return (
    <div className={styles.page}>
      <Nav />
      <div className={styles.navSpacer} />

      <ProductHero
        leftColor="var(--gold)"
        title={<>Viajes para<br />estudiantes</>}
        tagline="Experiencia colectiva para los alumnos, tranquilidad absoluta para los padres."
        photo={`${mediaUrl}incentives2.jpg`}
      />

      <ProductContent chapters={CHAPTERS} />

      <ProductCTA
        leftColor="var(--gold)"
        text="Nos encargamos de que todo salga tal como necesitás.. Escribinos."
        ctaLabel="Escribinos"
        photo={`${mediaUrl}incentives1.png`}
      />

      <Footer />
    </div>
  )
}
