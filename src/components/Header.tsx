import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { assets } from '../data'

const navLinks = [
  { label: 'Início',    to: '/' },
  { label: 'Sobre',     to: '/#sobre' },
  { label: 'Produtos',  to: '/produtos' },
  { label: 'Soluções',  to: '/#solucoes' },
  { label: 'Conteúdo',  to: '/#conteudo' },
  { label: 'Contato',   to: '/#contato' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [])

  return (
    <>
      {/* Topbar */}
      <div className="bg-sartori-dark h-8 flex items-center justify-center px-4">
        <p className="text-sartori-gray text-[12px] font-montserrat font-medium text-center">
          Nutrição e bem-estar animal com qualidade, tradição e confiança
        </p>
      </div>

      {/* Navbar */}
      <nav className="bg-sartori-dark/95 backdrop-blur-sm sticky top-0 z-50 h-[65px] flex items-center border-b border-white/5">
        <div className="w-full max-w-[1440px] mx-auto px-5 lg:px-20 flex items-center gap-6">

          <Link to="/" className="flex-shrink-0" onClick={() => setOpen(false)}>
            <img src={assets.logo} alt="Sartori" className="h-25 w-full" />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-6 ml-auto">
            {navLinks.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.to}
                  className="text-sartori-gray text-[15px] font-montserrat font-medium hover:text-sartori-red-light transition-colors whitespace-nowrap"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link
            to="/#contato"
            className="hidden lg:inline-flex items-center gap-2 bg-sartori-red border border-sartori-red-light text-sartori-gray font-montserrat font-medium text-[15px] px-5 py-2.5 rounded-md hover:bg-sartori-red/80 transition-colors whitespace-nowrap ml-4"
          >
            Fale com um especialista
            <img src={assets.arrowRed} alt="" className="w-4 h-4 rotate-90" />
          </Link>

          {/* Hamburger */}
          <button
            className="lg:hidden ml-auto text-sartori-gray p-2 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Slide-in menu */}
      <div
        className={`fixed top-0 right-0 z-[70] h-full w-72 bg-sartori-dark flex flex-col transition-transform duration-300 ease-in-out lg:hidden shadow-2xl ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <img src={assets.logo} alt="Sartori" className="h-8 w-auto" />
          <button
            onClick={() => setOpen(false)}
            className="text-sartori-gray p-2 rounded-md hover:bg-white/10 transition-colors"
            aria-label="Fechar menu"
          >
            <X size={22} />
          </button>
        </div>

        <ul className="flex flex-col p-5 gap-1 flex-1 overflow-y-auto">
          {navLinks.map((link) => (
            <li key={link.label}>
              <NavLink
                to={link.to}
                onClick={() => setOpen(false)}
                className="block text-sartori-gray font-montserrat font-medium text-[16px] py-3 px-4 rounded-md hover:bg-white/10 hover:text-sartori-red-light transition-all"
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="p-5 border-t border-white/10">
          <Link
            to="/#contato"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 w-full bg-sartori-red border border-sartori-red-light text-sartori-gray font-montserrat font-medium text-[15px] px-5 py-3 rounded-md hover:bg-sartori-red/80 transition-colors"
          >
            Fale com um especialista
          </Link>
        </div>
      </div>
    </>
  )
}
