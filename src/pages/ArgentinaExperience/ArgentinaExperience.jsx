import { Link } from 'react-router-dom'
import Nav from '../../components/layout/Nav/Nav'
import Footer from '../../components/layout/Footer/Footer'
import ProductHero from '../../components/sections/ProductHero/ProductHero'
import ProductContent from '../../components/sections/ProductContent/ProductContent'
import { useModal } from '../../context/ModalContext'
import styles from './ArgentinaExperience.module.css'

const CHAPTERS_1 = [
  {
    id: 'experience-argentina',
    label: 'Experience Argentina',
    paragraphs: [
      { text: 'Argentina tiene más de tres millones de kilómetros cuadrados.', emphasis: 'primary' },
      { text: 'Tiene veintitrés provincias que contemplan montañas nevadas, sierras, bosques, estepas, cascadas, lagos, playas, pueblos, ciudades, metrópolis.', emphasis: 'secondary' },
      { text: 'Tiene, también, una ruta y una historia para vos.', emphasis: 'primary' },
      { text: 'Nosotros nos encargamos de gestionarlos.', emphasis: 'primary' },
    ],
  },
]

const CHAPTERS_2 = [
  {
    id: 'tus-desafios',
    label: 'Tus desafíos',
    paragraphs: [
      { text: 'Un país con tantas posibilidades es una experiencia en bruto. El cielo es el límite —y con el tren de las nubes en Salta, el refrán acá es literal— pero entre tantas posibilidades tomar una decisión puede resultar abrumador.', emphasis: 'primary' },
      { text: 'Hay que armar el itinerario, claro, pero a la par hay que coordinar vuelos, hospedajes, actividades y cambios de moneda, todo mientras traducís la información en español a tu propia lengua y cultura.', emphasis: 'secondary' },
      { text: 'Nosotros estamos para centralizar esa operación, manteniendo en todas las instancias un mismo objetivo: pulir cada detalle hasta dar con el recorrido justo para vos.', emphasis: 'primary' },
    ],
  },
  {
    id: 'nuestra-solucion',
    label: 'Nuestra solución',
    paragraphs: [
      { text: 'Para dar con esa experiencia que conecta con tus intereses y con la diversidad local a la vez, nuestro punto de partida es un diálogo fluido en tu idioma para mapear los infaltables de tu recorrido.', emphasis: 'primary' },
      { text: 'Desde el principio te asesoramos con criterio de primera mano, en pos de armar un itinerario completo que responda a tus expectativas y haga que cada momento cuente.', emphasis: 'secondary' },
      { text: '¿Cómo lo hacemos?', emphasis: 'primary' },
      {
        emphasis: 'grid',
        items: [
          { text: 'Utilizamos todos los recursos de información adaptada para vos y tus necesidades.' },
          { text: 'Nos encargamos de la logística completa en todo el servicio de viaje y de sus necesidades.' },
          { text: 'Te proponemos opciones a tu medida con diferentes presupuestos, destinos, ciudades, actividades y rutas.' },
          { text: 'Acompañamos e itinerarios a medida: desde la experiencia cultural, hasta los circuitos, actividades y rutas.' },
        ],
      },
      { text: 'Paquetes turísticos estandarizados para conocer Argentina hay miles. Experiencias customizables para que la vivas como un local, solo una.', emphasis: 'primary' },
    ],
  },
]

function BottomCTA() {
  const { openModal } = useModal()

  return (
    <section className={styles.cta}>
      <div className={styles.ctaGrid}>
        <div className={`${styles.ctaPanel} ${styles.ctaBlue}`}>
          <div className={styles.ctaGroup}>
            <p className={styles.ctaLabel}>Conocé Argentina,<br />pero de verdad.</p>
            <button className={styles.ctaBtn} onClick={() => openModal('contacto')}>Escribinos</button>
          </div>
        </div>
        <div className={`${styles.ctaPanel} ${styles.ctaWhite}`}>
          <div className={styles.ctaGroup}>
            <p className={styles.ctaLabel}>Mirá todos los programas<br />que tenemos para vos</p>
            <Link to="/programas" className={styles.ctaBtn}>Programas</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function ArgentinaExperience() {
  return (
    <div className={styles.page}>
      <Nav />
      <div className={styles.navSpacer} />

      <ProductHero
        leftColor="var(--sky)"
        title={<>La verdadera<br />experiencia<br />argentina</>}
        tagline="Un viaje hacia las costumbres argentinas."
        photo="/argentina-experience1.png"
      />

      <ProductContent chapters={CHAPTERS_1} />

      <div className={styles.photoRow}>
        <div className={styles.photo} style={{ backgroundImage: 'url(/argentina-experience2.jpg)' }} />
        <div className={styles.photo} style={{ backgroundImage: 'url(/argentina-experience3.jpg)' }} />
      </div>

      <ProductContent chapters={CHAPTERS_2} />

      <BottomCTA />

      <Footer />
    </div>
  )
}
