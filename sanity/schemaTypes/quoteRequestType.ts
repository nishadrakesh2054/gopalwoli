import {BillIcon} from '@sanity/icons/Bill'
import {defineField, defineType} from 'sanity'

/**
 * QUOTE → SANITY WORKFLOW
 * 1. Website form posts to /api/quote
 * 2. That API creates a document of this type
 * 3. It shows up here in Studio → Quote requests
 */
export const quoteRequestType = defineType({
  name: 'quoteRequest',
  title: 'Quote request',
  type: 'document',
  icon: BillIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Full name',
      type: 'string',
      readOnly: true,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      readOnly: true,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'Mobile',
      type: 'string',
      readOnly: true,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'requirement',
      title: 'Finance requirement',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'employment',
      title: 'Employment type',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'amount',
      title: 'Estimated loan amount',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
      readOnly: true,
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'New', value: 'new'},
          {title: 'Read', value: 'read'},
          {title: 'Replied', value: 'replied'},
        ],
        layout: 'radio',
      },
      initialValue: 'new',
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submitted at',
      type: 'datetime',
      readOnly: true,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'requirement',
      email: 'email',
      status: 'status',
    },
    prepare({title, subtitle, email, status}) {
      return {
        title: title || 'Untitled quote',
        subtitle: [status, subtitle, email].filter(Boolean).join(' · '),
      }
    },
  },
  orderings: [
    {
      title: 'Newest',
      name: 'submittedAtDesc',
      by: [{field: 'submittedAt', direction: 'desc'}],
    },
  ],
})
