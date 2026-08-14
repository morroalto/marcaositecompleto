import { agenda, agendaTexto } from '@/content/agenda'
import { IconeLocal, IconeSeta } from '@/components/ui/icones'
import { MOSTRAR_PENDENCIAS } from '@/content/flags'

/**
 * AGENDA
 *
 * Seção vinda do protótipo "Sul em Foco". Lá cada evento tinha uma foto de
 * capa; aqui não tem, e é de propósito: as fotos do protótipo eram de banco de
 * imagem, e foto genérica em cima de um compromisso de agenda é justamente o
 * que faz a agenda parecer inventada. O que o eleitor precisa é dia, hora e
 * endereço, em corpo grande.
 *
 * Com a lista vazia a seção inteira não renderiza. Nada de "em breve", nada de
 * card fantasma. Os três eventos de maquete estão em `agendaRascunho`, em
 * `content/agenda.ts`, esperando data e endereço confirmados.
 */
export function Agenda() {
  if (agenda.length === 0) {
    if (!MOSTRAR_PENDENCIAS) return null
    return (
      <section id="agenda" className="mv-secao bg-papel">
        <div className="mv-shell">
          <p className="mv-todo">
            <b>TODO (T1), agenda vazia</b>
            A estrutura da agenda está pronta e a seção só aparece quando houver evento
            confirmado. Os três eventos do protótipo tinham data e local de maquete, então
            ficaram em <code>agendaRascunho</code>. Confirmar com a assessoria e mover para{' '}
            <code>agenda</code>, em <code>content/agenda.ts</code>.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="agenda" className="mv-secao bg-papel">
      <div className="mv-shell flex flex-col gap-9">
        <div className="mx-auto flex max-w-[58ch] flex-col items-center gap-4 text-center sm:mx-0 sm:items-start sm:text-left">
          <p className="mv-kicker text-[#2F5C1B]">{agendaTexto.kicker}</p>
          <h2 className="text-[clamp(1.7rem,6.4vw,2.9rem)] font-extrabold tracking-tight">
            {agendaTexto.titulo}
          </h2>
          <p className="text-[1.0625rem] leading-relaxed text-fraca sm:text-[1.15rem]">
            {agendaTexto.chamada}
          </p>
        </div>

        <ul className="grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {agenda.map((e) => (
            <li
              key={e.slug}
              className="mv-card flex h-full flex-col gap-3"
              style={{ '--fio': 'var(--laranja)' } as React.CSSProperties}
            >
              <time
                dateTime={e.quando}
                className="font-display text-[1.0625rem] font-extrabold text-laranja"
              >
                {e.rotulo}
              </time>
              <h3 className="text-[1.25rem] font-extrabold">{e.titulo}</h3>
              <p className="flex items-start gap-2 text-[1.0625rem] leading-relaxed text-fraca">
                <IconeLocal tamanho={20} className="mt-1 shrink-0 text-marinho" />
                <span>
                  {e.local}
                  <br />
                  {e.cidade}
                </span>
              </p>
              <span className="grow" aria-hidden="true" />
              <a
                href={e.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="mv-btn mv-btn-escuro mt-2 w-full"
              >
                Ver no mapa
                <IconeSeta tamanho={20} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
