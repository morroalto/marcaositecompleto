import Image from 'next/image'
import { momentos, galeriaTexto } from '@/content/galeria'

/**
 * PERTO DE QUEM PRECISA
 *
 * Seção do protótipo "Sul em Foco", com fotos reais do acervo no lugar das de
 * banco de imagem. Três quadros do mesmo tamanho, em 4 por 5, com a legenda
 * por dentro da foto: é a mesma forma dos quadros de território, e as duas
 * seções passam a rimar em vez de cada uma inventar um formato.
 */
export function Galeria() {
  return (
    <section id="presenca" className="mv-secao bg-papel">
      <div className="mv-shell flex flex-col gap-9">
        <div className="flex max-w-[62ch] flex-col gap-4 text-center sm:text-left">
          <p className="mv-kicker text-[#2F5C1B]">{galeriaTexto.kicker}</p>
          <h2 className="text-[clamp(1.45rem,4.6vw,2.25rem)] font-extrabold tracking-tight">
            {galeriaTexto.titulo}
          </h2>
          <p className="text-[1.0625rem] leading-relaxed text-fraca sm:text-[1.15rem]">
            {galeriaTexto.chamada}
          </p>
        </div>

        <ul className="grid gap-5 sm:grid-cols-3">
          {momentos.map((m) => (
            <li key={m.slug}>
              <figure className="mv-foto aspect-4/5">
                <Image
                  src={`/fotos/${m.foto}.webp`}
                  alt={m.alt}
                  width={900} height={1125}
                  sizes="(max-width: 639px) 92vw, 23rem"
                  loading="lazy"
                />
                <figcaption>
                  <span className="text-[1rem] leading-snug">{m.legenda}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
