'use client'

/**
 * This configuration is used for the Sanity Studio mounted at /studio.
 *
 * Contact form workflow:
 * website form → /api/contact → contactSubmission → Studio "Contact messages"
 * Quote form workflow:
 * website form → /api/quote → quoteRequest → Studio "Quote requests"
 * Service page workflow:
 * Studio "Services" → image, title, description (blog editor) + SEO tab
 * Blog workflow:
 * Studio "Posts" → image, title, excerpt, description, tags + SEO tab
 * Home FAQ workflow:
 * Studio "FAQs" → question + answer → home "Your Questions Answered"
 * Trusted lenders workflow:
 * Studio "Trusted Lenders" → image + link → home "Our Trusted Lenders"
 * Testimonials workflow:
 * Studio "Testimonials" → name + description → home "Real People. Real Experiences."
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schemaTypes'
import {structure} from './sanity/structure'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({structure}),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
})
