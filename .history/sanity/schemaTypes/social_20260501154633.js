export default {
  name: 'social',
  title: 'Social',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'e.g., GitHub, LinkedIn',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      description: 'Full URL to your profile',
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Display order (1, 2, 3...)',
    },
  ],
}
