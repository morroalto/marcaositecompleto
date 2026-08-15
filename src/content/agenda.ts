/**
 * AGENDA DA CAMPANHA
 *
 * Texto da seção: copy oficial (`dizeres site marcao.pdf`, seção 2).
 *
 * Os dois eventos são REAIS e os dados vieram das artes oficiais da campanha,
 * lidas uma a uma: data, dia da semana, hora e endereço estão nas peças, e é
 * de lá que saíram, não de suposição minha. As mesmas artes são a imagem de
 * cada card, então o que a pessoa lê no site é o que ela vê no story.
 *
 * O ano não aparece nas peças (elas dizem só "18/08" e "22/08"). Como a
 * campanha é de 2026 e as artes estão circulando agora, o `quando` foi
 * montado com 2026. Se algum evento for de outro ano, é este campo que muda.
 *
 * Categorias sugeridas pelo copy para as próximas peças: caminhada em
 * Marataízes, Itapemirim ou Presidente Kennedy; visita à colônia de
 * pescadores do Porto de Itaipava; encontro com produtores rurais (Fazenda
 * Santa Luzia ou cooperativa COPSU); inauguração de comitê ou reduto; roda de
 * conversa com moradores, no formato de escuta e não de comício.
 */

export interface Evento {
  slug: string
  titulo: string
  /** a linha secundária da arte, quando existe */
  subtitulo: string | null
  foto: string | null
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
    slug: 'inauguracao-comite',
    titulo: 'Inauguração do Comitê',
    subtitulo: 'com adesivaço',
    foto: 'evento-comite',
    alt: 'Arte da campanha: Inauguração do Comitê com adesivaço, dia 18 de agosto, terça-feira, a partir das 16h, na Av. Rubens Rangel, em frente ao Fórum de Marataízes',
    quando: '2026-08-18T16:00:00-03:00',
    rotulo: '18/08 · Terça-feira, a partir das 16h',
    local: 'Av. Rubens Rangel, em frente ao Fórum',
    cidade: 'Marataízes',
    maps: 'https://www.google.com/maps/search/F%C3%B3rum+de+Marata%C3%ADzes+Av.+Rubens+Rangel',
    revisado: true,
  },
  {
    slug: 'lancamento-campanha',
    titulo: 'Lançamento Oficial da Campanha',
    subtitulo: 'Pitstop do Marcão, com adesivaço',
    foto: 'evento-lancamento',
    alt: 'Arte da campanha: Lançamento Oficial da Campanha, Pitstop do Marcão com adesivaço, dia 22 de agosto, sábado, a partir das 9h, no Street Rebels Rock Bar, Av. Atlântica, 2000, Xodó, Marataízes',
    quando: '2026-08-22T09:00:00-03:00',
    rotulo: '22/08 · Sábado, a partir das 9h',
    local: 'Street Rebels Rock Bar, Av. Atlântica, 2000, Xodó',
    cidade: 'Marataízes',
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
