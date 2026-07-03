import { Link } from 'react-router-dom'
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
        <div className="flex flex-col items-start text-left">
          <p className="font-lexend text-[18px] font-normal text-sartori-dark tracking-[-0.9px] mb-1">
            {product.name}
          </p>
          <p className="font-montserrat text-[13px] font-medium text-[#7c7c7c]">
            {product.desc}
          </p>
        </div>

        {/*
          Botão 4 — mesmo padrão do CardCategoria, invertido:
          Default : sem fundo (transparente) + borda escura + arrow-black (rotate-0)
          Hover   : fundo preto (sartori-dark) + arrow-white inclinada (rotate-[-15deg])
        */}
        <span className="
          relative w-[54px] h-[34px] rounded-[4px]
          flex items-center justify-center overflow-hidden flex-shrink-0 ml-3
          border-2 border-sartori-dark
          bg-transparent group-hover:bg-sartori-dark
          transition-colors duration-300
        ">
          {/* Arrow preta — visível por default, some no hover */}
          <img
            src="./assets/arrow-black.svg"
            alt=""
            aria-hidden
            className="
              absolute w-5 h-5
              rotate-0 group-hover:rotate-[-15deg]
              opacity-100 group-hover:opacity-0
              transition-all duration-300 ease-in-out
            "
          />
          {/* Arrow branca — aparece inclinada no hover */}
          <img
            src="./assets/arrow-white.svg"
            alt="Ver produto"
            className="
              absolute w-5 h-5
              rotate-0 group-hover:rotate-[-15deg]
              opacity-0 group-hover:opacity-100
              transition-all duration-300 ease-in-out
            "
          />
        </span>
      </div>
    </Link>
  )
}
