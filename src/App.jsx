import { useState, useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Loader from './components/ui/Loader/Loader'
import { ModalProvider } from './context/ModalContext'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio/Portfolio'
import Inspirate from './pages/Inspirate'
import Acceder from './pages/Acceder/Acceder'
import AboutUs from './pages/AboutUs/AboutUs'

const router = createBrowserRouter([
  { path: '/',          element: <Home /> },
  { path: '/portfolio', element: <Portfolio /> },
  { path: '/inspirate', element: <Inspirate /> },
  { path: '/acceder',   element: <Acceder /> },
  { path: '/nosotros',  element: <AboutUs /> },
])

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 500)
    return () => clearTimeout(t)
  }, [])

  return (
    <ModalProvider>
      <Loader visible={loading} />
      <RouterProvider router={router} />
    </ModalProvider>
  )
}
