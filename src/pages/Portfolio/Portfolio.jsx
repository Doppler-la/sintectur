import { useState } from 'react'
import Nav from '../../components/layout/Nav/Nav'
import Footer from '../../components/layout/Footer/Footer'
import LazyImg from '../../components/ui/LazyImg/LazyImg'
import VideoModal from '../../components/ui/VideoModal/VideoModal'
import styles from './Portfolio.module.css'

const mediaUrl = import.meta.env.VITE_MEDIA_URL + '/Images/'
const videoUrl = import.meta.env.VITE_MEDIA_URL + '/Videos/'

const CASOS = [
  { id: 1, label: 'Sony Kando', src: `${mediaUrl}1.png`, video: 'SONY-KANDO-SINTECTUR.mp4' },
  { id: 2, label: 'Volvo Edición Especial', src: `${mediaUrl}2.png`, video: 'BTV-FH30-LOCACION.mp4' },
  { id: 3, label: 'Mondelez CNV', src: `${mediaUrl}3.jpg`, video: 'CNV-MONDELEZ-2025-SINTECTUR-LOGO.mp4' },
  { id: 4, label: 'Novartis Lanzamiento Kisqali', src: `${mediaUrl}4.jpg`, video: 'RECAP-KISCALI-Version-Sintectur.mp4' },
  { id: 5, label: 'Nissan Iguazú', src: `${mediaUrl}5.jpg`, video: 'NISSAN-MENDOZA-2023.mp4' },
  { id: 6, label: 'Generación M 2025', src: `${mediaUrl}6.png`, video: 'GM-2024.mp4' },
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
  const [activeVideo, setActiveVideo] = useState(null)

  return (
    <div className={styles.page}>
      <Nav />

      <main className={styles.main}>
        <h1 className={styles.title}>Nuestro Trabajo</h1>

        <div className={styles.grid}>
          {CASOS.map((caso) => (
            <div key={caso.id} className={styles.card}>
              <div
                className={styles.thumbnail}
                onClick={() => caso.video && setActiveVideo(`${videoUrl}${caso.video}`)}
                role={caso.video ? 'button' : undefined}
                tabIndex={caso.video ? 0 : undefined}
              >
                {caso.src && <LazyImg src={caso.src} alt={caso.label} className={styles.img} wrapperClassName={styles.imgWrapper} />}
                <PlayIcon />
              </div>
              <span className={styles.label}>{caso.label}</span>
            </div>
          ))}
        </div>
      </main>

      <Footer />

      {activeVideo && <VideoModal src={activeVideo} onClose={() => setActiveVideo(null)} />}
    </div>
  )
}
