import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { candidato } from '@/content/candidato'

/**
 * CARD DO WHATSAPP
 *
 * O link circula em grupo e em status, não no navegador. Este é o primeiro
 * elemento de design que o eleitor vê, então carrega o essencial e nada mais:
 * nome, número e slogan, legíveis numa miniatura de 200 px.
 *
 * As fontes são embarcadas como instâncias ESTÁTICAS de Archivo. O renderizador
 * do `next/og` não resolve eixo de fonte variável: sem isso o peso 900 cai no
 * regular do sistema, e o lockup perde a força que é a razão de existir dele.
 *
 * Antes do go-live: abrir o link num WhatsApp de verdade. O validador do
 * Facebook sozinho não prova.
 */
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = `${candidato.nomeUrna}, número ${candidato.numero}, ${candidato.slogan}`

async function fonte(arquivo: string) {
  return readFile(join(process.cwd(), 'src', 'fonts', arquivo))
}

export default async function OG() {
  const [preta, negrito] = await Promise.all([
    fonte('archivo-900.ttf'),
    fonte('archivo-700.ttf'),
  ])

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%', height: '100%', display: 'flex', flexDirection: 'column',
          justifyContent: 'space-between', padding: '64px 76px',
          background: 'linear-gradient(118deg, #45872C 0%, #003B44 46%, #12406F 100%)',
          color: '#fff', fontFamily: 'Archivo',
        }}
      >
        <div style={{ display: 'flex', fontSize: 32, fontWeight: 700, letterSpacing: 3, color: '#FFD400' }}>
          {candidato.slogan.toUpperCase()}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 152, fontWeight: 900, lineHeight: 1, letterSpacing: -7 }}>
            MARCÃO
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 26, marginTop: 4 }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', fontSize: 64, fontWeight: 700, letterSpacing: -1 }}>
                VIVACQUA
              </div>
              <div style={{ display: 'flex', width: 296, height: 14, marginTop: 10 }}>
                <div style={{ flex: 1, background: '#45872C' }} />
                <div style={{ flex: 1, background: '#FF7A00' }} />
                <div style={{ flex: 1, background: '#FFD400' }} />
              </div>
            </div>
            <div style={{ display: 'flex', fontSize: 100, fontWeight: 900, letterSpacing: -3, paddingBottom: 14 }}>
              {candidato.numero}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', fontSize: 30, fontWeight: 700, color: 'rgba(255,255,255,.92)' }}>
          {candidato.cargo} pelo {candidato.uf} · {candidato.partido} · 028 não é só DDD
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Archivo', data: preta, weight: 900, style: 'normal' },
        { name: 'Archivo', data: negrito, weight: 700, style: 'normal' },
      ],
    },
  )
}
