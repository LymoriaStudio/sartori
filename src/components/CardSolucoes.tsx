interface CardSolucoesProps {
  icon: string
  title: string
  desc: string
}

export function CardSolucoes({ icon, title, desc }: CardSolucoesProps) {
  return (
    <div className="bg-sartori-gray border-[#ececec] px-6 py-8 flex flex-col text-left h-full">
      {/* Ícone — altura fixa para todos ficarem alinhados */}
      <div className="w-[74px] h-[74px] flex-shrink-0 mb-8">
        <img src={icon} alt="" className="w-full h-full object-contain" />
      </div>

      {/* Título — sempre na mesma posição vertical */}
      <h3 className="font-lexend text-[20px] font-normal text-sartori-dark tracking-[-1px] mb-3">
        {title}
      </h3>

      {/* Texto */}
      <p className="font-montserrat text-[14px] font-medium text-sartori-gray-mid leading-relaxed">
        {desc}
      </p>
    </div>
  )
}
