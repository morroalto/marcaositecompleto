import { NextResponse, type NextRequest } from 'next/server'

/**
 * PROXY (na 16 o `middleware` virou `proxy`)
 *
 * Faz três coisas:
 *
 *  1. Cabeçalhos de segurança em toda resposta.
 *  2. Limite de tentativas na rota de cadastro, por IP.
 *  3. Confere a origem de quem posta no formulário.
 *
 * O que ele NÃO faz, e é importante ficar escrito: impedir que alguém baixe o
 * HTML com `curl`. Isso é impossível num site público. O navegador do eleitor
 * faz exatamente a mesma requisição, então bloquear uma bloqueia a outra.
 * Filtro por User-Agent se contorna com uma flag. O que existe de real contra
 * raspagem é encarecer (limite por IP, desafio de bot na borda), nunca proibir.
 *
 * A defesa que importa é outra: nada de segredo no cliente. Chave, token e
 * destino do formulário vivem no servidor, e o HTML público não carrega nada
 * que não possa ser visto.
 */

const JANELA_MS = 60_000
const TETO = 5
const tentativas = new Map<string, { n: number; ate: number }>()

function limitado(ip: string): boolean {
  const agora = Date.now()
  const reg = tentativas.get(ip)
  if (!reg || agora > reg.ate) {
    tentativas.set(ip, { n: 1, ate: agora + JANELA_MS })
    return false
  }
  reg.n += 1
  if (tentativas.size > 5_000) {
    for (const [k, v] of tentativas) if (agora > v.ate) tentativas.delete(k)
  }
  return reg.n > TETO
}

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (pathname.startsWith('/api/apoiador') && req.method === 'POST') {
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
      req.headers.get('x-real-ip') ??
      'desconhecido'

    if (limitado(ip)) {
      return NextResponse.json(
        { ok: false, erro: 'Muitas tentativas. Espere um minuto e tente de novo.' },
        { status: 429, headers: { 'retry-after': '60' } },
      )
    }

    // cadastro só é aceito se vier da própria página
    const origem = req.headers.get('origin')
    const host = req.headers.get('host')
    if (origem && host && new URL(origem).host !== host) {
      return NextResponse.json({ ok: false, erro: 'origem inválida' }, { status: 403 })
    }
  }

  const res = NextResponse.next()

  res.headers.set('X-Content-Type-Options', 'nosniff')
  res.headers.set('X-Frame-Options', 'SAMEORIGIN')
  res.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  res.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), interest-cohort=(), payment=()',
  )
  res.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload')
  res.headers.set('Cross-Origin-Opener-Policy', 'same-origin')
  res.headers.set(
    'Content-Security-Policy',
    [
      "default-src 'self'",
      /* o Next injeta script inline no App Router; sem 'unsafe-inline' a página
         não hidrata.

         'unsafe-eval' SÓ EM DESENVOLVIMENTO. O React em modo dev usa `eval`
         para remontar pilha de erro e para as ferramentas de depuração, e com
         a CSP barrando isso o console enche de aviso e a mensagem de erro
         chega pela metade justamente na hora em que ela é mais útil. Em
         produção a permissão não existe: `NODE_ENV` é definido pelo `next
         build`, não por variável de ambiente que alguém possa virar no
         servidor. */
      `script-src 'self' 'unsafe-inline'${process.env.NODE_ENV === 'production' ? '' : " 'unsafe-eval'"}`,
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "media-src 'self' blob:",
      "font-src 'self'",
      "connect-src 'self'",
      "form-action 'self'",
      "frame-ancestors 'self'",
      // o player é fachada: o iframe só entra depois do toque
      "frame-src 'self' https://www.youtube-nocookie.com",
      "base-uri 'self'",
      "object-src 'none'",
      'upgrade-insecure-requests',
    ].join('; '),
  )

  return res
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.svg|agir36.svg).*)'],
}
