# O QUE FALTA DE TEXTO

Tudo que está aqui é **afirmação sobre uma pessoa real numa eleição real**. Nada disso pode ser
escrito por mim: não está no manual de marca, não está no comprovante de CNPJ, não está em fonte
pública. Se eu inventar, viro o problema.

Pode vir como quiser: áudio de WhatsApp, print, bilhete, ligação transcrita. Eu ajusto o tom para a
voz dele e coloco no lugar certo.

---

## 1. Cinco compromissos, um por eixo

Arquivo: `site/src/content/bandeiras.ts`, campo `compromisso`.

**Formato que funciona:** problema com nome de lugar, seguido do que ele vai fazer. Frase curta,
verbo ativo. "Asfalto que falta em X" bate mais que "melhoria da malha viária".

| Eixo | O que já está escrito (contexto) | O que falta |
|---|---|---|
| **Infraestrutura** | Estrada, saneamento, porto e a ligação entre as nove cidades do 028 | ⬜ qual trecho, qual município, e o compromisso |
| **Saúde** | Fila de exame, leito e transporte de paciente | ⬜ qual exame, qual hospital, e o compromisso |
| **Educação** | Escola técnica perto de casa, ligada a pesca, agro, petróleo e turismo | ⬜ qual curso, qual cidade, e o compromisso |
| **Desenvolvimento econômico** | Royalty que fica, indústria que chega, turismo além de janeiro | ⬜ qual royalty, qual contrapartida, e o compromisso |
| **Emprego e oportunidade** | Para o filho de quem mora aqui não precisar ir embora | ⬜ qual setor, qual número, e o compromisso |

> Exemplo de forma, **não de conteúdo**: "A ES-060 entre X e Y tem N km sem acostamento. Vou cobrar
> a duplicação no orçamento do estado, com prazo."

---

## 2. Sete falas, uma por faceta

Arquivo: `site/src/content/facetas.ts`, campo `fala`.

Uma frase, na voz dele, sobre aquele papel. É o que transforma a foto em história.

| Faceta | Foto que está no ar | Falta |
|---|---|---|
| **Pai** | com as três filhas, camisa do Fluminense | ⬜ uma frase |
| **Avô** | com o neto Marco Antônio no colo | ⬜ uma frase |
| **Marido** | com a Adriana, na mesa de café | ⬜ uma frase |
| **Homem do campo** | de chapéu, em área rural | ⬜ uma frase |
| **Empreendedor** | camisa listrada, empreendimento à beira-mar | ⬜ uma frase |
| **Oficial de justiça** | de terno, lendo documento | ⬜ uma frase |
| **Candidato** | retrato de estúdio, camisa azul | ⬜ uma frase |

---

## 3. Três blocos de biografia

Arquivo: `site/src/content/facetas.ts` (a criar, campo `biografia`).

- ⬜ **Origem**: de onde ele é, o que a família fazia
- ⬜ **Trajetória**: o que ele fez antes da política, com data e lugar
- ⬜ **Motivação**: por que se candidatou agora, na voz dele

Nada de currículo em bullet. É ele falando.

---

## 4. Links e dados que só a assessoria tem

- ⬜ **Link do WhatsApp** de contato direto
- ⬜ **Link do grupo** de WhatsApp
- ⬜ **Telefone oficial** da campanha (não consta no CNPJ, que traz "(0) 0")
- ⬜ **Destino do formulário**: planilha, CRM ou webhook, para o cadastro não se perder
- ⬜ **Grafia acentuada do nome civil**, batendo com o registro da Receita
- ⬜ **Autorização por escrito** para as fotos da família (Adriana, filhas, neto)
- ⬜ **Fonte Momo Trust Display**, que é a tipografia real do lockup

---

## 5. Checagens que bloqueiam o go-live

- ⬜ Conferir **36.028** no DivulgaCand do TSE
- ⬜ Checar no DivulgaCand o **histórico eleitoral de 2018 e 2022** (risco de homônimo)
- ⬜ Levantamento nominal dos eleitos do Sul do ES por legislatura, para validar ou derrubar a
  frase **"20 anos sem voz na Assembleia"** que está no manual
- ⬜ **Revisão do advogado eleitoral** sobre o site inteiro

---

## Onde ver o que falta, na tela

O site tem modo de revisão. Com `NEXT_PUBLIC_MOSTRAR_PENDENCIAS=1` no `.env.local`, cada buraco
aparece marcado. Em produção, com a variável desligada, **a seção sem conteúdo real simplesmente
não renderiza**: nada de placeholder, nada de "em breve".

Hoje, se o site subisse em produção, sumiriam: as cinco bandeiras, a biografia e os quatro blocos
de vídeo. O que ficaria de pé: hero, número, as sete facetas com foto, a família, o mapa, o
território, o triângulo da escuta e o formulário.
