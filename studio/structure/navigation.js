import React from 'react'
import Emoji from 'a11y-react-emoji'
import S from '@sanity/desk-tool/structure-builder'

const NavIcon = () => <Emoji style={{ fontSize: '2rem' }} symbol="🗺️" />

export default S.listItem()
  .title('Navigation')
  .icon(NavIcon)
  .child(S.document().schemaType('navigation').documentId('navigation').title('Site Navigation'))
