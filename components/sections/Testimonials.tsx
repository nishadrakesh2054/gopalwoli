import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const quotes = [
  {
    text: "Replace this quote with a verified client comment, including their permission to publish name and suburb.",
    cite: "Client name · Canberra · First home buyer",
  },
  {
    text: "A second short comment works better than a long block of praise. Keep it specific to the service provided.",
    cite: "Client name · Belconnen · Refinancing",
  },
  {
    text: "Placeholder only. Do not publish as a real review.",
    cite: "Client name · ACT · Property investment",
  },
];

export function Testimonials() {
  return (
    <section className="reveal py-16 md:py-20 bg-mist">
      <Container>
        <SectionHeading eyebrow="Clients" title="What clients say">
          <p>
            Verified client comments will appear here. Until those are supplied, the examples below
            are layout placeholders only.
          </p>
        </SectionHeading>
        <div className="divide-y divide-line border-y border-line">
          {quotes.map((quote, index) => (
            <blockquote key={quote.cite} className="py-8">
              <span className="inline-block text-[11px] font-semibold tracking-wide uppercase text-[#7a5a12] bg-[#f8efd8] border border-[#ead7a0] px-2 py-0.5 mb-4">
                Placeholder testimonial
              </span>
              <p
                className={`text-ink leading-snug ${index === 0 ? "text-[22px] md:text-[24px] max-w-3xl" : "text-[18px] max-w-2xl"}`}
              >
                “{quote.text}”
              </p>
              <footer className="mt-4 text-[14.5px] text-muted">{quote.cite}</footer>
            </blockquote>
          ))}
        </div>
      </Container>
    </section>
  );
}
