import Link from 'next/link'
import { Lockup, BarraTricolor } from '@/components/ui/marca'
import {
  IconeInstagram, IconeFacebook, IconeEmail, IconeLocal, IconeSeta,
} from '@/components/ui/icones'
import { candidato } from '@/content/candidato'

const NAVEGACAO = [
  { href: '#numero',    texto: 'O 028' },
  { href: '#quem-e',    texto: 'Quem é' },
  { href: '#origem',    texto: 'De onde venho' },
  { href: '#vejo',      texto: 'O que eu vejo' },
  { href: '#escuta',    texto: 'O que eu ouvi' },
  { href: '#bandeiras', texto: 'O que vou fazer' },
]

/**
 * RODAPÉ
 *
 * Fora do `<main>`, para manter o papel `contentinfo` e o atalho de leitor de
 * tela até o bloco legal.
 *
 * Três colunas no desktop, empilhadas e centralizadas no celular. O bloco
 * legal é obrigação eleitoral, então vem em corpo de 17 px, com respiro, e não
 * em letra miúda escondida no canto.
 */
export function Rodape() {
  return (
    <footer className="bg-petroleo text-white">
      <BarraTricolor altura={8} />

      <div className="mv-shell flex flex-col gap-12 pt-14 pb-[calc(var(--barra-h)+3rem)] lg:pb-16">

        {/* ── marca ── */}
        <div className="flex flex-col items-center gap-5 text-center sm:items-start sm:text-left">
          <Lockup className="text-[clamp(2.1rem,9vw,2.8rem)]" />
          <p className="font-display text-[1.2rem] font-bold text-amarelo">{candidato.slogan}</p>
        </div>

        {/* ── três colunas ── */}
        <div className="grid gap-10 text-center sm:text-left md:grid-cols-3 md:gap-8">

          <nav aria-label="Seções do site" className="flex flex-col gap-4">
            <h2 className="mv-kicker text-white/60">Navegar</h2>
            <ul className="flex flex-col gap-1">
              {NAVEGACAO.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="inline-flex min-h-[44px] items-center font-display text-[1.0625rem] font-bold no-underline hover:text-amarelo"
                  >
                    {l.texto}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Redes sociais" className="flex flex-col gap-4">
            <h2 className="mv-kicker text-white/60">Acompanhar</h2>
            <ul className="flex flex-col gap-1">
              {[
                { Icone: IconeInstagram, href: candidato.redes.instagram, texto: 'Instagram do Marcão' },
                { Icone: IconeInstagram, href: candidato.redes.instagramMovimento, texto: 'Triângulo do Sul' },
                { Icone: IconeFacebook, href: candidato.redes.facebook, texto: 'Facebook' },
              ].map(({ Icone, href, texto }) => (
                <li key={texto}>
                  <a
                    href={href} target="_blank" rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center gap-3 font-display text-[1.0625rem] font-bold no-underline hover:text-amarelo"
                  >
                    <Icone tamanho={22} />
                    {texto}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-4">
            <h2 className="mv-kicker text-white/60">Falar com a campanha</h2>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`mailto:${candidato.campanha.email}`}
                  className="inline-flex min-h-[44px] items-center gap-3 text-[1.0625rem] no-underline hover:text-amarelo"
                >
                  <IconeEmail tamanho={22} className="shrink-0 text-amarelo" />
                  {candidato.campanha.email}
                </a>
              </li>
              <li className="flex items-start justify-center gap-3 text-[1.0625rem] leading-relaxed text-white/85 sm:justify-start">
                <IconeLocal tamanho={22} className="mt-1 shrink-0 text-amarelo" />
                <span>
                  {candidato.campanha.endereco}
                  <br />
                  CEP {candidato.campanha.cep}
                </span>
              </li>
            </ul>
            <a href="#apoie" className="mv-btn mv-btn-amarelo mt-1 w-full sm:w-auto">
              Quero ajudar
              <IconeSeta tamanho={20} />
            </a>
          </div>
        </div>

        <hr className="border-0 border-t border-white/20" />

        {/* ── bloco legal, obrigação eleitoral ── */}
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:justify-start">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/agir36.svg" alt="Agir, partido número 36"
              width={160} height={35}
              className="h-[28px] w-auto opacity-90 [filter:brightness(0)_invert(1)]"
            />
            <span className="font-display text-[1.0625rem] font-bold">
              Candidato a {candidato.cargo} pelo {candidato.uf}
            </span>
          </div>

          <p className="max-w-[72ch] text-[1.0625rem] leading-relaxed text-white/85">
            <strong className="text-white">
              {candidato.nomeCivil}, “{candidato.nomeUrna}”, {candidato.partido},{' '}
              <span className="text-amarelo">{candidato.numero}</span>.
            </strong>
            <br />
            Este site é de responsabilidade da campanha{' '}
            <strong>{candidato.campanha.razaoSocial}</strong>, CNPJ{' '}
            <strong>{candidato.campanha.cnpj}</strong>.
          </p>

          {/* aviso de LGPD, vindo do protótipo Sul em Foco. Em corpo legível:
              obrigação legal escondida em letra de 11 px é obrigação cumprida
              pela metade. */}
          <p className="max-w-[72ch] text-[1rem] leading-relaxed text-white/75">
            Dados coletados com consentimento expresso, conforme a LGPD (Lei 13.709/2018) e a
            Resolução TSE 23.610/2019.
          </p>

          <p className="text-[1rem]">
            <Link href="/privacidade" className="underline hover:text-amarelo">
              Política de Privacidade
            </Link>
          </p>

          <p className="text-[0.9375rem] text-white/55">
            Desenvolvido por Morro Alto Creative Office
          </p>
        </div>
      </div>
    </footer>
  )
}
