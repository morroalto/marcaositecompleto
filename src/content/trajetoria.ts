/**
 * TRAJETÓRIA E LINHA DO TEMPO
 *
 * Texto do protótipo aprovado (`src/components/Trajetoria.tsx`), restaurado em
 * 15/08/2026 palavra por palavra.
 *
 * SÃO SEIS MARCOS, e só esses: 1966, 1972, 1986, 1994, 2012 e 2026. O copy em
 * PDF trazia treze, com as três filhas, as duas formações e as duas eleições
 * separadas; a versão aprovada é esta, mais curta. Os treze estão no histórico
 * do git (commit "Aplica o copy oficial") se um dia a campanha quiser voltar
 * atrás.
 */

export interface Marco {
  /** chave do ícone, resolvida por IconeDe */
  icone: string
  ano: string
  titulo: string
  texto: string
  revisado: boolean
}

export const linhaDoTempo: Marco[] = [
  {
    icone: 'pino',
    ano: '1966',
    titulo: 'Rio de Janeiro, 1966',
    texto:
      'Marcão nasce no Rio de Janeiro. Mas é no Espírito Santo que sua história de verdade ' +
      'começa.',
    revisado: true,
  },
  {
    icone: 'casa',
    ano: '1972',
    titulo: 'Cachoeiro de Itapemirim, 1972',
    texto:
      'Aos 6 anos, muda-se com a família para Cachoeiro. É ali que cresce, estuda e aprende ' +
      'o valor do trabalho.',
    revisado: true,
  },
  {
    icone: 'alianca',
    ano: '1986',
    titulo: 'Adriana, 1986',
    texto:
      'Encontra em Adriana a companheira de uma vida inteira. Juntos, constroem a família ' +
      'que é a base de tudo.',
    revisado: true,
  },
  {
    icone: 'broto',
    ano: '1994',
    titulo: 'Comércio, campo e cooperativa',
    texto:
      'Empreende no comércio, no campo e na cooperativa, criando oportunidades e gerando ' +
      'renda para muitas famílias da região.',
    revisado: true,
  },
  {
    icone: 'instituicao',
    ano: '2012',
    titulo: 'Presidente Kennedy, 2 mandatos',
    texto:
      'Eleito vereador por dois mandatos, com atuação presente e diálogo constante com a ' +
      'população.',
    revisado: true,
  },
  {
    icone: 'urna',
    ano: '2026',
    titulo: 'Marataízes, 2026',
    texto:
      'Assume um novo compromisso: ser a voz forte do Triângulo do Sul na Assembleia ' +
      'Legislativa.',
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

/** A linha do tempo tem título e abertura próprios. */
export const linhaDoTempoTexto = {
  kicker: 'Trajetória',
  titulo: 'Raízes no Sul, compromisso com a nossa gente',
  chamada:
    'De Cachoeiro ao Triângulo do Sul, cada capítulo desta caminhada traz o nome de uma ' +
    'cidade, o rosto de uma pessoa e a marca de uma conquista. Conheça os passos de Marcão.',
}
