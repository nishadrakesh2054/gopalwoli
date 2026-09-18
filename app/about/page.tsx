import { DirectorMessage } from "@/components/sections/DirectorMessage";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About Us",
  description:
    "Meet Gopal Woli, a Canberra mortgage broker in Belconnen. Home loans, refinancing and finance guidance in English, Nepali and Hindi.",
  path: "/about",
});

const whoWeHelp = [
  {
    title: "Home buyers",
    body: "First-home buyers and families looking to purchase or move in the ACT and across Australia.",
  },
  {
    title: "Investors",
    body: "Clients adding an investment property or reviewing an existing loan structure.",
  },
  {
    title: "Business owners",
    body: "Conversations around commercial, vehicle and business lending, alongside personal home finance.",
  },
];

const approach = [
  { title: "Listen", body: "Start with what you want to achieve and what constraints you already know about." },
  { title: "Understand", body: "Income, existing debts, deposit, residency and the property itself all shape lender appetite." },
  { title: "Compare", body: "Look at more than the headline rate — fees, offset, redraw, fixed terms and serviceability." },
  { title: "Guide", body: "Explain the trade-offs so you can choose, rather than being talked into a product." },
  { title: "Support", body: "Stay involved through conditions, valuation and settlement — not only at application." },
];

const reasons = [
  "Access to a range of lenders rather than one institution",
  "Personalised guidance, including for self-employed applicants",
  "Clear communication about what has been requested and what is still outstanding",
  "Support through conditions, valuation and settlement",
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
        ])}
      />
      <Breadcrumb title="About Us" />
      <DirectorMessage />

      <section className="reveal bg-white py-12 md:py-16">
        <Container>
          <div className="mb-8">
            <p className="mb-3 flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.16em] text-brand uppercase">
              <span className="h-[2px] w-6 bg-cta" aria-hidden="true" />
              Who we help
            </p>
            <h2 className="text-[28px] font-bold tracking-tight text-ink md:text-[36px]">
              Clients we work with
            </h2>
          </div>
          <div className="reveal-stagger grid gap-5 md:grid-cols-3">
            {whoWeHelp.map((item) => (
              <div key={item.title} className="bg-sky p-6">
                <h3 className="text-[17px] font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-body">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-2xl text-[14.5px] leading-relaxed text-muted">
            Consultations are available in {site.languages}. Meetings can be arranged at the Belconnen
            office or by phone and video.
          </p>
        </Container>
      </section>

      <section className="reveal bg-sky py-12 md:py-16">
        <Container>
          <div className="mb-10">
            <p className="mb-3 flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.16em] text-brand uppercase">
              <span className="h-[2px] w-6 bg-cta" aria-hidden="true" />
              Our approach
            </p>
            <h2 className="text-[28px] font-bold tracking-tight text-ink md:text-[36px]">
              How we work
            </h2>
          </div>
          <ol className="reveal-stagger grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {approach.map((item, index) => (
              <li key={item.title} className="bg-white p-5 text-center">
                <span className="relative mx-auto mb-3 flex h-14 w-14 items-center justify-center">
                  <span className="absolute inset-0 rounded-full border-2 border-brand" aria-hidden="true" />
                  <span className="absolute inset-[5px] rounded-full bg-[#fff4e8]" aria-hidden="true" />
                  <span className="relative text-[14px] font-bold tracking-tight text-cta">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </span>
                <h3 className="text-[15px] font-semibold text-ink">{item.title}</h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted">{item.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="reveal bg-white py-12 md:py-16">
        <Container>
          <div className="mb-8">
            <p className="mb-3 flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.16em] text-brand uppercase">
              <span className="h-[2px] w-6 bg-cta" aria-hidden="true" />
              Why clients choose us
            </p>
            <h2 className="text-[28px] font-bold tracking-tight text-ink md:text-[36px]">
              How the work is done
            </h2>
          </div>
          <div className="reveal-stagger grid gap-4 md:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason} className="flex gap-3 bg-sky p-5">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fff4e8] text-cta">
                  <CheckIcon />
                </span>
                <p className="text-[15px] leading-relaxed text-ink">{reason}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button href="/quote" size="sm">
              Get a Free Quote
            </Button>
          </div>
        </Container>
      </section>

      <FinalCTA
        title="Meet before you apply"
        body="A short consultation is often enough to know whether it is worth gathering documents."
        cta="Request a Free Consultation"
        href="/contact"
      />
    </>
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
