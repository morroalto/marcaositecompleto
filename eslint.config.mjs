import coreWebVitals from 'eslint-config-next/core-web-vitals'
import typescript from 'eslint-config-next/typescript'

/**
 * Flat config nativo do eslint-config-next 16. Sem FlatCompat e sem
 * `@eslint/eslintrc`: o pacote já exporta os arrays prontos.
 */
const config = [
  // `prototipo/` e `docs/` nao sao do app: sao o prototipo vanilla anterior ao
  // Next e a documentacao. Passaram a ser varridos quando o app veio para a raiz.
  { ignores: ['.next/**', 'node_modules/**', 'next-env.d.ts', 'prototipo/**', 'docs/**'] },
  ...coreWebVitals,
  ...typescript,
]

export default config
