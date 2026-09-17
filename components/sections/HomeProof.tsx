import { Container } from "@/components/ui/Container";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";

export function HomeProof({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <section className="reveal bg-sky py-14">
      <Container className="reveal-stagger grid gap-12 lg:grid-cols-2">
        <div>
          <p className="flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.16em] uppercase text-brand mb-3">
            <span className="h-[2px] w-6 bg-cta" aria-hidden="true" />
            What our clients say
          </p>
          <h2 className="text-[32px] md:text-[42px] leading-[1.15] tracking-tight text-ink font-bold">
            Real People. Real Experiences.
          </h2>
          <TestimonialCarousel />
        </div>
        <div>
          <p className="flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.16em] uppercase text-brand mb-3">
            <span className="h-[2px] w-6 bg-cta" aria-hidden="true" />
            Frequently asked questions
          </p>
          <h2 className="text-[32px] md:text-[42px] leading-[1.15] tracking-tight text-ink font-bold">
            Your Questions Answered
          </h2>
          <div className="mt-6">
            {faqs.map((item) => (
              <details key={item.q} className="border-b border-line group">
                <summary className="cursor-pointer py-4 pr-8 font-semibold text-ink text-[15px] relative">
                  {item.q}
                  <span className="absolute right-0 top-4 text-brand text-lg font-normal group-open:hidden">
                    +
                  </span>
                  <span className="absolute right-0 top-4 text-brand text-lg font-normal hidden group-open:inline">
                    –
                  </span>
                </summary>
                <p className="pb-4 pr-8 text-[14.5px] text-muted leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
