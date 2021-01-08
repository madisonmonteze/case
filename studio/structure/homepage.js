import React from 'react'
import Emoji from 'a11y-react-emoji'
import S from '@sanity/desk-tool/structure-builder'

const HomepageIcon = () => <Emoji style={{ fontSize: '2rem' }} symbol="📄" />
const HomeSectionIcon = () => <Emoji style={{ fontSize: '2rem' }} symbol="👉" />
const WhatSectionIcon = () => <Emoji style={{ fontSize: '2rem' }} symbol="🚧" />
const WhoSectionIcon = () => <Emoji style={{ fontSize: '2rem' }} symbol="👥" />
const ContactSectionIcon = () => <Emoji style={{ fontSize: '2rem' }} symbol="👋" />

export default S.listItem()
  .title('Homepage')
  .icon(HomepageIcon)
  .child(
    S.list()
      .title('Homepage')
      .items([
        S.documentListItem().icon(HomeSectionIcon).id('home').schemaType('home').title('Home'),
        S.documentListItem().icon(WhatSectionIcon).id('whatWeDo').schemaType('whatWeDo').title('What'),
        S.documentListItem().icon(WhoSectionIcon).id('whoAreWe').schemaType('whoAreWe').title('Who'),
        S.documentListItem().icon(ContactSectionIcon).id('getInTouch').schemaType('getInTouch').title('Contact'),
      ])
  )