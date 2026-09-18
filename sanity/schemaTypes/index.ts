import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {postType} from './postType'
import {contactSubmissionType} from './contactSubmissionType'
import {quoteRequestType} from './quoteRequestType'
import {serviceType} from './serviceType'
import {faqType} from './faqType'
import {lenderType} from './lenderType'
import {testimonialType} from './testimonialType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    contactSubmissionType,
    quoteRequestType,
    serviceType,
    postType,
    faqType,
    lenderType,
    testimonialType,
    blockContentType,
  ],
}
