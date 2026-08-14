import { IconeSeta } from '@/components/ui/icones'
import { candidato } from '@/content/candidato'

/**
 * BARRA FIXA DO CELULAR
 *
 * A conversão fica no terço inferior da tela, no alcance do polegar, visível
 * em qualquer ponto da rolagem. É o único lugar onde o número se repete.
 * Some no desktop, onde o CTA já vive no cabeçalho.
 */
export function BarraFixa() {
  return (
    <div className="mv-nao-imprime fixed inset-x-0 bottom-0 z-40 flex border-t-4 border-amarelo bg-petroleo lg:hidden">
      <span className="flex min-h-[var(--barra-h)] flex-[0_0_42%] flex-col items-center justify-center leading-tight text-white">
        <small aria-hidden="true" className="font-display text-[0.6875rem] font-bold tracking-[0.12em] uppercase opacity-75">
          Urna
        </small>
        <b aria-hidden="true" className="font-display text-[1.4rem] font-black tabular-nums">
          {candidato.numero}
        </b>
        <span className="mv-sr">Na urna, digite {candidato.numeroSoletrado}</span>
      </span>

      <a
        href="#apoie"
        className="flex min-h-[var(--barra-h)] flex-1 items-center justify-center gap-2 bg-laranja font-display text-[1.0625rem] font-extrabold text-[#08222A] no-underline"
      >
        Quero ajudar
        <IconeSeta tamanho={20} />
      </a>
    </div>
  )
}
