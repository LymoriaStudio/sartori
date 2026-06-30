import { Link } from 'react-router-dom'
import type { Category } from '../data'
import { assets } from '../data'

interface CardCategoriaProps {
  category: Category
}

export function CardCategoria({ category }: CardCategoriaProps) {
  return (
    <Link
      to={`/categoria/${category.id}`}
      className="group relative h-[340px] rounded-[22px] overflow-hidden block ring-2 ring-transparent hover:ring-sartori-red-light transition-all duration-300"
    >
      {/* Background image — escala no hover */}
      <img
        src={category.img}
        alt={category.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 rounded-[22px] bg-gradient-to-b from-transparent from-0% to-[#05041d] to-[91%] transition-opacity duration-300 group-hover:opacity-90" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <h3 className="font-lexend text-[22px] font-normal text-sartori-gray tracking-[-1.1px] mb-1">
          {category.title}
        </h3>
        <p className="font-montserrat text-[15px] font-medium text-sartori-gray mb-3">
          {category.desc}
        </p>

        {/*
          Botão 3:
          Default → fundo vermelho + seta branca
          Hover   → fundo branco + borda vermelha + seta escura
        */}
        <div className="flex">
          <span className="
            w-[52px] h-[34px] rounded-[4px] flex items-center justify-center
            border-2 border-sartori-red-light
            bg-sartori-red-light group-hover:bg-white
            transition-all duration-250
          ">
            {/* Seta branca — visível por default, some no hover */}
            <img
              src={assets.arrowWhite}
              alt=""
              className="w-5 h-5 rotate-90 block group-hover:hidden"
            />
            {/* Seta escura — aparece no hover */}
            <img
              src={assets.arrowDark}
              alt="Ver"
              className="w-5 h-5 rotate-90 hidden group-hover:block"
            />
          </span>
        </div>
      </div>
    </Link>
  )
}
