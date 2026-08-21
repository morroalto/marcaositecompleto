import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Topo } from '@/components/topo'
import { Moldura } from '@/components/secoes/moldura'
import { Rodape } from '@/components/secoes/rodape'
import { IconeSeta } from '@/components/ui/icones'
import { candidato } from '@/content/candidato'
import capa from '@/../public/fotos/marcao-hero.jpg'

export const metadata: Metadata = {
  title: 'Fotos da campanha',
  description:
    `Coloque o selo oficial de ${candidato.nomeUrna} ${candidato.numero} na sua foto. ` +
    'Sai pronta para foto de perfil ou para o story, direto no seu navegador.',
  robots: { index: true, follow: true },
}

/**
 * /FOTOS
 *
 * Uma página só para a moldura. Ela existe porque o gerador é a coisa mais
 * compartilhável do site: quem recebe "faça a sua" no grupo do WhatsApp quer
 * cair direto no gerador, e não rolar sete seções até achá-lo.
 *
 * A SEÇÃO É A MESMA COMPONENTE da página inicial, e não uma cópia. Duas cópias
 * do mesmo gerador significariam corrigir tudo duas vezes, e a diferença entre
 * elas apareceria no dia em que alguém esquecesse uma.
 *
 * A arte de abertura é a mesma do hero, servida do mesmo arquivo: trocar a arte
 * da campanha continua sendo trocar um arquivo, sem mexer em código.
 */
export default function Fotos() {
  return (
    <>
      <Topo />
      <main id="conteudo">
        {/* A ARTE SANGRA de borda a borda, como no hero: ela É a abertura, não
            uma ilustração dentro de uma caixa. `priority` porque é a primeira
            coisa que a pessoa vê ao cair aqui vinda de um link. */}
        <section className="mv-duo relative overflow-hidden">
          <h1 className="mv-sr">
            {`Fotos da campanha de ${candidato.nomeUrna}, ${candidato.cargo} pelo ${candidato.uf}. `}
            {`Na urna, digite ${candidato.numeroSoletrado}.`}
          </h1>

          <figure className="mv-arte-funde m-0 w-full">
            <Image
              src={capa}
              alt={`${candidato.nomeUrna}, ${candidato.slogan}. Arte da campanha.`}
              priority
              sizes="100vw"
              className="h-auto w-full"
            />
          </figure>
        </section>

        <Moldura />

        {/* O caminho de volta. Quem chega por um link direto não passou pela
            página inicial, e sem isto o site termina aqui para essa pessoa. */}
        <section className="mv-secao bg-petroleo text-white">
          <div className="mv-shell flex flex-col items-center gap-5 text-center">
            <p className="text-[1.0625rem] leading-relaxed text-white/85 sm:text-[1.15rem]">
              Quer conhecer as propostas e a história do Marcão?
            </p>
            <Link href="/" className="mv-btn mv-btn-amarelo">
              Ver o site completo
              <IconeSeta tamanho={20} />
            </Link>
          </div>
        </section>
      </main>
      <Rodape />
    </>
  )
}
