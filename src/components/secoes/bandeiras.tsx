import { IconeMegafone, IconeSeta } from '@/components/ui/icones'
import { FundoEconomias } from '@/components/ui/simbolos'
import { bandeiras, type Bandeira } from '@/content/bandeiras'

/** cor da marca que entra no fio do card, via custom property */
const FIO: Record<Bandeira['cor'], string> = {
  laranja: 'var(--laranja)',
  verde: 'var(--verde-fundo)',
  marinho: 'var(--marinho)',
  amarelo: 'var(--amarelo)',
  petroleo: 'var(--petroleo)',
}

/**
 * O QUE DEFENDEMOS
 *
 * Texto: copy oficial da campanha. Seis eixos, um parágrafo cada.
 *
 * O card é branco e quieto, com o número pequeno e nítido na linha do título e
 * a cor da marca num fio de 3 px que cresce no hover. Forma inspirada em
 * brunopeixoto.com e nikolasferreira.com.br: quem organiza a grade é o número,
 * não a cor. A versão anterior tinha faixa colorida de 6 px no topo e o número
 * em corpo 35 a 30% de opacidade dentro do texto, e seis deles lado a lado
 * viravam seis retângulos listrados.
 *
 * A caixa de compromisso separada saiu junto com o campo `compromisso`: o copy
 * traz um texto só por eixo.
 */
export function Bandeiras() {
  return (
    <section id="bandeiras" className="bg-papel mv-secao relative overflow-hidden">
      <FundoEconomias variante="b" className="text-marinho opacity-[.05]" />
      <div className="mv-shell relative flex flex-col gap-9">
        <div className="flex max-w-[62ch] flex-col gap-4 text-center sm:text-left">
          <p className="mv-kicker text-[#2F5C1B]">Seis frentes</p>
          <h2 className="text-[clamp(1.45rem,4.6vw,2.25rem)] font-extrabold tracking-tight">
            O que defendemos
          </h2>
        </div>

        <ul className="grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {bandeiras.map((b, i) => (
            <li
              key={b.slug}
              className="mv-card flex h-full flex-col gap-3"
              style={{ '--fio': FIO[b.cor] } as React.CSSProperties}
            >
              <p className="flex items-baseline gap-3">
                <span className="mv-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="h-px grow bg-linha" aria-hidden="true" />
              </p>
              <h3 className="text-[1.25rem] font-extrabold">{b.titulo}</h3>
              <p className="text-[1.0625rem] leading-relaxed text-fraca">{b.texto}</p>
            </li>
          ))}
        </ul>

        {/* faixa, não card: o convite não é o sétimo eixo, é outra coisa */}
        <div className="flex flex-col items-center gap-5 rounded-[10px] bg-petroleo px-7 py-7 text-center text-white sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
            <IconeMegafone className="shrink-0 text-amarelo" tamanho={30} />
            <div>
              <h3 className="text-[1.25rem] font-extrabold">Faltou o seu tema?</h3>
              <p className="text-[1.0625rem] leading-relaxed text-[#CBDDD7]">
                A pauta do Sul não cabe em seis cards. Manda pra gente.
              </p>
            </div>
          </div>
          <a href="#apoie" className="mv-btn mv-btn-amarelo w-full shrink-0 sm:w-auto">
            Falar com a campanha
            <IconeSeta tamanho={20} />
          </a>
        </div>
      </div>
    </section>
  )
}
