'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { Cartaz } from '@/components/ui/marca'
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

  /** posição de cada lóbulo dentro do quadro do logotipo, em porcentagem */
  const POS: Record<string, { left: string; top: string }> = {
    marataizes: { left: '50%', top: '26%' },
    itapemirim: { left: '26%', top: '72%' },
    'presidente-kennedy': { left: '74%', top: '72%' },
  }

  return (
    <section id="escuta" className="mv-duo-inv mv-secao">
      <div className="mv-shell flex flex-col gap-8">
        <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
          <p className="mv-kicker text-amarelo">O que eu ouvi</p>
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
          <div className="relative mx-auto w-full max-w-[27rem]">
            <Image
              src="/marca/triangulo-do-sul.webp"
              alt=""
              aria-hidden="true"
              width={900} height={850}
              sizes="(max-width: 1023px) 84vw, 27rem"
              loading="lazy"
              className="h-auto w-full drop-shadow-[0_10px_22px_rgba(0,0,0,.3)]"
            />

            {triangulo.map((c) => {
              const regs = porCidade.get(c.slug) ?? []
              const p = POS[c.slug]
              const sel = ativa === c.slug
              return (
                <button
                  key={c.slug}
                  type="button"
                  aria-pressed={sel}
                  onClick={() => setAtiva((v) => (v === c.slug ? null : c.slug))}
                  style={{ left: p.left, top: p.top }}
                  className={[
                    'absolute flex min-h-[56px] min-w-[56px] -translate-x-1/2 -translate-y-1/2',
                    'flex-col items-center justify-center rounded-lg px-3 py-2',
                    'text-center font-display leading-tight transition-colors',
                    sel
                      ? 'bg-amarelo text-[#08222A]'
                      : 'bg-[rgb(0_35_40/.68)] text-white hover:bg-[rgb(0_35_40/.85)]',
                  ].join(' ')}
                >
                  <b className="text-[clamp(.9rem,3.2vw,1.05rem)] font-black">{c.nome}</b>
                  <span className="mv-sr">
                    {regs.length
                      ? `${regs.length} registro de escuta, o mais recente em ${dataBR(regs.at(-1)!.data)}`
                      : 'ainda não temos registro de escuta publicado aqui'}
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
                      <p className="mt-1 text-[1.0625rem] text-[#BFD4CE]">
                        Ainda não temos registro de escuta publicado aqui.
                      </p>
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
              O símbolo mostra o vínculo entre as três cidades. A ordem da lista é a
              geográfica, do norte para o sul.
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
