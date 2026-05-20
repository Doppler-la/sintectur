import { Link } from 'react-router-dom'
import Nav from '../components/layout/Nav/Nav'

export default function Inspirate() {
  return (
    <>
      <Nav />
      <main style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--navy)',
        color: 'var(--cloud)',
        textAlign: 'center',
        padding: '40px',
        gap: '16px',
      }}>
        <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--gold)' }}>
          Inspírate
        </p>
        <h1 style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 700, letterSpacing: '-2px', lineHeight: 1.05 }}>
          Próximamente
        </h1>
        <p style={{ color: 'rgba(249,244,240,0.5)', maxWidth: '400px', lineHeight: 1.6 }}>
          Destinos, historias y experiencias que van a inspirarte a viajar diferente.
        </p>
        <Link
          to="/"
          style={{ marginTop: '24px', color: 'var(--gold)', fontWeight: 600, textDecoration: 'none', fontSize: '14px' }}
        >
          ← Volver al inicio
        </Link>
      </main>
    </>
  )
}
