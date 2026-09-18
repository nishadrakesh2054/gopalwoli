import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Dashboard')
    .items([
      S.documentTypeListItem('contactSubmission').title('Contact messages'),
      S.documentTypeListItem('quoteRequest').title('Quote requests'),
      S.divider(),
      S.documentTypeListItem('service').title('Services'),
      S.documentTypeListItem('post').title('Posts'),
      S.documentTypeListItem('faq').title('FAQs'),
      S.documentTypeListItem('lender').title('Trusted Lenders'),
      S.documentTypeListItem('testimonial').title('Testimonials'),
    ])
