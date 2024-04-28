import {defineField, defineType} from 'sanity'

export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name:"jobTitle",
      title:"JobTitle",
      type:"string",
    },
    {
      name:"companyIma",
      title:"Image",
      type:"image",
      options: {
        hotspot: true,
      },
    },
    {
      name:"role",
      title:"Role",
      type:"string",
    },
    {
      name:"backgroundInformation",
      title:"BackgroundInformation",
      type:"string",
    },
    {
      name:"profilePic",
      title:"ProfilePic",
      type:"image",
      options: {
        hotspot: true,
      },
    },
    {
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
    },  
    {
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of: [{ type: 'reference', to: {type : 'social'} }],
      
    }      
  ],
}