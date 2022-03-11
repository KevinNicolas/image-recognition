import axios from 'axios'

export const getImage = async (imageUrl: string): Promise<Buffer | undefined> => {
  try {
    const { data } = await axios.get(imageUrl, { responseType: 'arraybuffer' })
    return data
  } catch (e) {
    console.error('Error en la obtencion de la imagen...')
  }
}
