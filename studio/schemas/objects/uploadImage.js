export default {
    name: 'uploadImage',
    type: 'image',
    fields: [
      {
        title: 'Alternative text',
        name: 'alt',
        type: 'string',
        options: { isHighlighted: true },
        validation: Rule =>
          Rule.warning(
            'Alt tag is missing, a short description of the image is important for accessibility and SEO.'
          ),
      },
    ],
  }