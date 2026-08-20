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
  titulo: 'Coloque a sua cara nessa',
  chamada:
    'Escolha uma foto sua e leve de volta a sua foto de perfil com a marca da campanha. ' +
    'Sua foto não sai do seu aparelho, o desenho é montado aqui mesmo, no seu navegador.',
  botao: 'Escolher a minha foto',
  trocar: 'Trocar a foto',
  tirar: 'Tirar uma foto agora',
  baixar: 'Salvar a minha moldura',
  arraste: 'ou arraste a foto para cá',
  vazio: 'A sua foto entra aqui',
  montando: 'Montando...',
  revisado: false,
}

/** A foto dele que aparece ao lado, recortada, sem fundo. */
export const molduraFoto = {
  /* RECORTE PRÓPRIO, cortado acima da mão. No arquivo original o recorte
     comeu os dedos da mão esquerda e deixou blocos azuis soltos em volta
     dela — sujeira de recorte, que sobre fundo chapado aparece de longe. O
     corte em y=1430 tira a mão inteira e o problema junto.

     O ORIGINAL CONTINUA NA PASTA, intocado: a outra sessão pode estar
     contando com o recorte inteiro em outro lugar. */
  src: '/fotos/marcao-aponta-corte.webp',
  alt: `${candidato.nomeUrna} apontando para quem olha, convidando a participar`,
  /* MEDIDAS DO ARQUIVO, conferidas nele e não estimadas. As anteriores
     (1002 por 1650) não eram as do original (1007 por 1600), e o Next usa
     esses números para reservar a caixa: a foto vinha esticada uns 4% na
     vertical sem ninguém notar. */
  largura: 1007,
  altura: 1430,
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
