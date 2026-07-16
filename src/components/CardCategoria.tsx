import { Link } from 'react-router-dom'
import type { Category } from '../data'

interface CardCategoriaProps {
  category: Category
}

export function CardCategoria({ category }: CardCategoriaProps) {
  return (
    <Link
      to={`/categoria/${category.id}`}
      className="group relative h-[340px] rounded-[22px] overflow-hidden block ring-2 ring-transparent hover:ring-sartori-red-light transition-all duration-300"
    >
      {/* Background image */}
      <img
        src={category.cardImg}
        alt={category.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 rounded-[22px] bg-gradient-to-b from-transparent from-0% to-[#05041d] to-[91%] transition-opacity duration-300 group-hover:opacity-90" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end items-start p-6">
        <h3 className="font-lexend text-[22px] font-normal text-sartori-gray tracking-[-1.1px] mb-1">
          {category.title}
        </h3>
        <p className="font-montserrat text-[15px] font-medium text-sartori-gray mb-3">
          {category.desc}
        </p>

        {/*
          Botão 3 — transição:
          Default : fundo vermelho + seta branca apontando direita (rotate-90)
          Hover   : fundo branco  + seta vermelha/escura inclinada (rotate-45 = ↗)
          A seta rotaciona e troca de cor via opacity crossfade simultâneo.
        */}
        <div className="flex">
          <span className="
            relative w-[54px] h-[34px] rounded-[4px]
            flex items-center justify-center overflow-hidden
            
            bg-sartori-red-light group-hover:bg-white
            transition-colors duration-300
          ">
            {/* Seta branca — some no hover */}
            <img
              src="/assets/arrow-white.svg"
              alt=""
              aria-hidden
              className="
                absolute w-5 h-5
                rotate-0 group-hover:rotate-[-15deg]
                opacity-100 group-hover:opacity-0
                transition-all duration-300 ease-in-out
              "
            />
            {/* Seta escura — aparece no hover, já começa inclinada */}
            <img
              src="/assets/arrow-red.svg"
              alt="Ver categoria"
              className="
                absolute w-6 h-6
                rotate-0 group-hover:rotate-[-15deg]
                opacity-0 group-hover:opacity-100
                transition-all duration-300 ease-in-out
              "
            />
          </span>
        </div>
      </div>
    </Link>
  )
}
