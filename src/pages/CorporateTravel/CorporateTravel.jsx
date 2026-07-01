import Nav from '../../components/layout/Nav/Nav'

const mediaUrl = import.meta.env.VITE_MEDIA_URL + '/Images/'
import Footer from '../../components/layout/Footer/Footer'
import ProductHero from '../../components/sections/ProductHero/ProductHero'
import ProductContent from '../../components/sections/ProductContent/ProductContent'
import ProductCTA from '../../components/sections/ProductCTA/ProductCTA'
import styles from './CorporateTravel.module.css'

const CHAPTERS = [
  {
    id: 'corporate-travel',
    label: 'Corporate Travel',
    paragraphs: [
      { text: 'Es posible gestionar los viajes de tu empresa sin perder el control del presupuesto, el tiempo, la trazabilidad y el bienestar de quien viaja. Sí, todo al mismo tiempo y sin que te tengas que encargar vos.', emphasis: 'primary' },
      { text: 'Somos el departamento de viajes externo que se adapta a tu empresa, y no al revés.', emphasis: 'primary' },
    ],
  },
  {
    id: 'tus-desafios',
    label: 'Tus Desafios',
    paragraphs: [
      { text: 'Efectivamente, los viajes corporativos implican mucho más que reservas y traslados.', emphasis: 'primary' },
      { text: 'Detrás de cada viaje hay presupuestos, aprobaciones, políticas internas, cambios de itinerario, informes a entregar, necesidades específicas y personas que necesitan llegar a destino en tiempo y forma.', emphasis: 'secondary' },
      { text: 'Sin un registro claro y un seguimiento ordenado, la eficiencia desaparece.', emphasis: 'primary' },
    ],
  },
  {
    id: 'nuestra-solucion',
    label: 'Nuestra solución',
    paragraphs: [
      { text: 'Centralizamos toda la operación y convertimos la gestión integral de tus viajes corporativos en un proceso claro, ordenado y previsible.', emphasis: 'primary' },
      { text: 'Un proceso dónde entendés todo y no te perdés nada.', emphasis: 'secondary' },
      { text: '¿Cómo lo hacemos?', emphasis: 'primary' },
      {
        emphasis: 'grid',
        items: [
          { text: 'Generamos trazabilidad y producimos reportes en tiempo real para que estés al tanto de cada decisión y cada inversión.' },
          { text: 'Respondemos rápido, siempre.' },
          { text: 'Asistimos 24/7 a quienes viajan para que la experiencia sea tan eficiente como la gestión que la sostiene.' },
          { text: 'Adaptamos nuestro servicio para que puedas gestionarlo de manera virtual y autónoma o a través de nuestros representantes especializados.' },
        ],
      },
      { text: 'Estamos para simplificarte lo complejo. Porque necesitás una plataforma que te de soluciones, no más trabajo.', emphasis: 'primary' },
      { text: '¿Quedaron dudas sobre cómo podemos ayudarte? Escuchá a nuestros clientes.', emphasis: 'primary' },
    ],
  },
]

export default function CorporateTravel() {
  return (
    <div className={styles.page}>
      <Nav />
      <div className={styles.navSpacer} />

      <ProductHero
        leftColor="var(--navy)"
        title={<>Viajes<br />corporativos</>}
        tagline="Los viajes de tu equipo, solucionados."
        photo={`${mediaUrl}incentives2.jpg`}
      />

      <ProductContent chapters={CHAPTERS} />

      <ProductCTA
        leftColor="var(--navy)"
        text="Nosotros resolvemos el viaje, vos despejá tu agenda."
        ctaLabel="Escribinos"
        photo={`${mediaUrl}incentives1.png`}
      />

      <Footer />
    </div>
  )
}
