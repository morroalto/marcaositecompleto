import Image from 'next/image'
import { Cartaz } from '@/components/ui/marca'
import { territorio } from '@/content/facetas'
import mapa from '@/../public/fotos/marcao-mapa.jpg'

/**
 * O QUE EU VEJO
 *
 * Em 14/08/2026 o mapa desta seÃ§Ã£o passou a ser a ARTE OFICIAL
 * (`public/fotos/marcao-mapa.jpg`, "A forÃ§a do TriÃ¢ngulo do Sul"), que Ã© a peÃ§a
 * que o eleitor jÃ¡ viu no Instagram e no adesivo. Um mapa desenhado no site e
 * outro diferente na rua fazem a mesma regiÃ£o parecer duas.
 *
 * O mapa em SVG com a malha oficial do IBGE continua no repositÃ³rio, em
 * `components/ui/mapa-es.tsx`, e volta com uma linha de import. Ele Ã© mais
 * informativo, mas as nove cidades jÃ¡ aparecem em chip logo acima, na seÃ§Ã£o do
 * nÃºmero: mostrar o mesmo recorte duas vezes Ã© encher a pÃ¡gina, nÃ£o informar.
 *
 * Abaixo, trÃªs fotos reais da regiÃ£o, uma por cidade do TriÃ¢ngulo. Todas do
 * mesmo tamanho e na mesma proporÃ§Ã£o: quadro de tamanho variÃ¡vel sugeriria que
 * uma cidade importa mais que a outra.
 */
export function Territorio() {
  const grade = territorio.filter((t) => t.naGrade)

  return (
    <section id="vejo" className="mv-secao">
      <div className="mv-shell flex flex-col gap-9">
        <div className="mx-auto flex max-w-[58ch] flex-col items-center gap-4 text-center sm:mx-0 sm:items-start sm:text-left">
          <p className="mv-kicker text-[#2F5C1B]">O que eu vejo</p>
          <h2 className="text-[clamp(1.6rem,5.6vw,2.7rem)]">
            <Cartaz className="text-marinho">O SUL DE PERTO</Cartaz>
          </h2>
          <p className="text-[1.0625rem] leading-relaxed text-fraca sm:text-[1.15rem]">
            Nove municÃ­pios dividem o mesmo cÃ³digo, o mesmo litoral, a mesma serra e os mesmos
            problemas: estrada ruim, fila de exame e emprego que vai embora para a Grande
            VitÃ³ria. Estas sÃ£o fotos da regiÃ£o, nÃ£o de banco de imagem.
          </p>
        </div>
      </div>

      {/* de borda a borda, igual ao hero: o mapa Ã© a peÃ§a da campanha, nÃ£o uma
          figura dentro de um card. SÃ³ a legenda volta para o shell. */}
      <figure className="m-0 my-9 w-full">
        <Image
          src={mapa}
          alt="Mapa do EspÃ­rito Santo com o TriÃ¢ngulo do Sul destacado, ligando MarataÃ­zes, Itapemirim e Presidente Kennedy"
          sizes="100vw"
          loading="lazy"
          className="h-auto w-full"
        />
        <figcaption className="mv-shell mt-3 text-center text-[1rem] leading-relaxed text-fraca sm:text-left">
          O triÃ¢ngulo nÃ£o Ã© figura de linguagem: ele fecha no mapa, entre MarataÃ­zes,
          Itapemirim e Presidente Kennedy.
        </figcaption>
      </figure>

      <div className="mv-shell">
        <ul className="grid gap-6 sm:grid-cols-3">
          {grade.map((t) => (
            <li key={t.slug}>
              <figure className="m-0">
                <Image
                  src={`/fotos/${t.foto}.webp`}
                  alt={t.alt}
                  width={1400} height={788}
                  sizes="(max-width: 639px) 92vw, 24rem"
                  loading="lazy"
                  className="h-auto w-full rounded-[10px]"
                />
                <figcaption className="mt-3 text-center sm:text-left">
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
