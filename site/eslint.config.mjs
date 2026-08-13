import coreWebVitals from 'eslint-config-next/core-web-vitals'
import typescript from 'eslint-config-next/typescript'

/**
 * Flat config nativo do eslint-config-next 16. Sem FlatCompat e sem
 * `@eslint/eslintrc`: o pacote já exporta os arrays prontos.
 */
const config = [
  { ignores: ['.next/**', 'node_modules/**', 'next-env.d.ts'] },
  ...coreWebVitals,
  ...typescript,
]

export default config
