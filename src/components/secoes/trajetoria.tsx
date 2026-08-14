import { linhaDoTempo, trajetoria } from '@/content/trajetoria'
import { MOSTRAR_PENDENCIAS } from '@/content/flags'

/**
 * TRAJETÓRIA
 *
 * Seção própria desde 14/08/2026. A linha do tempo estava enfiada no fim de
 * "De onde eu venho", como apêndice, e desenhada como fio vertical com seis
 * itens empilhados: no celular davam quase duas telas de rolagem, e no
 * desktop sobrava metade da largura vazia à direita do fio.
 *
 * Agora é GRADE de três colunas, e a leitura é por linha: 1966, 1972, 1986 em
 * cima; 1994, 2012, 2026 embaixo. O ano é o que organiza, então ele é a maior
 * coisa do card, e um fio horizontal costura os cards de cada linha.
 *
 * Todo o conteúdo veio do protótipo "Sul em Foco", e continua marcado como não
 * revisado: é a única parte do site que afirma data e cargo eletivo anterior.
 */
export function Trajetoria() {
  const aRevisar = linhaDoTempo.filter((m) => !m.revisado).length

  return (
    <section id="trajetoria" className="mv-secao">
      <div className="mv-shell flex flex-col gap-9">
        <div className="flex max-w-[62ch] flex-col gap-4 text-center sm:text-left">
          <p className="mv-kicker text-[#2F5C1B]">{trajetoria.kicker}</p>
          <h2 className="text-[clamp(1.45rem,4.6vw,2.25rem)] font-extrabold tracking-tight">
            {trajetoria.titulo}
          </h2>
          <p className="text-[1.0625rem] leading-relaxed text-fraca sm:text-[1.15rem]">
            {trajetoria.paragrafos[0]}
          </p>
        </div>

        {/* `.mv-tempo` desenha o fio: vertical no celular, deitado no desktop,
            com o ponto de cada marco pousado em cima dele. Card com borda aqui
            não funcionava: seis caixas soltas numa grade não leem como linha
            do tempo, leem como seis avisos. */}
        <ol className="mv-tempo">
          {linhaDoTempo.map((m) => (
            <li key={m.ano}>
              <p className="font-display text-[1.75rem] leading-none font-black text-laranja tabular-nums">
                {m.ano}
              </p>
              <h3 className="mt-2 text-[1.15rem] font-extrabold">{m.titulo}</h3>
              <p className="mt-1 text-[1.0625rem] leading-relaxed text-fraca">{m.texto}</p>
            </li>
          ))}
        </ol>

        {MOSTRAR_PENDENCIAS && aRevisar > 0 && (
          <p className="mv-todo">
            <b>TODO (T2), linha do tempo sem conferência: {aRevisar} de {linhaDoTempo.length}</b>
            Esta é a única parte do site que afirma data e cargo eletivo anterior. Conferir ano
            de nascimento, ano da mudança para Cachoeiro, ano do casamento e as legislaturas
            exatas dos mandatos de vereador (fonte: TSE). Depois marcar{' '}
            <code>revisado: true</code> em <code>content/trajetoria.ts</code>.
          </p>
        )}
      </div>
    </section>
  )
}
