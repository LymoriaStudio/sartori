import { useState, useMemo } from 'react'
import { Search } from 'lucide-react'
import { products, categories } from '../data'
import { CardProduto } from '../components/CardProduto'

import BannerDesktop from '../assets/produtos/banners/geral/BannerProduto_Geral_web-ver.png'
import BannerTablet  from '../assets/produtos/banners/geral/BannerProduto_Geral_tablet-ver.png'
import BannerMobile  from '../assets/produtos/banners/geral/BannerProduto_Geral_mobile-ver.png'

export default function ProdutosPage() {
  const [search, setSearch]     = useState('')
  const [activeCategory, setActiveCategory] = useState('todos')

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim()
    return products.filter((p) => {
      const matchCat = activeCategory === 'todos' || p.category === activeCategory
      const matchQ   = !q || p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q)
      return matchCat && matchQ
    })
  }, [search, activeCategory])

  const filterCategories = [
    { id: 'todos', title: 'Todos' },
    ...categories.filter((c) => c.id !== 'todos').map((c) => ({ id: c.id, title: c.title })),
  ]

  return (
    <div className="bg-sartori-gray min-h-screen">

      {/* Banner */}
      <section className="relative -mt-[65px] h-[260px] sm:h-[320px] lg:h-[420px] overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source media="(min-width: 1024px)" srcSet={BannerDesktop} />
          <source media="(min-width: 768px)"  srcSet={BannerTablet} />
          <img src={BannerMobile} alt="Produtos Sartori" className="w-full h-full object-cover" />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/35" />
        <div className="relative z-10 max-w-[1440px] h-full mx-auto px-5 md:px-20 flex items-center">
          <div className="max-w-[600px] pt-16">
            <h1 className="font-lexend text-[24px] sm:text-[30px] lg:text-[38px] font-medium text-white tracking-[-1.5px] leading-tight uppercase mb-3">
              Produtos em destaque
            </h1>
            <p className="font-montserrat text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed text-white/80">
              Conheça nossa linha completa de soluções nutricionais
              desenvolvidas com tecnologia e cuidado para cada espécie.
            </p>
          </div>
        </div>
      </section>

      {/* Filtros + busca */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-20 pt-10 pb-4">
        <div className="flex flex-col gap-4">

          {/* Busca — largura total */}
          <div className="relative w-full">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-sartori-gray-mid pointer-events-none" />
            <input
              type="text"
              placeholder="Buscar produto..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-full border border-[#e0e0e0] bg-white font-montserrat text-[13px] text-sartori-dark placeholder:text-sartori-gray-mid focus:outline-none focus:border-sartori-red transition-colors"
            />
          </div>

          {/* Filtro de categorias */}
          <div className="flex flex-wrap gap-2">
            {filterCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`font-montserrat text-[13px] font-semibold px-4 py-2 rounded-full border transition-colors duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-sartori-red border-sartori-red text-white'
                    : 'bg-white border-[#e0e0e0] text-sartori-dark hover:border-sartori-red hover:text-sartori-red'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Cards */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-20 py-8">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((prod) => (
              <CardProduto key={prod.id} product={prod} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 gap-3 text-center">
            <p className="font-lexend text-[20px] text-sartori-dark tracking-[-0.8px]">Nenhum produto encontrado</p>
            <p className="font-montserrat text-[14px] text-sartori-gray-mid">Tente outro termo ou categoria.</p>
          </div>
        )}
      </section>
    </div>
  )
}
