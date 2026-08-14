import { agenda, agendaTexto } from '@/content/agenda'
import { IconeLocal } from '@/components/ui/icones'
import { candidato } from '@/content/candidato'
import { MOSTRAR_PENDENCIAS } from '@/content/flags'

/**
 * AGENDA
 *
 * Seção vinda do protótipo "Sul em Foco". Lá cada evento tinha foto de capa de
 * banco de imagem; aqui não tem, e é de propósito: foto genérica em cima de um
 * compromisso de agenda é o que faz a agenda parecer inventada. O que o
 * eleitor precisa é dia, hora e endereço, em corpo grande.
 *
 * Com a lista vazia a seção CONTINUA na página, com um estado vazio honesto:
 * "a agenda das próximas semanas está sendo fechada". É diferente de fingir
 * evento e é diferente de sumir com a seção, que faria o visitante achar que a
 * campanha não sai à rua. O que não existe é card fantasma nem "em breve" com
 * data inventada.
 *
 * Os três eventos de maquete do protótipo estão em `agendaRascunho`, em
 * `content/agenda.ts`, esperando data e endereço confirmados.
 */
export function Agenda() {
  return (
    <section id="agenda" className="mv-secao">
      <div className="mv-shell flex flex-col gap-9">
        <div className="flex max-w-[62ch] flex-col gap-4 text-center sm:text-left">
          <p className="mv-kicker text-[#2F5C1B]">{agendaTexto.kicker}</p>
          <h2 className="text-[clamp(1.45rem,4.6vw,2.25rem)] font-extrabold tracking-tight">
            {agendaTexto.titulo}
          </h2>
          <p className="text-[1.0625rem] leading-relaxed text-fraca sm:text-[1.15rem]">
            {agendaTexto.chamada}
          </p>
        </div>

        {agenda.length === 0 ? (
          <div className="mv-card flex flex-col gap-3" style={{ '--fio': 'var(--laranja)' } as React.CSSProperties}>
            <h3 className="text-[1.25rem] font-extrabold">
              A agenda das próximas semanas está sendo fechada.
            </h3>
            <p className="max-w-[62ch] text-[1.0625rem] leading-relaxed text-fraca">
              Assim que os encontros estiverem confirmados, com dia, hora e endereço, eles
              aparecem aqui. Enquanto isso, quem quiser saber onde ele vai estar pode
              acompanhar pelo{' '}
              <a
                href={candidato.redes.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline"
              >
                Instagram da campanha
              </a>
              .
            </p>
          </div>
        ) : (
          <ul className="grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {agenda.map((e) => (
              <li
                key={e.slug}
                className="mv-card flex h-full flex-col gap-2"
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
                  className="mt-2 font-display text-[1.0625rem] font-bold underline"
                >
                  Ver no mapa
                </a>
              </li>
            ))}
          </ul>
        )}

        {MOSTRAR_PENDENCIAS && agenda.length === 0 && (
          <p className="mv-todo">
            <b>TODO (T1), agenda sem evento confirmado</b>
            Os três eventos do protótipo tinham data e endereço de maquete, então ficaram em{' '}
            <code>agendaRascunho</code>. Confirmar com a assessoria e mover para{' '}
            <code>agenda</code>, em <code>content/agenda.ts</code>. O estado vazio acima é o
            que fica no ar até lá.
          </p>
        )}
      </div>
    </section>
  )
}
