import { IconeMegafone, IconeSeta } from '@/components/ui/icones'
import { IconeDe } from '@/components/ui/icones'
import { FundoEconomias } from '@/components/ui/simbolos'
import { bandeiras, fraseForca, type Bandeira } from '@/content/bandeiras'

/** cor da marca que entra no fio do card, via custom property */
const FIO: Record<Bandeira['cor'], string> = {
  laranja: 'var(--laranja)',
  verde: 'var(--verde-fundo)',
  marinho: 'var(--marinho)',
  amarelo: 'var(--amarelo)',
  petroleo: 'var(--petroleo)',
}

/** a mesma cor, como classe, para o ícone do card */
const COR: Record<Bandeira['cor'], string> = {
  laranja: 'text-laranja',
  verde: 'text-[var(--verde-fundo)]',
  marinho: 'text-marinho',
  amarelo: 'text-[#C9A800]',
  petroleo: 'text-petroleo',
}

/**
 * OS 10 COMPROMISSOS COM O ESPÍRITO SANTO
 *
 * Texto e ordem: arte oficial da campanha, 09/09/2026. Dez cards, título e
 * uma linha cada. Substituiu as seis frentes de 08/09, que traziam foco mais
 * itens nomeados e por isso pediam um card bem mais alto.
 *
 * A GRADE, E O DÉCIMO CARD. Três colunas no desktop, duas no tablet, uma no
 * telefone. Só que dez não fecha em três: sobram três fileiras cheias e um
 * card sozinho na quarta. Encostado à esquerda ele parece erro de montagem,
 * então vai centralizado, na coluna do meio (`lg:col-start-2`). Fileira curta
 * e centrada lê como fecho; fileira curta e torta lê como bug.
 *
 * No tablet o problema não existe: dez em duas colunas dá cinco fileiras
 * exatas, que por acaso é a diagramação da própria arte.
 *
 * CARD COMPACTO, e só aqui. `.mv-card` também veste o card da agenda
 * (`secoes/agenda.tsx`) e o da seção livre (`secoes/livre.tsx`, hoje sem
 * texto e fora do ar): encolher a classe encolheria os dois de tabela. O fio
 * de 3 px, a borda, o hover e o raio continuam vindo de lá, que é o que
 * mantém este card irmão dos outros.
 *
 * O card é branco e quieto, com o número pequeno e nítido na linha do título
 * e a cor da marca num fio de 3 px que cresce no hover. Forma inspirada em
 * brunopeixoto.com e nikolasferreira.com.br: quem organiza a grade é o
 * número, não a cor.
 *
 * A frase-força abre a seção, com fio amarelo. Ela não subiu para o hero de
 * propósito, e o porquê está em `src/content/bandeiras.ts`.
 */
export function Bandeiras() {
  return (
    <section id="bandeiras" className="bg-papel mv-secao relative overflow-hidden">
      <FundoEconomias variante="b" className="text-marinho opacity-[.05]" />
      <div className="mv-shell relative flex flex-col gap-9">
        <div className="flex max-w-[62ch] flex-col gap-4 text-center sm:text-left">
          <p className="mv-kicker text-[#2F5C1B]">Dez compromissos</p>
          <h2 className="text-[clamp(1.45rem,4.6vw,2.25rem)] font-extrabold tracking-tight">
            10 compromissos com o Espírito Santo
          </h2>

          {/* fio à esquerda a partir do sm, onde o bloco já está alinhado à
              esquerda; no mobile o texto é centrado e o fio vira linha em cima */}
          <div
            className="flex flex-col gap-2 border-t border-linha pt-4 sm:border-t-0
                       sm:border-l-4 sm:border-amarelo sm:pt-0 sm:pl-6"
          >
            <p className="font-display text-[clamp(1.125rem,3vw,1.4rem)] font-extrabold leading-snug">
              {fraseForca.principal}
            </p>
          </div>
        </div>

        <ul
          className="grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3
                     [&>li:last-child]:lg:col-start-2"
        >
          {bandeiras.map((b, i) => (
            <li
              key={b.slug}
              className="mv-card flex h-full flex-col gap-2.5 p-5"
              style={{ '--fio': FIO[b.cor] } as React.CSSProperties}
            >
              <p className="flex items-center gap-3">
                <IconeDe nome={b.icone} tamanho={26} className={`shrink-0 ${COR[b.cor]}`} />
                <span className="h-px grow bg-linha" aria-hidden="true" />
                <span className="mv-num">{String(i + 1).padStart(2, '0')}</span>
              </p>
              <h3 className="text-[1.125rem] font-extrabold leading-snug">{b.titulo}</h3>
              <p className="text-[1rem] leading-relaxed text-fraca">{b.texto}</p>
            </li>
          ))}
        </ul>

        {/* faixa, não card: o convite não é o décimo primeiro compromisso */}
        <div className="flex flex-col items-center gap-5 rounded-[10px] bg-petroleo px-7 py-7 text-center text-white sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
            <IconeMegafone className="shrink-0 text-amarelo" tamanho={30} />
            <div>
              <h3 className="text-[1.25rem] font-extrabold">Faltou o seu tema?</h3>
              <p className="text-[1.0625rem] leading-relaxed text-[#CBDDD7]">
                A pauta do Espírito Santo não cabe em dez compromissos. Manda pra gente.
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
