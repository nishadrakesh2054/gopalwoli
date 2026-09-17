import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function DirectorMessage() {
  return (
    <section className="reveal bg-sky py-14 md:py-16">
      <Container>
        <div className="mb-10">
          <p className="flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.16em] uppercase text-brand mb-3">
            <span className="h-[2px] w-6 bg-cta" aria-hidden="true" />
            Director message
          </p>
          <h2 className="text-[32px] md:text-[42px] leading-[1.15] tracking-tight text-ink font-bold max-w-[22ch]">
            Dedicated Mortgage Professionals for Your Financial Success
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          <div className="relative min-h-[320px] overflow-hidden rounded-2xl lg:min-h-[460px]">
            <Image
              src="/director.jpeg"
              alt="Gopal Woli, Director and mortgage broker"
              fill
              className="object-cover object-[center_18%]"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <span className="absolute bottom-0 left-0 h-1 w-full bg-cta" aria-hidden="true" />
          </div>

          <div className="relative flex flex-col justify-center rounded-2xl bg-white p-6 md:p-8">
            <span
              className="mb-2 block font-serif text-[72px] leading-[0.7] text-cta"
              aria-hidden="true"
            >
              “
            </span>
            <p className="text-[16px] leading-relaxed text-body">
              At our services, we are committed to helping Australians achieve their dreams of
              homeownership. With over a decade of experience in the mortgage industry, our team of
              licensed professionals has helped thousands of clients secure the best possible loan
              solutions. Whether you&apos;re a first-time buyer, investor, or looking to refinance, we
              have the expertise and lender network to get you the best rates and terms available.
            </p>
            <span
              className="mt-2 block text-right font-serif text-[72px] leading-[0.55] text-cta"
              aria-hidden="true"
            >
              ”
            </span>
            <div className="mt-6 border-t border-line pt-5">
              <p className="text-[17px] font-semibold text-ink">Gopal Woli</p>
              <p className="mt-1 text-[13.5px] text-muted">Director, Mortgage Broker · Belconnen, ACT</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
