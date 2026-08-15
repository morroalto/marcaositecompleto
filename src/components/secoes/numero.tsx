import Image from 'next/image'
import { Discagem } from '@/components/ui/discagem'
import { IconeSeta } from '@/components/ui/icones'
import { FundoEconomias } from '@/components/ui/simbolos'
import { CIDADES_028, numeroTexto, impactoTexto } from '@/content/numero'
import fone from '@/../public/fotos/marcao-orelhao.png'

/**
 * O NÚMERO
 *
 * Textos do protótipo aprovado, palavra por palavra.
 *
 * LAYOUT REFEITO em 15/08/2026: era uma coluna só, centralizada, e num monitor
 * largo virava uma tira fina de conteúdo no meio da tela com dois desertos ao
 * lado. Agora a foto e o argumento dividem a largura no desktop, e o abacaxi,
 * o peixe e a plataforma entram como marca d'água atrás, que é o que enche o
 * espaço sem inventar conteúdo. No celular tudo volta a empilhar, na mesma
 * ordem.
 *
 * O bloco de impacto continua em largura inteira embaixo: ele é o fecho da
 * seção e precisa do peso de uma tela só para ele.
 */
export function Numero() {
  return (
    <section id="numero" className="mv-fundo-fone mv-secao relative overflow-hidden">
      <FundoEconomias variante="a" className="text-white opacity-[.07]" />

      <div className="mv-shell relative grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:gap-16">

        {/* ── ele no orelhão, com o visor discando na base ── */}
        <div className="flex flex-col items-center gap-5">
          <div
            className="mv-profundidade relative mx-auto w-full max-w-[26rem]"
            style={{ '--pe-x': '32%', '--pe-y': '4%' } as React.CSSProperties}
          >
            <Image
              src={fone}
              alt="Marcão falando em um orelhão, de camiseta do Triângulo do Sul, com a mão estendida"
              sizes="(max-width: 1023px) 88vw, 26rem"
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

        {/* ── o argumento ── */}
        <div className="flex flex-col items-center gap-8 text-center lg:items-start lg:text-left">
          <h2 className="text-[clamp(1.6rem,5vw,2.6rem)] font-extrabold tracking-tight text-white">
            {numeroTexto.titulo[0]}
            <br />
            {numeroTexto.titulo[1]}
          </h2>

          <div className="flex w-full items-stretch justify-center gap-4 lg:justify-start">
            <div className="flex-1 rounded-xl border border-white/15 bg-white/[.07] p-6 text-center sm:max-w-[15rem]">
              <p className="font-display text-[clamp(2.6rem,9vw,3.8rem)] leading-none font-black text-verde tabular-nums">
                {numeroTexto.partido.valor}
              </p>
              <p className="mt-3 font-display text-[1.15rem] font-extrabold text-white">
                {numeroTexto.partido.nome}
              </p>
              <p className="mt-1 text-[1rem] text-white/80">{numeroTexto.partido.descricao}</p>
            </div>

            <span
              className="self-center font-display text-[1.75rem] font-black text-white/60"
              aria-hidden="true"
            >
              +
            </span>

            <div className="flex-1 rounded-xl border border-white/15 bg-white/[.07] p-6 text-center sm:max-w-[15rem]">
              <p className="font-display text-[clamp(2.6rem,9vw,3.8rem)] leading-none font-black text-white tabular-nums">
                {numeroTexto.ddd.valor}
              </p>
              <p className="mt-3 font-display text-[1.15rem] font-extrabold text-white">
                {numeroTexto.ddd.nome}
              </p>
              <p className="mt-1 text-[1rem] text-white/80">{numeroTexto.ddd.descricao}</p>
            </div>
          </div>

          <h3 className="text-[clamp(1.25rem,3.8vw,1.9rem)] font-extrabold tracking-tight text-white">
            {numeroTexto.frase[0]}
            <br />
            {numeroTexto.frase[1]}
          </h3>

          {/* ── as doze cidades ── */}
          <div className="flex flex-col items-center gap-4 lg:items-start">
            <h4 className="font-display text-[1.25rem] font-extrabold text-white">
              {numeroTexto.listaTitulo}
            </h4>
            <ul className="flex flex-wrap justify-center gap-2 lg:justify-start">
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
          </div>

          <a href="#apoie" className="mv-btn mv-btn-laranja w-full sm:w-auto">
            {numeroTexto.botao}
            <IconeSeta tamanho={20} />
          </a>
        </div>
      </div>

      {/* ── impacto: o fecho da seção ── */}
      <div className="mv-shell relative mt-[var(--secao)] flex flex-col items-center gap-6 text-center text-white">
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
