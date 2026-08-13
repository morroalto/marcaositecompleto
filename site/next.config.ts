import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // O acervo é local e já otimizado no build. AVIF primeiro, WebP como queda.
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [360, 414, 640, 768, 1024, 1280, 1536],
  },
  poweredByHeader: false,
}

export default nextConfig
