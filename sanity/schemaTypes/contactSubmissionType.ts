  import {EnvelopeIcon} from '@sanity/icons/Envelope'
import {defineField, defineType} from 'sanity'

/**
 * CONTACT → SANITY WORKFLOW
 * 1. Website form posts to /api/contact
 * 2. That API creates a document of this type
 * 3. It shows up here in Studio → Contact messages
 */
export const contactSubmissionType = defineType({
  name: 'contactSubmission',
  title: 'Contact message',
  type: 'document',
  icon: EnvelopeIcon,
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
    }),
    defineField({
      name: 'financeType',
      title: 'Finance type',
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
      subtitle: 'email',
      status: 'status',
    },
    prepare({title, subtitle, status}) {
      return {
        title: title || 'Untitled message',
        subtitle: [status, subtitle].filter(Boolean).join(' · '),
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
