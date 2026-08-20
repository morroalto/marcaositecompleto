import { arquivo, limites, erros, filtro as ajusteDoFiltro } from '@/content/moldura'

/**
 * A MOLDURA, DESENHADA NO NAVEGADOR
 *
 * ⚠️ NADA AQUI SOBE PARA SERVIDOR NENHUM, e isso é decisão de projeto, não
 * limitação. A foto da pessoa é lida do disco dela, decodificada no navegador
 * dela, desenhada num canvas dela e devolvida como download. Não existe rota de
 * upload para atacar, não existe pasta com foto de eleitor para vazar, não
 * existe base de rosto para a LGPD cobrar, e ninguém consegue usar o site da
 * campanha como hospedagem de conteúdo alheio. O jeito mais seguro de guardar
 * a foto de alguém é não recebê-la.
 *
 * O canvas também não fica "sujo" (tainted): a foto vem de um File e a marca
 * vem do nosso próprio domínio, então as duas são de mesma origem e o
 * `toBlob` funciona. Marca puxada de CDN de terceiro bloquearia a exportação.
 */

/* ─────────────────────── entrada ─────────────────────── */

/**
 * CONFERE OS PRIMEIROS BYTES, e não a extensão nem o `file.type`.
 *
 * Os dois vêm do sistema operacional e mentem sem esforço: basta renomear
 * qualquer coisa para `.jpg`. Os primeiros bytes são o próprio formato se
 * apresentando, e é o que o decodificador vai olhar de qualquer jeito.
 */
async function formatoDeVerdade(file: File): Promise<'jpeg' | 'png' | 'webp' | null> {
  const b = new Uint8Array(await file.slice(0, 12).arrayBuffer())
  if (b.length < 12) return null
  if (b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff) return 'jpeg'
  if (b[0] === 0x89 && b[1] === 0x50 && b[2] === 0x4e && b[3] === 0x47) return 'png'
  const marca = (i: number, s: string) =>
    [...s].every((c, j) => b[i + j] === c.charCodeAt(0))
  if (marca(0, 'RIFF') && marca(8, 'WEBP')) return 'webp'
  return null
}

/** Devolve a mensagem de erro, ou `null` quando o arquivo serve. */
export async function conferir(file: File): Promise<string | null> {
  if (file.size > limites.pesoMax) return erros.peso
  if (file.size === 0) return erros.quebrado
  if (!(await formatoDeVerdade(file))) return erros.tipo
  return null
}

/**
 * Abre a foto. `createImageBitmap` decodifica FORA da thread principal e sem
 * passar os bytes pelo DOM, então uma foto de 40 megapixels não trava a página
 * nem vira um elemento que outro script possa ler.
 *
 * A conferência de tamanho vem DEPOIS de abrir, porque só aqui as dimensões
 * existem: é o peso do arquivo que mente sobre quantos pixels ele guarda.
 */
export async function abrir(file: File): Promise<ImageBitmap | string> {
  let bmp: ImageBitmap
  try {
    bmp = await createImageBitmap(file)
  } catch {
    return erros.quebrado
  }
  const maior = Math.max(bmp.width, bmp.height)
  const menor = Math.min(bmp.width, bmp.height)
  if (maior > limites.ladoMax) { bmp.close(); return erros.grande }
  if (menor < limites.ladoMin) { bmp.close(); return erros.pequena }
  return bmp
}

/* ─────────────────────── desenho ─────────────────────── */

/**
 * A ARTE DO FILTRO, buscada uma vez por visita.
 *
 * É um PNG com transparência de verdade: a metade de cima é 100% transparente
 * e a de baixo traz o selo e o véu claro. Ou seja, ele é uma CAMADA, não uma
 * moldura — basta assentar por cima da foto no tamanho da peça.
 *
 * Antes deste arquivo existir, o pé verde e a marca eram desenhados aqui, à
 * mão. Isso saiu inteiro: quando existe a arte do designer, reconstruí-la em
 * código é só uma chance a mais de errar o desenho dele.
 */
let filtroCache: Promise<ImageBitmap> | null = null
function carregarFiltro(): Promise<ImageBitmap> {
  filtroCache ??= fetch('/marca/filtro-avatar.png')
    .then((r) => r.blob())
    .then((b) => createImageBitmap(b))
  return filtroCache
}

/**
 * O RECORTE. A foto preenche o quadrado inteiro, sem deformar, e o que sobra
 * de fora é cortado.
 *
 * `FOCO_Y` põe o centro do recorte a 35% do topo, e não no meio. Foto de gente
 * tem rosto na parte de cima, e o terço de baixo desta peça é da marca — com o
 * corte centrado, metade dos retratos saía com a cabeça encostando na borda de
 * cima e o queixo atrás do "MARCÃO".
 */
const FOCO_Y = 0.35

function preencher(ctx: CanvasRenderingContext2D, bmp: ImageBitmap, lado: number) {
  const escala = Math.max(lado / bmp.width, lado / bmp.height)
  const l = bmp.width * escala
  const a = bmp.height * escala
  ctx.drawImage(bmp, (lado - l) / 2, (lado - a) * FOCO_Y, l, a)
}

/**
 * DESENHA A PEÇA INTEIRA no canvas, sempre em 1500 por 1500.
 *
 * O canvas é criado no tamanho final e só depois encolhido por CSS para caber
 * na tela. Desenhar no tamanho da tela e ampliar na hora de salvar devolveria
 * uma marca serrilhada.
 */
export async function desenhar(canvas: HTMLCanvasElement, bmp: ImageBitmap) {
  const lado = arquivo.lado
  canvas.width = lado
  canvas.height = lado

  const ctx = canvas.getContext('2d')
  if (!ctx) throw new Error('canvas sem contexto 2d')
  ctx.clearRect(0, 0, lado, lado)

  preencher(ctx, bmp, lado)

  /* A CAMADA DO FILTRO, esticada de 800 para 1500.
     `imageSmoothingQuality` em 'high' porque a arte vem em 800 e a peça sai em
     1500: sem isso o navegador usa uma interpolação barata e o contorno branco
     do selo chega serrilhado. Com 'high' ele suaviza, mas ampliar 1,9 vez
     ainda custa nitidez — uma versão da arte em 1500 sairia melhor. */
  const filtro = await carregarFiltro()
  ctx.imageSmoothingEnabled = true
  ctx.imageSmoothingQuality = 'high'
  /* A ARTE DESCE `ajusteDoFiltro.desce`, e o que passar da borda de baixo é
     cortado pelo próprio canvas. Não sobra costura: o pé da arte é um véu
     contínuo, então ele simplesmente termina na borda em vez de terminar
     antes dela. */
  ctx.drawImage(filtro, 0, Math.round(lado * ajusteDoFiltro.desce), lado, lado)
}

/** O PNG final, como Blob. `toBlob` é assíncrono e não trava a aba. */
export function exportar(canvas: HTMLCanvasElement): Promise<Blob> {
  return new Promise((ok, erro) => {
    canvas.toBlob(
      (b) => (b ? ok(b) : erro(new Error('canvas não exportou'))),
      arquivo.tipo,
    )
  })
}
