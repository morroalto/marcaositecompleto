'use client'

/**
 * Último anteparo. Se a raiz quebrar, o eleitor ainda vê o número e um caminho
 * de volta, em vez da tela branca do Next.
 *
 * Estilo embutido de propósito: neste ponto o CSS da aplicação pode não ter
 * carregado, então a página não pode depender dele.
 */
export default function GlobalError({ reset }: { error: Error; reset: () => void }) {
  return (
    <html lang="pt-BR">
      <body style={{
        margin: 0, minHeight: '100dvh', display: 'grid', placeItems: 'center',
        background: '#003B44', color: '#fff', padding: '2rem',
        font: '400 1.0625rem/1.6 system-ui, sans-serif',
      }}>
        <div style={{ maxWidth: '46ch' }}>
          <p style={{ font: '900 2.6rem/1 system-ui', letterSpacing: '-.03em', margin: 0 }}>
            MARCÃO
          </p>
          <p style={{ font: '700 1.6rem/1 system-ui', margin: '.2rem 0 0' }}>
            VIVACQUA <span style={{ color: '#FFD400' }}>36.028</span>
          </p>
          <div style={{ display: 'flex', height: 8, width: 200, margin: '.6rem 0 1.6rem' }}>
            <i style={{ flex: 1, background: '#45872C' }} />
            <i style={{ flex: 1, background: '#FF7A00' }} />
            <i style={{ flex: 1, background: '#FFD400' }} />
          </div>
          <h1 style={{ font: '800 1.6rem/1.15 system-ui', margin: '0 0 .75rem' }}>
            Deu problema aqui do nosso lado.
          </h1>
          <p style={{ margin: '0 0 1.5rem', color: '#CBDDD7' }}>
            Não foi você. Tente carregar de novo, e se continuar assim fale com a gente em
            marcaovivacqua@gmail.com.
          </p>
          <button
            onClick={reset}
            style={{
              minHeight: 52, padding: '.85rem 1.5rem', border: 0, borderRadius: 6,
              background: '#FFD400', color: '#003B44', cursor: 'pointer',
              font: '800 1.0625rem system-ui', boxShadow: '0 4px 0 #C9A800',
            }}
          >
            Tentar de novo
          </button>
        </div>
      </body>
    </html>
  )
}
