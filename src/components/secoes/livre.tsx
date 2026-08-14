import { livre } from '@/content/livre'
import { MOSTRAR_PENDENCIAS } from '@/content/flags'

/**
 * SEÇÃO LIVRE
 *
 * O espaço separado que foi pedido para entrar conteúdo depois. Ele já está
 * posicionado, com o desenho das outras seções pronto: quando o texto chegar,
 * é só preencher `content/livre.ts`, sem tocar em componente.
 *
 * Vazia, ela some do site em produção e mostra, na revisão, uma caixa
 * pontilhada dizendo que o espaço está guardado. Seção vazia visível para o
 * eleitor seria um buraco no meio da página.
 */
export function Livre() {
  const vazia = livre.titulo.trim() === ''

  if (vazia) {
    if (!MOSTRAR_PENDENCIAS) return null
    return (
      <section id="livre" className="mv-secao">
        <div className="mv-shell">
          <p className="mv-todo">
            <b>Espaço reservado</b>
            Esta é a seção separada para o conteúdo que ainda vai ser definido. Ela já está no
            lugar certo da página e com o desenho pronto. Para publicar, preencha{' '}
            <code>titulo</code> e <code>paragrafos</code> em <code>content/livre.ts</code>.
            Se preencher também <code>blocos</code>, o conteúdo vira grade de cards numerados.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="livre" className="mv-secao">
      <div className="mv-shell flex flex-col gap-9">
        <div className="flex max-w-[62ch] flex-col gap-4 text-center sm:text-left">
          {livre.kicker && <p className="mv-kicker text-[#2F5C1B]">{livre.kicker}</p>}
          <h2 className="text-[clamp(1.45rem,4.6vw,2.25rem)] font-extrabold tracking-tight">
            {livre.titulo}
          </h2>
          {livre.paragrafos.map((p) => (
            <p key={p} className="text-[1.0625rem] leading-relaxed text-fraca sm:text-[1.15rem]">
              {p}
            </p>
          ))}
        </div>

        {livre.blocos.length > 0 && (
          <ul className="grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {livre.blocos.map((b, i) => (
              <li
                key={b.titulo}
                className="mv-card flex h-full flex-col gap-2"
                style={{ '--fio': 'var(--marinho)' } as React.CSSProperties}
              >
                <p className="flex items-baseline gap-3">
                  <span className="mv-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="h-px grow bg-linha" aria-hidden="true" />
                </p>
                <h3 className="text-[1.25rem] font-extrabold">{b.titulo}</h3>
                <p className="text-[1.0625rem] leading-relaxed text-fraca">{b.texto}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
