import Image from 'next/image'
import { Discagem } from '@/components/ui/discagem'
import { IconeSeta } from '@/components/ui/icones'
import { CIDADES_028, numeroTexto, impactoTexto } from '@/content/numero'
import fone from '@/../public/fotos/marcao-orelhao.png'

/**
 * O NÚMERO
 *
 * Textos restaurados em 15/08/2026 palavra por palavra do protótipo aprovado:
 * o título em duas linhas, a legenda do visor, os dois blocos, a frase, as
 * doze cidades do 028 com o rodapé "e mais cidades do Sul do Espírito Santo",
 * e o botão "Grave agora".
 *
 * A foto do orelhão é a piada visual que sustenta o argumento inteiro: ele
 * está literalmente ligando para o Sul, e o código da ligação é o voto. Ela
 * entra em recorte PNG sobre fundo escuro, com halo atrás e sombra no pé, para
 * a figura ficar DENTRO da seção e não colada por cima.
 */
export function Numero() {
  return (
    <section id="numero" className="mv-fundo-fone mv-secao">
      <div className="mv-shell flex flex-col items-center gap-12">

        <h2 className="text-center text-[clamp(1.6rem,5.4vw,2.6rem)] font-extrabold tracking-tight text-white">
          {numeroTexto.titulo[0]}
          <br />
          {numeroTexto.titulo[1]}
        </h2>

        {/* ── ele no orelhão, com o visor discando na base ── */}
        <div className="flex flex-col items-center gap-5">
          <div
            className="mv-profundidade relative mx-auto w-full max-w-[30rem]"
            style={{ '--pe-x': '32%', '--pe-y': '4%' } as React.CSSProperties}
          >
            <Image
              src={fone}
              alt="Marcão falando em um orelhão, de camiseta do Triângulo do Sul, com a mão estendida"
              sizes="(max-width: 1023px) 92vw, 30rem"
              priority
              className="h-auto w-full"
            />
            <div className="absolute inset-x-0 bottom-0 z-10">
              <Discagem />
            </div>
          </div>

          <p className="text-center text-[1.0625rem] leading-relaxed text-[#D7E8E4] sm:text-[1.15rem]">
            {numeroTexto.legendaVisor}
          </p>
        </div>

        {/* ── 36 + 028 ── */}
        <div className="flex w-full flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8">
          <div className="w-full max-w-[17rem] rounded-xl border border-white/15 bg-white/[.07] p-7 text-center">
            <p className="font-display text-[clamp(3rem,12vw,4.4rem)] leading-none font-black text-verde tabular-nums">
              {numeroTexto.partido.valor}
            </p>
            <p className="mt-3 font-display text-[1.25rem] font-extrabold text-white">
              {numeroTexto.partido.nome}
            </p>
            <p className="mt-1 text-[1rem] text-white/80">{numeroTexto.partido.descricao}</p>
          </div>

          <span className="font-display text-[2rem] font-black text-white/60" aria-hidden="true">
            +
          </span>

          <div className="w-full max-w-[17rem] rounded-xl border border-white/15 bg-white/[.07] p-7 text-center">
            <p className="font-display text-[clamp(3rem,12vw,4.4rem)] leading-none font-black text-white tabular-nums">
              {numeroTexto.ddd.valor}
            </p>
            <p className="mt-3 font-display text-[1.25rem] font-extrabold text-white">
              {numeroTexto.ddd.nome}
            </p>
            <p className="mt-1 text-[1rem] text-white/80">{numeroTexto.ddd.descricao}</p>
          </div>
        </div>

        <h3 className="text-center text-[clamp(1.3rem,4.4vw,2rem)] font-extrabold tracking-tight text-white">
          {numeroTexto.frase[0]}
          <br />
          {numeroTexto.frase[1]}
        </h3>

        {/* ── as doze cidades ── */}
        <div className="flex flex-col items-center gap-6">
          <h4 className="font-display text-[1.25rem] font-extrabold text-white sm:text-[1.6rem]">
            {numeroTexto.listaTitulo}
          </h4>
          <ul className="flex max-w-[52rem] flex-wrap justify-center gap-2">
            {CIDADES_028.map((cidade) => (
              <li key={cidade}>
                <span className="mv-chip border-white/25 bg-white/15 text-[0.9375rem] text-white">
                  {cidade}
                </span>
              </li>
            ))}
          </ul>
          <p className="font-display text-[0.8125rem] font-extrabold tracking-[0.14em] text-white/80 uppercase">
            {numeroTexto.listaRodape}
          </p>

          <a href="#apoie" className="mv-btn mv-btn-laranja mt-2">
            {numeroTexto.botao}
          </a>
        </div>
      </div>

      {/* ── impacto: o fecho da seção ── */}
      <div className="mv-shell mt-[var(--secao)] flex flex-col items-center gap-7 text-center text-white">
        <p className="font-display text-[clamp(4rem,16vw,7.5rem)] leading-none font-black tabular-nums">
          {impactoTexto.numero}
        </p>
        <p className="text-[1.15rem] leading-relaxed sm:text-[1.35rem]">
          {impactoTexto.linhas[0]}
          <br />
          {impactoTexto.linhas[1]}
        </p>
        <p className="font-display text-[clamp(2.6rem,10vw,4rem)] leading-none font-black tabular-nums">
          {impactoTexto.urna}
        </p>
        <p className="text-[1.0625rem] italic sm:text-[1.15rem]">{impactoTexto.fecho}</p>
        <a href="#apoie" className="mv-btn mv-btn-laranja">
          {impactoTexto.botao}
          <IconeSeta tamanho={20} />
        </a>
      </div>
    </section>
  )
}
