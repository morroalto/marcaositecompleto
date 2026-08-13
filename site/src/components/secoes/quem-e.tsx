import Image from 'next/image'
import { facetas } from '@/content/facetas'
import { candidato } from '@/content/candidato'
import { MOSTRAR_PENDENCIAS } from '@/content/flags'

/**
 * QUEM É O MARCÃO
 *
 * O elemento assinatura da página. Sete fotos do mesmo homem em sete papéis,
 * do acervo da própria campanha: pai, avô, marido, homem do campo,
 * empreendedor, oficial de justiça, candidato.
 *
 * Por que isso e não uma bio: currículo em bullet não convence ninguém, e
 * "trajetória de sucesso" é o clichê nº 1 de site de candidato. Aqui a
 * biografia é mostrada, não afirmada, e cada foto é verificável porque é ele.
 *
 * Rolagem horizontal com `scroll-snap` nativo. Sem carrossel de biblioteca,
 * sem JavaScript: funciona com o dedo, com a roda do mouse e com o teclado,
 * porque cada item é focável de verdade.
 */
export function QuemE() {
  const faltando = facetas.filter((f) => !f.fala).length

  return (
    <section id="quem-e" className="mv-secao bg-papel">
      <div className="mv-shell flex flex-col gap-7">
        <div className="mx-auto flex max-w-[56ch] flex-col items-center gap-4 text-center sm:mx-0 sm:items-start sm:text-left">
          <p className="mv-kicker text-[#2F5C1B]">Quem é</p>
          <h2 className="text-[clamp(1.75rem,6.6vw,3rem)] font-extrabold tracking-tight">
            Antes de ser candidato, ele já era
            <br className="hidden sm:block" /> outras seis coisas.
          </h2>
          <p className="text-[1.0625rem] leading-relaxed text-fraca sm:text-[1.15rem]">
            {candidato.nomeCivil}. No Sul, todo mundo chama de Marcão. Estas são fotos do
            acervo da família e do trabalho dele, não de banco de imagem. Arraste para o lado.
          </p>
        </div>
      </div>

      {/* sangra até a borda da tela no celular: cabe mais foto sem apertar */}
      <ul
        className="mt-2 flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto scroll-px-[var(--pad)] px-[var(--pad)] pb-4 [scrollbar-width:thin]"
        style={{ scrollBehavior: 'smooth' }}
      >
        {facetas.map((f, i) => (
          <li
            key={f.slug}
            className="w-[74vw] max-w-[19rem] shrink-0 snap-start sm:w-[46vw] lg:w-[22vw]"
          >
            <figure className="m-0 flex h-full flex-col overflow-hidden rounded-[10px] bg-white shadow-[0_2px_0_var(--linha)]">
              <div className="relative">
                <Image
                  src={`/fotos/${f.foto}.webp`}
                  alt={f.alt}
                  width={900}
                  height={1200}
                  sizes="(max-width: 640px) 74vw, (max-width: 1023px) 46vw, 22vw"
                  loading={i < 2 ? 'eager' : 'lazy'}
                  className="h-auto w-full"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-[linear-gradient(to_top,rgb(0_59_68/.92),transparent)] px-4 pt-10 pb-4">
                  <span className="font-display text-[1.25rem] font-black text-white">
                    {f.papel}
                  </span>
                </figcaption>
              </div>
              {f.fala ? (
                <p className="grow px-4 py-4 text-[1.0625rem] leading-relaxed">{f.fala}</p>
              ) : (
                MOSTRAR_PENDENCIAS && (
                  <p
                    className="flex items-center gap-2 px-4 py-3 text-[0.9375rem] font-semibold text-[#B3241C]"
                    title="Falta a frase dele sobre este papel, em primeira pessoa. Depende da assessoria."
                  >
                    <span
                      aria-hidden="true"
                      className="grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 border-[#B3241C] text-[0.75rem] leading-none"
                    >
                      !
                    </span>
                    falta a fala
                  </p>
                )
              )}
            </figure>
          </li>
        ))}
      </ul>

      <div className="mv-shell flex flex-col gap-2">
        {MOSTRAR_PENDENCIAS && faltando > 0 && (
          <p className="mv-todo text-[0.9375rem]">
            <b>TODO (T2), {faltando} de {facetas.length} sem fala</b>
            Cada faceta precisa de uma frase do Marcão, em primeira pessoa, sobre aquele papel.
            Enquanto não vier, o card mostra só a foto e o papel. Preencher em{' '}
            <code>content/facetas.ts</code>, campo <code>fala</code>.
          </p>
        )}
      </div>
    </section>
  )
}
