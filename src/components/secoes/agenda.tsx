import Image from 'next/image'
import { agenda, agendaTexto } from '@/content/agenda'
import { IconeLocal, IconeSeta } from '@/components/ui/icones'
import { FundoAssinatura } from '@/components/ui/simbolos'

/**
 * AGENDA
 *
 * Dois eventos reais, cada um com a ARTE OFICIAL como imagem do card: a
 * inauguração do comitê e o lançamento oficial da campanha. Data, hora e
 * endereço no card repetem, em texto, o que está escrito na arte — quem usa
 * leitor de tela, quem está com imagem desligada e o Google recebem a mesma
 * informação que quem vê a peça.
 *
 * A arte entra em 16 por 9, que é a proporção em que ela foi feita, então não
 * há recorte: peça de campanha cortada perde justamente o canto onde está o
 * endereço.
 */
export function Agenda() {
  return (
    <section id="agenda" className="mv-secao relative overflow-hidden">
      {/* a agenda não tem as três economias, então a marca d'água aqui é a
          assinatura. Sobre papel claro, 4% já é o suficiente para se ver. */}
      <FundoAssinatura variante="a" className="text-marinho opacity-[.04]" />

      <div className="mv-shell relative flex flex-col gap-9">
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
              className="mv-card flex h-full flex-col overflow-hidden !p-0"
              style={{ '--fio': 'var(--laranja)' } as React.CSSProperties}
            >
              {e.foto && (
                <Image
                  src={`/fotos/${e.foto}.jpg`}
                  alt={e.alt}
                  width={1440} height={814}
                  sizes="(max-width: 639px) 92vw, 36rem"
                  loading="lazy"
                  className="h-auto w-full"
                />
              )}

              <div className="flex grow flex-col gap-2 px-6 pt-5 pb-6">
                <time
                  dateTime={e.quando}
                  className="font-display text-[1.0625rem] font-extrabold text-laranja"
                >
                  {e.rotulo}
                </time>

                <h3 className="text-[1.25rem] font-extrabold">{e.titulo}</h3>
                {e.subtitulo && (
                  <p className="text-[1.0625rem] leading-relaxed text-fraca">{e.subtitulo}</p>
                )}

                <p className="mt-1 flex items-start gap-2 text-[1.0625rem] leading-relaxed text-fraca">
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
                  className="mv-btn mv-btn-escuro mt-4 w-full"
                >
                  Ver no Maps
                  <IconeSeta tamanho={20} />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
