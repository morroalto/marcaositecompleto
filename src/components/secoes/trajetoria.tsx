import Image from 'next/image'
import { FundoEconomias } from '@/components/ui/simbolos'
import { selos, trajetoria } from '@/content/trajetoria'

/**
 * TRAJETÓRIA (seção 3 do copy oficial)
 *
 * A prosa, os quatro selos e a citação dele, com a foto de família ao lado.
 *
 * Esta seção substituiu a antiga "De onde eu venho", que era biografia em
 * primeira pessoa escrita por mim, em rascunho, quando ainda não havia copy.
 * Com o texto aprovado em mãos, manter as duas seria contar a mesma história
 * duas vezes, e uma delas sem aval de ninguém.
 *
 * A foto é o arquivo ORIGINAL da família (1066 por 1600). O recorte 16 por 9
 * que estava aqui antes decepava a cabeça das três filhas.
 */
export function Trajetoria() {
  return (
    <section id="trajetoria" className="mv-secao bg-marinho text-white relative overflow-hidden">
      <FundoEconomias variante="c" className="text-white opacity-[.06]" />
      <div className="mv-shell relative flex flex-col gap-10">

        <div className="flex max-w-[62ch] flex-col gap-4 text-center sm:text-left">
          <p className="mv-kicker text-amarelo">{trajetoria.kicker}</p>
          <h2 className="text-[clamp(1.45rem,4.6vw,2.25rem)] font-extrabold tracking-tight">
            {trajetoria.titulo}
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[.42fr_.58fr] lg:items-start lg:gap-12">
          <Image
            src="/fotos/familia-todos.jpg"
            alt="Marcão sentado com a esposa Adriana e o neto Marco Antônio no colo, com as três filhas em pé atrás"
            width={1066} height={1600}
            sizes="(max-width: 1023px) 92vw, 28rem"
            loading="lazy"
            className="mx-auto h-auto w-full max-w-[28rem] rounded-[10px] lg:mx-0 lg:max-w-none"
          />

          <div className="flex flex-col gap-5 text-center sm:text-left">
            {trajetoria.paragrafos.map((p) => (
              <p key={p} className="text-[1.0625rem] leading-relaxed text-[#D8E4F0] sm:text-[1.15rem]">
                {p}
              </p>
            ))}

            <blockquote className="m-0 mt-1 border-l-4 border-amarelo pl-6 text-left">
              <p className="font-display text-[clamp(1.15rem,3.6vw,1.5rem)] leading-snug font-extrabold">
                “{trajetoria.citacao}”
              </p>
              <footer className="mt-2 text-[1rem] text-[#C9DCF0]">— Marcão Vivacqua</footer>
            </blockquote>
          </div>
        </div>

        {/* os selos em largura inteira: em coluna estreita eles viravam uma
            pilha de barras, um por linha */}
        {/* os quatro selos, com os emojis do protótipo, um por linha dentro de
            uma caixa — como nas telas aprovadas */}
        <ul className="flex flex-col rounded-lg bg-white/10 p-6">
          {selos.map((s) => (
            <li
              key={s.texto}
              className="flex items-start gap-3 py-3 text-left text-[1.0625rem] text-white"
            >
              <span className="text-[1.5rem] leading-none" aria-hidden="true">
                {s.icone}
              </span>
              <span>{s.texto}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
