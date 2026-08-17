/**
 * OS JINGLES DA CAMPANHA
 *
 * A trilha do site é um LAÇO sobre esta lista: toca a primeira, quando ela
 * acaba entra a segunda, e depois da última volta para a primeira, sem parar.
 * Antes era um arquivo só em `loop`, o que fazia a mesma faixa repetir enquanto
 * a pessoa lia a página inteira.
 *
 * PARA ACRESCENTAR OU TROCAR UMA FAIXA, dois passos:
 *   1. jogue o arquivo em `public/audio/`
 *   2. escreva o caminho dele aqui
 * Só isso — o player não precisa ser tocado, ele lê esta lista.
 *
 * `arquivos` é a MESMA faixa em formatos diferentes, do melhor para o mais
 * compatível: o navegador escolhe o primeiro que sabe tocar. Opus pesa cerca de
 * 25% menos que o m4a na mesma qualidade, mas o Safari mais antigo não o
 * reconhece — daí os dois.
 *
 * ⚠️ FAIXAS AINDA SEM ARQUIVO (17/08/2026): das quatro que a campanha gravou,
 * só a primeira está em `public/audio/`. As outras três estão declaradas com o
 * nome que os arquivos precisam ter. Enquanto eles não chegam, o player pula a
 * faixa que não carrega e segue no laço — nada quebra, e no dia em que os
 * arquivos entrarem na pasta o laço passa a tocar as quatro sem mais nenhuma
 * mudança de código.
 */

export interface Faixa {
  slug: string
  /** só para depuração e para o rótulo de leitor de tela */
  titulo: string
  /** a mesma faixa em vários formatos, do melhor para o mais compatível */
  arquivos: string[]
  revisado: boolean
}

export const jingles: Faixa[] = [
  {
    slug: 'jingle-1',
    titulo: 'Jingle da campanha',
    arquivos: ['/audio/jingle.opus', '/audio/jingle.m4a'],
    revisado: true,
  },
  {
    slug: 'jingle-2',
    titulo: 'Jingle 2',
    arquivos: ['/audio/jingle-2.m4a'],
    revisado: false,
  },
  {
    slug: 'jingle-3',
    titulo: 'Jingle 3',
    arquivos: ['/audio/jingle-3.m4a'],
    revisado: false,
  },
  {
    slug: 'jingle-4',
    titulo: 'Jingle 4',
    arquivos: ['/audio/jingle-4.m4a'],
    revisado: false,
  },
]
