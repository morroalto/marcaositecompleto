/**
 * BANDEIRAS
 *
 * ⚠️ TEXTO EM RASCUNHO, escrito em 12/08/2026 para o site ficar completo.
 * Cada item carrega `revisado: false`. Trocar por `true` só depois que o
 * Marcão ou a assessoria ler e aprovar. A lista do que precisa de aval está
 * em `docs/textos-em-rascunho.md`.
 *
 * Regra que eu segui ao escrever, e que vale manter na revisão:
 * compromisso é de AÇÃO, nunca de número. "Cobrar a recuperação da ES-060" é
 * defensável porque a estrada existe e a demanda é pública. "Duplicar 40 km
 * em dois anos" seria promessa inventada, e vira munição do adversário.
 */

export interface Bandeira {
  slug: string
  titulo: string
  /** o problema concreto, com nome de lugar sempre que possível */
  contexto: string
  compromisso: string
  /** false enquanto a assessoria não aprovar o texto */
  revisado: boolean
  cor: 'laranja' | 'verde' | 'marinho' | 'amarelo' | 'petroleo'
}

export const bandeiras: Bandeira[] = [
  {
    slug: 'infraestrutura', titulo: 'Infraestrutura', cor: 'laranja', revisado: false,
    contexto:
      'Estrada, saneamento, porto e a ligação entre as nove cidades do 028. ' +
      'O que trava o Sul não é falta de riqueza, é falta de caminho para ela circular.',
    compromisso:
      'Cobrar do governo do estado a recuperação das rodovias que ligam Marataízes, ' +
      'Itapemirim e Presidente Kennedy, e defender que a chegada do Porto Central venha ' +
      'acompanhada de acesso, saneamento e moradia para quem já mora aqui.',
  },
  {
    slug: 'saude', titulo: 'Saúde', cor: 'verde', revisado: false,
    contexto:
      'Fila de exame, leito e o transporte de paciente que sai da nossa região ' +
      'para resolver o que devia resolver aqui.',
    compromisso:
      'Lutar por exame e consulta especializada dentro do Sul, para ninguém precisar ' +
      'atravessar o estado de madrugada. E cobrar transparência na fila: quem está ' +
      'esperando tem direito de saber a posição dele.',
  },
  {
    slug: 'educacao', titulo: 'Educação', cor: 'marinho', revisado: false,
    contexto:
      'Escola técnica perto de casa e formação ligada ao que a região faz de verdade: ' +
      'pesca, agro, petróleo e turismo.',
    compromisso:
      'Defender curso técnico e profissionalizante nas nossas cidades, ligado à economia ' +
      'que já existe aqui, para o jovem se formar no que a região contrata em vez de se ' +
      'formar no que só tem vaga em Vitória.',
  },
  {
    slug: 'economia', titulo: 'Desenvolvimento econômico', cor: 'amarelo', revisado: false,
    contexto:
      'Royalty que fica, indústria que chega e turismo que não pode durar só janeiro.',
    compromisso:
      'Fiscalizar para que o royalty do petróleo vire obra e serviço na cidade que produz, ' +
      'e trabalhar por um calendário de turismo que sustente o comércio o ano inteiro, ' +
      'não só na alta temporada.',
  },
  {
    slug: 'emprego', titulo: 'Emprego e oportunidade', cor: 'petroleo', revisado: false,
    contexto:
      'Para que o filho de quem mora aqui não precise escolher entre ficar sem trabalho ' +
      'ou ir embora.',
    compromisso:
      'Exigir contrapartida de emprego local em todo empreendimento que se instalar na ' +
      'região, e apoiar quem já emprega aqui: o pescador, o produtor de abacaxi, o pequeno ' +
      'comércio e quem vive do turismo.',
  },
]

/**
 * Os três sentidos de "marco". Conceito da campanha, manual página 2.
 *
 * Não existe mais uma seção "O conceito" que explique isso em bloco: o conceito
 * virou a própria arquitetura da página. "Quem é o Marcão" é o NOME, "O que eu
 * vou fazer" é o DIVISOR, "O que eu vejo" e "O que eu ouvi" são a REFERÊNCIA.
 * Explicar o conceito ao eleitor é coisa de apresentação de agência: ele deve
 * sentir, não ler.
 *
 * Mantido aqui porque alimenta peça derivada e texto de campanha.
 */
export interface Marco {
  etiqueta: string
  cor: 'verde' | 'laranja' | 'amarelo'
  titulo: string
  texto: string
  /** afirmação que ainda depende de checagem antes de ir ao ar */
  pendencia?: string
}

export const marcos: Marco[] = [
  {
    etiqueta: 'O nome', cor: 'verde',
    titulo: 'Marco Antônio Vieira de Novaes',
    texto:
      'O homem por trás do apelido: raiz, família, trajetória. No Sul ninguém chama ' +
      'pelo nome de documento, chama de Marcão, e sabe de quem está falando.',
  },
  {
    etiqueta: 'O divisor', cor: 'laranja',
    titulo: 'Marco histórico. Ponto de virada.',
    texto:
      'O Sul manda gente, manda imposto, manda produção. Falta mandar quem defenda ' +
      'isso na Assembleia, e é essa a virada.',
    pendencia:
      'A frase "20 anos sem voz na Assembleia" está no manual, mas manual de marca não é ' +
      'fonte de dado eleitoral. Só entra com o levantamento nominal dos eleitos do Sul ' +
      'do ES por legislatura.',
  },
  {
    etiqueta: 'A referência', cor: 'amarelo',
    titulo: 'Marco de fronteira. A pedra que define território.',
    texto:
      'O Sul do Espírito Santo finalmente demarcado no mapa. Não como periferia da ' +
      'capital: como região com nome, número e voz próprios.',
  },
]
