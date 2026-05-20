import { useScrollBg } from '../hooks/useScrollBg'
import Nav from '../components/layout/Nav/Nav'
import Footer from '../components/layout/Footer/Footer'
import Hero from '../components/sections/Hero/Hero'
import Services from '../components/sections/Services/Services'
import About from '../components/sections/About/About'
import MICE from '../components/sections/MICE/MICE'
import Testimonial from '../components/sections/Testimonial/Testimonial'
import CTA from '../components/sections/CTA/CTA'

export default function Home() {
  useScrollBg()

  return (
    <>
      <Nav />
      <div data-bg="navy"><Hero /></div>
      <div data-bg="cloud"><Services /></div>
      <div data-bg="navy"><About /></div>
      <div data-bg="navy"><MICE /></div>
      <div data-bg="cloud"><Testimonial /></div>
      <div data-bg="cloud"><CTA /></div>
      <div data-bg="navy"><Footer /></div>
    </>
  )
}
