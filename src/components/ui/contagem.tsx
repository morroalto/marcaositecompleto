'use client'

import { useEffect, useState } from 'react'

interface Tempo { dias: number; horas: number; minutos: number; segundos: number }

function faltam(alvoISO: string): Tempo {
  const ms = Math.max(0, new Date(alvoISO).getTime() - Date.now())
  const s = Math.floor(ms / 1000)
  return {
    dias: Math.floor(s / 86400),
    horas: Math.floor((s % 86400) / 3600),
    minutos: Math.floor((s % 3600) / 60),
    segundos: s % 60,
  }
}

/**
 * CONTAGEM REGRESSIVA
 *
 * Relógio de verdade: dias, horas, minutos e segundos, andando de segundo em
 * segundo até as 8h do dia 4 de outubro de 2026, que é a abertura das urnas.
 *
 * HIDRATAÇÃO. O servidor e o navegador não leem o relógio no mesmo instante,
 * então calcular o tempo no primeiro render dos dois lados dá HTML diferente e
 * o React reclama. Por isso o servidor entrega só os DIAS, que ele já sabe
 * calcular (`diasIniciais`), com os outros campos em traço; o relógio começa a
 * andar no primeiro quadro do navegador. Ninguém vê o traço na prática, e o
 * HTML dos dois lados é idêntico.
 *
 * A leitura vai em `requestAnimationFrame`, e não no corpo do efeito, pelo
 * mesmo motivo do cabeçalho: `setState` síncrono ali é render em cascata e o
 * lint do React barra.
 *
 * `tabular-nums` em todos os números: sem isso a largura muda a cada segundo e
 * a faixa inteira treme.
 */
export function Contagem({ alvo, diasIniciais }: { alvo: string; diasIniciais: number }) {
  const [t, setT] = useState<Tempo | null>(null)

  useEffect(() => {
    const ler = () => setT(faltam(alvo))
    const quadro = requestAnimationFrame(ler)
    const id = setInterval(ler, 1000)
    return () => {
      cancelAnimationFrame(quadro)
      clearInterval(id)
    }
  }, [alvo])

  const dois = (n: number) => String(n).padStart(2, '0')

  const campos: { valor: string; rotulo: string }[] = [
    { valor: t ? String(t.dias) : String(diasIniciais), rotulo: t?.dias === 1 ? 'dia' : 'dias' },
    { valor: t ? dois(t.horas) : '--', rotulo: 'horas' },
    { valor: t ? dois(t.minutos) : '--', rotulo: 'min' },
    { valor: t ? dois(t.segundos) : '--', rotulo: 'seg' },
  ]

  return (
    <div
      className="grid grid-cols-4 gap-2 sm:gap-3"
      role="timer"
      aria-live="off"
      aria-label={`Faltam ${diasIniciais} dias para a eleição`}
    >
      {campos.map((c) => (
        <div
          key={c.rotulo}
          className="flex flex-col items-center gap-1 rounded-[12px] bg-white/[.10] px-2 py-4 text-center"
        >
          <span className="font-display text-[clamp(1.9rem,7vw,3rem)] leading-none font-black text-amarelo tabular-nums">
            {c.valor}
          </span>
          <span className="font-display text-[0.6875rem] font-extrabold tracking-[0.16em] text-white/70 uppercase">
            {c.rotulo}
          </span>
        </div>
      ))}
    </div>
  )
}
