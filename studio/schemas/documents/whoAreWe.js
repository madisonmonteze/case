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
        name: 'text',
        type: 'blockText',
      },
      {
        name: 'membersSubheading',
        type: 'string',
      },
      {
        name: 'membersList',
        type: 'array',
        of: [{ type: 'string' }]
      },
    ],
    preview: {
      select: { title: '' },
      prepare() {
        return Object.assign({}, { title: 'Who Are We' })
      },
    },
  }
  