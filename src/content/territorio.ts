/**
 * TERRITÓRIO
 *
 * Decisão registrada em 12/08/2026, depois de ler o manual de marca:
 *
 *   origem  = 3 cidades (Triângulo do Sul: o movimento que gerou a candidatura)
 *   região  = 9 cidades (o DDD 028, como o manual define na página 3)
 *   mandato = Espírito Santo inteiro (deputado estadual se elege pelo estado)
 *
 * As três camadas são verdadeiras ao mesmo tempo e não se contradizem.
 * Comunicar só as três cidades entrega Cachoeiro, que é o maior colégio
 * eleitoral da região, ao adversário de graça.
 */

export type SlugCidade =
  | 'itapemirim' | 'marataizes' | 'presidente-kennedy'
  | 'cachoeiro' | 'piuma' | 'castelo' | 'muqui' | 'alegre' | 'guacui'

export interface Escuta {
  cidade: SlugCidade
  localidade: string
  data: string
  ouvimos: string
  fonte: string
}

/** um número curto sobre a cidade, com a fonte junto */
export interface Dado {
  rotulo: string
  valor: string
}

export interface Cidade {
  slug: SlugCidade
  nome: string
  triangulo: boolean
  /** só as três do triângulo carregam símbolo econômico no logo */
  simbolo?: 'abacaxi' | 'pesca' | 'petroleo'
  economia?: string
  evidencia?: string
  fonte?: string
  /** três números do IBGE, para a seção do triângulo */
  dados?: Dado[]
  /** norte para sul, dentro do triângulo */
  ordemGeografica?: 1 | 2 | 3
}

/**
 * OS NÚMEROS DAS TRÊS CIDADES
 *
 * Todos puxados da API oficial do IBGE em 14/08/2026, município por município,
 * pelo código do IBGE:
 *
 *   população  Censo 2022, agregado 4709, variável 93
 *   área       agregado 1301, variável 615
 *   PIB        agregado 5938, variável 37, ano de 2021, o mais recente
 *
 * Nada aqui é arredondado "para ficar bonito" nem estimado.
 *
 * ⚠️ Uma armadilha que quase entrou: o código do IBGE de Presidente Kennedy é
 * 3204302. Com o 3204203, que é parecido, a API responde normalmente, mas com
 * o dado de OUTRO município (22.300 habitantes). Conferi os três códigos
 * contra a lista de municípios do ES antes de escrever.
 *
 * O PIB é de 2021 e a população é de 2022, então PIB per capita NÃO entra
 * aqui: dividir um pelo outro seria misturar dois anos e inventar um número
 * que o IBGE não publicou. O contraste que interessa está visível assim
 * mesmo: Presidente Kennedy tem um terço da população de Marataízes e o maior
 * PIB dos três, que é exatamente o efeito dos royalties do petróleo.
 */
export const cidades: Cidade[] = [
  {
    slug: 'itapemirim', nome: 'Itapemirim', triangulo: true, simbolo: 'pesca',
    ordemGeografica: 1, economia: 'Pesca',
    evidencia: 'Abriga o Porto de Itaipava, principal polo de pesca artesanal e industrial do estado.',
    dados: [
      { rotulo: 'habitantes', valor: '39.832' },
      { rotulo: 'de área', valor: '557 km²' },
      { rotulo: 'de PIB', valor: 'R$ 5,7 bi' },
    ],
    fonte: 'IBGE: Censo 2022, área territorial e PIB municipal de 2021, consultados em 14/08/2026',
  },
  {
    slug: 'marataizes', nome: 'Marataízes', triangulo: true, simbolo: 'abacaxi',
    ordemGeografica: 2, economia: 'Abacaxi',
    evidencia: 'Capital estadual do abacaxi, responsável por 58% de toda a produção capixaba.',
    dados: [
      { rotulo: 'habitantes', valor: '41.929' },
      { rotulo: 'de área', valor: '135 km²' },
      { rotulo: 'de PIB', valor: 'R$ 6,7 bi' },
    ],
    fonte: 'IBGE: Censo 2022, área territorial e PIB municipal de 2021, consultados em 14/08/2026',
  },
  {
    slug: 'presidente-kennedy', nome: 'Presidente Kennedy', triangulo: true, simbolo: 'petroleo',
    ordemGeografica: 3, economia: 'Petróleo',
    evidencia: 'Líder estadual em arrecadação de royalties de petróleo e gás natural.',
    dados: [
      { rotulo: 'habitantes', valor: '13.696' },
      { rotulo: 'de área', valor: '587 km²' },
      { rotulo: 'de PIB', valor: 'R$ 6,8 bi' },
    ],
    fonte: 'IBGE: Censo 2022, área territorial e PIB municipal de 2021, consultados em 14/08/2026',
  },
  { slug: 'cachoeiro', nome: 'Cachoeiro de Itapemirim', triangulo: false },
  { slug: 'piuma',     nome: 'Piúma',    triangulo: false },
  { slug: 'castelo',   nome: 'Castelo',  triangulo: false },
  { slug: 'muqui',     nome: 'Muqui',    triangulo: false },
  { slug: 'alegre',    nome: 'Alegre',   triangulo: false },
  { slug: 'guacui',    nome: 'Guaçuí',   triangulo: false },
]

export const triangulo = cidades.filter((c) => c.triangulo)
  .sort((a, b) => (a.ordemGeografica ?? 0) - (b.ordemGeografica ?? 0))

/**
 * Registros de escuta.
 *
 * Vazio é o estado REAL: nenhum registro foi confirmado pela assessoria.
 * Lóbulo sem registro fica vazado, com texto honesto. Nada de placeholder.
 */
export const escutas: Escuta[] = []

/** Exemplo usado só no botão de demonstração do protótipo, nunca em produção. */
export const escutasExemplo: Escuta[] = [
  { cidade: 'itapemirim', localidade: 'EXEMPLO, Itaipava', data: '2026-07-12',
    ouvimos: 'EXEMPLO de demanda registrada em visita.', fonte: 'exemplo' },
  { cidade: 'itapemirim', localidade: 'EXEMPLO, Itaóca', data: '2026-07-29',
    ouvimos: 'EXEMPLO de demanda registrada em visita.', fonte: 'exemplo' },
  { cidade: 'marataizes', localidade: 'EXEMPLO, Centro', data: '2026-08-03',
    ouvimos: 'EXEMPLO de demanda registrada em visita.', fonte: 'exemplo' },
]
