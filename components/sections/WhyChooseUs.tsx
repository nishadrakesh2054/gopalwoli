import Image from "next/image";
import { Container } from "@/components/ui/Container";

const points = [
  "Personalised guidance and support",
  "Access to a range of lenders and loan products",
  "Clear communication at every step",
  "Support from application to settlement",
  "Solutions based on your unique circumstances",
];

const stats = [
  { label: "Customer Satisfaction", value: 100 },
  { label: "Happy Customer", value: 98 },
  { label: "5 Star Ratings", value: 97 },
  { label: "Dedication", value: 98 },
  { label: "Helping Hands", value: 98 },
];

export function WhyChooseUs() {
  return (
    <section className="reveal bg-white py-14 md:py-16">
      <Container>
        <div className="mb-10">
          <p className="flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.16em] uppercase text-brand mb-3">
            <span className="h-[2px] w-6 bg-cta" aria-hidden="true" />
            Why choose Gopal Woli
          </p>
          <h2 className="text-[24px] leading-snug font-bold tracking-tight text-ink text-balance sm:text-[32px] sm:leading-[1.15] md:text-[42px] md:max-w-[18ch]">
            Expert Mortgage Solutions for Your Dream Home
          </h2>
        </div>

        <div className="reveal-stagger grid items-stretch gap-6 lg:grid-cols-3">
          <div className="relative min-h-[260px] overflow-hidden rounded-2xl lg:min-h-full">
            <Image
              src="/images/consultation.jpg"
              alt="Two people reviewing documents during a finance meeting"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 33vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#17202b]/25 to-transparent" />
            <span className="absolute bottom-0 left-0 h-1 w-full bg-cta" aria-hidden="true" />
          </div>

          <div className="flex h-full flex-col justify-between gap-6 rounded-2xl bg-sky p-6">
            <p className="leading-relaxed text-[15.5px] text-body">
              We have wide experience to guide you through your journey with the least distress. We take
              into account your plans and help you map that road towards your milestone. Passionate about
              what we do, which reflects on our work through our on-time service and work ethic.
            </p>
            <ul className="space-y-3 text-[14.5px] text-ink">
              {points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#fff4e8] text-cta">
                    <CheckIcon />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex h-full flex-col justify-start rounded-2xl bg-sky p-6">
            <h3 className="mb-5 text-[18px] font-bold leading-snug tracking-tight text-ink">
              Our results at a glance
            </h3>
            <div className="flex flex-col gap-5">
              {stats.map((stat) => (
                <div key={stat.label} className="space-y-1.5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[13px] font-semibold text-ink">{stat.label}</span>
                    <span className="text-[13px] font-medium text-ink">{stat.value}%</span>
                  </div>
                  <div className="h-2.5 overflow-hidden bg-[#dbe7ef]">
                    <div
                      className="h-full bg-brand"
                      style={{ width: `${stat.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 12 12" fill="none" className="h-3 w-3" aria-hidden="true">
      <path
        d="M2.2 6.2 4.7 8.6 9.8 3.4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
