import Image from 'next/image'
import { Cartaz } from '@/components/ui/marca'
import { territorio } from '@/content/facetas'
import { MapaES } from '@/components/ui/mapa-es'

/**
 * O QUE EU VEJO
 *
 * O território em foto real da região: a Ferrovia 118, a orla de Marataízes,
 * a barra de Itapemirim, a praia de Kennedy, a área do Porto Central e a
 * portaria da Samarco.
 *
 * Nenhuma leva véu translúcido por cima. Foto de lugar existe para ser vista,
 * e lavado colorido sobre foto não aparece em peça nenhuma do manual.
 *
 * Seis quadros do mesmo tamanho, todos em 16 por 9. Cartão de tamanho
 * variável aqui sugeriria que uma cidade importa mais que a outra.
 */
export function Territorio() {

  return (
    <section id="vejo" className="mv-secao">
      <div className="mv-shell flex flex-col gap-8">
        <div className="mx-auto flex max-w-[58ch] flex-col items-center gap-4 text-center sm:mx-0 sm:items-start sm:text-left">
          <p className="mv-kicker text-[#2F5C1B]">O que eu vejo</p>
          <h2 className="text-[clamp(1.9rem,9vw,3.6rem)]">
            <Cartaz className="text-marinho">O SUL DE PERTO</Cartaz>
          </h2>
          <p className="text-[1.0625rem] leading-relaxed text-fraca sm:text-[1.15rem]">
            Nove municípios dividem o mesmo código, o mesmo litoral, a mesma serra e os mesmos
            problemas: estrada ruim, fila de exame e emprego que vai embora para a Grande
            Vitória. Estas são fotos da região, não de banco de imagem.
          </p>
        </div>

        <MapaES />


        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {territorio.map((t) => (
            <li key={t.slug}>
              <figure className="m-0">
                <Image
                  src={`/fotos/${t.foto}.webp`}
                  alt={t.alt}
                  width={1400} height={788}
                  sizes="(max-width: 639px) 92vw, (max-width: 1023px) 46vw, 24rem"
                  loading="lazy"
                  className="h-auto w-full rounded-[10px]"
                />
                <figcaption className="mt-2 text-center sm:text-left">
                  <span className="block font-display text-[1.15rem] font-extrabold">
                    {t.titulo}
                  </span>
                  <span className="text-[1.0625rem] leading-relaxed text-fraca">{t.texto}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
