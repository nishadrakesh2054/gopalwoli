import { ServiceCardGrid } from "@/components/sections/ServiceCardGrid";
import { Container } from "@/components/ui/Container";

export function HomeServices() {
  return (
    <section className="reveal bg-white py-14 md:py-16">
      <Container>
        <div className="mb-10">
          <p className="flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.16em] uppercase text-brand mb-3">
            <span className="h-[2px] w-6 bg-cta" aria-hidden="true" />
            Our services
          </p>
          <h2 className="text-[24px] leading-snug font-bold tracking-tight text-ink text-balance sm:text-[32px] sm:leading-[1.15] md:text-[42px]">
            Finance Solutions for Every Stage
          </h2>
        </div>

        <ServiceCardGrid />
      </Container>
    </section>
  );
}
