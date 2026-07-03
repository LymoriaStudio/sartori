import { Link } from 'react-router-dom'
import { assets } from '../data'

const navLinks = [
  { label: 'Início',   to: '/' },
  { label: 'Sobre',    to: '/#sobre' },
  { label: 'Produtos', to: '/produtos' },
  { label: 'Soluções', to: '/#solucoes' },
  { label: 'Conteúdo', to: '/#conteudo' },
  { label: 'Contato',  to: '/#contato' },
]

const solucoes = [
  { label: 'Para Aquáticos',    to: '/categoria/aquaticos' },
  { label: 'Para Cães',         to: '/categoria/caes' },
  { label: 'Para Gatos',        to: '/categoria/gatos' },
  { label: 'Todos os produtos', to: '/produtos' },
]

const socials = [
  { img: assets.instagram, alt: 'Instagram', href: '#' },
  { img: assets.facebook,  alt: 'Facebook',  href: '#' },
  { img: assets.youtube,   alt: 'YouTube',   href: '#' },
  { img: assets.linkedin,  alt: 'LinkedIn',  href: '#' },
]

const contacts = [
  { img: assets.phone,    text: '(19) 00000-0000' },
  { img: assets.email,    text: 'contato@sartori.com.br' },
  { img: assets.whatsapp, text: '(19) 00000-0000' },
  { img: assets.pin,      text: 'Av. Brasil, 1234\nSão Paulo - SP\nCEP 12345-678' },
]

export function Footer() {
  return (
    <>
      <div className="h-16 overflow-hidden">
        <img src={assets.footerWave} alt="" className="w-full h-full object-cover" />
      </div>

      <footer className="bg-sartori-dark pt-12">
        <div className="max-w-[1440px] mx-auto px-5 md:px-20">

          {/* Main grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">

            {/* Brand */}
            <div>
              <img src={assets.logo} alt="Sartori" className="h-30 w-full" />
              <p className="text-[#eee] font-montserrat font-bold text-[15px] mb-2">
                Nutrição que move o campo
              </p>
              <p className="text-[#eee] font-montserrat font-normal text-[14px] leading-relaxed max-w-[237px]">
                Nutrição de qualidade para fortalecer o agro e garantir o melhor desempenho para o seu rebanho
              </p>
            </div>

            {/* Navegação */}
            <div>
              <p className="text-sartori-gray font-montserrat font-bold text-[14px] mb-4 uppercase tracking-wider">
                Navegação
              </p>
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="flex items-center gap-2 text-sartori-gray font-montserrat font-semibold text-[13px] hover:text-sartori-red-light transition-colors"
                    >
                      <img src={assets.arrowFooter} alt="" className="w-3.5 h-3.5 rotate-90 flex-shrink-0" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Soluções */}
            <div>
              <p className="text-sartori-gray font-montserrat font-bold text-[14px] mb-4 uppercase tracking-wider">
                Soluções
              </p>
              <ul className="flex flex-col gap-2">
                {solucoes.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="flex items-center gap-2 text-sartori-gray font-montserrat font-semibold text-[13px] hover:text-sartori-red-light transition-colors"
                    >
                      <img src={assets.arrowFooter} alt="" className="w-3.5 h-3.5 rotate-90 flex-shrink-0" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contato */}
            <div>
              <p className="text-sartori-gray font-montserrat font-bold text-[14px] mb-4 uppercase tracking-wider">
                Contato
              </p>
              <ul className="flex flex-col gap-3">
                {contacts.map((c) => (
                  <li key={c.text} className="flex items-start gap-2">
                    <img src={c.img} alt="" className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-sartori-gray font-montserrat font-semibold text-[13px] leading-snug whitespace-pre-line">
                      {c.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social */}
          <div className="flex gap-2 pb-8">
            {socials.map((s) => (
              <a
                key={s.alt}
                href={s.href}
                aria-label={s.alt}
                className="w-14 h-14 border border-sartori-gray/40 rounded-md flex items-center justify-center hover:border-sartori-red-light hover:bg-white/5 transition-all"
              >
                <img src={s.img} alt={s.alt} className="w-6 h-6" />
              </a>
            ))}
          </div>

          <div className="border-t border-white/10" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6">
            <div className="flex items-center gap-2">
              <img src={assets.copyright} alt="" className="w-5 h-5" />
              <span className="text-sartori-gray font-montserrat font-bold text-[13px]">
                2026 Sartori. Todos os direitos reservados
              </span>
            </div>
            <div className="flex items-center gap-3">
              <a href="#" className="text-sartori-gray font-montserrat font-bold text-[13px] hover:text-sartori-red-light transition-colors">
                Política de Privacidade
              </a>
              <span className="text-sartori-gray/50">|</span>
              <a href="#" className="text-sartori-gray font-montserrat font-bold text-[13px] hover:text-sartori-red-light transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
