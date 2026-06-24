import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CircleUser, Globe } from 'lucide-react'
import styles from './Nav.module.css'
import ContactoModal from './ContactoModal'
import CarreraModal from './CarreraModal'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [modal, setModal]       = useState(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)
  const openModal = (m) => { closeMenu(); setModal(m) }

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
          <Link to="/acceder" className={styles.navAction}>
            <CircleUser size={18} strokeWidth={1.8} />
            Acceder
          </Link>
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
            <Link className={styles.menuItem} to="/productos" onClick={closeMenu}>Productos</Link>
          </li>

          <li className={styles.mainItem} style={{ '--i': 1 }}>
            <Link className={styles.menuItem} to="/portfolio" onClick={closeMenu}>Nuestro trabajo</Link>
          </li>

          <li className={styles.mainItem} style={{ '--i': 2 }}>
            <Link className={styles.menuItem} to="/inspirate" onClick={closeMenu}>Inspírate</Link>
          </li>

          <li className={styles.mainItem} style={{ '--i': 3 }}>
            <button className={styles.menuItem} onClick={() => openModal('contacto')}>Contacto</button>
          </li>

          <li className={styles.mainItem} style={{ '--i': 4 }}>
            <button className={styles.menuItem} onClick={() => openModal('carrera')}>Carrera</button>
          </li>

        </ul>

        <div className={styles.overlayActions}>
          <button className={styles.overlayAction} onClick={() => openModal('contacto')}>
            <CircleUser size={18} strokeWidth={1.8} />
            Acceder
          </button>
          <button className={styles.overlayAction}>
            <Globe size={18} strokeWidth={1.8} />
            Idioma
          </button>
        </div>
      </div>

      {modal === 'contacto' && <ContactoModal onClose={() => setModal(null)} />}
      {modal === 'carrera'  && <CarreraModal  onClose={() => setModal(null)} />}
    </>
  )
}
