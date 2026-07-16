// ── Assets Figma (ícones/decoração) ──────────────────────────────────────────
const base = 'https://www.figma.com/api/mcp/asset'

export const assets = {
  logo:          `${base}/45406944-27c4-4ca6-8a00-fcce3391eafd`,
  sobreNos:      `${base}/bc3a6da1-6219-4a0d-b75b-04518ec8905f`,
  arrowRed:      `${base}/11b27709-b532-4f5d-aa90-fdf92b59696f`,
  arrowDark:     `${base}/15b19680-37da-45f3-9950-a4cca9d3a819`,
  arrowWhite:    `${base}/21346e3e-38b8-4153-bfd5-767cea2edfe9`,
  arrowFooter:   `${base}/1af99705-fef5-4ba9-ab53-f492e08a1bf9`,
  asteriscoDark: `${base}/ddcdca3d-25f2-4408-9475-9ff27f4889aa`,
  asteriscoRed:  `${base}/fb255258-fcdc-4654-9a6e-32c66deee215`,
  asteriscoBlue: `${base}/aa2aa6bc-5f9a-42e3-b3a3-f9f820049043`,
  iconDes:       `${base}/f0268284-fba7-4734-bc06-922a5e2c6957`,
  iconSaude:     `${base}/176d9c95-d8c1-428f-8045-95b79140d3d7`,
  iconEnergia:   `${base}/40524d14-26e3-4737-86a1-5e802118a0c4`,
  decoLeft:      `${base}/beffe7ed-da9b-4d8e-8ef9-4bc7f4457bcd`,
  decoRight:     `${base}/171de3a3-24ba-4eb7-82be-7aa13d5cfb8a`,
  footerWave:    `${base}/6282ba70-3bfc-41af-90fe-2359c2d643e9`,
  phone:         `${base}/fa2ddc47-38be-409e-9bbe-be83f8d3f136`,
  email:         `${base}/fb13928f-47b5-43a7-8389-dcb46dc26666`,
  whatsapp:      `${base}/9cee31dd-6ea4-41dd-9876-464899dd91b3`,
  pin:           `${base}/79d002c1-8ac0-4db0-b53e-6ac854b4ac5e`,
  instagram:     `${base}/bf323bd1-acff-46e0-96ae-bb8e3cff64bd`,
  facebook:      `${base}/1bc1be8a-41f8-45aa-9e4e-a3b51707f482`,
  youtube:       `${base}/be492238-0bdd-4a57-a8e5-54df8ef69413`,
  linkedin:      `${base}/c3f51a7a-1609-4e0e-89b2-5793c98d2b6e`,
  copyright:     `${base}/7d5ee073-8d03-4b8c-b790-604ca7b296cf`,
}

// ── Imagens de card das categorias ───────────────────────────────────────────
import CardAquaticos from '../assets/categorias/aquaticos.jpg'
import CardCaes      from '../assets/categorias/caes.png'
import CardGatos     from '../assets/categorias/felinos.png'
import CardTodos     from '../assets/categorias/todos.png'

// ── Banners de categoria (web / tablet / mobile) ──────────────────────────────
import AquaWeb    from '../assets/produtos/banners/aquaticos/BannerGeral_aqt_web-ver.png'
import AquaTablet from '../assets/produtos/banners/aquaticos/Bannergeral_aqt_tablet-ver.png'
import AquaMobile from '../assets/produtos/banners/aquaticos/BannerGeral_aqt_mobile-ver.png'

// cachorros só tem versão mobile — reutilizada nos breakpoints maiores
import CaesWeb    from '../assets/produtos/banners/cachorros/BannerCaninos-mobile-ver.jpg'
import CaesTablet from '../assets/produtos/banners/cachorros/BannerCaninos-mobile-ver.jpg'
import CaesMobile from '../assets/produtos/banners/cachorros/BannerCaninos-mobile-ver.jpg'

import GatosWeb    from '../assets/produtos/banners/gatos/BannerGatos_web-ver.png'
import GatosTablet from '../assets/produtos/banners/gatos/BannerGato-tablet-ver.png'
import GatosMobile from '../assets/produtos/banners/gatos/BannerGato-mobile-ver.png'

import GeralWeb    from '../assets/produtos/banners/geral/BannerProduto_Geral_web-ver.png'
import GeralTablet from '../assets/produtos/banners/geral/BannerProduto_Geral_tablet-ver.png'
import GeralMobile from '../assets/produtos/banners/geral/BannerProduto_Geral_mobile-ver.png'

// ── Imagens de card de produto ────────────────────────────────────────────────
import ProdFelinasImg from '../assets/produtos/Produtos/felinos/felinos_img_product.png'
import ProdCaninosImg from '../assets/produtos/Produtos/caninos/caninos_img_product.png'
import ProdCaesImg    from '../assets/produtos/Produtos/caninos/caes_img_product.png'
import ProdGadoImg    from '../assets/produtos/Produtos/gado/Gado_img_products.png'

// ── Interfaces ────────────────────────────────────────────────────────────────
export interface Category {
  id: string
  title: string
  desc: string
  /** Imagem usada no card da home */
  img: string
  /** Imagem usada no card da home (thumb da pasta categorias) */
  cardImg: string
  /** Banners responsivos para o hero da página de categoria */
  bannerWeb: string
  bannerTablet: string
  bannerMobile: string
  fullDesc: string
}

export interface Product {
  id: string
  name: string
  desc: string
  /** Imagem do produto (card + detalhe) */
  img: string
  /** Banners responsivos para o hero da página de produto */
  bannerWeb: string
  bannerTablet: string
  bannerMobile: string
  fullDesc: string
  category: string
}

// ── Categorias ────────────────────────────────────────────────────────────────
export const categories: Category[] = [
  {
    id: 'aquaticos',
    title: 'Para Aquáticos',
    desc: 'Mais saúde.',
    img: AquaWeb,
    cardImg: CardAquaticos,
    bannerWeb: AquaWeb,
    bannerTablet: AquaTablet,
    bannerMobile: AquaMobile,
    fullDesc: 'Linha completa de nutrição para peixes e animais aquáticos. Formulações balanceadas que garantem saúde, crescimento e vitalidade em ambientes aquáticos de qualquer porte.',
  },
  {
    id: 'caes',
    title: 'Para Cães',
    desc: 'Saúde e energia diária.',
    img: CaesWeb,
    cardImg: CardCaes,
    bannerWeb: CaesWeb,
    bannerTablet: CaesTablet,
    bannerMobile: CaesMobile,
    fullDesc: 'Alimentação premium desenvolvida para cães de todas as raças e fases da vida. Ingredientes selecionados que promovem energia, pelagem saudável e bem-estar geral.',
  },
  {
    id: 'gatos',
    title: 'Para Gatos',
    desc: 'Equilíbrio e bem-estar felino.',
    img: GatosWeb,
    cardImg: CardGatos,
    bannerWeb: GatosWeb,
    bannerTablet: GatosTablet,
    bannerMobile: GatosMobile,
    fullDesc: 'Nutrição especializada para gatos que combina sabor e benefícios nutricionais. Fórmulas que apoiam a saúde urinária, imunidade e o equilíbrio natural dos felinos.',
  },
  {
    id: 'todos',
    title: 'Todos os produtos',
    desc: 'Explore nossos produtos.',
    img: GeralWeb,
    cardImg: CardTodos,
    bannerWeb: GeralWeb,
    bannerTablet: GeralTablet,
    bannerMobile: GeralMobile,
    fullDesc: 'Explore o portfólio completo Sartori. Soluções nutricionais desenvolvidas com ciência e cuidado para cada espécie animal, do campo à cidade.',
  },
]

// ── Produtos ──────────────────────────────────────────────────────────────────
export const products: Product[] = [
  {
    id: 'felinas-premium',
    name: 'Felinas Premium',
    desc: 'Ração premium para gatos adultos',
    img: ProdFelinasImg,
    bannerWeb: GatosWeb,
    bannerTablet: GatosTablet,
    bannerMobile: GatosMobile,
    fullDesc: 'Fórmula premium desenvolvida para gatos adultos com ingredientes selecionados que garantem nutrição completa, palatabilidade superior e saúde em todas as fases da vida.',
    category: 'gatos',
  },
  {
    id: 'caninos-vita',
    name: 'Caninos Vita',
    desc: 'Nutrição completa para cães',
    img: ProdCaninosImg,
    bannerWeb: CaesWeb,
    bannerTablet: CaesTablet,
    bannerMobile: CaesMobile,
    fullDesc: 'Alimento completo para cães de médio e grande porte. Rico em proteínas de alta qualidade, vitaminas e minerais essenciais para uma vida longa e saudável.',
    category: 'caes',
  },
  {
    id: 'agro-forte',
    name: 'Agro Forte',
    desc: 'Suplemento para animais de produção',
    img: ProdGadoImg,
    bannerWeb: GeralWeb,
    bannerTablet: GeralTablet,
    bannerMobile: GeralMobile,
    fullDesc: 'Solução nutricional de alta performance para animais de produção. Aumenta o ganho de peso, melhora a conversão alimentar e potencializa os resultados na pecuária.',
    category: 'todos',
  },
  {
    id: 'dog-plus',
    name: 'Dog Plus',
    desc: 'Suplemento para cães',
    img: ProdCaesImg,
    bannerWeb: CaesWeb,
    bannerTablet: CaesTablet,
    bannerMobile: CaesMobile,
    fullDesc: 'Suplemento nutricional desenvolvido especialmente para cães.',
    category: 'caes',
  },
]
