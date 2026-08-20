'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import {
  molduraTexto, molduraFoto, arquivo, limites, erros,
} from '@/content/moldura'
import { conferir, abrir, desenhar, exportar } from '@/lib/moldura'
import { IconeSeta } from '@/components/ui/icones'
import { cn } from '@/lib/utils'

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
 *
 * ── A CENA ──
 *
 * Duas colunas: o gerador à esquerda, ele à direita, em pé sobre um disco.
 *
 * Refeita duas vezes no mesmo dia, e vale registrar por quê. A primeira era um
 * retângulo tracejado com um buraco escuro dentro, e estava crua. A segunda
 * respondeu a isso empilhando enfeite — hachura, clarão, número espalhado e
 * dois cartões flutuando — e ficou pior, porque cartão flutuante caía em cima
 * do ombro e da mão dele, e o que se lia era colisão. Enfeite empilhado não é
 * composição.
 *
 * O que ficou: TRÊS elementos atrás dele (disco, anel, número) e mais nada. O
 * tracejado saiu, porque gritava "solte aqui" o tempo todo, inclusive no
 * celular, onde não existe soltar. O quadro vazio virou EXEMPLO, com a mesma
 * marca e o mesmo pé verde do arquivo que vai sair.
 *
 */
export function Moldura() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const entradaRef = useRef<HTMLInputElement>(null)
  const cameraRef = useRef<HTMLInputElement>(null)
  const urlRef = useRef<string | null>(null)
  /* o Blob em si, e não só a URL: `navigator.share` recebe File, não link */
  const blobRef = useRef<Blob | null>(null)

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
      blobRef.current = blob
      if (urlRef.current) URL.revokeObjectURL(urlRef.current)
      urlRef.current = URL.createObjectURL(blob)
      setUrl(urlRef.current)
    } catch {
      setErro(erros.quebrado)
    } finally {
      setOcupado(false)
      /* limpa OS DOIS inputs: sem isso, escolher de novo o mesmo arquivo não
         dispara `change`, e a pessoa acha que o site travou. Os dois, e não só
         o usado, porque tirar uma foto e depois escolher a mesma da galeria é
         um caminho real. */
      if (entradaRef.current) entradaRef.current.value = ''
      if (cameraRef.current) cameraRef.current.value = ''
    }
  }

  /**
   * SALVAR.
   *
   * NO CELULAR, `<a download>` NÃO VAI PARA A GALERIA. Ele joga o arquivo na
   * pasta de downloads, e no Safari do iPhone costuma nem baixar: abre a
   * imagem numa aba. Quem coloca a foto no rolo da câmera é a folha de
   * compartilhamento do sistema, com o "Salvar imagem" dela — e o caminho para
   * chamá-la é `navigator.share` com um File.
   *
   * O link continua existindo por baixo, com `href` e `download`, e é ele que
   * responde no desktop e em qualquer navegador sem a API. Só cancelamos o
   * comportamento padrão quando temos certeza de que o compartilhamento vai
   * funcionar: `canShare` com o arquivo na mão, não `'share' in navigator` —
   * há navegador que anuncia a API e recusa arquivo.
   *
   * A checagem acontece NO CLIQUE, e não na montagem, de propósito: decidir na
   * montagem exigiria estado, e estado que muda depois da hidratação faz o
   * botão trocar de cara na frente da pessoa.
   */
  async function aoSalvar(e: React.MouseEvent<HTMLAnchorElement>) {
    const blob = blobRef.current
    if (!blob) return
    const ficheiro = new File([blob], arquivo.nome, { type: arquivo.tipo })
    if (!navigator.canShare?.({ files: [ficheiro] })) return   // segue como download

    e.preventDefault()
    try {
      await navigator.share({ files: [ficheiro], title: molduraTexto.titulo })
    } catch {
      /* cancelar a folha lança AbortError, e cancelar não é erro: a pessoa
         mudou de ideia. Sem este catch, uma promessa rejeitada suja o console
         e, no modo estrito, derruba a página em desenvolvimento. */
    }
  }

  return (
    <section id="moldura" className="mv-secao bg-marinho relative overflow-hidden text-white">
      {/* SEM FUNDO ESPALHADO AQUI. A primeira versão tinha hachura, clarão,
          número espalhado e dois cartões flutuando ao mesmo tempo, e o
          resultado foi o que parecia: cinco coisas disputando, nenhuma
          mandando. O único número desta seção é o grande, dentro do disco. */}

      <div className="mv-shell relative grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)] lg:gap-14">
        <div className="flex flex-col gap-7">
          <div className="mx-auto flex max-w-[62ch] flex-col gap-4 text-center lg:mx-0 lg:text-left">
            <p className="mv-kicker text-amarelo">{molduraTexto.kicker}</p>
            <h2 className="text-[clamp(1.45rem,4.6vw,2.25rem)] font-extrabold tracking-tight">
              {molduraTexto.titulo}
            </h2>
            <p className="text-[1.0625rem] leading-relaxed text-white/85 sm:text-[1.15rem]">
              {molduraTexto.chamada}
            </p>
          </div>

          {/* ── o gerador ──
              Painel sólido, sem contorno. O tracejado saiu: ele gritava "solte
              aqui" o tempo todo, inclusive no celular, onde não existe soltar.
              A moldura amarela agora só existe durante o arrasto. */}
          <div
            onDragOver={(e) => { e.preventDefault(); setArrastando(true) }}
            onDragLeave={() => setArrastando(false)}
            onDrop={(e) => {
              e.preventDefault()
              setArrastando(false)
              void usar(e.dataTransfer.files?.[0])
            }}
            className={cn(
              /* SEM PAINEL. O retângulo escuro atrás disto era só um bloco a
                 mais sobre o azul, com canto duro e sem função. O quadro da
                 peça já tem borda, sombra e cor própria: ele se sustenta
                 sozinho. A moldura amarela só existe durante o arrasto. */
              'relative flex flex-col items-center gap-5 rounded-[18px] p-1 text-center transition-all',
              arrastando && 'bg-[rgb(255_212_0/.12)] p-4 outline outline-3 outline-amarelo',
            )}
          >
            {/* O QUADRO NUNCA MUDA DE TAMANHO: o canvas fica sempre montado, em
                1500 por 1500, e só é escondido enquanto está vazio. Trocar um
                bloco vazio por um canvas depois pularia a página inteira no
                exato momento em que a pessoa está olhando para ela. */}
            <div className="relative w-full max-w-[25rem] overflow-hidden rounded-[14px] bg-petroleo shadow-[0_10px_30px_rgba(0,0,0,.35)]">
              <canvas
                ref={canvasRef}
                width={arquivo.lado}
                height={arquivo.lado}
                aria-label="A sua moldura, pronta para baixar"
                className={cn('block h-auto w-full', !url && 'invisible')}
              />

              {/* VAZIO NÃO É BURACO: enquanto não há foto, o quadro mostra uma
                  peça pronta de verdade, com a mesma marca e o mesmo pé verde
                  que o arquivo vai ter. */}
              {/* VAZIO É VAZIO: o quadro escuro e um ícone, e nada mais.
                  Passei por uma paisagem de exemplo e por uma moldura de
                  mentira aqui dentro; as duas davam a entender que já havia
                  peça pronta antes de a pessoa escolher a foto. */}
              {!url && (
                <span className="absolute inset-0 grid place-items-center p-6">
                  <IconeFoto />
                </span>
              )}

              {ocupado && (
                <span className="absolute inset-0 grid place-items-center bg-[rgb(0_59_68/.85)] font-display font-bold">
                  {molduraTexto.montando}
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

            {/* TIRAR NA HORA.

                `capture` SEM LADO ESCOLHIDO, a pedido: assim a câmera abre
                direto, e quem decide entre frontal e traseira é a pessoa, no
                botão de virar do próprio aplicativo de câmera.

                Passou por `user` e por `environment` antes disto. `user` força
                a frontal, e frontal entrega foto espelhada em quase todo
                aparelho — o preview funciona como espelho de banheiro e boa
                parte grava assim. Desespelhar no canvas não resolve: quem grava
                certo passaria a sair invertido, e não há como saber pelo
                arquivo se o aparelho espelhou. `environment` resolvia o espelho
                mas tirava a selfie da mesa. Sem lado, as duas ficam a um toque
                de distância e o espelho vira escolha de quem fotografa.

                `accept="image/*"` aqui, e não a lista dos três formatos: o
                aparelho decide como grava e alguns iPhones gravam HEIC, então
                restringir faria a câmera nem abrir. Quem barra formato que não
                serve é a checagem de bytes, depois, com mensagem. */}
            <input
              ref={cameraRef}
              type="file"
              accept="image/*"
              capture
              onChange={(e) => void usar(e.target.files?.[0])}
              className="mv-sr"
              id="moldura-camera"
            />

            <div className="flex w-full flex-col items-center gap-3">
              <label
                htmlFor="moldura-arquivo"
                className="mv-btn mv-btn-amarelo w-full cursor-pointer justify-center sm:w-auto"
              >
                {url ? molduraTexto.trocar : molduraTexto.botao}
              </label>

              {/* só em tela de toque: no desktop este botão abriria o mesmo
                  seletor de arquivos do botão de cima, dois botões fazendo a
                  mesma coisa com nomes diferentes */}
              <label
                htmlFor="moldura-camera"
                className="mv-btn mv-so-toque w-full cursor-pointer justify-center border-2 border-white/45 text-white"
              >
                <IconeCamera />
                {molduraTexto.tirar}
              </label>

              {url && (
                <a
                  href={url}
                  download={arquivo.nome}
                  onClick={aoSalvar}
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

        </div>

        {/* ── O PALCO ──
            Ele fica à direita porque aponta para a esquerda: do outro lado, o
            dedo apontaria para fora da página.

            TRÊS ELEMENTOS, e não sete: o disco, o anel e o número. Os cartões
            que flutuavam aqui saíram — eles caíam em cima do ombro e da mão
            dele, e o que se lia era colisão, não montagem. O exemplo do
            resultado continua existindo, dentro do quadro do gerador, que é
            onde alguém que quer ver o resultado vai olhar.

            Ele encosta no pé da seção (`-mb`) em vez de boiar no meio: gente
            recortada apoiada na borda parece de pé, gente recortada centrada
            no vazio parece adesivo. */}
        <div className="relative hidden self-end lg:block">
          <div aria-hidden="true" className="absolute inset-0 grid place-items-center">
            {/* O DISCO, chapado. Ele é o que descola o recorte do azul: sem um
                fundo próprio, camisa escura sobre marinho vira vulto.

                A COR VEM DA VARIÁVEL CSS, não de uma classe. `--marinho-2`
                existe em `globals.css` como token de cor, mas não foi exportada
                no `@theme` do Tailwind, então `bg-marinho-2` não gera regra
                nenhuma — foi por isso que o disco não apareceu na primeira
                tentativa: a classe existia no HTML e não existia no CSS. */}
            <span
              className="absolute h-[27rem] w-[27rem] translate-y-[-6%] rounded-full"
              style={{ background: 'var(--marinho-2)' }}
            />
            <span className="absolute h-[31rem] w-[31rem] translate-y-[-6%] rounded-full border-2 border-amarelo/30" />
            {/* O NÚMERO SAIU DAQUI. Ele ficava no miolo do disco, e o corpo
                dele cobria justamente o meio: sobrava um pedaço de dígito de
                cada lado, que não se lê como marca, se lê como borrão. Marca
                d'água tapada pela metade é sujeira, não textura. */}
          </div>

          <Image
            src={molduraFoto.src}
            alt={molduraFoto.alt}
            width={molduraFoto.largura}
            height={molduraFoto.altura}
            sizes="24rem"
            loading="lazy"
            /* SEM SOMBRA. O `drop-shadow` desenhava um halo escuro rente ao
               contorno do recorte, e sobre azul chapado isso lê como sujeira de
               recorte mal feito, não como profundidade. Quem separa ele do
               fundo agora é o disco atrás. */
            className="relative z-10 -mb-[var(--secao)] h-auto w-full"
          />
        </div>
      </div>
    </section>
  )
}

function IconeCamera() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" className="h-[22px] w-[22px] shrink-0"
      aria-hidden="true">
      <path d="M3 8.5h3.2l1.6-2.4h8.4l1.6 2.4H21v11H3v-11Z" />
      <circle cx="12" cy="13.6" r="3.6" />
    </svg>
  )
}

function IconeFoto() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="rgb(255 255 255 / .3)" strokeWidth="1.5"
      className="h-[64px] w-[64px]" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2.5" />
      <circle cx="8.8" cy="9" r="1.7" />
      <path d="m3.6 17.5 4.6-4.6a1.6 1.6 0 0 1 2.3 0l3.2 3.2m0 0 1.9-1.9a1.6 1.6 0 0 1 2.3 0l2.5 2.5" />
    </svg>
  )
}
