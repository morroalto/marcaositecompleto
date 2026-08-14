import { candidato } from '@/content/candidato'
import { cn } from '@/lib/utils'

/**
 * LOCKUP OFICIAL: MARCÃO / VIVACQUA + barra tricolor + 36.028
 *
 * Reconstruído em HTML porque não existe vetor: no acervo o lockup só aparece
 * dentro de PSD e rasterizado no manual. Como texto, ele escala, fica nítido
 * em qualquer densidade e não custa uma requisição.
 *
 * `soletra` liga o número dígito a dígito para o leitor de tela. Use no H1 e
 * na barra fixa. Nos demais lugares o lockup é a marca, e é lido como nome.
 */
export function Lockup({
  className, comoH1 = false, soletra = false,
}: { className?: string; comoH1?: boolean; soletra?: boolean }) {
  const Tag = comoH1 ? 'h1' : 'span'
  return (
    <Tag className={cn('mv-lockup', className)}>
      <span className="nome">MARCÃO</span>
      <span className="sob">VIVACQUA</span>
      <span className="num" aria-hidden={soletra || undefined}>{candidato.numero}</span>
      <span className="barra" aria-hidden="true"><i /><i /><i /></span>
      {soletra && (
        <span className="mv-sr">
          {`${candidato.nomeUrna}, ${candidato.cargo} pelo ${candidato.uf}. `}
          {`Na urna, digite ${candidato.numeroSoletrado}.`}
        </span>
      )}
    </Tag>
  )
}

/** Barra tricolor. Só dentro do lockup, ou como fio de borda de header e rodapé. */
export function BarraTricolor({ className, altura = 6 }: { className?: string; altura?: number }) {
  return (
    <div className={cn('flex w-full', className)} style={{ height: altura }} aria-hidden="true">
      <i className="flex-1 bg-verde" />
      <i className="flex-1 bg-laranja" />
      <i className="flex-1 bg-amarelo" />
    </div>
  )
}

/** Hachura das páginas 2 e 3 do manual. Decorativa, sempre. */
export function Hachura({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return <div className={cn('mv-hachura', className)} style={style} aria-hidden="true" />
}

/** Estilo cartaz: itálico pesado, contorno branco, sombra dura. */
export function Cartaz({
  children, className, style,
}: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return <span className={cn('mv-cartaz', className)} style={style}>{children}</span>
}
