'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Cartaz } from '@/components/ui/marca'
import { IconeGente, IconeCompartilhar, IconeCerto, IconeMegafone } from '@/components/ui/icones'
import { candidato } from '@/content/candidato'
import { cidades } from '@/content/territorio'
import { videoFechamento } from '@/content/videos'
import { Player } from '@/components/ui/video'

type Estado = 'repouso' | 'enviando' | 'erro' | 'ok'

/**
 * APOIE
 *
 * Formulário da casa: `useState` por campo, validação simples, honeypot.
 * Sem react-hook-form e sem zod, que a vault proíbe.
 *
 * Os oito estados que importam estão implementados: repouso, foco, erro por
 * campo, erro geral com `aria-live`, enviando com largura travada (para não
 * gerar CLS), sucesso, e o caso do bot silenciado pelo honeypot.
 */
export function Apoie() {
  const [estado, setEstado] = useState<Estado>('repouso')
  // instante em que o formulário apareceu: preenchido em menos de 3 s é robô.
  // O carimbo vai no efeito, não no render: `Date.now()` durante o render é
  // chamada impura e o React Compiler barra.
  const aberto = useRef(0)
  const [erro, setErro] = useState('')
  const [campoRuim, setCampoRuim] = useState<string | null>(null)

  useEffect(() => { aberto.current = Date.now() }, [])

  async function enviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const d = new FormData(form)

    if (d.get('site')) return                      // honeypot: bot, silêncio

    const falhar = (msg: string, campo: string) => {
      setErro(msg); setCampoRuim(campo); setEstado('erro')
      form.querySelector<HTMLElement>(`[name="${campo}"]`)?.focus()
    }

    const nome = String(d.get('nome') ?? '').trim()
    if (nome.split(/\s+/).filter(Boolean).length < 2)
      return falhar('Escreva seu nome e sobrenome.', 'nome')

    const zap = String(d.get('zap') ?? '').replace(/\D/g, '')
    if (zap.length < 10)
      return falhar('O WhatsApp precisa ter DDD e número. Exemplo: (28) 90000-0000.', 'zap')

    if (!d.get('cidade')) return falhar('Escolha sua cidade.', 'cidade')
    if (!d.get('lgpd'))
      return falhar('Marque a autorização de contato para a gente poder falar com você.', 'lgpd')

    setEstado('enviando'); setErro(''); setCampoRuim(null)
    try {
      const r = await fetch('/api/apoiador', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ ...Object.fromEntries(d), aberto: aberto.current }),
      })
      if (!r.ok) throw new Error('falha')
      setEstado('ok'); form.reset()
    } catch {
      setErro('Não deu para enviar agora. Tente de novo, ou chame direto no WhatsApp.')
      setEstado('erro')
    }
  }

  const ruim = (c: string) => (campoRuim === c ? 'border-[#FF8A80]' : 'border-white/45')
  const campo =
    'w-full min-h-[52px] rounded-md border-2 bg-white/[.08] px-3 py-2 text-[1.0625rem] ' +
    'text-white placeholder:text-white/50 focus:border-amarelo focus:outline-none ' +
    'focus:ring-4 focus:ring-amarelo/30 transition-colors'

  return (
    <section id="apoie" className="bg-petroleo text-white corte-cima mv-secao">
      <div className="mv-shell grid gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="flex flex-col items-center gap-5 text-center sm:items-start sm:text-left">
          <p className="mv-kicker text-amarelo">Bora junto</p>
          <h2 className="text-[clamp(1.7rem,7vw,2.9rem)]">
            <Cartaz className="text-laranja">{candidato.hashtag}</Cartaz>
          </h2>
          <p className="max-w-[52ch] text-[1.0625rem] leading-relaxed text-[#CFE0DA] sm:text-[1.15rem]">
            O Marcão é a ponte para levar a voz e a necessidade da nossa gente até onde as
            decisões acontecem. Campanha no Sul não se ganha com dinheiro, se ganha com gente
            falando com gente. Escolha por onde você quer entrar:
          </p>

          <ul className="flex flex-col gap-3">
            {[
              { Icone: IconeMegafone, t: 'Receber a agenda',
                d: 'Onde ele vai estar, o que rolou em cada cidade e material para compartilhar.' },
              { Icone: IconeGente, t: 'Ser voluntário na sua cidade',
                d: 'É o formulário aqui do lado. Leva dois minutos.' },
              { Icone: IconeCompartilhar, t: 'Compartilhar',
                d: 'Material pronto para story, com o número grande e legível no celular.' },
            ].map(({ Icone, t, d }) => (
              <li key={t} className="flex gap-4 rounded-[10px] border border-white/20 bg-white/[.07] px-5 py-4">
                <Icone className="mt-1 shrink-0 text-amarelo" tamanho={26} />
                <div>
                  <strong className="font-display text-[1.0625rem]">{t}</strong>
                  <p className="text-[1.0625rem] leading-relaxed text-[#CBDDD7]">{d}</p>
                </div>
              </li>
            ))}
          </ul>

          <Player video={videoFechamento} className="mt-2" />
        </div>

        <form onSubmit={enviar} noValidate className="flex flex-col gap-4">
          <label className="block">
            <span className="mb-1 block font-display text-[1rem] font-bold">Seu nome</span>
            <input name="nome" type="text" autoComplete="name" required className={`${campo} ${ruim('nome')}`} />
          </label>

          <label className="block">
            <span className="mb-1 block font-display text-[1rem] font-bold">WhatsApp</span>
            <input
              name="zap" type="tel" inputMode="tel" autoComplete="tel"
              placeholder="(28) 90000-0000" required className={`${campo} ${ruim('zap')}`}
            />
          </label>

          <label className="block">
            <span className="mb-1 block font-display text-[1rem] font-bold">Sua cidade</span>
            <select name="cidade" required className={`${campo} ${ruim('cidade')}`}>
              <option value="" className="text-tinta">Escolha</option>
              {cidades.map((c) => (
                <option key={c.slug} value={c.nome} className="text-tinta">{c.nome}</option>
              ))}
              <option value="Outra" className="text-tinta">Outra</option>
            </select>
          </label>

          <label className="block">
            <span className="mb-1 block font-display text-[1rem] font-bold">Como você quer ajudar?</span>
            <select name="ajuda" className={`${campo} border-white/45`}>
              <option value="" className="text-tinta">Escolha</option>
              {['Divulgar no meu bairro', 'Levar o Marcão para conversar com meu grupo',
                'Ajudar no dia da eleição', 'Só quero acompanhar'].map((o) => (
                <option key={o} className="text-tinta">{o}</option>
              ))}
            </select>
          </label>

          {/* honeypot: fora do fluxo de foco e invisível para leitor de tela */}
          <input
            type="text" name="site" tabIndex={-1} autoComplete="off" aria-hidden="true"
            className="absolute left-[-9999px]"
          />

          <label className="flex items-start gap-3 text-[1.0625rem] leading-relaxed text-[#CFE0DA]">
            <input
              type="checkbox" name="lgpd" required
              className="mt-1 h-7 w-7 shrink-0 accent-laranja"
            />
            <span>
              Autorizo o contato da campanha pelo WhatsApp com os dados acima. Posso pedir a
              exclusão quando quiser.{' '}
              <Link href="/privacidade" className="underline">Política de Privacidade</Link>.
            </span>
          </label>

          <p role="alert" aria-live="polite" className="min-h-[1.5rem] text-[1.0625rem] font-semibold text-[#FFB3AD]">
            {estado === 'erro' ? erro : ''}
          </p>

          <button
            type="submit"
            disabled={estado === 'enviando'}
            className="mv-btn mv-btn-laranja w-full"
            style={estado === 'enviando' ? { width: '100%' } : undefined}
          >
            {estado === 'enviando' ? 'Enviando…' : 'Enviar meu cadastro'}
          </button>

          {estado === 'ok' && (
            <p className="flex items-center gap-2 rounded-[10px] bg-amarelo p-4 font-bold text-[#003B44]">
              <IconeCerto tamanho={22} /> Cadastro enviado. A gente chama você no WhatsApp.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
