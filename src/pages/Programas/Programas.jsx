import Nav from '../../components/layout/Nav/Nav'
import Footer from '../../components/layout/Footer/Footer'
import styles from './Programas.module.css'

const PROGRAMS = [
  { id: 1, title: 'Conoce Buenos Aires',                        img: '/programas-1.jpg' },
  { id: 2, title: 'Iguazú: el dedo de dios',                   img: '/programas-2.jpg' },
  { id: 3, title: 'Jujuy: no viste nunca tantos colores',       img: '/programas-3.jpg' },
  { id: 4, title: 'Mendoza: convertite en un experto en vinos', img: '/programas-4.jpg' },
  { id: 5, title: 'Salta: un salto en el tiempo y el espacio',  img: '/programas-5.jpg' },
]

function PlayIcon() {
  return (
    <div className={styles.play}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
        <polygon points="6,3 20,12 6,21" />
      </svg>
    </div>
  )
}

function ProgramCard({ title, img }) {
  return (
    <div className={styles.card}>
      <div className={styles.thumb} style={{ backgroundImage: `url(${img})` }}>
        <PlayIcon />
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardSub}>Clic para descargar el programa completo</p>
    </div>
  )
}

export default function Programas() {
  return (
    <div className={styles.page}>
      <Nav />
      <div className={styles.navSpacer} />

      <main className={styles.main}>
        <h1 className={styles.title}>Programas</h1>

        <div className={styles.grid}>
          {PROGRAMS.map(p => <ProgramCard key={p.id} {...p} />)}
        </div>
      </main>

      <Footer />
    </div>
  )
}
