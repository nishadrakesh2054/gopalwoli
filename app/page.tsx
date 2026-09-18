import { Award } from "@/components/sections/Award";
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
import { getHomeFaqs } from "@/lib/faqs";
import { getHomeLenders } from "@/lib/lenders";
import { getHomeTestimonials } from "@/lib/testimonials";

export default async function HomePage() {
  const [faqs, lenders, testimonials] = await Promise.all([
    getHomeFaqs(),
    getHomeLenders(),
    getHomeTestimonials(),
  ]);

  return (
    <>
      <Hero />
      <Award />
      <HomeServices />
      <Process />
      <WhyChooseUs />
      <RunningStats />
      <DirectorMessage />
      <HomePromos />
      <HomeProof faqs={faqs} testimonials={testimonials} />
      <PartnerCarousel partners={lenders} />
      <FinalCTA />
    </>
  );
}
