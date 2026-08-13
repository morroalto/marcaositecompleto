'use client'

import { useState } from 'react'
import type { Video } from '@/content/videos'
import { MOSTRAR_PENDENCIAS } from '@/content/flags'

/**
 * PLAYER
 *
 * O vídeo só é baixado depois que a pessoa toca no play. Antes disso o que
 * existe na tela é uma capa estática. Isso importa porque o público chega em
 * 4G instável, e um `<video>` com preload come a franquia sem ninguém pedir.
 *
 * O quadro reserva a proporção declarada, então não há salto de layout.
 * Sem vídeo, o componente não renderiza: nada de player vazio.
 */
export function Player({ video, className }: { video: Video; className?: string }) {
  const [tocando, setTocando] = useState(false)

  if (!video.src) {
    if (!MOSTRAR_PENDENCIAS) return null
    return (
      <div className={className}>
        <div
          className="mv-todo grid place-items-center text-center"
          style={{ aspectRatio: video.proporcao }}
        >
          <span>
            <b>Campo de vídeo reservado</b>
            {video.titulo}. Coloque o arquivo em <code>public/videos/</code> e preencha{' '}
            <code>src</code> e <code>capa</code> em <code>content/videos.ts</code>.
          </span>
        </div>
      </div>
    )
  }

  return (
    <figure className={className} style={{ margin: 0 }}>
      <div
        className="relative overflow-hidden rounded-[10px] bg-petroleo"
        style={{ aspectRatio: video.proporcao }}
      >
        {tocando ? (
          <video
            className="h-full w-full"
            src={video.src}
            poster={video.capa ?? undefined}
            controls
            autoPlay
            playsInline
            preload="metadata"
          >
            {video.legendas && (
              <track kind="captions" srcLang="pt-BR" label="Português" src={video.legendas} default />
            )}
          </video>
        ) : (
          <button
            type="button"
            onClick={() => setTocando(true)}
            className="group absolute inset-0 h-full w-full cursor-pointer border-0 p-0"
            aria-label={`Assistir: ${video.titulo}`}
          >
            {video.capa && (
              // capa estática: é só uma imagem até a pessoa pedir o vídeo
              // eslint-disable-next-line @next/next/no-img-element
              <img src={video.capa} alt="" className="h-full w-full object-cover" loading="lazy" />
            )}
            <span className="absolute inset-0 grid place-items-center bg-[rgb(0_59_68/.42)] transition-colors group-hover:bg-[rgb(0_59_68/.30)]">
              <span className="grid h-[72px] w-[72px] place-items-center rounded-full bg-laranja shadow-[0_6px_0_#C45E00]">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="#08222A" aria-hidden="true">
                  <path d="M8 5.2v13.6L19 12 8 5.2Z" />
                </svg>
              </span>
            </span>
          </button>
        )}
      </div>
      <figcaption className="mt-3 text-[1.0625rem] leading-relaxed opacity-85">
        {video.descricao}
      </figcaption>
    </figure>
  )
}
