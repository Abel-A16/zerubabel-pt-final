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
      name:"companyImage",
      title:"Company Image",
      type:"image",
      options: {
        hotspot: true,
      },
    },
    {
      name:"company",
      title:"Company",
      type:"text",
    },
    {
      name:"dateStarted",
      title:"DateStarted",
      type:"date",
    },
    {
      name: 'is curentlyWo',
      title: 'Phone Number',
      type: 'string',
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