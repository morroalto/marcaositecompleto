import type { MetadataRoute } from 'next'
import { candidato, site } from '@/content/candidato'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${candidato.nomeUrna} ${candidato.numero}`,
    short_name: `Marcão ${candidato.numero}`,
    description: site.descricao,
    start_url: '/',
    display: 'standalone',
    background_color: '#003B44',
    theme_color: '#003B44',
    lang: 'pt-BR',
    icons: [
      { src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
    ],
  }
}
