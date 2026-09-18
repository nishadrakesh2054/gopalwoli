import { createReadStream, existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createClient } from "next-sanity";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

function loadEnvLocal() {
  const path = resolve(root, ".env.local");
  if (!existsSync(path)) {
    throw new Error("Missing .env.local — add SANITY_API_WRITE_TOKEN first.");
  }

  for (const line of readFileSync(path, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq < 0) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!process.env[key]) process.env[key] = value;
  }
}

const faqs = [
  {
    question: "What does a mortgage broker do?",
    answer:
      "A broker helps you understand lending requirements, compare suitable loan options, and prepare an application. We do not lend the money ourselves — lenders make the credit decision.",
  },
  {
    question: "How does the home loan process work?",
    answer:
      "Typically: a conversation about your goals, an assessment of borrowing position, a comparison of suitable products, an application, then unconditional approval and settlement.",
  },
  {
    question: "What is pre-approval?",
    answer:
      "Pre-approval is a lender’s conditional indication of how much you may be able to borrow, usually before you have a property under contract. It is not a final offer of credit.",
  },
  {
    question: "Can you help first home buyers?",
    answer:
      "Yes. We help first-home buyers understand deposits, Lenders Mortgage Insurance, documents and the steps through to settlement. Scheme eligibility is always confirmed against current rules.",
  },
  {
    question: "Can you help with refinancing?",
    answer:
      "Yes. We review your current loan — rate, fees, remaining term and features — and whether a change is actually worth the switching costs.",
  },
  {
    question: "Do I pay a broker fee?",
    answer:
      "For most home loans we are paid a commission by the lender if a loan settles. You should still compare the overall cost of the loan. Any fee that would apply to a particular product is explained before you proceed.",
  },
  {
    question: "What documents do I need?",
    answer:
      "Typical starting documents include identification, recent payslips or tax returns, bank statements, and details of existing loans or credit cards. We confirm an exact list after the first conversation — it depends on your situation and the lender.",
  },
];

const testimonials = [
  {
    name: "John Bolf",
    file: "john.jpeg",
    imageAlt: "Portrait of John Bolf",
    description:
      "Great service! They helped us secure the perfect home loan at an amazing rate. Highly recommended!",
  },
  {
    name: "Anna Fury",
    file: "anna.jpeg",
    imageAlt: "Portrait of Anna Fury",
    description:
      "Professional and knowledgeable team. They made the refinancing process smooth and stress-free!",
  },
  {
    name: "David Linn",
    file: "david.jpeg",
    imageAlt: "Portrait of David Linn",
    description:
      "Excellent mortgage brokers! They found me competitive rates and saved thousands on my investment property.",
  },
];

const lenders = [
  { file: "anz.webp", link: "https://www.anz.com.au" },
  { file: "auswide.webp", link: "https://www.auswidebank.com.au" },
  { file: "banksa.webp", link: "https://www.banksa.com.au" },
  { file: "citi.webp", link: "https://www.citibank.com.au" },
  { file: "firefighter.webp", link: "https://www.fmbank.com.au" },
  { file: "firstmac.webp", link: "https://www.firstmac.com.au" },
  { file: "healthprofessionals.webp", link: "https://www.hpbank.com.au" },
  { file: "ingbank.webp", link: "https://www.ing.com.au" },
  { file: "latrobe.webp", link: "https://www.latrobefinancial.com.au" },
  { file: "liberty.webp", link: "https://www.liberty.com.au" },
  { file: "mystate.webp", link: "https://www.mystate.com.au" },
  { file: "nab.webp", link: "https://www.nab.com.au" },
  { file: "newcastlep.webp", link: "https://www.newcastlepermanent.com.au" },
  { file: "pandnbank.webp", link: "https://www.pnbank.com.au" },
  { file: "peppermoney.webp", link: "https://www.pepper.com.au" },
  { file: "suncorp.webp", link: "https://www.suncorp.com.au" },
  { file: "teachersmb.webp", link: "https://www.tmbank.com.au" },
  { file: "westpac.webp", link: "https://www.westpac.com.au" },
];

const serviceSeed = [
  {
    slug: "first-home-buyer",
    title: "First Home Buyer",
    shortTitle: "First home buyer",
    navLabel: "First home buyer",
    tagline: "Your first home starts with a realistic finance plan.",
    cardBlurb: "Get expert guidance on your first home loan and make your dreams a reality.",
    summary:
      "Understand borrowing options, deposits and the steps from enquiry through to settlement.",
    seoTitle: "First Home Buyer Loans Canberra | Gopal Woli",
    seoDescription:
      "Understand deposits, borrowing options and the steps to settlement. Canberra first-home buyer guidance from Gopal Woli.",
    image: { dir: "images", file: "family-home.jpg" },
    imageAlt: "Family home with a garden, suited to first-home buyers",
    intro: [
      "A first home loan is not only a rate comparison. Lenders look at genuine savings, employment, existing debts and the property itself.",
      "We help you understand what is possible now — and what would need to change if it is not quite there yet. Approval is never guaranteed.",
    ],
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
      { question: "How much can I borrow?", answer: "Borrowing capacity depends on income, expenses, existing debts and lender serviceability settings. Two lenders can produce different figures for the same household." },
      { question: "What deposit do I need?", answer: "Some lenders will consider a smaller deposit if Lenders Mortgage Insurance applies. Gifted funds and first-home schemes can change the cash you need at settlement." },
      { question: "Can first-home buyers access government schemes?", answer: "Schemes and concessions change and differ by state and territory. We can talk through what commonly applies and point you to official sources. We do not guarantee eligibility." },
      { question: "How long does pre-approval take?", answer: "Many complete files receive a decision within several business days. Pre-approval is usually conditional and is not a final loan offer." },
      { question: "What documents do I need?", answer: "Typically identification, recent payslips, tax returns or notices of assessment, savings statements, and details of existing debts. Self-employed applicants usually need additional business documents." },
    ],
  },
  {
    slug: "house-and-land",
    title: "House & Land Packages",
    shortTitle: "House & land",
    navLabel: "House & land packages",
    tagline: "Finance for buying land and building a new home.",
    cardBlurb: "Finance for land and new home builds with competitive options.",
    summary: "Finance for purchasing land and building a new home, including construction drawdowns.",
    seoTitle: "House and Land Construction Finance | Gopal Woli",
    seoDescription:
      "How construction finance works for house and land packages, including progress payments and builder contracts.",
    image: { dir: "service", file: "houseland2.jpeg" },
    imageAlt: "House on a large block of land",
    intro: [
      "Construction lending is staged. The loan, the builder’s contract and the valuation all need to line up.",
      "You may need a land loan first, then a construction facility that pays the builder in progress claims.",
    ],
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
      { question: "Can I buy land now and build later?", answer: "Sometimes. Lenders have different rules for vacant land and for how long you can hold it before construction starts." },
      { question: "Do I pay interest on the full loan during the build?", answer: "Usually you pay interest on the amount drawn, which increases with each progress payment." },
      { question: "What if the build costs more than expected?", answer: "Variations can create a shortfall. Lenders may not automatically increase the facility." },
    ],
  },
  {
    slug: "property-investment",
    title: "Property Investment",
    shortTitle: "Property investment",
    navLabel: "Property investment",
    tagline: "Loan solutions designed around how you will hold the property.",
    cardBlurb: "Build your wealth with investment property loans and expert advice.",
    summary: "Loan structures for purchasing investment property alongside existing commitments.",
    seoTitle: "Investment Property Loans Canberra | Gopal Woli",
    seoDescription:
      "Investment loan structures around rental income, existing debt and how you intend to hold the property.",
    image: { dir: "service", file: "propertyinvestment3.jpeg" },
    imageAlt: "Modern investment property with a lawn",
    intro: [
      "An investment loan should be judged on cash flow, existing debt and how you intend to hold the property — not only on the advertised rate.",
      "We are not tax advisers. We will tell you when an accountant should be involved.",
    ],
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
      { question: "Can I use equity in my home?", answer: "Often, if there is usable equity and serviceability supports the extra debt. A valuation and lender policy determine how much." },
      { question: "Interest-only or principal and interest?", answer: "Each has cash-flow and long-term cost implications. The better choice depends on your plan and the lender’s rules at the time." },
      { question: "Do you provide tax advice?", answer: "No. Negative gearing, depreciation and entity structures should be confirmed with a registered tax agent." },
    ],
  },
  {
    slug: "refinancing",
    title: "Refinancing",
    shortTitle: "Refinancing",
    navLabel: "Refinancing",
    tagline: "Review the loan you have. See whether a change is worth it.",
    cardBlurb: "Explore better rates and features for your current loan.",
    summary: "Review your current home loan and whether a change is actually worth the switching costs.",
    seoTitle: "Home Loan Refinancing Canberra | Gopal Woli",
    seoDescription:
      "Review rate, features and switching costs before you refinance. Canberra mortgage broker guidance from Gopal Woli.",
    image: { dir: "service", file: "refinancing4.jpeg" },
    imageAlt: "Reviewing loan documents and cash flow",
    intro: [
      "Refinancing is useful when the rate, features or structure no longer match how you use the loan.",
      "It is not automatically the right move. Break fees and switching costs matter. If staying is better, we will say so.",
    ],
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
      { question: "Will I save money by refinancing?", answer: "Only if the new repayment and fees beat what you have over a sensible period. We will not claim savings without running the numbers on your loan." },
      { question: "Can I refinance with impaired credit?", answer: "It depends on the event, how long ago it was, and lender policy. Outcomes are never guaranteed." },
      { question: "How long does a refinance take?", answer: "Many straightforward files complete in a few weeks. Fixed-rate break calculations and valuations can extend that." },
    ],
  },
  {
    slug: "commercial-finance",
    title: "Commercial Finance",
    shortTitle: "Commercial",
    navLabel: "Commercial finance",
    tagline: "Finance for commercial property and business premises.",
    cardBlurb: "Finance for your business and commercial property.",
    summary: "Conversations around commercial property and business premises lending.",
    seoTitle: "Commercial Property Finance Canberra | Gopal Woli",
    seoDescription:
      "Commercial lending for property and business premises, assessed on the asset, the lease and the business.",
    image: { dir: "service", file: "commercial5.jpeg" },
    imageAlt: "Commercial property and finance planning",
    intro: [
      "Commercial lending is assessed on the asset, the lease, and the business that services the debt.",
      "Timeframes are often longer than residential loans. Documents usually include financials, tax returns and property details.",
    ],
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
      { question: "Can I use a home as security for a business property?", answer: "Sometimes, via a different structure. This has risk for the family home and needs a careful conversation." },
      { question: "What deposit is typical?", answer: "Commercial loan-to-value ratios are often lower than residential. Exact settings depend on the lender and asset." },
      { question: "Is this the same as a home loan?", answer: "No. Pricing, security, covenants and serviceability tests are different." },
    ],
  },
  {
    slug: "smsf",
    title: "Self-Managed Super Funds",
    shortTitle: "SMSF",
    navLabel: "SMSF",
    tagline: "Finance guidance for SMSF property investment.",
    cardBlurb: "Take control of your super with property investment.",
    summary: "Guidance relating to SMSF property investment and limited recourse borrowing.",
    seoTitle: "SMSF Property Finance Canberra | Gopal Woli",
    seoDescription:
      "SMSF borrowing is tightly regulated. Guidance for limited recourse borrowing alongside your accountant and solicitor.",
    image: { dir: "service", file: "selfmanagesuperfund6.jpeg" },
    imageAlt: "Calculator, notes and savings for SMSF planning",
    intro: [
      "SMSF borrowing is tightly regulated. The loan, the fund and the property have to fit the rules.",
      "This is not SMSF establishment advice. We work alongside your accountant and solicitor, not instead of them.",
    ],
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
      { question: "Can my SMSF buy my home?", answer: "Related-party residential property is heavily restricted. Do not assume this is possible. Confirm with your SMSF adviser." },
      { question: "What is a limited recourse borrowing arrangement?", answer: "A structure that generally limits the lender’s recourse to the asset held in a holding trust. Your solicitor should explain the deed and risks." },
      { question: "How long do SMSF loans take?", answer: "Longer than a standard home loan. Allow extra time for fund documents, valuation and legal review." },
    ],
  },
  {
    slug: "business-finance",
    title: "Business Finance",
    shortTitle: "Business",
    navLabel: "Business finance",
    tagline: "Funding solutions matched to how the business operates.",
    cardBlurb: "Funding for your business growth and goals.",
    summary: "Funding conversations for equipment, cash flow and growth.",
    seoTitle: "Business Finance Canberra | Gopal Woli",
    seoDescription:
      "Business funding for equipment, cash flow and growth. Director guarantees and use of funds are discussed before you apply.",
    image: { dir: "service", file: "bussiness7.jpeg" },
    imageAlt: "Business loan application being reviewed",
    intro: [
      "Bring the purpose, the amount and recent financials. We talk through facilities lenders actually use for small and medium businesses.",
      "Director guarantees are common and should be understood before you sign.",
    ],
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
      { question: "I am a new business. Can I borrow?", answer: "Start-ups are harder. Some asset finance is possible with strong directors. Many working-capital facilities want trading history." },
      { question: "Will you need a director guarantee?", answer: "Often yes. We will flag this before application." },
      { question: "How is this different from a personal loan?", answer: "The borrower, the security, the tax treatment and the assessment are different." },
    ],
  },
  {
    slug: "vehicle-finance",
    title: "Vehicle Finance",
    shortTitle: "Vehicle",
    navLabel: "Vehicle finance",
    tagline: "Finance options for purchasing a vehicle.",
    cardBlurb: "Finance options for your next vehicle.",
    summary: "Finance options for purchasing a vehicle, for individuals and businesses.",
    seoTitle: "Vehicle Finance Canberra | Gopal Woli",
    seoDescription:
      "Vehicle finance for personal or business use, including term, deposit and balloon options explained clearly.",
    image: { dir: "service", file: "vechile8.jpeg" },
    imageAlt: "Car parked ready for vehicle finance",
    intro: [
      "Whether the vehicle is personal or used in a business changes the structure.",
      "We are not a car yard. We help with the finance side once you know what you want to buy, or while you are still comparing.",
    ],
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
      { question: "Can I finance a used car?", answer: "Often, subject to age, kilometres and lender policy. Older vehicles can be harder." },
      { question: "Should I take a balloon payment?", answer: "Only if you have a plan for the final amount. It reduces repayments now and increases what you owe later." },
      { question: "Is novated leasing available?", answer: "That usually sits with employers and specialist providers. Ask us if it is relevant and we will tell you whether we can assist or refer." },
    ],
  },
  {
    slug: "personal-finance",
    title: "Personal Finance",
    shortTitle: "Personal",
    navLabel: "Personal finance",
    tagline: "Personal lending solutions for individual financial needs.",
    cardBlurb: "Flexible loans for your personal needs.",
    summary: "Personal lending for a defined purpose, discussed against existing commitments.",
    seoTitle: "Personal Loans Canberra | Gopal Woli",
    seoDescription:
      "Personal lending for a defined purpose, discussed against existing commitments. Canberra broker guidance from Gopal Woli.",
    image: { dir: "service", file: "personal9.jpeg" },
    imageAlt: "Personal funds being handled for a loan",
    intro: [
      "Personal loans are useful for a defined purpose and a repayment you can sustain.",
      "If a personal loan is not suitable, we will say so rather than stretch the file.",
    ],
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
      { question: "How much can I borrow personally?", answer: "It depends on income, existing credit and the lender. There is no single advertised maximum that applies to everyone." },
      { question: "Secured or unsecured?", answer: "Secured loans may price lower because an asset is at risk. Unsecured loans typically cost more." },
      { question: "Will this affect a future home loan?", answer: "Yes. New personal debt is included in serviceability. Time a personal loan carefully if you also plan to buy a home." },
    ],
  },
];

const posts = [
  {
    slug: "what-is-home-loan-pre-approval",
    title: "What is home loan pre-approval, and what does it actually mean?",
    excerpt:
      "Pre-approval is a lender’s conditional view of how much you may be able to borrow. It is not a final offer of credit.",
    category: "Home Loans",
    date: "2026-03-12T09:00:00.000Z",
    image: "keys-handover.jpg",
    imageAlt: "House keys on a table after settlement",
    tags: ["home loan pre-approval", "conditional approval", "Canberra mortgage broker"],
    seoTitle: "Home Loan Pre-Approval Explained | Gopal Woli",
    seoDescription:
      "What home loan pre-approval actually means, how long it lasts, and why it is not a final offer of credit. Canberra broker guidance.",
    paragraphs: [
      "Pre-approval — sometimes called conditional approval — is a lender’s early look at your borrowing position. It is useful when you are ready to inspect properties and make offers, because it gives a clearer sense of a range the lender may consider.",
      "It is not a guarantee. The lender still needs to assess the property, confirm your information has not changed, and apply their credit policy at the time of the full application. Valuation, income verification and the contract itself can all change the outcome.",
      "Most pre-approvals are time-limited. If your job, debts, deposit or the type of property changes, the indication may no longer apply. A conversation before you rely on an old letter is worthwhile.",
      "This article is general information only. It is not personal financial, tax or legal advice, and it is not an offer of credit.",
    ],
  },
  {
    slug: "first-home-documents-to-gather",
    title: "Documents first-home buyers are usually asked to provide",
    excerpt:
      "A short list of the paperwork lenders typically request, so the first conversation is more useful.",
    category: "First Home Buyers",
    date: "2026-03-04T09:00:00.000Z",
    image: "first-home.jpg",
    imageAlt: "Front of a family home suited to first-home buyers",
    tags: ["first home buyer", "home loan documents", "genuine savings"],
    seoTitle: "First Home Buyer Documents Checklist | Gopal Woli",
    seoDescription:
      "Paperwork lenders typically ask first-home buyers to provide, from payslips to savings statements. A practical Canberra broker list.",
    paragraphs: [
      "Most lenders start with identification, recent payslips, savings statements and details of any existing debts. Self-employed applicants are usually asked for tax returns, notices of assessment and often business activity statements.",
      "Gifted deposits, visa status and family guarantees each add documents. It is better to know that before you start making offers, rather than discovering a gap after you have a property under contract.",
      "Keeping statements in one folder — digital or paper — saves time. Lenders often want a clear trail of genuine savings, not only a closing balance.",
      "This is a general guide. The exact list depends on the lender, the loan and your circumstances.",
    ],
  },
  {
    slug: "when-refinancing-is-worth-a-conversation",
    title: "When refinancing is worth a conversation — and when it may not be",
    excerpt:
      "A lower advertised rate is only part of the picture. Fees, remaining term and how you use offset all matter.",
    category: "Refinancing",
    date: "2026-02-18T09:00:00.000Z",
    image: "established-home.jpg",
    imageAlt: "Established home with a garden",
    tags: ["refinancing", "home loan rate", "offset account"],
    seoTitle: "When Refinancing Is Worth It | Gopal Woli",
    seoDescription:
      "A lower advertised rate is only part of refinancing. Fees, remaining term and offset use all matter. General Canberra finance reading.",
    paragraphs: [
      "People refinance to reduce repayments, change features, access equity, or move off a loan that no longer fits. Each of those reasons has a cost: application fees, discharge fees, and sometimes break costs on a fixed rate.",
      "A useful conversation starts with the current statement, not the headline rate on a comparison site. If staying is the better outcome, that is a valid conclusion.",
      "Also check how you use the loan day to day. An offset, redraw or split structure can matter more than a small rate difference if those features support how you actually repay.",
      "This article is general information. It is not a recommendation to refinance.",
    ],
  },
  {
    slug: "investment-property-loans-explained",
    title: "Investment property loans: what lenders usually look at",
    excerpt:
      "Rental income, existing debts and the property itself all shape whether an investment loan is realistic.",
    category: "Property Investment",
    date: "2026-02-09T09:00:00.000Z",
    image: "investment.jpg",
    imageAlt: "Apartment buildings used as investment property",
    tags: ["investment property loan", "rental income", "serviceability"],
    seoTitle: "Investment Property Loans Explained | Gopal Woli",
    seoDescription:
      "What lenders usually look at for investment property loans, including rental income, existing debts and property type.",
    paragraphs: [
      "An investment loan is assessed differently from an owner-occupied home loan. Lenders look at rental income, existing commitments, and how much of the rent they are willing to count toward serviceability.",
      "The property type matters. Units in large complexes, regional locations and short-stay arrangements are treated differently by different lenders. A conversation about the actual property is more useful than a generic borrowing figure.",
      "Interest-only periods, offset accounts and splitting facilities are common questions. Each has trade-offs for cash flow and the long-term cost of the loan.",
      "This is general information only. Tax treatment of investment property should be confirmed with a registered tax adviser.",
    ],
  },
  {
    slug: "house-and-land-finance-basics",
    title: "House and land packages: how construction finance usually works",
    excerpt:
      "Land, progress payments and the build contract all affect which lenders may consider the file.",
    category: "Home Loans",
    date: "2026-01-28T09:00:00.000Z",
    image: "construction.jpg",
    imageAlt: "Home under construction on a residential block",
    tags: ["house and land package", "construction loan", "progress payments"],
    seoTitle: "House and Land Construction Finance | Gopal Woli",
    seoDescription:
      "How construction finance usually works for house and land packages, including progress payments and builder contracts.",
    paragraphs: [
      "A house and land package is not the same as buying an established home. You may need finance for the land first, then a construction facility that releases funds in stages as the build progresses.",
      "Lenders look at the builder’s contract, the construction programme and how interest is charged while the home is unfinished. Variations and delays can change the cash you need along the way.",
      "Not every builder contract is acceptable to every lender. Checking that early can avoid a situation where the package is signed but the loan cannot proceed as expected.",
      "This article is a general overview. Contract and lending details should be checked against the documents in front of you.",
    ],
  },
  {
    slug: "offset-accounts-and-redraw",
    title: "Offset accounts and redraw: a plain-English comparison",
    excerpt:
      "Both can reduce interest, but they work in different ways and are not available on every loan.",
    category: "Finance Tips",
    date: "2026-01-15T09:00:00.000Z",
    image: "interior-home.jpg",
    imageAlt: "Interior of a modern living room",
    tags: ["offset account", "redraw", "home loan features"],
    seoTitle: "Offset vs Redraw: A Plain Comparison | Gopal Woli",
    seoDescription:
      "A plain-English comparison of offset accounts and redraw, and how each can reduce home loan interest. General feature guide.",
    paragraphs: [
      "An offset account is a transaction account linked to the loan. Money sitting in the offset usually reduces the balance the lender charges interest on, while remaining available to spend.",
      "Redraw is extra money you have already paid into the loan. You may be able to withdraw it later, subject to the lender’s rules, fees and remaining redraw limits.",
      "Some people want everyday access and choose offset. Others want extra repayments sitting against the loan and use redraw. Many products offer one, both, or neither — the feature set should match how you actually use money.",
      "This is general information, not a product comparison or a recommendation of any lender.",
    ],
  },
  {
    slug: "deposits-and-lenders-mortgage-insurance",
    title: "Deposits and Lenders Mortgage Insurance, explained simply",
    excerpt:
      "A smaller deposit can still be possible, but LMI and genuine savings rules vary by lender.",
    category: "First Home Buyers",
    date: "2026-01-06T09:00:00.000Z",
    image: "family-home.jpg",
    imageAlt: "Family home with a garden",
    tags: ["LMI", "home loan deposit", "first home buyer"],
    seoTitle: "Deposits and LMI Explained Simply | Gopal Woli",
    seoDescription:
      "How a smaller deposit can still be possible, and how Lenders Mortgage Insurance and genuine savings rules vary by lender.",
    paragraphs: [
      "Lenders Mortgage Insurance (LMI) is usually charged when you borrow a high percentage of the property value. It protects the lender, not you, if the loan is not repaid.",
      "A larger genuine deposit can reduce or remove LMI. Gifted funds, first-home schemes and guarantees may be treated differently depending on the lender and the product.",
      "LMI is sometimes added to the loan rather than paid upfront. That increases the amount you borrow and the interest you pay over time, so it is worth understanding before you decide.",
      "Scheme eligibility and LMI waivers change. Confirm current rules rather than relying on an older example.",
    ],
  },
  {
    slug: "how-a-broker-compares-lenders",
    title: "How a broker compares lenders without chasing the headline rate",
    excerpt:
      "Rate matters, but fees, serviceability settings and the property itself often decide which file can proceed.",
    category: "Finance Tips",
    date: "2025-12-12T09:00:00.000Z",
    image: "consultation.jpg",
    imageAlt: "Two people reviewing documents during a finance meeting",
    tags: ["mortgage broker", "compare home loans", "serviceability"],
    seoTitle: "How a Broker Compares Lenders | Gopal Woli",
    seoDescription:
      "Why the headline rate is not the whole story. Fees, serviceability and the property often decide which home loan can proceed.",
    paragraphs: [
      "A broker does not lend the money. Lenders make the credit decision. The work is to understand your situation, compare suitable options from a panel, and help you prepare an application.",
      "The lowest advertised rate is not always the loan that can be approved. Lenders treat overtime, bonuses, rental income, visa status and property type in different ways.",
      "Fees, offset, redraw, fixed-rate break costs and how quickly a lender assesses a file all belong in the same conversation as the rate.",
      "This website is general information only. Credit assistance is subject to lender assessment and your individual circumstances.",
    ],
  },
];

function slug(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function toBlocks(paragraphs, slugValue) {
  return paragraphs.map((text, index) => ({
    _type: "block",
    _key: `${slugValue}-p${index}`,
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: `${slugValue}-s${index}`,
        text,
        marks: [],
      },
    ],
  }));
}

function keyed(type, slugValue, items, mapItem) {
  return items.map((item, index) => ({
    _type: type,
    _key: `${slugValue}-${type}-${index}`,
    ...mapItem(item),
  }));
}

async function uploadImage(client, dir, file) {
  const imagePath = resolve(root, "public", dir, file);
  if (!existsSync(imagePath)) {
    throw new Error(`Missing image: ${dir}/${file}`);
  }
  const asset = await client.assets.upload("image", createReadStream(imagePath), {
    filename: file,
  });
  return asset._id;
}

function isPublicId(id) {
  return typeof id === "string" && !id.includes(".");
}

async function upsertPublished(client, type, matches, doc) {
  const publicDoc = matches.find((item) => isPublicId(item._id));
  const privateDocs = matches.filter((item) => !isPublicId(item._id));

  if (publicDoc?._id) {
    await client.patch(publicDoc._id).set(doc).commit();
  } else {
    await client.create({ _type: type, ...doc });
  }

  for (const extra of privateDocs) {
    await client.delete(extra._id);
  }
}

async function imageField(client, dir, file, alt, existing) {
  const assetId = existing?.asset?._ref || (await uploadImage(client, dir, file));
  return {
    _type: "image",
    asset: { _type: "reference", _ref: assetId },
    ...(alt ? { alt } : {}),
  };
}

async function main() {
  loadEnvLocal();

  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
  const token = process.env.SANITY_API_WRITE_TOKEN;
  const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-09-18";

  if (!projectId || !dataset) {
    throw new Error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID or NEXT_PUBLIC_SANITY_DATASET");
  }
  if (!token) {
    throw new Error("Missing SANITY_API_WRITE_TOKEN in .env.local");
  }

  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    token,
    useCdn: false,
  });

  for (const [index, item] of faqs.entries()) {
    const matches = await client.fetch(`*[_type == "faq" && question == $question]{ _id }`, {
      question: item.question,
    });
    await upsertPublished(client, "faq", matches, {
      question: item.question,
      answer: item.answer,
      order: index + 1,
    });
  }
  console.log(`Seeded ${faqs.length} FAQs`);

  for (const item of testimonials) {
    const matches = await client.fetch(
      `*[_type == "testimonial" && name == $name]{ _id, image }`,
      { name: item.name },
    );
    const source = matches.find((entry) => isPublicId(entry._id)) || matches[0];
    const image = await imageField(
      client,
      "testimonial",
      item.file,
      item.imageAlt,
      source?.image,
    );
    await upsertPublished(client, "testimonial", matches, {
      name: item.name,
      description: item.description,
      image,
    });
  }
  console.log(`Seeded ${testimonials.length} testimonials`);

  for (const item of lenders) {
    const matches = await client.fetch(`*[_type == "lender" && link == $link]{ _id, image }`, {
      link: item.link,
    });
    const source = matches.find((entry) => isPublicId(entry._id)) || matches[0];
    const image = await imageField(client, "partner", item.file, undefined, source?.image);
    await upsertPublished(client, "lender", matches, {
      image,
      link: item.link,
    });
  }
  console.log(`Seeded ${lenders.length} trusted lenders`);

  let createdServices = 0;
  let updatedServices = 0;
  for (const [index, item] of serviceSeed.entries()) {
    const existing = await client.fetch(
      `*[_type == "service" && slug.current == $slug][0]{ _id, image }`,
      { slug: item.slug },
    );
    const image = await imageField(
      client,
      item.image.dir,
      item.image.file,
      item.imageAlt,
      existing?.image,
    );
    const doc = {
      _type: "service",
      title: item.title,
      slug: { _type: "slug", current: item.slug },
      shortTitle: item.shortTitle,
      navLabel: item.navLabel,
      tagline: item.tagline,
      cardBlurb: item.cardBlurb,
      summary: item.summary,
      description: toBlocks(item.intro, item.slug),
      steps: keyed("serviceStep", item.slug, item.steps, (step) => ({
        title: step.title,
        body: step.body,
      })),
      benefits: keyed("serviceBenefit", item.slug, item.benefits, (benefit) => ({
        title: benefit.title,
        body: benefit.body,
      })),
      faqs: keyed("serviceFaq", item.slug, item.faqs, (faq) => ({
        question: faq.question,
        answer: faq.answer,
      })),
      order: index + 1,
      seoTitle: item.seoTitle,
      seoDescription: item.seoDescription,
      noIndex: false,
      image,
    };
    if (existing?._id) {
      await client.patch(existing._id).set(doc).commit();
      updatedServices += 1;
    } else {
      await client.create(doc);
      createdServices += 1;
    }
  }
  console.log(
    `Seeded ${createdServices + updatedServices} services` +
      (updatedServices ? ` (${updatedServices} updated)` : ""),
  );

  let createdPosts = 0;
  let skippedPosts = 0;
  for (const item of posts) {
    const existingId = await client.fetch(
      `*[_type == "post" && slug.current == $slug][0]._id`,
      { slug: item.slug },
    );
    if (existingId) {
      skippedPosts += 1;
      continue;
    }

    const imagePath = resolve(root, "public/images", item.image);
    if (!existsSync(imagePath)) {
      throw new Error(`Missing post image: ${item.image}`);
    }

    const asset = await client.assets.upload("image", createReadStream(imagePath), {
      filename: item.image,
    });

    await client.create({
      _type: "post",
      title: item.title,
      slug: { _type: "slug", current: item.slug },
      excerpt: item.excerpt,
      description: toBlocks(item.paragraphs, item.slug),
      category: item.category,
      author: "Gopal Woli",
      tags: item.tags,
      publishedAt: item.date,
      seoTitle: item.seoTitle,
      seoDescription: item.seoDescription,
      noIndex: false,
      image: {
        _type: "image",
        asset: { _type: "reference", _ref: asset._id },
        alt: item.imageAlt,
      },
    });
    createdPosts += 1;
  }
  console.log(
    createdPosts
      ? `Seeded ${createdPosts} posts${skippedPosts ? ` (${skippedPosts} already in Studio)` : ""}`
      : `Skip post: ${skippedPosts} already in Studio`,
  );

  console.log("Sanity seed complete.");
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
