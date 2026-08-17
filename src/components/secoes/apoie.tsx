import {
  IconeInstagram, IconeFacebook, IconeTiktok, IconeYoutube, IconeX, IconeThreads, IconeSeta,
} from '@/components/ui/icones'
import { FundoEconomias } from '@/components/ui/simbolos'
import { candidato } from '@/content/candidato'

/**
 * CTA FINAL (seção 7 do copy oficial)
 *
 * "Faça parte dessa mudança", o texto aprovado, o botão e as redes.
 *
 * REFEITO em 15/08/2026. Estava com três cards de canais mais um card largo de
 * contato embaixo, e ficou ruim por dois motivos: o conteúdo dos cards era
 * texto meu, que o copy não pede, e o card largo tinha título centralizado
 * sobre uma caixa de largura inteira, com tudo boiando no meio. Fecho de
 * página não precisa de grade: precisa de uma frase, um botão e para onde ir.
 *
 * O copy pedia um segundo botão, "Entrar no Grupo Oficial". Ele saiu em
 * 15/08/2026 porque a campanha não tinha grupo, e botão que não leva a lugar
 * nenhum queima quem clicou. O grupo passou a existir em 17/08 e ganhou seção
 * própria (`secoes/grupo.tsx`), logo abaixo desta: o convite vem depois do
 * pedido de apoio, e não disputando espaço com ele.
 *
 * O formulário que vivia aqui levou junto o cadastro, a validação, o honeypot
 * e o consentimento de LGPD. Duas consequências ficam registradas: o site não
 * coleta mais dado pessoal, e a Política de Privacidade descreve hoje uma
 * coleta que não acontece. A rota `app/api/apoiador/route.ts` continua no
 * repositório, funcionando, para o formulário voltar sem ser reescrito.
 */
export function Apoie() {
  /** as mesmas seis do rodapé, na mesma ordem */
  const redes = [
    { Icone: IconeInstagram, href: candidato.redes.instagram, texto: 'Instagram' },
    { Icone: IconeFacebook, href: candidato.redes.facebook, texto: 'Facebook' },
    { Icone: IconeTiktok, href: candidato.redes.tiktok, texto: 'TikTok' },
    { Icone: IconeYoutube, href: candidato.redes.youtube, texto: 'YouTube' },
    { Icone: IconeX, href: candidato.redes.x, texto: 'X' },
    { Icone: IconeThreads, href: candidato.redes.threads, texto: 'Threads' },
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

        {/* O segundo botão do copy, "Entrar no Grupo Oficial", saiu em
            15/08/2026: a campanha não tem grupo de WhatsApp. Fica o que leva a
            algum lugar. */}
        <a
          href={candidato.redes.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="mv-btn mv-btn-laranja w-full sm:w-auto"
        >
          Tô junto com o Marcão
          <IconeSeta tamanho={20} />
        </a>

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
