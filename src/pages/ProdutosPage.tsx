import { products } from '../data'
import { CardProduto } from '../components/CardProduto'

export default function ProdutosPage() {
  return (
    <div className="bg-sartori-gray min-h-screen">
      {/* Header */}
      <div className="bg-sartori-dark py-16 px-5 md:px-20">
        <div className="max-w-[1440px] mx-auto">
          <h1 className="font-lexend text-[28px] sm:text-[40px] font-medium text-sartori-gray tracking-[-2px] uppercase mb-3">
            Produtos em destaque
          </h1>
          <p className="font-montserrat text-[15px] font-medium text-sartori-gray/70 max-w-[540px] leading-relaxed">
            Conheça nossa linha completa de soluções nutricionais desenvolvidas com tecnologia e
            cuidado para cada espécie.
          </p>
        </div>
      </div>

      {/* Cards grid */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-20 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((prod) => (
            <CardProduto key={prod.id} product={prod} />
          ))}
        </div>
      </div>
    </div>
  )
}
