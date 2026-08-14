import Image from 'next/image'
import { agenda, agendaTexto } from '@/content/agenda'
import { IconeLocal, IconeSeta } from '@/components/ui/icones'
import { candidato } from '@/content/candidato'
import { MOSTRAR_PENDENCIAS } from '@/content/flags'

/**
 * AGENDA
 *
 * Dois cards, com foto real do evento: a inauguração do comitê e o lançamento
 * oficial da campanha.
 *
 * A foto entra em 16 por 9, cortada pelo centro, e não em altura livre: com
 * altura livre, uma foto vertical e uma horizontal lado a lado deixam os dois
 * cards de tamanhos diferentes, e a grade desmonta.
 *
 * Enquanto a data não vier da assessoria, o card diz "data sendo confirmada"
 * em vez de inventar dia e hora. É o único jeito honesto de mostrar um evento
 * que a campanha já anunciou mas ainda não marcou: sumir com o card faria
 * parecer que a campanha não sai à rua, e escrever uma data falsa convocaria
 * gente para um evento que não existe.
 */
export function Agenda() {
  const semData = agenda.filter((e) => !e.quando).length

  return (
    <section id="agenda" className="mv-secao">
      <div className="mv-shell flex flex-col gap-9">
        <div className="flex max-w-[62ch] flex-col gap-4 text-center sm:text-left">
          <p className="mv-kicker text-[#2F5C1B]">{agendaTexto.kicker}</p>
          <h2 className="text-[clamp(1.45rem,4.6vw,2.25rem)] font-extrabold tracking-tight">
            {agendaTexto.titulo}
          </h2>
          <p className="hidden text-[1.0625rem] leading-relaxed text-fraca sm:block sm:text-[1.15rem]">
            {agendaTexto.chamada}
          </p>
        </div>

        <ul className="grid items-stretch gap-6 sm:grid-cols-2">
          {agenda.map((e) => (
            <li
              key={e.slug}
              className="mv-card flex h-full flex-col gap-3 overflow-hidden !p-0"
              style={{ '--fio': 'var(--laranja)' } as React.CSSProperties}
            >
              {e.foto && (
                <div className="relative aspect-16/9 w-full overflow-hidden bg-petroleo">
                  <Image
                    src={`/fotos/${e.foto}.jpg`}
                    alt={e.alt}
                    fill
                    sizes="(max-width: 639px) 92vw, 36rem"
                    loading="lazy"
                    className="object-cover"
                  />
                </div>
              )}

              <div className="flex grow flex-col gap-2 px-6 pt-2 pb-6">
                {e.quando && e.rotulo ? (
                  <time
                    dateTime={e.quando}
                    className="font-display text-[1.0625rem] font-extrabold text-laranja"
                  >
                    {e.rotulo}
                  </time>
                ) : (
                  <span className="font-display text-[1.0625rem] font-extrabold text-fraca">
                    Data sendo confirmada
                  </span>
                )}

                <h3 className="text-[1.25rem] font-extrabold">{e.titulo}</h3>
                <p className="text-[1.0625rem] leading-relaxed text-fraca">{e.resumo}</p>

                {e.local && (
                  <p className="flex items-start gap-2 text-[1.0625rem] leading-relaxed text-fraca">
                    <IconeLocal tamanho={20} className="mt-1 shrink-0 text-marinho" />
                    <span>
                      {e.local}
                      {e.cidade && (
                        <>
                          <br />
                          {e.cidade}
                        </>
                      )}
                    </span>
                  </p>
                )}

                <span className="grow" aria-hidden="true" />

                {e.maps ? (
                  <a
                    href={e.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mv-btn mv-btn-escuro mt-3 w-full"
                  >
                    Ver no mapa
                    <IconeSeta tamanho={20} />
                  </a>
                ) : (
                  <a
                    href={candidato.redes.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 font-display text-[1.0625rem] font-bold underline"
                  >
                    Acompanhe pelo Instagram para saber a data
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>

        {MOSTRAR_PENDENCIAS && semData > 0 && (
          <p className="mv-todo">
            <b>TODO (T1), {semData} de {agenda.length} eventos sem data</b>
            Preencher <code>quando</code>, <code>rotulo</code>, <code>local</code> e{' '}
            <code>cidade</code> em <code>content/agenda.ts</code>. Conferir também qual foto é
            de qual evento: associei pelo que a imagem mostra, não por informação da campanha.
          </p>
        )}
      </div>
    </section>
  )
}
