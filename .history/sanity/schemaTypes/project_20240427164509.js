import {defineField, defineType} from 'sanity'

export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      desc
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // If you want to enable hotspot editing
      },
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'skill' }] }],
    },
    {
      name: 'linkToBuild',
      title: 'Link to Build',
      type: 'url',
    },    
  ],
};