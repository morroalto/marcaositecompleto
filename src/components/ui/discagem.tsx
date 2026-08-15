'use client'

import { useEffect, useState } from 'react'
import { candidato } from '@/content/candidato'

/**
 * DISCAGEM
 *
 * Efeito trazido do protótipo "Sul em Foco" (`src/components/Numero.tsx`,
 * função `Discagem`): um visor de telefone que digita o número sozinho.
 *
 * Duas mudanças em relação ao protótipo:
 *
 * 1. Lá o visor digitava "(028) 9 9999-9999", um telefone que não existe.
 *    Número de contato falso num site de campanha é problema, e o cadastro do
 *    CNPJ traz o telefone como não informado. Aqui o visor digita o NÚMERO DA
 *    URNA, dígito a dígito, que é exatamente o gesto que se pede ao eleitor.
 *
 * 2. Quem pediu menos movimento no sistema recebe o número inteiro, parado.
 *    O efeito é enfeite: não pode ser a única forma de ler a informação. Por
 *    isso o número completo também vai no `mv-sr`, sempre.
 *
 * O estado nasce CHEIO, e não vazio, por dois motivos: é o que o HTML do
 * servidor entrega a quem está sem JavaScript, e é o que deixa o efeito
 * começar a contar de dentro do `setInterval`. Zerar o estado no corpo do
 * efeito seria render em cascata, e o lint do React barra com razão.
 */
export function Discagem() {
  const digitos = candidato.numero.replace(/\D/g, '') // 36028
  const [ate, setAte] = useState(digitos.length)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // começa no fim do ciclo: o primeiro tique é que zera e recomeça a digitar
    let i = digitos.length + 1
    const id = setInterval(() => {
      // pausa de um tempo com o número cheio antes de recomeçar
      i = i > digitos.length + 1 ? 0 : i + 1
      setAte(Math.min(i, digitos.length))
    }, 420)
    return () => clearInterval(id)
  }, [digitos.length])

  return (
    <div className="mv-fone flex items-center justify-between gap-4">
      {/* largura do número travada em `ch`: ele cresce dígito a dígito e, solto,
          empurraria o "chamando o Sul" para os lados a cada 420 ms */}
      <p
        aria-hidden="true"
        className="w-[6.5ch] shrink-0 font-display text-[clamp(1.7rem,5.5vw,2.2rem)] leading-none font-black tracking-[.12em] text-white tabular-nums"
      >
        {digitos.slice(0, ate)}
        <span className="mv-cursor text-amarelo">|</span>
      </p>
      <p className="mv-pisca text-right font-display text-[0.6875rem] font-extrabold tracking-[.14em] text-amarelo uppercase">
        Chamando
        <br />
        o Sul…
      </p>
      <span className="mv-sr">
        Na urna, digite {candidato.numeroSoletrado}.
      </span>
    </div>
  )
}
