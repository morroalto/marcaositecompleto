/**
 * PERTO DE QUEM PRECISA
 *
 * Três ESPAÇOS DE VÍDEO, e nada além disso. A seção veio do protótipo
 * "Sul em Foco" como galeria de fotos com legenda; em 14/08/2026 as fotos e as
 * legendas saíram, porque o lugar é dos vídeos.
 *
 * Enquanto o arquivo não chega, o quadro fica em branco, com a moldura e a
 * proporção já reservadas. Nada de foto de enfeite ocupando o lugar: quem
 * abrir o site entende que ali vai entrar vídeo.
 *
 * ⚠️ PARA PUBLICAR CADA VÍDEO, dois passos:
 *   1. jogue o arquivo em `public/videos/` (acima de 5 MB, hospede fora e use
 *      a URL inteira em `src`)
 *   2. preencha `src` e, se tiver, `capa` (um quadro do vídeo, que aparece
 *      antes do play)
 * Só isso, sem tocar em componente. O `titulo` é o que o leitor de tela
 * anuncia no botão de play.
 */

export interface Momento {
  slug: string
  /** título do vídeo, usado no rótulo do botão de play */
  titulo: string
  /** o arquivo do vídeo. `null` = ainda não chegou */
  src: string | null
  /** quadro de abertura, opcional. Caminho a partir de `public/` */
  capa: string | null
}

export const momentos: Momento[] = [
  { slug: 'video-1', titulo: 'Vídeo da campanha, primeiro quadro', src: null, capa: null },
  { slug: 'video-2', titulo: 'Vídeo da campanha, segundo quadro', src: null, capa: null },
  { slug: 'video-3', titulo: 'Vídeo da campanha, terceiro quadro', src: null, capa: null },
]

/**
 * PROPORÇÃO DOS QUADROS, para os três de uma vez.
 *
 * Está em VERTICAL (9 por 16), que é o formato de vídeo de campanha gravado no
 * celular e publicado em reels e stories. Se os vídeos vierem deitados, troque
 * para '16/9'; se vierem quadrados, '1/1'. É uma linha, e os três quadros
 * mudam juntos.
 *
 * Isto importa mais do que parece: quadro na proporção errada obriga o player
 * a deixar tarja preta em cima e embaixo, ou nas laterais, e o vídeo aparece
 * menor do que o espaço que ocupa na tela.
 */
export const proporcaoDosVideos: '9/16' | '16/9' | '1/1' = '9/16'

export const galeriaTexto = {
  /** o kicker informa o formato, em vez de repetir o nome da seção */
  kicker: 'Em vídeo',
  titulo: 'Perto de quem precisa',
  chamada:
    'Tem coisa que não cabe em texto. Aqui é ele falando, sem locutor no meio e sem ' +
    'palanque: o que viu na rua, o que ouviu de quem mora aqui e o que se comprometeu a fazer.',
}
