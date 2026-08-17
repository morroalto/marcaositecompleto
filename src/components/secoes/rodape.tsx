import Link from 'next/link'
import { LockupArte, BarraTricolor } from '@/components/ui/marca'
import { FundoEconomias } from '@/components/ui/simbolos'
import {
  IconeInstagram, IconeFacebook, IconeTiktok, IconeYoutube, IconeX, IconeThreads,
  IconeEmail, IconeLocal, IconeSeta,
} from '@/components/ui/icones'
import { candidato } from '@/content/candidato'

/** uma entrada por seção que existe na página, na ordem dela */
const NAVEGACAO = [
  { href: '#numero',         texto: 'O 028' },
  { href: '#agenda',         texto: 'Agenda' },
  { href: '#trajetoria',     texto: 'Trajetória' },
  { href: '#linha-do-tempo', texto: 'Linha do tempo' },
  { href: '#bandeiras',      texto: 'O que defendemos' },
  { href: '#presenca',       texto: 'Perto de quem precisa' },
]

/**
 * ⚠️ LINKS LEGAIS QUE O COPY (§8) PEDE E QUE AINDA NÃO EXISTEM:
 * Termos de Uso, Transparência, Política de Cookies e Encarregado LGPD.
 *
 * Nenhum deles tem texto escrito, então nenhum está no rodapé: link que cai em
 * 404 num rodapé eleitoral é pior do que link que ainda não está lá. Para
 * publicar cada um, crie a rota em `app/<slug>/page.tsx` e acrescente aqui
 * embaixo, junto da Política de Privacidade.
 */

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
    <footer className="bg-petroleo text-white relative overflow-hidden">
      <BarraTricolor altura={8} />

      {/* Aqui as três economias entram MAIORES que nas outras seções, e um
          pouco mais fortes. O rodapé é bloco de cor cheia, sem foto e sem
          card: é onde a marca d'água tem espaço para respirar sem disputar
          com nada. */}
      <FundoEconomias variante="b" className="text-white opacity-[.08] [&>svg]:scale-150" />

      {/* A LOGO ACIMA DA PLATAFORMA, e é o ARQUIVO do acervo — o mesmo que o
          cabeçalho usa —, não a versão em SVG que espalha pelas outras seções.
          Aqui o fundo é sempre petróleo, ou seja, sempre escuro, e o PNG
          branco do designer serve direto; onde o fundo muda de cor é que a
          reconstrução em SVG se faz necessária, por causa do `currentColor`.

          A plataforma da variante "b" fica em `right-1/4 -bottom-20`, com
          `scale-150`; a logo se apoia logo acima dela e um pouco à direita,
          como assinatura de quem está de pé sobre a estrutura. Some abaixo de
          `lg`, onde o rodapé é uma coluna só e não sobra fundo livre. */}
      {/* o respiro extra embaixo era para a barra fixa do celular não cobrir o
          bloco legal. A barra saiu, então o rodapé volta ao padding normal. */}
      <div className="mv-shell relative flex flex-col gap-12 pt-14 pb-16">

        {/* ── abertura ──
            SÓ O SLOGAN. O lockup que abria o rodapé saiu em 17/08/2026, a
            pedido: a MESMA marca aparecia duas vezes dentro do mesmo rodapé,
            aqui em cima e de novo na assinatura do bloco legal, a poucos
            centímetros de distância. Marca repetida no mesmo bloco não reforça
            nada, só faz o rodapé parecer duas peças coladas — e a que ficou é a
            que tem função, porque acompanha o texto obrigatório da Justiça
            Eleitoral. */}
        <p className="text-center font-display text-[1.2rem] font-bold text-amarelo sm:text-left">
          {candidato.slogan}
        </p>

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
              {/* As seis contas oficiais dele. O copy §8 pedia Instagram e
                  TikTok; a campanha mandou as outras quatro depois. O
                  Instagram do Triângulo do Sul continua fora: é do movimento,
                  não da candidatura. */}
              {[
                { Icone: IconeInstagram, href: candidato.redes.instagram, texto: 'Instagram' },
                { Icone: IconeFacebook, href: candidato.redes.facebook, texto: 'Facebook' },
                { Icone: IconeTiktok, href: candidato.redes.tiktok, texto: 'TikTok' },
                { Icone: IconeYoutube, href: candidato.redes.youtube, texto: 'YouTube' },
                { Icone: IconeX, href: candidato.redes.x, texto: 'X' },
                { Icone: IconeThreads, href: candidato.redes.threads, texto: 'Threads' },
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
              Falar com a campanha
              <IconeSeta tamanho={20} />
            </a>
          </div>
        </div>

        <hr className="border-0 border-t border-white/20" />

        {/* ── bloco legal, obrigação eleitoral ──
            Duas colunas a partir do `lg`: o texto à esquerda, a assinatura à
            direita. A marca ficava posicionada por cima, e por cima ela sempre
            acabava esbarrando numa linha do texto legal em ALGUMA largura de
            tela — a 820 px cortava a linha da LGPD, a 1100 px a do CNPJ. Numa
            grade isso não acontece em largura nenhuma: as duas dividem o
            espaço em vez de disputá-lo, e o texto obrigatório fica sempre
            inteiro. Abaixo de `lg` a marca desce para o fim, centralizada. */}
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-10">
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

          {/* Conformidade legal, texto do copy §8. Em corpo legível: obrigação
              legal escondida em letra de 11 px é obrigação cumprida pela
              metade.

              ⚠️ A frase fala em consentimento para coleta de dados, e o site
              não coleta mais nada desde que o formulário saiu. Ela continua
              porque a Resolução do TSE é citada aqui, mas o texto precisa de
              uma revisão jurídica antes do go-live, junto com a Política de
              Privacidade. */}
          <p className="max-w-[72ch] text-[1rem] leading-relaxed text-white/75">
            Dados coletados com consentimento expresso conforme LGPD (Lei 13.709/2018) e
            Resolução TSE 23.610/2019.
          </p>

          {/* dos cinco links legais do copy, só este existe como página. Os
              outros quatro estão em LEGAIS_PENDENTES, no topo do arquivo, e
              entram quando houver texto: link de rodapé eleitoral que cai em
              404 é pior do que link que ainda não está lá. */}
          <p className="text-[1rem]">
            <Link href="/privacidade" className="underline hover:text-amarelo">
              Política de Privacidade
            </Link>
          </p>

          {/* a assinatura da agência sai do cinza: o nome vai no laranja da
              marca, que é a cor de destaque do site, e leva ao site dela.
              `rel="noopener"` é obrigatório com `target="_blank"`, e o
              sublinhado só no hover para a assinatura não competir com os
              links jurídicos logo acima. */}
          <p className="text-[0.9375rem] text-white/55">
            Desenvolvido por{' '}
            <a
              href="https://www.morroalto.co"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-laranja no-underline hover:underline"
            >
              Morro Alto Creative Office
            </a>
          </p>
        </div>

          {/* A ASSINATURA, sem opacidade e grande, a pedido. É a única marca do
              rodapé que não é marca d'água: entra no branco cheio do arquivo, e
              é a plataforma atrás dela que continua rebaixada.

              A largura é `clamp`, então ela acompanha a tela em vez de ter um
              tamanho só; a coluna se ajusta ao que ela pedir. */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-[clamp(11rem,26vw,19rem)] shrink-0">
              <LockupArte fluido tamanhos="(max-width: 1023px) 26vw, 19rem" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
