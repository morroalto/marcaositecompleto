import { Topo } from '@/components/topo'
import { Hero } from '@/components/secoes/hero'
import { Numero } from '@/components/secoes/numero'
import { Trajetoria } from '@/components/secoes/trajetoria'
import { LinhaDoTempo } from '@/components/secoes/linha-do-tempo'
import { Bandeiras } from '@/components/secoes/bandeiras'
import { Galeria } from '@/components/secoes/galeria'
import { Agenda } from '@/components/secoes/agenda'
import { Livre } from '@/components/secoes/livre'
import { Apoie } from '@/components/secoes/apoie'
import { Rodape } from '@/components/secoes/rodape'
import { candidato, site } from '@/content/candidato'

/**
 * ARQUITETURA DA PÁGINA
 *
 * A ordem segue o copy oficial (`dizeres site marcao.pdf`), com as seções que
 * a campanha pediu para manter fora dele:
 *
 *   1  Hero                  copy §1
 *   2  O Sul tem número      o orelhão, o 36 e o 028, pedido à parte
 *   3  Trajetória            copy §3, com a foto de família e os selos
 *   4  Linha do tempo        copy §4, de 1966 a 2026
 *   5  O que eu vejo         a arte do mapa e o território, pedido à parte
 *   6  O que eu ouvi         o Triângulo do Sul, pedido à parte
 *   7  O que defendemos      copy §5, seis eixos
 *   8  Perto de quem precisa copy §6, três espaços de vídeo
 *   9  Agenda                copy §2, com os dois eventos reais
 *  10  [seção livre]         espaço reservado, ainda sem conteúdo
 *  11  CTA final             copy §7
 *
 * SAÍRAM em 15/08/2026, quando o copy oficial chegou: "Quem é o Marcão" (as
 * sete facetas) e "De onde eu venho" (biografia em primeira pessoa). As duas
 * eram texto de rascunho, escrito por mim antes de existir copy, e diziam o
 * que a Trajetória agora diz com o texto aprovado. Manter as três seria contar
 * a mesma história três vezes, e duas delas sem aval de ninguém.
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
        <Bandeiras />
        <Galeria />
        <Agenda />
        <Livre />
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
