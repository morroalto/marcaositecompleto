'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { molduraTexto, molduraFoto, arquivo, limites, erros } from '@/content/moldura'
import { conferir, abrir, desenhar, exportar } from '@/lib/moldura'
import { IconeSeta } from '@/components/ui/icones'

/**
 * VISTA A CAMPANHA
 *
 * A pessoa escolhe uma foto dela e leva de volta um quadrado 1500 por 1500 com
 * a marca embaixo, pronto para virar foto de perfil.
 *
 * ⚠️ A FOTO NÃO SOBE PARA LUGAR NENHUM. Ela é lida do disco da pessoa,
 * decodificada no navegador dela e desenhada num canvas dela. Não existe rota
 * de upload neste site, e é de propósito: sem upload não há pasta de fotos de
 * eleitor para vazar, não há base de rosto para a LGPD cobrar, não há como usar
 * o site da campanha para hospedar conteúdo alheio e não há um endereço a mais
 * para alguém atacar. O jeito mais seguro de guardar a foto de alguém é não
 * recebê-la. O que checa formato, peso e tamanho está em `lib/moldura.ts`.
 *
 * O CANVAS NASCE EM 1500 e só encolhe por CSS. Desenhar no tamanho da tela e
 * ampliar na hora de salvar devolveria uma marca serrilhada.
 */
export function Moldura() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const entradaRef = useRef<HTMLInputElement>(null)
  const urlRef = useRef<string | null>(null)

  const [url, setUrl] = useState<string | null>(null)
  const [erro, setErro] = useState<string | null>(null)
  const [ocupado, setOcupado] = useState(false)
  const [arrastando, setArrastando] = useState(false)

  // só devolve a memória do último blob ao sair; sem estado, sem cascata
  useEffect(() => () => { if (urlRef.current) URL.revokeObjectURL(urlRef.current) }, [])

  async function usar(file: File | undefined) {
    if (!file) return
    setErro(null)
    setOcupado(true)
    try {
      const recusa = await conferir(file)
      if (recusa) { setErro(recusa); return }

      const aberta = await abrir(file)
      if (typeof aberta === 'string') { setErro(aberta); return }

      const canvas = canvasRef.current
      if (!canvas) return
      try {
        await desenhar(canvas, aberta)
      } finally {
        // a memória do bitmap é liberada na mão: uma foto de 40 megapixels
        // ocupa mais de 150 MB, e o coletor do navegador não tem pressa
        aberta.close()
      }

      const blob = await exportar(canvas)
      if (urlRef.current) URL.revokeObjectURL(urlRef.current)
      urlRef.current = URL.createObjectURL(blob)
      setUrl(urlRef.current)
    } catch {
      setErro(erros.quebrado)
    } finally {
      setOcupado(false)
      // limpa o input: sem isso, escolher DE NOVO o mesmo arquivo não dispara
      // `change`, e a pessoa acha que o site travou
      if (entradaRef.current) entradaRef.current.value = ''
    }
  }

  return (
    <section id="moldura" className="mv-secao bg-marinho relative overflow-hidden text-white">
      <div className="mv-shell relative flex flex-col gap-9">
        <div className="mx-auto flex max-w-[62ch] flex-col gap-4 text-center lg:mx-0 lg:text-left">
          <p className="mv-kicker text-amarelo">{molduraTexto.kicker}</p>
          <h2 className="text-[clamp(1.45rem,4.6vw,2.25rem)] font-extrabold tracking-tight">
            {molduraTexto.titulo}
          </h2>
          <p className="text-[1.0625rem] leading-relaxed text-white/85 sm:text-[1.15rem]">
            {molduraTexto.chamada}
          </p>
        </div>

        {/* A FOTO DELE FICA À DIREITA porque ele aponta para a esquerda: do
            outro lado, o dedo apontaria para fora da página. Ela some abaixo de
            `lg`, onde a coluna é uma só e o recorte inteiro empurraria o
            gerador para baixo da dobra. */}
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:gap-12">
          <div className="flex flex-col gap-4">
            <div
              onDragOver={(e) => { e.preventDefault(); setArrastando(true) }}
              onDragLeave={() => setArrastando(false)}
              onDrop={(e) => {
                e.preventDefault()
                setArrastando(false)
                void usar(e.dataTransfer.files?.[0])
              }}
              className={[
                'relative flex flex-col items-center gap-5 rounded-[16px] border-2 border-dashed p-5 text-center transition-colors sm:p-7',
                arrastando ? 'border-amarelo bg-white/10' : 'border-white/30 bg-white/5',
              ].join(' ')}
            >
              {/* O QUADRO NUNCA MUDA DE TAMANHO: o canvas fica sempre montado,
                  em 1500 por 1500, e só é escondido enquanto está vazio. Trocar
                  um bloco vazio por um canvas depois pularia a página inteira
                  no exato momento em que a pessoa está olhando para ela. */}
              <div className="relative w-full max-w-[26rem] overflow-hidden rounded-[12px] bg-petroleo">
                <canvas
                  ref={canvasRef}
                  width={arquivo.lado}
                  height={arquivo.lado}
                  aria-label="A sua moldura, pronta para baixar"
                  className={['block h-auto w-full', url ? '' : 'invisible'].join(' ')}
                />
                {!url && (
                  <span className="absolute inset-0 grid place-items-center p-6">
                    <IconeMoldura />
                  </span>
                )}
                {ocupado && (
                  <span className="absolute inset-0 grid place-items-center bg-[rgb(0_59_68/.8)] font-display font-bold">
                    Montando...
                  </span>
                )}
              </div>

              <input
                ref={entradaRef}
                type="file"
                accept={limites.aceita.join(',')}
                onChange={(e) => void usar(e.target.files?.[0])}
                className="mv-sr"
                id="moldura-arquivo"
              />

              <div className="flex w-full flex-col items-center gap-3">
                <label
                  htmlFor="moldura-arquivo"
                  className="mv-btn mv-btn-amarelo w-full cursor-pointer justify-center sm:w-auto"
                >
                  {url ? molduraTexto.trocar : molduraTexto.botao}
                </label>

                {url && (
                  <a
                    href={url}
                    download={arquivo.nome}
                    className="mv-btn w-full justify-center border-2 border-white/45 text-white sm:w-auto"
                  >
                    {molduraTexto.baixar}
                    <IconeSeta tamanho={20} />
                  </a>
                )}

                {/* arrastar arquivo não existe no celular: a frase só aparece
                    onde o gesto existe */}
                <p className="hidden text-[0.9375rem] text-white/60 sm:block">
                  {molduraTexto.arraste}
                </p>
              </div>

              {erro && (
                <p role="alert" className="w-full rounded-[10px] bg-[#7A1B1B] px-4 py-3 text-[1rem] font-semibold">
                  {erro}
                </p>
              )}
            </div>

            <p className="flex items-center justify-center gap-2 text-[0.9375rem] text-white/70 lg:justify-start">
              <IconeCadeado />
              A foto fica no seu aparelho, o desenho é montado aqui no navegador.
            </p>
          </div>

          <div className="hidden lg:block">
            <Image
              src={molduraFoto.src}
              alt={molduraFoto.alt}
              width={molduraFoto.largura}
              height={molduraFoto.altura}
              sizes="22rem"
              loading="lazy"
              /* O RECORTE ACABA EM DESVANECIMENTO, e não numa linha reta.
                 O arquivo corta o corpo dele na altura do quadril, e sobre o
                 azul chapado essa borda aparecia como um risco horizontal
                 atravessando a camisa. A máscara dissolve os últimos 18% e o
                 corte deixa de existir. */
              style={{
                maskImage: 'linear-gradient(to bottom, #000 82%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, #000 82%, transparent 100%)',
              }}
              className="h-auto w-full drop-shadow-[0_28px_45px_rgba(0,0,0,.45)]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/** marca de espaço reservado: uma moldura com uma montanha dentro */
function IconeMoldura() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="rgb(255 255 255 / .3)" strokeWidth="1.5"
      className="h-[64px] w-[64px]" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2.5" />
      <circle cx="8.8" cy="9" r="1.7" />
      <path d="m3.6 17.5 4.6-4.6a1.6 1.6 0 0 1 2.3 0l3.2 3.2m0 0 1.9-1.9a1.6 1.6 0 0 1 2.3 0l2.5 2.5m-6.7-.6 3 3" />
    </svg>
  )
}

function IconeCadeado() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px] shrink-0 text-amarelo"
      aria-hidden="true">
      <rect x="4" y="10.5" width="16" height="10" rx="2" />
      <path d="M8 10.5V7.6a4 4 0 0 1 8 0v2.9" />
    </svg>
  )
}
