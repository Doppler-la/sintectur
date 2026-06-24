import { useState, useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Loader from './components/ui/Loader/Loader'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Inspirate from './pages/Inspirate'
import Acceder from './pages/Acceder/Acceder'

const router = createBrowserRouter([
  { path: '/',          element: <Home /> },
  { path: '/portfolio', element: <Portfolio /> },
  { path: '/inspirate', element: <Inspirate /> },
  { path: '/acceder',   element: <Acceder /> },
])

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <Loader visible={loading} />
      <RouterProvider router={router} />
    </>
  )
}
