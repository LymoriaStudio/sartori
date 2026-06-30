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
      className="group bg-[#f2f1f1] rounded-lg overflow-hidden block transition-shadow duration-300 hover:shadow-xl"
    >
      {/* Image */}
      <div className="h-[280px] sm:h-[320px] bg-[#f2f1f1] flex items-center justify-center overflow-hidden">
        <img
          src={product.img}
          alt={product.name}
          className="h-full w-auto object-contain transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      {/* Info row */}
      <div className="flex items-center justify-between p-4 min-h-[80px]">
        <div>
          <p className="font-lexend text-[18px] font-normal text-sartori-dark tracking-[-0.9px] mb-1">
            {product.name}
          </p>
          <p className="font-montserrat text-[13px] font-medium text-[#7c7c7c]">
            {product.desc}
          </p>
        </div>

        {/*
          Botão 4:
          Default → fundo branco + borda escura + ícone escuro
          Hover   → fundo preto + ícone branco
        */}
        <span className="
          w-[52px] h-[34px] rounded-[4px] flex items-center justify-center flex-shrink-0 ml-3
          border-2 border-sartori-dark
          bg-white group-hover:bg-sartori-dark
          text-sartori-dark group-hover:text-white
          transition-all duration-250
        ">
          <ArrowRight size={18} />
        </span>
      </div>
    </Link>
  )
}
