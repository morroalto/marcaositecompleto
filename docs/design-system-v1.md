# DESIGN SYSTEM & STYLE GUIDE — V1
## Marcão Vivácqua 2026 · "o sistema óbvio"

### Eixo desta versão: **tokenizar o material real e aplicar a assinatura da casa**

> 🧊 **Registro congelado em 12/08/2026.** Para implementar, use
> [design-system-v3.md](design-system-v3.md) — lá o elemento assinatura já reflete a base
> territorial confirmada (três cidades = três lóbulos).

> **O que esta versão é:** a primeira passada — pegar as cores reais medidas nos arquivos do cliente
> e vesti-las com o padrão de `meu-estilo-de-sites.md` (neutro + acento, trio tipográfico, overline,
> section-pad fluido, reveal on-scroll, dark por classe).
>
> **O que esta versão ainda não é:** diferenciada. Ela produz um site **correto e indistinguível** —
> exatamente o diagnóstico de `diferenciacao-visual.md`. A V2 corrige isso.

---

## 1. FUNDAÇÃO — de onde vem cada cor

🔒 Medido por amostragem de pixel em 12/08/2026, não estimado.

**Fonte:** `ID VISUAL\ANTIGOS\TRIANGULO_DO_SUL\1500h\Ativo 26TDS.png` (1268×1500)

| Papel simbólico | Hex | Densidade na peça |
|---|---|---|
| Plataforma / mar profundo | `#003C44` | 22.934 px |
| Peixe / mar | `#103C70` | 21.498 px |
| Abacaxi / mata | `#468429` | 14.376 px |
| Abacaxi / fruta | `#FF8103` | 6.631 px |
| Coroa do abacaxi | `#FFE000` | 1.621 px |
| Contorno / negativo | `#FFFFFF` | 50.112 px |

**Fonte:** `ID VISUAL\ANTIGOS\CAPA DOS DESTAQUES\IMG-20260724-WA0124(1).jpg`
Azul de comunicação `#004F9E` · fitas `#277DB6`.

**Leitura:** a marca não é "azul de campanha". É um **tricolor territorial** — petróleo, mar e mata
— com laranja e amarelo como pontuação alta. Cada cor carrega um setor econômico da região.

---

## 2. TOKENS

```css
:root {
  /* --- Marca (medida, não inventada) --- */
  --brand-petroleo: #003C44;
  --brand-marinho:  #103C70;
  --brand-mata:     #468429;
  --brand-abacaxi:  #FF8103;
  --brand-coroa:    #FFE000;
  --brand-azul-com: #004F9E;
  --brand-azul-cla: #277DB6;

  /* --- Papéis de superfície --- */
  --c-bg:        #FFFFFF;
  --c-surface:   #F4F6F8;
  --c-border:    #D9DFE5;
  --c-ink:       #0E2233;
  --c-ink-muted: #5A6B7A;

  /* --- Papéis funcionais --- */
  --c-primary:   var(--brand-marinho);
  --c-accent:    var(--brand-abacaxi);   /* CTA */
  --c-success:   var(--brand-mata);
  --c-deep:      var(--brand-petroleo);

  /* --- Tipografia --- */
  --font-display: 'Outfit', system-ui, sans-serif;
  --font-body:    'Inter', system-ui, sans-serif;
  --font-mono:    'JetBrains Mono', ui-monospace, monospace;

  /* --- Ritmo --- */
  --container-max: 1280px;
  --container-pad: clamp(1.25rem, 5vw, 5rem);
  --section-pad:   clamp(4.5rem, 10vw, 8rem);

  /* --- Forma --- */
  --radius: 12px;
  --shadow-sm: 0 2px 8px rgba(16, 60, 112, 0.08);
  --shadow-md: 0 12px 32px rgba(16, 60, 112, 0.12);

  /* --- Movimento --- */
  --ease: cubic-bezier(0.4, 0, 0.2, 1);
  --dur:  0.4s;
}

.dark {
  --c-bg:      #071A22;
  --c-surface: #0D2630;
  --c-border:  #1B3B47;
  --c-ink:     #EAF1F5;
  --c-ink-muted: #93A7B3;
}
```

---

## 3. TIPOGRAFIA

| Papel | Família | Uso |
|---|---|---|
| Display | **Outfit** | títulos de seção, nome do candidato |
| Corpo | **Inter** | texto corrido, bio, propostas |
| Mono | **JetBrains Mono** | overline, número na urna, datas, dados |

**Escala fluida:**
```css
h1 { font-size: clamp(2.5rem, 7vw, 5.5rem); line-height: 1.02; letter-spacing: -0.02em; }
h2 { font-size: clamp(1.9rem, 4.5vw, 3.2rem); line-height: 1.1; }
h3 { font-size: clamp(1.25rem, 2.4vw, 1.6rem); }
p  { font-size: 1.0625rem; line-height: 1.65; max-width: 62ch; }
.overline {
  font-family: var(--font-mono); text-transform: uppercase;
  letter-spacing: 0.14em; font-size: 0.8125rem; color: var(--c-accent);
}
```

**Número na urna** — o elemento que o eleitor precisa decorar:
```css
.urna { font-family: var(--font-mono); font-weight: 700;
        font-size: clamp(3rem, 12vw, 8rem); letter-spacing: 0.02em; color: var(--c-accent); }
```

---

## 4. LAYOUT

- Container **1280 px** com `--container-pad` fluido.
- Grade de 12 colunas; conteúdo padrão centrado em 8 colunas.
- Seções com `padding-block: var(--section-pad)`.
- Hero ocupando `min(760px, calc(100svh - 72px))`.
- Grids de cards: `repeat(auto-fill, minmax(280px, 1fr))`.
- Breakpoints: 640 / 768 / 1024 / 1280.

---

## 5. COMPONENTES

### 5.1 Botão
```css
.btn { display: inline-flex; align-items: center; gap: .5rem;
       padding: .875rem 1.5rem; border-radius: var(--radius);
       font-weight: 600; transition: transform var(--dur) var(--ease); }
.btn-primary   { background: var(--c-accent); color: var(--c-bg); }
.btn-primary:hover { transform: translateY(-2px); }
.btn-secondary { background: transparent; color: var(--c-primary);
                 border: 1px solid var(--c-border); }
.btn-ghost     { background: transparent; color: var(--c-ink-muted); }
```

### 5.2 Card
Borda 1px + fundo `--c-surface` + hover que acende a borda e levanta 4 px.
Imagem com `aspect-ratio: 4/5`, `overflow: hidden`.

### 5.3 Seção
`id` em português → overline → título display → conteúdo → CTA.

### 5.4 Campo de formulário
Fundo destacado do bg, borda 1px, foco na cor de acento com ring de 3 px a 12% de opacidade.
Erro com `aria-live="polite"`.

### 5.5 Header
Fixo, 72 px, transparente no topo, ganhando fundo + `backdrop-filter: blur(16px)` ao rolar
(classe `.scrolled`).

### 5.6 Triângulo (elemento assinatura)
SVG do triângulo de três partes, usado como:
bullet de lista · moldura de foto (`clip-path`) · divisor de seção · marcador do mapa.

---

## 6. MOVIMENTO

- Reveal on-scroll via `IntersectionObserver`: `.reveal` → `.visible`,
  `opacity 0 → 1` + `translateY(24px → 0)`, delays escalonados de 80 ms.
- Hover de botão: `translateY(-2px)`.
- Seta de link desliza `translateX(6px)`.
- Barra de progresso de scroll de 2 px na cor de acento.
- Entrada do hero escalonada por delay.
- `prefers-reduced-motion: reduce` zera tudo.

---

## 7. ACESSIBILIDADE

Skip-link · `aria-label` em pt-BR · `:focus-visible` estilizado ·
`aria-live` em erro · `alt` descritivo · contraste AA.

---

## 8. MODO ESCURO

Override de variáveis por classe `.dark` no root, com toggle persistido — padrão da casa.

---

## 9. O QUE ESTA VERSÃO NÃO RESOLVEU

Registro honesto, para a V2 atacar:

1. **Nada aqui é estruturalmente diferente de qualquer landing de 2026.** Trocar a paleta não
   diferencia — a página continua sendo hero centralizado → cards iguais → CTA.
2. **`Inter` no corpo** entrou por inércia, sem justificativa escrita.
3. **`.reveal` global com o mesmo timing em tudo** é o tell de movimento de site gerado por IA.
4. **`--radius: 12px` global** trata raio como token de marca, quando raio é token de componente.
5. **`.btn-primary { color: var(--c-bg) }`** = branco sobre `#FF8103`. Contraste não foi medido.
6. **`clamp(2.5rem, 7vw, 5.5rem)` no `h1`** pergunta o tamanho ao viewport, que não sabe quantas
   letras o título tem.
7. **`backdrop-filter` no header** custa FPS justamente no Android mediano do público-alvo.
8. **Overline em toda seção** vira a mesma linha repetida seis vezes descendo a página.
9. **Tokens sem arquitetura de camada** — no Tailwind 4 isso quebra de formas difíceis de rastrear.
10. **Modo escuro por default** foi copiado do padrão da casa sem perguntar se serve a um eleitor de
    60 anos lendo no sol.
11. **Nenhuma lista de proibições declarada.**
12. **O triângulo virou enfeite** (bullet, divisor) em vez de carregar informação.
