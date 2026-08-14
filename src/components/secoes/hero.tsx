import Image from 'next/image'
import { IconeSeta } from '@/components/ui/icones'
import { Contagem } from '@/components/ui/contagem'
import { candidato } from '@/content/candidato'
import { diasAte } from '@/lib/utils'
import capa from '@/../public/fotos/marcao-hero.jpg'

/**
 * HERO
 *
 * Refeito em 14/08/2026: a abertura agora é a ARTE OFICIAL da campanha
 * (`public/fotos/marcao-hero.jpg`), a mesma peça que roda no Instagram e no
 * impresso. Ela já traz o lockup e o slogan travados pelo designer, então
 * repetir "MARCÃO VIVACQUA" em HTML logo abaixo seria dizer duas vezes a mesma
 * coisa, com dois tratamentos tipográficos diferentes brigando na mesma tela.
 *
 * O H1 continua existindo, em texto, para leitor de tela e para busca: o que
 * o olho recebe pela arte, a tecnologia assistiva recebe pelo `mv-sr`, com o
 * número soletrado dígito a dígito, que é como se digita na urna.
 *
 * Abaixo da arte fica o que a arte não faz: explicar o 028, dizer quantos dias
 * faltam e oferecer o caminho da ação. Ordem de leitura igual à de foco.
 */
export function Hero() {
  const dias = diasAte(candidato.eleicao.data)

  return (
    <section id="topo" className="mv-duo relative overflow-hidden">
      {/* a hachura decorativa saiu daqui: com a arte encostada no topo da
          seção, ela caía por cima da peça do designer */}
      <h1 className="mv-sr">
        {`${candidato.nomeUrna}, ${candidato.cargo} pelo ${candidato.uf}, ${candidato.partido}. `}
        {`${candidato.slogan}. Na urna, digite ${candidato.numeroSoletrado}.`}
      </h1>

      {/* A arte sangra de borda a borda: ela É a abertura, não uma ilustração
          dentro de uma caixa. Sem raio, sem sombra e sem o respiro lateral do
          shell, que a transformavam num card no meio da tela. */}
      <figure className="mv-arte-funde mv-entra m-0 w-full">
        <Image
          src={capa}
          alt={`${candidato.nomeUrna}, ${candidato.slogan}. Arte da campanha.`}
          priority
          sizes="100vw"
          className="h-auto w-full"
        />
      </figure>

      <div className="mv-shell flex flex-col gap-8 pt-10 pb-14 lg:gap-10 lg:pb-24">
        <p className="mv-entra flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center font-display text-[0.8125rem] font-extrabold tracking-[0.14em] text-white/80 uppercase sm:justify-start sm:text-left">
          Eleições 2026
          <span aria-hidden="true">·</span>
          {candidato.uf}
          <span aria-hidden="true">·</span>
          {candidato.partido} {candidato.numero}
        </p>

        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_.9fr] lg:gap-14">
          <div className="mv-entra mv-d2 flex flex-col items-center gap-5 text-center sm:items-start sm:text-left">
            <p className="max-w-[58ch] text-[1.0625rem] leading-relaxed text-[#E4F0EA] sm:text-[1.15rem]">
              O Sul do Estado é onde o Marcão escolheu viver, construir a história dele e
              fincar raiz. Da vivência do dia a dia em Marataízes ao conhecimento de
              Itapemirim e de toda a região, ele conhece essa terra como a palma da mão.
              É hora de transformar essa presença na voz que a nossa gente precisa na
              Assembleia Legislativa.
            </p>
            <p className="max-w-[58ch] text-[1.0625rem] leading-relaxed text-[#E4F0EA] sm:text-[1.15rem]">
              <strong className="text-amarelo">028 não é só DDD</strong>, é o código que o Sul
              inteiro disca todo dia, e são os três últimos dígitos do meu número na urna.
            </p>

            {/* sem o formulário, o site não pede cadastro: os dois botões
                levam a ler e a conhecer, não a se inscrever */}
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
              <a href="#bandeiras" className="mv-btn mv-btn-laranja w-full sm:w-auto">
                O que defendemos
                <IconeSeta tamanho={20} />
              </a>
              <a href="#quem-e" className="mv-btn mv-btn-linha w-full sm:w-auto">
                Quem é o Marcão
                <IconeSeta tamanho={20} />
              </a>
            </div>
          </div>

          {/* RELÓGIO DE VERDADE, andando de segundo em segundo até a abertura
              das urnas. Um número parado dizendo "51 dias" não é contagem
              regressiva, é uma informação; o que prende é ver o segundo
              virar. */}
          <div className="mv-entra mv-d3 flex flex-col gap-3 rounded-[14px] border border-white/20 bg-white/[.06] p-5 sm:p-6">
            <p className="text-center font-display text-[0.8125rem] font-extrabold tracking-[0.16em] text-white/75 uppercase">
              Falta para a eleição
            </p>
            <Contagem alvo={candidato.eleicao.data} diasIniciais={dias} />
            <p className="text-center text-[1.0625rem] leading-snug text-[#E4F0EA]">
              {candidato.eleicao.texto}, {candidato.eleicao.turno}
            </p>
          </div>
        </div>
      </div>

      {/* A saída do hero para a seção do orelhão. Sem isso, o gradiente daqui
          encosta no fundo escuro de lá e a emenda aparece como uma linha reta
          atravessando a tela. O tom do fim é o mesmo tom com que a próxima
          seção começa, então a passagem não tem fronteira. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(to_bottom,transparent,#0A4C57)]"
      />
    </section>
  )
}
