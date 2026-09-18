import {HomeIcon} from '@sanity/icons/Home'
import {defineArrayMember, defineField, defineType} from 'sanity'

/**
 * SERVICE → SANITY WORKFLOW
 * 1. Create / edit a Service in Studio
 * 2. Title, image and description (same editor as blog posts)
 * 3. SEO tab is used for the public service page meta
 */
export const serviceType = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  icon: HomeIcon,
  groups: [
    {name: 'content', title: 'Content', default: true},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'content',
      options: {source: 'title', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'shortTitle',
      title: 'Short title',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'navLabel',
      title: 'Footer / nav label',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      group: 'content',
      description: 'Shown as the heading on the service page.',
    }),
    defineField({
      name: 'cardBlurb',
      title: 'Card blurb',
      type: 'text',
      rows: 2,
      group: 'content',
      description: 'Short line on home and services cards.',
      validation: (rule) => rule.max(140),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      group: 'content',
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
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Short summary',
      type: 'text',
      rows: 3,
      group: 'content',
      description: 'Used on related-service cards and as a fallback SEO description.',
      validation: (rule) => rule.max(220),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      group: 'content',
      description: 'Intro copy on the service page. Same editor as blog posts.',
    }),
    defineField({
      name: 'steps',
      title: 'Steps',
      type: 'array',
      group: 'content',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'serviceStep',
          fields: [
            defineField({name: 'title', type: 'string', validation: (rule) => rule.required()}),
            defineField({name: 'body', type: 'text', rows: 2}),
          ],
          preview: {select: {title: 'title', subtitle: 'body'}},
        }),
      ],
    }),
    defineField({
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      group: 'content',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'serviceBenefit',
          fields: [
            defineField({name: 'title', type: 'string', validation: (rule) => rule.required()}),
            defineField({name: 'body', type: 'text', rows: 3}),
          ],
          preview: {select: {title: 'title', subtitle: 'body'}},
        }),
      ],
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      group: 'content',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'serviceFaq',
          fields: [
            defineField({name: 'question', type: 'string', validation: (rule) => rule.required()}),
            defineField({name: 'answer', type: 'text', rows: 3}),
          ],
          preview: {select: {title: 'question', subtitle: 'answer'}},
        }),
      ],
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      group: 'content',
      description: 'Lower numbers show first.',
      initialValue: 10,
      validation: (rule) => rule.integer().min(0),
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO title',
      type: 'string',
      group: 'seo',
      description: 'Full browser / Google title. Leave empty to use the service title plus the site name.',
      validation: (rule) =>
        rule.max(60).warning('Keep under 60 characters so the title is not cut off in search results.'),
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO description',
      type: 'text',
      rows: 3,
      group: 'seo',
      description: 'Search-result snippet. Leave empty to use the short summary.',
      validation: (rule) =>
        rule.max(160).warning('Keep under 160 characters so the snippet is not truncated.'),
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
      group: 'seo',
      description: 'Optional. Leave empty to use this site’s /services/slug URL.',
      validation: (rule) =>
        rule.uri({scheme: ['https']}).warning('Use a full https URL if you set a canonical.'),
    }),
    defineField({
      name: 'ogImage',
      title: 'Social share image',
      type: 'image',
      group: 'seo',
      options: {hotspot: true},
      description: 'Optional 1200×630 image. Defaults to the main service image.',
    }),
    defineField({
      name: 'noIndex',
      title: 'Hide from search engines',
      type: 'boolean',
      group: 'seo',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
      media: 'image',
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
