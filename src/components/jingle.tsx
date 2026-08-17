'use client'

import { useEffect, useRef, useState } from 'react'
import { midiaTocando, ouvirMidia } from '@/lib/midia'

/**
 * JINGLE
 *
 * Toca a trilha do jingle da campanha em laço, com um botão fixo para mudar.
 *
 * O JINGLE SEMPRE PERDE PARA O VÍDEO. Quando alguém abre um dos vídeos, o
 * jingle cala na hora e volta sozinho quando o vídeo é fechado, desde que a
 * pessoa não o tenha desligado ela mesma. Duas fontes de som ao mesmo tempo
 * não é decisão de ninguém, é defeito.
 *
 * ⚠️ A VERDADE SOBRE O AUTOPLAY: navegador nenhum deixa tocar som sozinho sem
 * o usuário ter interagido com a página. Chrome, Safari e Firefox bloqueiam, e
 * o `play()` é rejeitado em silêncio. Não existe truque que contorne isso de
 * forma confiável, e quem promete o contrário está enganando.
 *
 * O que este componente faz, então:
 *
 *  1. TENTA tocar assim que a página abre. Em quem já visitou o site antes, o
 *     Chrome costuma liberar (ele guarda um índice de engajamento por domínio),
 *     e aí o som começa sozinho de verdade.
 *  2. Se o navegador barrar, o botão aparece PULSANDO com "ouvir o jingle".
 *     Um toque resolve, e é o gesto que o navegador estava exigindo.
 *  3. Qualquer primeiro toque na página também destrava, sem precisar acertar
 *     o botão.
 *
 * A escolha fica guardada: quem mudou não ouve de novo ao navegar.
 *
 * Volume em 45%, de propósito. Som de campanha estourando na primeira visita
 * faz a pessoa fechar a aba, e aí não adianta o site ser bom.
 */
export function Jingle() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [tocando, setTocando] = useState(false)
  const [bloqueado, setBloqueado] = useState(false)
  const [pronto, setPronto] = useState(false)
  const [videoNoAr, setVideoNoAr] = useState(false)
  /** estava tocando quando o vídeo entrou? então tem de voltar quando ele sair */
  const retomarRef = useRef(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = 0.45
    setPronto(true)

    const mudo = () => localStorage.getItem('mv-jingle') === 'mudo'

    let destravou = false
    const tocar = () => {
      // vídeo aberto manda em tudo: nem o autoplay nem o gesto furam a fila
      if (destravou || mudo() || midiaTocando()) return
      destravou = true
      audio
        .play()
        .then(() => { setTocando(true); setBloqueado(false) })
        .catch(() => { destravou = false; setBloqueado(true) })
    }

    /* O VÍDEO SILENCIA O JINGLE.
       `retomarRef` guarda se ele estava no ar: só volta o que foi interrompido
       por nós. Quem apertou o botão de mudo continua no silêncio que pediu. */
    const pararEscuta = ouvirMidia((id) => {
      setVideoNoAr(id !== null)
      if (id !== null) {
        /* `if`, e NÃO `retomarRef.current = !audio.paused`. Trocar de vídeo
           dispara este aviso outra vez, e nessa segunda vez o jingle já está
           parado — a atribuição direta zerava a lembrança e ele nunca voltava
           ao fechar. A marca só se levanta, quem a abaixa é o retorno. */
        if (!audio.paused) retomarRef.current = true
        audio.pause()
        setTocando(false)
        setBloqueado(false)
        return
      }
      if (!retomarRef.current || mudo()) return
      retomarRef.current = false
      audio.play().then(() => setTocando(true)).catch(() => setBloqueado(true))
    })

    if (!mudo()) {
      tocar()
      // qualquer gesto na página serve como destrave
      const gestos = ['pointerdown', 'keydown', 'touchstart'] as const
      const aoGesto = () => tocar()
      gestos.forEach((g) => document.addEventListener(g, aoGesto, { once: true, passive: true }))
      return () => {
        gestos.forEach((g) => document.removeEventListener(g, aoGesto))
        pararEscuta()
      }
    }
    return pararEscuta
  }, [])

  function alternar() {
    const audio = audioRef.current
    if (!audio) return
    // decisão manual apaga a lembrança: o que a pessoa escolher agora vale mais
    // do que o que estava tocando antes de algum vídeo
    retomarRef.current = false
    if (tocando) {
      audio.pause()
      setTocando(false)
      localStorage.setItem('mv-jingle', 'mudo')
    } else {
      audio.play()
        .then(() => { setTocando(true); setBloqueado(false) })
        .catch(() => setBloqueado(true))
      localStorage.setItem('mv-jingle', 'toca')
    }
  }

  return (
    <>
      {/* `loop` mantém a trilha rodando. `preload="auto"` porque o arquivo tem
          192 kb e precisa estar pronto no instante do gesto: carregar só depois
          do toque atrasaria o som em segundos no 4G. */}
      <audio ref={audioRef} loop preload="auto" aria-hidden="true">
        <source src="/audio/jingle.opus" type="audio/ogg; codecs=opus" />
        <source src="/audio/jingle.m4a" type="audio/mp4" />
      </audio>

      {/* com vídeo no ar o botão sai de cena: não existe jingle para controlar,
          e um controle de som visível ao lado de um vídeo tocando só convida a
          pessoa a ligar as duas coisas juntas */}
      {pronto && !videoNoAr && (
        <button
          type="button"
          onClick={alternar}
          aria-pressed={tocando}
          aria-label={tocando ? 'Desligar o jingle' : 'Ouvir o jingle da campanha'}
          className={[
            'mv-nao-imprime fixed right-4 z-[80] flex items-center gap-2 rounded-full',
            'border-2 px-4 font-display text-[0.9375rem] font-extrabold shadow-[0_4px_0_rgba(0,0,0,.25)]',
            'min-h-[52px] transition-colors',
            // sobe acima da barra fixa no celular; canto de baixo no desktop
            'bottom-[calc(var(--barra-h)+1rem)] lg:bottom-6',
            tocando
              ? 'border-amarelo bg-amarelo text-[#003B44]'
              : 'border-white/50 bg-petroleo text-white',
            bloqueado ? 'mv-pulsa border-amarelo' : '',
          ].join(' ')}
        >
          {tocando ? <IconeSom /> : <IconeMudo />}
          <span>{bloqueado ? 'Ouvir o jingle' : tocando ? 'Som ligado' : 'Som desligado'}</span>
        </button>
      )}
    </>
  )
}

function IconeSom() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 9v6h3.5L13 19.5v-15L7.5 9H4Z" />
      <path d="M16.5 8.8a4.5 4.5 0 0 1 0 6.4M19.2 6.2a8 8 0 0 1 0 11.6" />
    </svg>
  )
}

function IconeMudo() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 9v6h3.5L13 19.5v-15L7.5 9H4Z" />
      <path d="m16.5 9.5 5 5M21.5 9.5l-5 5" />
    </svg>
  )
}
