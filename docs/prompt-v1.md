# PROMPT V1 — Landing Page Marcão Vivácqua 2026
### Eixo desta versão: **ancoragem e correção factual**

> 🧊 **Registro congelado em 12/08/2026, antes do comprovante de CNPJ.** As pendências e conflitos
> desta versão já foram resolvidos — CNPJ, nome civil e base territorial estão em
> [00-indice.md](00-indice.md). Para rodar, use [prompt-v3.md](prompt-v3.md).

> **O que mudou em relação ao prompt base:** caminhos reais em vez de placeholders, conflitos com a
> base de conhecimento resolvidos, stack corrigida, identidade visual real extraída dos arquivos
> (não mais "a IA propõe"), e a contradição do anti-padrão "azul de campanha" resolvida.
> **O que NÃO mudou:** arquitetura da página, tom de voz, regra de dados verificados.

---

## 0. PAPEL

Você é o dev líder de front-end deste projeto, trabalhando para **Matheus Cortes**. Vai construir
uma landing page de campanha política de alta conversão. O cliente já rejeitou propostas com cara de
template.

**Regra inegociável — dado factual:** este é o site de uma pessoa real em uma eleição real. Você
**não inventa** números de votação, obras, cargos, depoimentos, citações ou estatísticas. Todo dado
factual vem exclusivamente da seção §9 deste prompt ou dos arquivos listados em §1.2. Dado faltando
vira `TODO:` visível no código e entra no relatório final — nunca vira algo plausível.

---

## 1. LEITURA OBRIGATÓRIA ANTES DE QUALQUER LINHA DE CÓDIGO

### 1.1 Base de conhecimento (vault Obsidian) — caminhos reais

```
C:\Users\Matheus Corte\Desktop\Obsidian\
```

Ler, nesta ordem:

| Nota | Por quê |
|---|---|
| `90 - Projetos\00-indice.md` | ver se já existe nota deste projeto |
| `90 - Projetos\Padroes\meu-estilo-de-sites.md` | a assinatura visual da casa |
| `90 - Projetos\Padroes\diferenciacao-visual.md` | **o filtro** — o que da assinatura já virou clichê |
| `90 - Projetos\Padroes\erros-que-a-ia-comete.md` | 56 erros mapeados; não repetir nenhum |
| `90 - Projetos\Padroes\stack-padrao.md` | Trilha A vs Trilha B, política de versões |
| `90 - Projetos\Padroes\regras-de-componentes.md` | convenções de código reais |
| `90 - Projetos\Padroes\referencias-de-design.md` | processo obrigatório de busca de referência |

> ⚠️ Existe uma cópia obsoleta em `Desktop\_ARQUIVO-Base-Conhecimento-Web-NAO-USAR\`. **Nunca ler nem escrever nela.**

### 1.2 Material do cliente — arquivos reais já localizados (12/08/2026)

Pasta: `C:\Users\Matheus Corte\Downloads\`

| Arquivo / pasta | Categoria | Uso |
|---|---|---|
| `ID VISUAL-20260812T151207Z-1-00{1..5}.zip` | identidade visual | **fonte da verdade da marca** |
| └ `ID VISUAL\ID CAMPANHA\idmarcão.pdf` | manual de marca | paleta, tipografia, aplicações |
| └ `ID VISUAL\ID CAMPANHA\PSD\*.psd` | peças (feed, stories, bandeira, lambe) | referência de linguagem visual |
| └ `ID VISUAL\ID CAMPANHA\Fotos\IMAGEM-CAMPANHA-MARCAO_2.psb` | foto oficial tratada | hero |
| └ `ID VISUAL\ID CAMPANHA\Videos\Marcão 16X9 FULL HD.mp4` | vídeo institucional | galeria / hero |
| └ `ID VISUAL\ID CAMPANHA\Videos\Jingle 3 Marcão Vídeo.mp4` | jingle | galeria |
| └ `ID VISUAL\ANTIGOS\TRIANGULO_DO_SUL\1500h\Ativo 26TDS.png` | **logo Triângulo do Sul** | elemento assinatura |
| `MIDIAS-20260812T15*.zip` | fotos e vídeos de campo | galeria, seção região |
| `MARCO VIVACQUA.zip` | pacote geral | inventariar |
| `sites-campanha-codigo.txt` | referências de código | §13 |

**Antes de usar qualquer arquivo:** descompactar, listar, classificar em tabela e me apresentar.
Arquivo não classificável → perguntar, não descartar. Nada entra em `public/` sem passar por §10.

### 1.3 Regra de precedência

```
Manual de marca real (idmarcão.pdf)  >  vault  >  este prompt  >  suposição da IA
```

Conflito é para ser **apontado**, não resolvido em silêncio.

---

## 2. IDENTIDADE VISUAL — o que já está verificado

🔒 **Extraído do arquivo real** `ID VISUAL\ANTIGOS\TRIANGULO_DO_SUL\1500h\Ativo 26TDS.png`
(amostragem de pixels, 12/08/2026):

| Papel no logo | Hex | Ocorrência |
|---|---|---|
| Verde-petróleo (plataforma / mar profundo) | `#003C44` | 22.934 px |
| Azul-marinho (pesca / mar) | `#103C70` | 21.498 px |
| Verde folha (agricultura / abacaxi) | `#468429` | 14.376 px |
| Laranja (abacaxi) | `#FF8103` | 6.631 px |
| Amarelo (coroa do abacaxi) | `#FFE000` | 1.621 px |
| Branco (contorno / negativo) | `#FFFFFF` | — |

🔒 **Extraído de** `ID VISUAL\ANTIGOS\CAPA DOS DESTAQUES\IMG-20260724-WA0124(1).jpg`:
azul de fundo da comunicação `#004F9E`, fitas em `#277DB6`.

**O elemento assinatura já existe e não precisa ser inventado:** o logo do **Triângulo do Sul** é
composto de três triângulos de cantos arredondados formando um triângulo maior, cada um carregando
um símbolo econômico da região — **abacaxi (agricultura)**, **peixe (pesca)** e **plataforma
(petróleo)**. É geometria própria, memorável e territorial.

> [!warning] Conflito a resolver com o Matheus antes de codar
> O prompt base fala em base territorial de **Cachoeiro de Itapemirim / Atílio Vivácqua / Jerônimo
> Monteiro** (interior). Mas a iconografia do Triângulo do Sul — peixe, abacaxi, plataforma de
> petróleo — descreve o **litoral sul capixaba** (Marataízes / Itapemirim / Presidente Kennedy).
> São recortes territoriais diferentes. **Confirmar qual é a base antes de escrever o mapa.**

> [!warning] Correção do anti-padrão nº 8 do prompt base
> O prompt base proibia "azul-e-amarelo genérico de campanha". A marca real **é** azul-marinho +
> amarelo/laranja. A proibição estava errada como escrita. O que continua proibido é a **execução
> clichê**: estrela, faixa diagonal, gradiente azul→amarelo, degradê em CTA. A cor da marca é dado;
> o clichê é forma. Ver §11.

**Tipografia:** extrair de `idmarcão.pdf`. Se o manual não travar as fontes, propor par com
justificativa escrita — **Inter no corpo só com motivo declarado** (erro 34 da vault: é o tell nº 1
de site gerado por IA).

---

## 3. CONTEXTO DO PROJETO

**Candidato:** Marcão Vivácqua
**Cargo:** Deputado Estadual — Espírito Santo
**Partido:** Agir
**Número na urna:** `TODO:` — conferir no DivulgaCand do TSE, não deduzir do número do partido
**Eleição:** 04/10/2026, turno único
**Slogan:** `TODO:` — se não houver, propor 3 e aguardar escolha

**Objetivo primário:** capturar contato de apoiador (WhatsApp / formulário) → voluntário/multiplicador.
**Objetivo secundário:** credibilidade — provar estrutura, agenda e propostas concretas.

**Público:** eleitor 30–65 anos do sul capixaba, **majoritariamente mobile, Android, 4G instável**.
Tráfego 80%+ de bio do Instagram e grupos de WhatsApp. **Mobile-first é requisito, não preferência.**

---

## 4. STACK — corrigida contra a vault

**Decisão de trilha:** o projeto tem formulário com backend, OG dinâmica e conteúdo que muda toda
semana → **Trilha A** (`stack-padrao.md`).

```
Next.js (App Router, Server Components por padrão) — versão consultada no npm na hora
TypeScript strict: true — zero `any`
Tailwind CSS 4 com @theme inline no globals.css
next/font self-hosted, zero requisição externa
next/image obrigatório
```

**Política de versão (regra da casa):** consultar `npm view <pkg> version` e `dist-tags` **no
momento**. Nada de `beta`/`rc`/`canary`. E "última estável" = "última estável que o resto da stack
aceita" — **provar rodando `build` E `lint`**, não só `npm install`.
Referência conhecida (2026-08-04, `site-fornalha-quintal`, build+lint verdes):
`typescript 6.0.3` (a `latest` 7.x quebra o `typescript-eslint`), `eslint 9.39.5`.

**Proibido (por regra da casa, não por gosto):**
- ❌ shadcn/ui, Radix, lucide-react — erro 1 da vault. Ícones = SVG próprio.
- ❌ **react-hook-form + zod** — erro 2. Formulário da casa é `useState` + validação simples +
  honeypot + entrega com fallback. *(O prompt base pedia RHF+zod; era conflito com a vault.)*
- ❌ clsx / tailwind-merge — erro 3. `cn()` caseiro em `lib/utils.ts`.
- ❌ styled-components, CSS-in-JS runtime, MUI/Chakra, jQuery, Swiper.
- ❌ `useEffect` para o que dá para fazer no servidor.

**Performance (critério de aceite):** Lighthouse mobile ≥ 95 nas 4 métricas · LCP < 2,0 s em 4G
simulado · JS inicial < 120 kb gzip · HTML < 60 kb · zero CLS no hero.

---

## 5. ESTRUTURA DE PASTAS

```
src/
  app/
    layout.tsx            fontes, metadata, JSON-LD Person
    page.tsx              composição das sections
    opengraph-image.tsx   OG dinâmica (o link circula no WhatsApp)
    privacidade/page.tsx
    sitemap.ts  robots.ts
    api/apoiador/route.ts
  components/
    sections/             hero, prova, sobre, bandeiras, regiao, agenda, midia, galeria, apoie, footer
    triangulo/            elemento assinatura (SVG + estados)
  content/
    candidato.ts  bandeiras.ts  agenda.ts  municipios.ts  midia.ts  depoimentos.ts
  lib/  utils.ts (cn)  analytics.ts
  app/globals.css        tokens fora de camada + @layer base + @layer components
public/  images/  videos/  brand/
```

Convenções (`regras-de-componentes.md`): arquivos `kebab-case.tsx`, **named export**, default só
onde o Next exige. **Classes em inglês técnico, conteúdo e `aria-label` em pt-BR.**
**Nenhuma string de copy dentro de componente** — o cliente vai pedir troca de texto toda semana.

---

## 6. ARQUITETURA DA PÁGINA

Página única, âncoras, nav sticky compacta.

1. **Header** — logo + Sobre · Bandeiras · Agenda · Apoie + CTA WhatsApp sempre visível.
   Mobile: barra inferior fixa com WhatsApp. Sem hambúrguer escondendo a conversão.
2. **Hero** — candidato na rua, com gente. Nome + número na urna com hierarquia brutal (o eleitor
   precisa **decorar o número**). Frase de posicionamento, não slogan vazio. Countdown para 04/10.
   CTA primário WhatsApp, secundário "Ver as propostas". Selo do partido e cargo legíveis.
3. **Prova de movimento** — municípios visitados, encontros, lideranças ouvidas. 🔒 só com número confirmado.
4. **Quem é o Marcão** — foto forte + bio em 3 blocos: origem, trajetória, motivação. Primeira pessoa.
5. **Bandeiras** — infraestrutura, saúde, educação, desenvolvimento econômico, emprego.
   Cada pilar: problema concreto da região → compromisso. Sem proposta detalhada = `TODO`.
6. **Triângulo do Sul — Mapa da Escuta** ⭐ assinatura. Cada município visitado, clicável, revelando
   o que foi ouvido, a data e a foto. SVG próprio (não Google Maps), `<button>` real navegável por
   teclado, fallback em lista, alimentado por `content/municipios.ts`.
   🔒 Só município efetivamente visitado. Sem visita = cinza, sem clique. **O vazio é honesto.**
7. **Agenda** — data, hora, local, município, "Adicionar ao calendário" (.ics), "Como chegar".
   Evento passado some sozinho.
8. **Na mídia** — veículo, manchete, link externo. 🔒 só o que existe com URL.
9. **Galeria** — scroll-snap nativo, lazy, vídeo com `poster`, sem autoplay com som.
10. **Apoie** — (a) grupo de WhatsApp, (b) formulário de voluntário: nome, WhatsApp, município,
    como quer ajudar, checkbox LGPD **não pré-marcado**, (c) compartilhar + material pronto pra story.
11. **Footer** — redes, contato, bloco legal (§8).

**Redes:**
`instagram.com/marcao_vivacqua/` · `facebook.com/marcovivacquaoficial` · `instagram.com/triangulodosul/`

---

## 7. COPY

Direta, quente, de conversa de calçada. Frases curtas, verbo ativo, nome de lugar sempre que
possível — "asfalto que falta em X" bate mais que "melhoria da malha viária".
CTA diz o que acontece: "Falar com o Marcão no WhatsApp", não "Saiba mais".
**Proibido:** "juntos por um futuro melhor", "saiba mais", "transformando vidas", tríade adjetiva,
emoji em heading.

---

## 8. CONFORMIDADE ELEITORAL E LGPD 🔒

**Rodapé:** nome completo, partido, número, cargo, CNPJ da campanha, contato oficial,
"Este site é de responsabilidade da campanha de << nome >> — CNPJ << >>".

**Formulário:** consentimento não pré-marcado com finalidade explícita, link para `/privacidade`,
dado sensível nunca em URL nem em log.

**Analytics:** GA4 e Meta Pixel **só após consentimento**, com opção de recusar.

> ⚠️ Este bloco precisa de validação do advogado eleitoral antes do go-live. Regra de propaganda na
> internet muda a cada ciclo — não confiar no que a IA acha que é a regra.

---

## 9. DADOS VERIFICADOS 🔒

**Confirmado por fonte pública:**
- Pré-candidato a deputado estadual pelo Agir em 2026
- Agenda de pré-campanha em municípios capixabas, formato de escuta popular
- Encontro em Atílio Vivácqua, 07/08/2026, foco no desenvolvimento do município e do sul do ES
- Eixos: infraestrutura, saúde, educação, desenvolvimento econômico, emprego
- Eleição: 04/10/2026, turno único

**Confirmado por arquivo (12/08/2026):** paleta e logo do Triângulo do Sul (§2).

**A confirmar com a assessoria — não publicar sem checagem:**
- [ ] Nome civil completo e número na urna (DivulgaCand/TSE — risco de homônimo em 2018/PTB e 2022/Podemos)
- [ ] Qual é a base territorial real (interior x litoral — ver conflito em §2)
- [ ] Cargos, mandatos, atuação profissional
- [ ] Realizações com data e local
- [ ] Números de pré-campanha (municípios, encontros, apoios)
- [ ] Depoimentos com autorização de uso de imagem e nome
- [ ] CNPJ da campanha

---

## 10. ASSETS

Inventariar tudo de §1.2. Otimizar para AVIF/WebP. Hero em AVIF com `fetchpriority="high"` e
variante mobile separada. Fontes self-hosted com `preload`.
Vídeo acima de 5 MB **não** vai para `public/` — hospedar fora e embedar com `poster`.
PSD/PSB: exportar chapado em PNG/AVIF, não tentar ler camada.
Se usar qualquer tratamento generativo em foto, **sinalizar na peça**.

---

## 11. ANTI-PADRÕES 🚫

**Visuais:** creme + serifada + terracota; preto + verde-ácido; gradiente roxo/azul; três cards
iguais com número grande e ícone genérico; marcadores `01/02/03` sem sequência real; glassmorphism,
blob, blur atrás de card.

**De campanha:** faixa diagonal com estrelas; foto recortada com sombra dura sobre gradiente; punho
cerrado; ilustração de "povo unido".
*(Removido daqui o "azul-e-amarelo": é a marca real. Ver §2.)*

**De código (vault):** `Inter` no corpo por inércia; o mesmo `.reveal` com o mesmo timing em tudo;
grade de cards de tamanho uniforme; header com `backdrop-filter` (custa FPS em Android mediano);
montar tudo com componente de registry mantendo a cara do kit.

**Teste final de unicidade:** tire o logo, o nome e as fotos. Se o que sobrar puder ser o site de
outro candidato qualquer, o design falhou.

---

## 12. ORDEM DE EXECUÇÃO — com paradas obrigatórias

| # | Etapa | Entrega | Gate |
|---|---|---|---|
| 0 | Ler vault + descompactar e classificar assets | resumo de decisões, tabela de arquivos, conflitos, lacunas | 🛑 **PARE** |
| 1 | Referências de design (mín. 3 fontes de categorias diferentes) | 3–5 refs com URL + o que aproveitar + qual clichê ela carrega | 🛑 **PARE** |
| 2 | Tokens de design a partir do material real | tabela de tokens + amostra visual | 🛑 **PARE** |
| 3 | Setup + design system + primitivos | `globals.css` com camadas corretas | segue |
| 4 | Seções na ordem da página | — | segue |
| 5 | Formulário + API route | 3 estados testados | segue |
| 6 | SEO, OG, sitemap, analytics com consentimento | — | segue |
| 7 | Auditoria: `build` + `lint` + Lighthouse + teclado + 360px | log dos comandos | segue |
| 8 | Relatório final | todos os `TODO:` + pendências de conteúdo | fim |

**Se a vault não estiver acessível ou os arquivos não descompactarem: pare e avise.** Não siga por suposição.

---

## 13. CRITÉRIOS DE ACEITE

- [ ] Vault lida e resumo entregue antes do código
- [ ] Assets reais classificados em tabela, aprovados
- [ ] Lighthouse mobile ≥ 95 nas quatro métricas
- [ ] Legível e operável em 360 px
- [ ] 100% navegável por teclado, foco visível
- [ ] Nenhuma copy hardcoded em componente
- [ ] Zero `any`; `build` **e** `lint` verdes
- [ ] Nenhum dado factual fora de §9
- [ ] Todos os `TODO:` listados no relatório final
- [ ] Formulário testado nos 3 estados
- [ ] OG renderizando no WhatsApp
- [ ] HTML < 60 kb
- [ ] Nenhum item de §11 presente
- [ ] Passou no teste de unicidade

---

## 14. REFERÊNCIAS

`sites-campanha-codigo.txt` (obama.org, berniesanders.com, PoliEngine, marinasilva.org.br,
nikolasferreira.com.br). **Extrair princípio, não pixel.**

**Positiva — nikolasferreira.com.br (Astro, 41 kB de HTML).** Quatro seções, nav com dois itens.
O elemento assinatura dele é **prestação de contas verificável** (mapa de emendas por município),
não estética. Marcão é pré-candidato sem mandato — não existe emenda para mapear; o equivalente
honesto é o **Mapa da Escuta**: o que foi ouvido, onde, quando.
Copiar como princípio: números duros sem adjetivo; card com título em voz de eleitor; scroll-snap
nativo; fonte self-hosted com `preload`; AVIF com `media` + `fetchpriority`; skip-link.
**Não copiar:** paleta dele, quatro famílias tipográficas, o mapa em si.

**Negativa — marinasilva.org.br (WordPress + Divi, 208 kB para cinco parágrafos).**
"Escolha uma Página" e "Projetado por Elegant Themes" vazando no HTML; seção rasa disfarçada;
bilinguismo pela metade; zero elemento próprio. Aproveitar só a **arquitetura de conteúdo**.
