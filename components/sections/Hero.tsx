"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { Achievements } from "@/components/sections/Achievements";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = 2;

  const goTo = useCallback(
    (next: number) => {
      setIndex((next + count) % count);
    },
    [count],
  );

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => goTo(index + 1), 7000);
    return () => window.clearInterval(timer);
  }, [goTo, index, paused]);

  return (
    <section
      className="relative overflow-hidden bg-[#eaf5fc]"
      aria-roledescription="carousel"
      aria-label="Home banner"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        <article
          className="relative min-h-[calc(100svh-68px)] lg:min-h-svh w-full min-w-full shrink-0"
          aria-hidden={index !== 0}
          aria-label="Home loans"
        >
          <div className="absolute inset-0">
            <Image
              src="/home.jpeg"
              alt="Family looking at their new home"
              fill
              className="object-cover object-[72%_center] md:object-[center_center]"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-y-0 left-0 w-[72%] md:w-[54%] bg-gradient-to-r from-[#eaf5fc] from-35% via-[#eaf5fc]/80 to-transparent" />
          </div>

          <Container className="relative z-10 flex min-h-[calc(100svh-68px)] lg:min-h-svh flex-col">
            <div className="relative flex flex-1 items-center py-12 md:py-16">
              <div className="hero-enter max-w-[520px]">
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
                <Achievements className="mt-5 lg:hidden" />
              </div>
              <Achievements className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 lg:flex" />
            </div>
          </Container>
        </article>

        <article
          className="relative min-h-[calc(100svh-68px)] lg:min-h-svh w-full min-w-full shrink-0 bg-[#eaf5fc]"
          aria-hidden={index !== 1}
          aria-label="Gopal Woli"
        >
          <Container className="relative z-10 flex min-h-[calc(100svh-68px)] lg:min-h-svh flex-col">
            <div className="relative flex flex-1 items-center">
              <div className="grid w-full items-center gap-8 py-10 lg:grid-cols-2 lg:gap-12 lg:py-0">
                <div className="max-w-[520px] pb-2 lg:pb-0">
                  <p className="mb-3 text-[20px] font-bold tracking-[0.08em] text-cta uppercase sm:text-[24px] md:text-[28px]">
                    Gopal Woli
                  </p>
                  <p className="text-[24px] leading-snug font-bold tracking-tight text-ink sm:text-[32px] sm:leading-[1.15] md:text-[42px] md:leading-[1.12]">
                    Trusted, Best &amp; Top Mortgage Broker in Australia!
                  </p>
                  <p className="mt-3 max-w-[46ch] text-[13.5px] leading-snug text-body sm:mt-4 sm:text-[15px] sm:leading-[1.45] md:text-[16px]">
                    Tired of confusing home loans and high rates? Get expert mortgage advice, tailored
                    solutions, and fast pre-approvals designed around your goals. Whether you’re buying
                    your first home, refinancing, or investing, we’re here to help. Get your free quote
                    today.
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
                  <Achievements className="mt-5 lg:hidden" />
                </div>

                <div className="relative mx-auto flex h-[340px] w-full max-w-[420px] items-end justify-center sm:h-[420px] lg:mx-0 lg:ml-auto lg:h-[calc(100svh)] lg:max-w-none">
                  <Image
                    src="/maindirector.jpeg"
                    alt="Gopal Woli, mortgage broker in Canberra"
                    width={720}
                    height={1080}
                    className="h-full w-auto max-h-full object-contain object-bottom"
                    sizes="(min-width: 1024px) 40vw, 80vw"
                    priority
                  />
                </div>
              </div>
              <Achievements className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 lg:flex" />
            </div>
          </Container>
        </article>
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        className="absolute top-1/2 left-2 z-20 -translate-y-1/2 text-cta transition-colors hover:text-cta-dark sm:left-4"
        onClick={() => goTo(index - 1)}
      >
        <Chevron dir="left" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        className="absolute top-1/2 right-2 z-20 -translate-y-1/2 text-cta transition-colors hover:text-cta-dark sm:right-4"
        onClick={() => goTo(index + 1)}
      >
        <Chevron dir="right" />
      </button>

      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1.5">
        {[0, 1].map((i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={index === i}
            aria-label={i === 0 ? "Show home loans slide" : "Show Gopal Woli slide"}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === i ? "w-3.5 bg-cta" : "w-1 bg-brand/30 hover:bg-brand/50"
            }`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </section>
  );
}

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true">
      <path
        d={dir === "left" ? "M15 5 8 12l7 7" : "M9 5l7 7-7 7"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
