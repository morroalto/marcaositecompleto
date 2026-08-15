/**
 * TRAJETÓRIA
 *
 * Texto e formato aprovados em 15/08/2026, a partir da arte de referência da
 * campanha: quatro blocos em grade, cada um com chapéu, título, texto e foto.
 *
 * Substituiu a linha do tempo de seis marcos com ano na margem. A diferença
 * não é só de layout: a linha do tempo contava a vida em datas, e estes quatro
 * blocos contam em CAPÍTULOS — origem, família, preparo e projeto. É mais
 * fácil de ler e é o que a arte pede.
 *
 * ⚠️ TRÊS FOTOS AINDA NÃO CHEGARAM. Elas foram mostradas na conversa mas não
 * vieram como arquivo, então os blocos entram sem imagem, com o quadro
 * reservado. Para publicar, jogue o arquivo em `public/fotos/` com o nome que
 * está em `foto` e o bloco passa a mostrar a imagem sozinho:
 *
 *   traj-heranca   a mão segurando a fotografia antiga
 *   traj-gestao    a caminhada de campanha, com as bandeiras
 *   traj-voz       a cadeira sozinha na orla
 *
 * A da família já está no projeto e é a mesma da seção anterior.
 */

export interface Capitulo {
  slug: string
  /** o chapéu, em caixa alta na tela */
  chapeu: string
  titulo: string
  texto: string
  /** nome do arquivo em `public/fotos/`, sem extensão. `null` = ainda não veio */
  foto: string | null
  ext: 'jpg' | 'webp'
  alt: string
  revisado: boolean
}

export const capitulos: Capitulo[] = [
  {
    slug: 'heranca',
    chapeu: 'Raízes e formação de vida',
    titulo: 'Herança no Espírito Santo',
    texto:
      'Nascido no Rio, foi para Cachoeiro de Itapemirim aos 6 anos de idade, com o coração ' +
      'fincado no Espírito Santo. Ali, aprendeu cedo o valor do trabalho, fez amigos para a ' +
      'vida e criou a base de tudo o que construiu depois.',
    foto: null,
    ext: 'jpg',
    alt: 'Uma mão segurando uma fotografia antiga da família, em preto e branco',
    revisado: true,
  },
  {
    slug: 'familia',
    chapeu: 'Família, a maior das conquistas',
    titulo: 'A Maior das Conquistas',
    texto:
      'Ao lado de Adriana, sua companheira de vida, construiu a maior de suas conquistas: a ' +
      'família. Pai de Thaís, Isabella e Letícia, encontrou no nascimento das filhas a ' +
      'inspiração, e com a chegada do neto Marco Antônio, a renovação de que esta missão é ' +
      'contínua e cheia de amor.',
    foto: 'familia-todos',
    ext: 'jpg',
    alt: 'Marcão sentado com a esposa Adriana e o neto Marco Antônio no colo, com as três filhas em pé atrás',
    revisado: true,
  },
  {
    slug: 'gestao',
    chapeu: 'Preparo e trabalho comunitário',
    titulo: 'Gestão e Paixão por Servir',
    texto:
      'Graduado em Economia, Administração e Direito, uniu o conhecimento técnico à paixão ' +
      'por servir. Em Presidente Kennedy, foi o vereador mais votado e reeleito com recorde ' +
      'de confiança, marcando uma década de dedicação ao povo da região.',
    foto: null,
    ext: 'jpg',
    alt: 'Marcão caminhando na rua ao lado de apoiadores com bandeiras da campanha',
    revisado: true,
  },
  {
    slug: 'voz',
    chapeu: 'A voz do Sul',
    titulo: 'Na Assembleia (2026)',
    texto:
      'Escolheu Marataízes para fincar residência definitiva. Com a maturidade e a força do ' +
      'Sul, decide levar a experiência, a seriedade e o compromisso com o Sul para a ' +
      'Assembleia Legislativa do Espírito Santo.',
    foto: null,
    ext: 'jpg',
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

/** Cabeçalho da seção dos capítulos. */
export const linhaDoTempoTexto = {
  kicker: 'Trajetória',
  titulo: 'Raízes no Sul, compromisso com a nossa gente',
  chamada:
    'De Cachoeiro ao Triângulo do Sul, cada capítulo desta caminhada traz o nome de uma ' +
    'cidade, o rosto de uma pessoa e a marca de uma conquista. Conheça os passos de Marcão.',
}
