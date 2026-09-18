import Image from "next/image";
import { Container } from "@/components/ui/Container";

const years = [
  {
    year: "2026",
    items: [
      {
        src: "/awards/f.png",
        alt: "RateMyAgent State Winner 2026 — Mortgage Broker of the Year, Australian Capital Territory",
        label: "ACT Winner",
      },
      {
        src: "/awards/g.png",
        alt: "RateMyAgent National Winner 2026 — Top 20 Mortgage Broker Australia",
        label: "National Top 20",
      },
    ],
  },
  {
    year: "2025",
    items: [
      {
        src: "/awards/d.png",
        alt: "RateMyAgent State Winner 2025 — Mortgage Broker of the Year, Australian Capital Territory",
        label: "ACT Winner",
      },
      {
        src: "/awards/e.png",
        alt: "RateMyAgent National Winner 2025 — Top 20 Mortgage Broker Australia",
        label: "National Top 20",
      },
    ],
  },
  {
    year: "2024",
    items: [
      {
        src: "/awards/b.png",
        alt: "RateMyAgent State Winner 2024 — Mortgage Broker of the Year, Australian Capital Territory",
        label: "ACT Winner",
      },
      {
        src: "/awards/c.png",
        alt: "RateMyAgent National Winner 2024 — Top 20 Mortgage Broker Australia",
        label: "National Top 20",
      },
    ],
  },
  {
    year: "2023",
    items: [
      {
        src: "/awards/a.png",
        alt: "RateMyAgent Top 5 Broker — Mortgage Broker of the Year Awards, State Award 2023",
        label: "Top 5 State",
      },
    ],
  },
] as const;

export function Award() {
  return (
    <section className="reveal bg-white py-10 md:py-12" aria-label="Awards">
      <Container>
        <div className="mb-8 text-center md:mb-10">
          <p className="mb-3 flex items-center justify-center gap-2.5 text-[12px] font-semibold tracking-[0.16em] text-brand uppercase">
            <span className="h-[2px] w-6 bg-cta" aria-hidden="true" />
            Awards
          </p>
          <h2 className="text-[24px] leading-snug font-bold tracking-tight text-ink text-balance sm:text-[32px] md:text-[42px] md:leading-[1.15]">
            Recognised for Excellence
          </h2>
        </div>

        <div className="relative">
          <div
            className="pointer-events-none absolute top-[11px] right-[12%] left-[12%] hidden h-px bg-line lg:block"
            aria-hidden="true"
          />

          <ol className="reveal-stagger grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {years.map((group) => (
              <li
                key={group.year}
                className="relative flex items-center gap-4 border-b border-line pb-6 last:border-b-0 last:pb-0 sm:flex-col sm:border-0 sm:pb-0 sm:text-center"
              >
                <p className="relative z-10 w-14 shrink-0 bg-white text-[13px] font-bold tracking-[0.14em] text-cta uppercase sm:mx-auto sm:mb-4 sm:inline-flex sm:w-auto sm:items-center sm:gap-2 sm:px-2">
                  <span className="hidden h-2 w-2 rounded-full bg-cta lg:inline-block" aria-hidden="true" />
                  {group.year}
                </p>
                <ul className="flex flex-1 flex-wrap items-start justify-end gap-3 sm:flex-none sm:justify-center sm:gap-4">
                  {group.items.map((award) => (
                    <li key={award.src} className="w-[92px] sm:w-[108px] md:w-[120px]">
                      <Image
                        src={award.src}
                        alt={award.alt}
                        width={240}
                        height={240}
                        className="mx-auto h-[92px] w-[92px] rounded-full object-contain transition-transform duration-300 hover:scale-105 sm:h-[108px] sm:w-[108px] md:h-[120px] md:w-[120px]"
                        sizes="120px"
                        quality={65}
                      />
                      <p className="mt-2 text-[11px] font-medium leading-tight tracking-wide text-muted">
                        {award.label}
                      </p>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
