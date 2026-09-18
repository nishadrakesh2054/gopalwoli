import { client } from "@/sanity/lib/client";

export type HomeFaq = { q: string; a: string };

/** Shown on home until FAQs exist in Studio. */
export const fallbackHomeFaqs: HomeFaq[] = [
  {
    q: "What does a mortgage broker do?",
    a: "A broker helps you understand lending requirements, compare suitable loan options, and prepare an application. We do not lend the money ourselves — lenders make the credit decision.",
  },
  {
    q: "How does the home loan process work?",
    a: "Typically: a conversation about your goals, an assessment of borrowing position, a comparison of suitable products, an application, then unconditional approval and settlement.",
  },
  {
    q: "What is pre-approval?",
    a: "Pre-approval is a lender’s conditional indication of how much you may be able to borrow, usually before you have a property under contract. It is not a final offer of credit.",
  },
  {
    q: "Can you help first home buyers?",
    a: "Yes. We help first-home buyers understand deposits, Lenders Mortgage Insurance, documents and the steps through to settlement. Scheme eligibility is always confirmed against current rules.",
  },
  {
    q: "Can you help with refinancing?",
    a: "Yes. We review your current loan — rate, fees, remaining term and features — and whether a change is actually worth the switching costs.",
  },
  {
    q: "Do I pay a broker fee?",
    a: "For most home loans we are paid a commission by the lender if a loan settles. You should still compare the overall cost of the loan. Any fee that would apply to a particular product is explained before you proceed.",
  },
  {
    q: "What documents do I need?",
    a: "Typical starting documents include identification, recent payslips or tax returns, bank statements, and details of existing loans or credit cards. We confirm an exact list after the first conversation — it depends on your situation and the lender.",
  },
];

const FAQ_QUERY = `*[_type == "faq"] | order(order asc, _createdAt asc) {
  question,
  answer
}`;

export async function getHomeFaqs(): Promise<HomeFaq[]> {
  try {
    const items = await client.fetch<{ question?: string; answer?: string }[]>(FAQ_QUERY);
    const faqs = (items ?? [])
      .filter((item) => item.question && item.answer)
      .map((item) => ({ q: item.question as string, a: item.answer as string }));
    return faqs.length ? faqs : fallbackHomeFaqs;
  } catch {
    return fallbackHomeFaqs;
  }
}
