import { IconeInstagram, IconeTiktok, IconeSeta } from '@/components/ui/icones'
import { FundoEconomias } from '@/components/ui/simbolos'
import { candidato } from '@/content/candidato'

/**
 * CTA FINAL (seção 7 do copy oficial)
 *
 * "Faça parte dessa mudança", o texto aprovado e os dois botões: "Tô junto com
 * o Marcão" e "Entrar no Grupo Oficial".
 *
 * REFEITO em 15/08/2026. Estava com três cards de canais mais um card largo de
 * contato embaixo, e ficou ruim por dois motivos: o conteúdo dos cards era
 * texto meu, que o copy não pede, e o card largo tinha título centralizado
 * sobre uma caixa de largura inteira, com tudo boiando no meio. Fecho de
 * página não precisa de grade: precisa de uma frase, dois botões e para onde
 * ir.
 *
 * ⚠️ OS DOIS BOTÕES AINDA NÃO TÊM DESTINO PRÓPRIO. O copy pede grupo oficial e
 * o link do WhatsApp não veio; o formulário de apoiador saiu a pedido.
 * Enquanto isso eles vão para as redes, que é o canal que existe hoje. Para
 * ligar de verdade: preencha `candidato.grupoWhatsapp` em
 * `content/candidato.ts` e troque o `href` do segundo botão.
 *
 * O formulário que vivia aqui levou junto o cadastro, a validação, o honeypot
 * e o consentimento de LGPD. Duas consequências ficam registradas: o site não
 * coleta mais dado pessoal, e a Política de Privacidade descreve hoje uma
 * coleta que não acontece. A rota `app/api/apoiador/route.ts` continua no
 * repositório, funcionando, para o formulário voltar sem ser reescrito.
 */
export function Apoie() {
  const redes = [
    { Icone: IconeInstagram, href: candidato.redes.instagram, texto: 'Instagram' },
    { Icone: IconeTiktok, href: candidato.redes.tiktok, texto: 'TikTok' },
  ]

  return (
    <section id="apoie" className="bg-petroleo text-white mv-secao relative overflow-hidden">
      <FundoEconomias variante="c" className="text-white opacity-[.07]" />

      <div className="mv-shell relative flex flex-col items-center gap-7 text-center">
        <div className="flex max-w-[56ch] flex-col gap-4">
          <h2 className="text-[clamp(1.5rem,5vw,2.4rem)] font-extrabold tracking-tight">
            Faça parte dessa mudança
          </h2>
          <p className="text-[1.0625rem] leading-relaxed text-[#CFE0DA] sm:text-[1.15rem]">
            Marcão é a ponte para levar a voz e as necessidades do nosso povo para onde as
            decisões acontecem. Garanta seu lugar nessa caminhada.
          </p>
        </div>

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a
            href={candidato.redes.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mv-btn mv-btn-laranja w-full sm:w-auto"
          >
            Tô junto com o Marcão
            <IconeSeta tamanho={20} />
          </a>
          <a
            href={candidato.redes.instagramMovimento}
            target="_blank"
            rel="noopener noreferrer"
            className="mv-btn mv-btn-linha w-full sm:w-auto"
          >
            Entrar no Grupo Oficial
            <IconeSeta tamanho={20} />
          </a>
        </div>

        <ul className="flex flex-wrap justify-center gap-x-7 gap-y-2">
          {redes.map(({ Icone, href, texto }) => (
            <li key={texto}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 font-display text-[1.0625rem] font-bold no-underline hover:text-amarelo"
              >
                <Icone tamanho={22} className="shrink-0 text-amarelo" />
                {texto}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
