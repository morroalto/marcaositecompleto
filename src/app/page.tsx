import { Topo } from '@/components/topo'
import { BarraFixa } from '@/components/barra-fixa'
import { Hero } from '@/components/secoes/hero'
import { Numero } from '@/components/secoes/numero'
import { QuemE } from '@/components/secoes/quem-e'
import { Origem } from '@/components/secoes/origem'
import { Territorio } from '@/components/secoes/territorio'
import { Escuta } from '@/components/secoes/escuta'
import { Bandeiras } from '@/components/secoes/bandeiras'
import { Agenda } from '@/components/secoes/agenda'
import { Apoie } from '@/components/secoes/apoie'
import { Rodape } from '@/components/secoes/rodape'
import { candidato, site } from '@/content/candidato'

/**
 * ARQUITETURA: retrato em sete facetas.
 *
 *   1 Abertura            a arte oficial, o prazo, a ação
 *   2 O Sul tem número    o orelhão, o 36, o 028 e as nove cidades
 *   3 Quem é o Marcão     as sete facetas, agora em texto
 *   4 De onde eu venho    família, linha do tempo e Triângulo do Sul
 *   5 O que eu vejo       o mapa da campanha e o território em foto real
 *   6 O que eu ouvi       o triângulo da escuta
 *   7 O que eu vou fazer  as seis bandeiras
 *   8 Agenda              só renderiza com evento confirmado
 *   9 Bora junto          WhatsApp e cadastro
 *
 * A ordem vai do concreto (a pessoa, o número) para o compromisso, e termina
 * na conversão. Nome de seção em primeira pessoa, porque é a voz dele que
 * sustenta a página quando o logo sai.
 *
 * Fusão de 14/08/2026: a estrutura e os textos do protótipo "Sul em Foco"
 * entraram neste projeto. Vieram de lá a linha do tempo, os selos, a citação,
 * o efeito de discagem, a agenda, as pautas de pesca, agricultura e
 * mobilidade, o aviso de LGPD e a assinatura do rodapé.
 */
export default function Pagina() {
  const dadosEstruturados = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: candidato.nomeCivil,
    alternateName: candidato.nomeUrna,
    jobTitle: `Candidato a ${candidato.cargo}`,
    url: site.url,
    email: candidato.campanha.email,
    sameAs: [candidato.redes.instagram, candidato.redes.facebook],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Marataízes',
      addressRegion: 'ES',
      postalCode: candidato.campanha.cep,
      addressCountry: 'BR',
    },
  }

  return (
    <>
      <Topo />
      <main id="conteudo">
        <Hero />
        <Numero />
        <QuemE />
        <Origem />
        <Territorio />
        <Escuta />
        <Bandeiras />
        <Agenda />
        <Apoie />
      </main>
      <Rodape />
      <BarraFixa />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dadosEstruturados) }}
      />
    </>
  )
}
