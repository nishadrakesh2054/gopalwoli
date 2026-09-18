"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { HomeTestimonial } from "@/lib/testimonials";

export function TestimonialCarousel({ testimonials }: { testimonials: HomeTestimonial[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;

  const goTo = useCallback((next: number) => {
    if (!count) return;
    setIndex((next + count) % count);
  }, [count]);

  useEffect(() => {
    if (paused || count < 2) return;
    const timer = window.setInterval(() => goTo(index + 1), 5500);
    return () => window.clearInterval(timer);
  }, [goTo, index, paused, count]);

  if (!count) return null;

  return (
    <div
      className="mt-8 min-w-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="overflow-hidden max-w-full">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {testimonials.map((item, i) => (
            <article key={`${item.name}-${i}`} className="min-w-full px-0.5">
              <div className="rounded-2xl bg-white p-6 md:p-7 shadow-[0_8px_24px_rgba(23,32,43,0.06)]">
                <div className="flex flex-col items-center gap-4 text-center md:flex-row md:items-center md:gap-5 md:text-left">
                  {item.image ? (
                    <div className="relative h-[96px] w-[96px] shrink-0 overflow-hidden rounded-full ring-2 ring-white shadow-[0_6px_16px_rgba(23,32,43,0.12)] md:h-[120px] md:w-[120px]">
                      <Image
                        src={item.image}
                        alt={item.imageAlt || item.name}
                        fill
                        className="object-cover object-[center_18%]"
                        sizes="(min-width: 768px) 120px, 96px"
                        quality={65}
                      />
                    </div>
                  ) : null}
                  <div className="min-w-0">
                    <p className="text-[17px] font-semibold tracking-[-0.02em] text-ink md:text-[18px]">{item.name}</p>
                    <p className="mt-2 text-[14.5px] leading-relaxed text-body md:text-[15px]">“{item.text}”</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-1.5" role="tablist" aria-label="Testimonial slides">
          {testimonials.map((item, i) => (
            <button
              key={`${item.name}-dot-${i}`}
              type="button"
              role="tab"
              aria-selected={index === i}
              aria-label={`Show ${item.name} testimonial`}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === i ? "w-3.5 bg-cta" : "w-1 bg-brand/25 hover:bg-brand/50"
              }`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-brand text-brand transition-colors hover:bg-brand hover:text-white"
            aria-label="Previous testimonial"
            onClick={() => goTo(index - 1)}
          >
            <Chevron dir="left" />
          </button>
          <button
            type="button"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-cta text-cta transition-colors hover:bg-cta hover:text-white"
            aria-label="Next testimonial"
            onClick={() => goTo(index + 1)}
          >
            <Chevron dir="right" />
          </button>
        </div>
      </div>
    </div>
  );
}

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
      {dir === "left" ? (
        <path
          d="M10 3 5 8l5 5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="M6 3l5 5-5 5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}
