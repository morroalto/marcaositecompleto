# Marcão Vivacqua 36.028

Site de campanha para **Marco Antônio Vieira de Novaes**, candidato a Deputado Estadual pelo
Espírito Santo, Agir, número **36.028**.

> **Um novo Marco para o Sul**

---

## Stack

| | Versão | Por quê |
|---|---|---|
| Next.js | `16.3.0` | App Router, Server Components, Turbopack |
| React | `19.2.8` | |
| Tailwind CSS | `4.3.3` | `@theme inline`, tokens fora de camada |
| TypeScript | `6.0.3` | **não subir para 7.x**: é o compilador reescrito em Go e quebra o `next build` |
| ESLint | `9.39.5` | **não subir para 10.x**: quebra o `eslint-plugin-react` que vem dentro do `eslint-config-next` |

Zero dependência de UI: sem shadcn, sem Radix, sem lucide, sem react-hook-form, sem zod.
Ícones são SVG próprio.

## Rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # produção
npm run lint
```

### Modo de revisão

Crie `.env.local`:

```
NEXT_PUBLIC_MOSTRAR_PENDENCIAS=1
```

Liga as caixas vermelhas que marcam o que ainda depende de aprovação, e mostra os campos de
vídeo reservados. **Nunca ligar em produção**: em produção, seção sem conteúdo real não
renderiza.

---

## Estrutura

```
src/
  app/          rotas, layout, OG, sitemap, robots, manifest, api
  components/   secoes/ (as 8 seções) · ui/ (marca, ícones, vídeo, mapa)
  content/      TODO o texto e os dados vivem aqui
  lib/          utilitários
  proxy.ts      cabeçalhos de segurança e limite por IP
public/         fontes, fotos e o vetor do partido
docs/           design system, prompts, as 50 personas de revisão
prototipo/      protótipo estático em HTML, anterior ao Next
```

> O app fica na **raiz do repositório**, de propósito. Com ele dentro de uma
> subpasta, todo serviço de deploy exige configurar "Root Directory", e errar
> esse campo produz um 404 que não parece ter relação com a causa. Na raiz,
> Vercel, Render e Netlify detectam o Next sozinhos, sem configuração.

**Nenhum texto mora dentro de componente.** Para trocar qualquer palavra do site, edite
`src/content/`.

| Arquivo | O que controla |
|---|---|
| `candidato.ts` | nome, número, CNPJ, endereço, redes, links |
| `bandeiras.ts` | os cinco eixos e os compromissos |
| `facetas.ts` | as sete facetas, a biografia e o território |
| `territorio.ts` | as nove cidades e os registros de escuta |
| `videos.ts` | os quatro campos de vídeo |
| `mapa-es.ts` | geometria do mapa, gerada da malha do IBGE |

---

## Arquitetura da página

1. **Abertura** — nome, número, contagem regressiva
2. **O Sul tem número** — 36 é o partido, 028 é o DDD, e as nove cidades
3. **Quem é o Marcão** — as sete facetas, o elemento assinatura
4. **De onde eu venho** — biografia, família e o Triângulo do Sul
5. **O que eu vejo** — o território, com mapa do IBGE e foto real da região
6. **O que eu ouvi** — o Triângulo da Escuta
7. **O que eu vou fazer** — as cinco bandeiras
8. **Bora junto** — cadastro de apoiador

---

## Regras que o projeto segue

- **Todo dado factual carrega fonte.** Nada é estimado, arredondado ou plausível.
- **Seção sem conteúdo real não renderiza.** Placeholder bonito é mentira.
- **Corpo mínimo de 17 px e alvo de toque de 52 px.** O leitor tem de 30 a 65 anos e lê no
  celular, no sol.
- **Contraste calculado, nunca estimado.**
- **O mapa vem da malha oficial do IBGE.** Fronteira errada num site de campanha é
  desinformação geográfica.

---

## Pendências antes do go-live

- [ ] Conferir **36.028** no DivulgaCand do TSE
- [ ] Link real do WhatsApp e do grupo
- [ ] Destino do formulário (`APOIADOR_WEBHOOK`): hoje o cadastro valida mas não é entregue
- [ ] Checar histórico eleitoral de 2018 e 2022 no DivulgaCand (risco de homônimo)
- [ ] Autorização por escrito para as fotos de familiares
- [ ] Revisão do advogado eleitoral
- [ ] Aprovar os textos marcados com `revisado: false` em `content/`
- [ ] Fonte **Momo Trust Display**, que é a tipografia real do lockup
- [ ] Vídeos e as fotos que faltam

Detalhe de cada item em [`docs/o-que-falta-de-texto.md`](docs/o-que-falta-de-texto.md).
