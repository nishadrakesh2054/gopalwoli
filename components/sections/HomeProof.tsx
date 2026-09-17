import { Container } from "@/components/ui/Container";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";

export function HomeProof({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <section className="reveal bg-sky py-14">
      <Container className="reveal-stagger grid min-w-0 gap-12 lg:grid-cols-2">
        <div className="min-w-0">
          <p className="flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.16em] uppercase text-brand mb-3">
            <span className="h-[2px] w-6 bg-cta" aria-hidden="true" />
            What our clients say
          </p>
          <h2 className="text-[24px] leading-snug font-bold tracking-tight text-ink sm:text-[32px] sm:leading-[1.15] md:text-[42px]">
            <span className="whitespace-nowrap">Real People.</span>{" "}
            <span className="whitespace-nowrap">Real Experiences.</span>
          </h2>
          <TestimonialCarousel />
        </div>
        <div className="min-w-0">
          <p className="mb-3 flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.16em] text-brand uppercase">
            <span className="h-[2px] w-6 bg-cta" aria-hidden="true" />
            Frequently asked questions
          </p>
          <h2 className="text-[24px] leading-snug font-bold tracking-tight text-ink text-balance sm:text-[32px] sm:leading-[1.15] md:text-[42px]">
            Your Questions Answered
          </h2>
          <div className="mt-6">
            {faqs.map((item) => (
              <details key={item.q} className="group border-b border-line">
                <summary className="flex cursor-pointer items-start justify-between gap-3 py-4 text-[15px] font-semibold text-ink">
                  <span className="min-w-0 flex-1">{item.q}</span>
                  <span
                    className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center text-lg font-normal leading-none text-brand group-open:hidden"
                    aria-hidden="true"
                  >
                    +
                  </span>
                  <span
                    className="mt-0.5 hidden h-5 w-5 shrink-0 items-center justify-center text-lg font-normal leading-none text-brand group-open:inline-flex"
                    aria-hidden="true"
                  >
                    –
                  </span>
                </summary>
                <p className="pb-4 pr-2 text-[14.5px] text-muted leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
