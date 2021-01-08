export default {
    title: 'Resources',
    name: 'resources',
    type: 'document',
    __experimental_actions: ['update', 'create', /* 'delete', */ 'publish'],
    fields: [
      {
        name: 'title',
        type: 'string',
      },
      {
        name: 'body',
        type: 'text',
      },
      {
        name: 'guidesSubtitle',
        type: 'string',
      },
      {
        name: 'guidesLinks',
        type: 'array',
        of: [{ type: 'externalLink' }]
      },
      {
        name: 'socialSubtitle',
        type: 'string',
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
        return Object.assign({}, { title: 'Resources' })
      },
    },
  }
  