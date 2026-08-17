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
  /** 'youtube' = `src` é o id do vídeo · 'arquivo' = `src` é o caminho */
  tipo: 'youtube' | 'arquivo'
  /** id do YouTube, ou o arquivo. `null` = ainda não chegou */
  src: string | null
  /** quadro de abertura. Baixado do YouTube e servido do nosso domínio,
      porque a CSP não deixa carregar imagem de fora. */
  capa: string | null
  /** legenda curta, do próprio título publicado no canal */
  legenda?: string
}

export const momentos: Momento[] = [
  {
    slug: 'marco', tipo: 'youtube', src: 'dTKezkBZHv8',
    capa: '/videos/dTKezkBZHv8.webp',
    titulo: 'O que define um verdadeiro Marco',
    legenda: 'Dividir o antes e o depois: é isso que define um verdadeiro Marco.',
  },
  {
    slug: 'voz', tipo: 'youtube', src: 'uRHsv36X3Uw',
    capa: '/videos/uRHsv36X3Uw.webp',
    titulo: 'Uma voz na Assembleia',
    legenda: 'Há 20 anos, o Sul do Espírito Santo espera por uma voz na Assembleia Legislativa.',
  },
  {
    slug: 'raizes', tipo: 'youtube', src: 'i6kPYbc0rMc',
    capa: '/videos/i6kPYbc0rMc.webp',
    titulo: 'As raízes do lugar',
    legenda: 'Conhecer o passado é olhar com carinho para as raízes de um lugar que carrega tantas histórias.',
  },
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
export const proporcaoDosVideos: '9/16' | '16/9' | '1/1' = '16/9'

/** Texto da seção 6 do copy oficial, palavra por palavra. */
export const galeriaTexto = {
  /** o kicker informa o formato, em vez de repetir o nome da seção */
  kicker: 'Em vídeo',
  titulo: 'Perto de quem precisa',
  chamada:
    'Marcão não fala sobre o Triângulo do Sul como quem observa de fora, ele é fruto desta ' +
    'terra. Criado e presente no dia a dia, traz a essência, as lutas e o orgulho da nossa ' +
    'gente. Confira alguns desses momentos.',
}
