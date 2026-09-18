import {ImageIcon} from '@sanity/icons/Image'
import {defineField, defineType} from 'sanity'

/**
 * TRUSTED LENDER → SANITY WORKFLOW
 * 1. Create / edit a lender in Studio (image + link only)
 * 2. Logos appear on the home page "Our Trusted Lenders" strip
 */
export const lenderType = defineType({
  name: 'lender',
  title: 'Trusted Lender',
  type: 'document',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
      validation: (rule) =>
        rule.required().uri({scheme: ['http', 'https']}),
    }),
  ],
  preview: {
    select: {
      media: 'image',
      link: 'link',
    },
    prepare({media, link}) {
      let title = 'Lender'
      if (typeof link === 'string') {
        try {
          title = new URL(link).hostname.replace(/^www\./, '')
        } catch {
          title = link
        }
      }
      return {
        title,
        subtitle: link || 'No link',
        media,
      }
    },
  },
})
