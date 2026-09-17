export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  navLabel: string;
  summary: string;
  tagline: string;
  intro: string[];
  image: string;
  imageAlt: string;
  steps: { title: string; body: string }[];
  benefits: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "first-home-buyer",
    title: "First Home Buyer",
    shortTitle: "First home buyer",
    navLabel: "First home buyer",
    summary:
      "Understand borrowing options, deposits and the steps from enquiry through to settlement.",
    tagline: "Your first home starts with a realistic finance plan.",
    intro: [
      "A first home loan is not only a rate comparison. Lenders look at genuine savings, employment, existing debts and the property itself.",
      "We help you understand what is possible now — and what would need to change if it is not quite there yet. Approval is never guaranteed.",
    ],
    image: "/images/family-home.jpg",
    imageAlt: "Family home with a garden, suited to first-home buyers",
    steps: [
      { title: "Understand your situation", body: "Income, savings, dependants, residency and when you want to buy." },
      { title: "Assess borrowing options", body: "A realistic range based on typical lender settings, not a single advertised number." },
      { title: "Compare suitable loans", body: "Rate, fees, offset, redraw and whether LMI or a scheme may be relevant." },
      { title: "Help with the application", body: "Documents, pre-approval and communication with the lender." },
      { title: "Support through settlement", body: "Conditions, valuation and the steps through to settlement day." },
    ],
    benefits: [
      { title: "A plan before you inspect", body: "Knowing a borrowing range reduces the chance of offering on homes the file cannot support." },
      { title: "Scheme questions, answered carefully", body: "We discuss what may apply in the ACT or other states. Eligibility is confirmed against current government rules." },
      { title: "A clear document list", body: "You will know which payslips, statements and identification to collect." },
    ],
    faqs: [
      { q: "How much can I borrow?", a: "Borrowing capacity depends on income, expenses, existing debts and lender serviceability settings. Two lenders can produce different figures for the same household." },
      { q: "What deposit do I need?", a: "Some lenders will consider a smaller deposit if Lenders Mortgage Insurance applies. Gifted funds and first-home schemes can change the cash you need at settlement." },
      { q: "Can first-home buyers access government schemes?", a: "Schemes and concessions change and differ by state and territory. We can talk through what commonly applies and point you to official sources. We do not guarantee eligibility." },
      { q: "How long does pre-approval take?", a: "Many complete files receive a decision within several business days. Pre-approval is usually conditional and is not a final loan offer." },
      { q: "What documents do I need?", a: "Typically identification, recent payslips, tax returns or notices of assessment, savings statements, and details of existing debts. Self-employed applicants usually need additional business documents." },
    ],
  },
  {
    slug: "house-and-land",
    title: "House & Land Packages",
    shortTitle: "House & land",
    navLabel: "House & land packages",
    summary: "Finance for purchasing land and building a new home, including construction drawdowns.",
    tagline: "Finance for buying land and building a new home.",
    intro: [
      "Construction lending is staged. The loan, the builder’s contract and the valuation all need to line up.",
      "You may need a land loan first, then a construction facility that pays the builder in progress claims.",
    ],
    image: "/service/houseland2.jpeg",
    imageAlt: "House on a large block of land",
    steps: [
      { title: "Understand the package", body: "Land, build price, variations and when each payment is due." },
      { title: "Assess borrowing and timing", body: "Serviceability during construction, not only at completion." },
      { title: "Compare construction facilities", body: "Progress payments, interest during the build, and what happens at completion." },
      { title: "Application and valuation", body: "Valuer or quantity surveyor requirements depend on the lender and contract." },
      { title: "Support through the build", body: "Drawdowns and communication if the programme changes." },
    ],
    benefits: [
      { title: "Staged payments explained", body: "You should understand how each claim is released and what interest you pay while the home is unfinished." },
      { title: "Contract and lender fit", body: "Not every builder contract is acceptable to every lender. Better to know that early." },
      { title: "One conversation for land and build", body: "Avoid treating land finance and construction as unrelated products if they are part of one plan." },
    ],
    faqs: [
      { q: "Can I buy land now and build later?", a: "Sometimes. Lenders have different rules for vacant land and for how long you can hold it before construction starts." },
      { q: "Do I pay interest on the full loan during the build?", a: "Usually you pay interest on the amount drawn, which increases with each progress payment." },
      { q: "What if the build costs more than expected?", a: "Variations can create a shortfall. Lenders may not automatically increase the facility." },
    ],
  },
  {
    slug: "property-investment",
    title: "Property Investment",
    shortTitle: "Property investment",
    navLabel: "Property investment",
    summary: "Loan structures for purchasing investment property alongside existing commitments.",
    tagline: "Loan solutions designed around how you will hold the property.",
    intro: [
      "An investment loan should be judged on cash flow, existing debt and how you intend to hold the property — not only on the advertised rate.",
      "We are not tax advisers. We will tell you when an accountant should be involved.",
    ],
    image: "/service/propertyinvestment3.jpeg",
    imageAlt: "Modern investment property with a lawn",
    steps: [
      { title: "Understand the strategy", body: "Hold, yield, or using equity for a further purchase." },
      { title: "Assess serviceability", body: "Rental income treatment varies by lender. Existing loans are part of the picture." },
      { title: "Compare structures", body: "Interest-only versus principal and interest, offset, and splitting facilities." },
      { title: "Application", body: "Valuation, rental estimate and supporting documents." },
      { title: "After settlement", body: "When to review the loan if you plan another purchase." },
    ],
    benefits: [
      { title: "Existing debt is included", body: "We do not pretend a new loan lives in isolation from your home loan." },
      { title: "Cash-flow view", body: "Repayments, vacancies and rate movement belong in the same conversation." },
      { title: "No property spruiking", body: "We arrange finance. We do not sell properties or forecast capital growth." },
    ],
    faqs: [
      { q: "Can I use equity in my home?", a: "Often, if there is usable equity and serviceability supports the extra debt. A valuation and lender policy determine how much." },
      { q: "Interest-only or principal and interest?", a: "Each has cash-flow and long-term cost implications. The better choice depends on your plan and the lender’s rules at the time." },
      { q: "Do you provide tax advice?", a: "No. Negative gearing, depreciation and entity structures should be confirmed with a registered tax agent." },
    ],
  },
  {
    slug: "refinancing",
    title: "Refinancing",
    shortTitle: "Refinancing",
    navLabel: "Refinancing",
    summary: "Review your current home loan and whether a change is actually worth the switching costs.",
    tagline: "Review the loan you have. See whether a change is worth it.",
    intro: [
      "Refinancing is useful when the rate, features or structure no longer match how you use the loan.",
      "It is not automatically the right move. Break fees and switching costs matter. If staying is better, we will say so.",
    ],
    image: "/service/refinancing4.jpeg",
    imageAlt: "Reviewing loan documents and cash flow",
    steps: [
      { title: "Understand the current loan", body: "Rate, fees, features and any break costs." },
      { title: "Assess your position", body: "Income, equity and whether you also want to renovate or consolidate." },
      { title: "Compare alternatives", body: "A like-for-like loan versus a restructure." },
      { title: "Application if you proceed", body: "Discharge, valuation and timing so you are not left without cover." },
      { title: "Settlement", body: "New facility in place, old loan closed cleanly." },
    ],
    benefits: [
      { title: "Costs on the table", body: "Application fees, discharge fees and break costs should be visible before you decide." },
      { title: "Features, not only rate", body: "Offset and redraw can matter more than a small rate difference." },
      { title: "No pressure to switch", body: "If the current loan is adequate, that is a valid conclusion." },
    ],
    faqs: [
      { q: "Will I save money by refinancing?", a: "Only if the new repayment and fees beat what you have over a sensible period. We will not claim savings without running the numbers on your loan." },
      { q: "Can I refinance with impaired credit?", a: "It depends on the event, how long ago it was, and lender policy. Outcomes are never guaranteed." },
      { q: "How long does a refinance take?", a: "Many straightforward files complete in a few weeks. Fixed-rate break calculations and valuations can extend that." },
    ],
  },
  {
    slug: "commercial-finance",
    title: "Commercial Finance",
    shortTitle: "Commercial",
    navLabel: "Commercial finance",
    summary: "Conversations around commercial property and business premises lending.",
    tagline: "Finance for commercial property and business premises.",
    intro: [
      "Commercial lending is assessed on the asset, the lease, and the business that services the debt.",
      "Timeframes are often longer than residential loans. Documents usually include financials, tax returns and property details.",
    ],
    image: "/service/commercial5.jpeg",
    imageAlt: "Commercial property and finance planning",
    steps: [
      { title: "Understand the requirement", body: "Property, equipment, or working capital tied to a commercial purpose." },
      { title: "Review financials", body: "How the business currently services debt." },
      { title: "Compare facilities", body: "Term loans, lines of credit and lender appetite for the asset type." },
      { title: "Application", body: "Valuation, leases and director information as required." },
      { title: "Settlement support", body: "Conditions and drawdown." },
    ],
    benefits: [
      { title: "Treated as its own process", body: "Residential experience is not assumed." },
      { title: "Document-led", body: "Clean financials save more time than a polished pitch." },
      { title: "Fees discussed up front", body: "Some commercial files may involve a broker fee, agreed before work proceeds." },
    ],
    faqs: [
      { q: "Can I use a home as security for a business property?", a: "Sometimes, via a different structure. This has risk for the family home and needs a careful conversation." },
      { q: "What deposit is typical?", a: "Commercial loan-to-value ratios are often lower than residential. Exact settings depend on the lender and asset." },
      { q: "Is this the same as a home loan?", a: "No. Pricing, security, covenants and serviceability tests are different." },
    ],
  },
  {
    slug: "smsf",
    title: "Self-Managed Super Funds",
    shortTitle: "SMSF",
    navLabel: "SMSF",
    summary: "Guidance relating to SMSF property investment and limited recourse borrowing.",
    tagline: "Finance guidance for SMSF property investment.",
    intro: [
      "SMSF borrowing is tightly regulated. The loan, the fund and the property have to fit the rules.",
      "This is not SMSF establishment advice. We work alongside your accountant and solicitor, not instead of them.",
    ],
    image: "/service/selfmanagesuperfund6.jpeg",
    imageAlt: "Calculator, notes and savings for SMSF planning",
    steps: [
      { title: "Understand the fund", body: "Trustee structure, balances and whether property is an appropriate asset." },
      { title: "Assess the fund’s borrowing position", body: "Contributions, rental income and existing assets." },
      { title: "Compare SMSF lenders", body: "Not all residential lenders offer limited recourse borrowing arrangements." },
      { title: "Coordinate documents", body: "Trust deeds, financials and property contracts." },
      { title: "Support through settlement", body: "Conditions unique to SMSF facilities." },
    ],
    benefits: [
      { title: "Specialist lending, explained", body: "You should understand why an SMSF loan is slower and more document-heavy." },
      { title: "Professionals stay in their lanes", body: "We arrange finance. Legal and tax work stays with those advisers." },
      { title: "No push to set up a fund", body: "An SMSF is not automatically a better option than other super structures." },
    ],
    faqs: [
      { q: "Can my SMSF buy my home?", a: "Related-party residential property is heavily restricted. Do not assume this is possible. Confirm with your SMSF adviser." },
      { q: "What is a limited recourse borrowing arrangement?", a: "A structure that generally limits the lender’s recourse to the asset held in a holding trust. Your solicitor should explain the deed and risks." },
      { q: "How long do SMSF loans take?", a: "Longer than a standard home loan. Allow extra time for fund documents, valuation and legal review." },
    ],
  },
  {
    slug: "business-finance",
    title: "Business Finance",
    shortTitle: "Business",
    navLabel: "Business finance",
    summary: "Funding conversations for equipment, cash flow and growth.",
    tagline: "Funding solutions matched to how the business operates.",
    intro: [
      "Bring the purpose, the amount and recent financials. We talk through facilities lenders actually use for small and medium businesses.",
      "Director guarantees are common and should be understood before you sign.",
    ],
    image: "/service/bussiness7.jpeg",
    imageAlt: "Business loan application being reviewed",
    steps: [
      { title: "Understand the use of funds", body: "Asset, cash flow or expansion." },
      { title: "Review the numbers", body: "BAS, tax returns and existing facilities." },
      { title: "Compare structures", body: "Term loan, asset finance or line of credit." },
      { title: "Application", body: "As required by the lender." },
      { title: "Drawdown", body: "Conditions and ongoing covenants if they apply." },
    ],
    benefits: [
      { title: "Purpose first", body: "Lenders price and approve based on use of funds." },
      { title: "Security is discussed honestly", body: "Including whether the family home would be at risk." },
      { title: "Fees agreed in advance", body: "If a broker fee applies to the file, it is disclosed before we proceed." },
    ],
    faqs: [
      { q: "I am a new business. Can I borrow?", a: "Start-ups are harder. Some asset finance is possible with strong directors. Many working-capital facilities want trading history." },
      { q: "Will you need a director guarantee?", a: "Often yes. We will flag this before application." },
      { q: "How is this different from a personal loan?", a: "The borrower, the security, the tax treatment and the assessment are different." },
    ],
  },
  {
    slug: "vehicle-finance",
    title: "Vehicle Finance",
    shortTitle: "Vehicle",
    navLabel: "Vehicle finance",
    summary: "Finance options for purchasing a vehicle, for individuals and businesses.",
    tagline: "Finance options for purchasing a vehicle.",
    intro: [
      "Whether the vehicle is personal or used in a business changes the structure.",
      "We are not a car yard. We help with the finance side once you know what you want to buy, or while you are still comparing.",
    ],
    image: "/service/vechile8.jpeg",
    imageAlt: "Car parked ready for vehicle finance",
    steps: [
      { title: "Understand the purchase", body: "New or used, private sale or dealer, personal or business use." },
      { title: "Assess repayment comfort", body: "Term, deposit and balloon if relevant." },
      { title: "Compare structures", body: "Consumer versus commercial, where appropriate." },
      { title: "Application", body: "Licence, income and asset details." },
      { title: "Settlement with the seller", body: "Payout and delivery timing." },
    ],
    benefits: [
      { title: "Structure matches use", body: "A tool of trade is not treated the same as a private car." },
      { title: "Balloons explained", body: "A lower repayment can leave a large final amount. That needs to be deliberate." },
      { title: "No vehicle sales", body: "We do not mark up cars or steer you to a particular dealer." },
    ],
    faqs: [
      { q: "Can I finance a used car?", a: "Often, subject to age, kilometres and lender policy. Older vehicles can be harder." },
      { q: "Should I take a balloon payment?", a: "Only if you have a plan for the final amount. It reduces repayments now and increases what you owe later." },
      { q: "Is novated leasing available?", a: "That usually sits with employers and specialist providers. Ask us if it is relevant and we will tell you whether we can assist or refer." },
    ],
  },
  {
    slug: "personal-finance",
    title: "Personal Finance",
    shortTitle: "Personal",
    navLabel: "Personal finance",
    summary: "Personal lending for a defined purpose, discussed against existing commitments.",
    tagline: "Personal lending solutions for individual financial needs.",
    intro: [
      "Personal loans are useful for a defined purpose and a repayment you can sustain.",
      "If a personal loan is not suitable, we will say so rather than stretch the file.",
    ],
    image: "/service/personal9.jpeg",
    imageAlt: "Personal funds being handled for a loan",
    steps: [
      { title: "Understand the purpose", body: "Amount, timing and whether the expense is essential." },
      { title: "Assess existing commitments", body: "Credit cards, car loans and living costs." },
      { title: "Compare personal loan options", body: "Secured versus unsecured, term and fee." },
      { title: "Application", body: "Identification and income documents." },
      { title: "After funding", body: "How repayments sit alongside everything else." },
    ],
    benefits: [
      { title: "Purpose is clear", body: "Lenders want to know what the funds are for." },
      { title: "Consolidation is not automatic", body: "Rolling debts together can cost more over time even if the monthly figure drops." },
      { title: "Responsible lending", body: "If the loan does not look serviceable, we will not dress it up." },
    ],
    faqs: [
      { q: "How much can I borrow personally?", a: "It depends on income, existing credit and the lender. There is no single advertised maximum that applies to everyone." },
      { q: "Secured or unsecured?", a: "Secured loans may price lower because an asset is at risk. Unsecured loans typically cost more." },
      { q: "Will this affect a future home loan?", a: "Yes. New personal debt is included in serviceability. Time a personal loan carefully if you also plan to buy a home." },
    ],
  },
];

export function getService(slug: string) {
  return services.find((item) => item.slug === slug);
}
