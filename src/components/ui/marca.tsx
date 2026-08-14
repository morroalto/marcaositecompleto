import Image from 'next/image'
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

/**
 * LOCKUP OFICIAL EM ARQUIVO, versão branca com fundo transparente
 * (`public/marca/lockup-branco.png`, do acervo da campanha).
 *
 * Onde a marca aparece sozinha, sobre fundo escuro, e precisa estar EXATA — o
 * cabeçalho e a tela de abertura — vale mais o arquivo do designer do que a
 * reconstrução em HTML: o desenho do "MARCÃO", o peso do "36.028" e a largura
 * da barra tricolor são decisões dele, não minhas.
 *
 * A reconstrução em texto (`Lockup`, acima) continua em uso onde o tamanho
 * varia muito ou onde ele precisa acompanhar o texto ao redor, como no rodapé:
 * ali ela escala sem perder nitidez e não custa uma requisição.
 *
 * `altura` é o que manda no tamanho; a largura vem da proporção do arquivo,
 * que é 3539 por 1500. Sempre com `alt` de verdade, porque é o nome dele.
 */
export function LockupArte({
  className, altura = 40, prioridade = false,
}: { className?: string; altura?: number; prioridade?: boolean }) {
  return (
    <Image
      src="/marca/lockup-branco.png"
      alt={`${candidato.nomeUrna}, ${candidato.numero}`}
      width={Math.round((altura * 3539) / 1500)}
      height={altura}
      priority={prioridade}
      className={cn('h-auto w-auto', className)}
      style={{ height: altura }}
    />
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
