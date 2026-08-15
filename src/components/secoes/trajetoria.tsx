import { FundoEconomias } from '@/components/ui/simbolos'
import { trajetoria } from '@/content/trajetoria'

/**
 * TRAJETÓRIA
 *
 * A prosa e a citação dele, e só isso.
 *
 * Saíram daqui em 15/08/2026 a foto de família e a caixa com os quatro selos.
 * Os dois passaram a repetir o que a seção seguinte faz melhor: a foto de
 * família é o quadro do capítulo "A Maior das Conquistas", e os selos diziam,
 * em quatro linhas soltas, o que os quatro capítulos contam com contexto —
 * formação, mandatos, filhas e neto, raiz nas cidades.
 *
 * Sem eles a seção virou o que ela é: o texto de apresentação, em medida de
 * leitura, antes de a história começar a ser contada em capítulos.
 */
export function Trajetoria() {
  return (
    <section id="trajetoria" className="mv-secao bg-marinho text-white relative overflow-hidden">
      <FundoEconomias variante="c" className="text-white opacity-[.06]" />

      <div className="mv-shell relative flex max-w-[68ch] flex-col gap-5 text-center sm:text-left">
        <p className="mv-kicker text-amarelo">{trajetoria.kicker}</p>
        <h2 className="text-[clamp(1.45rem,4.6vw,2.25rem)] font-extrabold tracking-tight">
          {trajetoria.titulo}
        </h2>

        {trajetoria.paragrafos.map((p) => (
          <p key={p} className="text-[1.0625rem] leading-relaxed text-[#D8E4F0] sm:text-[1.15rem]">
            {p}
          </p>
        ))}

        <blockquote className="m-0 mt-2 border-l-4 border-amarelo pl-6 text-left">
          <p className="font-display text-[clamp(1.15rem,3.6vw,1.5rem)] leading-snug font-extrabold">
            “{trajetoria.citacao}”
          </p>
          <footer className="mt-2 text-[1rem] text-[#C9DCF0]">— Marcão Vivacqua</footer>
        </blockquote>
      </div>
    </section>
  )
}
