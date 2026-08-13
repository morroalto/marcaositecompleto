'use client'

import { useId, useState } from 'react'
import { MAPA_LARGURA, MAPA_ALTURA, fundoES, municipiosMapa } from '@/content/mapa-es'

/**
 * MAPA DO ESPÍRITO SANTO
 *
 * Geometria oficial do IBGE, gerada por script. Nada desenhado à mão: fronteira
 * errada num site de campanha é desinformação, e o eleitor da região enxerga
 * de primeira.
 *
 * O triângulo é traçado entre os CENTROS REAIS de Marataízes, Itapemirim e
 * Presidente Kennedy. Ou seja, o Triângulo do Sul deixa de ser metáfora e
 * passa a ser uma figura que existe no mapa.
 *
 * Acessibilidade: o SVG inteiro é decorativo (`aria-hidden`). Quem controla é
 * a lista de botões ao lado, com alvo de 48 px, teclado nativo e o mesmo
 * conteúdo. Ninguém depende de acertar um polígono com o dedo.
 */
export function MapaES() {
  const [ativo, setAtivo] = useState<string | null>(null)
  const id = useId()

  const tri = municipiosMapa.filter((m) => m.grupo === 'triangulo')
  const pontos = tri.map((m) => `${m.cx},${m.cy}`).join(' ')

  const cor = (grupo: string, sel: boolean) =>
    sel ? '#FFD400' : grupo === 'triangulo' ? '#45872C' : '#12406F'

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
      <div className="mx-auto w-full max-w-[22rem] lg:max-w-none">
        <svg
          viewBox={`0 0 ${MAPA_LARGURA} ${MAPA_ALTURA}`}
          className="h-auto w-full"
          aria-hidden="true"
          focusable="false"
        >
          <title id={id}>Mapa do Espírito Santo com o Triângulo do Sul destacado</title>

          {/* os 69 municípios que não entram no recorte do 028 */}
          <path d={fundoES} fill="#D7E3DF" stroke="#FFFFFF" strokeWidth="1.4" />

          {/* os nove do DDD 028 */}
          {municipiosMapa.map((m) => (
            <path
              key={m.cod}
              d={m.d}
              fill={cor(m.grupo, ativo === m.cod)}
              stroke="#FFFFFF"
              strokeWidth="1.8"
              style={{ transition: 'fill .18s ease' }}
              onMouseEnter={() => setAtivo(m.cod)}
              onMouseLeave={() => setAtivo(null)}
            />
          ))}

          {/* o Triângulo do Sul, ligando os centros reais das três cidades */}
          <polygon
            points={pontos}
            fill="none"
            stroke="#FF7A00"
            strokeWidth="7"
            strokeLinejoin="round"
            strokeDasharray="18 12"
          />
          {tri.map((m) => (
            <circle key={m.cod} cx={m.cx} cy={m.cy} r="13" fill="#FF7A00" stroke="#fff" strokeWidth="4" />
          ))}
        </svg>
      </div>

      <div className="flex flex-col gap-4">
        <p className="mv-kicker text-[#2F5C1B]">As nove cidades do 028</p>
        <ul className="flex flex-wrap gap-2">
          {municipiosMapa.map((m) => (
            <li key={m.cod}>
              <button
                type="button"
                onMouseEnter={() => setAtivo(m.cod)}
                onMouseLeave={() => setAtivo(null)}
                onFocus={() => setAtivo(m.cod)}
                onBlur={() => setAtivo(null)}
                onClick={() => setAtivo((v) => (v === m.cod ? null : m.cod))}
                aria-pressed={ativo === m.cod}
                className={[
                  'mv-chip min-h-[48px] cursor-pointer transition-colors',
                  m.grupo === 'triangulo'
                    ? 'border-verde bg-verde text-white'
                    : 'border-marinho text-marinho',
                  ativo === m.cod ? 'border-laranja bg-amarelo text-[#08222A]' : '',
                ].join(' ')}
              >
                {m.nome}
              </button>
            </li>
          ))}
        </ul>

        {/* Cada item envolve o texto num <span> de propósito: o <li> é flex, e
            sem o wrapper cada nó de texto e cada <strong> viram itens de flex
            separados, que no celular quebram em colunas. */}
        <ul className="mt-2 flex flex-col gap-3 text-[1.0625rem] leading-relaxed">
          {[
            { cor: 'bg-verde', texto: <>As três do <strong>Triângulo do Sul</strong>, onde a candidatura nasceu.</> },
            { cor: 'bg-marinho', texto: <>As outras seis que dividem o mesmo DDD.</> },
            { cor: 'border-[3px] border-dashed border-laranja', texto: <>O triângulo ligando os centros reais das três cidades.</> },
          ].map((l, i) => (
            <li key={i} className="flex items-start gap-3 text-left">
              <span className={`mt-[.45em] h-4 w-8 shrink-0 rounded-sm ${l.cor}`} aria-hidden="true" />
              <span>{l.texto}</span>
            </li>
          ))}
        </ul>

        <p className="text-[1rem] leading-relaxed text-fraca">
          Fronteiras da malha municipal oficial do IBGE. O Triângulo do Sul não é uma figura
          de linguagem: ele fecha no mapa.
        </p>
      </div>
    </div>
  )
}
