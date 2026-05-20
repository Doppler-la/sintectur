import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Nav.module.css'
import { SERVICES } from '../../../data/services'
import ContactoModal from './ContactoModal'
import CarreraModal from './CarreraModal'

export default function Nav() {
  const [menuOpen, setMenuOpen]       = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [modal, setModal]             = useState(null) // 'contacto' | 'carrera'

  const closeMenu  = () => { setMenuOpen(false); setServicesOpen(false) }
  const openModal  = (m) => { closeMenu(); setModal(m) }

  return (
    <>
      {/* ── barra fija ──────────────────────────────────────── */}
      <nav className={styles.nav}>
        <button
          className={`${styles.toggle} ${menuOpen ? styles.toggleOpen : ''}`}
          onClick={() => { setMenuOpen(v => !v); setServicesOpen(false) }}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          <span /><span /><span />
        </button>

        <Link to="/" className={styles.logo} onClick={closeMenu}>Sintectur</Link>

        <button className={styles.ctaNav} onClick={() => openModal('contacto')}>
          Contacto →
        </button>
      </nav>

      {/* ── overlay fullscreen ──────────────────────────────── */}
      <div className={`${styles.overlay} ${menuOpen ? styles.overlayOpen : ''}`}>
        <ul className={styles.mainLinks}>

          {/* Servicios */}
          <li className={styles.mainItem} style={{ '--i': 0 }}>
            <button
              className={`${styles.menuItem} ${servicesOpen ? styles.menuItemActive : ''}`}
              onClick={() => setServicesOpen(v => !v)}
            >
              Servicios
              <span className={`${styles.arrow} ${servicesOpen ? styles.arrowOpen : ''}`}>↓</span>
            </button>
            <div className={`${styles.servicesAccordion} ${servicesOpen ? styles.servicesOpen : ''}`}>
              <div>
                <ul className={styles.servicesList}>
                  {SERVICES.map(s => (
                    <li key={s.title}>
                      <Link to="/#servicios" onClick={closeMenu}>{s.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>

          {/* Portfolio */}
          <li className={styles.mainItem} style={{ '--i': 1 }}>
            <Link className={styles.menuItem} to="/portfolio" onClick={closeMenu}>Portfolio</Link>
          </li>

          {/* Contacto */}
          <li className={styles.mainItem} style={{ '--i': 2 }}>
            <button className={styles.menuItem} onClick={() => openModal('contacto')}>Contacto</button>
          </li>

          {/* Carrera */}
          <li className={styles.mainItem} style={{ '--i': 3 }}>
            <button className={styles.menuItem} onClick={() => openModal('carrera')}>Carrera</button>
          </li>

          {/* Inspírate */}
          <li className={styles.mainItem} style={{ '--i': 4 }}>
            <Link className={styles.menuItem} to="/inspirate" onClick={closeMenu}>Inspírate</Link>
          </li>

        </ul>
      </div>

      {/* ── modales ─────────────────────────────────────────── */}
      {modal === 'contacto' && <ContactoModal onClose={() => setModal(null)} />}
      {modal === 'carrera'  && <CarreraModal  onClose={() => setModal(null)} />}
    </>
  )
}
