import type { MetadataRoute } from 'next'
import { site } from '@/content/candidato'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: 'weekly', priority: 1 },
    /* /fotos e a pagina do gerador de moldura. Prioridade alta porque e o
       link que circula sozinho no WhatsApp, sem passar pela home. */
    { url: `${site.url}/fotos`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${site.url}/privacidade`, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
