/**
 * TRAJETÓRIA E LINHA DO TEMPO
 *
 * Fonte: copy oficial da campanha (`dizeres site marcao.pdf`, seções 3 e 4),
 * recebido em 15/08/2026. É o texto aprovado, e substitui tanto o que veio do
 * protótipo "Sul em Foco" quanto os rascunhos que eu tinha escrito.
 *
 * Por isso os marcos entram com `revisado: true`: eles não são mais dedução
 * minha a partir de foto, são o texto que a campanha mandou usar.
 *
 * ⚠️ UMA PENDÊNCIA VEIO DENTRO DO PRÓPRIO COPY. Entre "Marco Antônio, 2016" e
 * a candidatura, o documento traz, destacado em verde, a pergunta:
 * "O que marcão fez nesses últimos 10 anos?". É um bilhete do redator, não
 * conteúdo, então não vai para a tela — mas o buraco é real: a linha do tempo
 * pula de 2016 para 2026 sem nada no meio, e é justamente a década mais
 * recente, a que o eleitor lembra. Vale preencher antes do go-live.
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
      'Marcão nasce no Rio de Janeiro. Mas é no Espírito Santo que sua história de verdade ' +
      'começa.',
    revisado: true,
  },
  {
    ano: '1972',
    titulo: 'Cachoeiro de Itapemirim',
    texto:
      'Aos 6 anos, muda-se com a família para Cachoeiro. É ali que cresce, faz os primeiros ' +
      'amigos e aprende cedo o valor do trabalho.',
    revisado: true,
  },
  {
    ano: '1986',
    titulo: 'Adriana',
    texto:
      'Encontra em Adriana a companheira de uma vida inteira. Juntos, construíram família, ' +
      'trabalho e uma história que segue até hoje.',
    revisado: true,
  },
  {
    ano: '1987',
    titulo: 'Thaís',
    texto:
      'Nasce a primeira filha do casal, e com ela chega também um novo tipo de ' +
      'responsabilidade.',
    revisado: true,
  },
  {
    ano: '1989',
    titulo: 'Economia e Administração',
    texto:
      'Forma-se em Economia e Administração, formação que mais tarde seria a base de sua ' +
      'vida empreendedora na região.',
    revisado: true,
  },
  {
    ano: '1990',
    titulo: 'Isabella',
    texto: 'Nasce a segunda filha, e a família de Marcão e Adriana continua crescendo.',
    revisado: true,
  },
  {
    ano: '1991',
    titulo: 'Marataízes',
    texto:
      'Estabelece residência definitiva em Marataízes, cidade que escolheu pra viver até hoje.',
    revisado: true,
  },
  {
    ano: '1992',
    titulo: 'Letícia',
    texto:
      'Nasce a terceira filha, completando o time de mulheres que Marcão sempre diz que o ' +
      'formaram.',
    revisado: true,
  },
  {
    ano: '1992',
    titulo: 'Vereador em Presidente Kennedy',
    texto:
      'Eleito o vereador mais votado de Presidente Kennedy. É o começo de uma trajetória de ' +
      'quase uma década dedicada ao serviço público na cidade.',
    revisado: true,
  },
  {
    ano: '2003',
    titulo: 'Direito',
    texto:
      'Volta a estudar e se forma também em Direito, reforçando o compromisso de defender ' +
      'melhor quem mais precisa.',
    revisado: true,
  },
  {
    // o copy não traz o ano da reeleição
    ano: '—',
    titulo: 'Reeleição, vereador em Presidente Kennedy',
    texto: 'Reeleito o mais votado, confirma o vínculo de confiança construído com a cidade.',
    revisado: true,
  },
  {
    ano: '2016',
    titulo: 'Marco Antônio',
    texto:
      'Chega o neto Marco Antônio, e com ele um amor diferente de tudo que Marcão já tinha ' +
      'sentido, o orgulho de ver a família se multiplicar.',
    revisado: true,
  },
  {
    ano: '2026',
    titulo: 'Candidatura, AGIR 36.028',
    texto:
      'Decide dar um passo maior: levar a voz de Marataízes, Itapemirim e Presidente Kennedy ' +
      'pra Assembleia Legislativa do Espírito Santo.',
    revisado: true,
  },
]

/** Os quatro selos, do copy oficial. */
export const selos: { texto: string; revisado: boolean }[] = [
  { texto: 'Formado em Cachoeiro de Itapemirim', revisado: true },
  { texto: '2× Vereador em Presidente Kennedy', revisado: true },
  { texto: 'Pai de 3 filhas, avô do Marco Antônio', revisado: true },
  { texto: 'Raiz em Presidente Kennedy, Cachoeiro, Itapemirim e Marataízes', revisado: true },
]

/** Seção 3 do copy: a prosa da trajetória. */
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

/** Seção 4 do copy: a linha do tempo tem título e abertura próprios. */
export const linhaDoTempoTexto = {
  kicker: 'Trajetória',
  titulo: 'Raízes no Sul, compromisso com a nossa gente',
  chamada:
    'De Cachoeiro ao Triângulo do Sul, cada capítulo desta caminhada traz o nome de uma ' +
    'cidade, o rosto de uma pessoa e a marca de uma conquista. Conheça os passos de Marcão.',
}
