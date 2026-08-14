import Image from 'next/image'
import { Cartaz } from '@/components/ui/marca'
import { territorio } from '@/content/facetas'
import mapa from '@/../public/fotos/marcao-mapa.jpg'

/**
 * O QUE EU VEJO
 *
 * O mapa é a ARTE OFICIAL ("A força do Triângulo do Sul"), a mesma peça que o
 * eleitor já viu no Instagram e no adesivo. O mapa em SVG com a malha do IBGE
 * continua em `components/ui/mapa-es.tsx` e volta com uma linha de import.
 *
 * MUDANÇAS DE 14/08/2026
 *
 * A arte ocupava 100% da largura sem limite de altura: num monitor de 1920 px
 * ela sozinha dava 1080 px, ou seja, a tela inteira, e o efeito era de zoom.
 * Agora ela continua sangrando de borda a borda, mas com teto de altura e
 * `object-cover`, então cresce em largura sem engolir a página.
 *
 * A legenda que ficava solta embaixo saiu: era uma linha de texto boiando no
 * branco, sem fundo e sem borda, com cara de rascunho.
 *
 * Nos três quadros das cidades o nome e a frase passaram para DENTRO da foto,
 * sobre um degradê no rodapé do quadro (`.mv-foto`). Antes eram duas linhas de
 * texto soltas embaixo de cada imagem, o que dava aquele efeito de legenda de
 * álbum escolar.
 */
export function Territorio() {
  const grade = territorio.filter((t) => t.naGrade)

  return (
    // sem `mv-secao`: o padding de topo criaria uma faixa branca entre a seção
    // anterior e a arte, e é justamente isso que não pode existir aqui
    <section id="vejo" className="pb-[var(--secao)]">
      {/* A ARTE É O BLOCO, exatamente como no hero: primeira coisa da seção,
          colada no topo, 100% da largura, altura natural. Sem margem, sem
          recorte, sem teto de altura e sem nada em volta. Toda tentativa de
          conter essa peça (max-height, object-cover) só serviu para decepar o
          título dela: arte fechada pelo designer se mostra inteira. */}
      {/* 100% DA LARGURA DA TELA, sem exceção e sem limite.
          Já errei isto duas vezes nesta seção, então fica escrito: qualquer
          `max-width` aqui vira faixa branca nas laterais, e qualquer
          `max-height` com `object-cover` decepa o título da peça. A arte é
          largura cheia e altura natural, igual à do hero. Ponto. */}
      <figure className="m-0 w-full">
        <Image
          src={mapa}
          alt="Mapa do Espírito Santo com o Triângulo do Sul destacado, ligando Marataízes, Itapemirim e Presidente Kennedy"
          sizes="100vw"
          loading="lazy"
          className="h-auto w-full"
        />
      </figure>

      <div className="mv-shell mt-[var(--secao)] flex max-w-[62ch] flex-col gap-4 text-center sm:text-left">
        <p className="mv-kicker text-[#2F5C1B]">O que eu vejo</p>
        <h2 className="text-[clamp(1.6rem,5.6vw,2.7rem)]">
          <Cartaz className="text-marinho">O SUL DE PERTO</Cartaz>
        </h2>
        <p className="text-[1.0625rem] leading-relaxed text-fraca sm:text-[1.15rem]">
          Nove municípios dividem o mesmo código, o mesmo litoral, a mesma serra e os mesmos
          problemas: estrada ruim, fila de exame e emprego que vai embora para a Grande
          Vitória. O triângulo não é figura de linguagem, ele fecha no mapa.
        </p>
      </div>

      <div className="mv-shell mt-9">
        <ul className="grid gap-5 sm:grid-cols-3">
          {grade.map((t) => (
            <li key={t.slug}>
              <figure className="mv-foto aspect-4/3">
                <Image
                  src={`/fotos/${t.foto}.webp`}
                  alt={t.alt}
                  width={1400} height={788}
                  sizes="(max-width: 639px) 92vw, 23rem"
                  loading="lazy"
                />
                <figcaption>
                  <span className="block font-display text-[1.15rem] font-extrabold">
                    {t.titulo}
                  </span>
                  <span className="text-[1rem] leading-snug text-white/85">{t.texto}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
