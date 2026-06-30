import { Link } from 'react-router-dom'
import styles from './Footer.module.css'
import { useModal } from '../../../context/ModalContext'
import LazyImg from '../../ui/LazyImg/LazyImg'

const mediaUrl = import.meta.env.VITE_MEDIA_URL + '/Images/'

const EMPRESA = ['Servicios', 'Nuestro Trabajo', 'Inspírate', 'Contacto', 'Carrera']
const ROUTES = { 'Nuestro Trabajo': '/portfolio', 'Inspírate': '/inspirate' }
const HASH_LINKS = { 'Servicios': '/#servicios' }
const PRODUCTOS = [
  { label: 'Corporate Travel', href: '/corporate-travel', internal: true },
  { label: 'Meetings & Events', href: '/meetings-events', internal: true },
  { label: 'Incentives Travel', href: '/incentives-travel', internal: true },
  { label: 'Specials Groups', href: '/sports-travel', internal: true },
  { label: 'Accompanied Trips', href: '/viajes-becciu', internal: true },
  { label: 'Argentina Group Experiences', href: '/argentina-experience', internal: true },
]

const SOCIALS = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/sintectur/',
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
    name: 'Facebook',
    href: 'https://www.facebook.com/Sintectur',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
]

const PARTNERS = [
  { file: 'logo-ltn.png', alt: 'LTN L\'Alianxa Travel Network' },
  { file: 'logo-serandipians.png', alt: 'Serandipians Member Travel Designers' },
  { file: 'Logo Iata.png', alt: 'IATA' },
  { file: 'dataweb.jpg', alt: 'Data Fiscal', color: true },
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
              ) : HASH_LINKS[item] ? (
                <a key={item} href={HASH_LINKS[item]}>{item}</a>
              ) : ROUTES[item] ? (
                <Link key={item} to={ROUTES[item]}>{item}</Link>
              ) : (
                <a key={item} href="#">{item}</a>
              )
            )}
          </div>

          <div className={styles.col}>
            <h5>PRODUCTOS</h5>
            {PRODUCTOS.map((item) =>
              item.internal ? (
                <Link key={item.label} to={item.href}>{item.label}</Link>
              ) : (
                <a key={item.label} href={item.href}>{item.label}</a>
              )
            )}
          </div>
        </div>

        <div className={styles.socials}>
          {SOCIALS.map((s) => (
            <a key={s.name} target='_blank' href={s.href} className={styles.socialIcon} aria-label={s.name}>
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      <div className={styles.bottom}>
        <span className={styles.copyright}>© 1961 Sintectur® | Todos los Derechos Reservados</span>
        <div className={styles.partners}>
          {PARTNERS.map((p) => (
            <LazyImg
              key={p.alt}
              src={`${mediaUrl}${p.file}`}
              alt={p.alt}
              className={p.color ? styles.partnerLogoColor : styles.partnerLogo}
            />
          ))}
        </div>
      </div>
    </footer>
  )
}
