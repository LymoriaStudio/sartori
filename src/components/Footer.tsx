import { Link } from 'react-router-dom'
import { assets } from '../data'

import LogoGeral from "../assets/logos/Logo_white.svg";

import IconPhone from "../assets/icones/iconamoon_phone-light_RD.svg";
import IconEmail from "../assets/icones/mdi_email-outline_RD.svg";
import IconWhatsapp from "../assets/icones//mdi_whatsapp.svg";
import IconLocate from "../assets/icones/si_pin-line.svg";

import SocialInstagram from "../assets/icones/iconoir_instagram.svg";
import SocialFacebook from "../assets/icones/fe_facebook.svg";
import SocialYoutube from "../assets/icones/uit_youtube.svg";
import SocialLinkedlin from "../assets/icones/uil_linkedin.svg";

import IconCopy from "../assets/icones/ic_outline-copyright.svg";

const navLinks = [
  { label: 'Início', to: '/' },
  { label: 'Sobre', to: '/#sobre' },
  { label: 'Produtos', to: '/produtos' },
  { label: 'Soluções', to: '/#solucoes' },
  { label: 'Conteúdo', to: '/#conteudo' },
  { label: 'Contato', to: '/#contato' },
]

const solucoes = [
  { label: 'Para Aquáticos', to: '/categoria/aquaticos' },
  { label: 'Para Cães', to: '/categoria/caes' },
  { label: 'Para Gatos', to: '/categoria/gatos' },
  { label: 'Todos os produtos', to: '/produtos' },
]

const socials = [
  { img: SocialInstagram, alt: 'Instagram', href: '#' },
  { img: SocialFacebook, alt: 'Facebook', href: '#' },
  { img: SocialYoutube, alt: 'YouTube', href: '#' },
  { img: SocialLinkedlin, alt: 'LinkedIn', href: '#' },
]

const contacts = [
  { img: IconPhone, text: '(19) 00000-0000' },
  { img: IconEmail, text: 'contato@sartori.com.br' },
  { img: IconWhatsapp, text: '(19) 00000-0000' },
  { img: IconLocate, text: 'Av. Brasil, 1234\nSão Paulo - SP\nCEP 12345-678' },
]

export function Footer() {
  return (
    <>

      <footer className="bg-sartori-dark pt-12">
        <div className="max-w-[1440px] mx-auto px-5 md:px-20">

          {/* Main grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">

            {/* Brand */}
            <div>
              <img src={LogoGeral} alt="Sartori" className="h-10 mb-3" />
              <p className="text-[#eee] font-montserrat font-bold mb-2">
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
              <img src={IconCopy} alt="" className="w-5 h-5" />
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
