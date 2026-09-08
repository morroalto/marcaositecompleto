/**
 * O QUE DEFENDEMOS
 *
 * Fonte: novas frentes de campanha, pedidas por Marcão e repassadas por
 * Matheus em 08/09/2026. Substituem os seis eixos do `dizeres site marcao.pdf`
 * (15/08/2026), que traziam um parágrafo solto por eixo.
 *
 * MUDANÇA DE ESTRUTURA. O eixo antigo era `titulo` + `texto`. A frente nova é
 * `titulo` + `foco` (a linha que resume a frente) + `itens` (os programas
 * nomeados dentro dela, de três a quatro por frente). São vinte itens no
 * total: por isso o card cresceu e a grade caiu de três para duas colunas.
 *
 * O arquivo, o componente e a âncora `#bandeiras` mantêm o nome antigo de
 * propósito. O link `/#bandeiras` já circula em peça e em post, e renomear
 * âncora quebra link que já está na rua. No texto visível a palavra é sempre
 * "frente", que é como a campanha fala.
 *
 * O QUE EU MEXI no texto do Marcão, e por quê:
 *   - "Visão Ocenânica": o parêntese saiu (o foco da frente já diz isso) e o
 *     erro de digitação foi junto.
 *   - "licitações 100% compreensíveis": saiu o "100%". A regra de origem
 *     deste arquivo é que nenhum texto promete número, e promessa de número
 *     em propaganda eleitoral é risco desnecessário. O sentido ficou.
 *   - "&" nos títulos virou "e", para bater com o resto da copy do site.
 *   - Os parênteses dos títulos ("O Sul Integrado e Forte", "Do Campo à
 *     Xícara") foram absorvidos pelo `foco` ou pelo texto do item.
 * Nada além disso: nenhum item foi cortado, criado ou reordenado.
 */

/** um programa nomeado dentro da frente */
export interface ItemFrente {
  titulo: string
  texto: string
}

export interface Bandeira {
  slug: string
  /** chave do ícone, resolvida por `IconeDe` */
  icone: string
  titulo: string
  /** a linha que resume a frente, logo abaixo do título */
  foco: string
  itens: ItemFrente[]
  revisado: boolean
  cor: 'laranja' | 'verde' | 'marinho' | 'amarelo' | 'petroleo'
}

/**
 * FRASE-FORÇA DA CAMPANHA
 *
 * Abre a seção das frentes. Não subiu para o hero, e o slogan
 * `Um novo Marco para o Sul` (src/content/candidato.ts) segue de pé.
 *
 * > [!note] Conflito registrado, confirmar com Marcão
 * > A frase alarga o recorte da campanha de regional para estadual, enquanto
 * > o slogan, o hero e o rodapé continuam ancorados no Sul. Aqui, na abertura
 * > das frentes, os dois convivem: o compromisso é com o Sul e o projeto é
 * > para o Estado. Se ele quiser a virada no site inteiro, é outra rodada e
 * > mexe em copy já aprovada.
 */
export const fraseForca = {
  principal: 'Meu compromisso é com o Sul, mas meu projeto é para o Espírito Santo.',
  apoio:
    'O Espírito Santo não é pequeno. Pequena é a nossa capacidade de imaginar ' +
    'o seu futuro.',
  revisado: true,
}

export const bandeiras: Bandeira[] = [
  {
    slug: 'desenvolvimento-regional', icone: 'estrada', cor: 'petroleo', revisado: true,
    titulo: 'Desenvolvimento Regional e Tripolarização',
    foco:
      'O Sul integrado e forte: transformar o Triângulo do Sul, o Caparaó e a região ' +
      'serrana em motores de riqueza para o Estado inteiro.',
    itens: [
      {
        titulo: 'Triângulo do Sul',
        texto:
          'Marataízes, Itapemirim, Presidente Kennedy e região num polo integrado de ' +
          'logística, indústria, turismo e produção.',
      },
      {
        titulo: 'Via Sul',
        texto:
          'Novas ligações rodoviárias integrando o Porto Central à BR-101 e aos grandes ' +
          'corredores logísticos do Estado e do país.',
      },
      {
        titulo: 'Porto Central',
        texto:
          'Atrair indústrias e empresas para o entorno, transformando a estrutura ' +
          'portuária em emprego real para a população.',
      },
      {
        titulo: 'Caparaó',
        texto:
          'Uma grande rota turística e econômica integrada, unindo cafés especiais, ' +
          'gastronomia, turismo rural e preservação.',
      },
    ],
  },
  {
    slug: 'agricultura', icone: 'broto', cor: 'verde', revisado: true,
    titulo: 'Agricultura, Agroindústria e Economia Rural',
    foco:
      'Do pequeno produtor à exportação, valorizando quem produz no campo capixaba.',
    itens: [
      {
        titulo: 'Campo Forte',
        texto:
          'Assistência técnica, crédito e incentivo para a agricultura familiar e ' +
          'empresarial, pecuária, seringueira, cacau e fruticultura.',
      },
      {
        titulo: 'Café Capixaba',
        texto:
          'Valorização do Conilon e do Arábica com tecnologia, irrigação, certificação ' +
          'e fortalecimento das marcas capixabas.',
      },
      {
        titulo: 'Mármore e Granito',
        texto:
          'Beneficiamento, design e industrialização das rochas ornamentais, para ' +
          'exportarmos produto acabado de alto valor.',
      },
    ],
  },
  {
    slug: 'mar-e-pesca', icone: 'peixe', cor: 'marinho', revisado: true,
    titulo: 'Economia do Mar, Pesca e Recursos Hídricos',
    foco:
      'Olhar para o litoral e as águas do Espírito Santo como fonte estratégica de ' +
      'trabalho e sustento.',
    itens: [
      {
        titulo: 'Pescador valorizado',
        texto:
          'Respeito à pesca profissional, com infraestrutura de desembarque, segurança, ' +
          'comercialização justa e regras ambientais equilibradas.',
      },
      {
        titulo: 'Economia do mar',
        texto:
          'Visão estratégica para portos, pesca, aquicultura, indústria naval, energia ' +
          'offshore e turismo marítimo em toda a costa capixaba.',
      },
      {
        titulo: 'Água e saneamento',
        texto:
          'Combate ao desperdício, melhoria da qualidade do abastecimento, revisão de ' +
          'tarifas e universalização do saneamento básico.',
      },
    ],
  },
  {
    slug: 'industria-e-energia', icone: 'raio', cor: 'amarelo', revisado: true,
    titulo: 'Indústria, Energia e Inovação 4.0',
    foco:
      'Inovação, transição energética e defesa do bolso do contribuinte e do produtor.',
    itens: [
      {
        titulo: 'Energia justa',
        texto:
          'Combate aos abusos nas contas de luz, com negociação garantida antes do ' +
          'protesto de pequenas dívidas em cartório.',
      },
      {
        titulo: 'Energia para produzir',
        texto:
          'Preparar o Estado para uma economia competitiva, com energia solar, ' +
          'armazenamento e novas matrizes limpas.',
      },
      {
        titulo: 'Indústria Capixaba 4.0',
        texto:
          'Atrair investimento para transformar matéria-prima capixaba em produto ' +
          'acabado de alto valor agregado.',
      },
      {
        titulo: 'Espírito Santo 2040',
        texto:
          'Agenda de Estado permanente para infraestrutura, educação, indústria, ' +
          'tecnologia e desenvolvimento regional.',
      },
    ],
  },
  {
    slug: 'saude-e-seguranca', icone: 'saude', cor: 'laranja', revisado: true,
    titulo: 'Saúde, Segurança e Serviços Públicos',
    foco:
      'Qualidade de vida, descentralização e proteção para as famílias capixabas.',
    itens: [
      {
        titulo: 'Saúde regionalizada',
        texto:
          'Fortalecer hospitais e serviços de saúde no Sul e no interior, reduzindo a ' +
          'necessidade de viajar até a Grande Vitória.',
      },
      {
        titulo: 'Segurança pública',
        texto:
          'Combate à criminalidade com inteligência, tecnologia, integração e ' +
          'valorização das forças policiais estaduais.',
      },
      {
        titulo: 'Transparência 4.0',
        texto:
          'Inteligência artificial aplicada para tornar gastos públicos e licitações ' +
          'compreensíveis e auditáveis por qualquer cidadão.',
      },
    ],
  },
  {
    slug: 'turismo-e-educacao', icone: 'capelo', cor: 'verde', revisado: true,
    titulo: 'Turismo, Educação e Oportunidades',
    foco: 'Preparar as pessoas e valorizar as vocações do Espírito Santo.',
    itens: [
      {
        titulo: 'Turismo capixaba',
        texto:
          'Um Estado, muitos destinos: litoral, montanhas, Caparaó, gastronomia, ' +
          'patrimônio histórico e turismo de negócios.',
      },
      {
        titulo: 'Educação para o futuro',
        texto:
          'Robótica, inteligência artificial, formação técnica e capacitação alinhada ' +
          'à demanda real do mercado de trabalho capixaba.',
      },
      {
        titulo: 'Logística capixaba',
        texto:
          'Rodovias, ferrovias, portos e aeroportos articulados para operar como uma ' +
          'plataforma logística única e eficiente.',
      },
    ],
  },
]

/**
 * OS TRÊS SENTIDOS DE "MARCO". Conceito da campanha, do manual de marca.
 *
 * Não renderiza: o conceito virou a arquitetura da página, e explicar conceito
 * ao eleitor é coisa de apresentação de agência. Fica aqui porque alimenta
 * peça derivada e texto de campanha.
 */
export interface Marco {
  etiqueta: string
  cor: 'verde' | 'laranja' | 'amarelo'
  titulo: string
  texto: string
}

export const marcos: Marco[] = [
  {
    etiqueta: 'O nome', cor: 'verde',
    titulo: 'Marco Antônio Vieira de Novaes',
    texto:
      'O homem por trás do apelido: raiz, família, trajetória. No Sul ninguém chama ' +
      'pelo nome de documento, chama de Marcão, e sabe de quem está falando.',
  },
  {
    etiqueta: 'O divisor', cor: 'laranja',
    titulo: 'Marco histórico. Ponto de virada.',
    texto:
      'O Sul manda gente, manda imposto, manda produção. Falta mandar quem defenda ' +
      'isso na Assembleia, e é essa a virada.',
  },
  {
    etiqueta: 'A referência', cor: 'amarelo',
    titulo: 'Marco de fronteira. A pedra que define território.',
    texto:
      'O Sul do Espírito Santo finalmente demarcado no mapa. Não como periferia da ' +
      'capital: como região com nome, número e voz próprios.',
  },
]
