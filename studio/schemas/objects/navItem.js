export default {
    name: 'navItem',
    type: 'object',
    fields: [
      {
        name: 'text',
        type: 'string',
      },
      {
        name: 'slug',
        type: 'string',
        description: 'URL of the page e.g "cabin".',
        validation: Rule => Rule.required(),
      },
    ],
  }