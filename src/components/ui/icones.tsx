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

export function IconeYoutube({ className, tamanho = 24 }: Props) {
  return (
    <svg className={className} width={tamanho} height={tamanho} viewBox="0 0 24 24"
      fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15V9l5.2 3-5.2 3Z" />
    </svg>
  )
}

export function IconeX({ className, tamanho = 24 }: Props) {
  return (
    <svg className={className} width={tamanho} height={tamanho} viewBox="0 0 24 24"
      fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M17.53 3h3.02l-6.6 7.54L21.7 21h-6.07l-4.76-6.22L5.42 21H2.4l7.06-8.07L2.3 3h6.23l4.3 5.69L17.53 3Zm-1.06 16.2h1.67L7.6 4.72H5.8l10.67 14.48Z" />
    </svg>
  )
}

export function IconeThreads({ className, tamanho = 24 }: Props) {
  return (
    <svg className={className} width={tamanho} height={tamanho} viewBox="0 0 24 24"
      fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M16.4 11.28c-.1-.05-.2-.1-.3-.14-.18-3.26-1.96-5.13-4.95-5.15h-.04c-1.79 0-3.28.76-4.2 2.15l1.65 1.13c.68-1.04 1.76-1.26 2.55-1.26h.03c.98 0 1.72.29 2.2.85.35.4.58.97.7 1.68a12.6 12.6 0 0 0-2.83-.14c-2.85.17-4.68 1.83-4.56 4.14.06 1.17.65 2.18 1.65 2.84.85.56 1.94.83 3.07.77 1.5-.08 2.67-.65 3.49-1.69.62-.79.02-1.6.02-1.6-.02.98-.65 2.55-3.6 2.71-.86.05-1.6-.15-2.06-.55-.4-.35-.53-.85-.55-1.2-.06-1.15.9-1.9 2.6-2 .58-.03 1.17-.02 1.72.04.28.02.55.05.8.1.02.5-.06.98-.24 1.4 0 0 .96.5 1.6-.24.7-.8.9-2 .9-2 .77.47 1.33 1.09 1.64 1.83.43 1.03.45 2.72-.93 4.1-1.21 1.2-2.66 1.73-4.85 1.75-2.43-.02-4.27-.8-5.46-2.31C4.7 16.86 4.13 14.87 4.1 12c.02-2.87.6-4.86 1.7-6.27C7 4.22 8.84 3.43 11.27 3.4c2.45.02 4.32.81 5.56 2.35.61.76 1.07 1.71 1.37 2.83l1.93-.51c-.37-1.38-.95-2.57-1.74-3.55C16.8 2.5 14.4 1.42 11.28 1.4h-.01c-3.11.02-5.5 1.1-7.06 3.13C2.82 6.33 2.1 8.72 2.08 12v.01c.02 3.27.74 5.66 2.13 7.46 1.57 2.03 3.95 3.11 7.07 3.13h.01c2.77-.02 4.73-.75 6.34-2.36 2.1-2.1 2.04-4.73 1.35-6.34-.5-1.16-1.44-2.1-2.58-2.62Z" />
    </svg>
  )
}

export function IconeTiktok({ className, tamanho = 24 }: Props) {
  return (
    <svg className={className} width={tamanho} height={tamanho} viewBox="0 0 24 24"
      fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.59 2.59 0 0 1 0-5.18c.27 0 .52.04.76.12v-3.2a5.83 5.83 0 0 0-.76-.05 5.72 5.72 0 1 0 5.72 5.72V9.01a7.35 7.35 0 0 0 4.28 1.37V7.3a4.29 4.29 0 0 1-3.26-1.48Z" />
    </svg>
  )
}

/**
 * WHATSAPP
 *
 * VOLTOU em 17/08/2026. Ele tinha sido removido em 15/08 porque a campanha
 * não tinha grupo, e ícone de canal que não existe é promessa quebrada; agora
 * o grupo existe e tem link.
 *
 * Sólido, como os outros de rede social: o balão com o fone dentro, em peça
 * única com `fill-rule` cuidando do vazado — assim ele se lê a 20 px, que é o
 * tamanho em que aparece dentro do botão.
 */
export function IconeWhatsapp({ className, tamanho = 24 }: Props) {
  return (
    <svg className={className} width={tamanho} height={tamanho} viewBox="0 0 24 24"
      fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.16-1.35a9.94 9.94 0 0 0 4.88 1.27h.01c5.5 0 9.96-4.46 9.96-9.96A9.9 9.9 0 0 0 19.1 4.9 9.9 9.9 0 0 0 12.04 2Zm0 1.86a8.07 8.07 0 0 1 8.1 8.1c0 4.47-3.63 8.1-8.1 8.1a8.07 8.07 0 0 1-4.11-1.13l-.3-.17-3.06.8.82-2.99-.19-.31a8.03 8.03 0 0 1-1.24-4.3c0-4.47 3.63-8.1 8.08-8.1Z" />
      <path d="M9.4 7.1c-.2-.44-.4-.45-.58-.46h-.5c-.17 0-.45.06-.69.31-.24.25-.9.88-.9 2.15s.93 2.5 1.06 2.67c.13.17 1.79 2.87 4.42 3.9 2.19.87 2.63.7 3.11.65.48-.04 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.06-.11-.24-.17-.5-.3-.26-.13-1.54-.76-1.78-.85-.24-.09-.41-.13-.59.13-.17.26-.67.85-.82 1.02-.15.18-.3.2-.56.07-.26-.13-1.1-.4-2.09-1.29-.77-.69-1.29-1.53-1.44-1.79-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.46.13-.15.17-.26.26-.44.09-.17.04-.33-.02-.46-.07-.13-.57-1.4-.79-1.92Z" />
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
