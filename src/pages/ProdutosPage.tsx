import { products } from '../data'
import { CardProduto } from '../components/CardProduto'

import BannerDesktop from '../assets/produtos/banners/BannerProduto_Geral_web-ver.png'
import BannerTablet from '../assets/produtos/banners/BannerProduto_Geral_tablet-ver.png'
import BannerMobile from '../assets/produtos/banners/BannerProduto_Geral_mobile-ver.png'

export default function ProdutosPage() {
  return (
    <div className="bg-sartori-gray min-h-screen">
      {/* Banner */}
      <section className="relative h-[260px] sm:h-[320px] lg:h-[420px] overflow-hidden">
        {/* Desktop */}
        <img
          src={BannerDesktop}
          alt="Produtos Sartori"
          className="hidden lg:block absolute inset-0 w-full h-full object-cover"
        />

        {/* Tablet */}
        <img
          src={BannerTablet}
          alt="Produtos Sartori"
          className="hidden sm:block lg:hidden absolute inset-0 w-full h-full object-cover"
        />

        {/* Mobile */}
        <img
          src={BannerMobile}
          alt="Produtos Sartori"
          className="block sm:hidden absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/35"></div>

        {/* Conteúdo */}
        <div className="relative z-10 max-w-[1440px] h-full mx-auto px-5 md:px-20 flex items-center">
          <div className="max-w-[600px]">
            <h1 className="font-lexend text-[32px] sm:text-[42px] lg:text-[60px] font-medium text-white tracking-[-2px] uppercase mb-4">
              Produtos em destaque
            </h1>

            <p className="font-montserrat text-[15px] sm:text-[17px] lg:text-[20px] leading-relaxed text-white/80">
              Conheça nossa linha completa de soluções nutricionais
              desenvolvidas com tecnologia e cuidado para cada espécie.
            </p>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-20 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((prod) => (
            <CardProduto key={prod.id} product={prod} />
          ))}
        </div>
      </section>
    </div>
  )
}