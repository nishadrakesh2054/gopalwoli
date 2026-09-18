import {CommentIcon} from '@sanity/icons/Comment'
import {defineField, defineType} from 'sanity'

/**
 * TESTIMONIAL → SANITY WORKFLOW
 * 1. Create / edit a testimonial in Studio (name + description)
 * 2. Quotes appear on the home page "Real People. Real Experiences." block
 */
export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  icon: CommentIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description',
    },
  },
})
