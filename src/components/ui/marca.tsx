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
 * ASSINATURA EM MARCA D'ÁGUA
 *
 * O lockup desenhado em SVG, monocromático, para entrar no fundo das seções ao
 * lado do abacaxi, do peixe e da plataforma.
 *
 * POR QUE SVG, e não o PNG do acervo nem o lockup em HTML: a marca d'água tem
 * de tomar a cor da seção, como os outros três símbolos. O PNG é branco fixo e
 * sumiria sobre papel claro; o lockup em HTML é dimensionado por `font-size`,
 * e o fundo posiciona tudo por largura (`w-[13rem]`). Em SVG ele aceita
 * `currentColor` e as mesmas classes de largura dos outros símbolos.
 *
 * A GEOMETRIA foi medida na arte oficial (`lockup-branco.png`, 3539×1500) e
 * está em unidades do viewBox: MARCÃO cheio na largura, VIVACQUA e a barra na
 * coluna da esquerda, o número à direita, todos apoiados na mesma base.
 *
 * `textLength` com `lengthAdjust="spacingAndGlyphs"` fixa a largura de cada
 * palavra. Sem isso, um fallback de fonte enquanto a Anton carrega mudaria a
 * largura e a marca chegaria torta na tela — aqui ela ocupa sempre a mesma
 * caixa, aconteça o que acontecer com a fonte.
 *
 * O separador é o TRIÂNGULO da marca, e não um ponto.
 */
export function Assinatura({
  className, tricolor = false,
}: { className?: string; tricolor?: boolean }) {
  const cores = tricolor
    ? ['var(--verde)', 'var(--laranja)', 'var(--amarelo)']
    : ['currentColor', 'currentColor', 'currentColor']

  return (
    <svg
      viewBox="0 0 1290 500"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      style={{ fontFamily: 'var(--font-display)' }}
    >
      <text x="0" y="285" fontSize="308" textLength="1290" lengthAdjust="spacingAndGlyphs">
        MARCÃO
      </text>
      <text x="0" y="420" fontSize="119" textLength="610" lengthAdjust="spacingAndGlyphs">
        VIVACQUA
      </text>

      {/* a barra herda a largura do VIVACQUA, como na marca */}
      {cores.map((cor, i) => (
        <rect key={i} x={i * 205} y="440" width="205" height="48" fill={cor} />
      ))}

      <text x="645" y="455" fontSize="147" textLength="205" lengthAdjust="spacingAndGlyphs">
        36
      </text>
      <polygon points="860,455 905,455 882.5,415" />
      <text x="925" y="455" fontSize="147" textLength="365" lengthAdjust="spacingAndGlyphs">
        028
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
