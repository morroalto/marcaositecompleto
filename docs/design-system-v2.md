# DESIGN SYSTEM & STYLE GUIDE — V2
## Marcão Vivácqua 2026 · "cartaz de rua"

### Eixo desta versão: **diferenciação estrutural + arquitetura de token que não quebra**

> 🧊 **Registro congelado em 12/08/2026.** Para implementar, use
> [design-system-v3.md](design-system-v3.md) — lá o elemento assinatura já reflete a base
> territorial confirmada (três cidades = três lóbulos).

> **Corrige a V1 nos 12 pontos que ela mesma registrou.** A V1 tokenizou a marca; a V2 decide a
> estrutura, mede o contraste, arruma as camadas de CSS e declara o que o projeto **não** vai usar.

---

## 0. AS 12 CORREÇÕES

| # | Defeito da V1 | Correção |
|---|---|---|
| 1 | Estrutura genérica (hero centralizado → cards iguais → CTA) | §2 — grade editorial assimétrica, cards de tamanhos diferentes com propósito, o triângulo como dispositivo de informação |
| 2 | `Inter` por inércia | §3 — troca justificada por escrito |
| 3 | `.reveal` global com o mesmo timing | §7 — orçamento de 3 comportamentos, timing por papel |
| 4 | `--radius` global | §5 — raio é token **de componente** |
| 5 | Contraste não medido | §4 — tabela **medida**; `--c-on-*` calculado |
| 6 | `h1` dimensionado por `vw` | §3.3 — título mede a **coluna** (`cqi`), teto por contagem de caracteres |
| 7 | `backdrop-filter` no header | §5.5 — header opaco com fio |
| 8 | Overline em toda seção | §3.4 — overline **uma vez**, no hero |
| 9 | Tokens sem arquitetura de camada | §6 — token fora de camada, base e components separados, prefixo antinome-de-utilitário |
| 10 | Dark por default sem perguntar | §8 — **claro é o padrão**; escuro vira opcional e justificado |
| 11 | Sem lista de proibições | §9 |
| 12 | Triângulo como enfeite | §2.3 — o triângulo **carrega dado** |

---

## 1. FUNDAÇÃO (inalterada — é a marca real)

🔒 Medido em 12/08/2026 por amostragem de pixel, com arquivo de origem anotado.

| Papel | Hex | Origem |
|---|---|---|
| Petróleo — plataforma / mar profundo | `#003C44` | `Ativo 26TDS.png` |
| Marinho — pesca / mar | `#103C70` | `Ativo 26TDS.png` |
| Mata — agricultura | `#468429` | `Ativo 26TDS.png` |
| Abacaxi — fruta | `#FF8103` | `Ativo 26TDS.png` |
| Coroa — amarelo | `#FFE000` | `Ativo 26TDS.png` |
| Azul de comunicação | `#004F9E` | `IMG-20260724-WA0124(1).jpg` |
| Azul claro (fitas) | `#277DB6` | `IMG-20260724-WA0124(1).jpg` |

**A paleta não muda entre direções de arte.** Cor é a marca; o que varia é estrutura.

---

## 2. ESTRUTURA — onde a diferenciação acontece de verdade

O que lê como genérico é o **esqueleto**, não a paleta. Trocar cor entrega a mesma página.

### 2.1 Grade editorial assimétrica
12 colunas usadas de verdade. Nada de pilha centrada.

| Seção | Grade | Por quê |
|---|---|---|
| Hero | `7 / 5` — texto à esquerda, foto sangrando à direita | o rosto entra na primeira dobra sem virar banner |
| Quem é | `5 / 7` — inverte o eixo | quebra a expectativa criada pelo hero |
| Bandeiras | `4 / 8` com título em calha lateral fixa | o pilar fica ancorado enquanto o conteúdo rola |
| Mapa da Escuta | `8 / 4` — mapa dominante + painel de leitura | o mapa é o argumento |
| Agenda | lista full-bleed com régua de datas à esquerda | leitura de horário, não de card |

Mobile: uma coluna, mas **a ordem muda por seção** — em "Quem é", a foto vem antes do texto; em
"Bandeiras", o título vem antes do problema.

### 2.2 Cards de tamanhos diferentes, com motivo
Proibido `repeat(auto-fill, minmax(280px, 1fr))` com todos iguais — é o *uniform component sizing*
que denuncia geração automática.

- **Bandeira principal** (a mais mencionada no território): ocupa 2 colunas e ganha foto.
- **Bandeiras secundárias**: 1 coluna, sem foto, só problema → compromisso.
- **Município com muito registro de escuta**: card alto. **Município com uma linha**: card baixo.
  O tamanho **é** o dado.

### 2.3 O triângulo carrega informação — não decora
O logo do Triângulo do Sul é composto de três triângulos de canto arredondado formando um maior,
cada um com um símbolo econômico: **abacaxi (agricultura)**, **peixe (pesca)**, **plataforma
(petróleo)**. Usos permitidos:

| Uso | Regra |
|---|---|
| **Marcador de município no mapa** | orientação do triângulo indica **estado**: apontando para cima = visitado; contorno vazado = ainda não |
| **Indicador de progresso da escuta** | os três lóbulos preenchem conforme os eixos de escuta cobertos |
| **Recorte de foto** | `clip-path` do triângulo em **uma** foto por página — a do hero. Mais que isso vira padronagem |
| **Classificação de bandeira** | o lóbulo correspondente ao setor econômico marca o card |

Proibido: triângulo como bullet de lista, como divisor decorativo, como fundo de textura repetida.
**Se o triângulo não estiver dizendo nada, ele não entra.**

### 2.4 Textura — a assinatura tátil
Uma camada de fibra **direcional** + granulação:
```css
.paper {
  background-image:
    repeating-linear-gradient(94deg, rgb(0 0 0 / .022) 0 1px, transparent 1px 3px),
    url("data:image/svg+xml,…feTurbulence baseFrequency='.9' …");
}
```
**Uma direção só.** Dois `repeating-linear-gradient` cruzados dão papel milimetrado, e uma das
faixas passa rente ao kicker parecendo um `border-top` fantasma.

---

## 3. TIPOGRAFIA

### 3.1 Escolha, com o porquê escrito
| Papel | Família | Justificativa |
|---|---|---|
| Display | **Bricolage Grotesque** (variável, `wdth` + `wght`) | grotesca com deformação óptica proposital; o eixo de largura permite o nome do candidato ocupar a linha inteira sem escalar mal |
| Corpo | **Instrument Sans** | x-height alta, aberturas largas, ótima em 17 px; **não é Inter** |
| Dados | **Martian Mono** | numeral tabular e desenho estranho o bastante para o overline não parecer SaaS |

> `Inter` está fora **por decisão escrita**: é o tell nº 1 de site gerado por IA. Se voltar, volta
> com justificativa na nota do projeto.

### 3.2 Papéis
Display: nome, número da urna, títulos de seção. Corpo: tudo que se lê. Dados: número, data, sigla,
overline único do hero.

### 3.3 Título mede a coluna, não o viewport
`clamp(x, Nvw, y)` pergunta o tamanho à janela, que não sabe quantas letras o título tem — foi assim
que um `h1` de 61 caracteres virou 728 px numa tela de 900 px.

```css
.section { container-type: inline-size; }
h1, h2 { font-size: clamp(2rem, 9cqi, 5.5rem); text-wrap: balance; }
/* e um teto por contagem: título > 40 caracteres cai um degrau */
h1[data-long="true"] { font-size: clamp(1.75rem, 6.5cqi, 3.5rem); }
```

### 3.4 Overline uma vez
O overline mono caixa-alta é o carimbo da casa — e repetido em seis seções vira ruído.
**Uma ocorrência, no hero.** As demais seções levam um **kicker de papel** (o que aquela seção
entrega), que **cala** quando repetiria o próprio título.

### 3.5 O número da urna
É o elemento que o eleitor precisa decorar. Tratamento de cartaz:
display em peso máximo e largura expandida, tabular, com o triângulo como contorno — **nunca** em
gradiente, nunca com sombra dura.

---

## 4. COR — medida, não estimada

### 4.1 Contraste calculado (WCAG 2.1, luminância relativa)

| Par | Razão | Veredito |
|---|---|---|
| `#003C44` sobre branco | **12,14:1** | ✅ texto |
| `#103C70` sobre branco | **11,05:1** | ✅ texto |
| `#004F9E` sobre branco | **8,04:1** | ✅ texto |
| `#468429` sobre branco | **4,57:1** | ⚠️ passa AA raspando; só em texto ≥ 17 px |
| `#277DB6` sobre branco | **4,47:1** | ❌ **reprova AA** — não usar como texto |
| `#FF8103` sobre branco | **2,50:1** | ❌ **reprova** — nunca como texto |
| Branco sobre `#FF8103` | **2,50:1** | ❌ — **era isso que a V1 fazia no botão primário** |
| `#0E2233` sobre `#FF8103` | **6,48:1** | ✅ este é o par correto do CTA |
| `#0E2233` sobre `#FFE000` | **12,29:1** | ✅ amarelo só como fundo com tinta escura |

### 4.2 Regra derivada
```css
/* a cor do texto do botão é CONSEQUÊNCIA do token, não suposição */
--c-on-accent:  #0E2233;   /* calculado contra #FF8103 → 6,48:1 */
--c-on-primary: #FFFFFF;   /* calculado contra #103C70 → 11,05:1 */
--c-on-deep:    #FFFFFF;   /* contra #003C44 → 12,14:1 */
```
`#FF8103` e `#FFE000` são **cores de superfície e de sinal**, nunca de tinta.
`#277DB6` é decorativo (fita, borda ≥ 3:1), nunca texto.

### 4.3 Cor de ação exclusiva
`#FF8103` **só** aparece em CTA e no estado ativo do mapa. Nenhum outro elemento usa laranja.
Cor exclusiva é o que ensina o olho onde clicar.

---

## 5. FORMA — raio é token de componente

| Componente | Raio | Motivo |
|---|---|---|
| Botão | `4px` | quase reto; a marca é geométrica, não macia |
| Card | `2px` | fio, não pílula |
| Campo | `4px` | igual ao botão, para parear na conversão |
| Moldura de foto | `0` + `clip-path` do triângulo | a forma vem da marca |
| Chip de município | `999px` | **único** lugar com pílula, porque é etiqueta |

Nunca aplicar o raio do botão a um contêiner — pílula em cartão já comeu as duas primeiras letras
de um título.

**Sombra:** uma só, tingida de marinho — `0 10px 30px rgb(16 60 112 / .10)`. Sem sombra difusa
espalhada.

### 5.5 Header
Opaco, 64 px, com fio de 1 px em `--c-border`. **Sem `backdrop-filter`** — custa 15–30% de FPS em
Android mediano, que é exatamente o aparelho do público. CTA de WhatsApp sempre visível; no mobile,
barra inferior fixa. Sem hambúrguer escondendo a conversão.

---

## 6. ARQUITETURA DE CSS (Tailwind 4)

Regra sem camada **vence qualquer camada**, inclusive `utilities`. Isso não é detalhe: já produziu
botão aparecendo no mobile apesar do `hidden`, texto da cor do fundo do próprio botão e índice
lateral cobrindo o conteúdo.

```css
/* 1. TOKENS — fora de camada, com TODOS os overrides junto */
:root { --mv-rail: 0rem; --c-bg: #FFFFFF; /* … */ }
@media (min-width: 1280px) { :root { --mv-rail: 5.5rem; } }   /* também fora de camada */

/* 2. ELEMENTO */
@layer base { a { color: inherit } p { margin: 0 } h1 { text-wrap: balance } }

/* 3. PRIMITIVO */
@layer components { .btn { … } .shell { … } .stack-md > * + * { … } }
```

**Colisão de nome:** antes de criar classe, conferir se o nome já é utilitário do Tailwind 4.
`col-7`, `overline`, `table`, `grid` **existem** — `col-7` já jogou a coluna do hero para
`left: 582px` numa tela de 402 px, e `overline` desenhou uma linha fina acima de cada eyebrow.
**Prefixo obrigatório: `mv-`** (`mv-col-7`, `mv-eyebrow`, `mv-rail`).

**Mapeamento no `@theme inline`:** usar nome de utilitário **diferente** do nome do token
(`--color-paper: var(--c-bg)`), senão vira auto-referência.

---

## 7. MOVIMENTO — orçamento fechado

Máximo **3 comportamentos na página inteira**, cada um com timing próprio:

| # | Comportamento | Onde | Timing |
|---|---|---|---|
| 1 | Entrada orquestrada do hero: nome → número → foto | uma vez | 600 ms total, `cubic-bezier(.16,1,.3,1)` |
| 2 | Estado de interação: CTA, campo, botão de município | onde comunica estado | 120–180 ms |
| 3 | Um reveal estrutural na virada de assunto | 4 pontos da página, no máximo | 320 ms |

Proibido: `.reveal` global, parallax, contador animado, tipografia cinética (briga com leitor de
tela e gera CLS), carrossel 3D, hover que "snapa".
`prefers-reduced-motion: reduce` zera 1 e 3, mantém 2.

---

## 8. CLARO É O PADRÃO

O padrão da casa é dark-first. **Aqui não.** O leitor está na rua, com sol na tela, num aparelho
barato, e a marca é construída sobre branco (o contorno do logo é branco). Escuro entra depois, como
opção, e só se sobrar orçamento de QA — cada tema dobra o trabalho de conferir contraste.

Decisão registrada: **tema claro único na Onda 1.**

---

## 9. LISTA DE PROIBIÇÕES 🚫

Declarada antes de gerar, porque sem proibição o default do treino vence.

**Não vai usar:** gradiente de qualquer tipo (nem em CTA, nem em overlay decorativo) · `backdrop-filter` ·
glassmorphism · blob · sombra difusa espalhada · card arredondado tipo pílula · grade de cards de
tamanho uniforme · ícone de biblioteca (só SVG próprio) · foto de banco · `Inter` · `.reveal` global ·
marcadores `01/02/03` sem sequência real · emoji em heading · faixa diagonal com estrelas · punho
cerrado · ilustração de "povo unido" · texto sobre foto sem camada sólida de legibilidade.

---

## 10. TESTE DE UNICIDADE

Tire o logo, o nome e as fotos. O que deve sobrar reconhecível:
a **grade assimétrica que inverte de eixo por seção**, o **triângulo como marcador de estado**, o
**número da urna em largura expandida**, a **fibra direcional do papel**, e a **cor de ação
exclusiva**. Se sobrar só "azul com laranja", falhou.

---

## 11. O QUE ESTA VERSÃO AINDA NÃO RESOLVEU

Para a V3 atacar:

1. **O sistema foi desenhado para impressionar, não para o eleitor de 60 anos.** Bricolage Grotesque
   com deformação óptica, Martian Mono e grade que inverte de eixo pedem esforço de leitura de quem
   tem pouca paciência e tela pequena.
2. **Três famílias variáveis** estouram o orçamento de 80 kb de fonte.
3. **Nenhuma matriz de estados** — cada componente tem hover, foco, ativo, desabilitado, carregando,
   erro e vazio, e nada disso está especificado.
4. **Estados de conteúdo ausente não foram desenhados** — o que a seção mostra quando o dado real
   não chegou?
5. **Alvo de toque e corpo mínimo não foram fixados.**
6. **Sem especificação do SVG do triângulo** (proporção, espessura, tamanho mínimo legível).
7. **Sem derivados**: OG para WhatsApp, card de story, favicon — o link vai circular fora do site.
8. **Sem orçamento por token** (peso de fonte, subset, quantos eixos variáveis carregar).
9. **`#468429` a 4,57:1 e `#277DB6` a 4,47:1** ficaram como aviso, sem tokens corrigidos.
10. **Ordem de leitura no mobile muda por seção** — isso é ótimo no papel e perigoso para leitor de
    tela; falta a regra de `order` vs. ordem do DOM.
