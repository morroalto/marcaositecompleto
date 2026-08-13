import Image from 'next/image'
import { Lockup, Hachura } from '@/components/ui/marca'
import { IconeSeta } from '@/components/ui/icones'
import { candidato } from '@/content/candidato'
import { diasAte } from '@/lib/utils'
import { videoApresentacao } from '@/content/videos'
import { Player } from '@/components/ui/video'
import aponta from '@/../public/fotos/marcao-aponta.webp'

/**
 * HERO
 *
 * Composição do manual: retrato RECORTADO sobre o degradê da marca.
 * Nada de foto de ambiente com véu translúcido por cima, que não existe em
 * peça nenhuma da identidade e é o que estava feio.
 *
 * No celular a ordem é: slogan, nome, número, o que é o 028, contagem, CTA.
 * A foto entra depois do texto no DOM e sobe visualmente por grid, para a
 * ordem de leitura e a de foco continuarem iguais.
 */
export function Hero() {
  const dias = diasAte(candidato.eleicao.data)

  return (
    <section id="topo" className="mv-duo corte-baixo relative overflow-hidden">
      <Hachura
        className="absolute top-4 right-0 h-10 w-[min(320px,42%)] text-white/25 sm:top-8"
      />

      <div className="mv-shell grid items-center gap-8 pt-10 pb-14 sm:pt-14 lg:grid-cols-[1.08fr_.92fr] lg:gap-10 lg:pt-16 lg:pb-24">
        <div className="flex flex-col items-center gap-5 text-center sm:items-start sm:gap-6 sm:text-left">
          <p className="mv-entra font-display text-[clamp(1.05rem,4.4vw,1.5rem)] font-bold tracking-tight">
            Um novo <b className="text-amarelo">Marco</b> para o Sul
          </p>

          <Lockup comoH1 soletra className="mv-entra mv-d1 text-[clamp(3rem,13.5vw,5.6rem)]" />

          <p className="mv-entra mv-d2 max-w-[34ch] text-[1.0625rem] leading-relaxed text-[#E4F0EA] sm:text-[1.15rem]">
            {candidato.cargo} pelo {candidato.uf}.{' '}
            <strong className="text-amarelo">028 não é só DDD</strong>, é o código que o Sul
            inteiro disca todo dia, e são os três últimos dígitos do meu número na urna.
          </p>

          <p className="mv-entra mv-d3 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 sm:justify-start">
            <span className="font-display text-[2.6rem] leading-none font-black text-amarelo tabular-nums">
              {dias}
            </span>
            <span className="text-[1.0625rem] leading-tight">
              dias para o dia da eleição
              <br />
              <strong className="font-display">
                {candidato.eleicao.texto}, {candidato.eleicao.turno}
              </strong>
            </span>
          </p>

          <div className="mv-entra mv-d4 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
            <a href="#apoie" className="mv-btn mv-btn-laranja w-full sm:w-auto">
              Quero ajudar
              <IconeSeta tamanho={20} />
            </a>
            <a href="#bandeiras" className="mv-btn mv-btn-linha w-full sm:w-auto">
              Ver as bandeiras
              <IconeSeta tamanho={20} />
            </a>
          </div>
        </div>

        <div className="mv-entra mv-d2 relative mx-auto w-full max-w-[26rem] lg:max-w-none">
          <Image
            src={aponta}
            alt={`${candidato.nomeUrna} de camisa jeans, sorrindo e apontando para quem olha`}
            priority
            sizes="(max-width: 1023px) 80vw, 42vw"
            className="mx-auto h-auto w-full drop-shadow-[0_18px_28px_rgba(0,0,0,.28)]"
          />
          <span
            className="absolute bottom-6 -left-1 rotate-[-3deg] bg-amarelo px-3 py-2 font-display text-[clamp(.85rem,3.4vw,1.05rem)] font-black text-[#003B44] shadow-[0_4px_0_rgba(0,0,0,.22)] sm:left-2"
          >
            {candidato.hashtag}
          </span>
        </div>
      </div>

      <div className="mv-shell pb-14 lg:pb-20">
        <Player video={videoApresentacao} className="mx-auto max-w-[52rem]" />
      </div>
    </section>
  )
}
