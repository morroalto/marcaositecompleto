'use client'

import { useEffect, useState } from 'react'
import { Lockup, BarraTricolor } from '@/components/ui/marca'
import { candidato } from '@/content/candidato'

/**
 * Seis itens, e não os nove que a página tem. Menu de campanha é atalho, não
 * sumário: com nove, nenhum é lido. Ficaram de fora "De onde venho", "O que eu
 * vejo" e "O que eu ouvi", que a pessoa alcança rolando a partir de Trajetória.
 */
const LINKS = [
  { href: '#numero',     texto: 'O 028' },
  { href: '#quem-e',     texto: 'Quem é' },
  { href: '#trajetoria', texto: 'Trajetória' },
  { href: '#bandeiras',  texto: 'O que defendemos' },
  { href: '#presenca',   texto: 'Presença' },
  { href: '#agenda',     texto: 'Agenda' },
]

/**
 * CABEÇALHO
 *
 * Refeito em 14/08/2026, no modelo de nikolasferreira.com.br e
 * brunopeixoto.com: TRANSPARENTE sobre a arte de abertura, e sólido a partir
 * do momento em que a página rola. Antes era uma barra petróleo opaca ocupando
 * duas linhas (lockup em cima, seis itens de menu embaixo), que empurrava o
 * hero para baixo e roubava a primeira tela inteira.
 *
 * Agora é UMA linha: marca à esquerda e navegação à direita. O botão "Quero
 * ajudar" que ficava aqui saiu em 14/08/2026, junto com o formulário e com a
 * barra fixa do celular: o site deixou de pedir cadastro.
 *
 * `fixed`, não `sticky`: é o que deixa a arte do hero começar debaixo dele.
 * Como o cabeçalho some do fluxo, ele não desloca o conteúdo, e o
 * `scroll-padding-top` do `html` continua respondendo pela âncora.
 *
 * Sem `backdrop-filter`, que custa FPS no aparelho do público.
 */
export function Topo() {
  const [aberto, setAberto] = useState(false)
  const [rolou, setRolou] = useState(false)

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 24)
    // no próximo quadro, e não no corpo do efeito: cobre quem recarrega a
    // página já rolada sem disparar render em cascata
    const quadro = requestAnimationFrame(aoRolar)
    window.addEventListener('scroll', aoRolar, { passive: true })
    return () => {
      cancelAnimationFrame(quadro)
      window.removeEventListener('scroll', aoRolar)
    }
  }, [])

  useEffect(() => {
    if (!aberto) return
    const aoTeclar = (e: KeyboardEvent) => { if (e.key === 'Escape') setAberto(false) }
    document.addEventListener('keydown', aoTeclar)
    return () => document.removeEventListener('keydown', aoTeclar)
  }, [aberto])

  // aberto no celular conta como "sólido": menu transparente é ilegível
  const solido = rolou || aberto

  return (
    <header
      className={[
        'mv-nao-imprime fixed inset-x-0 top-0 z-50 text-white transition-colors duration-300',
        solido ? 'bg-petroleo shadow-[0_6px_18px_rgba(0,0,0,.28)]' : 'bg-transparent',
      ].join(' ')}
    >
      <div className="mv-shell flex h-[var(--topo-h)] items-center justify-between gap-5">
        <a
          href="#topo"
          onClick={() => setAberto(false)}
          className="shrink-0 no-underline drop-shadow-[0_2px_6px_rgba(0,0,0,.45)]"
          aria-label={`${candidato.nomeUrna}, ir para o topo`}
        >
          <Lockup className="text-[1.15rem] sm:text-[1.3rem] lg:text-[1.45rem]" />
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="flex h-[var(--topo-h)] items-center border-b-[3px] border-transparent font-display text-[0.9375rem] font-bold no-underline drop-shadow-[0_2px_6px_rgba(0,0,0,.45)] transition-colors hover:border-amarelo hover:text-amarelo"
                >
                  {l.texto}
                </a>
              </li>
            ))}
          </ul>
        </nav>


        <button
          type="button"
          onClick={() => setAberto((v) => !v)}
          aria-expanded={aberto}
          aria-controls="menu-mobile"
          aria-label={aberto ? 'Fechar o menu' : 'Abrir o menu'}
          className="grid h-[48px] w-[48px] shrink-0 place-items-center rounded-md border-2 border-white/45 bg-[rgb(0_31_36/.35)] lg:hidden"
        >
          <span className="grid gap-[5px]" aria-hidden="true">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block h-[3px] w-[22px] rounded-full bg-white transition-transform duration-200"
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

      {/* o fio tricolor só existe quando a barra é sólida: sobre a arte ele
          vira uma listra solta atravessando a peça */}
      {solido && <BarraTricolor altura={3} />}

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
                    className="flex min-h-[54px] items-center justify-center border-b border-white/12 font-display text-[1.0625rem] font-bold no-underline last:border-b-0"
                  >
                    {l.texto}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </header>
  )
}
