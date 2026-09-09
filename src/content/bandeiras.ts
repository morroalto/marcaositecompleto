/**
 * OS 10 COMPROMISSOS COM O ESPÍRITO SANTO
 *
 * Fonte: arte oficial da campanha ("10 COMPROMISSOS COM O ESPÍRITO SANTO",
 * com o lockup `MARCÃO VIVACQUA 36.028` e a assinatura "Um ES mais forte para
 * todos"), recebida de Matheus em 09/09/2026. Substituem as seis frentes que
 * entraram no dia anterior.
 *
 * VOLTOU A SER TÍTULO + TEXTO. As frentes de 08/09 tinham `foco` mais `itens`,
 * três ou quatro programas nomeados por card, vinte no total. A arte dos
 * compromissos é mais enxuta: dez cards, um título e uma linha cada. Então os
 * campos `foco` e `itens` saíram, e o card voltou à forma antiga.
 *
 * As seis frentes não se perderam: estão no commit 5a24a93, e o texto integral
 * que o Marcão mandou continua no histórico. Se um dia elas voltarem como
 * página de plano de governo, é de lá que se puxa.
 *
 * O arquivo, o componente e a âncora `#bandeiras` mantêm o nome antigo de
 * propósito. O link `/#bandeiras` já circula em peça e em post, e renomear
 * âncora quebra link que já está na rua.
 *
 * TEXTO FIEL À ARTE. Copiei os dez títulos e as dez linhas como estão, sem
 * reescrever. A única mexida é ortográfica: a arte traz "ÓPORTUNIDADES" no
 * compromisso 05, com acento a mais, e aqui está "oportunidades".
 */

export interface Bandeira {
  slug: string
  /** chave do ícone, resolvida por `IconeDe` */
  icone: string
  titulo: string
  texto: string
  revisado: boolean
  cor: 'laranja' | 'verde' | 'marinho' | 'amarelo' | 'petroleo'
}

/**
 * FRASE-FORÇA DA CAMPANHA
 *
 * Abre a seção. Veio com as frentes em 08/09/2026 e continua valendo: agora
 * casa melhor ainda, porque a seção inteira passou a se chamar compromissos.
 *
 * O slogan `Um novo Marco para o Sul` (src/content/candidato.ts) segue de pé.
 *
 * > [!note] Conflito registrado, confirmar com Marcão
 * > A arte dos dez compromissos é declaradamente estadual, e assina "Um ES
 * > mais forte para todos". O site continua ancorado no Sul no slogan, no
 * > hero e no rodapé. Aqui os dois convivem: o compromisso é com o Sul e o
 * > projeto é para o Estado. Se ele quiser a virada no site inteiro, é outra
 * > rodada e mexe em copy já aprovada.
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
    slug: 'saude', icone: 'saude', cor: 'laranja', revisado: true,
    titulo: 'Saúde mais perto de casa',
    texto:
      'Mais estrutura nos hospitais regionais, menos filas e menos deslocamentos.',
  },
  {
    slug: 'estradas', icone: 'estrada', cor: 'petroleo', revisado: true,
    titulo: 'Estradas para o desenvolvimento',
    texto:
      'Recuperar rodovias e melhorar os acessos que ligam cidades, produção e portos.',
  },
  {
    slug: 'produtor-rural', icone: 'broto', cor: 'verde', revisado: true,
    titulo: 'Apoio ao produtor rural',
    texto:
      'Mais crédito, assistência técnica e tecnologia para quem faz o campo crescer.',
  },
  {
    slug: 'emprego', icone: 'maleta', cor: 'marinho', revisado: true,
    titulo: 'Emprego em todas as regiões',
    texto:
      'Atrair investimentos de acordo com as vocações econômicas de cada região.',
  },
  {
    slug: 'qualificacao', icone: 'capelo', cor: 'amarelo', revisado: true,
    titulo: 'Qualificação que gera oportunidades',
    texto:
      'Cursos profissionalizantes conectados às necessidades das empresas.',
  },
  {
    slug: 'empreender', icone: 'loja', cor: 'laranja', revisado: true,
    titulo: 'Menos burocracia para empreender',
    texto:
      'Mais crédito, capacitação e programas de apoio para pequenos negócios.',
  },
  {
    slug: 'pesca', icone: 'peixe', cor: 'verde', revisado: true,
    titulo: 'Pesca e economia do mar mais fortes',
    texto:
      'Melhor infraestrutura, crédito e comercialização para os pescadores e toda a ' +
      'cadeia do pescado.',
  },
  {
    slug: 'energia', icone: 'raio', cor: 'petroleo', revisado: true,
    titulo: 'Energia que atrai indústrias',
    texto:
      'Usar o potencial capixaba para trazer novos investimentos e gerar empregos ' +
      'no Estado.',
  },
  {
    slug: 'turismo', icone: 'pino', cor: 'amarelo', revisado: true,
    titulo: 'Turismo que gera mais renda',
    texto:
      'Integrar litoral, montanhas, Caparaó, gastronomia e agroturismo para atrair ' +
      'mais visitantes e oportunidades.',
  },
  {
    slug: 'fiscalizacao', icone: 'lupa', cor: 'marinho', revisado: true,
    titulo: 'Fiscalização e resultados',
    texto:
      'Acompanhar de perto obras, serviços e recursos públicos para garantir entrega ' +
      'e qualidade para a população.',
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
