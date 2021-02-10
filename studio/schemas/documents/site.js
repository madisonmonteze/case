export default {
    title: 'Site',
    name: 'site',
    type: 'document',
    __experimental_actions: ['update',/* 'create',  'delete', */ 'publish'],
    fields: [
      {
        name: 'title',
        type: 'string',
        description: 'Your website’s name.',
        validation: Rule => Rule.max(50).warning('Should be under 50 characters.'),
      },
      {
        name: 'description',
        type: 'string',
        description:
          'A short summary to get people an idea of what to expect when visiting your website.',
        validation: Rule => Rule.max(150).warning('Should be under 150 characters.'),
      },
      {
        title: 'Website URL',
        name: 'url',
        type: 'url',
        description: 'The address people will type in to get to your website.',
      },
      {
        name: 'keywords',
        type: 'array',
        description: 'Add keywords that describes your website.',
        of: [{ type: 'string' }],
        options: { layout: 'tags' },
      },
      {
        name: 'image',
        type: 'image',
        description:
          'This image is the first thing people will see when someone shares your website. Recommended size 1200x630 (will be auto resized).',
      },
    ],
  }
  