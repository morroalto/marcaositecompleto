import Image from 'next/image'
import { candidato } from '@/content/candidato'
import { CIDADES_028, numeroTexto } from '@/content/numero'
import { Discagem } from '@/components/ui/discagem'
import { FundoAssinatura } from '@/components/ui/simbolos'
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
  return (
    <section id="numero" className="mv-fundo-fone mv-secao relative overflow-hidden">
      {/* a assinatura no fundo, como nas outras seções sem as três economias */}
      <FundoAssinatura variante="c" className="text-white opacity-[.06]" />

      <div className="mv-shell relative grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">

        {/* ── ele no orelhão ── */}
        {/* `--pe-x` marca onde ele pisa dentro do arquivo: ele está à esquerda
            e o poste do orelhão à direita, então a sombra do chão vai em 32%
            da largura, e não no meio, que cairia no vão entre os dois. */}
        <div
          className="mv-profundidade relative mx-auto w-full max-w-[32rem]"
          style={{ '--pe-x': '32%', '--pe-y': '4%' } as React.CSSProperties}
        >
          <Image
            src={fone}
            alt="Marcão falando em um orelhão, de camiseta do Triângulo do Sul, com a mão estendida"
            sizes="(max-width: 1023px) 92vw, 32rem"
            priority
            className="h-auto w-full"
          />

          {/* O visor cobre TODA a base da foto, encostado nas duas laterais,
              como uma tarja. Um cartãozinho centralizado, como estava antes,
              ficava boiando por cima da imagem; a tarja fecha a composição e
              apoia a figura. */}
          <div className="absolute inset-x-0 bottom-0 z-10">
            <Discagem />
          </div>
        </div>

        {/* ── o argumento ── */}
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          {/* sem kicker: "Nove cidades, um código" dizia, em letra pequena, o
              que o título e a lista de chips já dizem em letra grande */}
          <h2 className="text-[clamp(1.45rem,4.6vw,2.25rem)] font-extrabold tracking-tight text-white">
            {numeroTexto.titulo[0]} {numeroTexto.titulo[1]}
          </h2>

          {/* VERDE E LARANJA, com TODO o texto em branco.
              O laranja usa o tom escuro da paleta (#E06A00, o mesmo da sombra
              dos botões) e não o #FF7A00 puro: com o branco por cima, o laranja
              claro deixava o rótulo pequeno "O DDD DO SUL" quase apagado. O
              número é grande e aguenta, mas a linha de baixo não aguentava. */}
          <div className="flex w-full gap-3 sm:w-auto sm:gap-4">
            <div className="flex-1 rounded-xl bg-[#3A7325] px-5 py-4 text-center shadow-[0_5px_0_rgba(0,0,0,.32)] sm:flex-none sm:min-w-[8.5rem]">
              <b className="block font-display text-[clamp(2.1rem,8vw,2.9rem)] leading-none font-black text-white tabular-nums">
                {candidato.numeroPartido}
              </b>
              <span className="font-display text-[0.75rem] font-extrabold tracking-[0.1em] text-white uppercase">
                O partido
              </span>
            </div>
            <div className="flex-1 rounded-xl bg-[#E06A00] px-5 py-4 text-center shadow-[0_5px_0_rgba(0,0,0,.32)] sm:flex-none sm:min-w-[8.5rem]">
              <b className="block font-display text-[clamp(2.1rem,8vw,2.9rem)] leading-none font-black text-white tabular-nums">
                {candidato.numeroDDD}
              </b>
              <span className="font-display text-[0.75rem] font-extrabold tracking-[0.1em] text-white uppercase">
                O DDD do Sul
              </span>
            </div>
          </div>

          {/* texto novo da campanha. Substituiu o parágrafo que listava as
              cidades uma a uma: a lista já vem logo abaixo, em chip, e repetir
              os mesmos nomes em prosa era dizer duas vezes na mesma tela */}
          <p className="max-w-[58ch] text-[1.0625rem] leading-relaxed text-[#D7E8E4] sm:text-[1.15rem]">
            {numeroTexto.argumento}
          </p>

          <p className="font-display text-[1.15rem] leading-snug font-extrabold text-amarelo sm:text-[1.35rem]">
            “Meu número termina com o DDD do Sul. Porque eu sou daqui.”
          </p>

          {/* TODAS AS CIDADES IGUAIS. As três do Triângulo vinham em amarelo,
              e o parágrafo abaixo existia só para explicar por quê. Sem o
              destaque, o parágrafo perde a função e sai junto: a seção fica
              com a lista e o fecho, sem nota de rodapé.
              São as doze do protótipo, e não as nove que eu tinha reduzido. */}
          <ul className="flex flex-wrap justify-center gap-2 sm:justify-start">
            {CIDADES_028.map((cidade) => (
              <li key={cidade}>
                <span className="mv-chip border-white/40 text-white">{cidade}</span>
              </li>
            ))}
          </ul>
          <p className="font-display text-[0.8125rem] font-extrabold tracking-[0.14em] text-white/80 uppercase">
            {numeroTexto.listaRodape}
          </p>

          {/* a segunda metade do texto fica AQUI, depois da lista: ela é a
              conclusão que os doze nomes acabaram de sustentar */}
          <p className="max-w-[58ch] text-[1.0625rem] leading-relaxed text-[#D7E8E4] sm:text-[1.15rem]">
            {numeroTexto.fecho}
          </p>
        </div>
      </div>
    </section>
  )
}
