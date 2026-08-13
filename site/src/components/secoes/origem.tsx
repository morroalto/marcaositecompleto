import Image from 'next/image'
import { Cartaz } from '@/components/ui/marca'
import { triangulo } from '@/content/territorio'
import { biografia } from '@/content/facetas'

/**
 * DE ONDE EU VENHO
 *
 * A biografia em primeira pessoa é o conteúdo mais forte da seção, então ela
 * ABRE, em prosa e com medida de leitura. Antes estava no rodapé da seção, em
 * três colunas finas, e o primeiro bloco repetia o título da própria seção:
 * lia como nota de pé de página, que é o oposto do que o texto merece.
 *
 * Ordem narrativa: ele fala, a família aparece, e o card do Triângulo do Sul
 * fecha fazendo a ponte para a candidatura. Cada elemento responde ao anterior.
 */
export function Origem() {
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

        {/* ── duas fotos de apoio, do mesmo tamanho ── */}
        <ul className="grid gap-4 sm:grid-cols-2">
          <li>
            <Image
              src="/fotos/familia-neto.webp"
              alt="Marcão e o neto com camisa do Fluminense, no estádio"
              width={900} height={1200}
              sizes="(max-width: 639px) 92vw, 46vw"
              loading="lazy"
              className="h-full w-full rounded-[10px] object-cover"
            />
          </li>
          <li>
            <Image
              src="/fotos/familia-casamento.webp"
              alt="Marcão levando a filha Letícia ao altar, no dia do casamento"
              width={900} height={1200}
              sizes="(max-width: 639px) 92vw, 46vw"
              loading="lazy"
              className="h-full w-full rounded-[10px] object-cover"
            />
          </li>
        </ul>

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
