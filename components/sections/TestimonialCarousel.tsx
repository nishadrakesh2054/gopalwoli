"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const testimonials = [
  {
    name: "John Bolf",
    image: "/testimonial/john.jpeg",
    imageAlt: "Portrait of John Bolf",
    text: "Great service! They helped us secure the perfect home loan at an amazing rate. Highly recommended!",
  },
  {
    name: "Anna Fury",
    image: "/testimonial/anna.jpeg",
    imageAlt: "Portrait of Anna Fury",
    text: "Professional and knowledgeable team. They made the refinancing process smooth and stress-free!",
  },
  {
    name: "David Linn",
    image: "/testimonial/david.jpeg",
    imageAlt: "Portrait of David Linn",
    text: "Excellent mortgage brokers! They found me competitive rates and saved thousands on my investment property.",
  },
];

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;

  const goTo = useCallback((next: number) => {
    setIndex((next + count) % count);
  }, [count]);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => goTo(index + 1), 5500);
    return () => window.clearInterval(timer);
  }, [goTo, index, paused]);

  return (
    <div
      className="mt-8"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {testimonials.map((item) => (
            <article key={item.name} className="min-w-full px-0.5">
              <div className="rounded-2xl bg-white p-6 md:p-7 shadow-[0_8px_24px_rgba(23,32,43,0.06)]">
                <div className="flex items-center gap-5">
                  <div className="relative h-[120px] w-[120px] shrink-0 overflow-hidden rounded-full ring-2 ring-white shadow-[0_6px_16px_rgba(23,32,43,0.12)]">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      className="object-cover object-[center_18%]"
                      sizes="120px"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[18px] font-semibold tracking-[-0.02em] text-ink">{item.name}</p>
                    <p className="mt-2 text-[15px] leading-relaxed text-body">“{item.text}”</p>
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
              key={item.name}
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
