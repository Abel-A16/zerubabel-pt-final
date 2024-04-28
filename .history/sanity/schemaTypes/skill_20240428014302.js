export default{
name: "skill",
title: "Skill",
type: 

{
  name: 'title',
  title: 'Title of skill',
  type: 'string',
},
{
  name: 'progress',
  title: 'Progress of skill (%)',
  type: 'number',
  validation: Rule => Rule.integer().min(0).max(100),
  description: 'Progress of skill from 0 to 100%',
},
{
  name: 'image',
  title: 'Image',
  type: 'image',
  options: {
    hotspot: true, // If you want to enable hotspot editing
  },
},
