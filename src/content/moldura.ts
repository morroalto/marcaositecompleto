import { candidato } from '@/content/candidato'

/**
 * MOLDURA DE APOIO
 *
 * A pessoa escolhe uma foto dela e leva de volta um quadrado 1500 por 1500 com
 * a marca do Marcão embaixo, pronto para virar foto de perfil.
 *
 * ⚠️ REVISAR com a assessoria: `revisado: false`, como todo texto do site.
 */

export const molduraTexto = {
  kicker: 'Vista a campanha',
  titulo: 'Mostre a sua força e venha com a gente nessa caminhada!',
  chamada:
    'Tire uma foto agora ou escolha a sua preferida no celular para colocar o selo ' +
    'oficial da Campanha do Marcão. É super simples, rápido e a imagem sai prontinha ' +
    'para você usar e postar!',
  botao: 'Escolher a minha foto',
  trocar: 'Trocar a foto',
  tirar: 'Tirar uma foto agora',
  baixar: 'Salvar a minha moldura',
  arraste: 'ou arraste a foto para cá',
  vazio: 'A sua foto entra aqui',
  montando: 'Montando...',
  /* Texto da campanha, entregue em 21/08/2026. O anterior era meu, de
     rascunho, e falava da segurança do navegador; este fala com o eleitor. */
  revisado: false,
}

/** A foto dele que aparece ao lado, recortada, sem fundo. */
export const molduraFoto = {
  /* RECORTE PRÓPRIO. O arquivo da campanha vem em 1920 por 1080 com ele
     pequeno no meio e o resto transparente; aqui ele está cortado na
     silhueta, com 12 px de folga. Sem esse corte, nove décimos do peso e da
     caixa reservada seriam vazio, e ele apareceria minúsculo na coluna.

     Os originais continuam na pasta, intocados. */
  src: '/fotos/marcao-forca.webp',
  alt: `${candidato.nomeUrna} de camisa branca, sorrindo, com o polegar para cima`,
  /* medidas do arquivo recortado, conferidas nele */
  largura: 424,
  altura: 733,
}

/**
 * O ARQUIVO QUE SAI
 *
 * 1500 por 1500, a pedido. É a medida que serve nos três lugares em que a peça
 * vai parar: foto de perfil do WhatsApp, do Instagram e do Facebook. Os três
 * cortam em círculo a partir do quadrado, então o que importa é que nada
 * essencial encoste na borda.
 *
 * PNG, e não JPEG: a marca tem tipografia branca de contorno duro sobre
 * gradiente, e é exatamente aí que o JPEG suja, com aquela franja cinza em
 * volta das letras.
 */
export const arquivo = {
  lado: 1500,
  tipo: 'image/png' as const,
  nome: `moldura-${candidato.numero.replace('.', '')}.png`,
}

/**
 * LIMITES DE ENTRADA
 *
 * `pesoMax` corta antes de decodificar. `ladoMax` corta DEPOIS de saber as
 * dimensões, e é a proteção que importa: um PNG de 200 kB pode se abrir em
 * 30.000 por 30.000 pixels e pedir 3,6 GB de memória — o navegador engasga ou
 * derruba a aba. 12.000 passa folgado numa foto de celular moderno (a maior
 * hoje anda perto de 8.000) e barra bomba de descompressão.
 */
export const limites = {
  pesoMax: 20 * 1024 * 1024,
  ladoMax: 12_000,
  ladoMin: 200,
  aceita: ['image/jpeg', 'image/png', 'image/webp'] as const,
}

export const erros = {
  tipo: 'Esse arquivo não é uma foto. Envie um JPG, um PNG ou um WebP.',
  peso: 'A foto passa de 20 MB. Escolha uma menor, ou tire um print dela.',
  grande: 'A foto tem pixels demais para o navegador abrir com segurança.',
  pequena: 'A foto é pequena demais e sairia borrada. Escolha uma maior.',
  quebrado: 'Não consegui abrir essa foto. Tente outra.',
}

/**
 * A ARTE DO FILTRO
 *
 * `public/marca/filtro-avatar.png`, do acervo da campanha, 800 por 800 com
 * transparência real. Ela é assentada inteira por cima da foto.
 *
 * ⚠️ Ela vem em 800 e a peça sai em 1500, ou seja, é ampliada 1,9 vez. Vale
 * pedir ao designer uma versão em 1500 para o selo sair com o contorno nítido.
 */
export const filtro = {
  /**
   * QUANTO A ARTE DESCE, em fração do lado da peça.
   *
   * Pedido: o selo mais para baixo. O teto NÃO é gosto, é geometria — a peça é
   * foto de PERFIL, e todo aplicativo corta o quadrado num círculo.
   *
   * Medido na arte: o selo vai de 20,0% a 79,9% na horizontal e sua base está
   * em 86,0%. Nessa largura, o círculo do avatar termina em 90,0%. Ou seja,
   * existem 4,0% de folga, e passar disso corta as pontas do selo na foto de
   * perfil de quem usar.
   *
   * 3% desce 45 px numa peça de 1500 e guarda 1% de margem. Se a peça um dia
   * for para post quadrado, e não para avatar, esse teto deixa de valer.
   */
  desce: 0.03,
}
