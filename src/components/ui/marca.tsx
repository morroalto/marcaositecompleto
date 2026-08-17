import Image from 'next/image'
import { candidato } from '@/content/candidato'
import { cn } from '@/lib/utils'

/**
 * LOCKUP OFICIAL: MARCÃO / VIVACQUA + barra tricolor + 36.028
 *
 * Reconstruído em HTML porque não existe vetor: no acervo o lockup só aparece
 * dentro de PSD e rasterizado no manual. Como texto, ele escala, fica nítido
 * em qualquer densidade e não custa uma requisição.
 *
 * `soletra` liga o número dígito a dígito para o leitor de tela. Use no H1 e
 * na barra fixa. Nos demais lugares o lockup é a marca, e é lido como nome.
 */
export function Lockup({
  className, comoH1 = false, soletra = false,
}: { className?: string; comoH1?: boolean; soletra?: boolean }) {
  const Tag = comoH1 ? 'h1' : 'span'
  /* NA MARCA NÃO EXISTE PONTO: o separador do 36.028 é um TRIÂNGULO, que é o
     símbolo do Triângulo do Sul. O ponto continua no dado (`candidato.numero`)
     porque é assim que o número se escreve em texto corrido e é assim que a
     Justiça Eleitoral o registra — quem troca o sinal é só o desenho da
     marca. */
  const [antes, depois] = candidato.numero.split('.')
  return (
    <Tag className={cn('mv-lockup', className)}>
      <span className="nome">MARCÃO</span>
      <span className="sob">VIVACQUA</span>
      <span className="num" aria-hidden={soletra || undefined}>
        {antes}
        <i className="tri" aria-hidden="true" />
        {depois}
      </span>
      <span className="barra" aria-hidden="true"><i /><i /><i /></span>
      {soletra && (
        <span className="mv-sr">
          {`${candidato.nomeUrna}, ${candidato.cargo} pelo ${candidato.uf}. `}
          {`Na urna, digite ${candidato.numeroSoletrado}.`}
        </span>
      )}
    </Tag>
  )
}

/**
 * LOCKUP OFICIAL EM ARQUIVO, versão branca com fundo transparente
 * (`public/marca/lockup-branco.png`, do acervo da campanha).
 *
 * Onde a marca aparece sozinha, sobre fundo escuro, e precisa estar EXATA — o
 * cabeçalho e a tela de abertura — vale mais o arquivo do designer do que a
 * reconstrução em HTML: o desenho do "MARCÃO", o peso do "36.028" e a largura
 * da barra tricolor são decisões dele, não minhas.
 *
 * A reconstrução em texto (`Lockup`, acima) continua em uso onde o tamanho
 * varia muito ou onde ele precisa acompanhar o texto ao redor, como no rodapé:
 * ali ela escala sem perder nitidez e não custa uma requisição.
 *
 * `altura` é o que manda no tamanho; a largura vem da proporção do arquivo,
 * que é 3539 por 1500. Sempre com `alt` de verdade, porque é o nome dele.
 */
export function LockupArte({
  className, altura = 40, prioridade = false, fluido = false,
  tamanhos = '(max-width: 1023px) 80vw, 20rem',
}: {
  className?: string; altura?: number; prioridade?: boolean; fluido?: boolean
  /** `sizes` da imagem: quanto da tela a marca ocupa em cada faixa de largura */
  tamanhos?: string
}) {
  /* FLUIDO = a LARGURA manda, e a altura vem sozinha.
     Sem isso, quem precisava de uma marca que acompanha a tela acabava
     escrevendo `altura={52}` mais uma classe de largura, e as duas juntas
     esticavam o desenho — é exatamente o aviso que o Next dá no console
     ("width or height modified, but not the other"). Com `fluido`, a altura
     fixa some e a imagem ocupa a caixa que o pai der.

     Então, no modo fluido, QUEM DEFINE A LARGURA É O PAI, e não a `className`
     daqui: `cn` é concatenação pura, sem tailwind-merge, e uma classe de
     largura passada aqui empilha com o `w-full` em vez de substituí-lo — quem
     ganha vira uma disputa de ordem no CSS. Envolva a marca numa div com a
     largura desejada.

     E AS DIMENSÕES DECLARADAS PASSAM A SER AS DO ARQUIVO (3539×1500), com
     `sizes` dizendo quanto da tela a marca ocupa. Isso não é detalhe: o Next
     escolhe QUAL versão do PNG servir a partir da largura declarada. Com uma
     altura de 40 declarada, a largura vira 94 px, ele serve um arquivo de 94
     px, e o CSS estica esse arquivo até os 300 px da caixa — marca borrada.
     Com o tamanho real mais `sizes`, ele serve a versão do tamanho certo. */
  const fluidoProps = fluido
    ? { width: 3539, height: 1500, sizes: tamanhos }
    : { width: Math.round((altura * 3539) / 1500), height: altura }

  return (
    <Image
      src="/marca/lockup-branco.png"
      alt={`${candidato.nomeUrna}, ${candidato.numero}`}
      {...fluidoProps}
      priority={prioridade}
      className={cn(fluido ? 'h-auto w-full' : 'h-auto w-auto', className)}
      style={fluido ? undefined : { height: altura }}
    />
  )
}

/**
 * O NÚMERO EM MARCA D'ÁGUA
 *
 * Só o 36▲028, monocromático, para entrar no fundo das seções ao lado do
 * abacaxi, do peixe e da plataforma.
 *
 * SÓ O NÚMERO desde 17/08/2026, a pedido. Antes daqui saía o lockup inteiro,
 * com MARCÃO e VIVACQUA escritos, e o nome atrás do texto competia com o texto:
 * marca d'água com palavra legível deixa de ser textura e vira uma segunda
 * camada de leitura. O número não se lê, se reconhece, então ele repete à
 * vontade sem atrapalhar — e repetir é exatamente o que faz o eleitor decorar o
 * que precisa digitar na urna.
 *
 * POR QUE SVG, e não o PNG do acervo nem o lockup em HTML: a marca d'água tem
 * de tomar a cor da seção, como os outros três símbolos. O PNG é branco fixo e
 * sumiria sobre papel claro; o lockup em HTML é dimensionado por `font-size`,
 * e o fundo posiciona tudo por largura (`w-[13rem]`). Em SVG ele aceita
 * `currentColor` e as mesmas classes de largura dos outros símbolos.
 *
 * `textLength` com `lengthAdjust="spacingAndGlyphs"` fixa a largura de cada
 * bloco de dígitos. Sem isso, um fallback de fonte enquanto a Anton carrega
 * mudaria a largura e a marca chegaria torta na tela.
 *
 * As larguras saem de uma MESMA medida por dígito (118 unidades), e não das
 * medidas do lockup: ali o "36" e o "028" ficavam lado a lado com o resto da
 * arte e cada bloco tinha sua própria compressão. Sozinho e ampliado no fundo,
 * dígito mais largo que o vizinho seria defeito visível.
 *
 * O separador é o TRIÂNGULO da marca, e não um ponto.
 */
export function NumeroMarca({ className }: { className?: string }) {
  /* o dado continua sendo `36.028`, com ponto, porque é assim que a Justiça
     Eleitoral registra e é assim que se escreve em texto corrido. Quem troca o
     sinal pelo triângulo é só o desenho. */
  const [antes, depois] = candidato.numero.split('.')
  const DIGITO = 118
  const largura = { antes: antes.length * DIGITO, depois: depois.length * DIGITO }
  const xTri = largura.antes + 24
  const xDepois = xTri + 45 + 24

  /* A CAIXA CABE OS DÍGITOS INTEIROS, e é aqui que estava o número cortado.
     Vale a medida, não a estimativa — esta saiu do `getBBox` do próprio texto
     renderizado no navegador:

         viewBox antigo   y de   0 a 120
         tinta do "36"    y de -62,5 a 159,7   (222 de altura, em corpo 147)

     Ou seja, o desenho era 85% mais alto que a caixa que o continha, e um
     <svg> RECORTA no próprio viewBox: o que passava era decepado, e o que
     chegava na tela era um 36▲028 sem o topo dos dígitos. A conta antiga
     partia da altura de caixa-alta da fonte (~0,73 em); a caixa de texto do
     SVG, porém, vai do ascendente ao descendente, bem mais alta — e é ela que
     manda no recorte.
     `textLength` não socorre em nada disso: ele ajusta largura, nunca altura.

     `overflow-visible` é o cinto além do suspensório: se outra fonte entrar no
     lugar da Anton e for ainda mais alta, ela transborda em vez de ser
     cortada. Marca d'água transbordando não incomoda ninguém; marca d'água
     decepada é o defeito que estamos consertando. */
  const folgaX = 14

  return (
    <svg
      viewBox={`${-folgaX} -66 ${xDepois + largura.depois + folgaX * 2} 232`}
      fill="currentColor"
      className={cn('overflow-visible', className)}
      aria-hidden="true"
      style={{ fontFamily: 'var(--font-display)' }}
    >
      <text x="0" y="110" fontSize="147" textLength={largura.antes} lengthAdjust="spacingAndGlyphs">
        {antes}
      </text>
      <polygon points={`${xTri},110 ${xTri + 45},110 ${xTri + 22.5},68`} />
      <text x={xDepois} y="110" fontSize="147" textLength={largura.depois} lengthAdjust="spacingAndGlyphs">
        {depois}
      </text>
    </svg>
  )
}

/** Barra tricolor. Só dentro do lockup, ou como fio de borda de header e rodapé. */
export function BarraTricolor({ className, altura = 6 }: { className?: string; altura?: number }) {
  return (
    <div className={cn('flex w-full', className)} style={{ height: altura }} aria-hidden="true">
      <i className="flex-1 bg-verde" />
      <i className="flex-1 bg-laranja" />
      <i className="flex-1 bg-amarelo" />
    </div>
  )
}

/** Hachura das páginas 2 e 3 do manual. Decorativa, sempre. */
export function Hachura({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return <div className={cn('mv-hachura', className)} style={style} aria-hidden="true" />
}

/** Estilo cartaz: itálico pesado, contorno branco, sombra dura. */
export function Cartaz({
  children, className, style,
}: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return <span className={cn('mv-cartaz', className)} style={style}>{children}</span>
}
