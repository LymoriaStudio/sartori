import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { Product } from '../data'

interface CardProdutoProps {
  product: Product
}

export function CardProduto({ product }: CardProdutoProps) {
  return (
    <Link
      to={`/produto/${product.id}`}
      className="group bg-[#f2f1f1] rounded-lg overflow-hidden block hover:shadow-lg transition-shadow"
    >
      {/* Image */}
      <div className="h-[280px] sm:h-[320px] bg-[#f2f1f1] flex items-center justify-center overflow-hidden">
        <img
          src={product.img}
          alt={product.name}
          className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Info */}
      <div className="flex items-center justify-between p-4 min-h-[80px]">
        <div>
          <p className="font-lexend text-[18px] font-normal text-sartori-dark tracking-[-0.9px] mb-1">
            {product.name}
          </p>
          <p className="font-montserrat text-[13px] font-medium text-[#7c7c7c]">
            {product.desc}
          </p>
        </div>
        <span className="w-[52px] h-[34px] border-2 border-sartori-dark rounded-[4px] flex items-center justify-center flex-shrink-0 ml-3 group-hover:bg-sartori-dark group-hover:text-white transition-all">
          <ArrowRight size={18} />
        </span>
      </div>
    </Link>
  )
}
