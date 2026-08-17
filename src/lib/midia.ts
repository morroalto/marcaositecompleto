/**
 * QUEM ESTÁ TOCANDO
 *
 * Um único lugar decide quem tem o som da página. Sem isso, o jingle continua
 * rodando por baixo do vídeo do YouTube e a pessoa ouve as duas coisas
 * misturadas, que é o jeito mais rápido de ela fechar a aba.
 *
 * É um barramento de evento no `window`, e não Context do React, de propósito:
 * o jingle mora no `layout` e os players moram dentro das seções, em árvores
 * diferentes. Um Provider por cima de tudo tornaria a página inteira cliente,
 * e hoje ela é Server Component quase toda.
 *
 * `null` significa "nenhum vídeo tocando", e é o sinal para o jingle voltar.
 * O estado também fica num módulo, porque quem monta DEPOIS do vídeo começar
 * (raro, mas acontece com hidratação lenta no 4G) precisa saber o que já está
 * acontecendo, e evento passado não se escuta.
 */

export const EVENTO_MIDIA = 'mv:midia'

let midiaAtiva: string | null = null

/** Avisa a página que um vídeo começou (`id`) ou terminou (`null`). */
export function anunciarMidia(id: string | null) {
  midiaAtiva = id
  if (typeof window === 'undefined') return
  window.dispatchEvent(new CustomEvent<string | null>(EVENTO_MIDIA, { detail: id }))
}

/** Tem vídeo tocando agora? */
export function midiaTocando(): string | null {
  return midiaAtiva
}

/** Escuta as trocas. Devolve a função que cancela a escuta. */
export function ouvirMidia(aoTrocar: (id: string | null) => void): () => void {
  const ouvinte = (e: Event) => aoTrocar((e as CustomEvent<string | null>).detail)
  window.addEventListener(EVENTO_MIDIA, ouvinte)
  return () => window.removeEventListener(EVENTO_MIDIA, ouvinte)
}
