import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { categories, products } from '../data'
import { CardProduto } from '../components/CardProduto'

export default function CategoriaPage() {
  const { id } = useParams<{ id: string }>()
  const category = categories.find((c) => c.id === id)

  const relatedProducts = products.filter(
    (p) => p.category === id || id === 'todos'
  )

  if (!category) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 px-5">
        <p className="font-lexend text-[28px] text-sartori-dark">Categoria não encontrada</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sartori-red font-montserrat font-semibold hover:underline"
        >
          <ArrowLeft size={18} /> Voltar para o início
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-sartori-gray min-h-screen">
      {/* Hero banner */}
      <div className="relative h-[350px] sm:h-[440px] overflow-hidden">
        <img
          src={category.img}
          alt={category.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
        <div className="relative z-10 h-full flex flex-col justify-end px-5 md:px-20 max-w-[1440px] mx-auto pb-10">
          <Link
            to="/#categorias"
            className="inline-flex items-center gap-2 text-sartori-gray font-montserrat font-medium text-[14px] mb-4 hover:text-white/70 transition-colors"
          >
            <ArrowLeft size={16} /> Voltar para categorias
          </Link>
          <h1 className="font-lexend text-[32px] sm:text-[44px] font-medium text-sartori-gray tracking-[-2px] leading-tight">
            {category.title}
          </h1>
          <p className="font-montserrat text-[15px] font-medium text-sartori-gray/90 mt-2 max-w-[500px]">
            {category.desc}
          </p>
        </div>
      </div>

      {/* Description */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-20 py-12">
        <p className="font-lexend text-[18px] sm:text-[22px] font-normal text-sartori-dark tracking-[-1px] leading-relaxed max-w-[760px]">
          {category.fullDesc}
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto border-t-2 border-[#e0e0e0]" />

      {/* Products */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-20 py-12">
        <h2 className="font-lexend text-[24px] sm:text-[30px] font-medium text-sartori-dark tracking-[-1.4px] mb-8">
          {relatedProducts.length > 0 ? 'Produtos desta categoria' : 'Nenhum produto encontrado'}
        </h2>
        {relatedProducts.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {relatedProducts.map((prod) => (
              <CardProduto key={prod.id} product={prod} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
