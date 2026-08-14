import Image from 'next/image'
import { Cartaz } from '@/components/ui/marca'
import { triangulo } from '@/content/territorio'
import { biografia } from '@/content/facetas'
import { linhaDoTempo, selos, trajetoria } from '@/content/trajetoria'
import { MOSTRAR_PENDENCIAS } from '@/content/flags'

/**
 * DE ONDE EU VENHO
 *
 * A biografia em primeira pessoa ABRE, em prosa e com medida de leitura: Ã© o
 * conteÃºdo mais forte da seÃ§Ã£o.
 *
 * Em 14/08/2026 entrou aqui a LINHA DO TEMPO do protÃ³tipo "Sul em Foco", que
 * o site nÃ£o tinha: 1966, 1972, 1986, 1994, 2012, 2026. Ela responde a
 * pergunta que a prosa deixa aberta, que Ã© "desde quando". Junto vieram os
 * quatro selos e a frase dele que fecha a seÃ§Ã£o.
 *
 * As trÃªs fotos de famÃ­lia viraram uma. As outras duas (o neto no estÃ¡dio e o
 * casamento da filha) diziam a mesma coisa que a primeira, que jÃ¡ mostra a
 * famÃ­lia inteira, e a pÃ¡gina estava pesada de foto. Elas continuam em
 * `public/fotos/`.
 *
 * Ordem narrativa: ele fala, a famÃ­lia aparece, a linha do tempo dÃ¡ as datas,
 * e o card do TriÃ¢ngulo do Sul fecha fazendo a ponte para a candidatura.
 */
export function Origem() {
  const aRevisar = linhaDoTempo.filter((m) => !m.revisado).length

  return (
    <section id="origem" className="mv-secao bg-marinho text-white">
      <div className="mv-shell flex flex-col gap-12">

        {/* â”€â”€ ele falando, com a foto da famÃ­lia ao lado â”€â”€ */}
        <div className="grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-14">
          <div className="mx-auto flex max-w-[60ch] flex-col items-center gap-5 text-center sm:mx-0 sm:items-start sm:text-left">
            <p className="mv-kicker text-amarelo">De onde eu venho</p>
            <h2 className="text-[clamp(1.45rem,4.6vw,2.25rem)] font-extrabold tracking-tight">
              A campanha comeÃ§ou numa mesa de famÃ­lia,
              <br className="hidden sm:block" /> nÃ£o num comitÃª.
            </h2>

            {biografia.blocos.map((b) => (
              <p
                key={b.titulo}
                className="text-[1.0625rem] leading-relaxed text-[#D8E4F0] sm:text-[1.15rem]"
              >
                {b.texto}
              </p>
            ))}

            <ul className="flex flex-wrap justify-center gap-2 sm:justify-start">
              {selos.map((s) => (
                <li key={s.texto}>
                  <span className="mv-chip border-white/40 text-[0.9375rem] text-white">
                    {s.texto}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <figure className="m-0">
            <Image
              src="/fotos/familia-todos.webp"
              alt="MarcÃ£o sentado com a esposa Adriana, as trÃªs filhas e o neto, todos juntos"
              width={1200} height={675}
              sizes="(max-width: 1023px) 92vw, 46vw"
              loading="lazy"
              className="h-auto w-full rounded-[10px]"
            />
            <figcaption className="mt-3 text-center text-[1rem] text-[#C9DCF0] sm:text-left">
              Adriana, as filhas e o neto Marco AntÃ´nio.
            </figcaption>
          </figure>
        </div>

        {/* â”€â”€ a linha do tempo, do protÃ³tipo Sul em Foco â”€â”€ */}
        <div className="flex flex-col gap-8">
          <h3 className="text-center font-display text-[clamp(1.3rem,4vw,1.8rem)] font-extrabold tracking-tight sm:text-left">
            {trajetoria.titulo}
          </h3>

          <ol className="mv-tempo mv-tempo-escura ml-2 sm:ml-6">
            {linhaDoTempo.map((m) => (
              <li key={m.ano}>
                <p className="font-display text-[1.4rem] leading-none font-black text-amarelo tabular-nums">
                  {m.ano}
                </p>
                <h4 className="mt-2 font-display text-[1.15rem] font-extrabold">{m.titulo}</h4>
                <p className="mt-1 max-w-[62ch] text-[1.0625rem] leading-relaxed text-[#D8E4F0]">
                  {m.texto}
                </p>
              </li>
            ))}
          </ol>

          <blockquote className="m-0 border-l-4 border-amarelo pl-6">
            <p className="font-display text-[clamp(1.1rem,3.6vw,1.4rem)] leading-snug font-extrabold">
              â€œ{trajetoria.citacao}â€
            </p>
            <footer className="mt-2 text-[1rem] text-[#C9DCF0]">â€” MarcÃ£o Vivacqua</footer>
          </blockquote>

          {MOSTRAR_PENDENCIAS && aRevisar > 0 && (
            <p className="mv-todo">
              <b>TODO (T2), linha do tempo sem conferÃªncia: {aRevisar} de {linhaDoTempo.length}</b>
              Esta Ã© a Ãºnica parte do site que afirma data e cargo eletivo anterior. Conferir
              ano de nascimento, ano da mudanÃ§a para Cachoeiro, ano do casamento e as
              legislaturas exatas dos mandatos de vereador (fonte: TSE). Depois marcar{' '}
              <code>revisado: true</code> em <code>content/trajetoria.ts</code>.
            </p>
          )}
        </div>

        {/* â”€â”€ o movimento, que Ã© a ponte para a candidatura â”€â”€ */}
        <div className="flex flex-col items-center gap-5 rounded-[10px] border border-white/20 bg-white/[.07] p-7 text-center sm:items-start sm:p-9 sm:text-left">
          <h3 className="text-[clamp(1.3rem,4.4vw,1.9rem)]">
            <Cartaz className="text-amarelo" style={{ WebkitTextStrokeColor: 'var(--marinho-2)' }}>
              TRIÃ‚NGULO DO SUL
            </Cartaz>
          </h3>
          <p className="max-w-[62ch] text-[1.0625rem] leading-relaxed text-[#D8E4F0] sm:text-[1.15rem]">
            TrÃªs cidades que dividem economia, estrada e problema:{' '}
            {triangulo.map((c) => c.nome).join(', ')}. O movimento nasceu antes da candidatura,
            e Ã© dele que ela veio.
          </p>
          <ul className="flex flex-wrap justify-center gap-2 sm:justify-start">
            {triangulo.map((c) => (
              <li key={c.slug}>
                <span className="mv-chip border-amarelo bg-amarelo text-[#003B44]">{c.nome}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
