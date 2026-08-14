import type { Metadata } from 'next'
import Link from 'next/link'
import { Lockup, BarraTricolor } from '@/components/ui/marca'
import { candidato } from '@/content/candidato'

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: 'Como a campanha trata os dados de quem se cadastra pelo site.',
  robots: { index: true, follow: true },
}

/**
 * Página exigida pelo formulário: sem ela, a coleta de dado pessoal não sobe.
 * Escrita em português direto, não em juridiquês, porque quem lê é o eleitor.
 * O texto ainda precisa passar pelo advogado antes do go-live.
 */
export default function Privacidade() {
  const blocos = [
    {
      t: 'Quem coleta',
      p: [`A campanha ${candidato.campanha.razaoSocial}, CNPJ ${candidato.campanha.cnpj}, com sede em ${candidato.campanha.endereco}, CEP ${candidato.campanha.cep}.`,
          `Contato para qualquer pedido sobre seus dados: ${candidato.campanha.email}.`],
    },
    {
      t: 'O que a gente coleta',
      p: ['Só o que você digita no formulário: nome, número de WhatsApp, cidade e como você quer ajudar. Nada além disso.',
          'A gente não compra lista, não coleta dado escondido e não usa seu contato para outra campanha.'],
    },
    {
      t: 'Para que serve',
      p: ['Para a campanha falar com você pelo WhatsApp sobre agenda, material de divulgação e mutirão na sua cidade. Só isso.'],
    },
    {
      t: 'Por quanto tempo fica guardado',
      p: ['Até o fim do processo eleitoral de 2026, incluindo o prazo da prestação de contas. Depois disso os dados são apagados.'],
    },
    {
      t: 'Com quem é compartilhado',
      p: ['Com a equipe da campanha e com o serviço usado para enviar as mensagens. Nunca é vendido nem cedido para terceiro.'],
    },
    {
      t: 'Seus direitos',
      p: ['Você pode pedir para ver, corrigir ou apagar seus dados, e pode retirar a autorização a qualquer momento.',
          `Basta escrever para ${candidato.campanha.email}. A gente responde e apaga, sem pedir explicação.`],
    },
    {
      t: 'Medição de audiência',
      p: ['Nenhuma ferramenta de medição roda antes de você autorizar. Se você recusar, o site continua funcionando igual.'],
    },
  ]

  return (
    <>
      <header className="bg-petroleo text-white">
        <div className="mv-shell flex items-center justify-between gap-4 py-4">
          <Link href="/" className="no-underline"><Lockup className="text-[1.5rem]" /></Link>
          <Link href="/" className="font-display text-[1rem] font-bold underline">Voltar ao site</Link>
        </div>
        <BarraTricolor altura={4} />
      </header>

      <main id="conteudo" className="mv-secao">
        <div className="mv-shell flex max-w-[68ch] flex-col gap-8">
          <div className="flex flex-col gap-3">
            <p className="mv-kicker text-[#2F5C1B]">Política de Privacidade</p>
            <h1 className="text-[clamp(1.8rem,7vw,2.8rem)] font-extrabold tracking-tight">
              O que a campanha faz com os seus dados
            </h1>
            <p className="text-[1.0625rem] leading-relaxed text-fraca sm:text-[1.15rem]">
              Última atualização: 12 de agosto de 2026. Este texto ainda passa pela revisão do
              advogado eleitoral antes da publicação definitiva.
            </p>
          </div>

          {blocos.map((b) => (
            <section key={b.t} className="flex flex-col gap-2">
              <h2 className="text-[1.35rem] font-extrabold">{b.t}</h2>
              {b.p.map((linha) => (
                <p key={linha} className="text-[1.0625rem] leading-relaxed">{linha}</p>
              ))}
            </section>
          ))}
        </div>
      </main>
    </>
  )
}
