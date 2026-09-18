"use client";

import { Children, useCallback, useEffect, useState, type ReactNode } from "react";

export function HeroCarousel({ children }: { children: ReactNode }) {
  const slides = Children.toArray(children);
  const count = slides.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback(
    (next: number) => {
      if (!count) return;
      setIndex((next + count) % count);
    },
    [count],
  );

  useEffect(() => {
    if (paused || count < 2) return;
    const timer = window.setInterval(() => goTo(index + 1), 7000);
    return () => window.clearInterval(timer);
  }, [count, goTo, index, paused]);

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
        {slides}
      </div>

      <button
        type="button"
        aria-label="Next slide"
        className="absolute top-1/2 right-2 z-20 -translate-y-1/2 text-cta transition-colors hover:text-cta-dark sm:right-4"
        onClick={() => goTo(index + 1)}
      >
        <Chevron />
      </button>

      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={index === i}
            aria-label={i === 0 ? "Show Gopal Woli slide" : "Show home loans slide"}
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

function Chevron() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true">
      <path
        d="M9 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
