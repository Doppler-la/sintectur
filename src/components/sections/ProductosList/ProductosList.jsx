import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import styles from './ProductosList.module.css'

const ITEMS = [
  {
    number: '01',
    title: 'Viajes corporativos',
    tagline: 'Los viajes de tu empresa, solucionados.',
    description:
      'Necesitás trazabilidad, control administrativo y reportes en tiempo real. Este es tu producto.',
    links: [{ label: 'Corporate Travel', href: '#' }],
  },
  {
    number: '02',
    title: 'Eventos & Viajes de incentivo',
    tagline: 'Hitos corporativos con identidad, sin sorpresas.',
    description:
      'La creatividad y la eficiencia presupuestaria pueden ir de la mano. Conocé nuestros productos',
    links: [{ label: 'Meetings and Events', href: '#' }, { label: 'Incentives Travel', href: '#' }],
  },
  {
    number: '03',
    title: 'Grupos premium / Specialized Groups',
    tagline: 'Viajes para estudiantes, deportistas, orquestas, coros y ballets.',
    description:
      'Los viajes con exigencias propias necesitan estructura, coordinación, seguridad y certezas. Para lo complejo y lo específico, una planificación a la altura. Resolvelo todo con nosotros.',
    links: [{ label: 'Study & Travel', href: '#' }, { label: 'Sports & Travel', href: '#' }, {label: 'Orquestra & Travel', href: '#'}],
  },
  {
    number: '04',
    title: 'Experiencias Argentinas',
    tagline: 'Viajá como turista, viví como local.',
    description:
      'Por tierra, por avión o por crucero, descubrí Argentina. Un itinerario que conecta con lo que sos. Explorá nuestros productos.',
    links: [{ label: 'Experience Argentina', href: '#' }, { label: 'Ships & Cruises', href: '#' }],
  },
  {
    number: '05',
    title: 'Viajes a medida',
    tagline: 'Sí, hay formas estándar de viajar. Pero también está la tuya.',
    description:
      'Investigamos opciones por vos, lo traducimos en un itinerario premium, y te asistimos durante el viaje 24/7. Y porque no hay edad para recorrer el mundo, diseñamos, junto a Becciu, viajes acompañados para adultos con paquetes exclusivos, seguridad y atención personalizada. Elegí el producto para vos.',
    links: [{ label: 'Travel Experience', href: '#' }, { label: 'Viajes acompañados by Becciu', href: '#' }],
  },
]

function AccordionItem({ number, title, tagline, description, links, isOpen, onToggle }) {
  return (
    <div className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}>
      <button className={styles.header} onClick={onToggle} aria-expanded={isOpen}>
        <span className={styles.number}>{number}.</span>
        <span className={styles.title}>{title}</span>
        <span className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}>
          <ChevronDown size={40} strokeWidth={1.5} />
        </span>
      </button>

      <div className={styles.body}>
        <div className={styles.bodyInner}>
          <p className={styles.tagline}>{tagline}</p>
          <p className={styles.description}>{description}</p>
          <div className={styles.links}>
            {links.map((l, i) => (
              <span key={l.label} className={styles.linkGroup}>
                {i > 0 && <span className={styles.sep}>|</span>}
                <a href={l.href} className={styles.link}>{l.label}</a>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProductosList() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(prev => prev === i ? null : i)

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {ITEMS.map((item, i) => (
          <AccordionItem
            key={item.number}
            {...item}
            isOpen={openIndex === i}
            onToggle={() => toggle(i)}
          />
        ))}
      </div>
    </section>
  )
}
