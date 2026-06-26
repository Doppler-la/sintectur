import { Link } from 'react-router-dom'
import styles from './Footer.module.css'
import { useModal } from '../../../context/ModalContext'

const EMPRESA = ['Servicios', 'Nuestro Trabajo', 'Inspírate', 'Contacto', 'Carrera']
const ROUTES = { 'Nuestro Trabajo': '/portfolio' }
const PRODUCTOS = ['Corporate Travel', 'Events & Incentives Travel', 'Specials Groups', 'Accompanied Trips', 'Argentina Group Experiences']

const SOCIALS = [
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: '#',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#000"/>
      </svg>
    ),
  },
  {
    name: 'X',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: '#',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
]

const PARTNERS = [
  { src: '/logo-ltn.png', alt: 'LTN L\'Alianxa Travel Network' },
  { src: '/logo-serandipians.png', alt: 'Serandipians Member Travel Designers' },
  { src: '/Logo Iata.png', alt: 'IATA' },
  { src: '/dataweb.jpg', alt: 'Data Fiscal' },
]

const MODAL_TRIGGERS = { Contacto: 'contacto', Carrera: 'carrera' }

export default function Footer() {
  const { openModal } = useModal()

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <img src="/logov1.png" alt="Sintectur" className={styles.logo} />
        </div>

        <div className={styles.navCols}>
          <div className={styles.col}>
            <h5>EMPRESA</h5>
            {EMPRESA.map((item) =>
              MODAL_TRIGGERS[item] ? (
                <button key={item} onClick={() => openModal(MODAL_TRIGGERS[item])}>{item}</button>
              ) : ROUTES[item] ? (
                <Link key={item} to={ROUTES[item]}>{item}</Link>
              ) : (
                <a key={item} href="#">{item}</a>
              )
            )}
          </div>

          <div className={styles.col}>
            <h5>PRODUCTOS</h5>
            {PRODUCTOS.map((item) => (
              <a key={item} href="#">{item}</a>
            ))}
          </div>
        </div>

        <div className={styles.socials}>
          {SOCIALS.map((s) => (
            <a key={s.name} href={s.href} className={styles.socialIcon} aria-label={s.name}>
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      <div className={styles.bottom}>
        <span className={styles.copyright}>© 1961 Sintectur® | Todos los Derechos Reservados</span>
        <div className={styles.partners}>
          {PARTNERS.map((p) => (
            <img
              key={p.alt}
              src={p.src}
              alt={p.alt}
              className={p.src === '/dataweb.jpg' ? styles.partnerLogoColor : styles.partnerLogo}
            />
          ))}
        </div>
      </div>
    </footer>
  )
}
