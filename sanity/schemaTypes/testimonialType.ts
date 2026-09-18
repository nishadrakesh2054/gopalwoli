import {CommentIcon} from '@sanity/icons/Comment'
import {defineField, defineType} from 'sanity'

/**
 * TESTIMONIAL → SANITY WORKFLOW
 * 1. Create / edit a testimonial in Studio (name, photo, description)
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
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
          validation: (rule) =>
            rule.required().warning('Alt text helps search engines and screen readers.'),
        }),
      ],
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
      media: 'image',
    },
  },
})
