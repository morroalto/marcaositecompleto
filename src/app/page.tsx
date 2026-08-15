import { Topo } from '@/components/topo'
import { Hero } from '@/components/secoes/hero'
import { Agenda } from '@/components/secoes/agenda'
import { Trajetoria } from '@/components/secoes/trajetoria'
import { LinhaDoTempo } from '@/components/secoes/linha-do-tempo'
import { Bandeiras } from '@/components/secoes/bandeiras'
import { Galeria } from '@/components/secoes/galeria'
import { Apoie } from '@/components/secoes/apoie'
import { Rodape } from '@/components/secoes/rodape'
import { candidato, site } from '@/content/candidato'

/**
 * ARQUITETURA DA PÁGINA
 *
 * O site tem EXATAMENTE as oito seções do copy oficial
 * (`dizeres site marcao.pdf`), na ordem dele, e nada além disso:
 *
 *   1  Hero                  §1
 *   2  Agenda                §2, com os dois eventos reais
 *   3  Trajetória            §3
 *   4  Linha do tempo        §4, de 1966 a 2026
 *   5  O que defendemos      §5, seis eixos
 *   6  Perto de quem precisa §6
 *   7  CTA final             §7
 *   8  Rodapé                §8
 *
 * SAÍRAM em 15/08/2026, por decisão do cliente: só entra no site o que está no
 * copy. Foram embora as seções que eu tinha escrito ou herdado do protótipo —
 * "Quem é o Marcão" (sete facetas), "De onde eu venho", "O Sul tem número" (o
 * orelhão e o 36.028), "O que eu vejo" (o mapa) e "O que eu ouvi" (o Triângulo
 * do Sul), além do espaço livre reservado.
 *
 * Os componentes dessas seções foram apagados, mas o material delas continua
 * no repositório e volta rápido se a campanha quiser: as artes em
 * `public/fotos/` e `public/marca/`, os dados das cidades em
 * `content/territorio.ts`, o mapa oficial do IBGE em `components/ui/mapa-es.tsx`
 * e o histórico completo no git.
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
        <Agenda />
        <Trajetoria />
        <LinhaDoTempo />
        <Bandeiras />
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
