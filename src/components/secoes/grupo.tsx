import Image from 'next/image'
import { IconeWhatsapp, IconeSeta } from '@/components/ui/icones'
import { grupo } from '@/content/grupo'

/**
 * ZAP DO MARCÃO
 *
 * Feita a partir da capa do grupo, e não igual a ela. A capa é uma imagem
 * pronta, achatada, com os balões colados e o texto embutido; aqui cada peça é
 * um elemento vivo — o balão flutua, o retrato tem profundidade e o texto é
 * texto, então cresce com a tela, é lido em voz alta e vai para a busca.
 *
 * O QUE FAZ ELA PARECER A CAPA: fundo verde de WhatsApp, a malha de pontos
 * ligados por linhas, o retrato dele encostado à esquerda e os balões espalhados
 * pelo fundo. O que faz ela ficar melhor:
 *
 *   · PROFUNDIDADE — os balões vêm em três planos. Os do fundo são pequenos,
 *     borrados e apagados; os da frente são grandes, nítidos e com brilho
 *     verde. Na capa todos estão no mesmo plano, e é isso que dá o aspecto de
 *     adesivo colado.
 *   · MOVIMENTO — cada balão sobe e desce no seu próprio tempo (`--dur`) e
 *     começa em momento diferente (`--atraso`), então nunca se alinham e o
 *     conjunto não vira uma onda só. Quem pediu menos movimento no sistema não
 *     vê nenhum: `.mv-flutua` respeita `prefers-reduced-motion`.
 *   · A FAIXA DO TÍTULO é o mesmo recurso da capa, mas inclinada e com o fio
 *     tricolor da marca embaixo, em vez de uma barra reta.
 *
 * A moldura do retrato é o único ponto com `rotate` fixo: dois graus, o
 * bastante para não parecer alinhado por régua e pouco o bastante para não
 * parecer torto.
 */
export function Grupo() {
  return (
    /* O FIO AMARELO em cima e embaixo, a pedido, e com uma regra: ele só entra
       onde duas seções ESCURAS se encostam. Aqui o verde chega no petróleo do
       CTA e sai no petróleo do rodapé — três blocos escuros seguidos, em que a
       fronteira sumia. Entre seções claras a própria mudança de cor já separa,
       e ali o fio seria só enfeite. */
    /* O FUNDO É O PETRÓLEO DA SEÇÃO DE CIMA, e não mais o verde do WhatsApp.
       Com o verde chapado, a página terminava em três cores seguidas —
       petróleo, verde, petróleo — e a seção lia como um bloco colado de outro
       site. No petróleo ela volta a ser parte da página, e o verde não se
       perde: ele sai do fundo e vai para onde é informação, que são os balões
       e o halo do retrato. Menos verde, mais verde percebido. */
    <section
      id="grupo"
      className="mv-secao bg-petroleo relative overflow-hidden border-y-[5px] border-amarelo text-white"
    >
      {/* `z-0` na decoração e `z-10` no conteúdo, escrito e não deduzido.
          Sem índice declarado, quem pinta por cima é a ordem do DOM, e basta
          alguém reordenar duas linhas aqui para o balão subir por cima do
          texto sem ninguém entender por quê. */}
      <MalhaDeContato />
      <BaloesFlutuando />

      <div className="mv-shell relative z-10 grid items-center gap-10 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-14">
        {/* O RETRATO. O halo verde atrás é o que descola a foto do fundo — sem
            ele, um retângulo escuro sobre verde escuro vira um buraco. */}
        <div className="relative mx-auto w-full max-w-[20rem]">
          <div
            aria-hidden="true"
            className="absolute -inset-6 rounded-[50%] bg-[#25D366]/25 blur-3xl"
          />
          <Image
            src={`/fotos/${grupo.foto}.jpg`}
            alt={grupo.alt}
            width={grupo.largura}
            height={grupo.altura}
            sizes="(max-width: 1023px) 80vw, 20rem"
            loading="lazy"
            className="relative h-auto w-full -rotate-2 rounded-[18px] ring-4 ring-white/15 shadow-[0_26px_60px_rgba(0,0,0,.45)]"
          />
        </div>

        <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
          {/* A FAIXA, como na capa do grupo: o nome dentro de uma tarja, e não
              solto sobre o fundo. Inclinada 1,5°, com o fio tricolor por baixo. */}
          <div className="-rotate-[1.5deg]">
            <h2 className="inline-block rounded-[10px] bg-[#00272E]/85 px-6 py-3 text-[clamp(1.75rem,6vw,3.1rem)] leading-none font-extrabold tracking-tight text-white uppercase shadow-[0_10px_30px_rgba(0,0,0,.35)]">
              {grupo.titulo}
            </h2>
            <span aria-hidden="true" className="mt-2 flex h-[6px] w-full overflow-hidden rounded-full">
              <i className="flex-1 bg-verde" />
              <i className="flex-1 bg-laranja" />
              <i className="flex-1 bg-amarelo" />
            </span>
          </div>

          <p className="max-w-[46ch] text-[1.15rem] leading-relaxed text-white/90 sm:text-[1.3rem]">
            {grupo.chamada}
          </p>

          {/* botão BRANCO sobre o verde: verde sobre verde sumiria, e este é o
              único elemento clicável da seção */}
          <a
            href={grupo.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mv-btn mv-pulsa-suave w-full bg-white text-[#0B6B3F] shadow-[0_5px_0_rgba(0,0,0,.3)] hover:bg-[#F1FBF5] sm:w-auto"
          >
            <IconeWhatsapp tamanho={22} />
            {grupo.botao}
            <IconeSeta tamanho={20} />
          </a>
        </div>
      </div>
    </section>
  )
}

/**
 * A MALHA DE PONTOS LIGADOS que a capa tem no fundo.
 *
 * Desenhada e não fotografada: em SVG ela acompanha a cor da seção, não pesa
 * nada e não borra em tela de densidade dobrada. As coordenadas são fixas, e
 * não sorteadas, para servidor e navegador desenharem a mesma página.
 */
function MalhaDeContato() {
  const nos = [
    [6, 18], [17, 8], [24, 30], [12, 44], [33, 16], [39, 46],
    [52, 10], [61, 34], [72, 14], [84, 28], [93, 12], [88, 52],
    [70, 62], [55, 74], [41, 66], [26, 78], [9, 68], [78, 82], [95, 72],
  ]
  /** os pares que se ligam, escolhidos entre vizinhos para a teia não virar novelo */
  const linhas: [number, number][] = [
    [0, 1], [1, 4], [4, 2], [2, 3], [3, 16], [4, 6], [6, 7], [7, 5],
    [5, 14], [7, 8], [8, 9], [9, 10], [9, 11], [11, 12], [12, 13],
    [13, 14], [14, 15], [15, 16], [12, 17], [17, 18], [11, 18],
  ]
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 h-full w-full text-white opacity-[.13]"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      {linhas.map(([a, b], i) => (
        <line
          key={i}
          x1={nos[a][0]} y1={nos[a][1]} x2={nos[b][0]} y2={nos[b][1]}
          stroke="currentColor" strokeWidth="0.18" vectorEffect="non-scaling-stroke"
        />
      ))}
      {nos.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 0.55 : 0.35} fill="currentColor" />
      ))}
    </svg>
  )
}

/**
 * OS BALÕES DO WHATSAPP espalhados pelo fundo, em três planos.
 *
 * `fundo` fica atrás de tudo, pequeno, borrado e apagado; `frente` é grande,
 * nítido e com brilho. É a diferença entre um céu com profundidade e um
 * papel de parede de adesivos.
 *
 * Cada um tem duração e atraso próprios: com o mesmo tempo, todos subiriam
 * juntos e o efeito viraria uma bandeira balançando.
 */
function BaloesFlutuando() {
  const baloes = [
    { classe: 'left-[4%] top-[14%] w-[3.4rem] blur-[2px] opacity-40', dur: '9s', atraso: '0s', giro: '-8deg' },
    { classe: 'left-[27%] top-[8%] w-[2.4rem] blur-[3px] opacity-30', dur: '11s', atraso: '1.4s', giro: '10deg' },
    /* OS TRÊS NÍTIDOS SÓ NO DESKTOP. As posições foram escolhidas para o
       layout de duas colunas, onde a direita é do texto e a esquerda é da
       foto. No celular tudo vira uma coluna só, e aí `right-[13%]
       bottom-[14%]` — um balão de 6,5 rem com 95% de opacidade — cai em cima
       do parágrafo. Ficar atrás do texto não resolvia: branco sobre verde
       vivo não se lê, e o problema é de contraste, não de ordem.
       No celular sobram os borrados e apagados, que são textura de verdade. */
    { classe: 'right-[6%] top-[10%] w-[5rem] opacity-90 hidden lg:block', dur: '7.5s', atraso: '.6s', giro: '6deg' },
    { classe: 'right-[30%] top-[16%] w-[3rem] blur-[1px] opacity-55', dur: '10s', atraso: '2.1s', giro: '-5deg' },
    { classe: 'right-[13%] bottom-[14%] w-[6.5rem] opacity-95 hidden lg:block', dur: '8s', atraso: '1s', giro: '-7deg' },
    { classe: 'right-[34%] bottom-[10%] w-[3.4rem] opacity-70 hidden lg:block', dur: '12s', atraso: '.3s', giro: '9deg' },
    { classe: 'right-[46%] top-[46%] w-[2.4rem] blur-[2px] opacity-35 hidden lg:block', dur: '9s', atraso: '3.2s', giro: '12deg' },
    { classe: 'left-[36%] bottom-[12%] w-[2.2rem] blur-[3px] opacity-30', dur: '9.5s', atraso: '2.6s', giro: '-11deg' },
    { classe: 'left-[8%] bottom-[6%] w-[3.8rem] opacity-55 hidden lg:block', dur: '10.5s', atraso: '1.8s', giro: '4deg' },
  ]

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {baloes.map((b, i) => (
        <span
          key={i}
          className={`mv-flutua absolute ${b.classe}`}
          style={
            {
              '--dur': b.dur,
              '--atraso': b.atraso,
              '--giro': b.giro,
            } as React.CSSProperties
          }
        >
          <BalaoCheio />
        </span>
      ))}
    </div>
  )
}

/**
 * O BALÃO SÓLIDO, como o da arte: bolha verde cheia com o fone branco por
 * cima.
 *
 * É outro desenho, e não o `IconeWhatsapp` ampliado. O ícone do botão é de
 * traço, feito para viver ao lado de uma palavra em corpo 17 — ampliado para
 * 6 rem ele vira um anel vazado e perde o peso. Aqui a bolha é chapada e o
 * fone é recortado nela, que é o que se lê de longe.
 */
function BalaoCheio() {
  return (
    <svg viewBox="0 0 48 48" className="h-auto w-full" aria-hidden="true">
      {/* a bolha, com o bico embaixo à esquerda */}
      <path
        fill="#25D366"
        d="M24 3C12.4 3 3 12.4 3 24c0 3.7.97 7.2 2.66 10.24L3 45l11.06-2.6A20.9 20.9 0 0 0 24 45c11.6 0 21-9.4 21-21S35.6 3 24 3Z"
      />
      <path
        fill="#fff"
        d="M17.3 13.9c-.42-.94-.86-.96-1.26-.98h-1.07c-.37 0-.97.14-1.48.68-.5.54-1.94 1.9-1.94 4.62s1.99 5.36 2.27 5.73c.28.37 3.84 6.15 9.48 8.36 4.69 1.84 5.64 1.48 6.66 1.38 1.02-.1 3.3-1.35 3.77-2.66.47-1.31.47-2.43.33-2.66-.14-.24-.51-.38-1.07-.66-.56-.28-3.3-1.63-3.81-1.81-.51-.19-.88-.28-1.26.28-.37.56-1.44 1.81-1.77 2.19-.32.37-.65.42-1.21.14-.56-.28-2.36-.87-4.5-2.77-1.66-1.48-2.78-3.3-3.1-3.86-.33-.56-.04-.86.25-1.14.25-.25.56-.65.84-.98.28-.32.37-.56.56-.93.19-.37.09-.7-.05-.98-.14-.28-1.23-3-1.7-4.1Z"
      />
    </svg>
  )
}
