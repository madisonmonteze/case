export default {
    title: 'What We Do',
    name: 'whatWeDo',
    type: 'document',
    __experimental_actions: ['update', 'create', /* 'delete', */ 'publish'],
    fields: [
      {
        name: 'title',
        type: 'string',
      },
      {
        name: 'subtitle',
        type: 'string',
      },
      {
        name: 'text',
        type: 'blockText',
      },
      {
        name: 'highlight1',
        type: 'blockText',
      },
      {
        name: 'highlight2',
        type: 'blockText',
      },
      {
        name: 'highlight3',
        type: 'blockText',
      },
      {
        name: 'impactsSubheading',
        type: 'string',
      },
      {
        name: 'impactsList',
        type: 'array',
        of: [{ type: 'listItem' }]
      },
    ],
    preview: {
      select: { title: '' },
      prepare() {
        return Object.assign({}, { title: 'What We Do' })
      },
    },
  }
  