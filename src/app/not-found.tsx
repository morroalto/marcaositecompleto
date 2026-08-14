import Link from 'next/link'
import { Lockup, BarraTricolor } from '@/components/ui/marca'
import { IconeSeta } from '@/components/ui/icones'
import { candidato } from '@/content/candidato'

export const metadata = { title: 'Página não encontrada' }

/**
 * 404 com voz de campanha, não com erro de sistema.
 * Erro que dá direção, não desculpa: sempre leva de volta para a conversão.
 */
export default function NaoEncontrada() {
  return (
    <main id="conteudo" className="grid min-h-dvh place-items-center bg-petroleo text-white">
      <div className="mv-shell flex max-w-[52ch] flex-col items-start gap-6 py-16">
        <Lockup className="text-[clamp(2rem,9vw,2.6rem)]" />
        <BarraTricolor className="max-w-[14rem]" altura={8} />
        <h1 className="text-[clamp(1.8rem,7vw,3rem)] font-extrabold tracking-tight">
          Essa página a gente não achou.
        </h1>
        <p className="text-[1.0625rem] leading-relaxed text-[#CBDDD7] sm:text-[1.15rem]">
          Pode ser um link antigo, ou um endereço digitado errado. O que importa continua no
          lugar: o número é <strong className="text-amarelo">{candidato.numero}</strong>.
        </p>
        <Link href="/" className="mv-btn mv-btn-amarelo">
          Voltar para o começo
          <IconeSeta tamanho={20} />
        </Link>
      </div>
    </main>
  )
}
