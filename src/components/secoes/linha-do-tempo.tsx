import Image from 'next/image'
import { capitulos, linhaDoTempoTexto } from '@/content/trajetoria'

/**
 * TRAJETÓRIA EM QUATRO CAPÍTULOS
 *
 * A arte aprovada em 15/08/2026 é um álbum antigo: papel envelhecido, quatro
 * recortes de jornal com a borda rasgada e, dentro de cada um, texto à esquerda
 * e um retrato em sépia à direita, colado torto.
 *
 * TEXTO E FOTO LADO A LADO não é escolha de estilo — é o que faz a seção caber
 * numa tela. Com a foto embaixo do texto, cada card passava de 500 px e os
 * quatro davam mais de 1.400 px de rolagem. Ao lado, o card tem a altura do
 * texto e os quatro entram em duas linhas curtas.
 *
 * O ENVELHECIDO é feito em três camadas, e nenhuma delas toca o conteúdo:
 *
 *   1. o fundo da seção é papel — creme manchado, com grão de `feTurbulence`;
 *   2. atrás de cada card há uma folha em `--carta`, e é NESSA FOLHA que o
 *      filtro `#mv-rasgo` age. O filtro fica na camada de baixo justamente para
 *      não distorcer a letra: quem tremer é a borda do papel, não a palavra;
 *   3. cada foto ganha sépia e uma moldura de papel, com o mesmo rasgo mais
 *      fino, girada meio grau — colada à mão, não alinhada por computador.
 *
 * Os giros são fixos por índice, e não sorteados, para o servidor e o navegador
 * desenharem a mesma página.
 */
export function LinhaDoTempo() {
  /** o ângulo de cada retrato colado, alternando o lado */
  const giros = ['-1.6deg', '1.4deg', '1.5deg', '-1.3deg']

  return (
    <section id="linha-do-tempo" className="mv-secao mv-papel-velho">
      <FiltrosDeRasgo />

      <div className="mv-shell relative flex flex-col gap-7">
        {/* Sem chapéu "TRAJETÓRIA": a seção logo acima já abre com ele, e a
            etiqueta repetida a duas seções de distância só atrasava o título. */}
        <div className="flex max-w-[62ch] flex-col gap-3 text-center sm:text-left">
          <h2 className="text-[clamp(1.45rem,4.6vw,2.25rem)] font-extrabold tracking-tight text-[#3A2A1C]">
            {linhaDoTempoTexto.titulo}
          </h2>
          <p className="text-[1.0625rem] leading-relaxed text-[#5A4534] sm:text-[1.15rem]">
            {linhaDoTempoTexto.chamada}
          </p>
        </div>

        <ul className="grid items-stretch gap-7 lg:grid-cols-2">
          {capitulos.map((c, i) => (
            <li key={c.slug} className="mv-carta">
              <div className="mv-carta-folha" aria-hidden="true" />

              <div className="relative grid h-full items-center gap-5 p-6 sm:grid-cols-[1.4fr_1fr] sm:p-7">
                <div className="flex flex-col gap-2">
                  <h3 className="text-[clamp(1.15rem,2.6vw,1.4rem)] font-extrabold tracking-tight text-balance text-[#3A2A1C]">
                    {c.titulo}
                  </h3>
                  <p className="text-[1rem] leading-[1.5] text-[#4A3728]">{c.texto}</p>
                </div>

                {c.foto && (
                  <div
                    className="mv-retrato"
                    style={{ ['--giro' as string]: giros[i % giros.length] }}
                  >
                    <div className="mv-retrato-moldura" aria-hidden="true" />
                    <div
                      className="relative overflow-hidden"
                      style={{ aspectRatio: c.proporcao }}
                    >
                      <Image
                        src={`/fotos/${c.foto}.${c.ext}`}
                        alt={c.alt}
                        fill
                        sizes="(max-width: 1023px) 88vw, 16rem"
                        loading="lazy"
                        className="mv-foto-sepia object-cover"
                        style={{ objectPosition: c.posicao }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/**
 * Os dois filtros que rasgam as bordas.
 *
 * `feTurbulence` desenha um ruído e `feDisplacementMap` empurra cada ponto da
 * borda com ele — o mesmo princípio de rasgar papel à mão, onde a fibra decide
 * o caminho. `mv-rasgo` é o da folha do card, mais grosso; `mv-rasgo-fino`, o
 * da moldura da foto, com deslocamento menor porque a peça é menor.
 *
 * Vive no fim do arquivo e não na raiz do documento por uma razão prática: se a
 * seção sair da página, os filtros saem com ela.
 */
function FiltrosDeRasgo() {
  return (
    <svg aria-hidden="true" focusable="false" className="absolute h-0 w-0 overflow-hidden">
      <filter id="mv-rasgo">
        <feTurbulence type="fractalNoise" baseFrequency="0.014 0.028" numOctaves="4" seed="7" result="ruido" />
        <feDisplacementMap in="SourceGraphic" in2="ruido" scale="13" xChannelSelector="R" yChannelSelector="G" />
      </filter>
      <filter id="mv-rasgo-fino">
        <feTurbulence type="fractalNoise" baseFrequency="0.03 0.05" numOctaves="4" seed="3" result="ruido" />
        <feDisplacementMap in="SourceGraphic" in2="ruido" scale="7" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </svg>
  )
}
