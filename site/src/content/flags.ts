/**
 * Chaves de conteúdo.
 *
 * `MOSTRAR_PENDENCIAS` liga as caixas vermelhas de TODO. Elas existem para a
 * revisão interna, nunca para produção: em produção, seção sem conteúdo real
 * simplesmente não renderiza. Placeholder bonito é mentira.
 *
 * Ligada por variável de ambiente para o cliente conseguir ver o mapa do que
 * ainda falta sem que isso vaze no ar.
 */
export const MOSTRAR_PENDENCIAS = process.env.NEXT_PUBLIC_MOSTRAR_PENDENCIAS === '1'
