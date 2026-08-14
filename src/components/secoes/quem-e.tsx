import { FundoEconomias } from '@/components/ui/simbolos'
import { facetas } from '@/content/facetas'
import { candidato } from '@/content/candidato'
import { MOSTRAR_PENDENCIAS } from '@/content/flags'

/**
 * QUEM É O MARCÃO
 *
 * Duas versões ficaram para trás. A primeira eram sete fotos do mesmo homem
 * num carrossel horizontal: sete arquivos, sete retratos quase iguais, e no
 * celular a pessoa precisava arrastar sete vezes para ler sete frases curtas.
 * A segunda era uma lista empilhada ao lado de um retrato: sete linhas, uma
 * embaixo da outra, e a seção virava uma coluna sem fim.
 *
 * Agora é GRADE: três colunas no desktop, duas no tablet. Os sete papéis
 * aparecem juntos, na mesma tela, e a pessoa lê o conjunto de uma vez, que é
 * o argumento da seção. Cada card carrega o número, o papel e a fala dele.
 *
 * Sem foto nenhuma: o retrato que estava aqui repetia o rosto que já aparece
 * na abertura e na seção do orelhão.
 */
export function QuemE() {
  const faltando = facetas.filter((f) => !f.fala).length

  return (
    <section id="quem-e" className="mv-secao bg-papel relative overflow-hidden">
      <FundoEconomias variante="a" className="text-verde opacity-[.05]" />
      <div className="mv-shell relative flex flex-col gap-9">
        <div className="flex max-w-[62ch] flex-col gap-4 text-center sm:text-left">
          <p className="mv-kicker text-[#2F5C1B]">Sete papéis</p>
          <h2 className="text-[clamp(1.45rem,4.6vw,2.25rem)] font-extrabold tracking-tight">
            Antes de ser candidato, ele já era outras seis coisas.
          </h2>
          <p className="hidden text-[1.0625rem] leading-relaxed text-fraca sm:block sm:text-[1.15rem]">
            {candidato.nomeCivil}. No Sul, todo mundo chama de Marcão. Currículo em bullet não
            convence ninguém: aqui a biografia é o que ele faz, e o que ele diz sobre cada
            papel.
          </p>
        </div>

        <ul className="grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {facetas.map((f, i) => (
            <li
              key={f.slug}
              className="mv-card flex h-full flex-col gap-2"
              style={{ '--fio': 'var(--verde-fundo)' } as React.CSSProperties}
            >
              <p className="flex items-baseline gap-3">
                <span className="mv-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="h-px grow bg-linha" aria-hidden="true" />
              </p>
              <h3 className="text-[1.25rem] font-extrabold">{f.papel}</h3>
              {f.fala ? (
                <p className="text-[1.0625rem] leading-relaxed text-fraca">{f.fala}</p>
              ) : (
                MOSTRAR_PENDENCIAS && (
                  <p className="flex items-center gap-2 text-[0.9375rem] font-semibold text-[#B3241C]">
                    <span
                      aria-hidden="true"
                      className="grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 border-[#B3241C] text-[0.75rem] leading-none"
                    >
                      !
                    </span>
                    falta a fala
                  </p>
                )
              )}
            </li>
          ))}
        </ul>

        {MOSTRAR_PENDENCIAS && faltando > 0 && (
          <p className="mv-todo text-[0.9375rem]">
            <b>TODO (T2), {faltando} de {facetas.length} sem fala</b>
            Cada faceta precisa de uma frase do Marcão, em primeira pessoa, sobre aquele
            papel. Preencher em <code>content/facetas.ts</code>, campo <code>fala</code>.
          </p>
        )}
      </div>
    </section>
  )
}
