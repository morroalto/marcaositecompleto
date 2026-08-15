import Image from 'next/image'
import { capitulos, linhaDoTempoTexto } from '@/content/trajetoria'

/**
 * TRAJETÓRIA EM QUATRO CAPÍTULOS
 *
 * Formato da arte de referência da campanha: uma grade de dois por dois, cada
 * bloco com chapéu, título, texto e foto.
 *
 * Substituiu a linha do tempo de seis marcos com o ano na margem. A diferença
 * não é de layout, é de narrativa: a linha do tempo contava a vida em datas
 * soltas, e estes quatro capítulos contam em etapas — origem, família, preparo
 * e projeto. Quem lê sai sabendo a história, não a cronologia.
 *
 * Enquanto uma foto não chega, o bloco simplesmente não mostra quadro nenhum:
 * nada de moldura vazia ou de imagem de enfeite tapando o buraco. Assim que o
 * arquivo entrar em `public/fotos/` com o nome que está no conteúdo, a imagem
 * aparece sozinha.
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

        <ul className="grid items-stretch gap-6 lg:grid-cols-2">
          {capitulos.map((c) => (
            <li
              key={c.slug}
              className="flex h-full flex-col gap-3 rounded-[14px] bg-white p-6 shadow-[0_2px_0_var(--linha)] sm:p-7"
            >
              <p className="mv-kicker text-[#2F5C1B]">{c.chapeu}</p>
              <h3 className="text-[clamp(1.25rem,3.4vw,1.75rem)] font-extrabold tracking-tight">
                {c.titulo}
              </h3>
              <p className="text-[1.0625rem] leading-relaxed text-fraca">{c.texto}</p>

              {c.foto && (
                <div className="relative mt-2 aspect-16/10 w-full overflow-hidden rounded-[10px] bg-petroleo">
                  <Image
                    src={`/fotos/${c.foto}.${c.ext}`}
                    alt={c.alt}
                    fill
                    sizes="(max-width: 1023px) 92vw, 34rem"
                    loading="lazy"
                    className="object-cover"
                  />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
