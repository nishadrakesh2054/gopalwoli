import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FAQ({
  items,
  eyebrow = "Questions",
  title = "Frequently asked questions",
}: {
  items: { q: string; a: string }[];
  eyebrow?: string;
  title?: string;
}) {
  return (
    <section className="reveal py-16 md:py-20">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} />
        <div className="border-t border-line max-w-3xl">
          {items.map((item) => (
            <details key={item.q} className="group border-b border-line">
              <summary className="flex cursor-pointer items-start justify-between gap-3 py-5 text-[17px] font-semibold text-ink">
                <span className="min-w-0 flex-1">{item.q}</span>
                <span
                  className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center text-xl font-normal leading-none text-brand group-open:hidden"
                  aria-hidden="true"
                >
                  +
                </span>
                <span
                  className="mt-0.5 hidden h-5 w-5 shrink-0 items-center justify-center text-xl font-normal leading-none text-brand group-open:inline-flex"
                  aria-hidden="true"
                >
                  –
                </span>
              </summary>
              <p className="max-w-[62ch] pb-5 text-body leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
