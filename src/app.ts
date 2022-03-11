import { prompt } from 'inquirer'
import { getImage } from './functions/get-image'
import { recognizeImage } from './functions/recognize-image'

export const app = async () => {
  const { imageUrl } = await prompt([
    {
      name: 'imageUrl',
      type: 'input',
      message: 'Image url:',
    },
  ])

  const imageBuffer: Buffer | undefined = await getImage(imageUrl)
  if (imageBuffer) {
    const text = await recognizeImage(imageBuffer, 'spa')
    console.info('Text:')
    console.info()
    console.info('\x1b[32m', text, '\x1b[0m')
  }
}
