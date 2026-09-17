import { Container } from "@/components/ui/Container";

const steps = [
  { num: "01", title: "Talk to Us", body: "Understand your goals and situation." },
  { num: "02", title: "Assess", body: "Review your borrowing position and requirements." },
  { num: "03", title: "Compare", body: "Explore suitable lending options." },
  { num: "04", title: "Settle", body: "Support you through the application and settlement process." },
];

export function Process() {
  return (
    <section className="reveal bg-sky py-12 md:py-16">
      <Container className="grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16 items-center">
        <div>
          <p className="flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.16em] uppercase text-brand mb-3">
            <span className="h-[2px] w-6 bg-cta" aria-hidden="true" />
            How it works
          </p>
          <h2 className="text-[32px] md:text-[42px] leading-[1.15] tracking-tight text-ink font-bold">
            Simple Steps to Your Goal
          </h2>
        </div>
        <ol className="reveal-stagger relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <span
            className="hidden lg:block absolute top-8 left-[12%] right-[12%] border-t-2 border-dashed border-cta/40"
            aria-hidden="true"
          />
          {steps.map((step) => (
            <li key={step.num} className="relative text-center">
              <span className="relative mx-auto mb-3 flex h-16 w-16 items-center justify-center">
                <span
                  className="absolute inset-0 rounded-full border-2 border-brand"
                  aria-hidden="true"
                />
                <span
                  className="absolute inset-[5px] rounded-full bg-[#fff4e8]"
                  aria-hidden="true"
                />
                <span className="relative text-[15px] font-bold tracking-tight text-cta">
                  {step.num}
                </span>
              </span>
              <h3 className="text-[16px] font-semibold text-ink">{step.title}</h3>
              <p className="mt-1 text-[13px] text-muted leading-relaxed">{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
