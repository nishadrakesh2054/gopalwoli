import Image from "next/image";
import { HeroCarousel } from "@/components/sections/HeroCarousel";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <HeroCarousel>
      <article
        className="relative min-h-[calc(100svh-65px)] lg:min-h-svh w-full min-w-full shrink-0 bg-[#eaf5fc]"
        aria-label="Gopal Woli"
      >
        <Container className="relative z-10 flex min-h-[calc(100svh-65px)] lg:min-h-svh flex-col">
          <div className="relative flex flex-1 items-center py-12 md:py-16">
            <div className="flex w-full flex-col gap-8 lg:block">
              <div className="relative max-w-[520px]">
                <div className="invisible hidden lg:block" aria-hidden="true">
                  <HeroCopyAnchor />
                </div>
                <div className="hero-enter lg:absolute lg:inset-x-0 lg:top-0">
                  <p className="mb-3 text-[20px] font-bold tracking-[0.08em] text-cta uppercase sm:text-[24px] md:text-[28px]">
                    Gopal Woli
                  </p>
                  <p className="text-[24px] leading-snug font-bold tracking-tight text-ink sm:text-[32px] sm:leading-[1.15] md:text-[42px] md:leading-[1.12]">
                    Trusted, Best &amp; Top Mortgage Broker in Australia!
                  </p>
                  <p className="mt-3 max-w-[46ch] text-[13.5px] leading-snug text-body sm:mt-4 sm:text-[15px] sm:leading-[1.45] md:text-[16px]">
                    Tired of confusing home loans and high rates? Get expert mortgage advice, tailored
                    solutions, and fast pre-approvals designed around your goals. Whether you’re buying
                    your first home, refinancing, or investing, we’re here to help.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2 sm:mt-8 sm:gap-3">
                    <Button href="/quote" size="xs">
                      Claim your free quote
                    </Button>
                    <span className="max-md:hidden">
                      <Button href="/services" variant="outline" size="xs" className="bg-white">
                        Explore Our Services
                      </Button>
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative mx-auto flex h-[320px] w-full max-w-[380px] items-center justify-center sm:h-[400px] lg:absolute lg:top-1/2 lg:right-0 lg:mx-0 lg:h-[min(540px,calc(100svh-12rem))] lg:max-w-[460px] lg:-translate-y-1/2">
                <Image
                  src="/woli.webp"
                  alt="Gopal Woli, mortgage broker in Canberra"
                  width={720}
                  height={1080}
                  className="h-full w-auto max-h-full object-contain object-center"
                  sizes="(min-width: 1024px) 40vw, 80vw"
                  priority
                  fetchPriority="high"
                  quality={70}
                />
              </div>
            </div>
          </div>
        </Container>
      </article>

      <article
        className="relative min-h-[calc(100svh-65px)] lg:min-h-svh w-full min-w-full shrink-0"
        aria-label="Home loans"
      >
        <div className="absolute inset-0">
          <Image
            src="/home.jpeg"
            alt="Family looking at their new home"
            fill
            className="object-cover object-[72%_center] md:object-[center_center]"
            sizes="100vw"
            quality={60}
          />
          <div className="absolute inset-y-0 left-0 w-[72%] md:w-[54%] bg-gradient-to-r from-[#eaf5fc] from-35% via-[#eaf5fc]/80 to-transparent" />
        </div>

        <Container className="relative z-10 flex min-h-[calc(100svh-65px)] lg:min-h-svh flex-col">
          <div className="relative flex flex-1 items-center py-12 md:py-16">
            <div className="max-w-[520px]">
              <HomeLoansCopy />
            </div>
          </div>
        </Container>
      </article>
    </HeroCarousel>
  );
}

function HeroCopyAnchor() {
  return (
    <>
      <p className="text-xs font-semibold tracking-[0.16em] uppercase mb-4">&nbsp;</p>
      <p className="text-[32px] leading-[1.15] font-bold sm:text-[40px] md:text-[52px] md:leading-[1.12]">
        Home Loans Made
        <br />
        Simpler.
      </p>
      <p className="mt-3 max-w-[42ch] text-[13.5px] leading-snug sm:mt-4 sm:text-[15px] sm:leading-[1.45] md:text-[16px]">
        Expert mortgage and finance guidance for home buyers, property investors, businesses and
        families across Australia.
      </p>
      <p className="mt-2.5 text-[13px] font-medium sm:mt-3 sm:text-[14px]">&nbsp;</p>
      <div className="mt-6 h-7 sm:mt-8 sm:h-8" />
    </>
  );
}

function HomeLoansCopy() {
  return (
    <>
      <p className="text-xs font-semibold tracking-[0.16em] uppercase text-brand mb-4">
        Australian mortgage broker
      </p>
      <h1 className="text-[32px] leading-[1.15] tracking-tight font-bold text-ink sm:text-[40px] md:text-[52px] md:leading-[1.12]">
        Home Loans Made
        <br />
        Simpler.
      </h1>
      <p className="mt-3 max-w-[42ch] text-[13.5px] leading-snug text-body sm:mt-4 sm:text-[15px] sm:leading-[1.45] md:text-[16px]">
        Expert mortgage and finance guidance for home buyers, property investors, businesses and
        families across Australia.
      </p>
      <p className="mt-2.5 text-[13px] font-medium text-ink sm:mt-3 sm:text-[14px]">
        Based in Belconnen, Canberra, ACT
      </p>
      <div className="mt-6 flex flex-wrap gap-2 sm:mt-8 sm:gap-3">
        <Button href="/quote" size="xs">
          Get a Free Quote
        </Button>
        <span className="max-md:hidden">
          <Button href="/services" variant="outline" size="xs" className="bg-white">
            Explore Our Services
          </Button>
        </span>
      </div>
    </>
  );
}
