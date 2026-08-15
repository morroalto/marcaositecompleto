import { linhaDoTempo, linhaDoTempoTexto } from '@/content/trajetoria'

/**
 * LINHA DO TEMPO (seção 4 do copy oficial)
 *
 * Treze marcos, de 1966 a 2026, com o texto aprovado pela campanha.
 *
 * O fio: vertical no celular, o formato clássico, e DEITADO no desktop,
 * atravessando os itens da fileira com o ponto de cada marco pousado em cima.
 * Card com borda aqui não funcionava — caixas soltas numa grade leem como
 * avisos, não como linha do tempo.
 *
 * No desktop são três colunas, e a leitura é por linha. O fio fica contínuo
 * porque a grade não tem vão horizontal (`column-gap: 0`) e o respiro vem de
 * padding interno; no último item de cada fileira ele se dissolve em
 * gradiente, senão bate na borda como se a história continuasse fora da
 * página.
 *
 * O copy pede a timeline vertical. No celular é exatamente isso; no desktop,
 * treze marcos empilhados dariam quatro telas de rolagem, e a grade resolve
 * sem perder a ordem de leitura.
 */
export function LinhaDoTempo() {
  return (
    <section id="linha-do-tempo" className="mv-secao">
      <div className="mv-shell flex flex-col gap-9">
        <div className="flex max-w-[62ch] flex-col gap-4 text-center sm:text-left">
          <p className="mv-kicker text-[#2F5C1B]">{linhaDoTempoTexto.kicker}</p>
          <h2 className="text-[clamp(1.45rem,4.6vw,2.25rem)] font-extrabold tracking-tight">
            {linhaDoTempoTexto.titulo}
          </h2>
          <p className="hidden text-[1.0625rem] leading-relaxed text-fraca sm:block sm:text-[1.15rem]">
            {linhaDoTempoTexto.chamada}
          </p>
        </div>

        <ol className="mv-tempo">
          {linhaDoTempo.map((m) => (
            <li key={`${m.ano}-${m.titulo}`}>
              <p className="font-display text-[1.75rem] leading-none font-black text-laranja tabular-nums">
                {m.ano}
              </p>
              <h3 className="mt-2 text-[1.15rem] font-extrabold">{m.titulo}</h3>
              <p className="mt-1 text-[1.0625rem] leading-relaxed text-fraca">{m.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
