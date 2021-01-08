import imageUrlBuilder from '@sanity/image-url'
import clientConfig from '../../client-config.js'

const builder = imageUrlBuilder(clientConfig.sanity)

export const urlFor = source => {
  return builder.image(source)
}
