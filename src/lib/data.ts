import documents from '../../public/documents.jpg'
import audiovideo from '../../public/audiovideo.jpg'
import earrings from '../../public/earrings.jpg'
import computer from '../../public/computer.png'
import vinci from '../../public/vinci.jpg'
import food from '../../public/food.jpg'
import water from '../../public/water.jpg'
import work from '../../public/work.jpg'

export const links = [
  {
    name: 'Inicio',
    hash: '#home'
  },
  {
    name: 'Sobre',
    hash: '#about'
  },
  {
    name: 'Serviços',
    hash: '#services'
  },
  {
    name: 'Contato',
    hash: '#contact'
  }
] as const

export const servicesData = [
  {
    title: 'Grafotécnica & Documentoscopia',
    description:
      'Análise de assinaturas e documentos, detecção de fraudes e falsificações.',
    image: documents
  },
  {
    title: 'Identificação de Áudio & Imagens',
    description:
      'Transcrição multilingue, reconhecimento de locutor e decodificação de mídias.',
    image: audiovideo
  },
  {
    title: 'Joalheria & Gemologia',
    description:
      'Laudos em pedras preciosas, certificação de gemas sintéticas e perícias ambientais no setor.',
    image: earrings
  },
  {
    title: 'Computação Forense & Perícia Digital',
    description:
      'Investigação de fraudes eletrônicas e suporte técnico em demandas judiciais.',
    image: computer
  },
  {
    title: 'Obras de Arte',
    description: 'Autenticação e valoração de pinturas, esculturas e coleções.',
    image: vinci
  },
  {
    title: 'Merceologia',
    description:
      'Perícia em alimentos e produtos de consumo, análise de qualidade e conformidade ANVISA.',
    image: food
  },
  {
    title: 'Perícia Ambiental',
    description:
      'Avaliação de danos ambientais, identificação de responsáveis e relatórios técnicos.',
    image: water
  },
  {
    title: 'Acidentes de Trânsito',
    description:
      'Reconstrução de sinistros e perícia de dinâmica de acidentes.',
    image: work
  }
] as const
