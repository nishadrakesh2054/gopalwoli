"use client";

import Image from "next/image";
import CountUp from "react-countup";
import { Container } from "@/components/ui/Container";

const stats = [
  { end: 12, label: "Years in industry" },
  { end: 30, label: "Award Winner" },
  { end: 1500, label: "Happy Clients", separator: true },
  { end: 5, label: "Ratings" },
];

export function RunningStats() {
  return (
    <section className="reveal relative overflow-hidden py-8 md:py-10">
      <Image
        src="/images/neighbourhood.jpg"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#0b2a44]/78" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand/35 via-transparent to-cta/20" />

      <Container className="relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center lg:border-l lg:border-white/15 lg:pl-6 first:lg:border-l-0 first:lg:pl-0"
            >
              <p className="text-[36px] md:text-[44px] font-bold leading-none tracking-tight text-cta">
                <CountUp
                  end={stat.end}
                  duration={2.4}
                  separator={stat.separator ? "," : ""}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </p>
              <span className="mx-auto mt-2.5 mb-2 block h-[2px] w-8 bg-cta" />
              <p className="text-[12.5px] md:text-[13.5px] font-medium tracking-[0.08em] uppercase text-white/90">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
