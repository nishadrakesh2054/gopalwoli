import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { HomePromos } from "@/components/sections/HomePromos";
import { HomeProof } from "@/components/sections/HomeProof";
import { HomeServices } from "@/components/sections/HomeServices";
import { PartnerCarousel } from "@/components/sections/PartnerCarousel";
import { Process } from "@/components/sections/Process";
import { DirectorMessage } from "@/components/sections/DirectorMessage";
import { RunningStats } from "@/components/sections/RunningStats";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";

const homeFaqs = [
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

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeServices />
      <Process />
      <WhyChooseUs />
      <RunningStats />
      <DirectorMessage />
      <HomePromos />
      <HomeProof faqs={homeFaqs} />
      <PartnerCarousel />
      <FinalCTA />
    </>
  );
}
