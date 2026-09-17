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
            <details key={item.q} className="border-b border-line group">
              <summary className="cursor-pointer py-5 pr-10 font-semibold text-ink text-[17px] relative">
                {item.q}
                <span className="absolute right-0 top-5 text-brand text-xl font-normal group-open:hidden">
                  +
                </span>
                <span className="absolute right-0 top-5 text-brand text-xl font-normal hidden group-open:inline">
                  –
                </span>
              </summary>
              <p className="pb-5 pr-8 text-body leading-relaxed max-w-[62ch]">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
