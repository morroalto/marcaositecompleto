'use client'

import { useEffect, useState } from 'react'
import { Lockup, BarraTricolor } from '@/components/ui/marca'
import { IconeSeta } from '@/components/ui/icones'
import { candidato } from '@/content/candidato'

const LINKS = [
  { href: '#numero',    texto: 'O 028' },
  { href: '#quem-e',    texto: 'Quem é' },
  { href: '#origem',    texto: 'De onde venho' },
  { href: '#vejo',      texto: 'O que eu vejo' },
  { href: '#escuta',    texto: 'O que eu ouvi' },
  { href: '#bandeiras', texto: 'O que vou fazer' },
]

/**
 * CABEÇALHO
 *
 * Desktop: barra alta, com respiro. A navegação ocupa a linha inteira abaixo do
 * lockup, em vez de espremer seis itens ao lado dele. Cabeçalho de campanha tem
 * que respirar: é a única moldura fixa da página.
 *
 * Celular: três barras. O painel abre por baixo do cabeçalho, ocupa só a altura
 * do conteúdo e escurece o resto, sem tomar a tela inteira. Fecha no Esc, no
 * toque fora e ao escolher um item.
 *
 * Sem `backdrop-filter`, que custa FPS no aparelho do público.
 */
export function Topo() {
  const [aberto, setAberto] = useState(false)

  useEffect(() => {
    if (!aberto) return
    const aoTeclar = (e: KeyboardEvent) => { if (e.key === 'Escape') setAberto(false) }
    document.addEventListener('keydown', aoTeclar)
    return () => document.removeEventListener('keydown', aoTeclar)
  }, [aberto])

  return (
    <header className="sticky top-0 z-50 bg-petroleo text-white">
      {/* ── linha da marca ── */}
      <div className="mv-shell flex h-[var(--topo-h)] items-center justify-between gap-4">
        <a
          href="#topo"
          onClick={() => setAberto(false)}
          className="shrink-0 no-underline"
          aria-label={`${candidato.nomeUrna}, ir para o topo`}
        >
          <Lockup className="text-[1.4rem] sm:text-[1.7rem] lg:text-[2rem]" />
        </a>

        <a href="#apoie" className="mv-btn mv-btn-amarelo hidden lg:inline-flex">
          Quero ajudar
          <IconeSeta tamanho={20} />
        </a>

        <button
          type="button"
          onClick={() => setAberto((v) => !v)}
          aria-expanded={aberto}
          aria-controls="menu-mobile"
          aria-label={aberto ? 'Fechar o menu' : 'Abrir o menu'}
          className="grid h-[52px] w-[52px] shrink-0 place-items-center rounded-md border-2 border-white/40 lg:hidden"
        >
          <span className="grid gap-[5px]" aria-hidden="true">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block h-[3px] w-[24px] rounded-full bg-white transition-transform duration-200"
                style={
                  aberto
                    ? i === 0
                      ? { transform: 'translateY(8px) rotate(45deg)' }
                      : i === 1
                        ? { opacity: 0 }
                        : { transform: 'translateY(-8px) rotate(-45deg)' }
                    : undefined
                }
              />
            ))}
          </span>
        </button>
      </div>

      {/* ── navegação do desktop: linha própria, com respiro ── */}
      <nav aria-label="Navegação principal" className="hidden border-t border-white/15 lg:block">
        <ul className="mv-shell flex items-stretch gap-8">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="flex h-[52px] items-center border-b-[3px] border-transparent font-display text-[1.0625rem] font-bold no-underline transition-colors hover:border-amarelo hover:text-amarelo"
              >
                {l.texto}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <BarraTricolor altura={4} />

      {/* ── painel do celular: só a altura do conteúdo ── */}
      {aberto && (
        <>
          <button
            type="button"
            aria-hidden="true"
            tabIndex={-1}
            onClick={() => setAberto(false)}
            className="fixed inset-0 top-0 z-[-1] h-dvh w-full cursor-default border-0 bg-[rgb(0_31_36/.55)] lg:hidden"
          />
          <nav
            id="menu-mobile"
            aria-label="Navegação principal"
            className="absolute inset-x-0 top-full border-b-4 border-amarelo bg-petroleo shadow-[0_18px_30px_rgba(0,0,0,.35)] lg:hidden"
          >
            <ul className="mv-shell flex flex-col py-2">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setAberto(false)}
                    className="flex min-h-[56px] items-center justify-center border-b border-white/12 font-display text-[1.125rem] font-bold no-underline last:border-b-0"
                  >
                    {l.texto}
                  </a>
                </li>
              ))}
              <li className="pt-3 pb-2">
                <a
                  href="#apoie"
                  onClick={() => setAberto(false)}
                  className="mv-btn mv-btn-amarelo w-full"
                >
                  Quero ajudar
                  <IconeSeta tamanho={20} />
                </a>
              </li>
            </ul>
          </nav>
        </>
      )}
    </header>
  )
}
