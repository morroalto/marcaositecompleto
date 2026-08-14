/**
 * AS SETE FACETAS
 *
 * De `MIDIAS/FOTOS CARROSSEL`: o mesmo homem fotografado em sete papéis.
 * Biografia mostrada, não afirmada, e cada foto é verificável porque é ele.
 *
 * ⚠️ TEXTO EM RASCUNHO, escrito em 12/08/2026 para o site ficar completo.
 * Tudo com `revisado: false`. As frases foram escritas a partir do que a
 * própria foto mostra e do que o acervo nomeia (as pastas trazem os papéis e
 * os nomes da família). Nenhuma inventa data, cargo, número ou realização.
 */

export interface Faceta {
  slug: string
  papel: string
  fala: string
  revisado: boolean
  foto: string
  alt: string
}

export const facetas: Faceta[] = [
  {
    slug: 'pai', papel: 'Pai', revisado: false,
    fala: 'Três filhas. Elas me ensinaram a ouvir antes de responder, o que dá bastante trabalho.',
    foto: 'faceta-pai',
    alt: 'Marcão com as filhas, todos de camisa do Fluminense, comemorando',
  },
  {
    slug: 'avo', papel: 'Avô', revisado: false,
    fala: 'O Marco Antônio leva meu nome. É por causa dele que eu penso no Sul daqui a vinte anos.',
    foto: 'faceta-avo',
    alt: 'Marcão sentado com o neto no colo, os dois rindo',
  },
  {
    slug: 'marido', papel: 'Marido', revisado: false,
    fala: 'A Adriana está comigo desde antes de qualquer disso. A campanha começou nessa mesa.',
    foto: 'faceta-marido',
    alt: 'Marcão e Adriana lado a lado numa mesa de café',
  },
  {
    slug: 'fazendeiro', papel: 'Homem do campo', revisado: false,
    fala: 'Quem mexe com a terra sabe: não tem atalho, tem trabalho. Aprendi isso cedo.',
    foto: 'faceta-fazendeiro',
    alt: 'Marcão de chapéu e jaqueta, em pé numa área rural',
  },
  {
    slug: 'empreendedor', papel: 'Empreendedor', revisado: false,
    fala: 'Já tirei alvará, já paguei folha, já perdi noite de sono com conta. Sei o que trava quem gera emprego aqui.',
    foto: 'faceta-empreendedor',
    alt: 'Marcão de camisa listrada, sorrindo, num empreendimento à beira-mar',
  },
  {
    slug: 'justica', papel: 'Oficial de justiça', revisado: false,
    fala: 'Bati em muita porta entregando o que ninguém queria receber. Isso ensina a olhar as pessoas de frente.',
    foto: 'faceta-justica',
    alt: 'Marcão de terno, lendo um documento em ambiente de trabalho',
  },
  {
    slug: 'politico', papel: 'Candidato', revisado: false,
    fala: 'Sou a mesma pessoa das seis fotos anteriores. A única diferença é que agora estou pedindo o seu voto.',
    foto: 'faceta-politico',
    alt: 'Retrato de estúdio de Marcão de camisa azul, sorrindo para a câmera',
  },
]

/**
 * BIOGRAFIA
 *
 * ⚠️ RASCUNHO. Escrita a partir do que o acervo comprova: os papéis das fotos,
 * os nomes da família e o registro da campanha. Não afirma data, cargo eletivo
 * anterior, número nem realização, porque nada disso está verificado.
 */
export const biografia = {
  revisado: false,
  blocos: [
    {
      titulo: 'De onde eu venho',
      texto:
        'Eu sou do Sul. Não é jeito de falar: é onde eu nasci, onde eu trabalhei, onde eu ' +
        'criei minhas filhas e onde meu neto vai crescer. O apelido veio antes da política, ' +
        'e é assim que todo mundo me chama por aqui.',
    },
    {
      titulo: 'O que eu fiz até aqui',
      texto:
        'Trabalhei na terra, empreendi e servi como oficial de justiça. Três jeitos diferentes ' +
        'de conhecer a mesma região: pelo que ela produz, pelo que ela custa para quem gera ' +
        'emprego, e pelo que ela sofre quando o problema chega no papel.',
    },
    {
      titulo: 'Por que agora',
      texto:
        'Porque o Sul manda gente, manda imposto e manda produção, e na hora de decidir a ' +
        'gente depende de quem não mora aqui. O Triângulo do Sul nasceu dessa conversa entre ' +
        'Marataízes, Itapemirim e Presidente Kennedy. A candidatura veio depois, como ' +
        'consequência.',
    },
  ],
}

/**
 * Território, com foto real da região. Nada de banco de imagem.
 *
 * O Porto Central saiu da grade: a única imagem disponível dele no acervo é um
 * print de player de vídeo, com tarja preta e barra de controles. Ele continua
 * citado no compromisso de Infraestrutura. Volta para cá quando vier uma foto
 * de verdade, ou um quadro extraído do vídeo do drone.
 *
 * `naGrade` decide quem aparece. Em 14/08/2026 a grade caiu de cinco fotos
 * para três, as três cidades do Triângulo do Sul, porque a página inteira
 * estava pesada de foto e cinco vistas aéreas seguidas viram papel de parede:
 * a quarta e a quinta já não são olhadas. Ferrovia e Samarco continuam aqui,
 * com texto pronto, e voltam trocando o campo para `true` (ou entram numa
 * página de território, se um dia existir).
 */
export const territorio = [
  { slug: 'marataizes', titulo: 'Marataízes', foto: 'terra-marataizes', naGrade: true,
    alt: 'Vista aérea da orla de Marataízes, com praia e quebra-mar',
    texto: 'Capital estadual do abacaxi e a praia que sustenta o verão.' },
  { slug: 'itapemirim', titulo: 'Itapemirim', foto: 'terra-itapemirim', naGrade: true,
    alt: 'Vista aérea da barra e do porto pesqueiro de Itaipava, em Itapemirim',
    texto: 'Itaipava é o maior porto pesqueiro do Espírito Santo.' },
  { slug: 'kennedy', titulo: 'Presidente Kennedy', foto: 'terra-kennedy', naGrade: true,
    alt: 'Vista aérea da praia de Presidente Kennedy num dia de sol',
    texto: 'O maior arrecadador de royalties de petróleo do estado.' },
  { slug: 'ferrovia', titulo: 'A Ferrovia 118', foto: 'terra-ferrovia', naGrade: false,
    alt: 'Trem de carga atravessando um viaduto sobre a mata, vista aérea',
    texto: 'A carga passa por cima da gente. O emprego, nem sempre.' },
  { slug: 'samarco', titulo: 'Samarco, em Anchieta', foto: 'terra-samarco', naGrade: false,
    alt: 'Portaria da unidade da Samarco em Anchieta, vista da estrada',
    texto: 'Indústria que emprega, e que cobra contrapartida da região.' },
]
