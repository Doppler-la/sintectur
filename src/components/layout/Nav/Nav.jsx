import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CircleUser, Globe } from 'lucide-react'
import styles from './Nav.module.css'
import { useModal } from '../../../context/ModalContext'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { openModal } = useModal()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu    = () => setMenuOpen(false)
  const handleModal  = (m) => { closeMenu(); openModal(m) }

  return (
    <>
      {/* ── barra fija ──────────────────────────────────────── */}
      <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
        {/* izquierda: hamburger + "Menú" */}
        <button
          className={`${styles.toggle} ${menuOpen ? styles.toggleOpen : ''} ${menuOpen ? styles.toggleHidden : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          <span className={styles.toggleLines}>
            <span /><span /><span />
          </span>
          <span className={styles.toggleLabel}>Menú</span>
        </button>

        {/* centro: logo */}
        <Link to="/" className={`${styles.logo} ${menuOpen ? styles.logoHidden : ''}`} onClick={closeMenu}>
          <img src="/logov1.png" alt="Sintectur" />
        </Link>

        {/* derecha: Acceder + Idioma */}
        <div className={`${styles.navRight} ${menuOpen ? styles.navRightHidden : ''}`}>
          {/* <a href="https://sintectcustreporting.azurewebsites.net/Login" target="_blank" rel="noopener noreferrer" className={styles.navAction}>
            <CircleUser size={18} strokeWidth={1.8} />
            Acceso clientes
          </a> */}
          <button className={styles.navAction}>
            <Globe size={18} strokeWidth={1.8} />
            Idioma
          </button>
        </div>
      </nav>

      {/* ── overlay fullscreen ──────────────────────────────── */}
      <div className={`${styles.overlay} ${menuOpen ? styles.overlayOpen : ''}`}>
        <button className={styles.closeBtn} onClick={closeMenu} aria-label="Cerrar menú">✕</button>
        <ul className={styles.mainLinks}>

          <li className={styles.mainItem} style={{ '--i': 0 }}>
            <a className={styles.menuItem} href="/#servicios" onClick={closeMenu}>Servicios</a>
          </li>

          <li className={styles.mainItem} style={{ '--i': 1 }}>
            <Link className={styles.menuItem} to="/portfolio" onClick={closeMenu}>Nuestro trabajo</Link>
          </li>

          {/* <li className={styles.mainItem} style={{ '--i': 2 }}>
            <Link className={styles.menuItem} to="/inspirate" onClick={closeMenu}>Inspírate</Link>
          </li> */}

          <li className={styles.mainItem} style={{ '--i': 3 }}>
            <button className={styles.menuItem} onClick={() => handleModal('contacto')}>Contacto</button>
          </li>

          <li className={styles.mainItem} style={{ '--i': 4 }}>
            <button className={styles.menuItem} onClick={() => handleModal('carrera')}>Carrera</button>
          </li>

        </ul>

        <div className={styles.overlayActions}>
          {/* <a href="https://sintectcustreporting.azurewebsites.net/Login" target="_blank" rel="noopener noreferrer" className={styles.overlayAction}>
            <CircleUser size={18} strokeWidth={1.8} />
            Acceso clientes
          </a> */}
          <button className={styles.overlayAction}>
            <Globe size={18} strokeWidth={1.8} />
            Idioma
          </button>
        </div>
      </div>

    </>
  )
}
