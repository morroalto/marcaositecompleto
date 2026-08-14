import Image from 'next/image'
import { candidato } from '@/content/candidato'
import { cidades } from '@/content/territorio'
import { Discagem } from '@/components/ui/discagem'
import fone from '@/../public/fotos/marcao-orelhao.png'

/**
 * O NÚMERO
 *
 * A ideia mais forte da campanha, e por isso ela vem logo abaixo do hero:
 * 36 é o partido, 028 é o DDD que a região inteira já disca.
 *
 * A foto do orelhão é a piada visual que sustenta o argumento inteiro: ele
 * está literalmente ligando para o Sul, e o código da ligação é o voto.
 *
 * MUDANÇAS DE 14/08/2026
 *
 * O fundo era amarelo cheio. A foto do orelhão tem fundo próprio, escuro e
 * difuso, então sobre o amarelo ela virava um retângulo escuro colado na tela.
 * Agora a seção é escura (`.mv-fundo-fone`) e a figura entra com halo quente
 * atrás, sombra no chão e as bordas dissolvidas por máscara
 * (`.mv-profundidade`, no globals.css): ela deixa de estar EM CIMA da seção e
 * passa a estar DENTRO dela. Fora de card e grande, porque é a imagem que
 * carrega a ideia. O amarelo continua na página, nos números e no destaque.
 */
export function Numero() {
  const nomes = cidades.map((c) => c.nome)
  const lista = `${nomes.slice(0, -1).join(', ')} e ${nomes.at(-1)}`

  return (
    <section id="numero" className="mv-fundo-fone mv-secao">
      <div className="mv-shell grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">

        {/* ── ele no orelhão ── */}
        {/* `--pe-x` marca onde ele pisa dentro do arquivo: ele está à esquerda
            e o poste do orelhão à direita, então a sombra do chão vai em 32%
            da largura, e não no meio, que cairia no vão entre os dois. */}
        <div
          className="mv-profundidade mx-auto w-full max-w-[32rem]"
          style={{ '--pe-x': '32%', '--pe-y': '4%' } as React.CSSProperties}
        >
          <Image
            src={fone}
            alt="Marcão falando em um orelhão, de camiseta do Triângulo do Sul, com a mão estendida"
            sizes="(max-width: 1023px) 92vw, 32rem"
            priority
            className="h-auto w-full"
          />
        </div>

        {/* ── o argumento ── */}
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <div className="flex flex-col items-center gap-3 sm:items-start">
            <p className="mv-kicker text-amarelo">O Sul tem número</p>
            <h2 className="text-[clamp(1.45rem,4.6vw,2.25rem)] font-extrabold tracking-tight text-white">
              O número que você já conhece de cor.
            </h2>
          </div>

          <Discagem />

          <div className="flex w-full gap-3 sm:w-auto sm:gap-4">
            <div className="flex-1 rounded-xl bg-[#3A7325] px-5 py-4 text-center shadow-[0_5px_0_rgba(0,0,0,.32)] sm:flex-none sm:min-w-[8.5rem]">
              <b className="block font-display text-[clamp(2.1rem,8vw,2.9rem)] leading-none font-black text-white tabular-nums">
                {candidato.numeroPartido}
              </b>
              <span className="font-display text-[0.75rem] font-extrabold tracking-[0.1em] text-white uppercase">
                O partido
              </span>
            </div>
            <div className="flex-1 rounded-xl bg-laranja px-5 py-4 text-center shadow-[0_5px_0_rgba(0,0,0,.32)] sm:flex-none sm:min-w-[8.5rem]">
              <b className="block font-display text-[clamp(2.1rem,8vw,2.9rem)] leading-none font-black text-[#08222A] tabular-nums">
                {candidato.numeroDDD}
              </b>
              <span className="font-display text-[0.75rem] font-extrabold tracking-[0.1em] text-[#08222A] uppercase">
                O DDD do Sul
              </span>
            </div>
          </div>

          <p className="max-w-[58ch] text-[1.0625rem] leading-relaxed text-[#D7E8E4] sm:text-[1.15rem]">
            <strong className="text-white">{candidato.numeroDDD}</strong> é o DDD de {lista}.
            É o código que identifica a região inteira, a nossa. E deputado estadual se elege
            pelo estado todo:{' '}
            <strong className="text-white">
              o voto do Sul conta igual em qualquer cidade do Espírito Santo
            </strong>
            .
          </p>

          <p className="font-display text-[1.15rem] leading-snug font-extrabold text-amarelo sm:text-[1.35rem]">
            “Meu número termina com o DDD do Sul. Porque eu sou daqui.”
          </p>

          <ul className="flex flex-wrap justify-center gap-2 sm:justify-start">
            {cidades.map((c) => (
              <li key={c.slug}>
                <span
                  className={
                    c.triangulo
                      ? 'mv-chip border-amarelo bg-amarelo text-[#003B44]'
                      : 'mv-chip border-white/40 text-white'
                  }
                >
                  {c.nome}
                </span>
              </li>
            ))}
          </ul>
          <p className="max-w-[58ch] text-[1.0625rem] leading-relaxed text-[#D7E8E4]">
            Em destaque, as três cidades do Triângulo do Sul, o movimento que deu origem a
            esta candidatura.{' '}
            <strong className="text-white">
              A origem são três. A região são nove. O mandato é do Espírito Santo inteiro.
            </strong>
          </p>
        </div>
      </div>
    </section>
  )
}
