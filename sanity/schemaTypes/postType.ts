import {DocumentTextIcon} from '@sanity/icons/DocumentText'
import {defineField, defineType} from 'sanity'

/**
 * BLOG → SANITY WORKFLOW
 * 1. Create / edit a Post in Studio
 * 2. Image, title, excerpt and description (same editor as services)
 * 3. Tags + SEO tab for the public article later
 */
export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,
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
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      group: 'content',
      description: 'Short preview on the blog listing. Also used as a fallback SEO description.',
      validation: (rule) => rule.max(220),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      group: 'content',
      description: 'Same rich-text editor as services.',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      group: 'content',
      options: {
        list: [
          {title: 'Home Loans', value: 'Home Loans'},
          {title: 'First Home Buyers', value: 'First Home Buyers'},
          {title: 'Property Investment', value: 'Property Investment'},
          {title: 'Refinancing', value: 'Refinancing'},
          {title: 'Finance Tips', value: 'Finance Tips'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      group: 'content',
      initialValue: 'Gopal Woli',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      group: 'content',
      of: [{type: 'string'}],
      options: {layout: 'tags'},
      description: 'Used as meta keywords and shown on the article.',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      group: 'content',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO title',
      type: 'string',
      group: 'seo',
      description: 'Full browser / Google title. Leave empty to use the post title plus the site name.',
      validation: (rule) =>
        rule.max(60).warning('Keep under 60 characters so the title is not cut off in search results.'),
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO description',
      type: 'text',
      rows: 3,
      group: 'seo',
      description: 'Search-result snippet. Leave empty to use the excerpt.',
      validation: (rule) =>
        rule.max(160).warning('Keep under 160 characters so the snippet is not truncated.'),
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
      group: 'seo',
      description: 'Optional. Leave empty to use this site’s /blog/slug URL.',
      validation: (rule) =>
        rule.uri({scheme: ['https']}).warning('Use a full https URL if you set a canonical.'),
    }),
    defineField({
      name: 'ogImage',
      title: 'Social share image',
      type: 'image',
      group: 'seo',
      options: {hotspot: true},
      description: 'Optional 1200×630 image. Defaults to the main blog image.',
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
      category: 'category',
      media: 'image',
    },
    prepare({title, category, media}) {
      return {
        title: title || 'Untitled post',
        subtitle: category || 'No category',
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Newest',
      name: 'publishedAtDesc',
      by: [{field: 'publishedAt', direction: 'desc'}],
    },
  ],
})
