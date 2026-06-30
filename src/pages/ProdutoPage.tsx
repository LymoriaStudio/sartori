import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Tag } from 'lucide-react'
import { products, categories } from '../data'

export default function ProdutoPage() {
  const { id } = useParams<{ id: string }>()
  const product = products.find((p) => p.id === id)
  const category = categories.find((c) => c.id === product?.category)

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 px-5">
        <p className="font-lexend text-[28px] text-sartori-dark">Produto não encontrado</p>
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
      <div className="relative h-[320px] sm:h-[420px] overflow-hidden">
        <img
          src={product.img}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-black/75" />
        <div className="relative z-10 h-full flex flex-col justify-end px-5 md:px-20 max-w-[1440px] mx-auto pb-10">
          <Link
            to="/#produtos"
            className="inline-flex items-center gap-2 text-sartori-gray font-montserrat font-medium text-[14px] mb-4 hover:text-white/70 transition-colors"
          >
            <ArrowLeft size={16} /> Voltar para produtos
          </Link>
          <h1 className="font-lexend text-[32px] sm:text-[44px] font-medium text-sartori-gray tracking-[-2px] leading-tight">
            {product.name}
          </h1>
          <p className="font-montserrat text-[15px] font-medium text-sartori-gray/90 mt-2">
            {product.desc}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-20 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Product image card */}
          <div className="bg-[#f2f1f1] rounded-2xl overflow-hidden h-[360px] sm:h-[440px] flex items-center justify-center shadow-sm">
            <img
              src={product.img}
              alt={product.name}
              className="h-full w-auto object-contain p-8"
            />
          </div>

          {/* Details */}
          <div>
            {/* Category badge */}
            {category && (
              <Link
                to={`/categoria/${category.id}`}
                className="inline-flex items-center gap-2 bg-sartori-blue/10 text-sartori-blue font-montserrat font-semibold text-[13px] px-3 py-1.5 rounded-full mb-6 hover:bg-sartori-blue/20 transition-colors"
              >
                <Tag size={14} />
                {category.title}
              </Link>
            )}

            <h2 className="font-lexend text-[28px] sm:text-[36px] font-medium text-sartori-dark tracking-[-1.5px] leading-tight mb-4">
              {product.name}
            </h2>

            <p className="font-montserrat text-[15px] font-medium text-[#7c7c7c] tracking-[-0.5px] leading-relaxed mb-8">
              {product.fullDesc}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/#contato"
                className="inline-flex items-center justify-center gap-2 bg-sartori-red border border-sartori-red-light text-sartori-gray font-montserrat font-medium text-[15px] px-6 py-3 rounded-md hover:bg-sartori-red/80 transition-colors"
              >
                Fale com um especialista
              </Link>
              <Link
                to="/#categorias"
                className="inline-flex items-center justify-center gap-2 border-2 border-sartori-dark text-sartori-dark font-montserrat font-medium text-[15px] px-6 py-3 rounded-md hover:bg-sartori-dark hover:text-sartori-gray transition-colors"
              >
                <ArrowLeft size={16} />
                Ver categorias
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
