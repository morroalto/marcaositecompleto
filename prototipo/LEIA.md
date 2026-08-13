# Protótipo — Marcão Vivácqua 36028

**Abra `index.html` direto no navegador.** HTML + CSS + JS vanilla, zero build, zero dependência,
funciona offline.

Ele existe para você decidir **o desenho** antes de eu escrever Next + Tailwind. Não é o site.

---

## O que olhar

| Onde | O que avaliar |
|---|---|
| **Hero** | o número `36028` tem presença suficiente? A foto com entalhe triangular na base funciona? |
| **Triângulo da Escuta** | é o elemento assinatura. Os três lóbulos lidos como uma figura só? Clique nos botões. Use **"Ver com dados de exemplo"** para ver o estado preenchido |
| **Estado vazio** | os três lóbulos vazados são o estado **real** — não há registro de escuta confirmado. É honesto e mostra onde a campanha ainda vai chegar |
| **Bandeiras** | grade de cards de tamanhos diferentes; o primeiro card ocupa a linha inteira |
| **Formulário** | envie vazio para ver o erro; preencha para ver carregando → sucesso |
| **360 px** | reduza a janela até 360 px. Sem rolagem horizontal, corpo 17 px, alvos ≥ 48 px |
| **Barra fixa** | no mobile, WhatsApp e número sempre visíveis, sem hambúrguer escondendo a conversão |

Teste **só com o teclado**: Tab, Enter, Esc. Tudo tem que ser alcançável, com foco visível.

---

## O que é real e o que não é

**Real, com fonte:**
- Número `36028`, nome civil, CNPJ, endereço e e-mail — comprovante da Receita + campanha
- Paleta — medida por pixel no logo `Ativo 26TDS.png`
- Slogan **"Unidos pelo que é nosso."** — está na camiseta oficial, na foto do hero
- Cidades e pareamento (Marataízes/abacaxi, Itapemirim/pesca, Kennedy/petróleo) — fonte pública
- Fotos — acervo profissional do cliente

**Marcado como pendência (as caixas vermelhas tracejadas):**
- Problema concreto + compromisso de cada bandeira
- Bio em primeira pessoa
- Registros de escuta
- Links de WhatsApp e da Política de Privacidade

As caixas vermelhas **não vão para produção**: em produção a seção sem conteúdo real simplesmente
não renderiza. Elas só existem aqui para você ver o layout.

---

## Diferenças conscientes em relação à versão Next

| Aqui | Na versão Next |
|---|---|
| CSS puro com tokens em `:root` | mesmos tokens em `@theme inline`, mesmos nomes `mv-` |
| fontes servidas cruas (114 kb) | `next/font/local` + `pyftsubset` → dentro dos 80 kb |
| `.jpg` | AVIF com variante mobile e `fetchpriority="high"` |
| conteúdo no HTML | `content/*.ts` tipado, com campo `fonte` obrigatório |
| JS vanilla | Server Components + ilha de cliente só no triângulo e no formulário |

O CSS foi escrito já na estrutura de camadas do Tailwind 4 — token **fora** de camada, elemento em
`@layer base`, primitivo em `@layer components` — então a migração é mecânica.

---

## Trocar a foto do hero

`assets/hero-alt.jpg` é uma alternativa (camiseta azul) já cortada. Troque o `src` no `index.html`.
O acervo tem 114 fotos em
`Downloads\MIDIAS-…\MIDIAS\FOTOS - PROFISISONAIS\FOTOS JPEG` — quatro figurinos, fundo branco.

---

## Regerar o PDF do design system

```bash
node docs/_build/md-to-html.mjs docs/design-system-v3.md docs/_build/design-system-v3.html
# depois: Chrome --headless --print-to-pdf
```
