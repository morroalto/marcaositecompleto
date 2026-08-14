import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import { candidato, site } from '@/content/candidato'
import { Carregando } from '@/components/carregando'
import './globals.css'

/**
 * Duas famílias, self-hosted, com `display: swap`.
 * Archivo faz papel duplo: display e dado tabular. Montserrat é a grotesca
 * geométrica do lockup e do corpo, como nas peças do manual.
 */
const archivo = localFont({
  src: '../fonts/archivo.woff2',
  variable: '--fonte-display',
  weight: '100 900',
  display: 'swap',
  preload: true,
})
const montserrat = localFont({
  src: '../fonts/montserrat.woff2',
  variable: '--fonte-corpo',
  weight: '400 900',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.titulo, template: `%s · ${candidato.nomeUrna} ${candidato.numero}` },
  description: site.descricao,
  applicationName: `${candidato.nomeUrna} ${candidato.numero}`,
  authors: [{ name: candidato.campanha.razaoSocial }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: site.url,
    siteName: `${candidato.nomeUrna} ${candidato.numero}`,
    title: site.titulo,
    description: site.descricao,
  },
  twitter: { card: 'summary_large_image', title: site.titulo, description: site.descricao },
  icons: { icon: '/favicon.svg', apple: '/favicon.svg' },
  robots: { index: true, follow: true },
  /**
   * Verificação de domínio do Meta Business (marcaovivacqua.com.br, ID
   * 3244129105797968). Sai no `<head>` renderizado no servidor, que é o que a
   * Meta exige: tag injetada por JavaScript não é encontrada pelo rastreador.
   */
  other: { 'facebook-domain-verification': 'md2b95bollm2esa8lv1aw7f4t3zzvy' },
}

export const viewport: Viewport = {
  themeColor: '#003B44',
  width: 'device-width',
  initialScale: 1,
  // zoom liberado: travar escala quebra quem precisa aumentar a letra
  maximumScale: 5,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${archivo.variable} ${montserrat.variable}`}>
      <body>
        <a
          href="#conteudo"
          className="mv-btn mv-btn-amarelo absolute left-2 top-2 z-[300] -translate-y-[200%] focus:translate-y-0"
        >
          Pular para o conteúdo
        </a>
        <Carregando />
        {children}
      </body>
    </html>
  )
}
