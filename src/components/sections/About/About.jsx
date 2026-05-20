import styles from './About.module.css'
import SectionHeader from '../../ui/SectionHeader/SectionHeader'
import StatItem from '../../ui/StatItem/StatItem'
import { STATS } from '../../../data/stats'

export default function About() {
  return (
    <div className={styles.split}>
      <div className={styles.text}>
        <SectionHeader
          dark
          label="Nosotros"
          title="Más de dos décadas conectando el mundo."
          sub="Somos una agencia de viajes corporativos con base en Buenos Aires. Especializados en soluciones a medida para empresas que buscan eficiencia, experiencia y confianza."
        />
        <div className={styles.stats}>
          {STATS.map((s) => (
            <StatItem dark key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </div>
      <div className={styles.visual} />
    </div>
  )
}
