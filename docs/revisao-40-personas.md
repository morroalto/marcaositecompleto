# REVISÃO EM 50 VOZES — parte 2
## Marcão Vivacqua 36.028 · as 40 personas sobre a versão em Next

Feita em 12/08/2026 sobre o **build de produção** em `site/`, com Next 16.3.0, servido em
`localhost:3210`. Tudo aqui foi medido ou olhado na tela, não deduzido do código.

**Estado da versão auditada:** build e lint verdes · HTML servido 81 kb · `scrollWidth` igual a
`clientWidth` em 360 px · um `<h1>` · `<footer>` fora do `<main>` · zero travessão no texto ·
mapa com geometria oficial do IBGE · 4 campos de vídeo reservados e vazios.

---

## Antes das personas: três correções ao que eu mesmo afirmei

Registrar erro próprio é a única forma de a régua valer.

| # | O que eu disse | O que é |
|---|---|---|
| 1 | "Não existe vetor do lockup oficial, só PSD" | Existe. `ID CAMPANHA/Logo/SVG/Ativo 5–8.svg`, `Logo Marcáo.ai`, PDFs e `partido-agir36.svg`. Eu tinha varrido os zips procurando a coisa errada |
| 2 | "As fotos boas são as 114 de estúdio" | Errado, e o Matheus apontou. O acervo bom estava em partes do MIDIAS que eu não tinha aberto: `FOTOS CARROSSEL`, `IMAGENS FAMÍLIA`, `imagens criativo triangulo do sul` |
| 3 | "Há overflow horizontal em 360 px" | Não há. `scrollWidth` = `clientWidth` = 360. O corte que apareceu na captura era o Chrome headless deitando a página num viewport maior e recortando em 360, exatamente a armadilha que a V3 §16 já registrava. **Desconfiar do instrumento antes do código** funcionou |

E um erro que quase entrou no ar: **cinco dos nove códigos de município do IBGE que usei de memória
estavam errados**, incluindo o de Itapemirim. Conferidos na API de localidades antes de gerar o mapa.
É o mesmo padrão que a documentação do projeto já tinha registrado sobre o pareamento das cidades:
em dado de território, o palpite plausível é justamente o que engana.

---

## Grupo A · Quem vota (11 a 20)

### 11. Seu Jorge, 71, aposentado em Itapemirim
> **Ressalva.** Enxerga, mas cansa antes do fim.

A página tem **10.400 px de altura no celular**. Com corpo de 17 px e alvo de 52 px ele consegue
usar, mas são muitas telas até o WhatsApp. A barra fixa inferior salva: a conversão está sempre
a um toque. **Correção:** a barra é o que segura essa persona, não pode sumir nunca.

### 12. Cleide, 44, professora em Cachoeiro
> **Aprovado, e mudou de ideia.** "Achei que fosse candidato de Marataízes."

O mapa resolve o flanco que o adversário tinha. Ela se vê no desenho, em azul, e lê "o mandato é do
Espírito Santo inteiro". **Sem o mapa, Cachoeiro continuava sendo o entorno.**

### 13. Vanderlei, 29, entregador de aplicativo
> **Ressalva.** Chega pelo status, e o card do WhatsApp agora existe.

A OG é gerada em `opengraph-image.tsx` com o lockup sobre o degradê. **Falta testar num WhatsApp de
verdade**, que é o único teste que vale.

### 14. Dona Ivone, 66, catarata operada, zoom em 200%
> **Aprovado.** `maximumScale: 5`, nada de `user-scalable=no`. Layout em `grid` com `minmax(0,…)`,
sem largura fixa. Ela aumenta e a página reflui.

### 15. Rogério, 38, produtor de abacaxi em Marataízes
> **Ressalva séria.** "Cadê o que ele vai fazer pelo abacaxi?"

As cinco bandeiras estão todas com `compromisso: null`. Em produção elas **não renderizam**, ou
seja, hoje o site sobe sem nenhuma proposta. Está honesto, e é insustentável a 53 dias da eleição.
**Este é o gargalo número um do projeto, e é conteúdo, não código.**

### 16. Tarcísio, 52, pescador, celular com tela rachada
> **Aprovado.** Alvo de 52 px nos botões, 56 px nos do triângulo, 48 px nos chips do mapa. Nenhum
alvo depende de acertar polígono com o dedo: o mapa é controlado pela lista de botões ao lado.

### 17. Sandra, 35, mãe solo, lê no ônibus
> **Ressalva.** As sete facetas são o que prende, e **seis das sete estão sem legenda**. A foto
sozinha comunica papel, não história. Falta a frase dele.

### 18. Marcos, 47, indeciso, desconfia de político
> **Aprovado.** O que o convence não é a promessa, é o vazio assumido: "ainda não temos registro de
escuta publicado aqui". Site de campanha que admite o que não tem é raro o bastante para virar
argumento.

### 19. Léo, 19, primeiro título, TikTok
> **Reprovado para o público dele.** Nenhum vídeo. Os quatro campos existem e estão vazios. Para
essa faixa, vídeo não é enfeite, é o meio.

### 20. Dona Neuza, 58, Guaçuí, 4G ruim
> **Ressalva.** 81 kb de HTML contra o teto de 60 kb da V3. **21 kb são a geometria do mapa inline.**
Vale mover o mapa para um componente carregado sob demanda, ou aceitar o estouro e registrar a
justificativa por escrito.

---

## Grupo B · Ofício (21 a 30)

### 21. Auditor WCAG 2.2 AA, segunda passada
> **Aprovado com uma ressalva.** Corrigidos desde a parte 1: `<h1>` existe, `<footer>` saiu do
`<main>`, número soletrado no hero e na barra fixa, borda de campo de 2,31:1 para 3,9:1, piso de
17 px aplicado. **Aberto:** o carrossel das facetas rola horizontalmente e não anuncia posição.
Falta `aria-label` com "1 de 7" em cada item.

### 22. Engenheira de performance
> **Ressalva.** `priority` só no retrato do hero, resto em `lazy`, AVIF e WebP ligados, `deviceSizes`
começando em 360. **Aberto:** as fontes seguem em 125 kb contra teto de 80 kb, porque o
`pyftsubset` ainda não entrou no build.

### 23. Especialista em segurança de aplicação
> **Aprovado, com uma verdade dita.** Limite de 5 tentativas por minuto por IP, honeypot, carimbo de
tempo (menos de 3 s é robô), conferência de origem, teto de tamanho por campo, filtro de caractere
de controle, CSP, HSTS, `X-Frame-Options`, `Permissions-Policy`. **O que não existe:** impedir
`curl` de baixar o HTML. É impossível num site público, e prometer isso seria mentira.

### 24. Especialista em LGPD
> **Ressalva.** Consentimento não pré-marcado, finalidade explícita, direito de exclusão, página de
privacidade escrita em português direto, nenhum dado em log. **Aberto:** o destino do cadastro
(`APOIADOR_WEBHOOK`) não existe, então hoje o lead se perde.

### 25. Advogada eleitoral, segunda passada
> **Ainda não libera.** A frase dos 20 anos saiu do corpo e virou pendência T1. Rodapé legal completo
e conferido. **Aberto e bloqueante:** conferir 36.028 no DivulgaCand, links reais de WhatsApp,
autorização por escrito das fotos de familiares, revisão jurídica.

### 26. Cartógrafo
> **Aprovado, e é raro.** Malha oficial do IBGE, projeção Mercator, 78 municípios. O triângulo é
traçado entre os **centros reais** das três cidades: deixa de ser metáfora e passa a fechar no mapa.
**Ressalva:** o centroide é o centro do polígono, não a sede municipal. Diferença de poucos km,
imperceptível nessa escala, mas fica registrado.

### 27. Diretor de arte, segunda passada
> **Ressalva de marca.** Paleta do manual, lockup com a barra tricolor, cartaz com contorno e sombra,
hachura, logo do Agir em vetor. **Aberto:** a tipografia do lockup oficial é **Momo Trust Display**,
que não temos. O lockup está reconstruído em Archivo, que é próximo mas não é. Pedir a fonte.

### 28. Redator
> **Aprovado.** Zero travessão, conforme pedido. Frase curta, verbo ativo, nome de lugar. Nenhum
"juntos por um futuro melhor". **Ressalva:** "Antes de ser candidato, ele já era outras seis coisas"
é a melhor linha da página e está em terceira pessoa, enquanto o resto da seção é dele.

### 29. Arquiteto de informação
> **Aprovado.** Oito seções em primeira pessoa, e o conceito dos três marcos virou a própria
arquitetura em vez de uma seção que explica o conceito. Explicar conceito ao eleitor é coisa de
apresentação de agência.

### 30. Dev que herda, segunda passada
> **Ressalva.** Conteúdo todo em `content/`, nenhuma copy dentro de componente, `fonte` obrigatório,
`MOSTRAR_PENDENCIAS` por ambiente. **Aberto:** `docs/` ainda descreve a arquitetura antiga e o
`design-system-v4` não conhece o mapa nem as facetas.

---

## Grupo C · Cenários (31 a 40)

### 31. Dia da eleição, 4 de outubro, pico de acesso
> **Ressalva.** Tudo estático menos a rota do formulário. O limite por IP é **em memória**, então
em ambiente sem estado (serverless) cada instância conta separado. Aceitável contra robô bobo,
insuficiente contra ataque coordenado. Registrado.

### 32. Link colado num grupo de 250 pessoas
> **Ressalva.** OG existe, `summary_large_image` declarado. Falta o teste real.

### 33. Sem JavaScript
> **Aprovado.** Conteúdo todo em Server Component. Sem JS: some a interação do mapa e do triângulo,
some a validação do formulário no cliente (o servidor continua validando), e a abertura nem aparece.
Nada de conteúdo se perde.

### 34. Impressão do santinho a partir do site
> **Ressalva.** Existe `@media print` escondendo a barra fixa. Não há folha de impressão pensada
para a página inteira. Ninguém imprime landing de campanha: prioridade baixa.

### 35. Leitor de tela NVDA, do começo ao fim
> **Ressalva.** Skip-link, marcos corretos, número soletrado, mapa decorativo com controles reais.
**Aberto:** o lockup aparece três vezes (topo, rodapé, abertura) e é lido como "MARCÃO VIVACQUA
trinta e seis mil e vinte e oito" no topo e no rodapé.

### 36. Auditoria de checagem de fatos
> **Ressalva.** Os três dados de economia local carregam fonte no conteúdo. **Aberto:** a fonte não
aparece na tela ao lado do número, só no código.

### 37. Adversário, segunda passada
> **Dois flancos fechados, um aberto.** O mapa fecha o de Cachoeiro, e a frase dos 20 anos saiu do
corpo. **Aberto:** o Instagram do Triângulo do Sul segue linkado no rodapé, com conteúdo anterior
ao registro da candidatura.

### 38. Migração para a stack de produção
> **Aprovado.** Next 16.3.0, React 19.2.8, Tailwind 4.3.3, TypeScript 6.0.3. **Duas travas
justificadas por escrito:** TypeScript 7.0.2 é a `latest` e quebra o `next build`; ESLint 10.8.1 é a
`latest` e quebra o `eslint-plugin-react` de dentro do `eslint-config-next`, travado em 9.39.5.
Provado rodando build e lint, não supondo.

### 39. Onda 3, atualização semanal por quem não é dev
> **Ressalva.** Trocar texto, cidade, bandeira, registro de escuta ou vídeo é editar um arquivo de
`content/`. **Aberto:** falta o `README` de operação com o passo a passo.

### 40. Teste de unicidade, sem logo, nome e fotos
> **Passa.** Sobram: as sete facetas como estrutura, o mapa com o triângulo traçado entre centros
reais, o par 36 e 028 em duas caixas, a barra tricolor presa ao lockup, o cartaz itálico com
contorno, e nomes de seção em primeira pessoa. Não dá para trocar por outro candidato.

---

## Grupo D · Os dez que faltavam (41 a 50)

| # | Persona | Veredito | Achado |
|---|---|---|---|
| 41 | Coordenador de rua | Ressalva | Não há material pronto para baixar e compartilhar. A seção "Compartilhar" promete e não entrega |
| 42 | Assessor de imprensa | Ressalva | Não há página nem bloco de imprensa: bio, fotos em alta e contato |
| 43 | Doador pessoa física | Reprovado | Não há caminho de doação. Se a campanha usa financiamento coletivo, falta o link e o aviso legal |
| 44 | Fiscal do TSE | Ressalva | Rodapé conforme. Falta o registro de quem paga o impulsionamento, se houver |
| 45 | Analista de SEO | Aprovado | `sitemap.xml`, `robots.txt`, `manifest.webmanifest`, canônica, JSON-LD de `Person`, títulos únicos. Falta o `WebSite` e o `Organization` |
| 46 | Tradutor de libras | Ressalva | Nenhum vídeo tem faixa de legenda. O campo `legendas` existe no modelo e está vazio |
| 47 | Pessoa com daltonismo | Aprovado | Nada comunica estado só por cor: o mapa tem legenda com forma, o triângulo usa vazado contra sólido, os chips mudam borda |
| 48 | Usuário de tema escuro no sistema | Ressalva | O site é claro e único, por decisão. Não há `color-scheme` declarado, então campos de formulário podem herdar o escuro do sistema |
| 49 | Auditor de dependências | Aprovado | Três dependências de produção: next, react, react-dom. Nenhum registry, nenhum ícone de biblioteca, nenhum `react-hook-form`, nenhum `zod` |
| 50 | O próprio Marcão | Ressalva | A página fala **por** ele em terceira pessoa em vários pontos. Falta a voz dele: sete legendas, três blocos de biografia e cinco compromissos |

---

## Placar final

| Bloqueia o go-live | Esta semana | Depois |
|---|---|---|
| Conferir 36.028 no DivulgaCand | Compromisso das 5 bandeiras | `pyftsubset` nas fontes |
| Links reais de WhatsApp | 7 legendas das facetas | Bloco de imprensa |
| Destino do formulário | 3 blocos de biografia | Material para compartilhar |
| Revisão do advogado eleitoral | Testar a OG num WhatsApp real | `color-scheme` declarado |
| Autorização das fotos de familiares | Fonte visível ao lado dos números | README de operação |
| Checar homônimo no DivulgaCand | Pedir a fonte Momo Trust Display | Legendas nos vídeos |

**O gargalo do projeto não é mais técnico.** Build verde, lint verde, acessibilidade em ordem,
segurança do formulário em camadas, mapa com fonte oficial. O que falta é **conteúdo que só a
assessoria tem**: cinco compromissos, sete frases, três blocos de biografia e os links reais.
