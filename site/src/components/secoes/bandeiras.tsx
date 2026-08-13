import Image from 'next/image'
import { IconeMegafone, IconeSeta } from '@/components/ui/icones'
import { bandeiras } from '@/content/bandeiras'
import { MOSTRAR_PENDENCIAS } from '@/content/flags'
import { videoPorBandeira } from '@/content/videos'
import { Player } from '@/components/ui/video'
import azul from '@/../public/fotos/marcao-azul.webp'

const BARRA: Record<string, string> = {
  laranja: 'border-t-laranja', verde: 'border-t-verde', marinho: 'border-t-marinho',
  amarelo: 'border-t-amarelo', petroleo: 'border-t-petroleo',
}
const NUM: Record<string, string> = {
  laranja: 'text-laranja', verde: 'text-verde', marinho: 'text-marinho',
  amarelo: 'text-amarelo', petroleo: 'text-petroleo',
}

/**
 * BANDEIRAS
 *
 * Card sem compromisso concreto não renderiza em produção. Aqui ele continua
 * na tela porque `MOSTRAR_PENDENCIAS` está ligado na revisão, e a caixa
 * vermelha diz exatamente o que falta e de quem depende.
 *
 * Grade uniforme: seis cards do mesmo tamanho, alinhados pelo topo e esticados
 * até a mesma altura (`items-stretch` mais `h-full`). Card de tamanho variável
 * sugere hierarquia entre os eixos, e aqui não existe eixo mais importante.
 */
export function Bandeiras() {
  const visiveis = bandeiras.filter((b) => b.compromisso !== null || MOSTRAR_PENDENCIAS)
  const semCompromisso = bandeiras.filter((b) => !b.compromisso).length
  if (visiveis.length === 0) return null

  return (
    <section id="bandeiras" className="bg-papel mv-secao">
      <div className="mv-shell flex flex-col gap-8">
        <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_.6fr]">
          <div className="flex max-w-[56ch] flex-col items-center gap-4 text-center sm:items-start sm:text-left">
            <p className="mv-kicker text-[#2F5C1B]">O que eu vou fazer</p>
            <h2 className="text-[clamp(1.7rem,6.4vw,2.9rem)] font-extrabold tracking-tight">
              Cinco frentes. Todas com nome de lugar.
            </h2>
            <p className="text-[1.0625rem] leading-relaxed text-fraca sm:text-[1.15rem]">
              Estes são os eixos que o Marcão já assumiu em público. Cada um vira compromisso
              com endereço, e enquanto o compromisso concreto não vier da assessoria o card
              fica marcado. Proposta vaga não entra neste site.
            </p>
          </div>
          <Image
            src={azul}
            alt="Marcão de camiseta azul, braços cruzados"
            sizes="(max-width: 1023px) 40vw, 22vw"
            loading="lazy"
            className="mx-auto hidden h-auto w-full max-w-[15rem] lg:block"
          />
        </div>

        <ul className="grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visiveis.map((b, i) => (
            <li
              key={b.slug}
              className={['mv-card flex h-full flex-col border-t-[6px]', BARRA[b.cor]].join(' ')}
            >
              <span className={`font-display text-[2.2rem] leading-none font-black opacity-30 ${NUM[b.cor]}`}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-1 mb-2 text-[1.25rem] font-extrabold">{b.titulo}</h3>
              <p className="text-[1.0625rem] leading-relaxed text-fraca">{b.contexto}</p>
              <span className="grow" aria-hidden="true" />

              {videoPorBandeira[b.slug] && (
                <Player video={videoPorBandeira[b.slug]!} className="mt-4" />
              )}

              {b.compromisso ? (
                <p className="mt-4 border-l-4 border-verde pl-4 text-[1.0625rem] font-semibold">
                  {b.compromisso}
                </p>
              ) : (
                MOSTRAR_PENDENCIAS && (
                  <p className="mt-4 flex items-center gap-2 text-[0.9375rem] font-semibold text-[#B3241C]">
                    <span
                      aria-hidden="true"
                      className="grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 border-[#B3241C] text-[0.75rem] leading-none"
                    >
                      !
                    </span>
                    falta o compromisso
                  </p>
                )
              )}
            </li>
          ))}

          <li className="mv-card flex h-full flex-col border-0 bg-petroleo shadow-none">
            <IconeMegafone className="text-amarelo" tamanho={28} />
            <p className="mv-kicker mt-3 text-amarelo">Faltou o seu tema?</p>
            <h3 className="mt-2 mb-2 text-[1.25rem] font-extrabold text-white">Manda pra gente.</h3>
            <p className="text-[1.0625rem] leading-relaxed text-[#CBDDD7]">
              A pauta do Sul não cabe em cinco cards.
            </p>
            <a href="#apoie" className="mv-btn mv-btn-amarelo mt-auto w-full">
              Manda o seu tema
              <IconeSeta tamanho={20} />
            </a>
          </li>
        </ul>

        {MOSTRAR_PENDENCIAS && semCompromisso > 0 && (
          <p className="mv-todo">
            <b>TODO (T2), {semCompromisso} de {bandeiras.length} eixos sem compromisso</b>
            Cada eixo precisa do problema concreto, com nome de lugar, e do que o Marcão se
            compromete a fazer. Sem isso o card não sobe em produção. Preencher em{' '}
            <code>content/bandeiras.ts</code>, campo <code>compromisso</code>.
          </p>
        )}
      </div>
    </section>
  )
}
