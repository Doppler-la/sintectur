import Nav from '../../components/layout/Nav/Nav'

const mediaUrl = import.meta.env.VITE_MEDIA_URL + '/Images/'
import Footer from '../../components/layout/Footer/Footer'
import ProductHero from '../../components/sections/ProductHero/ProductHero'
import ProductContent from '../../components/sections/ProductContent/ProductContent'
import ProductCTA from '../../components/sections/ProductCTA/ProductCTA'
import styles from './MeetingsEvents.module.css'

const CHAPTERS = [
  {
    id: 'desafios',
    label: 'Tus desafíos',
    paragraphs: [
      { text: 'Un evento puede lanzar un producto, fortalecer un equipo, consolidar un vínculo comercial o posicionar una marca. En todos los casos, hay un mensaje a ser transmitido, una cultura a ser potenciada.', emphasis: 'primary' },
      { text: 'Una dirección creativa cohesiva y consistente es tan vital como respetar el presupuesto, justificar inversiones, coordinar proveedores, cumplir plazos, anticipar obstáculos.', emphasis: 'secondary' },
      { text: 'Si hay casos de éxito, es porque la creatividad, la logística y el control administrativo funcionaron como un todo. Y eso es exactamente lo que mejor sabemos hacer.', emphasis: 'primary' },
    ],
  },
  {
    id: 'nuestra-solucion',
    label: 'Nuestra solución',
    paragraphs: [
      { text: 'Nuestro objetivo es plasmar tu voz en una experiencia que conecte con tus invitados a través de una planificación rigurosa que te guíe paso a paso.', emphasis: 'primary' },
      { text: 'Nuestra premisa, acompañarte durante el proceso en lugar de solo tomarte el pedido y ayudarte a marcar la diferencia con tus competidores con conceptos creativos que potencien los resultados de tu inversión.', emphasis: 'subheading' },
      { text: '¿Cómo?', emphasis: 'subheading' },
      {
        emphasis: 'grid',
        items: [
          { text: 'Utilizamos plataformas con metodología propia para entender a distintos niveles lo que necesitás y optimizar así tu tiempo invertido.' },
          { text: 'Te compartimos un calendario de reuniones, decisiones y entregables para que no te pierdas durante el proceso y te sientas acompañado.' },
          { text: 'Adaptamos creativamente nuestros productos para que se ajusten a tu público y objetivos, y que el mensaje de tu marca sea eficientemente comunicado.' },
        ],
      },
      { text: 'Porque una experiencia que impacte de verdad no se construye de un día para el otro. Pero bien hecha, el impacto es al instante.', emphasis: 'primary' },
    ],
  },
  {
    id: 'meetings-events',
    label: 'Meeting & Events',
    paragraphs: [
      { text: 'Cuando la esencia de tu marca conecta con lo que comunica, el impacto se da solo. Y ese es el propósito detrás de todo evento.', emphasis: 'primary' },
      { text: 'Desde el brief a la ejecución y desde lo administrativo a lo creativo, aseguramos coherencia entre tu identidad y tus objetivos.', emphasis: 'secondary' },
      { text: 'Sabiendo todo lo que un evento representa, aportamos eficiencia y creatividad para que te destaques de la competencia.', emphasis: 'primary' },
    ],
  },
]

export default function MeetingsEvents() {
  return (
    <div className={styles.page}>
      <Nav />
      <div className={styles.navSpacer} />

      <ProductHero
        leftColor="var(--gold)"
        title={<>Reuniones<br />y eventos<br />corporativos.</>}
        tagline="Experiencias alineadas con tu marca y mensaje."
        photo={`${mediaUrl}meeting1.jpg`}
      />

      <ProductContent chapters={CHAPTERS} />

      <ProductCTA
        leftColor="var(--watermelon)"
        text="No renuncies a tener creatividad y eficiencia del presupuesto."
        ctaLabel="Escribinos"
        photo={`${mediaUrl}meeting2.png`}
      />

      <Footer />
    </div>
  )
}
