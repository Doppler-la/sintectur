import Nav from '../../components/layout/Nav/Nav'
import Footer from '../../components/layout/Footer/Footer'
import LazyImg from '../../components/ui/LazyImg/LazyImg'
import styles from './Portfolio.module.css'

const mediaUrl = import.meta.env.VITE_MEDIA_URL + '/Images/'

const CASOS = [
  { id: 1, label: 'Caso 1', src: `${mediaUrl}1.jpg` },
  { id: 2, label: 'Caso 2', src: `${mediaUrl}2.jpg` },
  { id: 3, label: 'Caso 3', src: `${mediaUrl}3.png` },
  { id: 4, label: 'Caso 4', src: `${mediaUrl}4.jpg` },
  { id: 5, label: 'Caso 5', src: `${mediaUrl}5.jpg` },
  { id: 6, label: 'Caso 6', src: `${mediaUrl}6.jpg` },
]

function PlayIcon() {
  return (
    <svg className={styles.playIcon} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="23" stroke="white" strokeWidth="1.5" />
      <path d="M20 16L34 24L20 32V16Z" fill="white" />
    </svg>
  )
}

export default function Portfolio() {
  return (
    <div className={styles.page}>
      <Nav />

      <main className={styles.main}>
        <h1 className={styles.title}>Nuestro Trabajo</h1>

        <div className={styles.grid}>
          {CASOS.map((caso) => (
            <div key={caso.id} className={styles.card}>
              <div className={styles.thumbnail}>
                {caso.src && <LazyImg src={caso.src} alt={caso.label} className={styles.img} wrapperClassName={styles.imgWrapper} />}
                <PlayIcon />
              </div>
              <span className={styles.label}>{caso.label}</span>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
