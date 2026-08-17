import Image from 'next/image'
import { IconeWhatsapp, IconeSeta } from '@/components/ui/icones'
import { FundoNumero } from '@/components/ui/simbolos'
import { grupo } from '@/content/grupo'

/**
 * GRUPO DO WHATSAPP
 *
 * Vem DEPOIS do "Faça parte dessa mudança" e antes do rodapé, e essa ordem é o
 * que faz a seção funcionar: o CTA acima pede o apoio, e aqui está o lugar
 * concreto de dar esse passo. Fosse antes, seria um convite antes do convite.
 *
 * A ARTE OFICIAL fica ao lado, e não de fundo. Ela é vertical, formato de
 * story, e de fundo teria de ser cortada justamente no meio — que é onde ele
 * está. Ao lado, ela entra inteira e o texto fica em cima do fundo verde, com
 * contraste de verdade em vez de texto sobre foto.
 *
 * O VERDE É O DO WHATSAPP, e não o da campanha, de propósito: quem passa o
 * olho reconhece o canal antes de ler a palavra. É o único ponto do site em
 * que uma cor de fora da marca manda, e ela manda porque aqui a cor é
 * informação.
 *
 * O botão tem `rel="noopener"`, obrigatório com `target="_blank"`.
 */
export function Grupo() {
  return (
    <section
      id="grupo"
      className="mv-secao relative overflow-hidden bg-[linear-gradient(118deg,#0B6B3F_0%,#128C4A_55%,#25D366_130%)] text-white"
    >
      <FundoNumero variante="b" className="text-white opacity-[.07]" />

      <div className="mv-shell relative grid items-center gap-9 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-14">
        <Image
          src={`/fotos/${grupo.foto}.jpg`}
          alt={grupo.alt}
          width={grupo.largura}
          height={grupo.altura}
          sizes="(max-width: 1023px) 88vw, 22rem"
          loading="lazy"
          className="mx-auto h-auto w-full max-w-[22rem] rounded-[14px] shadow-[0_18px_40px_rgba(0,0,0,.35)]"
        />

        <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
          <p className="mv-kicker text-white/75">{grupo.kicker}</p>

          <h2 className="max-w-[20ch] text-[clamp(1.5rem,5vw,2.4rem)] font-extrabold tracking-tight">
            {grupo.titulo}
          </h2>

          <p className="max-w-[52ch] text-[1.0625rem] leading-relaxed text-white/90 sm:text-[1.15rem]">
            {grupo.chamada}
          </p>

          {/* botão BRANCO sobre o verde: o contrário — verde sobre verde —
              sumiria, e este é o único elemento clicável da seção */}
          <a
            href={grupo.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mv-btn w-full bg-white text-[#0B6B3F] shadow-[0_4px_0_rgba(0,0,0,.28)] hover:bg-[#F1FBF5] sm:w-auto"
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
