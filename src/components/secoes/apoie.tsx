import { Cartaz } from '@/components/ui/marca'
import { IconeGente, IconeCompartilhar, IconeMegafone, IconeInstagram } from '@/components/ui/icones'
import { candidato } from '@/content/candidato'
import { videoFechamento } from '@/content/videos'
import { Player } from '@/components/ui/video'

/**
 * BORA JUNTO
 *
 * O FORMULÁRIO SAIU em 14/08/2026, a pedido. Com ele saíram o cadastro de
 * apoiador, a validação por campo, o honeypot e o consentimento de LGPD que
 * viviam aqui. A seção deixou de ser client component: sem estado, ela volta a
 * ser HTML renderizado no servidor.
 *
 * Duas consequências ficam registradas, porque voltam a valer no dia em que o
 * formulário voltar:
 *
 * · o site não coleta mais nenhum dado pessoal. A Política de Privacidade
 *   continua no ar, o que é correto, mas hoje ela descreve uma coleta que não
 *   acontece. Revisar o texto antes do go-live.
 * · a rota `app/api/apoiador/route.ts` ficou sem quem a chame. Foi mantida no
 *   repositório de propósito, funcionando, para o formulário voltar sem
 *   precisar ser reescrito.
 *
 * A seção continua sendo o fechamento da página, e agora manda a pessoa para
 * onde a campanha de fato conversa: as redes.
 */
export function Apoie() {
  return (
    <section id="apoie" className="bg-petroleo text-white mv-secao">
      <div className="mv-shell grid gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="flex flex-col gap-5 text-center sm:text-left">
          <p className="mv-kicker text-amarelo">Bora junto</p>
          <h2 className="text-[clamp(1.5rem,5vw,2.4rem)]">
            <Cartaz className="text-laranja">{candidato.hashtag}</Cartaz>
          </h2>
          <p className="max-w-[56ch] text-[1.0625rem] leading-relaxed text-[#CFE0DA] sm:text-[1.15rem]">
            O Marcão é a ponte para levar a voz e a necessidade da nossa gente até onde as
            decisões acontecem. Campanha no Sul não se ganha com dinheiro, se ganha com gente
            falando com gente.
          </p>

          <ul className="flex flex-col gap-3">
            {[
              { Icone: IconeMegafone, t: 'Acompanhe a agenda',
                d: 'Onde ele vai estar, o que rolou em cada cidade e material para compartilhar.' },
              { Icone: IconeGente, t: 'Chame o Marcão para o seu grupo',
                d: 'Associação de bairro, colônia de pesca, cooperativa, igreja, time. É assim que a conversa começa.' },
              { Icone: IconeCompartilhar, t: 'Espalhe o número',
                d: 'Fale de 36.028 para quem mora aqui. Quem disca 028 todo dia não esquece mais.' },
            ].map(({ Icone, t, d }) => (
              <li
                key={t}
                className="flex gap-4 rounded-[10px] border border-white/20 bg-white/[.07] px-5 py-4 text-left"
              >
                <Icone className="mt-1 shrink-0 text-amarelo" tamanho={26} />
                <div>
                  <strong className="font-display text-[1.0625rem]">{t}</strong>
                  <p className="text-[1.0625rem] leading-relaxed text-[#CBDDD7]">{d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <Player video={videoFechamento} />

          <div className="flex flex-col gap-4 rounded-[10px] border border-white/20 bg-white/[.07] p-6 text-center sm:text-left">
            <h3 className="font-display text-[1.15rem] font-extrabold">
              A campanha conversa por aqui
            </h3>
            <ul className="flex flex-col gap-2">
              {[
                { href: candidato.redes.instagram, texto: 'Instagram do Marcão' },
                { href: candidato.redes.instagramMovimento, texto: 'Instagram do Triângulo do Sul' },
                { href: candidato.redes.facebook, texto: 'Facebook' },
              ].map((r) => (
                <li key={r.texto}>
                  <a
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center gap-3 font-display text-[1.0625rem] font-bold no-underline hover:text-amarelo"
                  >
                    <IconeInstagram tamanho={22} className="shrink-0 text-amarelo" />
                    {r.texto}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-[1rem] leading-relaxed text-[#CBDDD7]">
              Ou escreva para{' '}
              <a href={`mailto:${candidato.campanha.email}`} className="underline">
                {candidato.campanha.email}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
