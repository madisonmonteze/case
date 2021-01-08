export default {
    title: 'Navigation',
    name: 'navigation',
    type: 'document',
    __experimental_actions: ['update', 'create', /* 'delete', */ 'publish'],
    fields: [
      {
        title: 'Navigation Links',
        name: 'navLinks',
        type: 'array',
        of: [{ type: 'navItem' }],
      },
    ],
  }