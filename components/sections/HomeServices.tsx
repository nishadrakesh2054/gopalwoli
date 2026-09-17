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
          <h2 className="text-[32px] md:text-[42px] leading-[1.15] tracking-tight text-ink font-bold">
            Finance Solutions for Every Stage
          </h2>
        </div>

        <ServiceCardGrid />
      </Container>
    </section>
  );
}
