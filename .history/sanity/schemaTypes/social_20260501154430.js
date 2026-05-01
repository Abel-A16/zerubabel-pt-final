export default {
  name: 'social',
  title: 'Social',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'e.g., GitHub, LinkedIn, Twitter',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      description: 'Full URL to your social profile',
      validation: (Rule) =>
        Rule.required().uri({
          scheme: ['http', 'https'],
        }),
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Order to display social icons',
    },
  ],
  orderings: [
    {
      title: 'Order',
      name: 'order',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
}
