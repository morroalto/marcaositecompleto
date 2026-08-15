import { IconeInstagram, IconeSeta } from '@/components/ui/icones'
import { candidato } from '@/content/candidato'
import { videoFechamento } from '@/content/videos'
import { Player } from '@/components/ui/video'

/**
 * CTA FINAL (seção 7 do copy oficial)
 *
 * "Faça parte dessa mudança", o texto aprovado e os dois botões: "Tô junto com
 * o Marcão" e "Entrar no Grupo Oficial".
 *
 * ⚠️ NENHUM DOS DOIS BOTÕES TEM DESTINO AINDA. O copy pede grupo oficial, e o
 * link do WhatsApp não veio; o formulário de apoiador saiu a pedido. Enquanto
 * não houver para onde mandar, os botões apontam para as redes, que é o canal
 * que de fato existe hoje. Botão de campanha que não leva a lugar nenhum
 * queima o eleitor que clicou.
 *
 * Para ligar: `candidato.redes.grupoWhatsapp` em `content/candidato.ts`.
 *
 * O formulário que vivia aqui levou junto o cadastro, a validação, o honeypot
 * e o consentimento de LGPD. Duas consequências ficam registradas: o site não
 * coleta mais dado pessoal, e a Política de Privacidade hoje descreve uma
 * coleta que não acontece. A rota `app/api/apoiador/route.ts` continua no
 * repositório, funcionando, para o formulário voltar sem ser reescrito.
 */
export function Apoie() {
  const redes = [
    { href: candidato.redes.instagram, texto: 'Instagram do Marcão' },
    { href: candidato.redes.instagramMovimento, texto: 'Instagram do Triângulo do Sul' },
    { href: candidato.redes.facebook, texto: 'Facebook' },
  ]

  return (
    <section id="apoie" className="bg-petroleo text-white mv-secao">
      <div className="mv-shell flex flex-col items-center gap-7 text-center">
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

        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {redes.map((r) => (
            <li key={r.texto}>
              <a
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 font-display text-[1.0625rem] font-bold no-underline hover:text-amarelo"
              >
                <IconeInstagram tamanho={22} className="shrink-0 text-amarelo" />
                {r.texto}
              </a>
            </li>
          ))}
        </ul>

        <Player video={videoFechamento} className="w-full max-w-[46rem]" />
      </div>
    </section>
  )
}
