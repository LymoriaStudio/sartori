import { Link } from 'react-router-dom'
import { assets, categories, products } from '../data'
import { CardSolucoes } from '../components/CardSolucoes'
import { CardCategoria } from '../components/CardCategoria'
import { CardProduto } from '../components/CardProduto'
import { ContactForm } from '../components/ContactForm'

const solucoes = [
  {
    icon: assets.iconDes,
    title: 'Desempenho e produtividade',
    desc: 'Soluções nutricionais desenvolvidas para melhorar o rendimento dos animais, aumentar o ganho de peso e otimizar os resultados da produção.',
  },
  {
    icon: assets.iconSaude,
    title: 'Saúde e bem-estar',
    desc: 'Alimentação de qualidade que contribui para a saúde, o equilíbrio e a qualidade de vida dos pets em todas as fases.',
  },
  {
    icon: assets.iconEnergia,
    title: 'Energia e vitalidade',
    desc: 'Soluções que ajudam a manter os animais mais ativos, saudáveis e com mais disposição no dia a dia.',
  },
]

export default function Home() {
  return (
    <div className="bg-sartori-gray">

      {/* ── Hero ── */}
      <section
        className="relative min-h-[600px] lg:h-[650px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${assets.heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 md:px-20 py-20">
          <h1 className="font-lexend text-[28px] sm:text-[36px] lg:text-[44px] font-medium text-sartori-gray tracking-[-2px] max-w-[630px] leading-tight mb-6">
            NUTRIÇÃO E BEM-ESTAR ANIMAL DO CAMPO À CIDADE
          </h1>
          <p className="font-montserrat text-[16px] sm:text-[18px] font-medium text-sartori-gray max-w-[550px] leading-relaxed mb-10">
            Cuidamos da saúde e do desempenho dos animais com qualidade, tradição e
            compromisso. Da produção ao convívio no dia a dia.
          </p>
          <Link
            to="/categorias"
            className="inline-flex items-center border-2 border-sartori-gray text-sartori-gray font-montserrat font-medium text-[15px] px-6 py-2.5 rounded-md hover:bg-white/10 transition-colors"
          >
            Conhecer produtos
          </Link>
        </div>
      </section>

      {/* ── Soluções ── */}
      <section id="solucoes" className="max-w-[1440px] mx-auto px-5 md:px-20 py-16 text-center">
        <div className="inline-flex items-center gap-2 mb-4">
          <img src={assets.asteriscoDark} alt="" className="w-5 h-5" />
          <span className="font-montserrat text-[15px] font-medium text-[#a5a5a5] tracking-[-0.8px]">
            O que oferecemos
          </span>
        </div>
        <h2 className="font-lexend text-[26px] sm:text-[32px] font-medium text-sartori-dark tracking-[-1.6px] uppercase mb-4">
          SOLUÇÃO QUE FAZEM A DIFERENÇA
        </h2>
        <p className="font-montserrat text-[15px] font-medium text-sartori-gray-mid max-w-[662px] mx-auto leading-relaxed tracking-[-0.8px] mb-12">
          Desenvolvemos soluções nutricionais pensadas para melhorar o desempenho, fortalecer a
          saúde e garantir mais qualidade de vida para os animais. No campo e no dia a dia.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x-2 divide-[#ececec]">
          {solucoes.map((s) => (
            <CardSolucoes key={s.title} icon={s.icon} title={s.title} desc={s.desc} />
          ))}
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto border-t-2 border-[#e0e0e0]" />

      {/* ── Sobre nós ── */}
      <section id="sobre" className="max-w-[1440px] mx-auto px-5 md:px-20 py-16">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src={assets.asteriscoRed} alt="" className="w-5 h-5" />
              <span className="font-montserrat text-[15px] font-medium text-[#a5a5a5] tracking-[-0.8px]">
                Sobre nós
              </span>
            </div>
            <h2 className="font-lexend text-[22px] sm:text-[30px] font-medium text-sartori-dark tracking-[-1.6px] max-w-[600px]">
              Tradição que alimenta. Inovação que impulsiona
            </h2>
          </div>
          <Link
            to="/#sobre"
            className="inline-flex items-center gap-2 self-start bg-sartori-red border border-sartori-red-light text-sartori-gray font-montserrat font-medium text-[15px] px-5 py-2.5 rounded-md hover:bg-sartori-red/80 transition-colors whitespace-nowrap"
          >
            Saiba mais
            <img src={assets.arrowRed} alt="" className="w-4 h-4 rotate-90" />
          </Link>
        </div>

        {/* Hero image */}
        <div className="rounded-2xl overflow-hidden h-[300px] sm:h-[420px] lg:h-[520px] mb-14">
          <img src={assets.sobreNos} alt="Sobre a Sartori" className="w-full h-full object-cover" />
        </div>

        {/* Text columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <p className="font-lexend text-[20px] sm:text-[22px] font-normal text-sartori-dark tracking-[-1.2px] leading-relaxed">
            Na Sartori, acreditamos que o sucesso do campo nasce da confiança e do compromisso com
            quem produz. Por isso, desenvolvemos soluções que unem tradição, tecnologia e excelência,
            oferecendo produtos de alta qualidade para fortalecer o agronegócio brasileiro.
          </p>
          <div className="flex flex-col gap-5">
            <p className="font-montserrat text-[16px] sm:text-[18px] font-medium text-[#7c7c7c] tracking-[-0.9px] leading-relaxed">
              Nossa missão vai além de atender às necessidades do produtor rural. Trabalhamos para
              criar relações sólidas, baseadas em respeito, proximidade e resultados, contribuindo
              diariamente para um campo mais forte, produtivo e preparado para as próximas gerações.
            </p>
            <p className="font-montserrat text-[16px] sm:text-[18px] font-medium text-[#7c7c7c] tracking-[-0.9px] leading-relaxed">
              Essa segunda versão combina muito bem com um site moderno e premium, além de estar
              alinhada com o posicionamento da marca apresentado na identidade visual da Sartori.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto border-t-2 border-[#e0e0e0]" />

      {/* ── Categorias ── */}
      <section id="categorias" className="bg-sartori-blue relative overflow-hidden py-16 px-5 md:px-20">
        {/* Decorative elements */}
        <img src={assets.decoLeft}  alt="" className="absolute left-0 top-0 h-full w-auto pointer-events-none opacity-80 hidden lg:block" style={{ transform: 'scaleX(-1)' }} />
        <img src={assets.decoRight} alt="" className="absolute right-0 top-0 h-full w-auto pointer-events-none opacity-80 hidden lg:block" />

        <div className="relative z-10 text-center max-w-[1440px] mx-auto">
          <div className="inline-flex items-center gap-2 mb-4">
            <img src={assets.asteriscoBlue} alt="" className="w-5 h-5" />
            <span className="font-montserrat text-[15px] font-medium text-sartori-gray tracking-[-0.8px]">
              Categorias
            </span>
          </div>
          <h2 className="font-lexend text-[24px] sm:text-[30px] font-medium text-sartori-gray tracking-[-1.6px] uppercase mb-12">
            O QUE VOCÊ ESTÁ PROCURANDO?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {categories.map((cat) => (
              <CardCategoria key={cat.id} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Produtos em destaque ── */}
      <section id="produtos" className="max-w-[1440px] mx-auto px-5 md:px-20 py-16 text-center">
        <h2 className="font-lexend text-[26px] sm:text-[32px] font-medium text-sartori-dark tracking-[-1.6px] mb-12">
          Produtos em destaque
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {products.map((prod) => (
            <CardProduto key={prod.id} product={prod} />
          ))}
        </div>

        <Link
          to="/categorias"
          className="inline-flex items-center gap-2 bg-sartori-blue-dark border border-[#3c3882] text-sartori-gray font-montserrat font-medium text-[15px] px-6 py-2.5 rounded-md hover:opacity-90 transition-opacity mt-10"
        >
          Ver todos os produtos
          <img src={assets.arrowWhite} alt="" className="w-4 h-4 rotate-90" />
        </Link>
      </section>

      {/* ── Contato ── */}
      <section id="contato" className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
        {/* Left – dark blue */}
        <div className="bg-sartori-blue-dark px-8 md:px-16 py-14 relative overflow-hidden">
          <div className="flex items-center gap-2 mb-5">
            <img src={assets.asteriscoRed} alt="" className="w-5 h-5" />
            <span className="font-montserrat text-[15px] font-medium text-sartori-gray tracking-[-0.8px]">
              Contato
            </span>
          </div>
          <h2 className="font-lexend text-[24px] sm:text-[30px] font-medium text-sartori-gray tracking-[-1.6px] uppercase max-w-[420px] leading-tight">
            ESTAMOS PRONTOS PARA ATENDER VOCÊ!
          </h2>
          {/* Background logo watermark */}
          <img
            src={assets.logo}
            alt=""
            className="absolute right-10 bottom-10 h-48 sm:h-64 w-auto opacity-20 pointer-events-none"
          />
        </div>

        {/* Right – light gray */}
        <div className="bg-[#efefef] lg:rounded-tr-3xl lg:rounded-br-3xl px-8 md:px-12 py-10">
          <ContactForm />
        </div>
      </section>
    </div>
  )
}
