import Image from 'next/image'
import { Cartaz } from '@/components/ui/marca'
import { territorio } from '@/content/facetas'
import mapa from '@/../public/fotos/marcao-mapa.jpg'

/**
 * O QUE EU VEJO
 *
 * Em 14/08/2026 o mapa desta seção passou a ser a ARTE OFICIAL
 * (`public/fotos/marcao-mapa.jpg`, "A força do Triângulo do Sul"), que é a peça
 * que o eleitor já viu no Instagram e no adesivo. Um mapa desenhado no site e
 * outro diferente na rua fazem a mesma região parecer duas.
 *
 * O mapa em SVG com a malha oficial do IBGE continua no repositório, em
 * `components/ui/mapa-es.tsx`, e volta com uma linha de import. Ele é mais
 * informativo, mas as nove cidades já aparecem em chip logo acima, na seção do
 * número: mostrar o mesmo recorte duas vezes é encher a página, não informar.
 *
 * Abaixo, três fotos reais da região, uma por cidade do Triângulo. Todas do
 * mesmo tamanho e na mesma proporção: quadro de tamanho variável sugeriria que
 * uma cidade importa mais que a outra.
 */
export function Territorio() {
  const grade = territorio.filter((t) => t.naGrade)

  return (
    <section id="vejo" className="mv-secao">
      <div className="mv-shell flex flex-col gap-9">
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
      </div>

      {/* de borda a borda, igual ao hero: o mapa é a peça da campanha, não uma
          figura dentro de um card. Só a legenda volta para o shell. */}
      <figure className="m-0 my-9 w-full">
        <Image
          src={mapa}
          alt="Mapa do Espírito Santo com o Triângulo do Sul destacado, ligando Marataízes, Itapemirim e Presidente Kennedy"
          sizes="100vw"
          loading="lazy"
          className="h-auto w-full"
        />
        <figcaption className="mv-shell mt-3 text-center text-[1rem] leading-relaxed text-fraca sm:text-left">
          O triângulo não é figura de linguagem: ele fecha no mapa, entre Marataízes,
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
