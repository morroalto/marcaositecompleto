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

export interface Cidade {
  slug: SlugCidade
  nome: string
  triangulo: boolean
  /** só as três do triângulo carregam símbolo econômico no logo */
  simbolo?: 'abacaxi' | 'pesca' | 'petroleo'
  economia?: string
  evidencia?: string
  fonte?: string
  /** norte para sul, dentro do triângulo */
  ordemGeografica?: 1 | 2 | 3
}

export const cidades: Cidade[] = [
  {
    slug: 'itapemirim', nome: 'Itapemirim', triangulo: true, simbolo: 'pesca',
    ordemGeografica: 1, economia: 'Pesca',
    evidencia: 'O Porto de Itaipava é o maior polo pesqueiro do Espírito Santo.',
    fonte: 'pesquisa pública verificada em 12/08/2026',
  },
  {
    slug: 'marataizes', nome: 'Marataízes', triangulo: true, simbolo: 'abacaxi',
    ordemGeografica: 2, economia: 'Abacaxi',
    evidencia: 'Capital estadual do abacaxi, com 58% da produção do Espírito Santo.',
    fonte: 'pesquisa pública verificada em 12/08/2026',
  },
  {
    slug: 'presidente-kennedy', nome: 'Presidente Kennedy', triangulo: true, simbolo: 'petroleo',
    ordemGeografica: 3, economia: 'Petróleo',
    evidencia: 'Maior arrecadador de royalties de petróleo do Espírito Santo.',
    fonte: 'pesquisa pública verificada em 12/08/2026',
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
