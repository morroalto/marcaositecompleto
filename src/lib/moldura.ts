import { arquivo, limites, erros } from '@/content/moldura'

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

/** a marca oficial, buscada uma vez por visita */
let marcaCache: Promise<ImageBitmap> | null = null
function carregarMarca(): Promise<ImageBitmap> {
  marcaCache ??= fetch('/marca/lockup-branco.png')
    .then((r) => r.blob())
    .then((b) => createImageBitmap(b))
  return marcaCache
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

  /* O VERDE QUE SOBE DO PÉ. Uma cor só, do transparente ao verde da marca:
     misturar verde com petróleo aqui embaixo dava um tom pardo que não existe
     em peça nenhuma da campanha.

     O QUARTO DE BAIXO É PRATICAMENTE CHAPADO, e isso não é excesso. A foto que
     entra aqui é desconhecida: pode ser noturna, pode ser uma praia estourada
     de sol, pode ter uma camisa branca exatamente onde vai cair o "MARCÃO". Um
     véu suave funciona em metade das fotos e falha na outra metade, e falhar
     aqui significa a marca ilegível na foto de perfil de um apoiador. A rampa
     começa alta e longa, então o rosto não é atingido; o que fica sólido é só
     a faixa onde a marca se apoia. */
  const g = ctx.createLinearGradient(0, lado * 0.36, 0, lado)
  g.addColorStop(0.00, 'rgba(47,92,27,0)')
  g.addColorStop(0.30, 'rgba(43,84,25,.52)')
  g.addColorStop(0.55, 'rgba(36,72,21,.88)')
  g.addColorStop(0.76, 'rgba(30,62,16,.98)')
  g.addColorStop(1.00, 'rgb(26,54,13)')
  ctx.fillStyle = g
  ctx.fillRect(0, 0, lado, lado)

  // a marca oficial, em arquivo: o desenho do lockup é do designer, não meu
  const marca = await carregarMarca()
  const larguraMarca = Math.round(lado * 0.68)
  const alturaMarca = Math.round((larguraMarca * marca.height) / marca.width)
  const margem = Math.round(lado * 0.085)
  ctx.drawImage(
    marca,
    Math.round((lado - larguraMarca) / 2),
    lado - margem - alturaMarca,
    larguraMarca,
    alturaMarca,
  )

  /* A FAIXA LEGAL saiu em 17/08/2026, a pedido. Ela trazia a razão social e o
     CNPJ da campanha deitados na borda direita, como na arte oficial.
     ⚠️ Confirmar com o advogado eleitoral: a Resolução TSE 23.610/2019 exige a
     identificação de quem pagou no material de propaganda, e falta definir se
     uma foto de perfil montada pelo próprio apoiador entra nessa regra. Para
     devolver, o desenho está no histórico do git. */
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
