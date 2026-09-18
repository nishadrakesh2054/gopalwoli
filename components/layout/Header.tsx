"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/nav";
import { Container } from "@/components/ui/Container";

const headerCtaClass =
  "h-10 items-center justify-center px-5 rounded-full bg-cta text-[13px] font-semibold text-white no-underline transition-all duration-300 hover:bg-cta-dark hover:shadow-[0_8px_18px_rgba(247,148,29,0.35)] hover:-translate-y-px";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    if (href.startsWith("http") || href === "#") return false;
    return pathname.startsWith(href);
  }

  return (
    <header
      className={`top-0 z-50 sticky lg:fixed lg:inset-x-0 transition-[background-color,box-shadow,backdrop-filter] duration-300 bg-white/90 shadow-[0_10px_28px_rgba(23,32,43,0.10)] backdrop-blur-md ${
        scrolled
          ? ""
          : "lg:bg-transparent lg:shadow-none lg:backdrop-blur-none"
      }`}
    >
      <Container className="relative grid grid-cols-[1fr_auto] items-center gap-3 py-0 lg:grid-cols-[1fr_auto_1fr]">
        <Link
          href="/"
          className="z-10 shrink-0 justify-self-start leading-none transition-transform duration-300 hover:scale-[1.03]"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/gopalwalilogo.png"
            alt="Gopal Woli"
            width={160}
            height={118}
            className={`block w-auto transition-[height] duration-300 h-[65px] ${
              scrolled
                ? "lg:h-[73px]"
                : "lg:h-[117px] lg:drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]"
            }`}
            sizes="(min-width: 1024px) 158px, 88px"
            quality={70}
          />
        </Link>

        <button
          type="button"
          className="z-10 ml-auto inline-flex h-10 w-10 items-center justify-center justify-self-end text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="relative flex h-3.5 w-4 flex-col justify-center gap-[3px]" aria-hidden="true">
            <span
              className={`block h-0.5 w-4 bg-ink transition-transform duration-300 ${
                open ? "translate-y-[5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-4 bg-ink transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-4 bg-ink transition-transform duration-300 ${
                open ? "-translate-y-[5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>

        <nav
          id="site-nav"
          aria-label="Primary"
          className={`${open ? "flex" : "hidden"} lg:flex absolute lg:static left-0 right-0 top-full lg:top-auto lg:col-start-2 lg:row-start-1 lg:justify-self-center flex-col lg:flex-row lg:items-center px-4 lg:px-0 py-3 lg:py-0 bg-white lg:bg-transparent border-b lg:border-0 border-line`}
        >
          <ul
            className={`nav-glass flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-1 lg:rounded-full lg:px-2 lg:py-1.5 ${
              scrolled ? "is-scrolled" : ""
            }`}
          >
            {nav.map((item) => {
              const active = isActive(item.href);
              const className = `nav-glass-item inline-flex items-center rounded-full px-4 py-2.5 lg:py-2 text-[14px] leading-none no-underline transition-all duration-200 ${
                active ? "is-active font-semibold text-cta" : "font-medium text-ink"
              }`;

              return (
                <li key={item.label}>
                  {"external" in item && item.external ? (
                    <a
                      href={item.href}
                      className={className}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link href={item.href} className={className} onClick={() => setOpen(false)}>
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <Link
          href="/quote"
          className={`${headerCtaClass} hidden shrink-0 justify-self-end lg:col-start-3 lg:row-start-1 lg:inline-flex`}
        >
          Get a Free Quote
        </Link>
      </Container>
    </header>
  );
}
