export default {
    title: 'Get in Touch',
    name: 'getInTouch',
    type: 'document',
    __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
    fields: [
      {
        name: 'title',
        type: 'string',
      },
      {
        name: 'body',
        type: 'withButtonModule',
      },
      {
        name: 'socialHeading',
        type: 'string',
      },
      {
        name: 'socialSubheading',
        type: 'text',
      },
      {
        name: 'socialLinks',
        type: 'array',
        of: [{ type: 'externalLink' }]
      },
    ],
    preview: {
      select: { title: '' },
      prepare() {
        return Object.assign({}, { title: 'Get in Touch' })
      },
    },
  }