import { NextResponse } from 'next/server'

/**
 * RECEBIMENTO DO CADASTRO
 *
 * Camadas de defesa, da mais barata para a mais cara:
 *
 *  1. honeypot: campo escondido preenchido significa robô. Devolve 200 e
 *     descarta em silêncio, para o robô não aprender que foi barrado.
 *  2. tempo de preenchimento: formulário enviado em menos de 3 segundos não
 *     foi digitado por gente.
 *  3. limite por IP: no `proxy.ts`, 5 tentativas por minuto.
 *  4. origem: o `proxy.ts` recusa POST de outro domínio.
 *  5. tamanho: campo gigante é ataque, não cadastro.
 *  6. consentimento: sem LGPD marcada, recusa.
 *
 * O que NUNCA acontece aqui: dado pessoal em log, em querystring ou em
 * mensagem de erro. O log registra o fato, não o conteúdo.
 */

const LIMITE = { nome: 120, zap: 24, cidade: 60, ajuda: 80 }

function limpo(v: unknown, max: number): string {
  return String(v ?? '')
    .slice(0, max)
    .split('')
    .filter((c) => { const n = c.charCodeAt(0); return n > 31 && n !== 127 })
    .join('')
    .trim()
}

export async function POST(req: Request) {
  let corpo: Record<string, unknown>
  try {
    corpo = await req.json()
  } catch {
    return NextResponse.json({ ok: false, erro: 'Requisição inválida.' }, { status: 400 })
  }

  // 1. honeypot
  if (corpo.site) return NextResponse.json({ ok: true })

  // 2. tempo de preenchimento
  const abertura = Number(corpo.aberto)
  if (Number.isFinite(abertura) && Date.now() - abertura < 3_000) {
    return NextResponse.json({ ok: true })          // robô, silêncio
  }

  // 6. consentimento
  if (!corpo.lgpd) {
    return NextResponse.json(
      { ok: false, erro: 'É preciso autorizar o contato.' },
      { status: 422 },
    )
  }

  // 5. tamanho e limpeza
  const nome = limpo(corpo.nome, LIMITE.nome)
  const zap = limpo(corpo.zap, LIMITE.zap).replace(/\D/g, '')
  const cidade = limpo(corpo.cidade, LIMITE.cidade)
  const ajuda = limpo(corpo.ajuda, LIMITE.ajuda)

  if (nome.split(/\s+/).filter(Boolean).length < 2 || zap.length < 10 || zap.length > 13 || !cidade) {
    return NextResponse.json({ ok: false, erro: 'Confira os dados e tente de novo.' }, { status: 422 })
  }

  // TODO(T1): plugar o destino real (planilha, CRM ou webhook) antes do go-live.
  // A chave vai em variável de ambiente do servidor, NUNCA em NEXT_PUBLIC_.
  const destino = process.env.APOIADOR_WEBHOOK
  if (destino) {
    try {
      await fetch(destino, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ nome, zap, cidade, ajuda, em: new Date().toISOString() }),
      })
    } catch {
      // o cadastro não pode se perder por falha do destino
      console.error('[apoiador] destino recusou a entrega')
      return NextResponse.json(
        { ok: false, erro: 'Não deu para enviar agora. Chame no WhatsApp que a gente resolve.' },
        { status: 502 },
      )
    }
  } else {
    console.info('[apoiador] cadastro recebido, destino ainda não configurado')
  }

  return NextResponse.json({ ok: true })
}

/** Só POST. Qualquer outro método devolve 405 em vez de vazar comportamento. */
export async function GET() {
  return NextResponse.json({ ok: false }, { status: 405, headers: { allow: 'POST' } })
}
