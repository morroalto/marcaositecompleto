# REVISÃO CRÍTICA — 10 personas
## Marcão Vivacqua 2026 · landing de campanha

**Feita em 12/08/2026, 14:30.** Base: `docs/*.md`, `prototipo/*` no estado de 14:24:45, e — pela
primeira vez — o **manual de marca `idmarcão.pdf` lido de verdade**, página por página.

> ⚠️ **Alvo em movimento.** A outra sessão estava reescrevendo o protótipo **enquanto esta revisão
> era feita**: `styles.css` gravado 14:22:53, `index.html` 14:24:45, `app.js` ainda em 14:05:49.
> Os achados de código valem para esse instante. Os achados de estratégia e de marca valem sempre.

---

## 0. O QUE DESTRAVOU: o manual foi lido

`design-system-v3.md` §17.2 e `00-indice.md` §Pendências 5 registram: *"`idmarcão.pdf` não foi lido —
falta renderizador de PDF nesta máquina"*, com a regra escrita ao lado: **"se ele travar hex ou
tipografia diferentes do medido, o manual ganha"**. `prompt-v3.md` §2.2 fixa a precedência:

```
manual de marca real  >  vault  >  este prompt  >  suposição da IA
```

O PDF são **13 páginas, cada uma uma imagem de 1440×810** — nenhum texto extraível. Por isso o
extrator falhou. Rasterizei as 13 páginas e li visualmente. Estão em
[fontes/manual-marca/paginas/](../fontes/manual-marca/paginas/).

**O manual ganha em oito pontos. E ele contradiz o design system justamente no eixo que o design
system chamava de "a decisão mais importante deste sistema".**

| # | `design-system-v3.md` / `prompt-v3.md` dizem | O manual diz | Página |
|---|---|---|---|
| 1 | Número **`36028`, sem ponto**. "36.028 no site ensina a coisa errada". **"Não separar visualmente `36` de `028`"** (§3.4) | **`36.028` com ponto, sempre** — e o conceito **é** separar: caixa verde `36` = o partido, caixa laranja `028` = o DDD do Sul | p. 1, 3, 8, 9, 10, 12, 13 |
| 2 | Slogan **"Unidos pelo que é nosso"** (LEIA.md) | **"Um novo Marco para o Sul"** + hashtag **`#agoraéMARCÃO!`** | p. 1, 6, 13 |
| 3 | Território: **"Marataízes, Itapemirim e Presidente Kennedy — somente estas três"** (§4.3) | **Nove municípios do DDD 028**: Cachoeiro, Marataízes, Itapemirim, Kennedy, Piúma, Castelo, Muqui, Alegre, Guaçuí — *"o código que identifica a região inteira"* | p. 3 |
| 4 | Conceito assinatura: **Triângulo da Escuta / "o logo É o mapa"** (§5) | Conceito é **"marco" em três sentidos**: o nome, o divisor (marco histórico), a referência (marco de fronteira) | p. 2 |
| 5 | Paleta medida por pixel: `#003C44 #103C70 #468429 #FF8103 #FFE000` | Paleta oficial: **`#003B44 #12406F #45872C #FF7A00 #FFD400`** com papel escrito para cada uma | p. 4 |
| 6 | Marca = triângulo de três lóbulos | Marca = **lockup tipográfico** MARCÃO / VIVACQUA + **barra tricolor** (verde·laranja·amarelo) + 36.028. Cinco versões de cor | p. 8 |
| 7 | "**Sem gradiente, sem sombra dura, sem contorno duplo**" (§3.4, §13) | A assinatura visual **é** contorno branco + sombra dura sobre gradiente verde→petróleo→marinho | p. 1, 2, 3, 5 |
| 8 | "**Tema claro, único.** A marca é construída sobre branco" (§4.4) | Fundo dominante é o **petróleo escuro**; `#003B44` é descrito como *"base institucional, fundo dominante"* | p. 4 |

### O que isso significa, sem rodeio

O V1→V2→V3 é um raciocínio de qualidade alta construído sobre a **marca errada**. O "Triângulo do
Sul" que virou o elemento assinatura é a identidade da **pré-campanha** — o movimento que originou a
candidatura, presente nas camisetas das fotos de acervo e nas pastas `ID VISUAL/ANTIGOS/`. A campanha
oficial tem outra marca, outro conceito e outro território, e ela está em `ID VISUAL/ID CAMPANHA/`.

Isso não invalida o trabalho: o rigor factual (CNPJ, endereço, pareamento cidade→economia) está
correto e confirmado — reli o comprovante da Receita, bate integralmente. O que precisa mudar é a
camada de identidade, e ela é a camada que a página inteira veste.

**O protótipo atual já corrigiu boa parte disso sozinho.** Os documentos, não. Hoje `00-indice.md`,
`design-system-v3.md`, `prompt-v3.md` e `prototipo/LEIA.md` descrevem um site que não é mais o que
está na pasta — e essa é a dívida mais cara aqui, porque é a que faz o próximo agente reintroduzir
o erro.

---

## 1. AS 10 PERSONAS

Cada uma olha de um lugar. Veredito no topo, achado concreto embaixo, com arquivo e linha.

---

### 👵 1. Dona Marlene, 62 anos, Marataízes — a eleitora que decide
*Moto G de 2021, 360 px, 4G que oscila, lê a página no sol esperando o ônibus. Óculos de perto na bolsa.*

> **Veredito: reprova por legibilidade.** "A cor tá bonita, mas essa letrinha eu não leio."

O sistema declarou **corpo mínimo de 17 px** como restrição de projeto, não como checklist
(`design-system-v3.md` §2). O protótipo viola isso em toda seção escura:

| Onde | Tamanho | Regra |
|---|---|---|
| `index.html:173` texto sob as cidades | `.9375rem` = **15 px** | piso é 17 px |
| `index.html:260` nota do triângulo | 15 px | idem |
| `index.html:322, 375, 379, 383` cards e canais | 15 px | idem |
| `index.html:421` aviso do formulário | `.875rem` = **14 px** | idem |
| `styles.css:319` `.mv-legal` (rodapé legal inteiro) | 14 px | idem |
| `styles.css:262` `.mv-lobo-btn small` — rótulos "Abacaxi/Pesca/Petróleo" | `.625rem` = **10 px**, caixa alta, `letter-spacing .1em`, `opacity .75` | é o pior texto da página |

O contraste em si está OK quase sempre (medi: `#BCD2CB` sobre petróleo dá **7,73:1**; o rodapé legal
dá **7,12:1**). **O problema não é contraste, é tamanho** — e nenhum teste de contraste pega isso.

Os rótulos de 10 px do triângulo somam os dois defeitos: sobre o lóbulo verde `#45872C` o branco a
85% dá **3,67:1**, que reprova AA para texto normal em qualquer tamanho.

**O que fazer:** subir o piso global para 17 px e tratar `.mv-lobo-btn small` como exceção que não
existe — o setor econômico vira texto de 17 px na lista de fallback, não etiqueta minúscula sobre a
figura.

---

### 🎣 2. Wesley, 34, pescador em Itaipava — o tráfego real
*Chega pelo status de WhatsApp de um primo. Tela rachada. Uma mão só, a outra segura a caixa.*

> **Veredito: reprova antes de abrir.** O link não tem cara de nada quando chega.

`index.html` não tem **nenhuma meta `og:`**. Nem `og:title`, nem `og:image`, nem `og:description`,
nem `twitter:card`, nem favicon. Verifiquei o arquivo inteiro.

`design-system-v3.md` §9 tem a seção certa — *"o link circula no WhatsApp, não no navegador"*,
com OG 1200×630 e teste num WhatsApp real. **Não foi implementada.** Numa campanha onde a
distribuição é grupo e status, o card de preview é a primeira peça de design que o eleitor vê, e
hoje ele é um retângulo cinza com a URL crua.

O que funciona pra ele: a barra fixa inferior (`styles.css:322-330`) com número e WhatsApp sempre
visíveis, no terço inferior, alvo de 60 px. Isso está certo e é raro.

**O que fazer:** OG estática já no protótipo (pode ser um PNG exportado do lockup sobre o gradiente),
e testar mandando o link pra si mesmo no WhatsApp — não no validador do Facebook.

---

### ⚖️ 3. Dra. Cláudia — advogada eleitoral
> **Veredito: não libera o go-live. Duas frases e um número.**

**O que está certo** — e é mais do que a maioria dos sites de campanha tem: rodapé com nome civil,
CNPJ `68.345.764/0001-52`, endereço completo e e-mail (`index.html:446-453`), tudo conferido contra
o comprovante da Receita que reli em [fontes/registro/cnpj-campanha.pdf](../fontes/registro/cnpj-campanha.pdf).
Consentimento LGPD não pré-marcado, com finalidade explícita e direito de exclusão (`index.html:412-416`).

**O que bloqueia:**

1. **`index.html:136` — "Vinte anos sem voz na Assembleia termina aqui."** É afirmação factual
   verificável sobre representação parlamentar da região. Veio do manual (p. 2), mas manual de marca
   não é fonte de dado eleitoral. Sem levantamento nominal dos eleitos do Sul do ES nas últimas
   cinco legislaturas, isso é um convite a direito de resposta. O rodapé já sinaliza — bom — mas está
   publicado no corpo.
2. **`index.html:61-62` — "Nascido, criado e votando no Sul"** é biografia não verificada. Não consta
   em `prompt-v3.md` §3.1, que é a lista fechada do que está apurado. O contrato 1 do próprio prompt
   diz: *"Plausível não é permitido."* Este é exatamente o caso.
3. **`36.028` ainda não foi conferido no DivulgaCand/TSE.** Está aberto desde o começo. São dois
   minutos e é o único erro da lista que não tem conserto depois de circular impresso.
4. **Falta a `/privacidade`** — está linkada em `index.html:415` apontando para `#`.

---

### 🎨 4. Rafael — diretor de arte, guardião do manual
> **Veredito: o protótipo virou pro lado certo. Os documentos ficaram pra trás.**

O `styles.css` reescrito é **fiel ao manual** e isso merece registro: paleta oficial nos cinco hex
corretos (`styles.css:13-19`), lockup reconstruído em HTML com a barra tricolor na posição certa
(`styles.css:98-107`), a hachura `//////` das páginas 2 e 3 virou primitivo (`styles.css:118-122`),
e o `.mv-cartaz` (`styles.css:82-90`) reproduz a assinatura de cartaz — itálico pesado, contorno
branco, sombra dura — com `paint-order: stroke fill`, que é a forma certa de fazer isso em CSS.

**Três coisas erradas:**

1. **A foto do hero está com a camiseta errada.** `index.html:78-79`: `alt="…de camiseta do Triângulo
   do Sul"`. O manual usa, em todas as peças (p. 2, 5, 6, 9, 11, 13), o retrato de **camisa branca
   social** ou **polo creme**. A camiseta do Triângulo é pré-campanha. Está no acervo profissional a
   foto certa: `MIDIAS/FOTOS - PROFISISONAIS/FOTOS JPEG` tem 114 fotos, quatro figurinos, fundo
   branco.
2. **Não existe vetor do lockup oficial.** Varri os 5 zips. Existe `.ai` do **triângulo da
   pré-campanha** (`fontes/logo/ANTIGOS/TRIANGULO_DO_SUL/LOGO_TRIANGULO_DO_SUL.ai`), mas o lockup da
   campanha só existe dentro de `.psd`/`.psb` e rasterizado no PDF. O `styles.css` reconstruiu ele em
   HTML/CSS — decisão correta e melhor que PNG — mas o `font-stretch:100%` do Archivo **não é** a
   letra do manual, que é uma grotesca
   geométrica de "O" circular (família Montserrat/Poppins). Como o Montserrat já foi baixado
   (`assets/fonts/montserrat-latin.woff2`), o lockup deveria usá-lo, não o Archivo.
   **Pedir o `.ai`/`.svg` à assessoria** continua sendo o certo — está previsto em `prompt-v3.md` §5.3.
3. **A barra tricolor está sendo usada como enfeite.** Aparece em `index.html:36` (header), `:182`
   (foto), `:336` (foto), `:431` (rodapé) — quatro vezes soltas, além das três dentro dos lockups.
   No manual ela é **parte do lockup**, não um divisor. Solta, vira listra decorativa. Vale a mesma
   disciplina que o V3 aplicou ao triângulo: *"se não estiver dizendo nada, não entra"*.

---

### 📣 5. Bruno — estrategista de campanha
> **Veredito: o melhor achado da campanha inteira está subaproveitado.**

**"028 não é só DDD"** é uma ideia de campanha genuinamente boa, e é da campanha, não minha nem sua:
o eleitor já disca esse número todo dia. O manual (p. 3) trata isso como o conceito central. O
protótipo dá a ele uma seção (`index.html:86-109`) com as duas caixas 36/028 — e está certo.

**Onde perde força:**

1. **A seção do 028 está enterrada na dobra 2.** O hero (`index.html:47-82`) mostra o lockup com
   `36.028` num bloco só. A sacada de que **028 é o DDD** — a coisa que faz o número grudar — só
   aparece depois de rolar. Numa campanha, o hero é a única dobra garantida.
2. **A tensão de território não foi resolvida, foi empilhada.** `index.html:162-176` lista nove
   cidades com três destacadas em amarelo, e `index.html:189-267` mantém o Triângulo da Escuta só
   com as três. Um eleitor de Cachoeiro (o maior colégio eleitoral do 028, de longe) lê: *"a
   candidatura é de outras três cidades e eu sou o entorno"*. Isso é o oposto do que o manual
   propõe.
   → **Decisão que só o cliente toma, e é a decisão nº 1 do projeto:** a base é 3 ou é 9? Enquanto
   ela não vier, o site fala com duas bocas.
3. **A prova ainda não existe.** Cinco bandeiras, cinco `TODO(T2)`. Está honesto — e a honestidade é
   uma escolha de design correta aqui — mas em 7 semanas e meia isso não é dívida técnica, é a
   campanha inteira. O bloco "Faltou o seu tema? Manda pra gente" (`index.html:319-324`) é a melhor
   ideia da seção: transforma o buraco em captação.

---

### ♿ 6. Auditor WCAG 2.2 AA
> **Veredito: reprova em 4 critérios. Três são de uma linha.**

| Critério | Achado |
|---|---|
| **1.3.1 Info e Relações** | **Não existe `<h1>` na página.** Verifiquei o arquivo inteiro. O hero usa `<p class="slogan">` (`:49`) e um `<span class="mv-lockup">` (`:52`). Todas as seções abrem em `<h2>`. Documento sem h1 e com hierarquia começando no nível 2. |
| **1.3.1 / 4.1.2 Landmarks** | **`<footer>` está dentro de `<main>`** — `</footer>` na linha 463, `</main>` na 465. Dentro de `main`, o elemento perde o papel `contentinfo`. O leitor de tela deixa de ter o atalho para os dados legais. Mesmo defeito existia na versão anterior. |
| **1.4.11 Contraste não-textual** | Borda dos campos do formulário: branco a 28% sobre petróleo = **2,31:1** (`styles.css:299`). O mínimo para borda de campo é 3:1. Chip de cidade a 45% = **3,45:1**, passa raspando. |
| **1.4.3 Contraste de texto** | `.mv-lobo-btn` sobre o lóbulo verde: **3,67:1** com 10 px. Reprova duas vezes. |

**Regressão importante:** a versão anterior tinha
`aria-label="Número três, seis, zero, dois, oito"` no número da urna — decisão explicada em
`design-system-v3.md` §3.4 (*"leitor de tela lendo 'trinta e seis mil e vinte e oito' não ajuda quem
vai digitar dígito a dígito"*). **Isso sumiu na reescrita.** Hoje o `36.028` aparece três vezes
(`:23`, `:55`, `:435`, `:448`, `:468`) e o leitor de tela vai anunciar "trinta e seis mil e vinte e
oito" em todas.

**O que está certo:** skip-link (`:14`), `lang="pt-BR"`, honeypot fora do fluxo de foco (`:410`),
`aria-live="polite"` no erro (`:418`), fallback do triângulo sempre no DOM (`:243-259`),
`prefers-reduced-motion` tratado (`styles.css:341-345`), `<button>` HTML de verdade sobre o SVG em
vez de `<button>` dentro de SVG.

---

### ⚡ 7. Engenheira de performance
> **Veredito: dois bugs que apagam a página. E o orçamento de fonte estourou de novo.**

**🔴 BUG CRÍTICO — metade da página está invisível agora.**
`app.js:22` observa `.mv-reveal`. O HTML reescrito usa **`.mv-rev`** (`index.html:203, 213, 241, 283,
291, 298, 305, 312, 319, 333, 338`). E `styles.css:339` define `.mv-rev{opacity:0}`.
Resultado: **nenhum elemento `.mv-rev` recebe `.visivel` nunca.** A barra de demonstração, o
triângulo inteiro, a lista das três cidades, os seis cards de bandeiras e a seção "Quem é" ficam em
`opacity: 0` permanentemente. A página abre com buracos.

**🔴 BUG — o estado de erro do formulário quebra.**
`app.js:160` faz `campo.closest('.mv-field').dataset.erro = 'true'`. O HTML agora usa **`.mv-campo`**
(`index.html:390, 392, 394, 401`). `closest()` devolve `null` → `TypeError` → o `falhar()` morre no
meio, a mensagem de erro não aparece e o foco não vai pro campo. O caminho de erro do único
formulário de conversão da página está morto.

Os dois têm a mesma causa: `app.js` é de **14:05:49**, `index.html` de **14:24:45**. É o custo de
renomear a camada de primitivos sem passar pelo JS.

**Orçamento (`design-system-v3.md` §10):** teto de fontes = 80 kb. Servidos hoje: Archivo 88 kb +
Montserrat 37 kb + Public Sans 26 kb = **151 kb**, e o Public Sans nem é mais usado — `styles.css`
declara só Archivo e Montserrat, mas `index.html:8-9` faz `preload` de Archivo e Montserrat e o
`publicsans-latin.woff2` continua na pasta. Depois do `pyftsubset` isso fecha; hoje não.

**Ponto positivo:** `fetchpriority="high"` e `width`/`height` no hero (`:78`), `loading="lazy"`
abaixo da dobra, zero dependência, zero framework.

---

### 📰 8. Letícia — repórter de política local
> **Veredito: o site é mais honesto que a média. Isso é notícia, e é uma vantagem.**

O estado vazio explícito — *"ainda não temos registro de escuta publicado aqui"* (`index.html:247,
252, 257`) — e os `TODO(T2)` visíveis são uma decisão de produto que, se sobreviver ao go-live como
"seção sem conteúdo real não renderiza", é um diferencial real e defensável publicamente.

**O que eu checaria primeiro, e o que você deve checar antes de mim:**

1. "Vinte anos sem voz na Assembleia" — quantos deputados estaduais eleitos com domicílio no Sul do
   ES desde 2006? Se houver **um**, a manchete é sobre a frase, não sobre a campanha.
2. Os números do triângulo (`index.html:197-199`): 58% da produção de abacaxi, Itaipava como maior
   porto pesqueiro, Kennedy como maior arrecadador de royalties. São checáveis e, pelo que consta em
   `prompt-v3.md` §4.1, foram checados — **mas o site não mostra a fonte**. Dado sem fonte visível é
   dado que eu ligo pra confirmar. Uma linha de crédito por número resolve.
3. Histórico eleitoral 2018/PTB e 2022/Podemos: `prompt-v3.md` §3.3 marca risco de homônimo e o
   protótipo repete o alerta (`index.html:349-350`). Correto não publicar. **Eu vou olhar de
   qualquer forma** — melhor que a campanha chegue antes.

---

### 🥊 9. O adversário — a assessoria do concorrente
> **Veredito: três flancos abertos. Fecho todos com print.**

1. **"Triângulo do Sul" x "o Sul inteiro".** O site diz que o candidato representa nove municípios
   (`:100-101`) e, quatro seções depois, que o movimento é de três (`:174-176`), com Cachoeiro —
   **o maior colégio eleitoral da região** — na cor apagada. Print lado a lado: *"pra ele, Cachoeiro
   é o entorno."* Este é o ataque mais barato disponível hoje.
2. **"Vinte anos sem voz"** (`:136`). Se existir um eleito no período, o print é a frase inteira.
3. **O Instagram do Triângulo do Sul no rodapé** (`:441`). Se aquela conta tiver postagem anterior ao
   registro de candidatura, ela é material de pré-campanha linkado do site oficial. Vale a
   assessoria jurídica olhar antes de mim.

**O que eu não consigo atacar:** o número, o CNPJ, o endereço, os dados de economia local, os estados
vazios. Isso está blindado. É pouco comum e vocês construíram isso de propósito.

---

### 🔧 10. Diego — o dev que herda o site na Onda 3
> **Veredito: o código eu mantenho. A documentação me faz quebrar o site.**

Se eu chegar amanhã e ler `docs/` — que é o que qualquer pessoa faria — eu vou:

- escrever `36028` sem ponto, porque `design-system-v3.md` §3.4 diz explicitamente que o ponto
  "ensina a coisa errada" e proíbe separar 36 de 028;
- usar `#003C44 / #FF8103 / #FFE000`, porque §1 diz que são medidos e marca o bloco com 🔒;
- remover os gradientes, porque §13 proíbe "gradiente de qualquer tipo";
- remover o contorno e a sombra do `.mv-cartaz`, porque §3.4 proíbe;
- limitar tudo a três cidades, porque §4.3 do prompt diz "somente estas três";
- e usar "Unidos pelo que é nosso", porque `LEIA.md` diz que está na camiseta oficial.

**Seis regressões, todas causadas por documentação correta em relação a uma marca errada.** Nenhum
teste pega isso. Nenhum lint pega isso.

Outras dívidas de manutenção:
- `prototipo/LEIA.md` descreve a versão anterior inteira (fontes, slogan, o que olhar) — está
  obsoleto desde 14:22.
- `assets/logo-tds.png` (o logo da pré-campanha) continua na pasta e não é mais referenciado por
  `index.html`. Confunde.
- `assets/fonts/publicsans-latin.woff2` idem.
- `styles.css:1-4` diz que os tokens vêm de `ID VISUAL/ID CAMPANHA/idmarcão.pdf` — **este é o único
  lugar do projeto que registra a fonte certa.** Deveria estar no design system, não num comentário
  de CSS.
- `index.html:458` tem `**validar juridicamente…**` — asteriscos de markdown dentro de HTML, vão
  renderizar literais.

---

## 2. PLACAR E ORDEM DE ATAQUE

### 🔴 Agora (quebrado ou bloqueia go-live)

| # | O quê | Onde | Custo |
|---|---|---|---|
| 1 | `.mv-reveal` → `.mv-rev`: metade da página em `opacity:0` | `app.js:22` | 1 linha |
| 2 | `.mv-field` → `.mv-campo`: erro do formulário lança `TypeError` | `app.js:160` | 1 linha |
| 3 | Adicionar `<h1>` (o lockup do hero é o h1) | `index.html:52` | 1 linha |
| 4 | Tirar `<footer>` de dentro de `<main>` | `index.html:463-465` | mover 1 tag |
| 5 | Devolver `aria-label` dígito a dígito no número | `index.html:23, 55, 435, 468` | 4 atributos |
| 6 | `**…**` literal no HTML | `index.html:458` | 1 linha |
| 7 | Conferir `36.028` no DivulgaCand/TSE | — | 2 min |
| 8 | Remover ou dar fonte a "20 anos sem voz" e "nascido, criado e votando no Sul" | `index.html:136, 61` | decisão |

### 🟠 Esta semana (identidade e leitura)

| # | O quê |
|---|---|
| 9 | **Reescrever `design-system-v3.md` §1, §3.4, §4, §5, §13 contra o manual.** É o item de maior impacto da lista — é o que impede a regressão nº 10 acontecer de novo |
| 10 | Piso de 17 px aplicado de verdade; matar o texto de 10 px do triângulo |
| 11 | Borda de campo de 2,31:1 → ≥ 3:1 |
| 12 | Meta `og:` + imagem OG 1200×630 + favicon, testados num WhatsApp real |
| 13 | Trocar a foto do hero pela do figurino oficial (camisa branca/polo), do acervo profissional |
| 14 | Lockup em Montserrat, não Archivo; pedir o `.ai`/`.svg` à assessoria |
| 15 | `pyftsubset` — 151 kb de fonte servidos hoje contra teto de 80 kb; remover o Public Sans órfão |

### 🟡 Decisão do cliente (trava o resto)

| # | Pergunta |
|---|---|
| 16 | **A base territorial é 3 ou 9 municípios?** O manual diz 9, o briefing dizia 3, o site diz os dois. Toda a arquitetura da seção de escuta depende disso |
| 17 | Subir o "028 é o DDD" para o hero? É a melhor ideia da campanha e está na segunda dobra |
| 18 | A barra tricolor pode andar solta ou só dentro do lockup? |

---

## 3. O QUE ESTÁ BOM E NÃO DEVE SER MEXIDO

Crítica sem isso é só reclamação.

- **O rigor factual.** CNPJ, nome empresarial, endereço, e-mail — reconferi contra o comprovante da
  Receita, bate integralmente. Poucos sites de campanha têm o rodapé legal certo.
- **O pareamento cidade → economia** (abacaxi/Marataízes, pesca/Itapemirim, petróleo/Kennedy), com
  a nota registrando que a hipótese anterior estava invertida em duas das três. Isso é honestidade
  documental de nível alto.
- **Estado vazio como estado real.** "Ainda não temos registro publicado aqui" é melhor design que
  qualquer placeholder bonito, e é defensável na imprensa.
- **A taxonomia `TODO(T1/T2/T3)`** com consequência declarada por nível.
- **`<button>` HTML posicionado sobre o SVG** em vez de tentar botão dentro de SVG, com lista de
  fallback sempre no DOM.
- **Barra fixa inferior** com número e WhatsApp — conversão no alcance do polegar, sem hambúrguer.
- **Zero dependência.** Nenhum framework, nenhum registry, nenhum ícone de biblioteca.
- **O `styles.css` novo é fiel ao manual.** Quem o escreveu leu a peça, não o documento.

---

## 4. FONTES TRAZIDAS PARA A PASTA

Todo o material que embasa o projeto está agora em [fontes/](../fontes/) — ver
[fontes/README.md](../fontes/README.md) para o índice completo, o que cada arquivo prova e o que
ficou de fora (e por quê).
