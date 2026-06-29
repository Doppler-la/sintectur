import Nav from '../../components/layout/Nav/Nav'
import Footer from '../../components/layout/Footer/Footer'
import ProductHero from '../../components/sections/ProductHero/ProductHero'
import ProductContent from '../../components/sections/ProductContent/ProductContent'
import ProductCTA from '../../components/sections/ProductCTA/ProductCTA'
import styles from './IncentivesTravel.module.css'

const CHAPTERS = [
  {
    id: 'incentive-travel',
    label: 'Incentive Travel',
    paragraphs: [
      { text: 'Los viajes de incentivo tienen una condición de ser fundamental: no te pueden pasar por al lado, no te pueden dejar indiferente.', emphasis: 'primary' },
      { text: 'No se trata de elegir un lugar en el mapa sino de encontrar el destino donde mejor se pueda desarrollar la historia que todos querrán volver a vivir el año que viene.', emphasis: 'secondary' },
      { text: 'A partir de un brief al detalle, nosotros lo encontramos por vos, integrando storytelling, trazabilidad y optimización de costos.', emphasis: 'secondary' },
      { text: 'Ya no tenés que relegar la creatividad para contar con un control administrativo ordenado.', emphasis: 'primary' },
    ],
  },
  {
    id: 'tus-desafios',
    label: 'Tus desafíos',
    paragraphs: [
      { text: 'Los viajes que nacen como un incentivo, muchas veces generan desmotivación en quienes los organizan.', emphasis: 'primary' },
      { text: 'Porque a la par de planificar la experiencia una vez aterrizado el avión, hay que coordinar con proveedores, resolver urgencias, atender reprogramaciones, entregar informes, controlar gastos.', emphasis: 'secondary' },
      { text: 'Desde ya, lo último que necesitás es una agencia de viajes que, en vez de resolver, te dé más trabajo.', emphasis: 'primary' },
    ],
  },
  {
    id: 'nuestra-solucion',
    label: 'Nuestra solución',
    paragraphs: [
      { text: 'Entendemos tu rubro, y sabemos que un viaje de incentivo debe estar alineado con la identidad de tu marca, así como con las necesidades de logística y una eficiente gestión de la inversión.', emphasis: 'primary' },
      {
        emphasis: 'grid',
        items: [
          { text: 'Te proveemos opciones de destinos, cada uno con su propia storytelling y maneras clave para que tus invitados se lleven.' },
          { text: 'Un itinerario bien planificado y una agenda detallada día por día para cada destino propuesto.' },
          { text: 'Informes en tiempo real, métricas de ahorro, soporte 24/7 y todo lo que sabemos que necesitas para optimizar la inversión.' },
        ],
      },
      { text: 'Porque somos una plataforma de viajes, sí, pero especializados.', emphasis: 'primary' },
    ],
  },
]

export default function IncentivesTravel() {
  return (
    <div className={styles.page}>
      <Nav />
      <div className={styles.navSpacer} />

      <ProductHero
        leftColor="var(--watermelon)"
        title={<>Viajes de<br />incentivo<br />para empresas.</>}
        tagline="El mensaje correcto en el destino correcto."
        photo="/incentives2.jpg"
      />

      <ProductContent chapters={CHAPTERS} />

      {/* <ProductVideo photo="/incentives3.png" /> */}

      <ProductCTA
        leftColor="var(--gold)"
        text="Un viaje de incentivo está obligado a generar impacto en tus invitados."
        ctaLabel="Escribinos"
        photo="/incentives1.png"
      />

      <Footer />
    </div>
  )
}
