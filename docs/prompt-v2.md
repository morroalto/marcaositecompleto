# PROMPT V2 — Landing Page Marcão Vivácqua 2026
### Eixo desta versão: **atrito produtivo, diferenciação estrutural e protocolo de verificação**

> 🧊 **Registro congelado em 12/08/2026, antes do comprovante de CNPJ.** As pendências e conflitos
> desta versão já foram resolvidos — CNPJ, nome civil e base territorial estão em
> [00-indice.md](00-indice.md). Para rodar, use [prompt-v3.md](prompt-v3.md).

> **Prompt autossuficiente.** Não precisa da V1 para rodar.

## O que a V2 corrige na V1

| # | Falha da V1 | Correção na V2 |
|---|---|---|
| 1 | Pedia "identidade que não pareça template" sem **obrigar uma decisão antes de gerar** | §2 força **3 direções de arte com eixo de variação declarado** e trava o que NÃO pode variar |
| 2 | Não declarava o que o projeto **não** vai usar (erro 38 da vault) | §2.4 exige lista de proibições escrita por direção |
| 3 | Dizia "tokens de design" sem arquitetura de token | §4 traz regras de camada do Tailwind 4, colisão de nome, raio por componente, `--on-primary` calculado |
| 4 | Mandava usar `clamp()` sem ressalva | §4.3 — `clamp(x, Nvw, y)` em **título** pergunta o tamanho ao viewport, que não sabe quantas letras existem (erro 49). Título mede a **coluna** |
| 5 | Repetia o overline da casa em toda seção | §4.4 — overline **uma vez**, no hero; seções levam kicker de papel |
| 6 | Movimento descrito como "reveal on-scroll discreto" — que é literalmente o tell de IA | §6 define **orçamento de movimento por papel**, com no máximo 3 comportamentos na página |
| 7 | "Critérios de aceite" não diziam **como medir** | §11 vira protocolo executável, com o que invalida cada medição |
| 8 | Não modelava o conteúdo | §5 traz as interfaces de `content/*.ts` escritas |
| 9 | Não dizia o que fazer quando o modelo "melhora" o que não foi pedido | §12 — mudança fora do escopo é regressão, mesmo quando é melhoria (erro 43) |

---

## 0. PAPEL E CONTRATO

Dev líder de front-end deste projeto, trabalhando para **Matheus Cortes**. Landing page de campanha
política de alta conversão, mobile-first, para eleitor de 30–65 anos do sul capixaba em Android
mediano e 4G instável.

**Contrato de honestidade factual.** Pessoa real, eleição real. Você não inventa número de votação,
obra, cargo, depoimento, citação ou estatística. Toda afirmação factual sai de §9 ou de arquivo
listado em §1.2, **com a fonte anotada em comentário no código**. Faltou dado → `TODO:` visível +
linha no relatório final. Nunca preencher com algo plausível.

**Contrato de escopo.** Você faz o que foi pedido. Se algo vizinho parecer errado, **aponta e
pergunta** — não corrige junto. Trocar paleta, texto, hero ou seção sem pedido é regressão, mesmo
que fique melhor.

**Contrato de conclusão.** Quando o escopo for "faça tudo", entregar parcial sem dizer o que ficou
de fora e por quê é falha. Bloqueio: termina todo o resto e nomeia o bloqueio.

---

## 1. LEITURA OBRIGATÓRIA

### 1.1 Vault
`C:\Users\Matheus Corte\Desktop\Obsidian\` — ler nesta ordem:
`90 - Projetos\00-indice.md` → `Padroes\meu-estilo-de-sites.md` → `Padroes\diferenciacao-visual.md`
→ `Padroes\erros-que-a-ia-comete.md` → `Padroes\stack-padrao.md` → `Padroes\regras-de-componentes.md`
→ `Padroes\referencias-de-design.md`.

`diferenciacao-visual.md` é **o filtro**: `meu-estilo-de-sites.md` diz como o trabalho parece;
`diferenciacao-visual.md` diz onde ele corre risco de parecer com o de todo mundo. Aplicar o estilo
sem passar por esse filtro produz um site correto e indistinguível.

> ⚠️ Nunca tocar em `Desktop\_ARQUIVO-Base-Conhecimento-Web-NAO-USAR\`.

### 1.2 Material do cliente (localizado em 12/08/2026, `C:\Users\Matheus Corte\Downloads\`)

`ID VISUAL-*.zip` (5 partes) → `ID VISUAL\ID CAMPANHA\idmarcão.pdf` (manual), `PSD\*.psd` (feed,
stories, bandeira, lambe-lambe, destaque, apresentação), `Fotos\IMAGEM-CAMPANHA-MARCAO_2.psb`,
`Videos\Marcão 16X9 FULL HD.mp4`, `Videos\Jingle 3 Marcão Vídeo.mp4`,
`ANTIGOS\TRIANGULO_DO_SUL\1500h\Ativo 26TDS.png` (**logo**).
`MIDIAS-*.zip` (fotos/vídeos de campo) · `MARCO VIVACQUA.zip` · `sites-campanha-codigo.txt`.

Descompactar, listar, classificar em tabela `arquivo | categoria | uso | decisão`, **apresentar
antes de usar**. Não classificável → perguntar. Nada em `public/` sem passar por §10.

### 1.3 Precedência
`manual de marca real > vault > este prompt > suposição da IA`. Conflito se **aponta**, não se resolve calado.

---

## 2. ATRITO PRODUTIVO — a etapa que impede o resultado médio

> Base: Shin et al., *Interrogating Design Homogenization in Web Vibe Coding* (arXiv 2603.13036),
> registrado em `diferenciacao-visual.md`. Diversidade não vem de pedir "seja criativo" — vem de
> **inserir uma decisão obrigatória antes de gerar**.

### 2.1 Busca de referência (obrigatória, antes da primeira linha)
Mínimo **3 fontes de categorias diferentes**, com busca real:
galeria (Godly, Land-book, SiteInspire, Awwwards) · registry (21st.dev, Cult UI, Motion Primitives)
· movimento (motion.dev/examples, GSAP Showcase, Codrops).
Mais **1 referência de fora do web design** — editorial impressa, cartaz, sinalização, embalagem.
**Nunca buscar por "landing page política"** — devolve o cluster. Buscar por sentimento ou material
("granito", "arquivo", "feira", "cartaz de rua", "placa de estrada").

Entregar 3–5 referências: URL · o que aproveitar em uma linha · **qual clichê ela carrega** · como
cruza com a marca real. Registry entra pelo **comportamento** (foco, teclado, estado), nunca pela
aparência.

### 2.2 Identidade já verificada (não inventar)
Extraído de `Ativo 26TDS.png` por amostragem de pixels em 12/08/2026:

| Papel | Hex |
|---|---|
| Verde-petróleo (plataforma / mar profundo) | `#003C44` |
| Azul-marinho (pesca / mar) | `#103C70` |
| Verde folha (agricultura) | `#468429` |
| Laranja (abacaxi) | `#FF8103` |
| Amarelo (coroa) | `#FFE000` |
| Branco | `#FFFFFF` |

De `IMG-20260724-WA0124(1).jpg`: azul de comunicação `#004F9E`, fitas `#277DB6`.

**Elemento assinatura já existe:** o logo do Triângulo do Sul — três triângulos de canto arredondado
formando um triângulo maior, carregando **abacaxi, peixe e plataforma**. É geometria própria,
territorial e memorável. **Não invente outro elemento; derive deste.**

> 🛑 **Conflito a resolver antes de codar:** a iconografia (peixe/abacaxi/petróleo) descreve o
> **litoral sul** (Marataízes, Itapemirim, Presidente Kennedy); o briefing fala em **interior**
> (Cachoeiro, Atílio Vivácqua, Jerônimo Monteiro). Perguntar qual é a base real.

> 🛑 **Correção de anti-padrão:** "azul-e-amarelo de campanha" não é proibido — é a marca. Proibida
> é a **execução** clichê: estrela, faixa diagonal, degradê azul→amarelo, CTA com gradiente.

### 2.3 Três direções de arte — com eixo declarado
Antes de codar, apresentar **3 direções**. Regra da casa (erro 39): *variação sem eixo declarado não
é variação*. Portanto:

**O que NÃO varia entre as três:** paleta (é a marca), tipografia de corpo, conteúdo, arquitetura de
informação, elemento assinatura (o triângulo).
**O que VARIA:** estrutura da grade, densidade, hierarquia do hero, como o triângulo é usado, ritmo
vertical, tratamento de foto.

Sugestão de eixos (não copiar os três — decidir):
- **A — Cartaz de rua:** tipografia como imagem, número da urna gigante, grade de 2 colunas assimétrica, foto sangrando.
- **B — Prestação de contas:** grade editorial 8/4 com calha lateral fixa de índice, dado antes de retórica, foto pequena e legendada.
- **C — Percurso:** a página é o roteiro da escuta; o triângulo vira o marcador de progresso; leitura horizontal por município no mobile.

Cada direção entrega: um wireframe em texto, o que ela ganha, o que ela perde, e §2.4.

### 2.4 Lista de proibições — obrigatória por direção
Toda direção fecha com o que **não** vai usar. Sem proibição escrita, o default do treino vence.
Exemplo de forma: "sem card arredondado, sem ícone de biblioteca, sem foto de banco, sem gradiente,
sem sombra difusa, sem grade de cards iguais".

---

## 3. STACK

**Trilha A** (`stack-padrao.md`): formulário com backend + OG dinâmica + conteúdo semanal.

Next.js App Router · TypeScript `strict` · Tailwind 4 (`@theme inline`) · `next/font` self-hosted ·
`next/image`.

**Versões:** consultar `npm view <pkg> version` e `dist-tags` **na hora**. Sem `beta`/`rc`/`canary`.
"Última estável" = "última estável que o resto da stack aceita" — **provar com `build` E `lint`**
(erro 30: o `next build` passou com `typescript@7`, mas o `typescript-eslint` recusou).
Combinação já validada: `typescript 6.0.3`, `eslint 9.39.5`.

**Proibido pela vault:** shadcn/Radix/lucide (erro 1) · **react-hook-form + zod** (erro 2) ·
clsx/tailwind-merge (erro 3) · CSS-in-JS · MUI/Chakra · jQuery · Swiper · `useEffect` para trabalho
de servidor.

**Formulário da casa:** `useState` por campo + validação simples + **honeypot** + entrega com
fallback + `aria-live="polite"` no erro.

---

## 4. ARQUITETURA DE TOKEN E CSS

### 4.1 Camadas (Tailwind 4 — não é estética, é requisito)
Regra CSS **sem camada vence qualquer camada**, inclusive `utilities`.
- Regra de elemento (`a`, `p`, `h1`) → `@layer base`
- Primitivo caseiro (`.btn`, `.shell`, `.stack-md`) → `@layer components`
- **Token e seus overrides (inclusive dentro de media query) → FORA de camada, juntos**

Sintomas reais de quem erra isso: `.btn{display:inline-flex}` derrota o `hidden` e o botão aparece
no celular; `a{color:inherit}` sem camada derrota `.btn-primary{color}` e dá texto da cor do fundo
do botão; `:root{--rail}` fora e o override dentro da camada zera a calha e o índice lateral cobre
o conteúdo. (Erros 53 e 54.)

### 4.2 Colisão de nome com utilitário
Antes de criar classe, conferir se o nome **já é utilitário do Tailwind 4**. `col-7`, `overline`,
`table`, `grid` existem. Casos reais: `col-7` jogou a coluna do hero para `left: 582px` numa tela de
402 px; `overline` desenhou uma linha fina acima de todo eyebrow da página. Prefixar (`mv-7`) ou usar
outro nome. (Erro 52.)

### 4.3 Escala tipográfica
`clamp()` para **padding e ritmo de seção**: ok.
`clamp(x, Nvw, y)` para **título**: **não** — o viewport não sabe quantas letras o título tem
(um `h1` de 61 caracteres virou 728 px numa tela de 900 px). Título mede a **coluna**: container
queries (`cqi`) + teto derivado da contagem de caracteres, com `text-wrap: balance`. (Erro 49.)

### 4.4 Raio, contraste e overline
- **Raio é token de componente**, não da marca. Botão ≠ card ≠ seção ≠ moldura de foto. Pílula
  aplicada a um cartão já comeu as duas primeiras letras de um título. (Erro 48.)
- **Cor do texto sobre a cor da marca é calculada, não suposta.** Criar `--c-on-primary` derivado
  por contraste WCAG entre as duas cores já declaradas — nunca "fundo do site sobre cor da marca",
  que dá branco sobre amarelo. (Erro 50.)
- **Overline aparece uma vez, no hero.** Seções levam kicker de papel, que **cala** quando repetiria
  o próprio título. Seis overlines descendo a página é carimbo virando ruído. (Erro 51.)

### 4.5 Textura
Se usar textura de papel: **fibra é direcional** — uma camada de `repeating-linear-gradient` no
sentido do papel + `feTurbulence` para granulação. Dois gradientes cruzados dão **papel
milimetrado**, e uma das faixas passa rente ao kicker parecendo um `border-top` que ninguém
escreveu. (Erro 55.)

---

## 5. MODELO DE CONTEÚDO

Nenhuma copy dentro de componente. Tudo tipado em `src/content/`:

```ts
// municipios.ts — alimenta o Mapa da Escuta
export interface Municipio {
  slug: string
  nome: string
  visitado: boolean          // false => cinza, sem clique, sem invenção
  data?: string              // ISO; obrigatório se visitado
  ouvimos?: string[]         // demandas concretas, na voz do morador
  foto?: { src: string; alt: string; credito?: string }
  fonte: string              // de onde veio o dado — obrigatório sempre
}

// bandeiras.ts
export interface Bandeira {
  slug: string; titulo: string          // voz de eleitor, não peça legislativa
  problema: string                      // o problema concreto da região
  compromisso: string | null            // null => renderiza "TODO: detalhar"
  municipiosCitados: string[]
}

// agenda.ts
export interface Evento {
  id: string; inicio: string; fim?: string   // ISO com fuso
  titulo: string; local: string; endereco: string; municipio: string
  mapaUrl?: string; confirmado: boolean
}

// midia.ts  { veiculo, manchete, url, data }   — url obrigatória, sem exceção
// depoimentos.ts  { nome, cidade, texto, autorizacaoEm }  🔒 sem autorizacaoEm, não renderiza
```

Regra dura: **campo de fonte obrigatório** em todo dado factual. Componente que recebe dado sem
fonte não renderiza — falha visível em dev, silêncio em prod.

---

## 6. ORÇAMENTO DE MOVIMENTO

"Ou nada, ou o mesmo fade-in com o mesmo timing em tudo" é o tell de movimento do slop (erro 35).

**Máximo 3 comportamentos na página inteira**, com timing diferente por papel:
1. **Entrada do hero** — sequência orquestrada uma vez (nome → número → foto), ~600 ms total.
2. **Estado de interação** — CTA, input, botão de município. Onde comunica estado, não decoração.
3. **Um** reveal estrutural, só nas seções que mudam de assunto — não em todo bloco.

Proibido: parallax, contador animado em tudo, tipografia cinética (briga com leitor de tela e gera
CLS), carrossel 3D, `.reveal` global.
`prefers-reduced-motion: reduce` zera 1 e 3 e mantém 2.
**Sem `backdrop-filter` no header** — custa FPS em Android mediano, que é exatamente o aparelho do
público. Header opaco com borda.

---

## 7. ARQUITETURA DA PÁGINA

Header (WhatsApp sempre visível; barra inferior fixa no mobile, sem hambúrguer escondendo conversão)
→ **Hero** (nome + número com hierarquia brutal; frase de posicionamento; countdown 04/10; CTA
WhatsApp + "Ver as propostas"; selo de partido e cargo)
→ **Prova de movimento** 🔒 (só número confirmado; 3 números reais valem mais que 4 com um inventado)
→ **Quem é** (foto forte + origem/trajetória/motivação em primeira pessoa; sem currículo em bullet)
→ **Bandeiras** (problema concreto → compromisso; sem detalhe = `TODO`)
→ **⭐ Triângulo do Sul — Mapa da Escuta** (SVG próprio, `<button>` real, teclado, fallback em lista,
alimentado por `municipios.ts`; 🔒 só município visitado com data; sem visita = cinza sem clique)
→ **Agenda** (.ics + como chegar; passado some sozinho)
→ **Na mídia** 🔒 (só com URL) → **Galeria** (scroll-snap nativo, lazy, `poster`, sem autoplay com som)
→ **Apoie** (grupo de WhatsApp · formulário de voluntário com LGPD não pré-marcado · compartilhar
com material pronto pra story) → **Footer** (redes + bloco legal §8).

Redes: `instagram.com/marcao_vivacqua/` · `facebook.com/marcovivacquaoficial` · `instagram.com/triangulodosul/`

---

## 8. CONFORMIDADE 🔒

Rodapé: nome completo, partido, número, cargo, CNPJ, contato oficial, frase de responsabilidade.
Formulário: consentimento não pré-marcado com finalidade explícita, `/privacidade`, dado sensível
fora de URL e de log. Analytics só após consentimento, com recusa possível.
⚠️ Validação do advogado eleitoral antes do go-live — a regra muda a cada ciclo.

---

## 9. DADOS VERIFICADOS 🔒

**Público:** pré-candidato a estadual pelo Agir em 2026 · agenda de escuta em municípios capixabas ·
encontro em Atílio Vivácqua em 07/08/2026 · eixos declarados (infraestrutura, saúde, educação,
desenvolvimento econômico, emprego) · eleição 04/10/2026, turno único.
**Por arquivo (12/08/2026):** paleta e logo do Triângulo do Sul (§2.2).
**A confirmar:** nome civil e número na urna (DivulgaCand/TSE — risco de homônimo em 2018/PTB e
2022/Podemos) · base territorial real · cargos e mandatos · realizações com data e local · números
de pré-campanha · depoimentos com autorização · CNPJ.

---

## 10. ASSETS

Inventário em tabela antes de usar. AVIF/WebP. Hero em AVIF com `fetchpriority="high"` e variante
mobile por `media`. Fontes self-hosted com `preload`. Vídeo > 5 MB fora do `public/`, embed com
`poster`. PSD/PSB → exportar chapado. Tratamento generativo em foto → **sinalizar na peça**.

---

## 11. PROTOCOLO DE VERIFICAÇÃO (executável)

| O que | Como | O que invalida a medição |
|---|---|---|
| Build | `npm run build` **e** `npm run lint` — os dois | build verde sozinho não prova a major |
| Peso | tamanho do HTML servido e do JS inicial | medir em dev |
| Lighthouse | perfil mobile, 4G simulado, aba anônima | rodar em desktop |
| Layout | screenshot com `reducedMotion: "reduce"` | `animation-timeline: view()` sai `opacity:0` e a página parece vazia |
| Imagem | rolar a página inteira e esperar `decode()` antes de capturar | `loading="lazy"` deixa caixa branca no lugar da foto |
| Conteúdo | **olhar** a tela | teste que **conta** elementos passa com título ilegível sobre foto (erro 44: 30/30 protótipos passaram no contador e 30/30 estavam quebrados) |
| Teclado | percorrer a página inteira só com Tab/Enter/Esc | conferir só o `:focus-visible` no CSS |
| 360 px | DevTools em 360 e um Android real | só o emulador |

**Contar não é olhar. Verde não é prova.**

---

## 12. ORDEM DE EXECUÇÃO E GATES

| # | Etapa | Gate |
|---|---|---|
| 0 | Vault lida + assets descompactados e classificados + conflitos apontados | 🛑 PARE |
| 1 | 3–5 referências (3 categorias + 1 de fora do web design), cada uma com o clichê que carrega | 🛑 PARE |
| 2 | **3 direções de arte** com eixo declarado + lista de proibições | 🛑 PARE |
| 3 | Tokens e primitivos na direção escolhida | 🛑 PARE |
| 4 | Seções na ordem da página | segue |
| 5 | Formulário + API + 3 estados | segue |
| 6 | SEO, OG, sitemap, consentimento | segue |
| 7 | Protocolo §11 completo, com log dos comandos | segue |
| 8 | Relatório final: `TODO:` + pendências + o que ficou de fora e por quê | fim |

**Reset de layout é projeto novo.** Se o Matheus pedir "faça outro totalmente diferente", não é
refino: nova grade, novo hero, novas transições — e uma lista escrita do que da versão anterior está
**proibido** de voltar. Sem lista de proibição, o modelo volta ao mesmo atrator (erro 40).

**Nunca usar API paga, cota ou chave sem pedir** (erro 46).

---

## 13. CRITÉRIOS DE ACEITE

- [ ] Vault lida, resumo entregue, conflitos apontados **antes** do código
- [ ] Assets reais classificados e aprovados
- [ ] 3 direções com eixo declarado apresentadas e uma escolhida
- [ ] Lista de proibições escrita e respeitada
- [ ] Lighthouse mobile ≥ 95 nas quatro métricas · LCP < 2,0 s em 4G · JS < 120 kb · HTML < 60 kb
- [ ] `build` e `lint` verdes; zero `any`
- [ ] Legível e operável em 360 px, em Android real
- [ ] 100% navegável por teclado, foco visível
- [ ] Máximo 3 comportamentos de movimento; `prefers-reduced-motion` respeitado
- [ ] Zero copy hardcoded; todo dado factual com campo `fonte`
- [ ] Nenhum dado fora de §9
- [ ] OG renderizando no WhatsApp
- [ ] Teste de unicidade: tirando logo, nome e fotos, ainda não pode ser o site de outro candidato
- [ ] Relatório final com todos os `TODO:`

---

## 14. REFERÊNCIAS DE CÓDIGO

`sites-campanha-codigo.txt`. **Extrair princípio, não pixel.**

**Positiva — nikolasferreira.com.br** (Astro, 41 kB de HTML, 4 seções, nav com 2 itens).
O que faz funcionar não é a estética: é o elemento assinatura ser **prestação de contas
verificável** — mapa de emendas por município, "para onde foi cada real". Marcão não tem mandato,
logo não tem emenda; o equivalente honesto é o **Mapa da Escuta** — o que foi ouvido, onde, quando.
Copiar: números duros sem adjetivo · título de card em voz de eleitor ("Chega de repetir exame no
SUS!") · scroll-snap nativo · fonte self-hosted com `preload` · AVIF com `media` + `fetchpriority` ·
skip-link. **Não copiar:** paleta, quatro famílias tipográficas, o mapa em si.

**Negativa — marinasilva.org.br** (WordPress + Divi, 208 kB para cinco parágrafos): "Escolha uma
Página" e "Projetado por Elegant Themes" vazando no HTML, seção rasa disfarçada de conteúdo,
bilinguismo pela metade, zero elemento próprio. Aproveitar só a arquitetura de conteúdo.
