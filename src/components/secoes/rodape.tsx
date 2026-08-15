import Link from 'next/link'
import { LockupArte, BarraTricolor } from '@/components/ui/marca'
import { FundoEconomias } from '@/components/ui/simbolos'
import { IconeInstagram } from '@/components/ui/icones'
import { candidato } from '@/content/candidato'

/**
 * RODAPÉ (seção 8 do copy oficial)
 *
 * O copy pede quatro coisas, e o rodapé tem essas quatro e nada mais:
 * a linha de identificação, as redes sociais, a conformidade legal e os links
 * jurídicos.
 *
 * Saíram daqui as três colunas de navegação, contato e endereço que eu tinha
 * montado: não estão no copy.
 *
 * Fora do `<main>`, para manter o papel `contentinfo` e o atalho de leitor de
 * tela até o bloco legal. O bloco legal é obrigação eleitoral, então vem em
 * corpo de 17 px, com respiro, e não em letra miúda escondida no canto.
 *
 * ⚠️ DUAS PENDÊNCIAS DO PRÓPRIO COPY:
 *
 * 1. Ele pede Instagram e TIKTOK. O TikTok da campanha não foi informado, e
 *    perfil chutado manda o eleitor para a conta de outra pessoa. Assim que
 *    vier, acrescente em `candidato.redes` e na lista `REDES` abaixo.
 * 2. Ele pede cinco links jurídicos. Só a Política de Privacidade existe como
 *    página; Termos de Uso, Transparência, Política de Cookies e Encarregado
 *    LGPD ainda não têm texto. Cada um entra criando `app/<slug>/page.tsx` e
 *    somando à lista `LEGAIS`.
 */

const REDES = [
  { Icone: IconeInstagram, href: candidato.redes.instagram, texto: 'Instagram' },
]

const LEGAIS = [{ href: '/privacidade', texto: 'Política de Privacidade' }]

export function Rodape() {
  return (
    <footer className="bg-petroleo text-white relative overflow-hidden">
      <BarraTricolor altura={8} />
      <FundoEconomias variante="b" className="text-white opacity-[.08] [&>svg]:scale-150" />

      <div className="mv-shell relative flex flex-col items-center gap-8 pt-14 pb-16 text-center">
        <LockupArte altura={56} className="w-[min(72vw,18rem)]" />

        <p className="text-[1.0625rem] leading-relaxed text-white/90 sm:text-[1.15rem]">
          <strong className="text-white">Marcão Vivacqua 2026</strong> — Candidato a{' '}
          {candidato.cargo} · {candidato.partido} · Espírito Santo · Número{' '}
          <span className="text-amarelo">{candidato.numero}</span>
        </p>

        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {REDES.map(({ Icone, href, texto }) => (
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

        <hr className="w-full border-0 border-t border-white/20" />

        <p className="max-w-[72ch] text-[1rem] leading-relaxed text-white/75">
          Dados coletados com consentimento expresso conforme LGPD (Lei 13.709/2018) e
          Resolução TSE 23.610/2019.
        </p>

        <nav aria-label="Informações legais">
          <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            {LEGAIS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-[1rem] underline hover:text-amarelo">
                  {l.texto}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
