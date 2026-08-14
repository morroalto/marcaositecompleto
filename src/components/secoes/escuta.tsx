'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { Cartaz } from '@/components/ui/marca'
import { IconeSeta } from '@/components/ui/icones'
import { escutas, triangulo, type SlugCidade } from '@/content/territorio'
import { videosEscuta } from '@/content/videos'
import { Player } from '@/components/ui/video'
import { dataBR } from '@/lib/utils'

/**
 * O QUE EU OUVI
 *
 * O símbolo é o logotipo REAL do Triângulo do Sul, do acervo da campanha
 * (`ANTIGOS/TRIANGULO_DO_SUL/1500h/Ativo 25TDS.png`), não um desenho meu. Os
 * três lóbulos já carregam abacaxi, peixe e plataforma, ou seja, as três
 * economias. Redesenhar isso seria perder a marca e não ganhar nada.
 *
 * Os controles são `<button>` HTML posicionados sobre a imagem, com alvo de
 * 56 px. A imagem é decorativa. A lista abaixo tem a mesma informação e está
 * sempre no DOM: ninguém depende de acertar um lóbulo com o dedo.
 */
export function Escuta() {
  const [ativa, setAtiva] = useState<SlugCidade | null>(null)

  const porCidade = useMemo(() => {
    const m = new Map<string, typeof escutas>()
    for (const c of triangulo) m.set(c.slug, escutas.filter((e) => e.cidade === c.slug))
    return m
  }, [])

  /**
   * Onde cada card fica, FORA do logotipo, e para onde a seta dele aponta.
   *
   * Os cards ficavam por cima da arte, tapando justamente o abacaxi, o peixe e
   * a plataforma, que são o conteúdo do símbolo. Agora eles vivem na margem: o
   * de Marataízes acima do vértice de cima, os outros dois nas laterais, na
   * altura da base. Quem liga o nome ao lóbulo é a seta.
   */
  const POS: Record<string, { caixa: string; seta: string; ordem: 'antes' | 'depois' }> = {
    marataizes: {
      caixa: 'top-0 left-1/2 -translate-x-1/2 flex-col',
      seta: 'rotate-90',
      ordem: 'depois',
    },
    itapemirim: {
      caixa: 'bottom-[16%] left-0 flex-row',
      seta: '',
      ordem: 'depois',
    },
    'presidente-kennedy': {
      caixa: 'bottom-[16%] right-0 flex-row',
      seta: 'rotate-180',
      ordem: 'antes',
    },
  }

  return (
    <section id="escuta" className="mv-duo-inv mv-secao">
      <div className="mv-shell flex flex-col gap-8">
        <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
          <p className="mv-kicker text-amarelo">Três cidades, três economias</p>
          <h2 className="text-[clamp(1.6rem,5.6vw,2.7rem)]">
            <Cartaz className="text-amarelo">O TRIÂNGULO<br />TEM VOZ</Cartaz>
          </h2>
          <p className="max-w-[62ch] text-[1.0625rem] leading-relaxed text-[#DCEAE4] sm:text-[1.15rem]">
            Abacaxi, peixe e plataforma. Os três lados do símbolo são três economias e três
            cidades. Toque em uma delas.
          </p>
          <p className="max-w-[62ch] text-[1rem] leading-relaxed text-[#B7CEC7]">
            {triangulo.map((c) => c.evidencia).join(' ')}
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          {/* o quadro é maior que o logotipo de propósito: a folga em volta é
              onde os cards das cidades ficam, sem cobrir a arte */}
          <div className="relative mx-auto w-full max-w-[30rem] px-[3.5rem] pt-[3.25rem] pb-2 sm:px-[5.5rem]">
            <Image
              src="/marca/triangulo-do-sul.webp"
              alt=""
              aria-hidden="true"
              width={900} height={850}
              sizes="(max-width: 1023px) 72vw, 22rem"
              loading="lazy"
              className="h-auto w-full drop-shadow-[0_10px_22px_rgba(0,0,0,.3)]"
            />

            {triangulo.map((c) => {
              const regs = porCidade.get(c.slug) ?? []
              const p = POS[c.slug]
              const sel = ativa === c.slug
              const seta = (
                <IconeSeta
                  tamanho={18}
                  className={`shrink-0 ${p.seta}`}
                />
              )
              return (
                <button
                  key={c.slug}
                  type="button"
                  aria-pressed={sel}
                  onClick={() => setAtiva((v) => (v === c.slug ? null : c.slug))}
                  className={[
                    'absolute flex min-h-[44px] items-center justify-center gap-1',
                    'font-display leading-tight transition-colors',
                    p.caixa,
                  ].join(' ')}
                >
                  {p.ordem === 'antes' && seta}
                  <span
                    className={[
                      'rounded-lg px-3 py-2 text-center text-[clamp(.8rem,2.6vw,.95rem)] font-black',
                      sel
                        ? 'bg-amarelo text-[#08222A]'
                        : 'bg-[rgb(0_35_40/.9)] text-white hover:bg-[rgb(0_35_40/1)]',
                    ].join(' ')}
                  >
                    {c.nome}
                  </span>
                  {p.ordem === 'depois' && seta}
                  <span className="mv-sr">
                    {regs.length
                      ? `${regs.length} registro de escuta, o mais recente em ${dataBR(regs.at(-1)!.data)}`
                      : `${c.economia}. ${c.evidencia ?? ''}`}
                  </span>
                </button>
              )
            })}
          </div>

          <div className="flex flex-col gap-4 text-center sm:text-left">
            <h3 className="text-[1.25rem] font-extrabold text-white">
              As três cidades, do norte ao sul
            </h3>
            <ul className="flex flex-col">
              {triangulo.map((c) => {
                const regs = porCidade.get(c.slug) ?? []
                const sel = ativa === c.slug
                return (
                  <li
                    key={c.slug}
                    className={[
                      'border-b border-white/20 py-4 last:border-b-0 transition-colors',
                      sel ? 'bg-white/[.08]' : '',
                    ].join(' ')}
                  >
                    <p className="flex flex-wrap items-center justify-center gap-2 font-display text-[1.15rem] font-extrabold sm:justify-start">
                      {c.nome}
                      <span className="mv-badge bg-[#3A7325]">{c.economia}</span>
                    </p>
                    {regs.length === 0 ? (
                      /* Sem registro de escuta publicado, a lista mostra os
                         NÚMEROS da cidade, direto do IBGE, e a evidência
                         econômica dela. Antes dizia "ainda não temos registro
                         de escuta publicado aqui", três vezes seguidas: era
                         honesto e não informava nada. */
                      <div className="mt-2 flex flex-col gap-2">
                        <ul className="flex flex-wrap justify-center gap-x-5 gap-y-1 sm:justify-start">
                          {(c.dados ?? []).map((d) => (
                            <li key={d.rotulo} className="text-[1.0625rem] text-[#DCEAE4]">
                              <b className="font-display font-black tabular-nums text-white">
                                {d.valor}
                              </b>{' '}
                              {d.rotulo}
                            </li>
                          ))}
                        </ul>
                        {c.evidencia && (
                          <p className="text-[1.0625rem] leading-relaxed text-[#BFD4CE]">
                            {c.evidencia}
                          </p>
                        )}
                      </div>
                    ) : (
                      <ul className="mt-2 flex flex-col gap-3">
                        {regs.map((r) => (
                          <li key={`${r.localidade}-${r.data}`} className="text-[1.0625rem] text-[#DCEAE4]">
                            <span className="font-display font-bold tabular-nums">{dataBR(r.data)}</span>
                            {', '}
                            <strong>{r.localidade}</strong>
                            <br />
                            {r.ouvimos}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                )
              })}
            </ul>
            <p className="text-[1rem] leading-relaxed text-[#BFD4CE]">
              Ordem geográfica, do norte para o sul. Números do IBGE: população do Censo de
              2022, área territorial e PIB municipal de 2021.
            </p>

            {videosEscuta.length > 0 && (
              <ul className="mt-2 grid gap-4 sm:grid-cols-2">
                {videosEscuta.map((v) => (
                  <li key={`${v.cidade}-${v.data}`}>
                    <Player video={v} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
