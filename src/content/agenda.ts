/**
 * AGENDA DA CAMPANHA
 *
 * Texto da seção: copy oficial (`dizeres site marcao.pdf`, seção 2).
 *
 * OS DOIS EVENTOS VIRARAM UM. A campanha unificou a inauguração do comitê e o
 * lançamento oficial numa data só — "um só evento, uma festa ainda maior" —, e
 * a arte nova (17/08/2026) traz isso escrito. Some, portanto, o encontro de
 * 18/08 na Av. Rubens Rangel: ele não existe mais, e agenda com evento que não
 * vai acontecer é pior do que agenda vazia. Quem chegar ao site procurando o
 * comitê encontra a data certa.
 *
 * Data, hora e endereço saíram da peça, lidos nela, e não de suposição. O ano
 * não aparece na arte (ela diz só "22/08"); como a campanha é de 2026, é o que
 * está no `quando`.
 *
 * Categorias sugeridas pelo copy para as próximas peças: caminhada em
 * Marataízes, Itapemirim ou Presidente Kennedy; visita à colônia de
 * pescadores do Porto de Itaipava; encontro com produtores rurais (Fazenda
 * Santa Luzia ou cooperativa COPSU); inauguração de comitê ou reduto; roda de
 * conversa com moradores, no formato de escuta e não de comício.
 */

export interface Evento {
  slug: string
  /** a chamada do alto da arte, quando ela existe */
  chamada: string | null
  titulo: string
  /** a linha secundária da arte, quando existe */
  subtitulo: string | null
  foto: string | null
  /** proporção do arquivo, para a imagem não pular enquanto carrega */
  largura: number
  altura: number
  alt: string
  /** ISO com fuso */
  quando: string
  /** a data como aparece na arte */
  rotulo: string
  local: string
  cidade: string
  maps: string
  revisado: boolean
}

export const agenda: Evento[] = [
  {
    slug: 'comite-e-lancamento',
    chamada: 'Um só evento, uma festa ainda maior!',
    titulo: 'Inauguração do Comitê + Lançamento Oficial da Campanha',
    subtitulo: 'Pitstop do Marcão, com adesivaço',
    foto: 'agenda-evento-unico',
    largura: 900,
    altura: 1600,
    alt:
      'Arte da campanha: um só evento, uma festa ainda maior. Inauguração do Comitê mais ' +
      'Lançamento Oficial da Campanha, Pitstop do Marcão com adesivaço, dia 22 de agosto, ' +
      'sábado, a partir das 9h, no Street Rebels Rock Bar, Av. Atlântica, 2000, Xodó, ' +
      'Marataízes',
    quando: '2026-08-22T09:00:00-03:00',
    rotulo: '22/08 · Sábado, a partir das 9h',
    local: 'Street Rebels Rock Bar, Av. Atlântica, 2000, Xodó',
    cidade: 'Marataízes — ES',
    maps: 'https://www.google.com/maps/search/Av.+Atl%C3%A2ntica+2000+Xod%C3%B3+Marata%C3%ADzes+ES',
    revisado: true,
  },
]

/** Texto da seção, do copy oficial. */
export const agendaTexto = {
  kicker: 'Agenda',
  titulo: 'Marcão no meio do povo',
  chamada:
    'Participe dos próximos encontros da nossa campanha e venha conhecer de perto as ' +
    'propostas para o Triângulo do Sul.',
}
