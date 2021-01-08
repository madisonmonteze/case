// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// documents
import site from './documents/site'
import home from './documents/home'
import whatWeDo from './documents/whatWeDo'
import whoAreWe from './documents/whoAreWe'
import getInTouch from './documents/getInTouch'
import resources from './documents/resources'
import navigation from './documents/navigation'

// objects
import uploadImage from './objects/uploadImage'
import blockText from './objects/blockText'
import listItem from './objects/listItem'
import blockList from './objects/blockList'
import externalLink from './objects/externalLink'
import navItem from './objects/navItem'
import highlights from './objects/highlights'
import withButtonModule from './objects/withButtonModule'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // documents
    site,
    home,
    whatWeDo,
    whoAreWe,
    getInTouch,
    resources,
    navigation,

    // objects
    uploadImage,
    blockText,
    listItem,
    blockList,
    externalLink,
    navItem,
    highlights,
    withButtonModule,
  ]),
})
