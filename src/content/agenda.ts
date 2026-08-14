/**
 * AGENDA
 *
 * Estrutura vinda do protótipo "Sul em Foco" (`src/components/Agenda.tsx`).
 *
 * ⚠️ A lista abaixo está VAZIA de propósito, e isso é o estado correto.
 * Os três eventos do protótipo (caminhada em Marataízes, visita aos pescadores
 * em Itaipava, encontro com produtores em Castelo) eram texto de maquete, com
 * data e local inventados para a tela ficar cheia. Publicar isso convoca o
 * eleitor para um evento que não existe, que é o pior erro possível num site
 * de campanha.
 *
 * Os itens ficam guardados em `agendaRascunho` e só entram na lista de cima
 * depois que a assessoria confirmar data, hora e endereço. Enquanto `agenda`
 * estiver vazia a seção inteira não renderiza, sem "em breve" e sem card vazio.
 */

export interface Evento {
  slug: string
  /** ISO com fuso, para ordenar e para o `<time dateTime>` */
  quando: string
  /** como a data aparece na tela */
  rotulo: string
  titulo: string
  local: string
  cidade: string
  maps: string
  /** false enquanto a assessoria não confirmar */
  revisado: boolean
}

export const agenda: Evento[] = []

/** Maquete do protótipo. Nunca renderiza: serve de molde para o preenchimento. */
export const agendaRascunho: Evento[] = [
  {
    slug: 'caminhada-marataizes',
    quando: '2026-08-25T18:00:00-03:00',
    rotulo: '25 de agosto, 18h',
    titulo: 'Caminhada em Marataízes',
    local: 'Praia Central',
    cidade: 'Marataízes',
    maps: 'https://www.google.com/maps/search/Praia+Central+Marata%C3%ADzes+ES',
    revisado: false,
  },
  {
    slug: 'pescadores-itaipava',
    quando: '2026-08-28T10:00:00-03:00',
    rotulo: '28 de agosto, 10h',
    titulo: 'Visita aos pescadores',
    local: 'Porto de Itaipava',
    cidade: 'Itapemirim',
    maps: 'https://www.google.com/maps/search/Porto+de+Itaipava+Itapemirim+ES',
    revisado: false,
  },
  {
    slug: 'produtores-castelo',
    quando: '2026-09-01T16:00:00-03:00',
    rotulo: '1º de setembro, 16h',
    titulo: 'Encontro com produtores',
    local: 'Zona rural',
    cidade: 'Castelo',
    maps: 'https://www.google.com/maps/search/Castelo+ES',
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
