import { Topo } from '@/components/topo'
import { BarraFixa } from '@/components/barra-fixa'
import { Hero } from '@/components/secoes/hero'
import { Numero } from '@/components/secoes/numero'
import { QuemE } from '@/components/secoes/quem-e'
import { Origem } from '@/components/secoes/origem'
import { Territorio } from '@/components/secoes/territorio'
import { Escuta } from '@/components/secoes/escuta'
import { Bandeiras } from '@/components/secoes/bandeiras'
import { Apoie } from '@/components/secoes/apoie'
import { Rodape } from '@/components/secoes/rodape'
import { candidato, site } from '@/content/candidato'

/**
 * ARQUITETURA: retrato em sete facetas.
 *
 *   1 Abertura            quem é, o número, o prazo, a ação
 *   2 O Sul tem número    36 é o partido, 028 é o DDD, e as nove cidades
 *   3 Quem é o Marcão     as sete facetas, o elemento assinatura
 *   4 De onde eu venho    família e Triângulo do Sul
 *   5 O que eu vejo       o território em foto real
 *   6 O que eu ouvi       o triângulo da escuta
 *   7 O que eu vou fazer  as bandeiras
 *   8 Bora junto          WhatsApp e cadastro
 *
 * A ordem vai do concreto (a pessoa, o número) para o compromisso, e termina
 * na conversão. Nome de seção em primeira pessoa, porque é a voz dele que
 * sustenta a página quando o logo sai.
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
