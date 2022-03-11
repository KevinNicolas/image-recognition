import { recognize } from 'tesseract.js'

export const recognizeImage = async (image: Buffer, lang: 'spa' | 'eng'): Promise<string> => {
  const text = await recognize(image, lang, {
    logger: (arg) => {
      if (arg.status === 'recognizing text') {
        const i = Math.floor(arg.progress * 10)
        const dots = '.'.repeat(i)
        const left = 10 - i
        const empty = ' '.repeat(left)
        process.stdout.write(`\r[${dots}${empty}] ${i * 10}%`)
      }
    },
  })
  console.info()
  return text.data.text
}
