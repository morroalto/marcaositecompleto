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
      {/* A GEOMETRIA DESTA SEÇÃO, escrita porque três tentativas erradas
          passaram por aqui.

          A arte é 16 por 9. A janela de um desktop é mais larga que isso.
          Então, com largura cheia, a altura natural passa da tela e obriga a
          rolar. Três saídas existem e duas já foram recusadas:
          · encolher a largura  → faixa branca nas laterais. Recusada.
          · encolher a altura mostrando tudo → mesma faixa, deitada. Recusada.
          · cortar → é esta.

          O corte é ancorado no TOPO (`object-top`), então quem sai é a faixa
          de baixo, que é água e areia. Título, rosto e o mapa com o triângulo
          ficam todos preservados. Se o corte fosse centralizado, ele comeria
          o "A FORÇA DO" primeiro, que é o pior lugar possível.

          80vh: cabe na tela junto com o cabeçalho, sem rolagem. */}
      {/* NO CELULAR A ARTE VAI INTEIRA, sem recorte. O corte de 80vh existe
          para o desktop, onde a janela é mais larga que 16 por 9 e a peça
          inteira obrigaria a rolar. Na tela do celular, que é estreita e alta,
          `object-cover` faz o contrário: aperta pelas laterais e sobra só o
          miolo, sem o título e sem o mapa. Foto pequena e inteira é melhor que
          foto grande e decepada. */}
      <figure className="m-0 w-full lg:h-[80vh]">
        <Image
          src={mapa}
          alt="Mapa do Espírito Santo com o Triângulo do Sul destacado, ligando Marataízes, Itapemirim e Presidente Kennedy"
          sizes="100vw"
          loading="lazy"
          className="h-auto w-full lg:h-full lg:object-cover lg:object-top"
        />
      </figure>

      {/* A MEDIDA DE LEITURA VAI NUM FILHO, nunca no próprio `.mv-shell`.
          `.mv-shell` tem `margin-inline: auto`: com um `max-w` menor na mesma
          div, o bloco inteiro passa a se centralizar na tela, e o texto
          descola dos cards que vêm logo abaixo. Foi o que aconteceu aqui. */}
      <div className="mv-shell mt-[var(--secao)]">
        <div className="flex max-w-[62ch] flex-col gap-4 text-center sm:text-left">
          <p className="mv-kicker text-[#2F5C1B]">Nove municípios</p>
          <h2 className="text-[clamp(1.6rem,5.6vw,2.7rem)]">
            <Cartaz className="text-marinho">O SUL DE PERTO</Cartaz>
          </h2>
          <p className="hidden text-[1.0625rem] leading-relaxed text-fraca sm:block sm:text-[1.15rem]">
            Nove municípios dividem o mesmo código, o mesmo litoral, a mesma serra e os mesmos
            problemas: estrada ruim, fila de exame e emprego que vai embora para a Grande
            Vitória. O triângulo não é figura de linguagem, ele fecha no mapa.
          </p>
        </div>
      </div>

      <div className="mv-shell mt-9">
        <ul className="grid gap-5 sm:grid-cols-3">
          {grade.map((t) => (
            <li key={t.slug}>
              <figure className="mv-foto aspect-4/3">
                <Image
                  src={`/fotos/${t.foto}.${t.ext}`}
                  alt={t.alt}
                  width={1170} height={658}
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
