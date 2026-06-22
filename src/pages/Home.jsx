import { useScrollBg } from '../hooks/useScrollBg'
import Nav from '../components/layout/Nav/Nav'
import Footer from '../components/layout/Footer/Footer'
import Hero from '../components/sections/Hero/Hero'
import WhoWeAre from '../components/sections/WhoWeAre/WhoWeAre'
import ProductosBanner from '../components/sections/ProductosBanner/ProductosBanner'
import ProductosList from '../components/sections/ProductosList/ProductosList'
import Services from '../components/sections/Services/Services'
import Contact from '../components/sections/Contact/Contact'

export default function Home() {
  useScrollBg()

  return (
    <>
      <Nav />
      <div data-bg="navy"><Hero /></div>
      <div data-bg="navy"><WhoWeAre /></div>
      <div data-bg="navy"><ProductosBanner /></div>
      <div data-bg="navy"><ProductosList /></div>
      <div data-bg="cloud"><Services /></div>
      <div data-bg="navy"><Contact /></div>
      <div data-bg="navy"><Footer /></div>
    </>
  )
}
