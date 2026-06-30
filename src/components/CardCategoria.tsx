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
      className="group relative h-[340px] rounded-[22px] overflow-hidden block cursor-pointer"
    >
      {/* Background image */}
      <img
        src={category.img}
        alt={category.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 rounded-[22px] bg-gradient-to-b from-transparent from-0% to-[#05041d] to-[91%]" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <h3 className="font-lexend text-[22px] font-normal text-sartori-gray tracking-[-1.1px] mb-1">
          {category.title}
        </h3>
        <p className="font-montserrat text-[15px] font-medium text-sartori-gray mb-3">
          {category.desc}
        </p>
        <div className="flex">
          <span className="w-[52px] h-[34px] bg-sartori-red-light rounded-[4px] flex items-center justify-center group-hover:bg-sartori-red transition-colors">
            <img src={assets.arrowWhite} alt="Ver" className="w-5 h-5 rotate-90" />
          </span>
        </div>
      </div>
    </Link>
  )
}
