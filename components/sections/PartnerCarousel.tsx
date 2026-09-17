"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Container } from "@/components/ui/Container";

const partners = [
  { src: "/partner/anz.webp", name: "ANZ", href: "https://www.anz.com.au" },
  { src: "/partner/auswide.webp", name: "Auswide Bank", href: "https://www.auswidebank.com.au" },
  { src: "/partner/banksa.webp", name: "BankSA", href: "https://www.banksa.com.au" },
  { src: "/partner/citi.webp", name: "Citi", href: "https://www.citibank.com.au" },
  { src: "/partner/firefighter.webp", name: "Firefighters Mutual Bank", href: "https://www.fmbank.com.au" },
  { src: "/partner/firstmac.webp", name: "Firstmac", href: "https://www.firstmac.com.au" },
  { src: "/partner/healthprofessionals.webp", name: "Health Professionals Bank", href: "https://www.hpbank.com.au" },
  { src: "/partner/ingbank.webp", name: "ING", href: "https://www.ing.com.au" },
  { src: "/partner/latrobe.webp", name: "La Trobe Financial", href: "https://www.latrobefinancial.com.au" },
  { src: "/partner/liberty.webp", name: "Liberty", href: "https://www.liberty.com.au" },
  { src: "/partner/mystate.webp", name: "MyState", href: "https://www.mystate.com.au" },
  { src: "/partner/nab.webp", name: "NAB", href: "https://www.nab.com.au" },
  { src: "/partner/newcastlep.webp", name: "Newcastle Permanent", href: "https://www.newcastlepermanent.com.au" },
  { src: "/partner/pandnbank.webp", name: "P&N Bank", href: "https://www.pnbank.com.au" },
  { src: "/partner/peppermoney.webp", name: "Pepper Money", href: "https://www.pepper.com.au" },
  { src: "/partner/suncorp.webp", name: "Suncorp", href: "https://www.suncorp.com.au" },
  { src: "/partner/teachersmb.webp", name: "Teachers Mutual Bank", href: "https://www.tmbank.com.au" },
  { src: "/partner/westpac.webp", name: "Westpac", href: "https://www.westpac.com.au" },
];

const logos = [...partners, ...partners];

export function PartnerCarousel() {
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
        track.style.left = `${Math.round(offsetRef.current)}px`;
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
          <h2 className="text-[32px] leading-[1.15] font-bold tracking-tight text-ink md:text-[42px]">
            Our Trusted Lenders
          </h2>
          <p className="mt-3 text-[15.5px] text-body">
            Let us find a suitable provider from our Lender Panel
          </p>
        </div>
      </Container>

      <div
        className="overflow-hidden"
        onMouseEnter={() => {
          pausedRef.current = true;
        }}
        onMouseLeave={() => {
          pausedRef.current = false;
        }}
      >
        <div ref={trackRef} className="relative flex w-max">
          {logos.map((partner, index) => (
            <a
              key={`${partner.name}-${index}`}
              href={partner.href}
              target="_blank"
              rel="noreferrer"
              className="mr-4 flex h-[92px] w-[176px] shrink-0 items-center justify-center bg-white px-4 no-underline"
            >
              <Image
                src={partner.src}
                alt={partner.name}
                width={150}
                height={52}
                className="h-12 w-auto max-w-[148px] object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
