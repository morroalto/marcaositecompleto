# Avaliação contínua — Marcão Vivácqua 2026

Este arquivo é a régua independente de revisão. Ele não cria conteúdo de campanha, não substitui a assessoria, o advogado eleitoral nem uma fonte primária. A cada versão, compara o que foi alterado com `prompt-v3.md` e `design-system-v3.md`, registra evidência e devolve um veredito acionável.

## Contrato de avaliação

**Ordem de prioridade:** veracidade e conformidade eleitoral/LGPD → clareza para o eleitor → conversão honesta → acessibilidade e desempenho → marca e acabamento.

Uma boa aparência não compensa uma afirmação sem fonte, uma CTA que não funciona, nem uma decisão que exclui o público real. O avaliador deve apontar conflitos, inclusive quando vierem de um documento anterior ou de uma sugestão aparentemente convincente.

### Escala de decisão

| Veredito | Regra |
|---|---|
| **Reprovado** | Existe P0 ou P1. Não avançar para produção até corrigir ou receber uma decisão documentada. |
| **Condicional** | Sem bloqueador, mas há P2 definido com responsável e prazo. Pode seguir apenas como protótipo/ramo de trabalho. |
| **Aprovado** | Sem regressão factual, legal, de usabilidade ou de identidade; critérios da etapa comprovados. |

| Prioridade | Significado | Exemplo |
|---|---|---|
| **P0 — bloqueador** | Pode desinformar, violar obrigação legal/LGPD ou publicar dado eleitoral errado. | número de urna incorreto; captação sem política de privacidade. |
| **P1 — crítico** | Rompe a estratégia aprovada, a conversão principal ou a acessibilidade essencial. | território errado; CTA de WhatsApp sem destino; ausência de H1. |
| **P2 — importante** | Reduz compreensão, confiança, performance ou diferenciação. | texto abstrato; contraste ou fluxo confuso em um estado. |
| **P3 — refinamento** | Melhoria estética ou de consistência sem dano funcional. | ajuste de ritmo, espaçamento ou microcopy. |

## Personas que devem votar em toda revisão

| Persona | Lente e pergunta de controle | Pode vetar |
|---|---|---|
| **Dona Célia — eleitora local, 58 anos** | Android de entrada, 4G lento e luz do sol. Em 10 segundos, entende quem é, qual é o número e qual é a próxima ação? Consegue tocar e ler sem esforço? | legibilidade, alvo de toque, jargão, número memorizável. |
| **Rafael — eleitor indeciso, 31 anos** | Desconfia de promessa vazia e de marketing político. Que prova concreta existe? O texto parece humano, específico e honesto sobre o que ainda não existe? | promessa sem fonte, exagero, prova social inventada. |
| **Lúcia — moradora de Marataízes, 43 anos** | Conhece o território e percebe erro local imediatamente. Marataízes, Itapemirim e Presidente Kennedy aparecem no papel correto, sem anexar municípios não autorizados? | território, símbolos, tom local e fatos regionais. |
| **Caio — coordenador de campanha** | A página transforma intenção em contato sem enganar? Cada CTA tem destino, mensuração consentida, responsável e plano de operação? | CTA quebrada, formulário sem fluxo, conteúdo sem dono. |
| **Helena — advogada eleitoral e LGPD** | Cada status, número, nome, CNPJ, consentimento e coleta de dados está confirmado e documentado? | P0 legal, eleitoral e privacidade. |
| **Bianca — diretora de marca e design** | Sem nome, foto e logo, a composição ainda pertence a esta campanha? A assinatura Triângulo do Sul é estrutural, não enfeite? | descaracterização, template genérico, uso incorreto da marca. |
| **Diego — engenheiro de acessibilidade e performance** | Funciona com teclado, leitor de tela, zoom de 200%, 360 px e rede lenta? É rápido sem esconder conteúdo? | barreiras WCAG, LCP/CLS, peso e semântica. |
| **Maya — estrategista de marketing** | A hierarquia leva do reconhecimento à confiança e à conversão, sem competir com o número `36028`? Há uma única ação primária por contexto? | funil confuso, CTAs concorrentes, mensagem pouco diferenciada. |

## Roteiro obrigatório a cada checkpoint

1. **Delimitar a mudança:** arquivos, intenção e impacto no eleitor.
2. **Verificar fatos:** toda alegação tem fonte permitida e nenhuma pendência T1/T2 é disfarçada como conteúdo final.
3. **Passar pelas oito personas:** registrar discordâncias reais; não usar média para esconder veto P0/P1.
4. **Testar a experiência:** desktop e 360 px, teclado, foco, estados de erro/sucesso, links e contraste. Antes de go-live: rede lenta, Android real, Lighthouse e prévia no WhatsApp.
5. **Entregar o feedback:** veredito, nota por eixo, achados com evidência, correção concreta e o que precisa de aprovação humana.

### Formato de feedback

```md
## Revisão — [data / versão]
**Veredito:** Reprovado | Condicional | Aprovado
**Notas:** Fatos/Legal __ · Eleitor __ · Conversão __ · A11y/Perf __ · Marca __

| Prioridade | Achado e evidência | Persona(s) | Correção / dono |
|---|---|---|---|
| P? | ... | ... | ... |

**Pode avançar quando:** ...
**Decisões humanas pendentes:** ...
```

## Linha de base — protótipo atual

**Revisado em 12/08/2026. Veredito: REPROVADO para produção; aceitável somente como protótipo de direção visual.**

| Prioridade | Achado e evidência | Personas | Correção necessária |
|---|---|---|---|
| **P0** | O número da urna está escrito como `36.028` no título, meta description, lockups, rodapé e barra fixa. A V3 determina explicitamente `36028`, sem ponto, e diz que a versão pontuada ensina o eleitor a digitar errado. Evidência: `prototipo/index.html:6-7,23,55,435,448,468`; `design-system-v3.md:109-114`. | Dona Célia, Helena, Maya | Substituir todas as ocorrências exibidas e metadados por `36028`; preservar a leitura de `36 + 028` apenas como explicação, sem separar o número de voto. Conferir no DivulgaCand/TSE antes do go-live. |
| **P1** | O território aprovado são somente Marataízes, Itapemirim e Presidente Kennedy, mas o protótipo comunica nove cidades, lista outras seis e permite selecioná-las no formulário. Evidência: `prototipo/index.html:100-101,166-171,286,398-399`; `prompt-v3.md:113,125,561`. | Lúcia, Helena, Caio | Remover municípios fora da base de copy, chips e formulário, ou obter autorização expressa e atualizar a fonte/escopo antes de qualquer publicação. |
| **P1** | Não há `<h1>` no documento. O nome/número central está em `span`, reduzindo a estrutura para leitor de tela e SEO. Evidência: ausência de `<h1>` em `prototipo/index.html`; hero em `:47-58`. | Diego, Dona Célia | Criar um único H1 semântico que una candidato, cargo/status confirmado e `36028`, preservando o lockup visual via CSS. |
| **P1** | As CTAs de WhatsApp levam para `#apoie` ou `#`; a política de privacidade também é `#`. Evidência: `prototipo/index.html:34,72,386,415,469`. | Caio, Helena, Maya | Antes do go-live, configurar destinos reais, `/privacidade` e o fluxo de armazenamento/atendimento. Enquanto forem protótipo, deixar a indicação visual inequívoca e não alegar contato efetivo. |
| **P1** | O status do candidato alterna entre “pré-candidato” na V3 e “Candidato” no protótipo. É uma afirmação eleitoral sensível. Evidência: `prompt-v3.md:27,120`; `prototipo/index.html:448`. | Helena, Rafael | A assessoria/advogado deve definir o status publicável e sua fonte; usar a mesma forma em todo o site. |
| **P2** | Há conteúdo T2 visível em bandeiras e biografia. O contrato da V3 exige que seção sem conteúdo real não renderize em produção. Evidência: `prototipo/index.html:288-317,346-350`; `prompt-v3.md:145-150`. | Rafael, Bianca, Caio | No build final, condicionar cards/seções a conteúdo verificado; manter a caixa vermelha apenas no protótipo de revisão. |
| **P2** | O protótipo usa Montserrat para texto, enquanto a V3 definiu Public Sans por legibilidade e orçamento de fontes. Evidência: `prototipo/styles.css:6-8,47`; `design-system-v3.md:73-88`. | Dona Célia, Diego, Bianca | Migrar o corpo para Public Sans na implementação, ou registrar e revalidar formalmente a exceção com teste de leitura e peso. |

## Critério de saída para a primeira versão pública

Não aprovar o go-live até: número `36028` verificado e sem pontuação; escopo territorial coerente; status eleitoral e grafia legal confirmados; CTAs e `/privacidade` reais; consentimento antes de qualquer analytics; revisão jurídica; conteúdo T2 ausente em vez de simulado; e validação de teclado, 360 px e performance definidos na V3.

---

## Revisão 2 — protótipo concluído (12/08/2026)

**Veredito: REPROVADO para publicação; CONDICIONAL como protótipo de direção de arte.**

**Notas:** Fatos/Legal **3/10** · Eleitor **5/10** · Conversão **4/10** · Acessibilidade/Performance **4/10** · Marca **8/10**.

### Mudança de precedência registrada

O manual de marca `fontes/manual-marca/idmarcão.pdf` foi finalmente lido e tem precedência sobre V3. Portanto, a escrita visual **`36.028` está correta para a marca atual**; a primeira revisão, baseada no V3, fica substituída neste ponto. Ainda é obrigatório confirmar os cinco dígitos no DivulgaCand/TSE antes do go-live e fornecer rótulo acessível dígito a dígito.

O manual também confirma o lockup, a paleta, o conceito de “Marco”, o gradiente e a campanha orientada ao DDD 028. `prompt-v3.md`, `design-system-v3.md` e `prototipo/LEIA.md` estão desatualizados em relação a essa fonte e não devem mais governar novas mudanças de marca.

| Prioridade | Achado e evidência | Personas | Correção / dono |
|---|---|---|---|
| **P0** | Há alegações factuais sem fonte publicada: “Nascido, criado e votando no Sul” e “Vinte anos sem voz na Assembleia termina aqui”. O próprio rodapé reconhece que a segunda ainda depende de validação. Evidência: `prototipo/index.html:61-62,136,464-466`. | Helena, Rafael, Lúcia | Assessoria e jurídico devem fornecer a fonte e aprovar a redação; sem isso, remover antes de publicar. |
| **P0** | A confirmação externa do número eleitoral permanece pendente. O manual permite a grafia `36.028`, mas não é a autoridade eleitoral para confirmar os dígitos. Evidência: `prototipo/index.html:464`; pendência registrada em `docs/00-indice.md:75`. | Helena, Dona Célia | Conferir no DivulgaCand/TSE e registrar a evidência. |
| **P0** | A página coleta nome, WhatsApp e cidade, mas a Política de Privacidade ainda aponta para `#`. Em produção, captação sem política acessível e fluxo de tratamento definido não é aceitável. Evidência: `prototipo/index.html:422`. | Helena, Caio | Publicar `/privacidade`, definir controlador, finalidade, retenção, canal de exclusão e destino seguro do formulário antes de ativar o envio. |
| **P1** | Em **360 px**, o hero corta texto essencial: a frase “028 não é só DDD”, “turno único” e “Falar no WhatsApp” na barra fixa ultrapassam a lateral direita. Evidência visual: captura local `360×900`; estruturas em `prototipo/index.html:61-67,475-476` e `.mv-conta`/`.mv-barra` em `styles.css:231,344-351`. | Dona Célia, Diego, Maya | Corrigir o encolhimento/quebra do flex (`min-width:0` no texto do contador), permitir quebra da frase destacada e reduzir/reformular a CTA fixa para caber em 360 px; validar novamente a 360, 320 e zoom 200%. |
| **P1** | Não há H1; o hero visual é formado por `span`. O rodapé também está aninhado dentro de `main`, perdendo o landmark `contentinfo`. Evidência: `prototipo/index.html:39-477`. | Diego, Dona Célia | Inserir um único H1 visualmente equivalente ao lockup, com nome/cargo/número em texto acessível; mover `footer` para fora de `main`. |
| **P1** | Não há OG, Twitter Card nem favicon. Como a distribuição é WhatsApp, o primeiro contato será uma prévia sem marca. Evidência: `<head>` de `prototipo/index.html:3-10`. | Wesley, Maya, Bianca | Criar OG 1200×630 com lockup e foto, implementar metas e testar envio em WhatsApp real. |
| **P1** | A definição de território continua contraditória na documentação: o manual descreve o DDD com nove municípios; os documentos V3 limitam a campanha a três. No site há uma explicação parcialmente boa — nove do DDD, três do movimento de origem — mas ela não é uma decisão de escopo formal. Além disso, “nove municípios [com] o mesmo litoral” é geograficamente impreciso. Evidência: `prototipo/index.html:158-179`; `docs/00-indice.md:45,78`; `prompt-v3.md:113,125`. | Lúcia, Bruno, Helena | Cliente deve declarar: base eleitoral/comunicação = 9 e movimento de origem = 3, ou outra regra. Atualizar a fonte única e trocar “mesmo litoral, mesma serra” por formulação factual verificável. |
| **P1** | CTAs principais ainda não levam ao WhatsApp/grupo real; levam ao formulário ou a `#`. Evidência: `prototipo/index.html:34,72,393,476`. | Caio, Maya, Wesley | Configurar links reais, UTM/medição somente após consentimento quando aplicável, e testar os destinos em Android. |
| **P2** | O número é anunciado como número inteiro pelo leitor de tela; o rótulo por dígitos, presente no sistema anterior, sumiu. Evidência: lockups sem `aria-label` em `prototipo/index.html:19-24,51-56,442-443,475`. | Diego, Dona Célia | Aplicar `aria-label="Número três, seis, zero, dois, oito"` ao valor visual e ocultar a duplicação decorativa do leitor de tela. |
| **P2** | Componentes funcionais ainda ficam abaixo do piso de leitura definido para esse público: badges e kickers usam 12–13 px; rótulos auxiliares e CTA móvel usam 10 px. Evidência: `prototipo/styles.css:145,150,242,319,349`. | Dona Célia, Diego | Manter texto informativo em 17 px; converter microtexto decorativo em `aria-hidden` ou aumentar tamanho/contraste quando tiver significado. |
| **P2** | Os botões do Triângulo podem receber texto claro sobre o lóbulo verde preenchido; o contraste não atinge AA para texto normal. Isso acontecerá quando chegarem registros reais. Evidência: `prototipo/styles.css:270-278`; estado cheio em `prototipo/app.js:82-94`. | Diego, Lúcia | Posicionar rótulos fora da área colorida, ou dar-lhes fundo escuro/opaco com contraste medido. |
| **P2** | Conteúdo T2 (bandeiras e bio) continua visível. Isso é correto num protótipo de aprovação, mas deve desaparecer — não apenas trocar de cor — no build público sem dados verificados. Evidência: `prototipo/index.html:292-333,359-366`. | Rafael, Caio, Bianca | Modelar renderização condicional no produto final e registrar os donos de cada dado. |
| **P3** | A marca está muito mais coerente: paleta oficial, lockup, cartaz/lambe-lambe, gradiente e foto de camisa branca funcionam bem no desktop. Ainda assim, a barra tricolor aparece quatro vezes solta, diluindo um componente que o manual usa como parte do lockup. Evidência: `prototipo/index.html:36,182,337,431`; `styles.css:111-116`. | Bianca, Rafael | Remover divisores soltos que não carregam significado; preservar a barra dentro do lockup. |
| **P3** | Existe um asset inválido de 0 bytes: `prototipo/assets/marcao-azul.webp`. Não é referenciado hoje, mas quebrará quando for selecionado. | Diego | Regerar ou remover antes de criar qualquer seletor/manifesto automático de imagens. |

### Voto das personas

| Persona | Voto | Síntese |
|---|---|---|
| Dona Célia — eleitora | **Não aprova** | No desktop lê e entende; em 360 px, conteúdos e CTA são cortados. |
| Rafael — indeciso | **Não aprova** | Gosta da honestidade dos T2, mas não aceita afirmações biográficas e históricas sem prova. |
| Lúcia — moradora local | **Condicional** | Reconhece o DDD e o Triângulo; exige uma definição clara de quem a campanha representa e copy geograficamente correta. |
| Caio — campanha | **Não aprova** | A proposta de conversão existe, mas os destinos e a operação de dados ainda não. |
| Helena — jurídico/LGPD | **Não aprova** | Número precisa da fonte eleitoral; alegações, status e privacidade ainda exigem validação. |
| Bianca — marca | **Aprova a direção** | A nova identidade finalmente segue o manual; pede disciplina no uso da barra tricolor. |
| Diego — acessibilidade/performance | **Não aprova** | Overflow mobile, estrutura semântica, OG e contraste de estados impedem aceite. |
| Maya — marketing | **Condicional** | O gancho “028” é forte e memorável; deve aparecer sem corte, com preview de compartilhamento e CTA real. |

### Pode avançar quando

1. As três pendências P0 forem resolvidas e documentadas.
2. O hero e a barra fixa passarem em 360 px, 320 px e zoom 200%, sem corte ou rolagem horizontal.
3. H1, landmarks, rótulo acessível do número, OG e destinos reais forem implementados.
4. O cliente formalizar a relação entre os 9 municípios do DDD e as 3 cidades do Triângulo, atualizando `00-indice.md` como fonte única.

**Decisão central a pedir ao cliente:** a comunicação eleitoral abrange os nove municípios do DDD 028, enquanto o Triângulo do Sul representa somente as três cidades de origem? A resposta determina a copy, o formulário, as bandeiras e a prova de presença.
