export const filterOutDocsWithoutSlugs = ({ slug }) => {
    return (slug || {}).current
  }
  
  export const buildImageObj = (source = { asset: {} }) => {
    const imageObj = {
      asset: { _ref: source.asset._ref || source.asset._id },
    }
  
    if (source.crop) imageObj.crop = source.crop
    if (source.hotspot) imageObj.hotspot = source.hotspot
  
    return imageObj
  }
  
  export const toPlainText = blocks => {
    if (!blocks) return ''
  
    return blocks
      .map(block => {
        if (block._type !== 'block' || !block.children) {
          return ''
        }
        return block.children.map(child => child.text).join('')
      })
      .join('\n\n')
  }
  