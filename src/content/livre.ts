/**
 * SEÇÃO LIVRE
 *
 * Espaço reservado, pedido em 14/08/2026: uma seção separada, no meio da
 * página, para entrar conteúdo que a campanha ainda vai definir.
 *
 * Como usar: preencha `titulo` e pelo menos um parágrafo em `paragrafos`.
 * A seção aparece sozinha, com o mesmo desenho das outras. Enquanto `titulo`
 * estiver vazio ela não renderiza em produção, e na revisão mostra a caixa
 * pontilhada dizendo que o espaço está reservado.
 *
 * `blocos` é opcional: se você preencher, vira uma grade de cards numerados,
 * no mesmo formato de "O que defendemos" e da trajetória. Se deixar vazio,
 * fica só o texto corrido.
 *
 * Nada aqui é escrito por mim: é campo em branco esperando o texto de vocês.
 */

export interface BlocoLivre {
  titulo: string
  texto: string
}

export const livre = {
  /** ex.: 'Prestação de contas' */
  kicker: '',
  /** vazio = seção não sobe em produção */
  titulo: '',
  paragrafos: [] as string[],
  blocos: [] as BlocoLivre[],
  /** false enquanto ninguém aprovou o texto */
  revisado: false,
}
