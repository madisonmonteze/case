export default {
    title: 'Who Are We',
    name: 'whoAreWe',
    type: 'document',
    __experimental_actions: ['update', 'create', /* 'delete', */ 'publish'],
    fields: [
      {
        name: 'title',
        type: 'string',
      },
      {
        name: 'sideImage',
        type: 'uploadImage',
      },
      {
        name: 'firstTextBlock',
        type: 'blockText',
      },
      {
        name: 'blockquote',
        type: 'string',
      },
      {
        name: 'secondTextBlock',
        type: 'blockText',
      },
      {
        name: 'membersSubheading',
        type: 'string',
      },
      {
        name: 'membersList',
        type: 'array',
        of: [{ type: 'externalLink' }]
      },
    ],
    preview: {
      select: { title: '' },
      prepare() {
        return Object.assign({}, { title: 'Who Are We' })
      },
    },
  }
  