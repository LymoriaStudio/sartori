interface CardSolucoesProps {
  icon: string
  title: string
  desc: string
}

export function CardSolucoes({ icon, title, desc }: CardSolucoesProps) {
  return (
    <div className="bg-sartori-gray border-r-2 border-[#ececec] last:border-r-0 px-6 py-6 h-[280px] flex flex-col text-left">
      <img src={icon} alt="" className="w-[74px] h-[74px] object-contain mb-auto" />
      <h3 className="font-lexend text-[22px] font-normal text-sartori-dark tracking-[-1.1px] mt-auto mb-2">
        {title}
      </h3>
      <p className="font-montserrat text-[15px] font-medium text-sartori-gray-mid leading-relaxed">
        {desc}
      </p>
    </div>
  )
}
