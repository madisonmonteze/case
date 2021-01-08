export default {
    name: 'blockList',
    title: 'Block List',
    type: 'array',
    of: [
      {
        type: 'block',
        styles: [
          {title: 'Normal', value: 'normal'},
        ],
        lists: [
            { title: 'Bullet', value: 'bullet' },
        ],
      }
    ]
  }