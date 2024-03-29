export default {
    title: 'Home',
    name: 'home',
    type: 'document',
    __experimental_actions: ['update',/*  'create', 'delete', */ 'publish'],
    fields: [
      {
        name: 'siteName',
        type: 'string',
      },
      {
        name: 'title',
        type: 'string',
      },
      {
        name: 'anchorLinkText',
        type: 'string',
      },
    ],
    preview: {
      select: { title: '' },
      prepare() {
        return Object.assign({}, { title: 'Home' })
      },
    },
  }
  