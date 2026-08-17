import { Topo } from '@/components/topo'
import { Hero } from '@/components/secoes/hero'
import { Numero } from '@/components/secoes/numero'
import { Trajetoria } from '@/components/secoes/trajetoria'
import { LinhaDoTempo } from '@/components/secoes/linha-do-tempo'
import { Territorio } from '@/components/secoes/territorio'
import { Escuta } from '@/components/secoes/escuta'
import { Bandeiras } from '@/components/secoes/bandeiras'
import { Galeria } from '@/components/secoes/galeria'
import { Apoie } from '@/components/secoes/apoie'
import { Rodape } from '@/components/secoes/rodape'
import { candidato, site } from '@/content/candidato'

/**
 * ARQUITETURA DA PÁGINA
 *
 *   1  Hero                  copy §1
 *   2  O Sul tem número      o orelhão, o 36 e o 028
 *   3  Agenda                copy §2, com os dois eventos reais
 *   4  Trajetória            copy §3, com a foto de família e os selos
 *   5  Linha do tempo        copy §4, seis marcos de 1966 a 2026
 *   6  O Sul de perto        a arte do mapa e os três municípios
 *   7  O Triângulo tem voz   as três economias, com os dados do IBGE
 *   8  O que defendemos      copy §5, seis eixos
 *   9  Perto de quem precisa copy §6, três espaços de vídeo
 *  10  CTA final             copy §7
 *
 * A AGENDA SOBE para antes da trajetória, logo depois do 028. É a única seção
 * com data marcada: quem chega ao site hoje precisa saber onde ele vai estar
 * esta semana antes de ler a história de vida. Biografia não tem prazo, evento
 * tem.
 *
 * Saíram, a pedido: "Quem é o Marcão" (as sete facetas), "De onde eu venho" e o
 * espaço livre reservado. O mapa e o Triângulo do Sul saíram e VOLTARAM em
 * 15/08/2026, com texto novo da campanha.
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
        <Trajetoria />
        <LinhaDoTempo />
        <Territorio />
        <Escuta />
        <Bandeiras />
        {/* PERTO DE QUEM PRECISA — no ar desde 16/08/2026, com os três vídeos
            do canal oficial da campanha. */}
        <Galeria />
        <Apoie />
      </main>
      <Rodape />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dadosEstruturados) }}
      />
    </>
  )
}
