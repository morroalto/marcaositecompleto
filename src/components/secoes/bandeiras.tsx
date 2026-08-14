import { IconeMegafone, IconeSeta } from '@/components/ui/icones'
import { bandeiras, type Bandeira } from '@/content/bandeiras'
import { MOSTRAR_PENDENCIAS } from '@/content/flags'

/** cor da marca que entra no fio do card, via custom property */
const FIO: Record<Bandeira['cor'], string> = {
  laranja: 'var(--laranja)',
  verde: 'var(--verde-fundo)',
  marinho: 'var(--marinho)',
  amarelo: 'var(--amarelo)',
  petroleo: 'var(--petroleo)',
}

/**
 * BANDEIRAS
 *
 * Card redesenhado em 14/08/2026. O anterior era uma caixa com faixa colorida
 * de 6 px no topo e o nÃºmero em corpo 35 com 30% de opacidade dentro do texto:
 * seis deles lado a lado viravam seis retÃ¢ngulos listrados, e o nÃºmero
 * apagado sÃ³ sujava a leitura. Agora o card Ã© branco e quieto, o nÃºmero Ã©
 * pequeno e nÃ­tido na linha do tÃ­tulo, e a cor da marca fica num fio de 3 px
 * que cresce para 6 no hover. Forma inspirada em brunopeixoto.com e
 * nikolasferreira.com.br, onde quem organiza a grade Ã© o nÃºmero, nÃ£o a cor.
 *
 * O compromisso ganhou caixa prÃ³pria, em fundo papel: Ã© a parte que diferencia
 * este site de um site de promessa vaga, e antes era um parÃ¡grafo qualquer com
 * um fio verde na lateral.
 *
 * A foto que enfeitava o cabeÃ§alho da seÃ§Ã£o saiu. Ela nÃ£o dizia nada que o
 * texto jÃ¡ nÃ£o dissesse, e a pÃ¡gina tinha foto demais.
 *
 * Card sem compromisso concreto nÃ£o renderiza em produÃ§Ã£o.
 */
export function Bandeiras() {
  const visiveis = bandeiras.filter((b) => b.compromisso !== null || MOSTRAR_PENDENCIAS)
  const semCompromisso = bandeiras.filter((b) => !b.compromisso).length
  if (visiveis.length === 0) return null

  return (
    <section id="bandeiras" className="bg-papel mv-secao">
      <div className="mv-shell flex flex-col gap-9">
        <div className="mx-auto flex max-w-[58ch] flex-col items-center gap-4 text-center sm:mx-0 sm:items-start sm:text-left">
          <p className="mv-kicker text-[#2F5C1B]">O que eu vou fazer</p>
          <h2 className="text-[clamp(1.45rem,4.6vw,2.25rem)] font-extrabold tracking-tight">
            Seis frentes. Todas com nome de lugar.
          </h2>
          <p className="text-[1.0625rem] leading-relaxed text-fraca sm:text-[1.15rem]">
            Estes sÃ£o os eixos que o MarcÃ£o jÃ¡ assumiu em pÃºblico. Cada um vira compromisso
            com endereÃ§o, e enquanto o compromisso concreto nÃ£o vier da assessoria o card
            fica marcado. Proposta vaga nÃ£o entra neste site.
          </p>
        </div>

        <ul className="grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visiveis.map((b, i) => (
            <li
              key={b.slug}
              className="mv-card flex h-full flex-col gap-3"
              style={{ '--fio': FIO[b.cor] } as React.CSSProperties}
            >
              <p className="flex items-baseline gap-3">
                <span className="mv-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="h-px grow bg-linha" aria-hidden="true" />
              </p>
              <h3 className="text-[1.25rem] font-extrabold">{b.titulo}</h3>
              <p className="text-[1.0625rem] leading-relaxed text-fraca">{b.contexto}</p>
              <span className="grow" aria-hidden="true" />

              {b.compromisso ? (
                <p className="mv-compromisso mt-2 text-[1.0625rem] leading-relaxed font-semibold">
                  {b.compromisso}
                </p>
              ) : (
                MOSTRAR_PENDENCIAS && (
                  <p className="mt-2 flex items-center gap-2 text-[0.9375rem] font-semibold text-[#B3241C]">
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
        </ul>

        {/* faixa, nÃ£o card: o convite nÃ£o Ã© o sÃ©timo eixo, Ã© outra coisa */}
        <div className="flex flex-col items-center gap-5 rounded-[10px] bg-petroleo px-7 py-7 text-center text-white sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
            <IconeMegafone className="shrink-0 text-amarelo" tamanho={30} />
            <div>
              <h3 className="text-[1.25rem] font-extrabold">Faltou o seu tema?</h3>
              <p className="text-[1.0625rem] leading-relaxed text-[#CBDDD7]">
                A pauta do Sul nÃ£o cabe em seis cards. Manda pra gente.
              </p>
            </div>
          </div>
          <a href="#apoie" className="mv-btn mv-btn-amarelo w-full shrink-0 sm:w-auto">
            Manda o seu tema
            <IconeSeta tamanho={20} />
          </a>
        </div>

        {MOSTRAR_PENDENCIAS && semCompromisso > 0 && (
          <p className="mv-todo">
            <b>TODO (T2), {semCompromisso} de {bandeiras.length} eixos sem compromisso</b>
            Cada eixo precisa do problema concreto, com nome de lugar, e do que o MarcÃ£o se
            compromete a fazer. Sem isso o card nÃ£o sobe em produÃ§Ã£o. Preencher em{' '}
            <code>content/bandeiras.ts</code>, campo <code>compromisso</code>.
          </p>
        )}
      </div>
    </section>
  )
}
