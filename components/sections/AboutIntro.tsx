import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function AboutIntro() {
  return (
    <section className="reveal bg-white py-12 md:py-16">
      <Container className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col justify-center">
          <p className="mb-3 flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.16em] text-brand uppercase">
            <span className="h-[2px] w-6 bg-cta" aria-hidden="true" />
            Gopal Woli
          </p>
          <h2 className="text-[28px] font-bold leading-[1.15] tracking-tight text-ink md:text-[36px]">
            Trusted, Best &amp; Top Mortgage Broker in Australia!
          </h2>
          <p className="mt-5 text-[15.5px] leading-relaxed text-body">
            Tired of sky-high rates and confusing home loans? Meet Australia&apos;s top best mortgage
            broker in Canberra—your ultimate partner for jaw-dropping rates, tailored refinancing, and
            lightning-fast pre-approvals.
          </p>
          <p className="mt-4 text-[15.5px] leading-relaxed text-body">
            Whether first-time buyer, investor, or family upsizing, our elite experts unlock dream
            properties with personalized solutions that save you thousands. Ready to dominate the
            market? Claim your free quote today and step into homeownership success!
          </p>
          <div className="mt-8">
            <Button href="/quote" size="sm">
              Claim your free quote
            </Button>
          </div>
        </div>

        <div className="relative min-h-[280px] overflow-hidden rounded-2xl lg:min-h-[440px]">
          <Image
            src="/home.jpeg"
            alt="Family looking at their new home"
            fill
            className="object-cover object-[72%_center] md:object-center"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <span className="absolute bottom-0 left-0 h-1 w-full bg-cta" aria-hidden="true" />
        </div>
      </Container>
    </section>
  );
}
