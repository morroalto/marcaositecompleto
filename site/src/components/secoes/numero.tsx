import { candidato } from '@/content/candidato'
import { cidades } from '@/content/territorio'

/**
 * O NÚMERO
 *
 * A ideia mais forte da campanha, e por isso ela vem logo abaixo do hero:
 * 36 é o partido, 028 é o DDD que a região inteira já disca. O eleitor não
 * precisa decorar nada.
 */
export function Numero() {
  const nomes = cidades.map((c) => c.nome)
  const lista = `${nomes.slice(0, -1).join(', ')} e ${nomes.at(-1)}`

  return (
    <section id="numero" className="bg-amarelo text-[#003B44] corte-cima mv-secao">
      <div className="mv-shell grid gap-8 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-14">
        <div>
          <p className="mv-kicker mb-3">O Sul tem número</p>
          <div className="flex gap-3 sm:gap-4">
            <div className="flex-1 rounded-xl bg-[#3A7325] px-5 py-4 text-center shadow-[0_5px_0_rgba(0,0,0,.22)] sm:flex-none sm:min-w-[9rem]">
              <b className="block font-display text-[clamp(2.6rem,11vw,3.6rem)] leading-none font-black text-white tabular-nums">
                {candidato.numeroPartido}
              </b>
              <span className="font-display text-[0.75rem] font-extrabold tracking-[0.1em] text-white uppercase">
                O partido
              </span>
            </div>
            <div className="flex-1 rounded-xl bg-laranja px-5 py-4 text-center shadow-[0_5px_0_rgba(0,0,0,.22)] sm:flex-none sm:min-w-[9rem]">
              <b className="block font-display text-[clamp(2.6rem,11vw,3.6rem)] leading-none font-black text-[#08222A] tabular-nums">
                {candidato.numeroDDD}
              </b>
              <span className="font-display text-[0.75rem] font-extrabold tracking-[0.1em] text-[#08222A] uppercase">
                O DDD do Sul
              </span>
            </div>
          </div>
        </div>

        <div className="mx-auto flex flex-col items-center gap-4 text-center sm:mx-0 sm:items-start sm:text-left">
          <h2 className="text-[clamp(1.6rem,6vw,2.9rem)] font-extrabold tracking-tight">
            O eleitor do Sul não precisa decorar o meu número.
            <br className="hidden sm:block" /> Ele já disca esse número todo dia.
          </h2>
          <p className="max-w-[58ch] text-[1.0625rem] leading-relaxed sm:text-[1.15rem]">
            <strong>{candidato.numeroDDD}</strong> é o DDD de {lista}. É o código que
            identifica a região inteira, a nossa. E deputado estadual se elege pelo estado
            todo: <strong>o voto do Sul conta igual em qualquer cidade do Espírito Santo</strong>.
          </p>
          <p className="font-display text-[1.0625rem] font-extrabold sm:text-[1.2rem]">
            “Meu número termina com o DDD do Sul. Porque eu sou daqui.”
          </p>

          <ul className="mt-2 flex flex-wrap gap-2">
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
          <p className="text-[1.0625rem] leading-relaxed">
            Em destaque, as três cidades do Triângulo do Sul, o movimento que deu origem a
            esta candidatura. <strong>A origem são três. A região são nove. O mandato é do
            Espírito Santo inteiro.</strong>
          </p>
        </div>
      </div>
    </section>
  )
}
