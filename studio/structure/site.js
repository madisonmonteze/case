import React from 'react'
import Emoji from 'a11y-react-emoji'
import S from '@sanity/desk-tool/structure-builder'

const SiteIcon = () => <Emoji style={{ fontSize: '2rem' }} symbol="🌎" />

export default S.listItem()
  .title('Site')
  .icon(SiteIcon)
  .child(S.document().schemaType('site').documentId('site').title('Site Metadata'))
