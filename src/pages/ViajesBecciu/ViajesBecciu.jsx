import { Link } from 'react-router-dom'
import Nav from '../../components/layout/Nav/Nav'
import LazyBg from '../../components/ui/LazyImg/LazyBg'

const mediaUrl = import.meta.env.VITE_MEDIA_URL + '/Images/'
import Footer from '../../components/layout/Footer/Footer'
import ProductHero from '../../components/sections/ProductHero/ProductHero'
import ProductContent from '../../components/sections/ProductContent/ProductContent'
import { useModal } from '../../context/ModalContext'
import styles from './ViajesBecciu.module.css'

const CHAPTERS_1 = [
  {
    id: 'viajes-by-becciu',
    label: 'Viajes by Becciu',
    paragraphs: [
      { text: 'Los años no vienen solos. Vienen acompañados de experiencia, sabiduría y ansias por conocer todas esas partes de mundo que no descubrimos todavía.', emphasis: 'primary' },
      { text: 'Por nuestra parte, hace más de medio siglo que nos dedicamos a la gestión integral de viajes acompañados junto a Becciu.', emphasis: 'secondary' },
      { text: 'Aprendimos, crecimos y nos especializamos en el arte de acercar el mundo a adultos que buscan descubrir nuevos destinos con paquetes exclusivos, seguridad y atención personalizada.', emphasis: 'primary' },
    ],
  },
]

const CHAPTERS_2 = [
  {
    id: 'tus-desafios',
    label: 'Tus Desafios',
    paragraphs: [
      { text: 'Dos cambios de perspectiva: recorrer el mundo no tiene por qué ser una experiencia individual; la organización de viajes no tiene por qué ser una tarea desgastante.', emphasis: 'primary' },
      { text: 'No solo los destinos que tenías pendientes están más cerca de lo que creías, sino que también es posible desconectar de la gestión y conectar con otros como vos, todo a la vez.', emphasis: 'secondary' },
      { text: 'Para eso, estamos nosotros.', emphasis: 'primary' },
    ],
  },
  {
    id: 'nuestra-solucion',
    label: 'Nuestra solución',
    paragraphs: [
      { text: 'Somos especialistas en viajes grupales internacionales y eso significa que nos encargamos de todo, de principio a fin, ida y vuelta.', emphasis: 'primary' },
      { text: '¿Qué implica ese todo?', emphasis: 'primary' },
      {
        emphasis: 'grid',
        items: [
          { text: 'Gestionamos traslados y alojamientos de categoría asegurando el máximo confort en cada momento.' },
          { text: 'Coordinamos experiencias premium, seleccionadas mediante una curaduría experta en balancear cultura, historia, confort y vida local.' },
          { text: 'Ofrecemos una amplísima gama de paquetes diseñados estratégicamente según clima, festividades y atractivos de temporada, asegurando itinerarios específicos para realzar lo mejor de cada época del año.' },
          { text: 'Aseguramos atención personalizada y asistencia 24/7.' },
        ],
      },
      { text: 'Desde 1968 encontramos para cada viajero un grupo, y para cada grupo, todo lo que el mundo tiene para ofrecerle.', emphasis: 'primary' },
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
            <p className={styles.ctaLabel}>Viajá acompañado a donde querés ir. Escribinos.</p>
            <button className={styles.ctaBtn} onClick={() => openModal('contacto')}>Escribinos</button>
          </div>
        </div>
        <div className={`${styles.ctaPanel} ${styles.ctaWhite}`}>
          <div className={styles.ctaGroup}>
            <p className={styles.ctaLabel}>Conocé más de nuestro servicio.</p>
            <Link to="/programas" className={styles.ctaBtn}>Programas</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function ViajesBecciu() {
  return (
    <div className={styles.page}>
      <Nav />
      <div className={styles.navSpacer} />

      <ProductHero
        leftColor="var(--gold)"
        title={<>Viajes acompañados<br />by Becciu</>}
        tagline="No hay edad para recorrer el mundo."
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
