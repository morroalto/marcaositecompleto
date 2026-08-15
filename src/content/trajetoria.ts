/**
 * TRAJETÓRIA
 *
 * Texto e formato aprovados em 15/08/2026, a partir da arte de referência da
 * campanha: quatro blocos em grade, cada um com título, texto e foto.
 *
 * O CHAPÉU COM O PERÍODO ("1966 — Raízes e formação de vida" e os outros três)
 * saiu em 15/08/2026, a pedido. Ele existia na arte impressa, mas na tela
 * empurrava o título para baixo e repetia em etiqueta o que o texto já conta.
 *
 * Substituiu a linha do tempo de seis marcos com ano na margem. A diferença
 * não é só de layout: a linha do tempo contava a vida em datas, e estes quatro
 * blocos contam em CAPÍTULOS — origem, família, preparo e projeto. É mais
 * fácil de ler e é o que a arte pede.
 *
 * AS QUATRO FOTOS, na ligação que a campanha definiu:
 *
 *   herança   `traj-heranca`   a mão segurando a fotografia antiga
 *   família   `familia-todos`  a mesma foto que já estava no projeto
 *   gestão    `traj-gestao`    a caminhada de campanha, com as bandeiras
 *   a voz     `traj-voz`       a cadeira sozinha na orla
 *
 * AS QUATRO ENTRAM NO MESMO QUADRO 4/3, como na arte: são quatro retratos
 * colados na mesma página de álbum, e retrato de álbum tem tamanho de álbum.
 * Com proporções diferentes, viravam quatro peças soltas.
 *
 * O preço é o recorte das duas verticais. `posicao` diz onde o quadro se ancora
 * dentro do arquivo, sempre nos rostos: na da família ele pega das cabeças ao
 * colo, e na da fotografia antiga, da mão ao fim do retrato.
 */

export interface Capitulo {
  slug: string
  titulo: string
  texto: string
  /** nome do arquivo em `public/fotos/`, sem extensão. `null` = ainda não veio */
  foto: string | null
  ext: 'jpg' | 'webp'
  /** dimensões reais do arquivo */
  largura: number
  altura: number
  /**
   * Proporção do quadro na tela — 4/3 nas quatro, para os retratos casarem — e
   * onde a imagem se ancora dentro dele.
   *
   * As verticais perdem topo e rodapé nesse corte. `posicao` escolhe o que
   * fica: o que vale em cada uma das duas são os rostos.
   */
  proporcao: string
  posicao: string
  alt: string
  revisado: boolean
}

export const capitulos: Capitulo[] = [
  {
    slug: 'heranca',
    titulo: 'Herança no Espírito Santo',
    texto:
      'Nascido no Rio, foi para Cachoeiro de Itapemirim aos 6 anos de idade, com o coração ' +
      'fincado no Espírito Santo. Ali, aprendeu cedo o valor do trabalho, fez amigos para a ' +
      'vida e criou a base de tudo o que construiu depois.',
    foto: 'traj-heranca',
    ext: 'jpg',
    largura: 768, altura: 1365,
    proporcao: '4/3', posicao: '50% 24%',
    alt: 'Uma mão segurando uma fotografia antiga da família, em preto e branco',
    revisado: true,
  },
  {
    slug: 'familia',
    titulo: 'A Maior das Conquistas',
    texto:
      'Ao lado de Adriana, sua companheira de vida, construiu a maior de suas conquistas: a ' +
      'família. Pai de Thaís, Isabella e Letícia, encontrou no nascimento das filhas a ' +
      'inspiração, e com a chegada do neto Marco Antônio, a renovação de que esta missão é ' +
      'contínua e cheia de amor.',
    foto: 'familia-todos',
    ext: 'jpg',
    largura: 1066, altura: 1600,
    proporcao: '4/3', posicao: '50% 10%',
    alt: 'Marcão sentado com a esposa Adriana e o neto Marco Antônio no colo, com as três filhas em pé atrás',
    revisado: true,
  },
  {
    slug: 'gestao',
    titulo: 'Gestão e Paixão por Servir',
    texto:
      'Graduado em Economia, Administração e Direito, uniu o conhecimento técnico à paixão ' +
      'por servir. Em Presidente Kennedy, foi o vereador mais votado e reeleito com recorde ' +
      'de confiança, marcando uma década de dedicação ao povo da região.',
    foto: 'traj-gestao',
    ext: 'jpg',
    largura: 1537, altura: 1023,
    proporcao: '4/3', posicao: '50% 45%',
    alt: 'Marcão caminhando na rua ao lado de apoiadores com bandeiras da campanha',
    revisado: true,
  },
  {
    slug: 'voz',
    titulo: 'A Voz do Sul na Assembleia (2026)',
    texto:
      'Escolheu Marataízes para fincar residência definitiva. Há 20 anos o Sul do Estado não ' +
      'ocupa uma cadeira com representação própria na Assembleia Legislativa. Chegou a hora de ' +
      'mudar essa história, levando a experiência, a seriedade e a força da nossa região para ' +
      'onde as decisões são tomadas.',
    foto: 'traj-voz',
    ext: 'jpg',
    largura: 1599, altura: 899,
    proporcao: '4/3', posicao: '50% 50%',
    alt: 'Uma cadeira sozinha na orla, de frente para a praia de Marataízes',
    revisado: true,
  },
]

/** Os quatro selos, com ícone no lugar do emoji do protótipo. */
export const selos: { icone: string; texto: string; revisado: boolean }[] = [
  { icone: 'capelo', texto: 'Formado em Cachoeiro de Itapemirim', revisado: true },
  { icone: 'instituicao', texto: '2× Vereador em Presidente Kennedy', revisado: true },
  { icone: 'familia', texto: 'Pai de 3 filhas, avô do Marco Antônio', revisado: true },
  { icone: 'pino', texto: 'Raiz em Kennedy, Cachoeiro, Itapemirim e Marataízes', revisado: true },
]

/** A prosa da trajetória. */
export const trajetoria = {
  kicker: 'Trajetória',
  titulo: 'Raiz no Sul do Espírito Santo',
  revisado: true,
  paragrafos: [
    'Criado em Cachoeiro de Itapemirim, Marcão aprendeu cedo o valor do trabalho e da ' +
      'dedicação. Estudou, se formou e trouxe essa bagagem de volta para a sua terra.',
    'Empreendeu no comércio, no campo e na cooperativa, criando oportunidades e gerando ' +
      'renda para muitas famílias. Na política, foi vereador por dois mandatos com uma ' +
      'atuação presente e de diálogo constante com a população.',
    'Ao lado de sua esposa Adriana, mora hoje em Marataízes e assume um novo compromisso: ' +
      'ser a voz forte do Triângulo do Sul na Assembleia Legislativa.',
  ],
  citacao: 'Quem luta por essa região sabe o nome de quem tá lutando junto.',
}

/**
 * Cabeçalho da seção dos capítulos.
 *
 * Sem `kicker`: o chapéu "TRAJETÓRIA" saiu em 15/08/2026 porque a seção
 * anterior já abre com ele, e a mesma etiqueta duas vezes seguidas não
 * localizava o leitor — só adiava o título.
 */
export const linhaDoTempoTexto = {
  titulo: 'Raízes no Sul, compromisso com a nossa gente',
  chamada:
    'De Cachoeiro ao Triângulo do Sul, cada capítulo desta caminhada traz o nome de uma ' +
    'cidade, o rosto de uma pessoa e a marca de uma conquista. Conheça os passos de Marcão.',
}
