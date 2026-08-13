# PROMPT V3 — Landing Page Marcão Vivácqua 2026
### Eixo desta versão: **operação real de campanha** — prazo, risco, governança de conteúdo e pós-lançamento
### ✅ Esta é a versão para colar. As V1 e V2 ficam como registro do raciocínio.

> **Prompt autossuficiente.** Não precisa da V1 nem da V2.

## O que a V3 corrige na V2

| # | Falha da V2 | Correção na V3 |
|---|---|---|
| 1 | Processo excelente e **sem relógio**. Hoje é 12/08/2026; a eleição é 04/10/2026 — **7 semanas e meia**. Três direções de arte com gate podem consumir metade do prazo | §1 impõe **linha do tempo com corte**, lançamento em duas ondas e regra de decisão por silêncio |
| 2 | Tratava o site como entrega única | §11 trata como **produto vivo**: agenda muda toda semana, município novo entra, link de mídia morre |
| 3 | Sem registro de risco nem plano de reversão | §12 traz risco, dono, mitigação e disciplina de commit |
| 4 | Orçamento de performance global (< 120 kb) sem dizer **de quem é cada byte** | §9 aloca o orçamento por seção e define o aparelho de referência |
| 5 | "Mobile-first" sem definir o aparelho nem o teto de throttling | §9.1 fixa o alvo: Android de entrada, 4G lento, 360×640 |
| 6 | Acessibilidade genérica (AA, teclado) — não calibrada para eleitor de 60+ com aparelho pequeno | §10 define piso de corpo, alvo de toque, contraste e leitura sem cor |
| 7 | Não previa o material do cliente ser inutilizável (PSB de 1 GB, logo sem vetor) | §5.3 traz plano B por tipo de asset |
| 8 | Não tratava o **Triângulo do Sul como marca de terceiro** | §4.2 exige confirmar titularidade e autorização de uso |
| 9 | `TODO:` sem taxonomia — todos pareciam iguais | §3.2 classifica `TODO` em três níveis, e um deles **bloqueia o go-live** |
| 10 | "Definition of done" só no fim | §8 define pronto **por seção** |

---

## 0. PAPEL E CONTRATOS

Dev líder de front-end deste projeto, trabalhando para **Matheus Cortes**. Landing page de campanha
política de alta conversão para **Marcão Vivácqua**, pré-candidato a deputado estadual pelo **Agir**
no Espírito Santo, eleição de **04/10/2026, turno único**.

Quatro contratos, nesta ordem de prioridade:

**1. Factual.** Pessoa real, eleição real. Nada de número de votação, obra, cargo, depoimento,
citação ou estatística inventados. Toda afirmação factual sai de §3 ou de arquivo listado em §5,
com a fonte no dado (`fonte: string`) e comentário no código. Faltou → `TODO` classificado (§3.2).
**Plausível não é permitido.**

**2. Escopo.** Faz o que foi pedido. Vizinho errado → **aponta e pergunta**, não corrige junto.
Mexer em paleta, texto, hero ou seção sem pedido é **regressão, mesmo quando é melhoria**.

**3. Conclusão.** Escopo "faça tudo" = terminar tudo. Bloqueio: termina o resto e **nomeia** o
bloqueio. Entregar parcial sem dizer o que ficou de fora e por quê é falha.

**4. Recurso.** Nunca gastar API paga, cota ou chave do Matheus sem perguntar antes.

---

## 1. RELÓGIO — o que mais importa neste projeto

**Hoje: 12/08/2026. Eleição: 04/10/2026. Restam ~7 semanas e meia.**
Propaganda eleitoral concentra-se nas últimas semanas; o site precisa estar de pé **muito antes**.

| Onda | Prazo alvo | Escopo | Regra |
|---|---|---|---|
| **Onda 1 — no ar** | até **D+7** | Hero, Quem é, Bandeiras, Apoie (WhatsApp + formulário), Footer legal, OG, `/privacidade` | Sobe mesmo com Mapa da Escuta ausente |
| **Onda 2 — diferencial** | até **D+21** | Triângulo do Sul / Mapa da Escuta, Agenda, Na mídia, Galeria, Prova de movimento | Cada seção sobe quando o **conteúdo real** existir |
| **Onda 3 — operação** | até 04/10 | atualização semanal de agenda, municípios e mídia | §11 |

**Regra de decisão por silêncio.** Nos gates 🛑 de §7, se não houver resposta em **24 h úteis**:
escolha a opção mais conservadora, **registre a escolha no relatório** e siga. Site parado esperando
aprovação, numa campanha, é pior que site imperfeito no ar. Isso **não** vale para dado factual
(contrato 1) nem para conformidade legal (§6) — esses **bloqueiam**, sempre.

**Time-box do atrito produtivo:** as 3 direções de arte de §4.4 valem **um ciclo só**. Não há segunda
rodada de exploração; refino é permitido, reset não — a menos que o Matheus peça explicitamente e
escreva a lista de proibição (§4.5).

---

## 2. LEITURA OBRIGATÓRIA

### 2.1 Vault
`C:\Users\Matheus Corte\Desktop\Obsidian\` — nesta ordem:
`90 - Projetos\00-indice.md` → `Padroes\meu-estilo-de-sites.md` → `Padroes\diferenciacao-visual.md`
→ `Padroes\erros-que-a-ia-comete.md` → `Padroes\stack-padrao.md` → `Padroes\regras-de-componentes.md`
→ `Padroes\referencias-de-design.md`.

`diferenciacao-visual.md` é **o filtro**: `meu-estilo-de-sites.md` diz como o trabalho parece; o
filtro diz onde ele corre risco de parecer com o de todo mundo. Aplicar o estilo sem o filtro produz
um site correto e indistinguível.
⚠️ Nunca ler nem escrever em `Desktop\_ARQUIVO-Base-Conhecimento-Web-NAO-USAR\`.

### 2.2 Precedência
```
manual de marca real  >  vault  >  este prompt  >  suposição da IA
```
Conflito se **aponta**, nunca se resolve calado.

---

## 3. DADOS 🔒

### 3.1 O que está verificado

**Fonte: comprovante de inscrição no CNPJ — Receita Federal, emitido em 03/08/2026** ✅

| Campo | Valor |
|---|---|
| **CNPJ da campanha** | **68.345.764/0001-52** (matriz) |
| Nome empresarial | `ELEICAO 2026 MARCO ANTONIO VIEIRA DE NOVAES DEPUTADO ESTADUAL` |
| **Nome civil do candidato** | **Marco Antônio Vieira de Novaes** — "Marcão Vivácqua" é o nome de urna |
| Natureza jurídica | 409-0 — Candidato a Cargo Político Eletivo |
| CNAE | 94.92-8-00 — Atividades de organizações políticas |
| Endereço da campanha | Av. Francisco Lacerda de Aguiar, 223 — Centro — **Marataízes/ES** — CEP 29.345-000 |
| E-mail oficial | `marcaovivacqua@gmail.com` |
| Telefone | não informado no cadastro — pedir à assessoria |
| Situação cadastral | ATIVA desde 03/08/2026 |

> O documento traz o nome em caixa alta e **sem acento** (`MARCO ANTONIO VIEIRA DE NOVAES`).
> A grafia acentuada usada no site precisa de confirmação da assessoria — o rodapé legal deve bater
> com o registro.

**Fonte: definição do cliente (12/08/2026)** ✅
- **Número na urna: `36028`** — Agir (36) + 028. Exibir como cinco dígitos, sem ponto: **36028**.
- **Base territorial: Marataízes, Itapemirim e Presidente Kennedy — somente estas três.**
- **"Triângulo do Sul" é a expressão que nomeia o movimento entre essas três cidades.** Não é marca
  de terceiro: é o conceito da própria campanha. Liberado para uso.

**Fonte: pesquisa pública verificada (12/08/2026)** ✅ — ver §4.1 para o pareamento ícone → cidade.

**Fonte pública:** pré-candidato a deputado estadual pelo Agir em 2026 · agenda de pré-campanha em
formato de escuta popular · eixos declarados: infraestrutura, saúde, educação, desenvolvimento
econômico, emprego e oportunidades · eleição em 04/10/2026, turno único.

> ⚠️ O briefing original citava um encontro em **Atílio Vivácqua em 07/08/2026** e mencionava
> Cachoeiro de Itapemirim e Jerônimo Monteiro. Esses municípios estão **fora da base declarada**.
> Não publicar até a assessoria dizer se foram visitas pontuais ou informação errada.

**Fonte: arquivo do cliente, medido em 12/08/2026** (amostragem de pixels de
`ID VISUAL\ANTIGOS\TRIANGULO_DO_SUL\1500h\Ativo 26TDS.png`):

| Papel no logo | Hex |
|---|---|
| Verde-petróleo — plataforma / mar profundo | `#003C44` |
| Azul-marinho — pesca / mar | `#103C70` |
| Verde folha — agricultura | `#468429` |
| Laranja — abacaxi | `#FF8103` |
| Amarelo — coroa do abacaxi | `#FFE000` |
| Branco — contorno e negativo | `#FFFFFF` |

De `ID VISUAL\ANTIGOS\CAPA DOS DESTAQUES\IMG-20260724-WA0124(1).jpg`: azul de comunicação `#004F9E`,
fitas em `#277DB6`.

### 3.2 Taxonomia de `TODO` — nem todo buraco é igual

| Nível | Marca no código | Significado | Efeito |
|---|---|---|---|
| **T1 — bloqueia go-live** | `// TODO(T1):` | dado legal ou eleitoral ausente: nome civil, número na urna, CNPJ da campanha | **o site não sobe** |
| **T2 — bloqueia a seção** | `// TODO(T2):` | conteúdo real da seção ausente: municípios visitados, agenda, manchete com URL | a seção **não renderiza**; nada de placeholder bonito |
| **T3 — refino** | `// TODO(T3):` | melhoria conhecida sem impedimento | entra no relatório, não trava nada |

Todo `TODO` carrega: o que falta, de quem depende, e o que acontece se não vier.

### 3.3 A confirmar com a assessoria — nada disso vai ao ar sem checagem
- [x] ~~**T1** CNPJ da campanha~~ → **68.345.764/0001-52** (§3.1)
- [x] ~~**T1** Nome civil completo~~ → **Marco Antônio Vieira de Novaes** (§3.1) — falta só confirmar a acentuação
- [x] ~~**T2** Base territorial~~ → **Marataízes, Itapemirim, Presidente Kennedy** (§3.1)
- [x] ~~**T1** Número na urna~~ → **36028** (§3.1). **Nenhum bloqueador T1 em aberto.**
- [ ] **T3** Conferência cruzada do `36028` no **DivulgaCand/TSE** antes do go-live — número errado no ar é desinformação eleitoral, e uma checagem de dois minutos elimina o risco
- [ ] **T2** Histórico eleitoral — há registro de candidaturas a estadual em 2018/PTB e 2022/Podemos; com o nome civil em mãos, checar no DivulgaCand se é a mesma pessoa antes de citar qualquer histórico
- [ ] **T2** Telefone oficial da campanha (o cadastro do CNPJ não traz)
- [ ] **T2** Encontros em Atílio Vivácqua / Cachoeiro / Jerônimo Monteiro — visita pontual fora da base, ou informação errada do briefing?
- [ ] **T2** Registro de escuta por cidade e por distrito, com data (alimenta o Mapa da Escuta — ver §8.4)
- [ ] **T2** Números de pré-campanha (municípios, encontros, lideranças)
- [ ] **T2** Cargos, mandatos, atuação profissional; realizações com data e local
- [ ] **T2** Depoimentos **com autorização escrita** de uso de imagem e nome
- [ ] **T3** Slogan — se não houver, propor 3 e aguardar

---

## 4. IDENTIDADE

### 4.1 O elemento assinatura já existe — e agora ele fecha ✅
O logo do **Triângulo do Sul** é composto de **três** triângulos de canto arredondado que formam um
triângulo maior, cada um carregando um símbolo econômico: **abacaxi (agricultura)**, **peixe
(pesca)** e **plataforma (petróleo)**.

**Com a base territorial confirmada, a leitura fecha:** três lóbulos = **três cidades**. Marataízes,
Itapemirim e Presidente Kennedy. "Triângulo do Sul" é a expressão que nomeia o movimento entre elas.
**O logo não ilustra o território — ele É o território.**

Consequência de projeto: o Mapa da Escuta **não precisa de mapa**. O símbolo já é o mapa. Isso
elimina o SVG de recorte geográfico, o custo dele e o risco de desenhar fronteira errada.
Ver `design-system-v3.md` §5.

**Pareamento lóbulo → cidade — resolvido com fonte pública** ✅

| Lóbulo | Cor | Símbolo | Cidade | Evidência |
|---|---|---|---|---|
| Superior | `#468429` verde | abacaxi | **Marataízes** | "capital estadual do abacaxi": **58%** da produção do ES, 25,9 mi de frutos em 1.414 ha, 750+ propriedades (68% dos estabelecimentos produtores do estado) |
| Inferior esquerdo | `#103C70` marinho | peixe sobre ondas | **Itapemirim** | Porto de **Itaipava** — maior polo pesqueiro do ES, maior produção de atum do estado, 650 embarcações e 4.100 pescadores registrados |
| Inferior direito | `#003C44` petróleo | plataforma sobre ondas | **Presidente Kennedy** | maior arrecadador de royalties de petróleo do ES; maior reserva marítima do estado (~1,9 bi de barris); R$ 5,7 bi em royalties entre 1999 e 2024 |

> ⚠️ **A "leitura natural" estava errada.** A hipótese anterior (pesca → Marataízes, agricultura →
> Itapemirim) inverte duas das três. Marataízes é abacaxi, Itapemirim é pesca. Registrado aqui de
> propósito: em dado de território, o palpite plausível é o que engana.

**Ordem geográfica (para a lista de fallback), norte → sul:**
**Itapemirim → Marataízes → Presidente Kennedy.** Marataízes faz divisa com Itapemirim ao norte e
Presidente Kennedy ao sul; Presidente Kennedy é o município mais meridional do ES.

> **O arranjo do logo NÃO é geográfico.** Marataízes está no topo do símbolo e no meio do mapa. O
> triângulo representa o vínculo entre as três cidades, não a posição delas — o site não pode
> sugerir projeção cartográfica. Reforça o que já está em §4.1: sem linha de costa, sem escala, sem
> rosa dos ventos.

### 4.2 Titularidade — resolvida ✅
Confirmado pelo cliente em 12/08/2026: "Triângulo do Sul" é a expressão do próprio movimento da
campanha entre as três cidades, não marca de terceiro. **Liberado o uso do logotipo, dos ícones e
da geometria derivada.** Segue valendo a disciplina: o triângulo entra onde carrega informação, não
como enfeite.

### 4.3 Base territorial — resolvida ✅
**Marataízes · Itapemirim · Presidente Kennedy — somente estas três.** Nenhum outro município entra
no mapa, na agenda ou na copy sem autorização expressa.

**Consequência forte:** com três cidades, a escuta não se prova por **extensão** (quantos municípios
visitei), e sim por **profundidade** (quantas vezes voltei, em quais bairros e distritos, o que
mudou entre uma visita e outra). O modelo de conteúdo muda: a unidade não é o município — é o
**registro de escuta**, com cidade, localidade, data e o que foi ouvido. Ver §8.3.

### 4.4 Três direções de arte — eixo declarado, um ciclo só
Regra da casa: *variação sem eixo declarado não é variação*.

**NÃO varia:** paleta (é a marca), tipografia de corpo, conteúdo, arquitetura de informação,
elemento assinatura.
**VARIA:** estrutura da grade, densidade, hierarquia do hero, uso do triângulo, ritmo vertical,
tratamento de foto.

Cada direção entrega: wireframe em texto · o que ganha · o que perde · **lista de proibições** (§4.5).
Eixos sugeridos (decidir, não copiar os três): *cartaz de rua* (tipografia como imagem, número
gigante, grade assimétrica, foto sangrando) · *prestação de contas* (grade 8/4 com índice lateral,
dado antes de retórica) · *percurso* (a página é o roteiro da escuta; o triângulo marca o progresso).

### 4.5 Lista de proibições — obrigatória
Toda direção fecha declarando o que **não** vai usar. Sem proibição escrita, o default do treino
vence. Forma: "sem card arredondado, sem ícone de biblioteca, sem foto de banco, sem gradiente, sem
sombra difusa, sem grade de cards iguais".

### 4.6 Anti-padrões 🚫
**Visual:** creme + serifada + terracota · preto + verde-ácido · gradiente roxo/azul · três cards
iguais com número grande e ícone genérico · `01/02/03` sem sequência real · glassmorphism, blob,
blur atrás de card.
**Campanha:** faixa diagonal com estrelas · foto recortada com sombra dura sobre gradiente · punho
cerrado · ilustração de "povo unido".
**Código:** `Inter` no corpo por inércia (é o tell nº 1 de site gerado por IA — só com justificativa
escrita) · o mesmo `.reveal` com o mesmo timing em tudo · cards de tamanho uniforme · header com
`backdrop-filter` · registry mantendo a cara do kit.
**Copy:** "juntos por um futuro melhor" · "saiba mais" · "transformando vidas" · tríade adjetiva
("compromisso, transparência e trabalho") · emoji em heading.

> ⚠️ **Não confundir marca com clichê.** Azul-marinho + amarelo/laranja **é a identidade real** —
> não está proibido. Proibida é a **execução** clichê: estrela, faixa diagonal, degradê azul→amarelo,
> CTA com gradiente.

**Teste final de unicidade:** tire logo, nome e fotos. Se o que sobrar puder ser o site de outro
candidato qualquer, o design falhou — refaça o elemento assinatura.

---

## 5. MATERIAL DO CLIENTE

### 5.1 Onde está (localizado em 12/08/2026)
`C:\Users\Matheus Corte\Downloads\`

| Arquivo | Conteúdo |
|---|---|
| `ID VISUAL-20260812T151207Z-1-00{1..5}.zip` | identidade — 5 partes |
| └ `ID VISUAL\ID CAMPANHA\idmarcão.pdf` | **manual de marca** |
| └ `ID VISUAL\ID CAMPANHA\PSD\` | `feed`, `postsstories`, `bandeira`, `lambe lambe`, `destaque`, `apresentação`, `dia dos pais` |
| └ `ID VISUAL\ID CAMPANHA\Fotos\IMAGEM-CAMPANHA-MARCAO_2.psb` | foto oficial tratada |
| └ `ID VISUAL\ID CAMPANHA\Videos\` | `Marcão 16X9 FULL HD.mp4`, `Jingle 3 Marcão Vídeo.mp4`, `MARCÃO FECHAMENTO COM #.mp4` |
| └ `ID VISUAL\ID CAMPANHA\Impressos\` | santinho, bandeira, adesivo, citru, windbanner, vitrines |
| └ `ID VISUAL\ANTIGOS\TRIANGULO_DO_SUL\1500h\Ativo 26TDS.png` | **logo** |
| `MIDIAS-20260812T15*.zip` | fotos e vídeos de campo |
| `MARCO VIVACQUA.zip` | pacote geral — **estava travado por outro processo em 12/08; reconferir** |
| `sites-campanha-codigo.txt` | referências de código (§13) |

### 5.2 Protocolo
Descompactar → listar → classificar em `arquivo | categoria | uso | decisão` → **apresentar antes de
usar**. Não classificável → perguntar, não descartar. Material que pareça de outro cliente ou
pessoal → **não abrir**, sinalizar e seguir. Nada entra em `public/` sem otimização.

### 5.3 Plano B por tipo de asset
| Problema | Plano B |
|---|---|
| Logo só em PNG/PSD, sem vetor | redesenhar a **geometria** do triângulo em SVG próprio (formas simples) e usar o PNG só onde o logotipo exato for exigido; pedir o `.ai`/`.svg` à assessoria |
| `.psb` gigante / não abre | exportar chapado em PNG na maior resolução disponível e derivar AVIF; não tentar ler camada |
| Manual em PDF sem texto extraível | ler visualmente, anotar os valores medidos **com o método** ("amostragem de pixel", não "hex do manual") |
| Vídeo > 5 MB | fora do `public/`; hospedar externo e embedar com `poster` |
| Foto sem autorização clara de uso | não publica |
| Tratamento generativo em qualquer foto | **sinalizar na peça** ("imagem alterada por IA") |

Otimização: AVIF/WebP · hero em AVIF com `fetchpriority="high"` e variante mobile por `media` ·
fontes self-hosted com `preload` · `loading="lazy"` só abaixo da dobra.

---

## 6. CONFORMIDADE ELEITORAL E LGPD 🔒 — bloqueia go-live

**Rodapé obrigatório — dados reais, já disponíveis:**

> **Marco Antônio Vieira de Novaes — "Marcão Vivácqua"**
> Candidato a Deputado Estadual — Espírito Santo · Agir · **36028**
> Este site é de responsabilidade da campanha **ELEIÇÃO 2026 MARCO ANTONIO VIEIRA DE NOVAES
> DEPUTADO ESTADUAL** — **CNPJ 68.345.764/0001-52**
> Av. Francisco Lacerda de Aguiar, 223 — Centro — Marataízes/ES — CEP 29.345-000
> `marcaovivacqua@gmail.com`

**O rodapé renderiza completo.** Nenhum `TODO(T1)` em aberto. Nome, CNPJ e endereço saem de
`content/candidato.ts` com `fonte: "CNPJ Receita Federal, emitido 03/08/2026"`; o número com
`fonte: "campanha, 12/08/2026"` — e conferido no DivulgaCand antes do go-live.

**Formulário:** checkbox de consentimento **não pré-marcado**, com finalidade explícita · link para
`/privacidade` · dado pessoal **nunca** em querystring nem em log · retenção declarada · canal para
revogar consentimento.

**Analytics:** GA4 e Meta Pixel **só depois** do consentimento, com recusa possível e persistida.

**Imagem de terceiro:** foto com rosto identificável de apoiador exige autorização. Sem autorização,
não publica — vale para galeria, mapa e depoimento.

> ⚠️ **Validação do advogado eleitoral antes do go-live.** Regras de propaganda na internet,
> impulsionamento e prestação de contas mudam a cada ciclo. Não confie no que a IA — nem o que este
> prompt — acha que é a regra. Este bloco é ponto de partida para a revisão jurídica, não substituto.

---

## 7. EXECUÇÃO — etapas, gates e produto de cada etapa

| # | Etapa | Produto | Gate |
|---|---|---|---|
| 0 | Vault lida · assets descompactados e classificados · conflitos §4.2 e §4.3 apontados | resumo de decisões + tabela de arquivos + lacunas | 🛑 24 h |
| 1 | Referências: 3 categorias diferentes + **1 de fora do web design** | 3–5 refs com URL, o que aproveitar e **qual clichê carrega** | 🛑 24 h |
| 2 | **3 direções de arte** com eixo declarado + proibições | wireframes em texto | 🛑 24 h |
| 3 | Tokens e primitivos (§8.1) | `globals.css` + amostra visual | 🛑 24 h |
| 4 | **Onda 1** — Hero, Quem é, Bandeiras, Apoie, Footer, OG, `/privacidade` | site no ar | segue |
| 5 | **Onda 2** — Mapa da Escuta, Agenda, Mídia, Galeria, Prova | seção por seção, só com conteúdo real | segue |
| 6 | Auditoria completa (§9) | log dos comandos e das medições | segue |
| 7 | Relatório final | `TODO` por nível, pendências, o que ficou de fora e por quê | fim |

Gate sem resposta em 24 h úteis → opção conservadora + registro (§1). **Não vale para T1 nem §6.**

**Disciplina de commit:** um commit por etapa, mensagem curta em pt-BR descrevendo o que mudou.
Antes de qualquer refactor amplo, commit do estado que funciona. Mensagem multilinha vai em arquivo
com `git commit -F`, nunca em here-string do PowerShell com aspas internas — o argumento quebra, o
commit falha e o push seguinte diz "Everything up-to-date" (falha silenciosa).
**Reset de layout é projeto novo:** nova grade, novo hero, novas transições + lista escrita do que
está proibido de voltar. Sem a lista, o modelo volta ao mesmo atrator.

---

## 8. CONSTRUÇÃO

### 8.1 Stack e arquitetura de CSS
**Trilha A** (`stack-padrao.md`): Next.js App Router · TypeScript `strict` · Tailwind 4
(`@theme inline`) · `next/font` self-hosted · `next/image`.

**Versões:** `npm view <pkg> version` e `dist-tags` **na hora**; sem `beta`/`rc`/`canary`.
"Última estável" = "última estável que o resto da stack aceita" — **provar com `build` E `lint`**.
Combinação já validada na casa: `typescript 6.0.3` (a 7.x quebra o `typescript-eslint`),
`eslint 9.39.5`. Fixar versão antiga exige justificativa escrita na nota do projeto.

**Proibido pela vault:** shadcn/Radix/lucide · **react-hook-form + zod** · clsx/tailwind-merge ·
CSS-in-JS · MUI/Chakra · jQuery · Swiper · `useEffect` para trabalho de servidor.
Ícones = SVG próprio. `cn()` caseiro em `lib/utils.ts`.

**Camadas (requisito, não estética):** regra sem camada vence qualquer camada, inclusive `utilities`.
- elemento (`a`, `p`, `h1`) → `@layer base`
- primitivo (`.btn`, `.shell`, `.stack-md`) → `@layer components`
- **token e todos os overrides, inclusive dentro de media query → FORA de camada, juntos**

**Colisão de nome:** conferir se o nome já é utilitário do Tailwind 4 antes de criar a classe.
`col-7`, `overline`, `table`, `grid` existem — e já causaram coluna em `left: 582px` numa tela de
402 px e uma linha fina desenhada acima de cada eyebrow. Prefixar (`mv-`).

**Token de tipo e cor:**
- `clamp()` para padding e ritmo de seção: sim. Para **título**: não — o viewport não sabe quantas
  letras o título tem. Título mede a **coluna** (`cqi`) com teto derivado da contagem de caracteres
  e `text-wrap: balance`.
- **Raio é token de componente**, não da marca: botão ≠ card ≠ seção ≠ moldura.
- **`--c-on-primary` é calculado por contraste WCAG** entre as cores já declaradas, nunca suposto.
- **Overline uma vez, no hero.** Seções levam kicker de papel, que cala quando repetiria o título.
- Textura: fibra é **direcional** — uma camada no sentido do papel + `feTurbulence`. Dois gradientes
  cruzados dão papel milimetrado.

### 8.2 Estrutura de pastas
```
src/
  app/  layout.tsx · page.tsx · opengraph-image.tsx · privacidade/page.tsx
        sitemap.ts · robots.ts · api/apoiador/route.ts · globals.css
  components/  sections/ (hero, prova, sobre, bandeiras, regiao, agenda, midia, galeria, apoie, footer)
               triangulo/ (svg + estados)
  content/  candidato.ts · bandeiras.ts · agenda.ts · municipios.ts · midia.ts · depoimentos.ts
  lib/  utils.ts (cn) · analytics.ts
public/  images/ · videos/ · brand/
```
Arquivos `kebab-case.tsx`, **named export**; default só onde o Next exige.
**Classes em inglês técnico, conteúdo e `aria-label` em pt-BR.**

### 8.3 Modelo de conteúdo — nada de copy dentro de componente
```ts
// São TRÊS cidades. A unidade de conteúdo é o REGISTRO DE ESCUTA, não o município —
// a prova aqui é profundidade (quantas vezes voltei, em qual bairro), não extensão.
export type Cidade = 'marataizes' | 'itapemirim' | 'presidente-kennedy'

export interface Escuta {
  id: string
  cidade: Cidade
  localidade: string           // bairro, distrito, comunidade — é aqui que mora a prova
  data: string                 // ISO, obrigatório
  ouvimos: string[]            // demanda concreta, na voz do morador
  foto?: { src: string; alt: string; credito?: string; autorizado: boolean }
  fonte: string                // obrigatório
}

export interface CidadeInfo {
  slug: Cidade; nome: string
  simbolo: 'agricultura' | 'pesca' | 'petroleo'   // Marataízes | Itapemirim | Presidente Kennedy
  lobulo: 'topo' | 'inferior-esquerdo' | 'inferior-direito'
  ordemGeografica: 1 | 2 | 3   // norte→sul: Itapemirim, Marataízes, Presidente Kennedy
  escutas: Escuta[]            // vazio => lóbulo vazado, sem clique, texto honesto
}
export interface Bandeira {
  slug: string; titulo: string            // voz de eleitor, não peça legislativa
  problema: string; compromisso: string | null   // null => TODO(T2), não renderiza
  municipiosCitados: string[]
}
export interface Evento {
  id: string; inicio: string; fim?: string      // ISO com fuso
  titulo: string; local: string; endereco: string; municipio: string
  mapaUrl?: string; confirmado: boolean
}
// midia.ts    { veiculo, manchete, url, data }        url obrigatória
// depoimentos.ts { nome, cidade, texto, autorizacaoEm }  sem autorizacaoEm => não renderiza
```
**Todo dado factual carrega `fonte`.** Componente que receber dado sem fonte não renderiza: falha
visível em dev, silêncio em prod.

### 8.4 Arquitetura da página e "pronto" por seção

| Seção | Pronto quando |
|---|---|
| **Header** | WhatsApp visível em qualquer scroll; mobile com barra inferior fixa; **sem hambúrguer escondendo a conversão**; sem `backdrop-filter` |
| **Hero** | nome + **número na urna** com hierarquia brutal (o eleitor precisa decorar o número); frase de posicionamento, não slogan; countdown para 04/10; CTA WhatsApp + "Ver as propostas"; partido e cargo legíveis; **zero CLS**; LCP identificado e pré-carregado |
| **Prova de movimento** | 3 números **confirmados** valem mais que 4 com um inventado; sem número confirmado, a seção não existe |
| **Quem é** | foto forte + origem/trajetória/motivação em 1ª pessoa; sem currículo em bullet |
| **Bandeiras** | cada pilar tem problema **concreto e localizado** → compromisso; sem compromisso = `TODO(T2)`, não renderiza |
| **⭐ Triângulo do Sul — Mapa da Escuta** | **o próprio logo é o mapa**: três lóbulos = três cidades. Sem SVG geográfico, sem Google Maps. Cada lóbulo é um `<button>` real com área ≥ 48 px, navegável por teclado, abrindo os **registros de escuta** daquela cidade (localidade + data + o que foi ouvido). **Fallback em lista sempre no DOM.** Cidade sem registro = lóbulo vazado, sem clique, com texto honesto ("ainda não temos registro publicado aqui"). Nunca inventar localidade nem data |
| **Agenda** | data, hora, local, município, `.ics`, "como chegar"; evento passado some sozinho |
| **Na mídia** | só o que existe **com URL**; link externo com `rel` correto |
| **Galeria** | scroll-snap nativo; `poster`; sem autoplay com som; foto de terceiro só com autorização |
| **Apoie** | grupo de WhatsApp · formulário (nome, WhatsApp, município, como ajudar, LGPD não pré-marcado) · compartilhar com material pronto pra story; 3 estados testados; honeypot; `aria-live` no erro; texto em voz ativa ("Enviar meu cadastro" → "Cadastro enviado") |
| **Footer** | bloco legal §6 completo; redes corretas |

Redes: `instagram.com/marcao_vivacqua/` · `facebook.com/marcovivacquaoficial` · `instagram.com/triangulodosul/`

**Formulário da casa:** `useState` por campo + validação simples + honeypot + entrega com fallback.
Sem react-hook-form, sem zod.

### 8.5 Movimento — orçamento fechado
Máximo **3 comportamentos na página inteira**, com timing diferente por papel:
1. entrada do hero, orquestrada uma vez (~600 ms);
2. estado de interação (CTA, input, botão de município) — onde comunica estado;
3. **um** reveal estrutural, só na virada de assunto.

Proibido: parallax, contador animado em tudo, tipografia cinética, carrossel 3D, `.reveal` global.
`prefers-reduced-motion: reduce` zera 1 e 3 e mantém 2.

### 8.6 Copy
Direta, quente, de conversa de calçada. Frase curta, verbo ativo, **nome de lugar sempre que
possível** — "asfalto que falta em X" bate mais que "melhoria da malha viária". CTA diz o que
acontece: "Falar com o Marcão no WhatsApp". Estado vazio e erro dão direção, não desculpa. Português
do interior capixaba, sem gíria forçada de agência.

---

## 9. PERFORMANCE — alvo, orçamento e medição

### 9.1 Aparelho de referência (o alvo real, não o ideal)
Android de entrada, tela **360×640**, CPU throttling **4×**, rede **4G lento** (≈1,6 Mbps, 150 ms
RTT), aba anônima. É o aparelho do eleitor que chega pela bio do Instagram.

### 9.2 Orçamento por seção
| Item | Teto |
|---|---|
| HTML servido | **60 kb** |
| JS inicial (gzip) | **120 kb** |
| Hero (imagem AVIF mobile) | **90 kb** |
| Fontes (total, self-hosted, subset latin) | **80 kb** |
| Mapa da Escuta (SVG + lógica) | **25 kb** |
| Galeria acima da dobra | **0 kb** (tudo lazy) |
| CSS total | **40 kb** |

Estourou o teto? A seção não sobe até caber. Orçamento sem consequência não é orçamento.

### 9.3 Metas
Lighthouse mobile ≥ **95** em Performance, Acessibilidade, Best Practices e SEO · **LCP < 2,0 s** ·
**CLS 0** no hero · INP < 200 ms.

### 9.4 Protocolo de verificação — e o que invalida cada medição
| O que | Como | O que invalida |
|---|---|---|
| Build | `npm run build` **e** `npm run lint` | build verde sozinho não prova a major |
| Lighthouse | perfil mobile, throttling de §9.1, aba anônima | rodar em desktop ou sem throttling |
| Layout | screenshot com `reducedMotion: "reduce"` | `animation-timeline: view()` sai `opacity: 0` e a página parece vazia |
| Imagem | rolar a página inteira e esperar `decode()` antes de capturar | `loading="lazy"` deixa caixa branca no lugar da foto |
| Conteúdo | **olhar** a tela | teste que **conta** elementos passa com título ilegível sobre foto |
| Teclado | percorrer tudo só com Tab/Enter/Esc | conferir só o `:focus-visible` no CSS |
| 360 px | DevTools **e** um Android real | só o emulador |
| OG | abrir o link num WhatsApp de verdade | validador do Facebook sozinho |

**Contar não é olhar. Verde não é prova.** Quando a observação não bater com a realidade, desconfie
do instrumento antes de desconfiar do código — e explique o erro antes de descartá-lo.

---

## 10. ACESSIBILIDADE CALIBRADA PARA ESTE PÚBLICO

Não é "AA e pronto". O leitor tem 30–65 anos, tela pequena e às vezes sol na cara.

- **Corpo mínimo 17 px**; 18 px na bio e nas bandeiras. Nada de 14 px em texto corrido.
- **Alvo de toque ≥ 48×48 px** com 8 px de folga — inclusive nos botões de município do mapa.
- **Contraste ≥ 4.5:1** em texto e **≥ 3:1** em ícone e borda de campo; medir, não estimar.
  Texto sobre foto só com camada de legibilidade sólida ou máscara, nunca só sombra.
- **Nunca comunicar estado só por cor** — município visitado x não visitado precisa de forma ou
  rótulo, não só de cinza.
- Skip-link no topo · `aria-label` em pt-BR · `aria-expanded`/`aria-controls` onde couber ·
  `aria-live="polite"` em erro de formulário · `:focus-visible` estilizado e **sempre visível** ·
  `alt` descritivo de verdade (quem, onde, quando).
- Zoom até 200% sem quebra horizontal.
- Formulário: rótulo visível (não só placeholder), teclado numérico no WhatsApp (`inputmode="tel"`),
  erro que diz o que fazer.

---

## 11. OPERAÇÃO — o site é produto vivo até 04/10

| Rotina | Frequência | Como |
|---|---|---|
| Agenda | semanal | editar `content/agenda.ts`; passado some sozinho |
| Registros de escuta | após cada visita | novo item em `escutas[]`: cidade, **localidade**, data, o que foi ouvido, `fonte`; foto só com autorização. São 3 cidades — o que cresce é a profundidade |
| Na mídia | quando sair matéria | só com URL; conferir link morto uma vez por semana |
| Copy | sob demanda | tudo em `content/`; **nenhuma alteração de texto exige tocar em componente** |
| Números de prova | quando a assessoria confirmar | nunca arredondar para cima |
| Formulário | diário | conferir entrega e fallback; lead perdido em campanha não volta |

**Entrega para quem não é dev:** cada arquivo de `content/` abre com um comentário em pt-BR
explicando o que editar e o que não tocar. Se o Matheus quiser, avaliar depois um CMS leve — mas
**não na Onda 1**.

---

## 12. RISCOS

| Risco | Impacto | Mitigação |
|---|---|---|
| Número na urna errado no site | crítico — desinformação eleitoral | `36028` informado pela campanha; **conferência cruzada no DivulgaCand antes do go-live** (§3.3) |
| Histórico de homônimo atribuído ao candidato | alto — dado falso publicado | com o nome civil conhecido, checar 2018/PTB e 2022/Podemos no TSE antes de citar |
| ~~Ícone pareado com a cidade errada~~ | — | ✅ resolvido com fonte pública em §4.1. Marataízes = abacaxi, Itapemirim = pesca, Kennedy = petróleo |
| Sugerir que o triângulo é um mapa real | médio — desinformação geográfica | o arranjo é conceitual; sem costa, escala ou rosa dos ventos (§4.1) |
| Município fora da base entrar na copy | médio — descaracteriza o Triângulo do Sul | só Marataízes, Itapemirim e Presidente Kennedy; Atílio Vivácqua/Cachoeiro/Jerônimo Monteiro só com autorização expressa |
| Escuta rasa em 3 cidades | alto — 3 municípios parecem pouco se a prova for por extensão | a prova é por **profundidade**: localidade, repetição de visita, o que mudou (§4.3) |
| Foto de apoiador sem autorização | alto — LGPD e imagem | campo `autorizado` obrigatório; sem ele não renderiza |
| Conteúdo da Onda 2 não chegar | médio | seções não renderizam; site da Onda 1 continua íntegro |
| Vídeo pesado no `public/` | médio — LCP e banda | §5.3 |
| Analytics disparando antes do consentimento | alto — LGPD | consentimento primeiro, sempre |
| Modelo "melhorar" o que não foi pedido | médio — retrabalho e regressão | contrato 2; commit por etapa; reverter é barato |
| Prazo estourar | crítico | §1: ondas + decisão por silêncio |

---

## 13. REFERÊNCIAS DE CÓDIGO

`sites-campanha-codigo.txt` (obama.org, berniesanders.com, PoliEngine, marinasilva.org.br,
nikolasferreira.com.br). **Extrair princípio, não pixel** — copiar referência é exatamente como o
site vira template.

**Positiva — nikolasferreira.com.br.** Astro, **41 kB de HTML servido**, quatro seções, nav com dois
itens. O que faz funcionar não é a estética: é o elemento assinatura ser **prestação de contas
verificável** — mapa de emendas por município, "para onde foi cada real". Marcão é pré-candidato sem
mandato: **não existe emenda para mapear**, e fingir que existe seria mentira. O equivalente honesto
é o **Mapa da Escuta** — o que foi ouvido, onde, quando. Compromisso registrado, não obra entregue.
Copiar como princípio: números duros sem adjetivo · título de card em voz de eleitor ("Chega de
repetir exame no SUS!") · carrossel com scroll-snap nativo · fonte self-hosted com `preload` · hero
em AVIF com `media` + `fetchpriority="high"` separado desktop/mobile · skip-link e `sr-only` ·
aviso visível quando a imagem foi alterada por IA.
**Não copiar:** a paleta dele, quatro famílias tipográficas, o mapa em si.

**Negativa — marinasilva.org.br.** WordPress + Divi, **208 kB para entregar cinco parágrafos**;
"Escolha uma Página" e "Projetado por Elegant Themes" vazando no HTML; "Trajetória de Sucesso" com
dois parágrafos genéricos; bilinguismo pela metade; **zero elemento próprio — é só trocar a foto**.
Aproveitar apenas a arquitetura de conteúdo (biografia, notícias, grupos, contato). A execução é o
contra-exemplo.

---

## 14. CRITÉRIOS DE ACEITE — go-live

**Bloqueadores (T1).** Nenhum `TODO(T1)` aberto · rodapé legal completo com CNPJ `68.345.764/0001-52`
· número **36028** conferido no DivulgaCand · consentimento antes de qualquer analytics ·
`/privacidade` no ar · revisão do advogado eleitoral registrada.

**Qualidade.** `build` e `lint` verdes, zero `any` · Lighthouse mobile ≥ 95 nas quatro métricas ·
LCP < 2,0 s e CLS 0 no hero no aparelho de §9.1 · orçamento de §9.2 respeitado seção a seção ·
100% navegável por teclado com foco visível · corpo ≥ 17 px e alvo ≥ 48 px · contraste medido ·
OG conferida num WhatsApp real · legível em 360 px num Android real.

**Identidade.** Direção escolhida com eixo declarado e lista de proibições respeitada · nenhum item
de §4.6 presente · **teste de unicidade**: sem logo, nome e fotos, ainda não pode ser o site de
outro candidato.

**Conteúdo.** Zero copy hardcoded · todo dado factual com `fonte` · nada fora de §3 · seção sem
conteúdo real não renderiza (nada de placeholder bonito).

**Relatório final.** `TODO` agrupados por nível com dono e consequência · o que ficou de fora e por
quê · log das medições · lista das referências escolhidas com URL, para registrar na nota do projeto
(`/doc-projeto` → `site-marcao-vivacqua.md`, com atualização do `00-indice.md`).
