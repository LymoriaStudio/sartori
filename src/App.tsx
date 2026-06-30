import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import Home from './pages/Home'
import CategoriaPage from './pages/CategoriaPage'
import CategoriasPage from './pages/CategoriasPage'
import ProdutoPage from './pages/ProdutoPage'
import ProdutosPage from './pages/ProdutosPage'

/** Scrolls to the hash element after navigation, including cross-route navigation. */
function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const id = hash.replace('#', '')
    // Give time for the page to mount before scrolling
    const attempt = (tries: number) => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else if (tries > 0) {
        setTimeout(() => attempt(tries - 1), 80)
      }
    }
    attempt(10)
  }, [pathname, hash])

  return null
}

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToHash />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<ProdutosPage />} />
          <Route path="/categorias" element={<CategoriasPage />} />
          <Route path="/categoria/:id" element={<CategoriaPage />} />
          <Route path="/produto/:id" element={<ProdutoPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}
