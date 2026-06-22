import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import styles from './ProductosList.module.css'

const ITEMS = [
  {
    number: '01',
    title: 'Viajes corporativos',
    tagline: 'Eficiencia y control en cada viaje de negocio.',
    description:
      'Gestionamos todos los aspectos del viaje corporativo: vuelos, hoteles, traslados y seguros. Con reportes de gastos en tiempo real y atención 24/7 para que tu equipo siempre esté respaldado.',
    links: [{ label: 'Corporate Travel', href: '#' }, { label: 'Travel Policy', href: '#' }],
  },
  {
    number: '02',
    title: 'Eventos & Viajes de incentivo',
    tagline: 'Hitos corporativos con identidad, sin sorpresas.',
    description:
      'La creatividad y la eficiencia presupuestaria pueden ir de la mano. Diseñamos eventos y programas de incentivo que motivan equipos y refuerzan la cultura organizacional.',
    links: [{ label: 'Meetings and Events', href: '#' }, { label: 'Incentives Travel', href: '#' }],
  },
  {
    number: '03',
    title: 'Grupos especializados',
    tagline: 'Logística grupal sin fricciones.',
    description:
      'Coordinamos viajes para grupos de cualquier tamaño con atención personalizada. Desde congresos y convenciones hasta viajes de estudio, cada detalle bajo control.',
    links: [{ label: 'Grupos & Congresos', href: '#' }, { label: 'Viajes Educativos', href: '#' }],
  },
  {
    number: '04',
    title: 'Experiencias Argentinas',
    tagline: 'Argentina profunda, curada a medida.',
    description:
      'Circuitos exclusivos por todo el territorio argentino para viajeros que buscan autenticidad. Naturaleza, cultura y gastronomía con estándares premium y guías especializados.',
    links: [{ label: 'Destinos', href: '#' }, { label: 'Circuitos', href: '#' }],
  },
  {
    number: '05',
    title: 'Viajes boutique',
    tagline: 'Cada detalle, pensado para vos.',
    description:
      'Experiencias de viaje completamente personalizadas para viajeros exigentes. Selección de alojamientos únicos, itinerarios exclusivos y acompañamiento permanente en destino.',
    links: [{ label: 'Luxury Travel', href: '#' }, { label: 'Tailor Made', href: '#' }],
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
