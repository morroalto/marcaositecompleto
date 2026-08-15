import Image from 'next/image'
import { capitulos, linhaDoTempoTexto } from '@/content/trajetoria'

/**
 * TRAJETÓRIA EM QUATRO CAPÍTULOS
 *
 * Formato da arte de referência da campanha: grade de dois por dois, cards em
 * creme, chapéu com o período em caixa alta, título grande e o texto; a foto
 * entra dentro do card.
 *
 * A FOTO NÃO É CORTADA. Ela entra na altura natural, e não num quadro de
 * proporção fixa com `object-cover`: as fotos da campanha vêm em formatos
 * diferentes, umas verticais e outras deitadas, e o recorte comia justamente
 * as cabeças. O preço é que os quatro cards não terminam na mesma linha, e
 * está certo assim — foto inteira vale mais do que grade simétrica.
 *
 * `fotoEmCima` existe porque na arte o card da família abre com a imagem e os
 * outros três fecham com ela. É o que dá ritmo à grade em vez de quatro
 * blocos idênticos.
 */
export function LinhaDoTempo() {
  return (
    <section id="linha-do-tempo" className="mv-secao bg-papel">
      <div className="mv-shell flex flex-col gap-9">
        <div className="flex max-w-[62ch] flex-col gap-4 text-center sm:text-left">
          <p className="mv-kicker text-[#2F5C1B]">{linhaDoTempoTexto.kicker}</p>
          <h2 className="text-[clamp(1.45rem,4.6vw,2.25rem)] font-extrabold tracking-tight">
            {linhaDoTempoTexto.titulo}
          </h2>
          <p className="text-[1.0625rem] leading-relaxed text-fraca sm:text-[1.15rem]">
            {linhaDoTempoTexto.chamada}
          </p>
        </div>

        {/* `items-stretch` mais `h-full`: os dois cards de cada linha terminam
            na mesma altura, e a foto de quem tem texto mais curto desce até a
            base com `mt-auto`. Sem isso, o card "A Voz do Sul" ficava um palmo
            mais baixo que o vizinho e a linha parecia quebrada.
            O título usa `text-balance` para não deixar "(2026)" sozinho numa
            segunda linha. */}
        <ul className="grid items-stretch gap-6 lg:grid-cols-2">
          {capitulos.map((c) => {
            /* Foto muito vertical entra mais estreita, e centralizada. A da
               fotografia antiga é quase 1 por 1,8: na largura inteira do card
               ela sozinha ficava com o dobro da altura do texto e esticava a
               linha toda, deixando um vão branco no card ao lado. Estreitar é
               melhor do que cortar, porque não se perde nada da imagem. */
            const muitoVertical = c.altura / c.largura > 1.6

            const foto = c.foto && (
              <Image
                src={`/fotos/${c.foto}.${c.ext}`}
                alt={c.alt}
                width={c.largura}
                height={c.altura}
                sizes="(max-width: 1023px) 90vw, 32rem"
                loading="lazy"
                className={[
                  'h-auto w-full rounded-[10px]',
                  muitoVertical ? 'mx-auto max-w-[74%]' : '',
                  c.fotoEmCima ? '' : 'mt-auto',
                ].join(' ')}
              />
            )

            return (
              <li
                key={c.slug}
                className="flex h-full flex-col gap-4 rounded-[16px] bg-[var(--creme)] p-6 sm:p-7"
              >
                {c.fotoEmCima && foto}

                <div className="flex flex-col gap-2">
                  <p className="font-display text-[0.8125rem] font-extrabold tracking-[0.1em] text-[#5C4A42] uppercase">
                    {c.chapeu}
                  </p>
                  <h3 className="text-[clamp(1.25rem,3.2vw,1.65rem)] font-extrabold tracking-tight text-balance text-tinta">
                    {c.titulo}
                  </h3>
                  <p className="text-[1.0625rem] leading-relaxed text-[#4A3A33]">{c.texto}</p>
                </div>

                {!c.fotoEmCima && foto}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
