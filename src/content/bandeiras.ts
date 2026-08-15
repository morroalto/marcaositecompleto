/**
 * O QUE DEFENDEMOS
 *
 * Fonte: copy oficial da campanha (`dizeres site marcao.pdf`, seção 5),
 * recebido em 15/08/2026. São seis eixos, com o texto aprovado, e substituem
 * tanto o que veio do protótipo "Sul em Foco" quanto os rascunhos que eu
 * tinha escrito. Por isso entram com `revisado: true`.
 *
 * MUDANÇA DE ESTRUTURA. Os cards tinham dois campos, `contexto` e
 * `compromisso`, porque antes o site precisava separar "o problema" da "ação
 * assumida" e marcar quem ainda não tinha compromisso. O copy oficial traz um
 * texto só por eixo, então o card virou título e texto. A regra de origem
 * segue valendo, e ela está atendida: nenhum destes textos promete número, e
 * todos falam de ação.
 */

export interface Bandeira {
  slug: string
  titulo: string
  texto: string
  revisado: boolean
  cor: 'laranja' | 'verde' | 'marinho' | 'amarelo' | 'petroleo'
}

export const bandeiras: Bandeira[] = [
  {
    slug: 'pesca', titulo: 'Pesca e Economia do Mar', cor: 'marinho', revisado: true,
    texto:
      'Apoio real aos pescadores e às colônias do nosso litoral, com infraestrutura, ' +
      'incentivo e acesso a crédito.',
  },
  {
    slug: 'agricultura', titulo: 'Agricultura e Interior', cor: 'verde', revisado: true,
    texto:
      'Fortalecer quem produz no campo: borracha, café, pecuária. Crédito e assistência ' +
      'técnica para quem vive da terra.',
  },
  {
    slug: 'saude', titulo: 'Saúde perto de casa', cor: 'laranja', revisado: true,
    texto:
      'Menos fila, atendimento humano e mais estrutura nos postos e hospitais de toda a ' +
      'nossa região.',
  },
  {
    slug: 'infraestrutura', titulo: 'Infraestrutura regional', cor: 'petroleo', revisado: true,
    texto:
      'Estradas recuperadas e saneamento básico para que nenhuma comunidade, por mais ' +
      'distante, seja esquecida.',
  },
  {
    slug: 'mobilidade', titulo: 'Mobilidade e Conectividade', cor: 'amarelo', revisado: true,
    texto:
      'Transporte e acessos melhores conectando nossos municípios, para ninguém perder ' +
      'tempo nem oportunidade.',
  },
  {
    slug: 'emprego', titulo: 'Emprego e Oportunidade', cor: 'verde', revisado: true,
    texto:
      'Atrair investimentos regionais e apoiar o pequeno empreendedor local, do jeito que ' +
      'Marcão sempre fez na prática.',
  },
]

/**
 * OS TRÊS SENTIDOS DE "MARCO". Conceito da campanha, do manual de marca.
 *
 * Não renderiza: o conceito virou a arquitetura da página, e explicar conceito
 * ao eleitor é coisa de apresentação de agência. Fica aqui porque alimenta
 * peça derivada e texto de campanha.
 */
export interface Marco {
  etiqueta: string
  cor: 'verde' | 'laranja' | 'amarelo'
  titulo: string
  texto: string
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
  },
  {
    etiqueta: 'A referência', cor: 'amarelo',
    titulo: 'Marco de fronteira. A pedra que define território.',
    texto:
      'O Sul do Espírito Santo finalmente demarcado no mapa. Não como periferia da ' +
      'capital: como região com nome, número e voz próprios.',
  },
]
