
import Nav from '../components/layout/Nav/Nav'
import Footer from '../components/layout/Footer/Footer'
import Hero from '../components/sections/Hero/Hero'
import WhoWeAre from '../components/sections/WhoWeAre/WhoWeAre'
import ProductosBanner from '../components/sections/ProductosBanner/ProductosBanner'
import ProductosList from '../components/sections/ProductosList/ProductosList'
import CTADual from '../components/sections/CTADual/CTADual'
import Services from '../components/sections/Services/Services'
import Contact from '../components/sections/Contact/Contact'

export default function Home() {
  return (
    <>
      <Nav />
      <div data-bg="navy"><Hero /></div>
      <div data-bg="navy"><WhoWeAre /></div>
      <div data-bg="navy"><ProductosBanner /></div>
      <div data-bg="navy"><ProductosList /></div>
      <div data-bg="navy"><CTADual /></div>
      <div style={{ background: '#000', padding: '60px 0', lineHeight: 0 }}>
        <img
          src="/logov1.png"
          alt="Sintectur"
          style={{ width: '100%', display: 'block', opacity: 0.15 }}
        />
      </div>
      <div data-bg="navy"><Footer /></div>
    </>
  )
}
