"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Container } from "@/components/ui/Container";
import type { HomeLender } from "@/lib/lenders";

export function PartnerCarousel({ partners }: { partners: HomeLender[] }) {
  const logos = [...partners, ...partners];
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame = 0;
    const speed = 0.55;

    const tick = () => {
      if (!pausedRef.current) {
        offsetRef.current -= speed;
        const loopWidth = track.scrollWidth / 2;
        if (loopWidth > 0 && -offsetRef.current >= loopWidth) {
          offsetRef.current += loopWidth;
        }
        track.style.transform = `translate3d(${Math.round(offsetRef.current)}px,0,0)`;
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="reveal bg-white py-12 md:py-14">
      <Container>
        <div className="mb-8 text-center">
          <p className="mb-3 flex items-center justify-center gap-2.5 text-[12px] font-semibold tracking-[0.16em] text-brand uppercase">
            <span className="h-[2px] w-6 bg-cta" aria-hidden="true" />
            Partners
          </p>
          <h2 className="text-[24px] leading-snug font-bold tracking-tight text-ink text-balance sm:text-[32px] md:text-[42px] md:leading-[1.15]">
            Our Trusted Lenders
          </h2>
          <p className="mt-3 text-[15.5px] text-body">
            Let us find a suitable provider from our Lender Panel
          </p>
        </div>
      </Container>

      <div
        className="relative h-[80px] w-full max-w-full overflow-hidden sm:h-[92px]"
        onMouseEnter={() => {
          pausedRef.current = true;
        }}
        onMouseLeave={() => {
          pausedRef.current = false;
        }}
      >
        <div ref={trackRef} className="absolute top-0 left-0 flex w-max will-change-transform">
          {logos.map((partner, index) => (
            <a
              key={`${partner.name}-${index}`}
              href={partner.href}
              target="_blank"
              rel="noreferrer"
              className="flex h-[80px] w-[33.333vw] shrink-0 items-center justify-center bg-white px-2 no-underline sm:mr-4 sm:h-[92px] sm:w-[176px] sm:px-4"
            >
              <Image
                src={partner.src}
                alt={partner.name}
                width={150}
                height={52}
                className="h-9 w-auto max-w-[110px] object-contain sm:h-12 sm:max-w-[148px]"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
