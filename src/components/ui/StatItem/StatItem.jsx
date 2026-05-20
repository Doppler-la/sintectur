import styles from './StatItem.module.css'

export default function StatItem({ value, label, dark = false }) {
  return (
    <div className={`${styles.item} ${dark ? styles.dark : ''}`}>
      <h4>{value}</h4>
      <p>{label}</p>
    </div>
  )
}
