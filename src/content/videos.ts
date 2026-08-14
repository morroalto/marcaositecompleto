/**
 * CAMPOS DE VÍDEO
 *
 * Todos opcionais. `src: null` significa que o arquivo ainda não chegou, e
 * nesse caso o bloco simplesmente não renderiza. Nada de player vazio nem de
 * "em breve".
 *
 * Como colocar um vídeo:
 *   1. jogue o arquivo em `public/videos/`
 *   2. jogue um quadro de capa em `public/videos/` também (jpg ou webp)
 *   3. preencha `src` e `capa` aqui. Só isso, não precisa tocar em componente.
 *
 * Peso: vídeo acima de 5 MB não entra em `public/`. Hospede fora e coloque a
 * URL em `src`. O player só baixa o vídeo depois que a pessoa toca no play,
 * então a capa é o que pesa na primeira carga.
 */

export interface Video {
  src: string | null
  capa: string | null
  titulo: string
  descricao: string
  /** proporção do quadro, para reservar o espaço e não gerar CLS */
  proporcao: '16/9' | '9/16' | '1/1'
  legendas?: string | null
}

/** Abaixo do hero. O institucional ou o jingle. */
export const videoApresentacao: Video = {
  src: null,
  capa: null,
  titulo: 'Conheça o Marcão em dois minutos',
  descricao: 'Vídeo de apresentação da campanha.',
  proporcao: '16/9',
  legendas: null,
}

/** Um por bandeira, opcional. A chave é o slug da bandeira. */
export const videoPorBandeira: Record<string, Video | undefined> = {
  infraestrutura: undefined,
  saude: undefined,
  educacao: undefined,
  economia: undefined,
  emprego: undefined,
}

/** Galeria dentro da escuta, amarrada à cidade e à data. */
export interface VideoEscuta extends Video {
  cidade: string
  data: string
}
export const videosEscuta: VideoEscuta[] = []

/** A vinheta de fechamento, antes do rodapé. */
export const videoFechamento: Video = {
  src: null,
  capa: null,
  titulo: 'Agora é Marcão',
  descricao: 'Vinheta de fechamento da campanha.',
  proporcao: '16/9',
  legendas: null,
}
