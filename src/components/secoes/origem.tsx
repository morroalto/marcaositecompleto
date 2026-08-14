import Image from 'next/image'
import { Cartaz } from '@/components/ui/marca'
import { triangulo } from '@/content/territorio'
import { biografia } from '@/content/facetas'
import { selos, trajetoria } from '@/content/trajetoria'

/**
 * DE ONDE EU VENHO
 *
 * Reorganizada em 14/08/2026. O que estava errado: cada bloco escolhia o
 * próprio alinhamento (uns centralizados, outros à esquerda, os chips no meio
 * de tudo), a foto de família ocupava metade da tela e a linha do tempo estava
 * grudada no fim da seção. O resultado era texto flutuando sem eixo.
 *
 * Agora a seção tem UM eixo só, à esquerda no desktop e centralizado no
 * celular, e três blocos na ordem: título, prosa com a foto ao lado, e o card
 * do Triângulo do Sul, que faz a ponte para a candidatura.
 *
 * A foto ficou contida em 26 rem. O arquivo é um recorte 16 por 9 de uma foto
 * vertical, com as cabeças de trás já cortadas na origem: ampliada, o defeito
 * do enquadramento é a primeira coisa que se vê. No tamanho certo, ela mostra
 * o que precisa mostrar.
 *
 * A linha do tempo saiu daqui e virou seção própria (`trajetoria.tsx`).
 */
export function Origem() {
  return (
    <section id="origem" className="mv-secao bg-marinho text-white">
      <div className="mv-shell flex flex-col gap-10">

        <div className="flex max-w-[62ch] flex-col gap-4 text-center sm:text-left">
          <p className="mv-kicker text-amarelo">De onde eu venho</p>
          <h2 className="text-[clamp(1.45rem,4.6vw,2.25rem)] font-extrabold tracking-tight">
            A campanha começou numa mesa de família, não num comitê.
          </h2>
        </div>

        {/* Foto à ESQUERDA e prosa à direita, e não o contrário. Com o texto
            numa coluna estreita à esquerda, as linhas quebravam curtas, os
            selos entravam um embaixo do outro ocupando a largura toda, e
            sobrava um vão de meia tela sob a foto. Agora a foto ocupa a coluna
            estreita, que é onde ela cabe bem, e o texto ganha a larga. */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
          {/* metade da largura, sem teto: espremida em 24 rem a família ficava
              do tamanho de uma miniatura e não dava para reconhecer ninguém.
              O arquivo já é um recorte 16 por 9 de uma foto vertical, com as
              cabeças de trás cortadas na origem, então ele precisa de tamanho
              para mostrar o que ainda tem. */}
          <Image
            src="/fotos/familia-todos.webp"
            alt="Marcão sentado com a esposa Adriana e o neto Marco Antônio, com as filhas atrás"
            width={1200} height={675}
            sizes="(max-width: 1023px) 92vw, 36rem"
            loading="lazy"
            className="h-auto w-full rounded-[10px]"
          />

          <div className="flex flex-col gap-5 text-center sm:text-left">
            {biografia.blocos.map((b) => (
              <p
                key={b.titulo}
                className="text-[1.0625rem] leading-relaxed text-[#D8E4F0] sm:text-[1.15rem]"
              >
                {b.texto}
              </p>
            ))}
          </div>
        </div>

        {/* selos e citação em largura inteira: em coluna estreita os chips
            viravam uma pilha de barras, um por linha */}
        <ul className="flex flex-wrap justify-center gap-2 sm:justify-start">
          {selos.map((s) => (
            <li key={s.texto}>
              <span className="mv-chip border-white/35 text-[0.9375rem] font-semibold text-white">
                {s.texto}
              </span>
            </li>
          ))}
        </ul>

        <blockquote className="m-0 border-l-4 border-amarelo pl-6 text-left">
          <p className="max-w-[52ch] font-display text-[clamp(1.15rem,3.6vw,1.5rem)] leading-snug font-extrabold">
            “{trajetoria.citacao}”
          </p>
          <footer className="mt-2 text-[1rem] text-[#C9DCF0]">— Marcão Vivacqua</footer>
        </blockquote>

        {/* ── o movimento, que é a ponte para a candidatura ── */}
        <div className="flex flex-col gap-5 rounded-[10px] border border-white/20 bg-white/[.07] p-7 text-center sm:p-9 sm:text-left">
          <h3 className="text-[clamp(1.3rem,4.4vw,1.9rem)]">
            <Cartaz className="text-amarelo" style={{ WebkitTextStrokeColor: 'var(--marinho-2)' }}>
              TRIÂNGULO DO SUL
            </Cartaz>
          </h3>
          <p className="max-w-[62ch] text-[1.0625rem] leading-relaxed text-[#D8E4F0] sm:text-[1.15rem]">
            Três cidades que dividem economia, estrada e problema:{' '}
            {triangulo.map((c) => c.nome).join(', ')}. O movimento nasceu antes da candidatura,
            e é dele que ela veio.
          </p>
          <ul className="flex flex-wrap justify-center gap-2 sm:justify-start">
            {triangulo.map((c) => (
              <li key={c.slug}>
                <span className="mv-chip border-amarelo bg-amarelo text-[#003B44]">{c.nome}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
