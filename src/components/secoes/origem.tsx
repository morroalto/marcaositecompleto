import Image from 'next/image'
import { Cartaz } from '@/components/ui/marca'
import { triangulo } from '@/content/territorio'
import { biografia } from '@/content/facetas'
import { linhaDoTempo, selos, trajetoria } from '@/content/trajetoria'
import { MOSTRAR_PENDENCIAS } from '@/content/flags'

/**
 * DE ONDE EU VENHO
 *
 * A biografia em primeira pessoa ABRE, em prosa e com medida de leitura: é o
 * conteúdo mais forte da seção.
 *
 * Em 14/08/2026 entrou aqui a LINHA DO TEMPO do protótipo "Sul em Foco", que
 * o site não tinha: 1966, 1972, 1986, 1994, 2012, 2026. Ela responde a
 * pergunta que a prosa deixa aberta, que é "desde quando". Junto vieram os
 * quatro selos e a frase dele que fecha a seção.
 *
 * As três fotos de família viraram uma. As outras duas (o neto no estádio e o
 * casamento da filha) diziam a mesma coisa que a primeira, que já mostra a
 * família inteira, e a página estava pesada de foto. Elas continuam em
 * `public/fotos/`.
 *
 * Ordem narrativa: ele fala, a família aparece, a linha do tempo dá as datas,
 * e o card do Triângulo do Sul fecha fazendo a ponte para a candidatura.
 */
export function Origem() {
  const aRevisar = linhaDoTempo.filter((m) => !m.revisado).length

  return (
    <section id="origem" className="mv-secao bg-marinho text-white">
      <div className="mv-shell flex flex-col gap-12">

        {/* ── ele falando, com a foto da família ao lado ── */}
        <div className="grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-14">
          <div className="mx-auto flex max-w-[60ch] flex-col items-center gap-5 text-center sm:mx-0 sm:items-start sm:text-left">
            <p className="mv-kicker text-amarelo">De onde eu venho</p>
            <h2 className="text-[clamp(1.75rem,6.6vw,2.9rem)] font-extrabold tracking-tight">
              A campanha começou numa mesa de família,
              <br className="hidden sm:block" /> não num comitê.
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
              alt="Marcão sentado com a esposa Adriana, as três filhas e o neto, todos juntos"
              width={1200} height={675}
              sizes="(max-width: 1023px) 92vw, 46vw"
              loading="lazy"
              className="h-auto w-full rounded-[10px]"
            />
            <figcaption className="mt-3 text-center text-[1rem] text-[#C9DCF0] sm:text-left">
              Adriana, as filhas e o neto Marco Antônio.
            </figcaption>
          </figure>
        </div>

        {/* ── a linha do tempo, do protótipo Sul em Foco ── */}
        <div className="flex flex-col gap-8">
          <h3 className="text-center font-display text-[clamp(1.5rem,5.5vw,2.2rem)] font-extrabold tracking-tight sm:text-left">
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
            <p className="font-display text-[clamp(1.2rem,5vw,1.6rem)] leading-snug font-extrabold">
              “{trajetoria.citacao}”
            </p>
            <footer className="mt-2 text-[1rem] text-[#C9DCF0]">— Marcão Vivacqua</footer>
          </blockquote>

          {MOSTRAR_PENDENCIAS && aRevisar > 0 && (
            <p className="mv-todo">
              <b>TODO (T2), linha do tempo sem conferência: {aRevisar} de {linhaDoTempo.length}</b>
              Esta é a única parte do site que afirma data e cargo eletivo anterior. Conferir
              ano de nascimento, ano da mudança para Cachoeiro, ano do casamento e as
              legislaturas exatas dos mandatos de vereador (fonte: TSE). Depois marcar{' '}
              <code>revisado: true</code> em <code>content/trajetoria.ts</code>.
            </p>
          )}
        </div>

        {/* ── o movimento, que é a ponte para a candidatura ── */}
        <div className="flex flex-col items-center gap-5 rounded-[10px] border border-white/20 bg-white/[.07] p-7 text-center sm:items-start sm:p-9 sm:text-left">
          <h3 className="text-[clamp(1.5rem,6vw,2.2rem)]">
            <Cartaz className="text-amarelo" style={{ WebkitTextStrokeColor: 'var(--marinho-2)' }}>
              TRIÂNGULO DO SUL
            </Cartaz>
          </h3>
          <p className="max-w-[62ch] text-[1.0625rem] leading-relaxed text-[#D8E4F0] sm:text-[1.15rem]">
            Três cidades que dividem economia, estrada e problema:{' '}
            {triangulo.map((c) => c.nome).join(', ')}. O movimento nasceu antes da candidatura,
            e é dele que ela veio.
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
