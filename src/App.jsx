import { useState, useEffect } from 'react'
import { createBrowserRouter, RouterProvider, ScrollRestoration, Outlet } from 'react-router-dom'
import Loader from './components/ui/Loader/Loader'
import { ModalProvider } from './context/ModalContext'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio/Portfolio'
import Inspirate from './pages/Inspirate'
import Acceder from './pages/Acceder/Acceder'
import AboutUs from './pages/AboutUs/AboutUs'
import MeetingsEvents from './pages/MeetingsEvents/MeetingsEvents'
import IncentivesTravel from './pages/IncentivesTravel/IncentivesTravel'
import ArgentinaExperience from './pages/ArgentinaExperience/ArgentinaExperience'
import Programas from './pages/Programas/Programas'
import ShipsCruises from './pages/ShipsCruises/ShipsCruises'
import ViajesBecciu from './pages/ViajesBecciu/ViajesBecciu'
import TravelExperience from './pages/TravelExperience/TravelExperience'
import CorporateTravel from './pages/CorporateTravel/CorporateTravel'
import StudyTravel from './pages/StudyTravel/StudyTravel'
import SportsTravel from './pages/SportsTravel/SportsTravel'
import OrchestraTravel from './pages/OrchestraTravel/OrchestraTravel'

function RootLayout() {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/',                  element: <Home /> },
      { path: '/portfolio',         element: <Portfolio /> },
      { path: '/inspirate',         element: <Inspirate /> },
      { path: '/acceder',           element: <Acceder /> },
      { path: '/nosotros',          element: <AboutUs /> },
      { path: '/meetings-events',   element: <MeetingsEvents /> },
      { path: '/incentives-travel',    element: <IncentivesTravel /> },
      { path: '/argentina-experience', element: <ArgentinaExperience /> },
      { path: '/programas',            element: <Programas /> },
      { path: '/ships-cruises',        element: <ShipsCruises /> },
      { path: '/viajes-becciu',         element: <ViajesBecciu /> },
      { path: '/travel-experience',     element: <TravelExperience /> },
      { path: '/corporate-travel',      element: <CorporateTravel /> },
      { path: '/study-travel',          element: <StudyTravel /> },
      { path: '/sports-travel',         element: <SportsTravel /> },
      { path: '/orchestra-travel',      element: <OrchestraTravel /> },
    ],
  },
])

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(t)
  }, [])

  return (
    <ModalProvider>
      <Loader visible={loading} />
      <RouterProvider router={router} />
    </ModalProvider>
  )
}
