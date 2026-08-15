import { linhaDoTempo, linhaDoTempoTexto } from '@/content/trajetoria'

/**
 * LINHA DO TEMPO
 *
 * Seis marcos, no formato do protótipo aprovado: fio VERTICAL, o ano na
 * margem esquerda, a bolinha em cima do fio e, ao lado, o emoji com o título e
 * o texto.
 *
 * Já tentei aqui uma grade de três colunas com o fio deitado. Ficou errado por
 * um motivo simples: linha do tempo se lê de cima para baixo, e em grade a
 * pessoa precisa varrer a linha, voltar, descer e varrer de novo. Com seis
 * marcos curtos, o vertical cabe sem virar rolagem infinita.
 *
 * No celular o ano fica em cima do título; a partir de `md` ele sai para a
 * margem, alinhado ao topo do marco, que é o desenho do protótipo.
 */
export function LinhaDoTempo() {
  return (
    <section id="linha-do-tempo" className="mv-secao bg-papel">
      <div className="mv-shell flex flex-col gap-9">
        <div className="flex max-w-[62ch] flex-col gap-4 text-center sm:text-left">
          <p className="mv-kicker text-[#2F5C1B]">{linhaDoTempoTexto.kicker}</p>
          <h2 className="text-[clamp(1.45rem,4.6vw,2.25rem)] font-extrabold tracking-tight">
            {linhaDoTempoTexto.titulo}
          </h2>
          <p className="text-[1.0625rem] leading-relaxed text-fraca sm:text-[1.15rem]">
            {linhaDoTempoTexto.chamada}
          </p>
        </div>

        <div className="mt-2 md:pl-20">
          <ol className="mv-tempo">
            {linhaDoTempo.map((m) => (
              <li key={m.ano}>
                <span className="mv-tempo-ano">{m.ano}</span>
                <h3 className="flex items-center gap-3 font-display text-[1.15rem] font-extrabold text-marinho">
                  <span className="text-[1.75rem] leading-none" aria-hidden="true">
                    {m.icone}
                  </span>
                  {m.titulo}
                </h3>
                <p className="mt-2 text-[1.0625rem] leading-relaxed text-fraca">{m.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
