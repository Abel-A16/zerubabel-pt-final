import {defineField, defineType} from 'sanity'

export default {
  name: 'pageInfo',
  title: 'PageInfo',
  type: 'document',
  fields: [
    {
      name:"name",
      title:"Name",
      type:"string",
    },
    {
      name:"role",
      title:"Role",
      type:"string",
    },
    {
      name:"heroImage",
      title:"Image",
      type:"image",
      Option
    },
  ],
}