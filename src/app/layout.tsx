import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import { candidato, site } from '@/content/candidato'
import { Carregando } from '@/components/carregando'
import './globals.css'

/**
 * AS DUAS FAMÍLIAS DA CAMPANHA, self-hosted, com `display: swap`.
 *
 * Trocadas em 14/08/2026 para as corretas: ANTON no display e POPPINS no
 * corpo. Antes eram Archivo e Montserrat.
 *
 * Anton tem UM peso só, o 400, e é desenhada pesada e condensada de fábrica.
 * Por isso ela é declarada com `weight: '100 900'`: assim o navegador aceita
 * qualquer peso pedido pelo CSS (a página inteira pede 800 e 900 nos títulos)
 * e usa este arquivo, em vez de engordar as letras sozinho. Negrito sintético
 * em fonte já pesada borra o contorno, e o estilo cartaz da marca depende do
 * contorno limpo.
 *
 * Poppins vem em quatro pesos reais, os que a página usa: 400 no corpo, 600 e
 * 700 nos destaques, 800 nos rótulos.
 */
const anton = localFont({
  src: '../fonts/anton.woff2',
  variable: '--fonte-display',
  weight: '100 900',
  display: 'swap',
  preload: true,
})
const poppins = localFont({
  src: [
    { path: '../fonts/poppins-400.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/poppins-600.woff2', weight: '600', style: 'normal' },
    { path: '../fonts/poppins-700.woff2', weight: '700', style: 'normal' },
    { path: '../fonts/poppins-800.woff2', weight: '800', style: 'normal' },
  ],
  variable: '--fonte-corpo',
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
    <html lang="pt-BR" className={`${anton.variable} ${poppins.variable}`}>
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
