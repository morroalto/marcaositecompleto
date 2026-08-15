/**
 * ÍCONES
 *
 * SVG próprio, desenhado aqui. Nada de biblioteca: a vault proíbe lucide e
 * companhia, e ícone de biblioteca é um dos sinais de site genérico.
 *
 * Todos herdam `currentColor` e o traço acompanha o peso do texto ao lado.
 * Decorativos por padrão (`aria-hidden`): quem dá o nome acessível é o texto
 * do link, nunca o ícone.
 */
type Props = { className?: string; tamanho?: number }

function Svg({ children, className, tamanho = 24, viewBox = '0 0 24 24' }:
  Props & { children: React.ReactNode; viewBox?: string }) {
  return (
    <svg
      className={className} width={tamanho} height={tamanho} viewBox={viewBox}
      fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true" focusable="false"
    >
      {children}
    </svg>
  )
}

/**
 * ÍCONES DE CONTEÚDO
 *
 * Substituíram os emojis do protótipo em 15/08/2026. Emoji não é ícone: o
 * desenho é do sistema operacional, muda de forma e de cor a cada aparelho,
 * vem colorido no meio de uma paleta fechada e some no leitor de tela ou é
 * lido em voz alta como "urna de votação". Estes aqui herdam `currentColor`,
 * acompanham o peso do texto ao lado e são iguais em todo lugar.
 *
 * `IconeDe` traduz a chave que está no conteúdo (`icone: 'pino'`) para o
 * desenho, para o texto não precisar saber de componente.
 */

export function IconePino({ className, tamanho }: Props) {
  return (
    <Svg className={className} tamanho={tamanho}>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </Svg>
  )
}

export function IconeCasa({ className, tamanho }: Props) {
  return (
    <Svg className={className} tamanho={tamanho}>
      <path d="M3.5 10.5 12 3.5l8.5 7" />
      <path d="M5.5 9.5V20h13V9.5" />
      <path d="M10 20v-5.5h4V20" />
    </Svg>
  )
}

export function IconeAlianca({ className, tamanho }: Props) {
  return (
    <Svg className={className} tamanho={tamanho}>
      <circle cx="12" cy="14.5" r="6" />
      <path d="M9 5h6l-3 3.5L9 5Z" />
      <path d="M9 5h6" />
    </Svg>
  )
}

export function IconeBroto({ className, tamanho }: Props) {
  return (
    <Svg className={className} tamanho={tamanho}>
      <path d="M12 21v-8" />
      <path d="M12 13c0-3.3-2.7-6-6-6 0 3.3 2.7 6 6 6Z" />
      <path d="M12 13c0-2.8 2.2-5 5-5 0 2.8-2.2 5-5 5Z" />
    </Svg>
  )
}

export function IconeInstituicao({ className, tamanho }: Props) {
  return (
    <Svg className={className} tamanho={tamanho}>
      <path d="M3.5 9.5 12 4l8.5 5.5" />
      <path d="M6 10v8M10 10v8M14 10v8M18 10v8" />
      <path d="M3.5 20.5h17" />
    </Svg>
  )
}

export function IconeUrna({ className, tamanho }: Props) {
  return (
    <Svg className={className} tamanho={tamanho}>
      <rect x="4" y="10" width="16" height="10.5" rx="1.6" />
      <path d="M8.5 10V5.5A1.5 1.5 0 0 1 10 4h7.5" />
      <path d="m9.5 14.5 1.8 1.8 3.5-3.5" />
    </Svg>
  )
}

export function IconeCapelo({ className, tamanho }: Props) {
  return (
    <Svg className={className} tamanho={tamanho}>
      <path d="M12 4 2.5 9 12 14l9.5-5L12 4Z" />
      <path d="M6.5 11.2V16c0 1.5 2.5 3 5.5 3s5.5-1.5 5.5-3v-4.8" />
      <path d="M21.5 9v5" />
    </Svg>
  )
}

export function IconePeixe({ className, tamanho }: Props) {
  return (
    <Svg className={className} tamanho={tamanho}>
      <path d="M3 12c3-4.5 7-6.5 11-6.5S20.5 9 21 12c-.5 3-3 6.5-7 6.5S6 16.5 3 12Z" />
      <path d="m3 12-1.5 4M3 12 1.5 8" />
      <circle cx="16.5" cy="10.5" r="1" fill="currentColor" stroke="none" />
    </Svg>
  )
}

export function IconeSaude({ className, tamanho }: Props) {
  return (
    <Svg className={className} tamanho={tamanho}>
      <rect x="3.5" y="6.5" width="17" height="14" rx="2" />
      <path d="M12 10v7M8.5 13.5h7" />
      <path d="M8 6.5V4h8v2.5" />
    </Svg>
  )
}

export function IconeEstrada({ className, tamanho }: Props) {
  return (
    <Svg className={className} tamanho={tamanho}>
      <path d="M7 3.5 4 20.5M17 3.5l3 17" />
      <path d="M12 4v3M12 10.5v3M12 17v3" />
    </Svg>
  )
}

export function IconeOnibus({ className, tamanho }: Props) {
  return (
    <Svg className={className} tamanho={tamanho}>
      <rect x="4" y="4" width="16" height="13" rx="2.2" />
      <path d="M4 10.5h16" />
      <path d="M7.5 17v2M16.5 17v2" />
      <circle cx="8" cy="14" r="1" fill="currentColor" stroke="none" />
      <circle cx="16" cy="14" r="1" fill="currentColor" stroke="none" />
    </Svg>
  )
}

export function IconeMaleta({ className, tamanho }: Props) {
  return (
    <Svg className={className} tamanho={tamanho}>
      <rect x="3" y="7.5" width="18" height="12" rx="2" />
      <path d="M9 7.5V6a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 6v1.5" />
      <path d="M3 13h18" />
    </Svg>
  )
}

/** chave do conteúdo → desenho */
const MAPA_ICONES: Record<string, (p: Props) => React.ReactElement> = {
  pino: IconePino,
  casa: IconeCasa,
  alianca: IconeAlianca,
  broto: IconeBroto,
  instituicao: IconeInstituicao,
  urna: IconeUrna,
  capelo: IconeCapelo,
  familia: IconeGente,
  peixe: IconePeixe,
  saude: IconeSaude,
  estrada: IconeEstrada,
  onibus: IconeOnibus,
  maleta: IconeMaleta,
}

export function IconeDe({ nome, className, tamanho }: Props & { nome: string }) {
  const Desenho = MAPA_ICONES[nome]
  if (!Desenho) return null
  return <Desenho className={className} tamanho={tamanho} />
}

/* O ícone do WhatsApp saiu em 15/08/2026, junto com os botões de grupo: a
   campanha não tem WhatsApp, e ícone de rede que não existe é convite a
   procurar o que não há. Volta com o desenho original se um dia houver. */

export function IconeTiktok({ className, tamanho = 24 }: Props) {
  return (
    <svg className={className} width={tamanho} height={tamanho} viewBox="0 0 24 24"
      fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.59 2.59 0 0 1 0-5.18c.27 0 .52.04.76.12v-3.2a5.83 5.83 0 0 0-.76-.05 5.72 5.72 0 1 0 5.72 5.72V9.01a7.35 7.35 0 0 0 4.28 1.37V7.3a4.29 4.29 0 0 1-3.26-1.48Z" />
    </svg>
  )
}

export function IconeInstagram({ className, tamanho }: Props) {
  return (
    <Svg className={className} tamanho={tamanho}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </Svg>
  )
}

export function IconeFacebook({ className, tamanho = 24 }: Props) {
  return (
    <svg className={className} width={tamanho} height={tamanho} viewBox="0 0 24 24"
      fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M14.1 21v-8.2h2.8l.42-3.2H14.1V7.55c0-.93.26-1.56 1.6-1.56h1.7V3.13A23 23 0 0 0 14.9 3c-2.46 0-4.15 1.5-4.15 4.26V9.6H8v3.2h2.75V21h3.35Z" />
    </svg>
  )
}

export function IconeEmail({ className, tamanho }: Props) {
  return (
    <Svg className={className} tamanho={tamanho}>
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <path d="m3.5 7 7.4 5.3a2 2 0 0 0 2.2 0L20.5 7" />
    </Svg>
  )
}

export function IconeTelefone({ className, tamanho }: Props) {
  return (
    <Svg className={className} tamanho={tamanho}>
      <path d="M6.2 3h3l1.5 4-2 1.4a12 12 0 0 0 5.9 5.9l1.4-2 4 1.5v3a2 2 0 0 1-2.2 2A17.5 17.5 0 0 1 4.2 5.2 2 2 0 0 1 6.2 3Z" />
    </Svg>
  )
}

export function IconeLocal({ className, tamanho }: Props) {
  return (
    <Svg className={className} tamanho={tamanho}>
      <path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </Svg>
  )
}

export function IconeCalendario({ className, tamanho }: Props) {
  return (
    <Svg className={className} tamanho={tamanho}>
      <rect x="3" y="5" width="18" height="16" rx="2.5" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </Svg>
  )
}

export function IconeCompartilhar({ className, tamanho }: Props) {
  return (
    <Svg className={className} tamanho={tamanho}>
      <circle cx="18" cy="5.5" r="2.8" />
      <circle cx="6" cy="12" r="2.8" />
      <circle cx="18" cy="18.5" r="2.8" />
      <path d="m8.5 10.7 7-3.4M8.5 13.3l7 3.4" />
    </Svg>
  )
}

export function IconeMegafone({ className, tamanho }: Props) {
  return (
    <Svg className={className} tamanho={tamanho}>
      <path d="M4 9v6h3l9 4.5v-15L7 9H4Z" />
      <path d="M19.5 8.5a5 5 0 0 1 0 7" />
      <path d="M7 15v3.5a1.5 1.5 0 0 0 3 0V16.5" />
    </Svg>
  )
}

export function IconeGente({ className, tamanho }: Props) {
  return (
    <Svg className={className} tamanho={tamanho}>
      <circle cx="9" cy="8" r="3.4" />
      <path d="M2.8 20a6.2 6.2 0 0 1 12.4 0" />
      <path d="M16.2 5.2a3.4 3.4 0 0 1 0 6.6M17 14.4a6.2 6.2 0 0 1 4.2 5.6" />
    </Svg>
  )
}

/**
 * SETA CURVA, estilo desenho à mão, para ligar um rótulo à figura que ele
 * nomeia. Não é a mesma coisa que `IconeSeta`, que é a setinha de linha dos
 * botões: esta tem traço grosso, curva aberta e ponta cheia, e existe para ser
 * vista de longe, por cima de uma arte.
 *
 * O desenho base aponta PARA BAIXO. As outras direções saem de rotação, feita
 * por classe em quem usa: `-rotate-90` aponta para a direita, e
 * `rotate-90 -scale-x-100` aponta para a esquerda mantendo a curva no mesmo
 * sentido de leitura.
 */
export function SetaCurva({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 100" fill="none" className={className} aria-hidden="true">
      <path
        d="M10 8C34 22 50 46 47 78"
        stroke="currentColor"
        strokeWidth="6.5"
        strokeLinecap="round"
      />
      <path d="M47 94 L33 68 L61 72 Z" fill="currentColor" />
    </svg>
  )
}

export function IconeSeta({ className, tamanho }: Props) {
  return (
    <Svg className={className} tamanho={tamanho}>
      <path d="M4 12h15M13 6l6 6-6 6" />
    </Svg>
  )
}

export function IconeCerto({ className, tamanho }: Props) {
  return (
    <Svg className={className} tamanho={tamanho}>
      <path d="m4 12.5 5 5L20 6.5" />
    </Svg>
  )
}

export function IconeAlerta({ className, tamanho }: Props) {
  return (
    <Svg className={className} tamanho={tamanho}>
      <path d="M12 3.5 22 20H2L12 3.5Z" />
      <path d="M12 10v4.2M12 17.2v.1" />
    </Svg>
  )
}
