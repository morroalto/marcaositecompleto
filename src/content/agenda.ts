/**
 * AGENDA DA CAMPANHA
 *
 * Estrutura vinda do protótipo "Sul em Foco" (`src/components/Agenda.tsx`).
 *
 * Os três eventos daquele protótipo eram maquete: data, hora e endereço
 * inventados para a tela ficar cheia. Ficaram em `agendaRascunho`, e nunca
 * renderizam.
 *
 * Os dois de cima são reais e foram pedidos em 14/08/2026: a inauguração do
 * comitê e o lançamento oficial da campanha. Eles entram com foto e título, e
 * com os campos de data e endereço EM BRANCO, porque ninguém me passou esses
 * dados e evento com hora inventada é o pior erro possível num site de
 * campanha. O card mostra o que existe e, enquanto `quando` for `null`, avisa
 * que a data está sendo confirmada.
 *
 * ⚠️ PARA A ASSESSORIA, dois campos e o card fica completo:
 *   · `quando`  data e hora em ISO com fuso, ex.: '2026-08-30T18:00:00-03:00'
 *   · `rotulo`  a mesma data como se lê na tela, ex.: '30 de agosto, 18h'
 *   · `local` e `cidade`, e o `maps` se houver endereço fixo
 * Depois é só marcar `revisado: true`.
 *
 * ⚠️ CONFERIR TAMBÉM qual foto é de qual evento. Associei pelo que a imagem
 * mostra: a de fora, com as plaquinhas do #agoraéMARCÃO, ficou no lançamento;
 * a da noite, com o pessoal de camiseta do Triângulo do Sul, ficou no comitê.
 * Se estiver trocado, é só trocar o campo `foto`.
 */

export interface Evento {
  slug: string
  titulo: string
  /** o que a foto mostra, em uma frase */
  resumo: string
  foto: string | null
  alt: string
  /** ISO com fuso. `null` = data ainda não confirmada pela assessoria */
  quando: string | null
  /** a data como aparece na tela */
  rotulo: string | null
  local: string | null
  cidade: string | null
  maps: string | null
  revisado: boolean
}

export const agenda: Evento[] = [
  {
    slug: 'inauguracao-comite',
    titulo: 'Inauguração do Comitê',
    resumo:
      'A casa da campanha, aberta para quem quiser chegar, pegar material e ' +
      'saber onde o Marcão vai estar.',
    foto: 'evento-comite',
    alt: 'Grupo grande de apoiadores reunido em um encontro à noite, muitos de camiseta do Triângulo do Sul',
    quando: null,
    rotulo: null,
    local: null,
    cidade: null,
    maps: null,
    revisado: false,
  },
  {
    slug: 'lancamento-campanha',
    titulo: 'Lançamento Oficial da Campanha',
    resumo:
      'O encontro que abre a caminhada, com apoiadores das cidades do ' +
      'Triângulo do Sul.',
    foto: 'evento-lancamento',
    alt: 'Apoiadores reunidos ao ar livre segurando plaquinhas com a hashtag agora é Marcão',
    quando: null,
    rotulo: null,
    local: null,
    cidade: null,
    maps: null,
    revisado: false,
  },
]

/** Maquete do protótipo. Nunca renderiza: serve de molde para o preenchimento. */
export const agendaRascunho: Evento[] = [
  {
    slug: 'caminhada-marataizes',
    titulo: 'Caminhada em Marataízes',
    resumo: 'EXEMPLO de evento, com data e endereço de maquete.',
    foto: null,
    alt: '',
    quando: '2026-08-25T18:00:00-03:00',
    rotulo: '25 de agosto, 18h',
    local: 'Praia Central',
    cidade: 'Marataízes',
    maps: 'https://www.google.com/maps/search/Praia+Central+Marata%C3%ADzes+ES',
    revisado: false,
  },
]

/** Texto da seção, do protótipo. */
export const agendaTexto = {
  kicker: 'Agenda',
  titulo: 'Marcão no meio do povo',
  chamada:
    'Participe dos próximos encontros da campanha e conheça de perto as propostas para o ' +
    'Triângulo do Sul.',
}
