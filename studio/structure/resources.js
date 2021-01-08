import React from 'react'
import Emoji from 'a11y-react-emoji'
import S from '@sanity/desk-tool/structure-builder'

const ResourcesIcon = () => <Emoji style={{ fontSize: '2rem' }} symbol="🌳" />

export default S.listItem()
  .title('Resources Page')
  .icon(ResourcesIcon)
  .child(S.document().schemaType('resources').documentId('resources').title('Resources'))