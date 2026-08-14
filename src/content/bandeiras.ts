/**
 * BANDEIRAS
 *
 * ⚠️ TEXTO EM RASCUNHO, escrito em 12/08/2026 para o site ficar completo, e
 * ampliado em 14/08/2026 com as pautas do protótipo "Sul em Foco"
 * (`src/components/Defendemos.tsx`): pesca, agricultura e mobilidade não
 * existiam aqui, e são as três economias que sustentam a região.
 * Cada item carrega `revisado: false`. Trocar por `true` só depois que o
 * Marcão ou a assessoria ler e aprovar. A lista do que precisa de aval está
 * em `docs/textos-em-rascunho.md`.
 *
 * Regra que eu segui ao escrever, e que vale manter na revisão:
 * compromisso é de AÇÃO, nunca de número. "Cobrar a recuperação da ES-060" é
 * defensável porque a estrada existe e a demanda é pública. "Duplicar 40 km
 * em dois anos" seria promessa inventada, e vira munição do adversário.
 *
 * Por que seis e não oito: mobilidade entrou dentro de infraestrutura, e o
 * eixo de royalties/turismo entrou dentro de emprego e renda. Card demais na
 * grade vira lista de supermercado, e o eleitor não lê o oitavo.
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
    slug: 'infraestrutura', titulo: 'Infraestrutura e mobilidade', cor: 'laranja', revisado: false,
    contexto:
      'Estrada, saneamento, porto e a ligação entre as nove cidades do 028. Transporte digno ' +
      'entre as cidades do Triângulo do Sul, com rota melhor e tarifa justa. O que trava o Sul ' +
      'não é falta de riqueza, é falta de caminho para ela circular.',
    compromisso:
      'Cobrar do governo do estado a recuperação das rodovias que ligam Marataízes, ' +
      'Itapemirim e Presidente Kennedy, e defender que a chegada do Porto Central venha ' +
      'acompanhada de acesso, saneamento e moradia para quem já mora aqui.',
  },
  {
    slug: 'saude', titulo: 'Saúde perto de casa', cor: 'verde', revisado: false,
    contexto:
      'Fila de exame, leito e o transporte de paciente que sai da nossa região para resolver ' +
      'o que devia resolver aqui. Menos fila, atendimento humano e investimento nos hospitais ' +
      'e unidades de saúde do Sul do Estado.',
    compromisso:
      'Lutar por exame e consulta especializada dentro do Sul, para ninguém precisar ' +
      'atravessar o estado de madrugada. E cobrar transparência na fila: quem está ' +
      'esperando tem direito de saber a posição dele.',
  },
  {
    slug: 'pesca', titulo: 'Pesca e economia do mar', cor: 'marinho', revisado: false,
    contexto:
      'Itaipava, em Itapemirim, é o maior porto pesqueiro do Espírito Santo, e quem vive do ' +
      'mar ainda depende de estrutura, gelo, crédito e preço justo na hora de vender.',
    compromisso:
      'Defender crédito e estrutura de desembarque para o pescador artesanal, e brigar para ' +
      'que o peixe do Sul seja beneficiado aqui, onde ele é pescado, em vez de sair cru e ' +
      'voltar caro.',
  },
  {
    slug: 'agricultura', titulo: 'Agricultura e interior', cor: 'amarelo', revisado: false,
    contexto:
      'Marataízes é capital estadual do abacaxi, e o interior do 028 vive de café, leite e ' +
      'pequena propriedade. Estrada rural ruim come a margem de quem produz.',
    compromisso:
      'Fortalecer quem produz no campo: estrada rural em condição de escoar safra, ' +
      'assistência técnica e mercado justo para o pequeno produtor, inclusive na compra ' +
      'pública de merenda escolar.',
  },
  {
    slug: 'educacao', titulo: 'Educação e qualificação', cor: 'petroleo', revisado: false,
    contexto:
      'Escola técnica perto de casa e formação ligada ao que a região faz de verdade: ' +
      'pesca, agro, petróleo e turismo.',
    compromisso:
      'Defender curso técnico e profissionalizante nas nossas cidades, ligado à economia ' +
      'que já existe aqui, para o jovem se formar no que a região contrata em vez de se ' +
      'formar no que só tem vaga em Vitória.',
  },
  {
    slug: 'emprego', titulo: 'Emprego, renda e royalties', cor: 'verde', revisado: false,
    contexto:
      'Royalty que fica, indústria que chega e turismo que não pode durar só janeiro. Para ' +
      'que o filho de quem mora aqui não precise escolher entre ficar sem trabalho ou ir ' +
      'embora.',
    compromisso:
      'Fiscalizar para que o royalty do petróleo vire obra e serviço na cidade que produz, ' +
      'exigir contrapartida de emprego local em todo empreendimento que se instalar na ' +
      'região, e trabalhar por um calendário de turismo que sustente o comércio o ano ' +
      'inteiro.',
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
