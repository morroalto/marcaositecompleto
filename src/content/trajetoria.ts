/**
 * TRAJETÓRIA
 *
 * Origem do texto: protótipo "Sul em Foco · Marcão Vivacqua"
 * (`src/components/Trajetoria.tsx`, componentes `Trajetoria` e `LinhaDoTempo`).
 * Trazido para cá em 14/08/2026 na fusão dos dois projetos.
 *
 * ⚠️ TEXTO EM RASCUNHO. Tudo com `revisado: false`, e por um motivo concreto:
 * esta é a única parte do site que afirma DATA e CARGO ELETIVO ANTERIOR
 * ("2 mandatos de vereador em Presidente Kennedy", "nasceu em 1966"). O resto
 * do site segue a regra de não afirmar nada sem fonte, então aqui a régua é a
 * mesma: a linha do tempo só sobe em produção depois que a assessoria conferir
 * ano por ano. Enquanto `revisado` for false e `MOSTRAR_PENDENCIAS` estiver
 * ligado, a seção mostra a caixa de pendência.
 *
 * A checagem mínima antes do go-live:
 *   · ano e local de nascimento
 *   · ano da mudança para Cachoeiro de Itapemirim
 *   · ano do casamento com Adriana
 *   · legislaturas exatas dos mandatos de vereador (fonte: TSE / Câmara)
 */

export interface Marco {
  ano: string
  titulo: string
  texto: string
  revisado: boolean
}

export const linhaDoTempo: Marco[] = [
  {
    ano: '1966',
    titulo: 'Rio de Janeiro',
    texto:
      'Marcão nasce no Rio de Janeiro. Mas é no Espírito Santo que a história dele começa ' +
      'de verdade.',
    revisado: false,
  },
  {
    ano: '1972',
    titulo: 'Cachoeiro de Itapemirim',
    texto:
      'Aos 6 anos, muda-se com a família para Cachoeiro. É ali que cresce, estuda e aprende ' +
      'o valor do trabalho.',
    revisado: false,
  },
  {
    ano: '1986',
    titulo: 'Adriana',
    texto:
      'Encontra em Adriana a companheira de uma vida inteira. Juntos, constroem a família ' +
      'que é a base de tudo.',
    revisado: false,
  },
  {
    ano: '1994',
    titulo: 'Comércio, campo e cooperativa',
    texto:
      'Empreende no comércio, no campo e na cooperativa, criando oportunidades e gerando ' +
      'renda para muitas famílias da região.',
    revisado: false,
  },
  {
    ano: '2012',
    titulo: 'Presidente Kennedy, dois mandatos',
    texto:
      'Eleito vereador por dois mandatos, com atuação presente e diálogo constante com a ' +
      'população.',
    revisado: false,
  },
  {
    ano: '2026',
    titulo: 'Marataízes',
    texto:
      'Assume um novo compromisso: ser a voz forte do Triângulo do Sul na Assembleia ' +
      'Legislativa.',
    revisado: false,
  },
]

/** Os quatro selos da trajetória, do protótipo. Sem ícone: viraram texto. */
export const selos: { texto: string; revisado: boolean }[] = [
  { texto: 'Formado em Cachoeiro de Itapemirim', revisado: false },
  { texto: 'Duas vezes vereador em Presidente Kennedy', revisado: false },
  { texto: 'Pai de três filhas, avô do Marco Antônio', revisado: false },
  { texto: 'Raiz em Kennedy, Cachoeiro, Itapemirim e Marataízes', revisado: false },
]

/**
 * A prosa da trajetória, em terceira pessoa, como no protótipo. Convive com a
 * biografia em primeira pessoa de `facetas.ts`: aquela é a voz dele na seção
 * "De onde eu venho", esta é a apresentação de quem ele é.
 */
export const trajetoria = {
  /**
   * O kicker NÃO repete o nome da seção. Ele era "Trajetória", que é o mesmo
   * que o título já diz e o mesmo que está no menu: três vezes a mesma palavra
   * na mesma tela. Agora ele informa o recorte de tempo, que é o que a seção
   * tem de concreto.
   */
  kicker: 'De 1966 a 2026',
  titulo: 'Raiz no Sul do Espírito Santo',
  revisado: false,
  paragrafos: [
    'Criado em Cachoeiro de Itapemirim, Marcão aprendeu cedo o valor do trabalho e da ' +
      'dedicação. Estudou, se formou e trouxe essa bagagem de volta para a sua terra.',
    'Empreendeu no comércio, no campo e na cooperativa, criando oportunidades e gerando ' +
      'renda para muitas famílias. Na política, foi vereador por dois mandatos, com uma ' +
      'atuação presente e de diálogo constante com a população.',
    'Ao lado de sua esposa Adriana, mora hoje em Marataízes e assume um novo compromisso: ' +
      'ser a voz forte do Triângulo do Sul na Assembleia Legislativa.',
  ],
  citacao: 'Quem luta por essa região sabe o nome de quem tá lutando junto.',
}
