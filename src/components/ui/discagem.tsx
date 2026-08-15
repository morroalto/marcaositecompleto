'use client'

import { useEffect, useState } from 'react'
import { VISOR, numeroTexto } from '@/content/numero'

/**
 * DISCAGEM
 *
 * O visor de telefone que digita sozinho, do protótipo aprovado
 * (`src/components/Numero.tsx`, função `Discagem`).
 *
 * Ele digita o texto do protótipo, "(028) 9 9999-9999", que é um telefone
 * ILUSTRATIVO: a peça toda existe para mostrar que o 028 é o código que o Sul
 * inteiro disca, e o 9 9999-9999 faz o papel de "qualquer número daqui". Não é
 * um contato da campanha e não está oferecido como tal em lugar nenhum do
 * site — quem quiser falar com a campanha tem os canais no fim da página.
 *
 * Quem pediu menos movimento no sistema recebe o número inteiro, parado: o
 * efeito é enfeite e não pode ser a única forma de ler a informação. Por isso
 * o texto completo também vai no `mv-sr`, sempre.
 *
 * O estado nasce CHEIO, e não vazio, por dois motivos: é o que o HTML do
 * servidor entrega a quem está sem JavaScript, e é o que deixa o efeito
 * começar a contar de dentro do `setInterval`. Zerar o estado no corpo do
 * efeito seria render em cascata, e o lint do React barra com razão.
 */
export function Discagem() {
  const [ate, setAte] = useState(VISOR.length)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // começa no fim do ciclo: o primeiro tique é que zera e recomeça a digitar
    let i = VISOR.length + 1
    const id = setInterval(() => {
      i = i > VISOR.length + 1 ? 0 : i + 1
      setAte(Math.min(i, VISOR.length))
    }, 180)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="mv-fone mx-auto w-[min(20rem,86%)]">
      {/* altura travada: o texto cresce caractere a caractere e não pode
          empurrar o que vem embaixo a cada 180 ms */}
      <div className="flex h-[5.5rem] flex-col justify-center">
        <p
          aria-hidden="true"
          className="font-display text-[clamp(1.15rem,4.6vw,1.5rem)] leading-none font-black tracking-wide text-white tabular-nums"
        >
          {VISOR.slice(0, ate)}
          <span className="mv-cursor text-amarelo">|</span>
        </p>
        <p className="mv-pisca mt-3 text-[0.9375rem] text-white/70">{numeroTexto.chamando}</p>
      </div>
      <span className="mv-sr">{VISOR}</span>
    </div>
  )
}
