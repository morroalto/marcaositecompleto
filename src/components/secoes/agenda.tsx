import Image from 'next/image'
import { agenda, agendaTexto } from '@/content/agenda'
import { IconeLocal, IconeSeta } from '@/components/ui/icones'
import { FundoNumero } from '@/components/ui/simbolos'

/**
 * AGENDA
 *
 * A ARTE OFICIAL fixada no card, e ao lado dela, em texto, exatamente o que
 * está escrito nela: data, hora e endereço. Quem usa leitor de tela, quem está
 * com imagem desligada e o Google recebem a mesma informação que quem vê a
 * peça — e ninguém precisa dar zoom numa imagem para saber a que horas é.
 *
 * A ARTE É VERTICAL (900×1600, formato de story), e por isso ela fica NUMA
 * COLUNA ao lado do texto, com teto de altura, em vez de ocupar a largura toda
 * do card como a peça 16 por 9 fazia. Do jeito antigo, uma imagem em pé de
 * largura inteira empurrava todo o resto para fora da tela. Ela entra sempre
 * INTEIRA, sem recorte: arte de campanha cortada perde justamente o canto onde
 * está o endereço.
 *
 * A seção sustenta vários eventos, mas hoje há um só — os dois viraram um. Com
 * um único item a grade não se justifica, então o card ocupa a largura do bloco
 * e se divide em duas colunas por dentro.
 */
export function Agenda() {
  return (
    <section id="agenda" className="mv-secao relative overflow-hidden">
      {/* a agenda não tem as três economias, então a marca de fundo aqui é o
          número. Sobre papel claro, 4% já é o suficiente para se ver. */}
      <FundoNumero variante="a" className="text-marinho opacity-[.04]" />

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

        <ul className="grid items-stretch gap-6">
          {agenda.map((e) => (
            <li
              key={e.slug}
              className="mv-card grid gap-6 overflow-hidden !p-0 sm:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] sm:gap-8"
              style={{ '--fio': 'var(--laranja)' } as React.CSSProperties}
            >
              {e.foto && (
                <Image
                  src={`/fotos/${e.foto}.jpg`}
                  alt={e.alt}
                  width={e.largura}
                  height={e.altura}
                  sizes="(max-width: 639px) 92vw, 20rem"
                  loading="lazy"
                  className="h-auto w-full"
                />
              )}

              <div className="flex flex-col gap-2 px-6 pt-2 pb-6 sm:py-7 sm:pr-8 sm:pl-0">
                {e.chamada && (
                  <p className="font-display text-[1.0625rem] font-extrabold text-verde-tinta uppercase">
                    {e.chamada}
                  </p>
                )}

                <time
                  dateTime={e.quando}
                  className="font-display text-[1.0625rem] font-extrabold text-laranja"
                >
                  {e.rotulo}
                </time>

                <h3 className="text-[clamp(1.25rem,3.4vw,1.6rem)] font-extrabold text-balance">
                  {e.titulo}
                </h3>
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
                  className="mv-btn mv-btn-escuro mt-4 w-full sm:w-auto sm:self-start"
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
