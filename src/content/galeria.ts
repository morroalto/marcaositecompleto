/**
 * PERTO DE QUEM PRECISA
 *
 * Seção vinda do protótipo "Sul em Foco" (`Defendemos.tsx`, componente
 * `Galeria`). Lá as três fotos eram de banco de imagem, com legenda escrita
 * antes da foto existir ("Marcão ouvindo pescadores no cais ao amanhecer").
 *
 * Aqui são três fotos REAIS do acervo da campanha, e cada `alt` descreve o que
 * de fato está na imagem, não o que seria bonito estar. Foto de campanha que
 * promete uma cena e mostra outra é a primeira coisa que o adversário recorta
 * e publica lado a lado.
 */

export interface Momento {
  slug: string
  foto: string
  alt: string
  legenda: string
}

export const momentos: Momento[] = [
  {
    slug: 'entrevista',
    foto: 'escuta-visita',
    alt: 'Marcão dando entrevista a um repórter com microfone, em frente a um hangar',
    legenda: 'Dando entrevista, de camiseta e jeans, sem palanque no meio.',
  },
  {
    slug: 'interior',
    foto: 'faceta-fazendeiro',
    alt: 'Marcão de chapéu e jaqueta, à noite, num evento de campo com o campo de futebol ao fundo',
    legenda: 'No interior, à noite, onde o evento acaba tarde e ele fica até o fim.',
  },
  {
    slug: 'palavra',
    foto: 'faceta-justica',
    alt: 'Marcão de terno, com microfone e um papel na mão, falando em um evento',
    legenda: 'Com a palavra e o papel na mão: fala o que veio preparado para falar.',
  },
]

export const galeriaTexto = {
  kicker: 'Presença',
  titulo: 'Perto de quem precisa',
  chamada:
    'O Marcão não fala do Triângulo do Sul como quem observa de fora: ele é fruto desta ' +
    'terra. Criado e presente no dia a dia, traz a essência, a luta e o orgulho da nossa ' +
    'gente. Estes são alguns desses momentos.',
}
