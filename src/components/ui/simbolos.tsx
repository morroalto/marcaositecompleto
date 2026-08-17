import { NumeroMarca } from '@/components/ui/marca'
import { cn } from '@/lib/utils'

/**
 * ABACAXI, PEIXE E PLATAFORMA
 *
 * As três economias do Triângulo do Sul: Marataízes é o abacaxi, Itapemirim é
 * a pesca, Presidente Kennedy é o petróleo.
 *
 * REDESENHADOS em 14/08/2026 a partir do logotipo real do movimento
 * (`public/marca/triangulo-do-sul.png`), porque a primeira versão saiu ruim:
 * eram silhuetas genéricas, sem os traços que fazem cada figura ser
 * reconhecida de longe. O que a marca tem e agora está aqui:
 *
 *   · abacaxi  coroa em leque de folhas pontudas e o corpo com a grade de
 *              losangos vazados, que é o que faz um oval virar abacaxi
 *   · peixe    saltando, corpo arqueado, cauda bifurcada e ondas embaixo
 *   · petróleo torre de perfuração TRELIÇADA sobre o convés, com as pernas e
 *              as ondas, e não um retângulo com uma antena
 *
 * Os vazados são furos de verdade, com `fill-rule: evenodd`: em marca d'água
 * monocromática não dá para "pintar por cima" do fundo, porque não se sabe
 * qual é a cor dele. Tudo em `currentColor`, então cada seção escolhe a cor
 * pela classe de texto. Decorativos: o `aria-hidden` fica no contêiner.
 */

type Props = { className?: string }

/** grade de losangos do corpo do abacaxi, como furos */
function losangosDoAbacaxi(): string {
  const furos: string[] = []
  const cx = 50, cy = 76, rx = 25, ry = 33
  for (let linha = 0; linha < 6; linha++) {
    for (let col = 0; col < 5; col++) {
      const x = 50 + (col - 2) * 12 + (linha % 2 ? 6 : 0)
      const y = 50 + linha * 11.5
      const dx = (x - cx) / rx
      const dy = (y - cy) / ry
      if (dx * dx + dy * dy > 0.52) continue // fora do miolo do corpo
      const r = 4.4
      furos.push(`M${x} ${y - r}L${x + r} ${y}L${x} ${y + r}L${x - r} ${y}Z`)
    }
  }
  return furos.join('')
}

export function Abacaxi({ className }: Props) {
  const corpo = 'M50 43c-15.5 0-25 14.8-25 33.5S34.5 110 50 110s25-14.8 25-33.5S65.5 43 50 43Z'
  return (
    <svg viewBox="0 0 100 120" fill="currentColor" className={className} aria-hidden="true">
      {/* coroa: uma folha desenhada uma vez e girada em leque */}
      <g transform="translate(50 47)">
        {[-58, -44, -30, -16, 0, 16, 30, 44, 58].map((a, i) => (
          <path
            key={a}
            transform={`rotate(${a}) scale(1 ${i === 4 ? 1 : 0.86})`}
            d="M0 2C-4.6-9-5-22-3.2-38-1.8-30-.8-25 0-22c.8-3 1.8-8 3.2-16C5-22 4.6-9 0 2Z"
          />
        ))}
      </g>
      {/* corpo com os losangos vazados */}
      <path fillRule="evenodd" d={corpo + losangosDoAbacaxi()} />
    </svg>
  )
}

export function Peixe({ className }: Props) {
  return (
    // viewBox começa em -14 para a cauda caber sem ser cortada
    <svg viewBox="-14 0 134 100" fill="currentColor" className={className} aria-hidden="true">
      {/* corpo arqueado, como o do logotipo, com o olho vazado */}
      <path
        fillRule="evenodd"
        d={
          // corpo
          'M14 62c2-18 18-32 38-34 18-1.8 33 6 43 20 2 2.8 2 5.2 0 8-10 14-25 21.8-43 20-20-2-36-16-38-14Z' +
          // olho
          'M82 46a4.4 4.4 0 1 0 0 8.8 4.4 4.4 0 0 0 0-8.8Z'
        }
      />
      {/* cauda bifurcada, aberta para a esquerda. Larga de propósito: pequena,
          ela lia como barbatana e o peixe ficava sem rabo */}
      <path d="M16 62c-6-10-15-16-27-18 5 8 7.6 14.6 7.6 21S-6 78 -11 86c12-2 21-8 27-18 2.4-4 2.4-6 0-6Z" />
      {/* barbatana de cima */}
      <path d="M48 30c6-8 13-13 21-15-2.6 4.6-4 9-4.4 13.6-5.6-.6-11-.2-16.6 1.4Z" />
      {/* barbatana de baixo */}
      <path d="M52 74c5 4.6 10.6 7 17 7.4-3-3.6-5-7.4-6-11.6-3.6 1.8-7.2 3.2-11 4.2Z" />
      {/* ondas */}
      <path d="M6 90c8-5 14 5 22 0s14 5 22 0 14 5 22 0 14 5 22 0 14 5 22 0v7c-8 5-14-5-22 0s-14-5-22 0-14-5-22 0-14-5-22 0-14-5-22 0v-7Z" />
    </svg>
  )
}

export function Plataforma({ className }: Props) {
  return (
    <svg viewBox="0 0 100 120" fill="currentColor" className={className} aria-hidden="true">
      {/* torre treliçada: contorno cheio com os vãos vazados */}
      <path
        fillRule="evenodd"
        d={
          'M44 6h12v6h6v8h-6l14 52H30L44 20h-6v-8h6V6Z' +
          // vãos, de cima para baixo
          'M47.6 24h4.8l2.6 9.6h-10L47.6 24Z' +
          'M43.4 40h13.2l2.9 11H40.5l2.9-11Z' +
          'M38.6 58h22.8l3.2 12H35.4l3.2-12Z'
        }
      />
      {/* convés */}
      <path d="M18 72h64v9H18z" />
      {/* módulos sobre o convés */}
      <path d="M22 62h10v10H22zM70 65h9v7h-9z" />
      {/* pernas e travessas */}
      <path d="M24 81h6l5 24h-6l-5-24Zm52 0h-6l-5 24h6l5-24ZM47 81h6v24h-6z" />
      <path d="M31.6 88h36.8v4H31.6zM34.2 97h31.6v4H34.2z" />
      {/* ondas */}
      <path d="M2 106c8-5 14 5 22 0s14 5 22 0 14 5 22 0 14 5 22 0 12 4 12 4v7s-4-4-12-4-14 5-22 0-14 5-22 0-14 5-22 0-14 5-22 0v-7Z" />
    </svg>
  )
}

/**
 * FUNDO DE ECONOMIAS
 *
 * Espalha os símbolos pelo fundo da seção, em marca d'água. A seção que recebe
 * precisa ser `relative` e `overflow-hidden`: as figuras sangram para fora da
 * caixa de propósito, senão viram adesivo colado no canto.
 *
 * Opacidade e tamanho vêm de fora, pela classe, porque cada fundo pede um
 * ajuste diferente: sobre papel claro, 5% já é visível; sobre o petróleo do
 * rodapé, precisa de mais.
 *
 * O NÚMERO NÃO ENTRA AQUI. Ele é a marca d'água das seções que NÃO têm abacaxi,
 * peixe e plataforma (`FundoNumero`, abaixo): as duas famílias juntas na mesma
 * seção seriam marcas d'água demais disputando o mesmo fundo, e nenhuma delas
 * leria como textura.
 *
 * `variante` só muda a posição, para as seções não repetirem o mesmo arranjo
 * uma embaixo da outra. Nada aqui é estrutural: para tirar, basta remover a
 * tag da seção.
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
      'absolute -left-10 top-6 w-[9rem] -rotate-12 sm:w-[13rem]',
      'absolute -right-14 top-1/2 w-[13rem] rotate-6 sm:w-[19rem]',
      'absolute left-1/3 -bottom-16 hidden w-[10rem] -rotate-6 lg:block',
    ],
    b: [
      'absolute -right-10 -top-10 w-[10rem] rotate-12 sm:w-[14rem]',
      'absolute -left-16 bottom-2 w-[14rem] -rotate-6 sm:w-[19rem]',
      'absolute right-1/4 -bottom-20 hidden w-[10rem] rotate-3 lg:block',
    ],
    c: [
      'absolute left-1/2 -top-14 w-[10rem] -rotate-6 sm:w-[13rem]',
      'absolute -left-14 top-1/3 w-[12rem] rotate-6 sm:w-[16rem]',
      'absolute -right-16 -bottom-12 w-[12rem] -rotate-12 sm:w-[16rem]',
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

/**
 * FUNDO DE NÚMERO
 *
 * O 36▲028 espalhado pelo fundo, para as seções que NÃO recebem o abacaxi, o
 * peixe e a plataforma. As duas famílias nunca se encontram na mesma seção:
 * cada uma preenche o fundo de um jeito, e juntas viram poluição.
 *
 * SÃO SEIS POR SEÇÃO, e três delas aparecem no celular. Antes eram duas, só no
 * desktop, e o fundo ficava praticamente liso — que foi o que o Matheus viu.
 * Duas mudanças tornaram isso possível de uma vez:
 *
 *   · a marca virou SÓ O NÚMERO. Com MARCÃO e VIVACQUA escritos, repetir seis
 *     vezes seria uma parede de texto atrás do texto; o número não se lê, se
 *     reconhece, e repetição de número é o que o eleitor precisa mesmo.
 *   · a marca ficou BAIXA E LARGA (683 por 120, quase 6 para 1). Deitada
 *     assim, ela ocupa uma faixa fina, e faixa fina cabe no celular sem passar
 *     por cima da coluna de texto, que é o motivo de antes tudo sumir no `lg`.
 *
 * As três do celular ficam nas bordas, sangrando para fora, e são as menores.
 *
 * Mesmas regras da outra: a seção precisa ser `relative` e `overflow-hidden`, e
 * cor e opacidade vêm de fora, pela classe. Com seis marcas em vez de duas, vale
 * conferir a opacidade da seção: o que era discreto em duas pode pesar em seis.
 */
export function FundoNumero({
  variante = 'a',
  className,
}: {
  variante?: 'a' | 'b' | 'c' | 'd'
  className?: string
}) {
  const arranjos = {
    a: [
      'absolute -right-10 top-8 w-[12rem] -rotate-6 sm:w-[20rem]',
      'absolute -left-8 bottom-10 w-[10rem] rotate-3 sm:w-[16rem]',
      'absolute -right-6 bottom-1/3 w-[8rem] rotate-12 sm:w-[12rem]',
      'absolute -left-12 top-1/3 hidden w-[18rem] -rotate-12 lg:block',
      'absolute left-1/2 top-6 hidden w-[12rem] rotate-6 lg:block',
      'absolute right-1/3 -bottom-4 hidden w-[15rem] -rotate-3 lg:block',
    ],
    b: [
      /* a maior fica embaixo, e não em cima: nesta variante o título fica no
         alto da esquerda, e ela passava por trás dele */
      'absolute -left-10 bottom-6 w-[12rem] rotate-6 sm:w-[19rem]',
      'absolute -right-6 top-8 w-[10rem] -rotate-3 sm:w-[14rem]',
      'absolute -left-6 top-1/2 w-[8rem] rotate-12 sm:w-[12rem]',
      'absolute -right-14 bottom-1/3 hidden w-[17rem] rotate-3 lg:block',
      'absolute left-1/3 -top-6 hidden w-[13rem] -rotate-6 lg:block',
      'absolute right-1/4 -bottom-6 hidden w-[11rem] rotate-12 lg:block',
    ],
    c: [
      'absolute -right-8 bottom-12 w-[12rem] rotate-3 sm:w-[19rem]',
      'absolute -left-6 top-6 w-[10rem] -rotate-6 sm:w-[14rem]',
      'absolute -left-8 bottom-1/4 w-[8rem] rotate-6 sm:w-[13rem]',
      'absolute right-6 top-1/3 hidden w-[15rem] -rotate-12 lg:block',
      'absolute left-1/3 bottom-2 hidden w-[12rem] rotate-6 lg:block',
      'absolute -right-16 -top-4 hidden w-[18rem] -rotate-3 lg:block',
    ],
    d: [
      'absolute -right-8 top-1/2 w-[11rem] -rotate-3 sm:w-[18rem]',
      'absolute -left-10 bottom-8 w-[10rem] rotate-6 sm:w-[16rem]',
      'absolute -left-4 top-10 w-[8rem] rotate-12 sm:w-[12rem]',
      'absolute -right-12 -bottom-4 hidden w-[16rem] rotate-3 lg:block',
      'absolute left-1/2 bottom-1/3 hidden w-[13rem] -rotate-6 lg:block',
      'absolute right-1/3 top-4 hidden w-[11rem] rotate-6 lg:block',
    ],
  }[variante]

  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
    >
      {arranjos.map((posicao, i) => (
        <NumeroMarca key={i} className={posicao} />
      ))}
    </div>
  )
}
