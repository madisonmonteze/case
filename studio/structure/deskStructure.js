import S from '@sanity/desk-tool/structure-builder'

import site from './site'
import homepage from './homepage'
import resources from './resources'
import navigation from './navigation'


export default () => S.list().title('Content').items([site, homepage, resources, navigation])
