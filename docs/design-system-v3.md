# DESIGN SYSTEM & STYLE GUIDE — V3
## Marcão Vivácqua 2026 · versão de produção

### Eixo desta versão: **calibrar para o eleitor real e fechar o que faltava para construir**
### ✅ Esta é a versão para implementar. V1 e V2 ficam como registro do raciocínio.

> A V1 tokenizou a marca. A V2 diferenciou a estrutura. A **V3 pergunta quem vai ler** — eleitor de
> 30 a 65 anos, Android de entrada, tela de 360 px, 4G instável, muitas vezes no sol — e corta tudo
> que serve ao portfólio e atrapalha essa pessoa.

---

## 0. AS 10 CORREÇÕES SOBRE A V2

| # | Defeito da V2 | Correção |
|---|---|---|
| 1 | Sistema desenhado para impressionar, não para quem lê | §2 — legibilidade vira restrição de projeto, não checklist final |
| 2 | Três famílias variáveis estouram os 80 kb de fonte | §3 — **duas famílias**, uma fazendo papel duplo |
| 3 | Sem matriz de estados | §6 — todo componente com 8 estados especificados |
| 4 | Sem estado de conteúdo ausente | §7 — o que cada seção faz quando o dado real não chegou |
| 5 | Alvo de toque e corpo mínimo não fixados | §2 — 48 px e 17 px como piso |
| 6 | Triângulo sem especificação | §5 — geometria, espessura, tamanho mínimo, estados, `aria` |
| 7 | Sem derivados (OG, story, favicon) | §9 — o link circula no WhatsApp, não no navegador |
| 8 | Sem orçamento por token | §10 |
| 9 | `#468429` e `#277DB6` reprovando, sem token corrigido | §4.2 — tintas derivadas, com razão calculada |
| 10 | Ordem de leitura mudando por seção | §8 — **ordem do DOM = ordem de leitura**, sempre |

---

## 1. FUNDAÇÃO — a marca (inalterada)

🔒 Medido por amostragem de pixel em 12/08/2026. Arquivo de origem anotado; nada estimado.

| Papel simbólico | Hex | Origem |
|---|---|---|
| Petróleo — plataforma / mar profundo | `#003C44` | `ID VISUAL\ANTIGOS\TRIANGULO_DO_SUL\1500h\Ativo 26TDS.png` |
| Marinho — pesca / mar | `#103C70` | idem |
| Mata — agricultura | `#468429` | idem |
| Abacaxi — fruta | `#FF8103` | idem |
| Coroa — amarelo | `#FFE000` | idem |
| Azul de comunicação | `#004F9E` | `ID VISUAL\ANTIGOS\CAPA DOS DESTAQUES\IMG-20260724-WA0124(1).jpg` |
| Azul claro — fitas | `#277DB6` | idem |

> [!warning] Pendência que não é do design
> O manual `idmarcão.pdf` ainda não teve texto extraído (falta renderizador de PDF nesta máquina).
> **Se ele travar hex ou tipografia diferentes do medido aqui, o manual ganha.** Estes valores são
> "medidos na peça", não "lidos no manual" — e a diferença está registrada de propósito.

---

## 2. RESTRIÇÕES DE LEITURA — vêm antes da estética

Não são "acessibilidade no fim". São o gabarito do sistema.

| Restrição | Valor | Consequência de projeto |
|---|---|---|
| Corpo mínimo | **17 px** (18 px em bio e bandeiras) | não cabe texto em 3 colunas no desktop; a medida manda |
| Medida de linha | **60–68 ch** | container de texto tem `max-width` em `ch`, não em px |
| Alvo de toque | **≥ 48×48 px**, folga de 8 px | botão de município no mapa não pode ser o ícone; é uma área |
| Contraste texto | **≥ 4,5:1** medido | §4.2 |
| Contraste ícone/borda | **≥ 3:1** | fio de card em `#D9DFE5` só serve como decoração, não como sinal |
| Estado nunca só por cor | forma ou rótulo | visitado x não visitado tem forma **e** texto |
| Zoom | 200% sem rolagem horizontal | grade em `minmax(0, …)`, nunca largura fixa |
| Toque com uma mão | CTA principal no terço inferior no mobile | barra fixa de WhatsApp |

---

## 3. TIPOGRAFIA — duas famílias, papel duplo

### 3.1 Escolha, com o porquê escrito

| Papel | Família | Justificativa |
|---|---|---|
| **Display + dados** | **Archivo** (variável, `wght` 100–900 + `wdth` 62–125) | grotesca com eixo de largura: o nome e o **número da urna** ocupam a linha inteira sem escala distorcida, e o mesmo arquivo entrega numeral tabular para datas e contagens. Uma família fazendo dois papéis. |
| **Texto** | **Public Sans** (variável, `wght`) | desenhada para legibilidade de serviço público: x-height alta, aberturas abertas, formas simples que sobrevivem a tela de baixa densidade. Aguenta 17 px em Android barato. |

**Fora, por decisão escrita:** `Inter` (tell nº 1 de site gerado por IA) · **Bricolage Grotesque**
(a deformação óptica que a V2 queria cobra esforço de leitura do público errado) · **Martian Mono**
(terceiro arquivo sem função que o Archivo tabular não cubra).

Carregamento: `next/font/local`, `woff2` variável, subset **latin + latin-ext**, `font-display: swap`,
`preload` só no peso do hero. Dois arquivos, dois eixos. Ver orçamento em §10.

### 3.2 Escala — título mede a coluna, não a janela

`clamp(x, Nvw, y)` pergunta o tamanho ao viewport, que não sabe quantas letras o título tem.

```css
.mv-section { container-type: inline-size; }

/* teto vem da coluna; degrau extra vem da contagem de caracteres */
.mv-h1        { font: 800 clamp(2.25rem, 9cqi, 5rem)/1.02 Archivo; letter-spacing: -.02em; }
.mv-h1[data-len="long"]  { font-size: clamp(1.9rem, 6.5cqi, 3.4rem); }   /* > 40 caracteres */
.mv-h2        { font: 700 clamp(1.75rem, 6cqi, 2.75rem)/1.12 Archivo; }
.mv-h3        { font: 650 clamp(1.15rem, 3cqi, 1.4rem)/1.25 Archivo; }
.mv-body      { font: 400 1.0625rem/1.6 'Public Sans'; max-width: 64ch; }
.mv-body-lg   { font: 400 1.125rem/1.6 'Public Sans'; max-width: 62ch; }
.mv-kicker    { font: 600 .875rem/1.2 Archivo; letter-spacing: .1em; text-transform: uppercase; }
.mv-data      { font: 600 1rem Archivo; font-variant-numeric: tabular-nums; }
```
Todo título com `text-wrap: balance`. Todo parágrafo com `text-wrap: pretty`.

### 3.3 Overline — uma vez

Uma única ocorrência, no hero (`AGIR · DEPUTADO ESTADUAL · ESPÍRITO SANTO`). As seções levam
**kicker de papel** — o que aquela seção entrega — e o kicker **cala** quando repetiria o próprio
título. Seis overlines iguais descendo a página é carimbo virando ruído.

### 3.4 O número da urna — **36028**

É o que o eleitor precisa decorar, e é o único conteúdo da página com essa função.

- Grafia: **cinco dígitos, sem ponto** — `36028`. É assim que aparece na urna, e é assim que a
  pessoa vai digitar. `36.028` no site ensina a coisa errada.
- **Cor: `--c-signal` (coroa, `#FFE000`), não `--c-action` (abacaxi).** Duas razões, as duas medidas
  no protótipo: o laranja sobre o marinho dá **4,42:1** (reprova AA normal, passa só como texto
  grande), enquanto o amarelo dá **8,37:1**; e o número **não é uma ação** — pintá-lo de laranja
  roubava a exclusividade do CTA (§4.3). No header, o número vai em **chip amarelo com tinta
  escura** (12,29:1), porque laranja sobre branco daria 2,50:1.
- Archivo `wght 900` + `wdth ~110`, `font-variant-numeric: tabular-nums` (os dígitos precisam ter a
  mesma largura para o bloco não dançar), alinhado ao nome, `font-size` derivado da coluna.
- Os dois primeiros dígitos são o partido (Agir = 36). **Não separar visualmente** `36` de `028` —
  o eleitor decora os cinco como um bloco só.
- **Sem gradiente, sem sombra dura, sem contorno duplo.**
- Repete **uma segunda vez, e só uma**, na barra fixa do mobile.
- `aria-label="Número três, seis, zero, dois, oito"` — leitor de tela lendo "trinta e seis mil e
  vinte e oito" não ajuda quem vai digitar dígito a dígito.

---

## 4. COR

### 4.1 Papéis

```css
/* TOKENS — fora de camada, com todos os overrides junto (ver §11) */
:root {
  /* marca, medida */
  --mv-petroleo: #003C44;  --mv-marinho: #103C70;  --mv-mata: #468429;
  --mv-abacaxi:  #FF8103;  --mv-coroa:   #FFE000;
  --mv-azul-com: #004F9E;  --mv-azul-fita: #277DB6;

  /* superfícies */
  --c-bg: #FFFFFF;  --c-surface: #F3F6F8;  --c-border: #D3DBE2;
  --c-ink: #0E2233; --c-ink-muted: #4A5C6B;

  /* funcionais */
  --c-primary: var(--mv-marinho);      /* institucional */
  --c-deep:    var(--mv-petroleo);     /* fundos densos */
  --c-action:  var(--mv-abacaxi);      /* EXCLUSIVO de CTA e estado ativo */
  --c-signal:  var(--mv-coroa);        /* destaque de dado, só como fundo */

  /* tintas derivadas — versões legíveis das cores que reprovaram */
  --c-mata-ink: #2F5C1B;   /* 7,87:1 sobre branco */
  --c-fita-ink: #1B5E8C;   /* 6,94:1 sobre branco */

  /* pares calculados — a cor do texto é CONSEQUÊNCIA do token */
  --c-on-action:  #0E2233;  /* 6,48:1 sobre #FF8103 */
  --c-on-signal:  #0E2233;  /* 12,29:1 sobre #FFE000 */
  --c-on-primary: #FFFFFF;  /* 11,05:1 sobre #103C70 */
  --c-on-deep:    #FFFFFF;  /* 12,14:1 sobre #003C44 */
}
```

### 4.2 Contraste — calculado (WCAG 2.1, luminância relativa)

| Par | Razão | Uso permitido |
|---|---|---|
| `#003C44` / branco | **12,14:1** | texto, qualquer tamanho |
| `#103C70` / branco | **11,05:1** | texto, qualquer tamanho |
| `#004F9E` / branco | **8,04:1** | texto, qualquer tamanho |
| `#2F5C1B` / branco *(derivado)* | **7,87:1** | texto — **substitui `#468429` em tinta** |
| `#1B5E8C` / branco *(derivado)* | **6,94:1** | texto — **substitui `#277DB6` em tinta** |
| `#0E2233` / `#FF8103` | **6,48:1** | ✅ **par oficial do CTA** |
| `#0E2233` / `#FFE000` | **12,29:1** | ✅ destaque de dado |
| `#468429` / branco | 4,57:1 | ⚠️ só ≥ 17 px; preferir o derivado |
| `#277DB6` / branco | **4,47:1** | ❌ nunca texto — só fio decorativo |
| `#FF8103` / branco | **2,50:1** | ❌ nunca texto, em nenhum tamanho |
| branco / `#FF8103` | **2,50:1** | ❌ — **este era o botão primário da V1** |

Método: luminância relativa WCAG 2.1 sobre os hex medidos. **Refazer a conta se qualquer token
mudar** — contraste é resultado, não opinião.

### 4.3 Exclusividade da cor de ação
`--c-action` (`#FF8103`) aparece **só** em: CTA primário, estado ativo do município no mapa, e foco
do formulário. Nenhum título, nenhum fio, nenhum ícone decorativo. Cor exclusiva é o que ensina o
olho onde clicar — e um site de campanha tem uma única conversão que importa.

### 4.4 Tema
**Claro, único.** A marca é construída sobre branco, o leitor está no sol, e cada tema extra dobra o
QA de contraste. Escuro só depois do go-live, se sobrar orçamento. Decisão registrada — contraria o
padrão dark-first da casa **de propósito**.

---

## 5. O TRIÂNGULO — o logo É o mapa

Confirmado com o cliente em 12/08/2026: **"Triângulo do Sul" é a expressão que nomeia o movimento
entre três cidades — Marataízes, Itapemirim e Presidente Kennedy.** Não é marca de terceiro; é o
conceito da própria campanha.

**Consequência de projeto, e é a decisão mais importante deste sistema:**
o logo tem **três lóbulos** e o território tem **três cidades**. O símbolo não ilustra o mapa —
**ele é o mapa**. Some o SVG de recorte geográfico, some a biblioteca de mapa, some o risco de
desenhar fronteira errada, e o elemento assinatura passa a carregar o argumento inteiro da página.

> **Honestidade sobre a forma:** o arranjo é **conceitual, não cartográfico**. As três cidades não
> formam um triângulo no mapa; o triângulo representa o vínculo entre elas. O site não deve sugerir
> que é uma projeção geográfica — daí a ausência de linha de costa, escala ou rosa dos ventos.

### 5.1 Geometria derivada
- Triângulo equilátero de lado `L`, dividido em três lóbulos iguais mais um vazio central.
- Raio de canto `L × 0,14`; folga entre lóbulos `L × 0,04`.
- Traço no estado vazado: `max(2px, L × 0,05)`.
- **Tamanho mínimo legível: 24 px** de lado — e o **alvo de toque é 48 px**, maior que o desenho.
  Abaixo de 24 px, trocar por quadrado sólido com rótulo.
- `viewBox="0 0 100 92"`, `stroke-linejoin: round`, sem filtro, sem gradiente.

### 5.2 Pareamento lóbulo → cidade ✅ resolvido com fonte pública

| Lóbulo | Cor | Símbolo | Cidade | Evidência |
|---|---|---|---|---|
| **superior** | `#468429` verde | abacaxi (`#FF8103` fruta + `#FFE000` coroa) | **Marataízes** | "capital estadual do abacaxi": **58%** da produção do ES, 25,9 mi de frutos em 1.414 ha, 750+ propriedades — 68% dos estabelecimentos produtores do estado |
| **inferior esquerdo** | `#103C70` marinho | peixe sobre ondas | **Itapemirim** | Porto de **Itaipava**: maior polo pesqueiro do ES, maior produção de atum do estado, 650 embarcações e 4.100 pescadores registrados |
| **inferior direito** | `#003C44` petróleo | plataforma sobre ondas | **Presidente Kennedy** | maior arrecadador de royalties de petróleo do ES; maior reserva marítima do estado (~1,9 bi de barris); R$ 5,7 bi em royalties entre 1999 e 2024 |

> ⚠️ **A hipótese anterior estava trocada em duas das três** (dizia pesca → Marataízes, agricultura
> → Itapemirim). Fica registrado: em dado de território, o palpite plausível é justamente o que
> engana — e é o erro que o eleitor local enxerga de primeira.

**Detalhe de desenho observado no arquivo:** o abacaxi **transborda** o lóbulo verde e invade a
folga central entre os três. Isso é intencional na marca e deve ser preservado no SVG — o ícone não
é recortado pelo contorno do lóbulo. Peixe e plataforma ficam contidos, ambos assentados sobre a
mesma onda branca.

**Lógica interna da composição:** terra em cima, mar embaixo. O lóbulo agrícola é o único sem onda;
os dois costeiros compartilham o mesmo desenho de água. Vale manter essa leitura em qualquer
derivação.

### 5.2.1 Ordem geográfica, norte → sul
**Itapemirim → Marataízes → Presidente Kennedy.** Marataízes faz divisa com Itapemirim ao norte e
Presidente Kennedy ao sul; Presidente Kennedy é o município mais meridional do ES.

Essa é a ordem da **lista de fallback** e da leitura por teclado. **Não é a ordem do símbolo** —
Marataízes está no topo do logo e no meio do mapa. O arranjo é conceitual; o site nunca deve
sugerir projeção cartográfica.

### 5.3 Estados de cada lóbulo

| Estado | Forma | Cor | Rótulo |
|---|---|---|---|
| Com registros de escuta | sólido | `--c-primary` | cidade + nº de registros + data do mais recente |
| Selecionado | sólido + anel de foco | `--c-action` | abre o painel com localidade, data e "o que ouvimos" |
| Sem registro publicado | **vazado**, traço de 2 px | `--c-ink-muted` | cidade + "ainda não temos registro publicado aqui" |

**Nunca só cor.** Sólido × vazado é a diferença primária; cor é reforço. O lóbulo vazado **não some
e não mente** — mostra a cidade que ainda falta.

### 5.4 A prova é profundidade, não extensão
Com três cidades, "visitei 3 municípios" não impressiona ninguém. O que prova enraizamento é o que
está **dentro** do lóbulo: quantas vezes voltou, em qual bairro, distrito ou comunidade, em que data,
e o que foi ouvido lá. O painel de cada cidade é uma **linha do tempo de localidades**, não um
cartão de visita.

Por isso o componente principal não é o município — é o **registro de escuta**
(`cidade + localidade + data + ouvimos + fonte`). Ver `prompt-v3.md` §8.3.

### 5.5 Onde o triângulo pode aparecer
Os três lóbulos como mapa/seletor · indicador de progresso da escuta · recorte da **única** foto do
hero (`clip-path`) · classificador de bandeira pelo setor econômico.
**Proibido:** bullet de lista, divisor decorativo, padronagem de fundo.
Se o triângulo não estiver dizendo nada, ele não entra.

### 5.6 Acessibilidade
Cada lóbulo é um `<button>` real com `aria-pressed`, área ≥ 48 px, foco visível de 3 px e
`aria-label` completo em pt-BR — `"Marataízes — 4 registros de escuta, o mais recente em 7 de agosto
de 2026"`. **Fallback em lista sempre presente no DOM**, com a mesma informação, nunca escondido só
visualmente para leitor de tela.

---

## 6. MATRIZ DE ESTADOS

Todo componente interativo especifica os oito. Estado não desenhado é estado que vaza para produção.

| Componente | Repouso | Hover | Foco | Ativo | Desabilitado | Carregando | Erro | Vazio |
|---|---|---|---|---|---|---|---|---|
| **Botão primário** | `--c-action` + `--c-on-action`, raio 4 px | escurece 6%, sem mover | anel 3 px `--c-ink` com offset 2 px | escurece 12%, `translateY(1px)` | `--c-surface` + texto `--c-ink-muted`, `cursor: not-allowed` | rótulo troca para "Enviando…", largura travada | — | — |
| **Botão secundário** | fio 1 px `--c-border`, texto `--c-primary` | fio vira `--c-primary` | idem | idem | idem | idem | — | — |
| **Campo** | fio 1 px, fundo `--c-bg`, rótulo **visível** acima | fio escurece | fio `--c-action` + anel 3 px a 18% | — | fundo `--c-surface` | — | fio `#B3261E`, mensagem abaixo com `aria-live="polite"` dizendo **o que fazer** | placeholder nunca substitui rótulo |
| **Município** | vazado ou sólido (§5.2), área ≥ 48 px | fio engrossa | anel 3 px | painel abre | — | — | — | cinza, sem clique, com texto honesto |
| **Card de bandeira** | fio 1 px, raio 2 px | fio `--c-primary` + sombra única | anel no link interno | — | — | — | — | sem compromisso → **não renderiza** |
| **Link de mídia** | sublinhado 1 px | sublinhado 2 px | anel | — | — | — | link morto → some da lista | lista vazia → seção não renderiza |

**Largura travada em carregamento** evita o layout pulando — CLS em formulário custa conversão.

---

## 7. ESTADOS DE CONTEÚDO AUSENTE

Regra geral: **placeholder bonito é mentira**. Sem dado real, a seção não existe.

| Seção | Dado mínimo | Sem o dado |
|---|---|---|
| Prova de movimento | ≥ 2 números confirmados | seção inteira some. 3 números reais > 4 com um inventado |
| Bandeiras | `problema` + `compromisso` | o pilar sem compromisso não renderiza; `TODO(T2)` no código |
| Triângulo da Escuta | ≥ 1 registro (`cidade` + `localidade` + `data`) em **pelo menos uma** cidade | o triângulo continua na tela com os três lóbulos vazados e o texto "ainda não temos registro publicado aqui" — **honesto, e mostra o território mesmo sem conteúdo**. Lóbulo vazado nunca some |
| Agenda | ≥ 1 evento futuro | bloco vira uma linha: "A agenda desta semana sai na segunda. Fale com a gente no WhatsApp." |
| Na mídia | ≥ 1 item com URL | seção some |
| Galeria | ≥ 6 fotos autorizadas | seção some |
| Depoimentos | `autorizacaoEm` preenchido | item some |

---

## 8. LAYOUT E ORDEM

### 8.1 Duas grades, não cinco
A V2 propunha inverter o eixo a cada seção. É bonito e cansa. **Dois padrões, alternando:**

| Padrão | Grade | Seções |
|---|---|---|
| **A — assimétrico** | `7 / 5` | Hero, Quem é, Mapa (`8 / 4`) |
| **B — calha** | coluna de rótulo fixa `--mv-rail` + conteúdo | Bandeiras, Agenda, Mídia |

Container `1200px`, `--container-pad: clamp(1.25rem, 5vw, 4rem)`, `--section-pad: clamp(4rem, 9vw, 7rem)`.
Calha `--mv-rail: 0` no mobile, `5.5rem` a partir de 1280 px — **token e override juntos, fora de camada**.

### 8.2 Ordem do DOM = ordem de leitura, sempre
Reordenação visual só com `grid-template-areas`, e **apenas quando o DOM já está na ordem certa**.
Nunca `order:` em conteúdo focável — a navegação por teclado passa a pular pela tela.

### 8.3 Cards de tamanhos diferentes, com motivo
Bandeira mais mencionada no território ocupa 2 colunas e ganha foto; as outras, 1 coluna sem foto.
Município com muito registro de escuta ganha card alto; com uma linha, card baixo. **O tamanho é o
dado**, não capricho. Proibido `repeat(auto-fill, minmax(280px,1fr))` com tudo igual.

### 8.4 Forma — raio é token de componente

| Componente | Raio |
|---|---|
| Botão / campo | `4px` |
| Card | `2px` |
| Chip de município | `999px` — **único** lugar com pílula, porque é etiqueta |
| Moldura de foto do hero | `0` + `clip-path` do triângulo |
| Contêiner / seção | `0` |

Sombra: **uma só**, `0 10px 30px rgb(16 60 112 / .10)`. Sem sombra difusa espalhada.
Header: **opaco**, 64 px, fio de 1 px. Sem `backdrop-filter` — custa FPS no aparelho do público.

### 8.5 Textura
Fibra **direcional**: uma camada de `repeating-linear-gradient` a ~94° + `feTurbulence` para
granulação. Duas camadas cruzadas dão papel milimetrado e uma das faixas passa rente ao kicker
parecendo um `border-top` que ninguém escreveu. Opacidade máxima 0,025.

---

## 9. DERIVADOS — o link circula fora do site

| Peça | Tamanho | Regra |
|---|---|---|
| **OG / WhatsApp** | 1200×630, gerada em `opengraph-image.tsx` | rosto + nome + número, legível em miniatura de 200 px; testar num WhatsApp real, não só no validador |
| **Card de story** | 1080×1920 | material pronto para o apoiador compartilhar, baixável na seção Apoie |
| **Favicon** | 32/180/512 | geometria do triângulo sólido, sem ícone interno (não sobrevive a 32 px) |
| **Impressão** | A4 | `/privacidade` e a agenda imprimíveis; oculta header, barra fixa e mapa |

Toda peça derivada usa os mesmos tokens. Nenhuma nasce no Canva por fora.

---

## 10. ORÇAMENTO POR TOKEN

| Item | Teto | Como fica dentro |
|---|---|---|
| Fontes (total) | **80 kb** | ⚠️ **estourado hoje: 114 kb** (Archivo 88 + Public Sans 26, subset latin puro do Google). O corte vem do `pyftsubset` no build, restringindo aos glifos realmente usados — sem isso, a meta não fecha |
| CSS total | **40 kb** | tokens + 3 camadas; sem framework de componente |
| SVG do triângulo | **4 kb** | geometria pura, sem ícone embutido, sem filtro |
| Triângulo da Escuta (SVG + lógica) | **8 kb** *(era 25 kb)* | o logo é o mapa: 3 lóbulos, sem contorno geográfico, sem biblioteca. §5 |
| Hero AVIF mobile | **90 kb** | variante por `media` + `fetchpriority="high"` |
| JS inicial gzip | **120 kb** | Server Components por padrão |
| HTML servido | **60 kb** | referência: nikolasferreira.com.br entrega em 41 kb |

Estourou, a seção não sobe até caber. Orçamento sem consequência não é orçamento.

---

## 11. IMPLEMENTAÇÃO — esqueleto do `globals.css`

```css
/* 1 · TOKENS — FORA de camada, com TODOS os overrides junto.
      Custom property segue a mesma cascata; separar token e override quebra o layout. */
:root { --mv-rail: 0rem; --c-bg: #FFFFFF; /* … §4.1 … */ }
@media (min-width: 1280px) { :root { --mv-rail: 5.5rem; } }

/* 2 · ELEMENTO */
@layer base {
  a  { color: inherit; text-underline-offset: .2em }
  p  { margin: 0; text-wrap: pretty }
  h1, h2, h3 { margin: 0; text-wrap: balance }
  :focus-visible { outline: 3px solid var(--c-ink); outline-offset: 2px }
}

/* 3 · PRIMITIVO */
@layer components {
  .mv-btn { display:inline-flex; align-items:center; gap:.5rem;
            min-height:48px; padding:.875rem 1.5rem; border-radius:4px; font-weight:700 }
  .mv-btn-primary { background: var(--c-action); color: var(--c-on-action) }
  .mv-shell { max-width:1200px; margin-inline:auto; padding-inline: var(--container-pad) }
  .mv-stack-md > * + * { margin-block-start: 1.5rem }
}
```

**Por que isso importa:** no Tailwind 4, regra **sem camada vence qualquer camada**, inclusive
`utilities`. Já produziu, em projeto real: botão aparecendo no mobile apesar do `hidden`; texto da
cor do fundo do próprio botão; e calha zerada com o índice lateral cobrindo o conteúdo.

**Colisão de nome — prefixo `mv-` obrigatório.** `col-7`, `overline`, `table` e `grid` **são
utilitários do Tailwind 4**: `col-7` já jogou a coluna do hero para `left: 582px` numa tela de
402 px, e `overline` desenhou uma linha fina acima de cada eyebrow da página.

No `@theme inline`, mapear com nome **diferente** do token (`--color-paper: var(--c-bg)`), senão a
declaração vira auto-referência.

---

## 12. MOVIMENTO — orçamento fechado

| # | Comportamento | Onde | Timing |
|---|---|---|---|
| 1 | Entrada orquestrada do hero: nome → número → foto | uma vez | 600 ms, `cubic-bezier(.16,1,.3,1)` |
| 2 | Estado de interação: CTA, campo, município | onde comunica estado | 120–180 ms |
| 3 | Um reveal estrutural na virada de assunto | **máx. 4 pontos** na página | 320 ms |

Proibido: `.reveal` global, parallax, contador animado, tipografia cinética, carrossel 3D.
`prefers-reduced-motion: reduce` zera 1 e 3, mantém 2 — feedback de estado nunca some.

---

## 13. LISTA DE PROIBIÇÕES 🚫

Gradiente de qualquer tipo · `backdrop-filter` · glassmorphism · blob · sombra difusa espalhada ·
card em pílula · grade de cards uniformes · ícone de biblioteca · foto de banco · `Inter` ·
`.reveal` global · `01/02/03` sem sequência real · emoji em heading · faixa diagonal com estrelas ·
punho cerrado · ilustração de "povo unido" · texto sobre foto sem camada sólida ·
placeholder no lugar de rótulo · dado sem `fonte` · seção com conteúdo fictício.

---

## 14. VERIFICAÇÃO

| O que | Como | O que invalida |
|---|---|---|
| Contraste | calcular sobre os hex finais | estimar no olho |
| Layout | screenshot com `reducedMotion: "reduce"` | animação de scroll deixa a página em `opacity: 0` |
| Imagem | rolar tudo e esperar `decode()` | `loading="lazy"` deixa caixa branca |
| Conteúdo | **olhar** a tela | teste que **conta** elementos passa com título ilegível sobre foto |
| Teclado | percorrer só com Tab/Enter/Esc | conferir só o CSS de foco |
| Tamanho de alvo | medir os botões do mapa em 360 px | conferir só no desktop |
| Fonte | medir o `woff2` servido | confiar no tamanho do arquivo original |
| OG | abrir num WhatsApp real | validador do Facebook sozinho |
| Build | `npm run build` **e** `npm run lint` | build verde sozinho |

**Contar não é olhar. Verde não é prova.**

---

## 15. TESTE DE UNICIDADE

Tire logo, nome e fotos. Deve sobrar reconhecível:
a **grade assimétrica com calha de rótulo**, o **triângulo vazado x sólido como estado de visita**,
o **número da urna em largura expandida**, a **fibra direcional**, a **cor de ação exclusiva** e a
**restrição de duas famílias**. Se sobrar só "azul com laranja", refaça.

---

## 16. O QUE O PROTÓTIPO CORRIGIU

Construir revelou coisas que a especificação não pegava. Registrado aqui porque **a régua é a tela,
não o documento**.

| # | O que a spec dizia | O que a tela mostrou | Correção |
|---|---|---|---|
| 1 | número da urna em `--c-action` | laranja sobre marinho = **4,42:1** e o CTA perdia a exclusividade | número em `--c-signal` (**8,37:1**); no header, chip amarelo. §3.4 |
| 2 | "recorte de foto com `clip-path` do triângulo" | o triângulo aplicado à moldura **cortou o rosto** — virou chapéu de festa | o entalhe entra pela **base** da foto, nunca por cima do rosto: `polygon(0 0, 100% 0, 100% 100%, 50% 84%, 0 100%)` |
| 3 | raio de canto do lóbulo `L × 0,14` | com folga de 4,5% os três lóbulos leram como **três blobs soltos**, não como um triângulo | raio `L × 0,12` e folga 2,5% — o conjunto volta a fechar como uma figura só |
| 4 | fontes ≤ 80 kb | 114 kb com o subset latin do Google | §10: `pyftsubset` obrigatório no build |
| 5 | "`<button>` real" no mapa | `<button>` não existe dentro de SVG sem gambiarra | SVG vira forma (`aria-hidden`) e os controles são **`<button>` HTML posicionados por cima** — alvo ≥48 px, texto real, teclado nativo |

> ⚠️ **E uma lição de instrumento.** O Chrome headless **força um viewport mínimo de ~489 px** no
> Windows: a captura "de 360 px" mostrou a página cortada à direita e parecia overflow horizontal.
> Não era. Medir 360 px de verdade exige renderizar a página dentro de um `<iframe>` de 360 px numa
> janela maior e recortar a captura. Irmão dos erros já registrados: quando a observação não bate com
> a realidade, desconfie do instrumento antes do código.

---

## 17. O QUE CONTINUA EM ABERTO (não é dívida escondida)

**Resolvido em 12/08/2026** ✅
- ~~Titularidade do Triângulo do Sul~~ → é a expressão do movimento da própria campanha. Liberado.
- ~~Base territorial~~ → **Marataízes, Itapemirim, Presidente Kennedy**, somente. O logo virou o mapa (§5).
- ~~CNPJ e nome civil~~ → `68.345.764/0001-52` · Marco Antônio Vieira de Novaes. Rodapé fecha.
- ~~Número na urna~~ → **36028** (Agir 36 + 028). Rodapé e hero fecham.
- ~~Pareamento lóbulo → cidade~~ → §5.2, com fonte pública para as três.
- ~~Ordem geográfica~~ → Itapemirim → Marataízes → Presidente Kennedy (§5.2.1).

**Continua em aberto**
1. **Conferência cruzada do `36028` no DivulgaCand/TSE** antes do go-live — dois minutos que
   eliminam o risco de publicar número errado.
2. **`idmarcão.pdf` não foi lido** — falta renderizador de PDF nesta máquina. Se travar hex ou
   tipografia diferentes do medido, **o manual ganha** e esta nota é corrigida.
3. **Grafia acentuada do nome civil** — o registro da Receita vem em caixa alta sem acento; o rodapé
   legal precisa bater com o documento.
4. **Fotos de apoiador** — sem campo `autorizado`, nada de galeria nem de painel com rosto.
5. **Tema escuro** — fora da Onda 1; reavaliar depois do go-live.
