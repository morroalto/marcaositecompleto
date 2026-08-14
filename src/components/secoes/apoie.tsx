import { Cartaz } from '@/components/ui/marca'
import {
  IconeGente, IconeCompartilhar, IconeMegafone, IconeInstagram, IconeFacebook,
} from '@/components/ui/icones'
import { candidato } from '@/content/candidato'
import { videoFechamento } from '@/content/videos'
import { Player } from '@/components/ui/video'

const CANAIS = [
  {
    Icone: IconeMegafone,
    t: 'Acompanhe a agenda',
    d: 'Onde ele vai estar, o que rolou em cada cidade e material para compartilhar.',
  },
  {
    Icone: IconeGente,
    t: 'Chame o Marcão para o seu grupo',
    d: 'Associação de bairro, colônia de pesca, cooperativa, igreja, time. É assim que a conversa começa.',
  },
  {
    Icone: IconeCompartilhar,
    t: 'Espalhe o número',
    d: 'Fale de 36.028 para quem mora aqui. Quem disca 028 todo dia não esquece mais.',
  },
]

/**
 * BORA JUNTO
 *
 * O formulário saiu em 14/08/2026, a pedido, e com ele o cadastro de apoiador,
 * a validação por campo, o honeypot e o consentimento de LGPD. A seção deixou
 * de ser client component: sem estado, é HTML renderizado no servidor.
 *
 * Duas consequências ficam registradas, porque voltam a valer no dia em que o
 * formulário voltar:
 * · o site não coleta mais nenhum dado pessoal, e a Política de Privacidade
 *   hoje descreve uma coleta que não acontece. Revisar antes do go-live.
 * · a rota `app/api/apoiador/route.ts` ficou sem quem a chame. Mantida no
 *   repositório, funcionando, para o formulário voltar sem ser reescrito.
 *
 * LAYOUT (14/08/2026, terceira tentativa e a que presta): BLOCOS EMPILHADOS,
 * cada um em largura cheia. As duas versões anteriores eram duas colunas, e o
 * problema é que elas nunca tiveram a mesma altura: à esquerda, título mais
 * três cards; à direita, um card de contato e um campo de vídeo que só
 * renderiza quando houver arquivo. Alinhado no topo, o card ficava pendurado
 * com meia seção de vazio embaixo; centralizado, boiava no meio; esticado,
 * virava uma caixa comprida com o conteúdo perdido no centro.
 *
 * Em bloco, não existe coluna curta: título, os três canais lado a lado, e as
 * redes numa faixa horizontal. A faixa repete a forma do "Faltou o seu tema?"
 * das bandeiras, então as duas seções rimam.
 */
export function Apoie() {
  const redes = [
    { Icone: IconeInstagram, href: candidato.redes.instagram, texto: 'Instagram do Marcão' },
    { Icone: IconeInstagram, href: candidato.redes.instagramMovimento, texto: 'Triângulo do Sul' },
    { Icone: IconeFacebook, href: candidato.redes.facebook, texto: 'Facebook' },
  ]

  return (
    <section id="apoie" className="bg-petroleo text-white mv-secao">
      <div className="mv-shell flex flex-col gap-9">

        <div className="flex max-w-[62ch] flex-col gap-4 text-center sm:text-left">
          <p className="mv-kicker text-amarelo">Bora junto</p>
          <h2 className="text-[clamp(1.5rem,5vw,2.4rem)]">
            <Cartaz className="text-laranja">{candidato.hashtag}</Cartaz>
          </h2>
          <p className="text-[1.0625rem] leading-relaxed text-[#CFE0DA] sm:text-[1.15rem]">
            O Marcão é a ponte para levar a voz e a necessidade da nossa gente até onde as
            decisões acontecem. Campanha no Sul não se ganha com dinheiro, se ganha com gente
            falando com gente.
          </p>
        </div>

        <ul className="grid items-stretch gap-5 sm:grid-cols-3">
          {CANAIS.map(({ Icone, t, d }) => (
            <li
              key={t}
              className="flex h-full flex-col gap-2 rounded-[10px] border border-white/20 bg-white/[.07] px-6 py-6 text-left"
            >
              <Icone className="shrink-0 text-amarelo" tamanho={28} />
              <strong className="font-display text-[1.15rem]">{t}</strong>
              <p className="text-[1.0625rem] leading-relaxed text-[#CBDDD7]">{d}</p>
            </li>
          ))}
        </ul>

        {/* faixa horizontal: título de um lado, as redes do outro */}
        <div className="flex flex-col gap-5 rounded-[10px] border border-white/20 bg-white/[.07] px-7 py-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          <div className="text-center lg:text-left">
            <h3 className="font-display text-[1.15rem] font-extrabold">
              A campanha conversa por aqui
            </h3>
            <p className="text-[1rem] leading-relaxed text-[#CBDDD7]">
              Ou escreva para{' '}
              <a href={`mailto:${candidato.campanha.email}`} className="underline">
                {candidato.campanha.email}
              </a>
              .
            </p>
          </div>

          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 lg:justify-end">
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

        <Player video={videoFechamento} className="mx-auto w-full max-w-[46rem]" />
      </div>
    </section>
  )
}
