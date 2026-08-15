import Image from 'next/image'
import { IconeSeta } from '@/components/ui/icones'
import { candidato } from '@/content/candidato'
import capa from '@/../public/fotos/marcao-hero.jpg'

/**
 * HERO (seção 1 do copy oficial)
 *
 * Tag superior, headline, subheadline e os dois CTAs, exatamente como no copy.
 *
 * A headline "UM NOVO MARCO PARA O SUL." não aparece em HTML porque ela já
 * está travada dentro da ARTE, junto com o lockup: escrever de novo embaixo
 * seria dizer duas vezes a mesma coisa, com dois tratamentos tipográficos
 * brigando na mesma tela. O `<h1>` existe em texto para leitor de tela e para
 * busca, com o número soletrado dígito a dígito, que é como se digita na urna.
 *
 * A contagem regressiva que ficava aqui saiu: não está no copy.
 */
export function Hero() {
  return (
    <section id="topo" className="mv-duo relative overflow-hidden">
      <h1 className="mv-sr">
        {`${candidato.nomeUrna}, ${candidato.cargo} pelo ${candidato.uf}, ${candidato.partido}. `}
        {`${candidato.slogan}. Na urna, digite ${candidato.numeroSoletrado}.`}
      </h1>

      {/* a arte sangra de borda a borda: ela É a abertura, não uma ilustração
          dentro de uma caixa */}
      <figure className="mv-arte-funde mv-entra m-0 w-full">
        <Image
          src={capa}
          alt={`${candidato.nomeUrna}, ${candidato.slogan}. Arte da campanha.`}
          priority
          sizes="100vw"
          className="h-auto w-full"
        />
      </figure>

      <div className="mv-shell flex flex-col gap-6 pt-10 pb-14 lg:pb-24">
        <p className="mv-entra flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center font-display text-[0.8125rem] font-extrabold tracking-[0.14em] text-white/80 uppercase sm:justify-start sm:text-left">
          Eleições 2026
          <span aria-hidden="true">·</span>
          {candidato.uf}
          <span aria-hidden="true">·</span>
          {candidato.partido} {candidato.numero}
        </p>

        <div className="mv-entra mv-d2 flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <p className="max-w-[62ch] text-[1.0625rem] leading-relaxed text-[#E4F0EA] sm:text-[1.15rem]">
            O Sul do Estado é onde Marcão Vivacqua escolheu viver, construir sua história e
            fincar raízes. Da vivência do dia a dia em Marataízes ao conhecimento profundo de
            Itapemirim e de toda a nossa região, ele conhece nossa terra como a palma da mão.
            É hora de transformar essa presença e força local na voz que a nossa gente precisa
            na Assembleia Legislativa.
          </p>

          {/* ⚠️ o "Grupo Oficial" ainda não tem link: o convite do WhatsApp não
              veio, e link inventado leva o eleitor para lugar nenhum. Até
              chegar, os dois botões vão para o fim da página, onde estão os
              canais que existem. Para ligar, preencha
              `candidato.redes.grupoWhatsapp`. */}
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
            <a href="#apoie" className="mv-btn mv-btn-laranja w-full sm:w-auto">
              Quero apoiar
              <IconeSeta tamanho={20} />
            </a>
            <a href="#apoie" className="mv-btn mv-btn-linha w-full sm:w-auto">
              Entrar no Grupo Oficial
              <IconeSeta tamanho={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
