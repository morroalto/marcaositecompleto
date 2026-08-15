/**
 * O NÚMERO
 *
 * Texto do protótipo "Sul em Foco" (`src/components/Numero.tsx`), restaurado
 * em 15/08/2026 palavra por palavra, a pedido: o site deve ter exatamente os
 * textos das telas aprovadas.
 *
 * São doze cidades, como no protótipo, e não as nove que eu tinha reduzido
 * lendo o manual de marca. O rodapé da lista ("e mais cidades do Sul do
 * Espírito Santo") é o que deixa a conta honesta sem precisar fechar o número.
 */

export const CIDADES_028 = [
  'Cachoeiro de Itapemirim',
  'Marataízes',
  'Itapemirim',
  'Presidente Kennedy',
  'Piúma',
  'Castelo',
  'Muqui',
  'Alegre',
  'Guaçuí',
  'Atílio Vivacqua',
  'Apiacá',
  'Mimoso do Sul',
]

/** o que o visor digita. É o texto do protótipo. */
export const VISOR = '(028) 9 9999-9999'

/**
 * A seta dos botões NÃO vem no texto. Quem desenha a seta é o `IconeSeta` do
 * componente, e com as duas coisas juntas o botão saía com duas setas.
 */
export const numeroTexto = {
  titulo: ['O número que você', 'já conhece!'],
  chamando: '☎ Chamando...',
  legendaVisor: 'Esse é o DDD que você disca todo dia.',
  partido: { valor: '36', nome: 'AGIR', descricao: 'O partido' },
  ddd: { valor: '028', nome: 'O DDD do Sul', descricao: 'Quem mora aqui nunca esquece' },
  frase: ['Meu número termina com o DDD do Sul.', 'Porque eu sou daqui.'],
  /**
   * Texto novo da campanha, 15/08/2026, PARTIDO EM DOIS.
   *
   * A primeira metade fala do 028 como identidade da região e fica em cima,
   * antes da lista de cidades — ela é a apresentação do código. A segunda fala
   * do peso do voto na eleição estadual e desce para DEPOIS da lista: é a
   * conclusão que a lista sustenta, e lida no fim ela fecha o raciocínio em
   * vez de atropelá-lo.
   */
  argumento:
    '028 é a identidade do nosso Sul: conecta do litoral à montanha, de Itapemirim a ' +
    'Guaçuí. É a força da nossa gente batendo no mesmo ritmo e fazendo a nossa voz ecoar ' +
    'com orgulho.',
  fecho:
    'A eleição para Deputado Estadual é a oportunidade perfeita de mostrar essa união, ' +
    'porque o nosso voto tem peso de sobra para decidir e transformar todo o Espírito Santo.',
  listaTitulo: 'O 028 é de:',
  listaRodape: 'E mais cidades do Sul do Espírito Santo',
  botao: 'Grave agora: 36028',
}

/** o bloco de impacto, que fecha a seção */
export const impactoTexto = {
  numero: '028',
  linhas: ['Esse é o DDD que você disca todo dia.', 'Agora é o número do Marcão na urna.'],
  urna: '36028',
  fecho: 'Quem mora no Sul... nunca esquece.',
  botao: 'Compartilhe o número',
}
