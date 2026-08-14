import { Topo } from '@/components/topo'
import { Hero } from '@/components/secoes/hero'
import { Numero } from '@/components/secoes/numero'
import { QuemE } from '@/components/secoes/quem-e'
import { Trajetoria } from '@/components/secoes/trajetoria'
import { Origem } from '@/components/secoes/origem'
import { Territorio } from '@/components/secoes/territorio'
import { Escuta } from '@/components/secoes/escuta'
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
 *   1  Abertura              a arte oficial, o prazo
 *   2  O Sul tem número      o orelhão, o 36, o 028 e as nove cidades
 *   3  Quem é o Marcão       os sete papéis, em grade
 *   4  Trajetória            a linha do tempo, 1966 a 2026
 *   5  De onde eu venho      família e Triângulo do Sul
 *   6  O que eu vejo         o mapa da campanha e o território
 *   7  O que eu ouvi         o triângulo da escuta
 *   8  O que defendemos      as seis bandeiras
 *   9  Perto de quem precisa os momentos, em foto real
 *  10  Agenda                com estado vazio honesto até haver evento
 *  11  [seção livre]         espaço reservado, ainda sem conteúdo
 *  12  Bora junto            as redes da campanha
 *
 * A ordem vai do concreto (a pessoa, o número) para o compromisso, e termina
 * no convite. Nome de seção em primeira pessoa, porque é a voz dele que
 * sustenta a página quando o logo sai.
 *
 * Fusão de 14/08/2026: a estrutura e os textos do protótipo "Sul em Foco"
 * entraram neste projeto. Vieram de lá a trajetória, a agenda, "Perto de quem
 * precisa", "O que defendemos", o efeito de discagem, o aviso de LGPD e a
 * assinatura do rodapé.
 *
 * A barra fixa do celular saiu junto com o formulário: ela existia para levar
 * ao cadastro, e sem cadastro seria um banner ocupando 68 px de tela sem ter o
 * que fazer. O componente segue em `components/barra-fixa.tsx`.
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
        <Trajetoria />
        <Origem />
        <Territorio />
        <Escuta />
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
