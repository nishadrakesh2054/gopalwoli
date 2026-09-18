import {HelpCircleIcon} from '@sanity/icons/HelpCircle'
import {defineField, defineType} from 'sanity'

/**
 * FAQ → SANITY WORKFLOW
 * 1. Create / edit FAQs in Studio
 * 2. They appear on the home page "Your Questions Answered" block
 * 3. Lower order numbers show first
 */
export const faqType = defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  icon: HelpCircleIcon,
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Lower numbers show first on the home page.',
      initialValue: 10,
      validation: (rule) => rule.integer().min(0),
    }),
  ],
  preview: {
    select: {
      title: 'question',
      subtitle: 'order',
    },
    prepare({title, subtitle}) {
      return {
        title: title || 'Untitled FAQ',
        subtitle: subtitle != null ? `Order ${subtitle}` : 'No order',
      }
    },
  },
  orderings: [
    {
      title: 'Order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
})
