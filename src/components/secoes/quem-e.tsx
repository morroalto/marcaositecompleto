import Image from 'next/image'
import { facetas } from '@/content/facetas'
import { candidato } from '@/content/candidato'
import { MOSTRAR_PENDENCIAS } from '@/content/flags'
import retrato from '@/../public/fotos/faceta-politico.webp'

/**
 * QUEM É O MARCÃO
 *
 * Antes: sete fotos do mesmo homem num carrossel horizontal. A ideia era boa,
 * a execução pesava. Sete arquivos, sete retratos quase iguais em enquadramento
 * e roupa, e no celular a pessoa arrastava sete vezes para ler sete frases
 * curtas. Metade do público não arrasta.
 *
 * Agora: um retrato só, e os sete papéis viram texto, que é onde eles são
 * fortes. A frase de cada papel está sempre visível, sem gesto nenhum, e a
 * página perdeu seis imagens sem perder uma palavra.
 *
 * A numeração dos papéis é o que dá ritmo à lista, no mesmo desenho dos cards
 * de bandeira: o número organiza, a cor não precisa gritar.
 */
export function QuemE() {
  const faltando = facetas.filter((f) => !f.fala).length

  return (
    <section id="quem-e" className="mv-secao bg-papel">
      <div className="mv-shell grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start lg:gap-14">

        <div className="flex flex-col gap-5">
          <figure className="m-0 mx-auto w-full max-w-[22rem] lg:max-w-none">
            <Image
              src={retrato}
              alt="Retrato de Marcão Vivacqua de camisa azul, sorrindo para a câmera"
              sizes="(max-width: 1023px) 78vw, 26rem"
              loading="lazy"
              className="h-auto w-full rounded-[10px]"
            />
            <figcaption className="mt-3 text-[1rem] leading-relaxed text-fraca">
              {candidato.nomeCivil}. No Sul, todo mundo chama de Marcão.
            </figcaption>
          </figure>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
            <p className="mv-kicker text-[#2F5C1B]">Quem é</p>
            <h2 className="text-[clamp(1.75rem,6.6vw,3rem)] font-extrabold tracking-tight">
              Antes de ser candidato, ele já era
              <br className="hidden sm:block" /> outras seis coisas.
            </h2>
            <p className="max-w-[58ch] text-[1.0625rem] leading-relaxed text-fraca sm:text-[1.15rem]">
              Currículo em bullet não convence ninguém. Aqui a biografia é o que ele faz e o
              que ele diz sobre cada papel, na primeira pessoa.
            </p>
          </div>

          <ul className="flex flex-col">
            {facetas.map((f, i) => (
              <li
                key={f.slug}
                className="flex gap-4 border-b border-linha py-5 first:pt-0 last:border-b-0 last:pb-0"
              >
                <span className="mv-num pt-1 text-[#2F5C1B]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-[1.15rem] font-extrabold">{f.papel}</h3>
                  {f.fala ? (
                    <p className="text-[1.0625rem] leading-relaxed text-fraca">{f.fala}</p>
                  ) : (
                    MOSTRAR_PENDENCIAS && (
                      <p className="flex items-center gap-2 text-[0.9375rem] font-semibold text-[#B3241C]">
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
                </div>
              </li>
            ))}
          </ul>

          {MOSTRAR_PENDENCIAS && faltando > 0 && (
            <p className="mv-todo text-[0.9375rem]">
              <b>TODO (T2), {faltando} de {facetas.length} sem fala</b>
              Cada faceta precisa de uma frase do Marcão, em primeira pessoa, sobre aquele
              papel. Preencher em <code>content/facetas.ts</code>, campo <code>fala</code>.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
