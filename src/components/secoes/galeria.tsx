'use client'

import { useEffect, useState } from 'react'
import { momentos, galeriaTexto, proporcaoDosVideos } from '@/content/galeria'
import { FundoNumero } from '@/components/ui/simbolos'
import { anunciarMidia, midiaTocando } from '@/lib/midia'

/**
 * PERTO DE QUEM PRECISA
 *
 * Três espaços de vídeo em 16 por 9, e só. As fotos e as legendas que estavam
 * aqui saíram: o lugar é dos vídeos, e foto de enfeite ocupando o buraco só
 * atrasa a leitura de quem passa.
 *
 * Sem arquivo, o quadro fica vazio, com a moldura e a proporção reservadas.
 * Com arquivo, o mesmo quadro vira player, sem mexer em layout.
 *
 * Padrão fachada, e ele importa aqui mais do que em qualquer outro lugar do
 * site: até o toque, o que existe é uma imagem de capa servida do NOSSO
 * domínio. O iframe do YouTube só entra depois. Sem isso, três iframes
 * carregariam perto de 3 MB e um punhado de cookies de terceiro sem ninguém
 * ter pedido, no 4G de quem mora aqui.
 *
 * UM VÍDEO DE CADA VEZ, e o jingle cala enquanto ele roda. `tocando` guarda um
 * slug só, então abrir o segundo desmonta o iframe do primeiro — o vídeo
 * anterior não fica tocando escondido atrás do quadro fechado. O `anunciarMidia`
 * avisa o resto da página (hoje, o jingle) que o som agora é do vídeo.
 */
export function Galeria() {
  const [tocando, setTocando] = useState<string | null>(null)

  /* se a seção sair da tela com um vídeo aberto (navegação para outra rota),
     o jingle precisa saber que o palco está livre de novo. A conferência do
     `midiaTocando` evita o caso de trocar de vídeo: aí a limpeza do anterior
     roda DEPOIS de o novo já ter se anunciado, e sem ela liberaria o som que
     não é dela. */
  useEffect(() => {
    if (!tocando) return
    return () => { if (midiaTocando() === tocando) anunciarMidia(null) }
  }, [tocando])

  function abrir(slug: string) {
    setTocando(slug)
    anunciarMidia(slug)
  }

  function fechar() {
    setTocando(null)
    anunciarMidia(null)
  }

  return (
    <section id="presenca" className="mv-secao relative overflow-hidden bg-papel">
      {/* variante "c": as vizinhas usam "a" (escuta) e as economias, então esta
          não repete o arranjo de ninguém perto dela */}
      <FundoNumero variante="c" className="text-marinho opacity-[.05]" />

      <div className="mv-shell relative flex flex-col gap-8">
        <div className="flex max-w-[62ch] flex-col gap-4 text-center sm:text-left">
          <p className="mv-kicker text-[#2F5C1B]">{galeriaTexto.kicker}</p>
          <h2 className="text-[clamp(1.45rem,4.6vw,2.25rem)] font-extrabold tracking-tight">
            {galeriaTexto.titulo}
          </h2>
          <p className="text-[1.0625rem] leading-relaxed text-fraca sm:text-[1.15rem]">
            {galeriaTexto.chamada}
          </p>
        </div>

        {/* QUADROS GRANDES. Três em 16 por 9 numa linha só davam faixas
            baixinhas, menores que o vídeo que vai entrar nelas. A proporção
            agora vem de `proporcaoDosVideos`, no conteúdo, e está em vertical,
            que é o formato de vídeo de campanha gravado no celular. No
            desktop, os três dividem a largura do shell; no celular cada um
            ocupa a largura inteira, com teto de altura para o quadro vertical
            não tomar a tela toda. */}
        <ul className="grid gap-5 sm:grid-cols-3">
          {momentos.map((m) => (
            <li key={m.slug}>
              <div
                className="relative mx-auto max-h-[70vh] w-full overflow-hidden rounded-[10px] bg-petroleo"
                style={{ aspectRatio: proporcaoDosVideos }}
              >
                {tocando === m.slug && m.src ? (
                  <>
                    {m.tipo === 'youtube' ? (
                      <iframe
                        className="absolute inset-0 h-full w-full border-0"
                        src={`https://www.youtube-nocookie.com/embed/${m.src}?autoplay=1&rel=0&modestbranding=1&hl=pt-BR`}
                        title={m.titulo}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    ) : (
                      <video
                        className="h-full w-full"
                        src={m.src}
                        poster={m.capa ?? undefined}
                        controls autoPlay playsInline preload="metadata"
                        onEnded={fechar}
                      />
                    )}
                  </>
                ) : m.src ? (
                  <button
                    type="button"
                    onClick={() => abrir(m.slug)}
                    aria-label={`Assistir: ${m.titulo}`}
                    className="group absolute inset-0 grid cursor-pointer place-items-center border-0 p-0"
                    style={
                      m.capa
                        ? {
                            backgroundImage: `url(${m.capa})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                          }
                        : undefined
                    }
                  >
                    <span className="absolute inset-0 bg-[rgb(0_59_68/.34)] transition-colors group-hover:bg-[rgb(0_59_68/.2)]" />
                    <span className="relative grid h-[64px] w-[64px] place-items-center rounded-full bg-laranja shadow-[0_5px_0_#C45E00] transition-transform group-hover:scale-105">
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="#08222A" aria-hidden="true">
                        <path d="M8 5.2v13.6L19 12 8 5.2Z" />
                      </svg>
                    </span>
                  </button>
                ) : (
                  /* espaço reservado: moldura, proporção e um sinal discreto de
                     que ali entra vídeo. Sem texto de "em breve". */
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 grid place-items-center"
                  >
                    <span className="grid h-[58px] w-[58px] place-items-center rounded-full border-2 border-white/25">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="rgb(255 255 255 / .3)">
                        <path d="M8 5.2v13.6L19 12 8 5.2Z" />
                      </svg>
                    </span>
                  </span>
                )}
              </div>

              {/* FECHAR, e EMBAIXO do quadro, nunca por cima dele.
                  Sem este botão, o único jeito de calar o vídeo seria pausar
                  dentro do player do YouTube, e o jingle nunca voltaria: não
                  temos como saber que ele parou sem carregar a API do YouTube,
                  que é justamente o script de terceiro que a fachada existe
                  para evitar.
                  Dentro do quadro ele não cabe: o canto de cima é onde o
                  YouTube põe título, compartilhar e assistir mais tarde, e um
                  "x" nosso ali disputaria o toque com os controles deles. */}
              {tocando === m.slug && m.src && (
                <button
                  type="button"
                  onClick={fechar}
                  aria-label={`Fechar o vídeo: ${m.titulo}`}
                  className="mt-3 inline-flex min-h-[44px] items-center gap-2 rounded-full border-2 border-marinho/25 px-4 font-display text-[0.9375rem] font-bold text-marinho transition-colors hover:border-marinho hover:bg-marinho hover:text-white"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2.6" strokeLinecap="round" aria-hidden="true">
                    <path d="m6 6 12 12M18 6 6 18" />
                  </svg>
                  Fechar o vídeo
                </button>
              )}

              {m.legenda && (
                <p className="mt-3 text-[1.0625rem] leading-relaxed text-fraca">{m.legenda}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
