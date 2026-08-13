/**
 * DADOS DO CANDIDATO
 *
 * Regra: todo dado factual carrega `fonte`. Componente que receba dado sem
 * fonte não renderiza. Nada aqui é estimado, arredondado ou plausível.
 *
 * Fonte primária: comprovante de inscrição no CNPJ, Receita Federal,
 * emitido em 03/08/2026 (arquivo em `fontes/registro/cnpj-campanha.pdf`).
 */

export const candidato = {
  nomeUrna: 'Marcão Vivacqua',
  nomeCivil: 'Marco Antônio Vieira de Novaes',
  /** Grafia do registro: caixa alta, sem acento. Confirmar a acentuada com a assessoria. */
  nomeRegistro: 'MARCO ANTONIO VIEIRA DE NOVAES',
  cargo: 'Deputado Estadual',
  uf: 'Espírito Santo',
  partido: 'Agir',
  partidoNumero: '36',

  /**
   * Grafia do número: COM ponto, como em todas as peças do manual.
   * O ponto é o conceito: 36 é o partido, 028 é o DDD do Sul do ES.
   * O leitor de tela recebe os dígitos soletrados, porque quem vai digitar
   * na urna precisa de dígito a dígito, não de "trinta e seis mil e vinte e oito".
   */
  numero: '36.028',
  numeroSoletrado: 'três, seis, zero, dois, oito',
  numeroPartido: '36',
  numeroDDD: '028',

  slogan: 'Um novo Marco para o Sul',
  hashtag: '#agoraéMARCÃO!',

  eleicao: { data: '2026-10-04T08:00:00-03:00', texto: '4 de outubro de 2026', turno: 'turno único' },

  campanha: {
    cnpj: '68.345.764/0001-52',
    razaoSocial: 'ELEICAO 2026 MARCO ANTONIO VIEIRA DE NOVAES DEPUTADO ESTADUAL',
    endereco: 'Av. Francisco Lacerda de Aguiar, 223, Centro, Marataízes/ES',
    cep: '29.345-000',
    email: 'marcaovivacqua@gmail.com',
    /** O cadastro do CNPJ traz "(0) 0", ou seja, não informado. Pedir à assessoria. */
    telefone: null as string | null,
  },

  redes: {
    instagram: 'https://www.instagram.com/marcao_vivacqua/',
    instagramMovimento: 'https://www.instagram.com/triangulodosul/',
    facebook: 'https://www.facebook.com/marcovivacquaoficial',
  },

  /** TODO(T1): links reais antes do go-live. `null` mantém o botão desabilitado e honesto. */
  whatsapp: null as string | null,
  grupoWhatsapp: null as string | null,

  fonte: 'CNPJ Receita Federal, emitido 03/08/2026 · número informado pela campanha em 12/08/2026',
} as const

export const site = {
  url: 'https://marcaovivacqua.com.br',
  titulo: 'Marcão Vivacqua 36.028, Um novo Marco para o Sul',
  descricao:
    'Marcão Vivacqua, número 36.028, candidato a Deputado Estadual pelo Espírito Santo. ' +
    '028 não é só DDD: é o código que o Sul inteiro disca todo dia.',
} as const
