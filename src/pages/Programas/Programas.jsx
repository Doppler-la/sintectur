import Nav from '../../components/layout/Nav/Nav'
import Footer from '../../components/layout/Footer/Footer'
import LazyBg from '../../components/ui/LazyImg/LazyBg'
import styles from './Programas.module.css'

const mediaUrl = import.meta.env.VITE_MEDIA_URL + '/Images/'
const filesUrl = import.meta.env.VITE_MEDIA_URL + '/Files/'

const PROGRAMS = [
  { id: 1, title: 'Conoce Buenos Aires',                        img: `${mediaUrl}programas-1.jpg`, pdf: `${filesUrl}Bs-As-Tours.pdf` },
  { id: 2, title: 'Iguazú: el dedo de dios',                   img: `${mediaUrl}programas-2.jpg`, pdf: `${filesUrl}IGUAZÚ-THE-FINGER-OF-GOD.pdf` },
  { id: 3, title: 'Jujuy: no viste nunca tantos colores',       img: `${mediaUrl}programas-3.jpg`, pdf: `${filesUrl}JUJUY.pdf` },
  { id: 4, title: 'Mendoza: convertite en un experto en vinos', img: `${mediaUrl}programas-4.jpg`, pdf: `${filesUrl}MendozA.pdf` },
  { id: 5, title: 'Salta: un salto en el tiempo y el espacio',  img: `${mediaUrl}programas-5.jpg`, pdf: `${filesUrl}SALTA.pdf` },
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

function ProgramCard({ title, img, pdf }) {
  return (
    <div className={styles.card}>
      <LazyBg src={img} className={styles.thumb}>
        <PlayIcon />
      </LazyBg>
      <h3 className={styles.cardTitle}>{title}</h3>
      <a href={pdf} target="_blank" rel="noopener noreferrer" download className={styles.cardSub}>
        Clic para descargar el programa completo
      </a>
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
