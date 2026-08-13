/** Junta classes. Caseiro de propósito: sem clsx, sem tailwind-merge. */
export function cn(...partes: Array<string | false | null | undefined>): string {
  return partes.filter(Boolean).join(' ')
}

/** Dias que faltam para a eleição, contando a partir de agora. */
export function diasAte(iso: string, agora = new Date()): number {
  return Math.max(0, Math.ceil((new Date(iso).getTime() - agora.getTime()) / 86_400_000))
}

/** ISO para dd/mm/aaaa, sem depender de locale do navegador. */
export function dataBR(iso: string): string {
  const [a, m, d] = iso.split('-')
  return `${d}/${m}/${a}`
}

/**
 * Se o link real ainda não existe, devolve os atributos de um botão
 * desabilitado e honesto, em vez de um `href="#"` que mente para o usuário.
 */
export function linkOuPendente(url: string | null) {
  return url
    ? ({ href: url, rel: 'noopener noreferrer', target: '_blank' as const, 'aria-disabled': undefined })
    : ({ href: undefined, role: 'link' as const, 'aria-disabled': true as const })
}
