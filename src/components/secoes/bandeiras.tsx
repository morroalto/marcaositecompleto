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
 * O QUE DEFENDEMOS
 *
 * Texto: as frentes de campanha de 08/09/2026. Cada card é uma frente, com a
 * linha de foco e os programas nomeados dentro dela.
 *
 * A GRADE. Três colunas no desktop, duas no tablet, uma no telefone. Três é
 * decisão do Matheus (08/09/2026): mantém as seis frentes em duas fileiras
 * limpas, do jeito que a seção sempre foi.
 *
 * A conta fecha: shell de 74rem menos o respiro, dividido em três, dá uns
 * 347 px de card. É coluna estreita para parágrafo corrido, mas o que vai
 * aqui é item curto de duas ou três linhas, e nesse formato ela se sustenta.
 * No tablet duas colunas, porque aí a terceira espremeria de verdade.
 *
 * CARD COMPACTO, e só aqui. Pedido do Matheus em 08/09/2026: o card ficou
 * alto demais com vinte itens na página. Apertei padding (1.75/1.6rem para
 * 1.25rem), título (1.25 para 1.125rem), foco (1.0625 para 1rem), item
 * (0.9375 para 0.875rem), ícone (30 para 26 px) e os respiros.
 *
 * Está tudo em utilitário no JSX, de propósito. `.mv-card` também veste o
 * card da agenda (`secoes/agenda.tsx`) e o da seção livre
 * (`secoes/livre.tsx`, hoje sem texto e por isso fora do ar): encolher a
 * classe encolheria os dois de tabela. O fio de 3 px, a borda, o hover e o
 * raio continuam vindo de lá, que é o que mantém este card irmão dos outros.
 *
 * De quebra o texto ganhou largura: com o padding menor sobram uns 307 px de
 * linha, perto de 44 caracteres, contra os 39 de antes.
 *
 * O card em si não mudou de linguagem: branco e quieto, número pequeno e
 * nítido na linha do título, cor da marca só no fio de 3 px que cresce no
 * hover. Referência de forma: brunopeixoto.com e nikolasferreira.com.br, onde
 * quem organiza a grade é o número, não a cor. Manter isso com o card mais
 * alto é o ponto: o que cresceu foi o conteúdo, não o barulho.
 *
 * A frase-força abre a seção, com fio na cor amarela. Ela não subiu para o
 * hero de propósito, e o porquê está em `src/content/bandeiras.ts`.
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

          {/* fio à esquerda a partir do sm, onde o bloco já está alinhado à
              esquerda; no mobile o texto é centrado e o fio vira linha em cima */}
          <div
            className="flex flex-col gap-2 border-t border-linha pt-4 sm:border-t-0
                       sm:border-l-4 sm:border-amarelo sm:pt-0 sm:pl-6"
          >
            <p className="font-display text-[clamp(1.125rem,3vw,1.4rem)] font-extrabold leading-snug">
              {fraseForca.principal}
            </p>
            <p className="text-[1.0625rem] leading-relaxed text-fraca">
              {fraseForca.apoio}
            </p>
          </div>
        </div>

        <ul className="grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
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
              <p className="text-[1rem] leading-relaxed text-fraca">{b.foco}</p>

              {/* os programas da frente. O nome fica na tinta cheia e a
                  explicação na fraca: quem passa o olho lê só os nomes.

                  Sem `mt-auto` de propósito. Na fileira de três os cards têm
                  três ou quatro itens, alturas diferentes, e grudar a lista
                  no pé do card abriria um vão entre o foco e a linha
                  divisória bem no meio do card. Sobrando embaixo, a folga
                  encosta na borda e ninguém vê. */}
              <ul className="flex flex-col gap-2.5 border-t border-linha pt-3.5">
                {b.itens.map((item) => (
                  <li
                    key={item.titulo}
                    className="relative pl-4 text-[0.875rem] leading-relaxed"
                  >
                    <span
                      className="absolute left-0 top-[.5em] h-[6px] w-[6px] rounded-full"
                      style={{ background: 'var(--fio)' }}
                      aria-hidden="true"
                    />
                    <strong className="font-extrabold">{item.titulo}.</strong>{' '}
                    <span className="text-fraca">{item.texto}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        {/* faixa, não card: o convite não é a sétima frente, é outra coisa */}
        <div className="flex flex-col items-center gap-5 rounded-[10px] bg-petroleo px-7 py-7 text-center text-white sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
            <IconeMegafone className="shrink-0 text-amarelo" tamanho={30} />
            <div>
              <h3 className="text-[1.25rem] font-extrabold">Faltou o seu tema?</h3>
              <p className="text-[1.0625rem] leading-relaxed text-[#CBDDD7]">
                A pauta do Sul não cabe em seis frentes. Manda pra gente.
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
