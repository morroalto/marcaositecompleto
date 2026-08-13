# Marcão Vivácqua 2026 — documentos de partida

Gerado em 12/08/2026.

## Prompts (cada um autossuficiente)

| Arquivo | Eixo | Quando usar |
|---|---|---|
| [prompt-v1.md](prompt-v1.md) | ancoragem e correção factual | registro — mostra o que estava errado no prompt base |
| [prompt-v2.md](prompt-v2.md) | atrito produtivo, diferenciação, verificação | registro — mostra o processo anti-genérico |
| **[prompt-v3.md](prompt-v3.md)** | **operação real de campanha** | ✅ **este é o de colar** |

## Design system + style guide

| Arquivo | Eixo | Quando usar |
|---|---|---|
| [design-system-v1.md](design-system-v1.md) | tokenizar a marca real, assinatura da casa | registro — "o sistema óbvio", assumidamente genérico |
| [design-system-v2.md](design-system-v2.md) | diferenciação estrutural + arquitetura de token | registro — corrige os 12 defeitos da V1 |
| [design-system-v3.md](design-system-v3.md) | calibrado para o eleitor | 🧊 **superado pela V4** — foi escrito SEM ler o manual de marca |
| **[design-system-v4.pdf](design-system-v4.pdf)** | **a identidade real do `idmarcão.pdf` aplicada à web** | ✅ **este é o de implementar** — 12 págs A4 paisagem, desenhado na própria marca. Fonte: [_build/design-system-v4.html](_build/design-system-v4.html) |

> ⚠️ **Por que a V4 existe:** as V1–V3 partiram de cores medidas por pixel num logo antigo e de
> fontes escolhidas por mim. Em 12/08 o `idmarcão.pdf` (13 págs, Canva) foi finalmente extraído e
> revelou a identidade real: paleta oficial com função (`#003B44 #12406F #45872C #FF7A00 #FFD400`),
> slogan **"Um novo Marco para o Sul"**, hashtag **#agoraéMARCÃO!**, o conceito dos **três marcos**,
> a grafia **36.028 com ponto** (36 = partido, **028 = DDD do Sul**), o estilo cartaz (itálico
> pesado + contorno branco + sombra dura), duotone 118°, hachuras, barra tricolor e lambe-lambe.
> O manual ganha — como a regra de precedência sempre disse.

Cada versão abre com a tabela do que corrige na anterior. A cadeia é V1 → V2 → V3 nos dois trilhos.

> As V1 e V2 são **registro congelado** de 12/08/2026, anterior ao comprovante de CNPJ. Elas ainda
> listam pendências já resolvidas. Para dado factual, use sempre este índice e as V3.

## Fatos apurados (não inventados)

**Paleta** — medida por amostragem de pixel em `ID VISUAL\ANTIGOS\TRIANGULO_DO_SUL\1500h\Ativo 26TDS.png`:
`#003C44` petróleo · `#103C70` marinho · `#468429` mata · `#FF8103` abacaxi · `#FFE000` coroa.
De `CAPA DOS DESTAQUES\IMG-20260724-WA0124(1).jpg`: `#004F9E` e `#277DB6`.

**Registro legal** — comprovante de inscrição no CNPJ, Receita Federal, emitido em 03/08/2026:

| Campo | Valor |
|---|---|
| **Número na urna** | **36.028** — 36 = Agir, **028 = o DDD do Sul** (conceito central da campanha). Grafar **com ponto**, como em todas as peças do manual; o `aria-label` soletra os dígitos |
| CNPJ da campanha | **68.345.764/0001-52** |
| Nome empresarial | `ELEICAO 2026 MARCO ANTONIO VIEIRA DE NOVAES DEPUTADO ESTADUAL` |
| Nome civil | **Marco Antônio Vieira de Novaes** ("Marcão Vivácqua" é o nome de urna) |
| Sede da campanha | Av. Francisco Lacerda de Aguiar, 223 — Centro — Marataízes/ES — 29.345-000 |
| E-mail oficial | `marcaovivacqua@gmail.com` |

**Território** — definido pelo cliente em 12/08/2026:
**Marataízes · Itapemirim · Presidente Kennedy**, somente estas três.
"Triângulo do Sul" é a expressão que nomeia o movimento entre elas — conceito da própria campanha,
não marca de terceiro.

→ **Decisão de design decorrente:** três lóbulos do logo = três cidades. **O logo é o mapa.**
Sem SVG geográfico, sem biblioteca de mapa. Ver [design-system-v3.md](design-system-v3.md) §5.

**Pareamento lóbulo → cidade** — verificado em fonte pública (12/08/2026):

| Lóbulo | Símbolo | Cidade | Evidência |
|---|---|---|---|
| superior, verde | abacaxi | **Marataízes** | capital estadual do abacaxi — 58% da produção do ES |
| inferior esquerdo, marinho | peixe | **Itapemirim** | Porto de Itaipava — maior polo pesqueiro do ES |
| inferior direito, petróleo | plataforma | **Presidente Kennedy** | maior arrecadador de royalties de petróleo do ES |

Ordem geográfica (lista de fallback), norte → sul: **Itapemirim → Marataízes → Presidente Kennedy**.
O arranjo do logo **não** é geográfico — é conceitual.

## Pendências

**Nenhum bloqueador T1 em aberto.**

1. Conferência cruzada do `36028` no DivulgaCand/TSE antes do go-live.
2. Grafia acentuada do nome civil — o registro vem em caixa alta sem acento.
3. Telefone oficial — não consta no cadastro do CNPJ.
4. Encontros citados em Atílio Vivácqua, Cachoeiro e Jerônimo Monteiro: estão **fora da base**. Visita pontual ou erro do briefing?
5. `idmarcão.pdf` não lido — falta renderizador de PDF. Se o manual contradisser o medido, o manual ganha.
6. Fotos de apoiador — sem autorização registrada, não entram.
