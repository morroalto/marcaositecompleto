import { cn } from '@/lib/utils'

/**
 * ABACAXI, PEIXE E PLATAFORMA
 *
 * As três economias do Triângulo do Sul, que já são os três lóbulos do
 * logotipo do movimento: Marataízes é o abacaxi, Itapemirim é a pesca,
 * Presidente Kennedy é o petróleo.
 *
 * Aqui eles viram MARCA D'ÁGUA de fundo. Desenhados em silhueta simples, sem
 * traço fino: em opacidade baixa, detalhe fino vira sujeira na tela.
 *
 * Tudo em `currentColor`, então cada seção decide a cor pela classe de texto.
 * Todos decorativos: `aria-hidden` fica no contêiner (`FundoEconomias`).
 */

type Props = { className?: string }

export function Abacaxi({ className }: Props) {
  return (
    <svg viewBox="0 0 64 64" fill="currentColor" className={className} aria-hidden="true">
      {/* coroa */}
      <path d="M32 4c1.6 3.2 2.2 6.4 2 10-2.4-1.4-3.6-3.8-4-6.6-1.4 2.6-1.6 5.2-1 8-2.6-1.8-4-4.2-4.4-7.2-1.6 3-1.6 6 0 9.2-3-1-5-3-6.2-5.8-.2 3.4 1 6.2 3.4 8.6-2.8.2-5.2-.6-7.4-2.4 1.2 3.4 3.6 5.6 7 6.8-1.6 1-3.2 1.4-5 1.4 2.6 1.8 5.4 2.4 8.6 2l.6-3.2c.8-4.2 2.6-8 5.4-11.4 1-1.2 2.2-2.4 3.4-3.4-2 3-3.4 6.2-4.2 9.8-.4 1.6-.6 3.2-.8 4.8l-.2 2.4h9.2l-.2-2.4c-.2-1.6-.4-3.2-.8-4.8-.8-3.6-2.2-6.8-4.2-9.8 1.2 1 2.4 2.2 3.4 3.4 2.8 3.4 4.6 7.2 5.4 11.4l.6 3.2c3.2.4 6-.2 8.6-2-1.8 0-3.4-.4-5-1.4 3.4-1.2 5.8-3.4 7-6.8-2.2 1.8-4.6 2.6-7.4 2.4 2.4-2.4 3.6-5.2 3.4-8.6-1.2 2.8-3.2 4.8-6.2 5.8 1.6-3.2 1.6-6.2 0-9.2-.4 3-1.8 5.4-4.4 7.2.6-2.8.4-5.4-1-8-.4 2.8-1.6 5.2-4 6.6-.2-3.6.4-6.8 2-10Z" />
      {/* corpo */}
      <path d="M32 24c-8.8 0-15 7.4-15 17.6C17 51.4 23.6 60 32 60s15-8.6 15-18.4C47 31.4 40.8 24 32 24Zm0 4.6 6 6.2-6 6.2-6-6.2 6-6.2Zm-9.6 12.2 5.6-5.8 5.6 5.8-5.6 5.8-5.6-5.8Zm9.6 18-6-6.2 6-6.2 6 6.2-6 6.2Zm9.6-12.2-5.6 5.8-5.6-5.8 5.6-5.8 5.6 5.8Z" />
    </svg>
  )
}

export function Peixe({ className }: Props) {
  return (
    <svg viewBox="0 0 64 64" fill="currentColor" className={className} aria-hidden="true">
      {/* corpo */}
      <path d="M40 14c-11 0-21.4 6-27.6 15.4a4.6 4.6 0 0 0 0 5.2C18.6 44 29 50 40 50c9.8 0 17.4-6.6 20.4-16.4a5.4 5.4 0 0 0 0-3.2C57.4 20.6 49.8 14 40 14Zm7 15a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" />
      {/* cauda */}
      <path d="M4 18c4.6 3.4 7 8 7 14s-2.4 10.6-7 14c-1.4 1-3-.4-2.4-2C3.4 39.4 4.4 35.6 4.4 32S3.4 24.6 1.6 20c-.6-1.6 1-3 2.4-2Z" />
      {/* barbatana de cima */}
      <path d="M34 12c4-4.6 9.2-7.4 15.6-8.4 1.6-.2 2.6 1.6 1.6 2.8-2.8 3.4-4.6 7-5.4 11-3.6-2.6-7.6-4.4-11.8-5.4Z" />
    </svg>
  )
}

export function Plataforma({ className }: Props) {
  return (
    <svg viewBox="0 0 64 64" fill="currentColor" className={className} aria-hidden="true">
      {/* torre */}
      <path d="M32 2 24 26h16L32 2Zm0 8.6 2.6 8H29.4l2.6-8Z" />
      {/* convés */}
      <path d="M10 26h44v7H10z" />
      {/* módulos em cima do convés */}
      <path d="M14 18h7v8h-7zM45 20h6v6h-6z" />
      {/* pernas */}
      <path d="M15 33h5l4 25h-5l-4-25Zm34 0h-5l-4 25h5l4-25ZM29 33h6v25h-6z" />
      {/* travessas */}
      <path d="M18.6 41.4h26.8v3H18.6zM20.4 50h23.2v3H20.4z" />
      {/* linha d'água */}
      <path d="M2 58c4 0 4 2.6 8 2.6S14 58 18 58s4 2.6 8 2.6S30 58 34 58s4 2.6 8 2.6S46 58 50 58s4 2.6 8 2.6 4-2.6 4-2.6v4c-4 0-4-1-8-1s-4 1-8 1-4-1-8-1-4 1-8 1-4-1-8-1-4 1-8 1-4-1-8-1-4 1-4 1v-4Z" />
    </svg>
  )
}

/**
 * FUNDO DE ECONOMIAS
 *
 * Espalha os três símbolos pelo fundo da seção, em marca d'água. A seção que
 * recebe precisa ser `relative` e, de preferência, `overflow-hidden`: as
 * figuras sangram de propósito para fora da caixa, senão viram adesivo colado
 * no canto.
 *
 * Opacidade baixíssima e tamanho grande, que é o que faz virar textura de
 * fundo em vez de ilustração. Se ficar demais, é só tirar a tag da seção: nada
 * aqui é estrutural.
 *
 * `variante` só muda a posição das figuras, para as seções não repetirem o
 * mesmo arranjo uma embaixo da outra.
 */
export function FundoEconomias({
  variante = 'a',
  className,
}: {
  variante?: 'a' | 'b' | 'c'
  className?: string
}) {
  const arranjos = {
    a: [
      'absolute -left-10 top-6 w-[10rem] -rotate-12 sm:w-[14rem]',
      'absolute -right-12 top-1/2 w-[12rem] rotate-6 sm:w-[17rem]',
      'absolute left-1/3 -bottom-14 hidden w-[11rem] -rotate-6 lg:block',
    ],
    b: [
      'absolute -right-10 -top-8 w-[11rem] rotate-12 sm:w-[15rem]',
      'absolute -left-14 bottom-4 w-[12rem] -rotate-6 sm:w-[16rem]',
      'absolute right-1/4 -bottom-16 hidden w-[10rem] rotate-3 lg:block',
    ],
    c: [
      'absolute left-1/2 -top-12 w-[11rem] -rotate-6 sm:w-[14rem]',
      'absolute -left-12 top-1/3 w-[10rem] rotate-6 sm:w-[13rem]',
      'absolute -right-14 -bottom-10 w-[13rem] -rotate-12 sm:w-[18rem]',
    ],
  }[variante]

  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
    >
      <Abacaxi className={arranjos[0]} />
      <Peixe className={arranjos[1]} />
      <Plataforma className={arranjos[2]} />
    </div>
  )
}
