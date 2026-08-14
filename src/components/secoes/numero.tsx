import Image from 'next/image'
import { candidato } from '@/content/candidato'
import { cidades } from '@/content/territorio'
import { Discagem } from '@/components/ui/discagem'
import { IconeSeta } from '@/components/ui/icones'
import fone from '@/../public/fotos/marcao-telefone.png'

/**
 * O NÃšMERO
 *
 * A ideia mais forte da campanha, e por isso ela vem logo abaixo do hero:
 * 36 Ã© o partido, 028 Ã© o DDD que a regiÃ£o inteira jÃ¡ disca. O eleitor nÃ£o
 * precisa decorar nada.
 *
 * Em 14/08/2026 a seÃ§Ã£o ganhou a foto do MarcÃ£o no orelhÃ£o, do acervo da
 * campanha, e o visor que digita o nÃºmero sozinho, vindo do protÃ³tipo
 * "Sul em Foco". A piada visual Ã© o argumento inteiro numa imagem sÃ³: ele
 * estÃ¡ literalmente ligando para o Sul, e o cÃ³digo da ligaÃ§Ã£o Ã© o voto.
 *
 * O recorte em PNG sem fundo entra direto sobre o amarelo da marca, do jeito
 * que o manual faz. Nada de foto com vÃ©u translÃºcido por cima.
 */
export function Numero() {
  const nomes = cidades.map((c) => c.nome)
  const lista = `${nomes.slice(0, -1).join(', ')} e ${nomes.at(-1)}`

  return (
    <section id="numero" className="bg-amarelo text-[#003B44] corte-cima mv-secao">
      <div className="mv-shell grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:gap-14">

        {/* â”€â”€ ele no orelhÃ£o, com o visor discando por cima â”€â”€ */}
        <div className="relative mx-auto w-full max-w-[24rem]">
          <Image
            src={fone}
            alt="MarcÃ£o falando em um orelhÃ£o, de camiseta do TriÃ¢ngulo do Sul, com a mÃ£o estendida"
            sizes="(max-width: 1023px) 78vw, 24rem"
            className="mx-auto h-auto w-full max-w-[19rem] drop-shadow-[0_18px_26px_rgba(0,0,0,.22)]"
          />
          <div className="relative z-10 -mt-14 sm:-mt-16">
            <Discagem />
          </div>
        </div>

        {/* â”€â”€ o argumento â”€â”€ */}
        <div className="flex flex-col items-center gap-5 text-center sm:items-start sm:text-left">
          <p className="mv-kicker">O Sul tem nÃºmero</p>
          <h2 className="text-[clamp(1.45rem,4.6vw,2.25rem)] font-extrabold tracking-tight">
            O nÃºmero que vocÃª jÃ¡ conhece de cor.
          </h2>

          <div className="flex w-full gap-3 sm:w-auto sm:gap-4">
            <div className="flex-1 rounded-xl bg-[#3A7325] px-5 py-4 text-center shadow-[0_5px_0_rgba(0,0,0,.22)] sm:flex-none sm:min-w-[9rem]">
              <b className="block font-display text-[clamp(2.1rem,8vw,2.9rem)] leading-none font-black text-white tabular-nums">
                {candidato.numeroPartido}
              </b>
              <span className="font-display text-[0.75rem] font-extrabold tracking-[0.1em] text-white uppercase">
                O partido
              </span>
            </div>
            <div className="flex-1 rounded-xl bg-laranja px-5 py-4 text-center shadow-[0_5px_0_rgba(0,0,0,.22)] sm:flex-none sm:min-w-[9rem]">
              <b className="block font-display text-[clamp(2.1rem,8vw,2.9rem)] leading-none font-black text-[#08222A] tabular-nums">
                {candidato.numeroDDD}
              </b>
              <span className="font-display text-[0.75rem] font-extrabold tracking-[0.1em] text-[#08222A] uppercase">
                O DDD do Sul
              </span>
            </div>
          </div>

          <p className="max-w-[58ch] text-[1.0625rem] leading-relaxed sm:text-[1.15rem]">
            <strong>{candidato.numeroDDD}</strong> Ã© o DDD de {lista}. Ã‰ o cÃ³digo que
            identifica a regiÃ£o inteira, a nossa. E deputado estadual se elege pelo estado
            todo: <strong>o voto do Sul conta igual em qualquer cidade do EspÃ­rito Santo</strong>.
          </p>

          <p className="font-display text-[1.15rem] leading-snug font-extrabold sm:text-[1.35rem]">
            â€œMeu nÃºmero termina com o DDD do Sul. Porque eu sou daqui.â€
          </p>

          <ul className="flex flex-wrap justify-center gap-2 sm:justify-start">
            {cidades.map((c) => (
              <li key={c.slug}>
                <span
                  className={
                    c.triangulo
                      ? 'mv-chip border-[#003B44] bg-[#003B44] text-amarelo'
                      : 'mv-chip border-[#003B44]/45 text-[#003B44]'
                  }
                >
                  {c.nome}
                </span>
              </li>
            ))}
          </ul>
          <p className="max-w-[58ch] text-[1.0625rem] leading-relaxed">
            Em destaque, as trÃªs cidades do TriÃ¢ngulo do Sul, o movimento que deu origem a
            esta candidatura. <strong>A origem sÃ£o trÃªs. A regiÃ£o sÃ£o nove. O mandato Ã© do
            EspÃ­rito Santo inteiro.</strong>
          </p>

          <a href="#apoie" className="mv-btn mv-btn-escuro w-full sm:w-auto">
            Grave agora: {candidato.numero}
            <IconeSeta tamanho={20} />
          </a>
        </div>
      </div>
    </section>
  )
}
