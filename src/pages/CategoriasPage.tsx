import { Link } from 'react-router-dom'
import { categories } from '../data'
import { CardCategoria } from '../components/CardCategoria'

export default function CategoriasPage() {
  return (
    <div className="bg-sartori-gray min-h-screen">
      {/* Header section */}
      <div className="bg-sartori-blue py-16 px-5 md:px-20 text-center">
        <h1 className="font-lexend text-[28px] sm:text-[40px] font-medium text-sartori-gray tracking-[-2px] uppercase mb-4">
          Nossas Categorias
        </h1>
        <p className="font-montserrat text-[15px] font-medium text-sartori-gray/80 max-w-[560px] mx-auto leading-relaxed">
          Encontre a solução ideal para cada animal. Linha completa de nutrição desenvolvida com
          ciência e cuidado.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-20 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {categories.map((cat) => (
            <CardCategoria key={cat.id} category={cat} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center pb-16">
        <Link
          to="/#contato"
          className="inline-flex items-center gap-2 bg-sartori-red border border-sartori-red-light text-sartori-gray font-montserrat font-medium text-[15px] px-6 py-3 rounded-md hover:bg-sartori-red/80 transition-colors"
        >
          Fale com um especialista
        </Link>
      </div>
    </div>
  )
}
