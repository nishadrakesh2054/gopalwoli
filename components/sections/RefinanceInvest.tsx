import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function RefinanceInvest() {
  return (
    <section className="reveal py-16 md:py-20">
      <Container className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <p className="text-xs font-semibold tracking-[0.14em] uppercase text-brand mb-3">
            Investors and refinancers
          </p>
          <h2 className="text-[32px] md:text-[36px] leading-tight tracking-tight text-ink font-semibold">
            Looking to Refinance or Invest?
          </h2>
          <span className="mt-4 mb-5 block h-[3px] w-10 bg-cta" />
          <p className="leading-relaxed">
            Interest rates, offset accounts, and how much equity you can use all affect cash flow. If
            you already have a loan, a refinance conversation is often the right place to start.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/services/refinancing" variant="outline">
              Refinancing
            </Button>
            <Button href="/services/property-investment" variant="secondary">
              Investment loans
            </Button>
          </div>
        </div>
        <div className="relative min-h-[300px] lg:min-h-[400px]">
          <Image
            src="/images/investment.jpg"
            alt="Apartment building suitable for investment"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </Container>
    </section>
  );
}
