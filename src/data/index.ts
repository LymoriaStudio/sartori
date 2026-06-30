const base = 'https://www.figma.com/api/mcp/asset'

export const assets = {
  logo:         `${base}/45406944-27c4-4ca6-8a00-fcce3391eafd`,
  heroBg:       `${base}/5637efd9-f72b-45e0-8cce-051acfdc5cd8`,
  sobreNos:     `${base}/bc3a6da1-6219-4a0d-b75b-04518ec8905f`,
  arrowRed:     `${base}/11b27709-b532-4f5d-aa90-fdf92b59696f`,
  arrowDark:    `${base}/15b19680-37da-45f3-9950-a4cca9d3a819`,
  arrowWhite:   `${base}/21346e3e-38b8-4153-bfd5-767cea2edfe9`,
  arrowFooter:  `${base}/1af99705-fef5-4ba9-ab53-f492e08a1bf9`,
  arrowNav:     `${base}/691f481b-d659-4c53-bcfc-1c59ef55f0ea`,
  asteriscoDark:`${base}/ddcdca3d-25f2-4408-9475-9ff27f4889aa`,
  asteriscoRed: `${base}/fb255258-fcdc-4654-9a6e-32c66deee215`,
  asteriscoBlue:`${base}/aa2aa6bc-5f9a-42e3-b3a3-f9f820049043`,
  iconDes:      `${base}/f0268284-fba7-4734-bc06-922a5e2c6957`,
  iconSaude:    `${base}/176d9c95-d8c1-428f-8045-95b79140d3d7`,
  iconEnergia:  `${base}/40524d14-26e3-4737-86a1-5e802118a0c4`,
  decoLeft:     `${base}/beffe7ed-da9b-4d8e-8ef9-4bc7f4457bcd`,
  decoRight:    `${base}/171de3a3-24ba-4eb7-82be-7aa13d5cfb8a`,
  footerWave:   `${base}/6282ba70-3bfc-41af-90fe-2359c2d643e9`,
  phone:        `${base}/fa2ddc47-38be-409e-9bbe-be83f8d3f136`,
  email:        `${base}/fb13928f-47b5-43a7-8389-dcb46dc26666`,
  whatsapp:     `${base}/9cee31dd-6ea4-41dd-9876-464899dd91b3`,
  pin:          `${base}/79d002c1-8ac0-4db0-b53e-6ac854b4ac5e`,
  instagram:    `${base}/bf323bd1-acff-46e0-96ae-bb8e3cff64bd`,
  facebook:     `${base}/1bc1be8a-41f8-45aa-9e4e-a3b51707f482`,
  youtube:      `${base}/be492238-0bdd-4a57-a8e5-54df8ef69413`,
  linkedin:     `${base}/c3f51a7a-1609-4e0e-89b2-5793c98d2b6e`,
  copyright:    `${base}/7d5ee073-8d03-4b8c-b790-604ca7b296cf`,
}

export interface Category {
  id: string
  title: string
  desc: string
  img: string
  fullDesc: string
}

export interface Product {
  id: string
  name: string
  desc: string
  img: string
  fullDesc: string
  category: string
}

export const categories: Category[] = [
  {
    id: 'aquaticos',
    title: 'Para Aquáticos',
    desc: 'Mais saúde.',
    img: `${base}/a96e4b6c-66fb-4952-8e2d-81e01035a9f0`,
    fullDesc: 'Linha completa de nutrição para peixes e animais aquáticos. Formulações balanceadas que garantem saúde, crescimento e vitalidade em ambientes aquáticos de qualquer porte.',
  },
  {
    id: 'caes',
    title: 'Para Cães',
    desc: 'Saúde e energia diária.',
    img: `${base}/4f4f3efd-f1eb-4932-95f0-b32cb01caf42`,
    fullDesc: 'Alimentação premium desenvolvida para cães de todas as raças e fases da vida. Ingredientes selecionados que promovem energia, pelagem saudável e bem-estar geral.',
  },
  {
    id: 'gatos',
    title: 'Para Gatos',
    desc: 'Equilíbrio e bem-estar felino.',
    img: `${base}/afb26919-890f-42af-a8f5-b8fb2c28e166`,
    fullDesc: 'Nutrição especializada para gatos que combina sabor e benefícios nutricionais. Fórmulas que apoiam a saúde urinária, imunidade e o equilíbrio natural dos felinos.',
  },
  {
    id: 'todos',
    title: 'Todos os produtos',
    desc: 'Explore nossos produtos.',
    img: `${base}/dbaa37df-9e4e-49d5-b336-f949fb87d246`,
    fullDesc: 'Explore o portfólio completo Sartori. Soluções nutricionais desenvolvidas com ciência e cuidado para cada espécie animal, do campo à cidade.',
  },
]

export const products: Product[] = [
  {
    id: 'felinas-premium',
    name: 'Felinas Premium',
    desc: 'Ração premium para gatos adultos',
    img: `${base}/a96e4b6c-66fb-4952-8e2d-81e01035a9f0`,
    fullDesc: 'Fórmula premium desenvolvida para gatos adultos com ingredientes selecionados que garantem nutrição completa, palatabilidade superior e saúde em todas as fases da vida.',
    category: 'gatos',
  },
  {
    id: 'caninos-vita',
    name: 'Caninos Vita',
    desc: 'Nutrição completa para cães',
    img: `${base}/4f4f3efd-f1eb-4932-95f0-b32cb01caf42`,
    fullDesc: 'Alimento completo para cães de médio e grande porte. Rico em proteínas de alta qualidade, vitaminas e minerais essenciais para uma vida longa e saudável.',
    category: 'caes',
  },
  {
    id: 'aqua-plus',
    name: 'Aqua Plus',
    desc: 'Suplemento para peixes ornamentais',
    img: `${base}/afb26919-890f-42af-a8f5-b8fb2c28e166`,
    fullDesc: 'Suplemento nutricional desenvolvido especialmente para peixes ornamentais. Melhora a coloração, vitalidade e sistema imunológico em aquários e lagos ornamentais.',
    category: 'aquaticos',
  },
  {
    id: 'agro-forte',
    name: 'Agro Forte',
    desc: 'Suplemento para animais de produção',
    img: `${base}/8e9b7da4-6bab-4161-a536-e17e6721c436`,
    fullDesc: 'Solução nutricional de alta performance para animais de produção. Aumenta o ganho de peso, melhora a conversão alimentar e potencializa os resultados na pecuária.',
    category: 'todos',
  },
]
