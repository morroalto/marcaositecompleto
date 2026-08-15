import { LockupArte } from '@/components/ui/marca'
import { candidato } from '@/content/candidato'

/**
 * TELA DE ABERTURA
 *
 * Sem estado React e sem `useEffect`: a saída é 100% CSS, e a decisão de
 * "já vi nesta sessão" acontece num script inline que roda ANTES da primeira
 * pintura. Isso evita três problemas que tela de loading costuma trazer:
 *
 *  1. flash da abertura para quem já viu, ou para quem pediu menos movimento;
 *  2. cascata de re-render por `setState` dentro de efeito;
 *  3. dependência de hidratação, ou seja, se o JS falhar a tela some do mesmo jeito.
 *
 * O conteúdo da página já está no DOM, renderizado no servidor. A abertura é
 * só uma camada por cima, `aria-hidden`, fora do fluxo de foco, `position:
 * fixed` (zero CLS) e com `pointer-events: none` desde o começo, para nunca
 * bloquear um toque.
 */
export function Carregando() {
  return (
    <>
      <script
        // roda antes da pintura: marca a sessão e evita o flash na segunda visita
        dangerouslySetInnerHTML={{
          __html:
            "try{var d=document.documentElement;" +
            "if(sessionStorage.getItem('mv-abertura')==='1'){d.classList.add('mv-visto')}" +
            "else{sessionStorage.setItem('mv-abertura','1')}}catch(e){}",
        }}
      />
      <div className="mv-abertura" aria-hidden="true">
        <div className="mv-abertura-cx">
          {/* mesma arte oficial do cabeçalho, maior. `prioridade` porque ela é
              a primeira coisa que aparece na tela */}
          <div className="w-[min(78vw,22rem)]">
            <LockupArte fluido prioridade />
          </div>
          <div className="mv-abertura-trilho">
            <span className="mv-abertura-barra" />
          </div>
          <p className="font-display text-[0.9375rem] font-bold tracking-[0.16em] text-amarelo uppercase">
            {candidato.slogan}
          </p>
        </div>
      </div>
    </>
  )
}
