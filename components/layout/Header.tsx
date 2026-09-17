"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/nav";
import { Container } from "@/components/ui/Container";

const headerCtaClass =
  "inline-flex h-8 items-center justify-center px-3.5 rounded-full bg-cta text-[13px] font-semibold text-white no-underline transition-all duration-300 hover:bg-cta-dark hover:shadow-[0_8px_18px_rgba(247,148,29,0.35)] hover:-translate-y-px";

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
    if (href === "/" ) return pathname === "/";
    if (href.startsWith("http") || href === "#") return false;
    return pathname.startsWith(href);
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        scrolled
          ? "bg-white/90 shadow-[0_10px_28px_rgba(23,32,43,0.10)] backdrop-blur-md"
          : "bg-white/95 shadow-[0_1px_0_#e8eef4] backdrop-blur-sm"
      }`}
    >
      <Container className="relative flex items-center gap-3 py-0">
        <Link
          href="/"
          className="shrink-0 leading-none transition-transform duration-300 hover:scale-[1.03]"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/gopalwalilogo.png"
            alt="Gopal Woli"
            width={280}
            height={207}
            className={`block w-auto transition-[height] duration-300 ${scrolled ? "h-[60px]" : "h-[72px]"}`}
            priority
          />
        </Link>

        <button
          type="button"
          className="ml-auto inline-flex items-center gap-2 h-8 px-2.5 rounded-full border border-line text-[13px] font-semibold text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="relative flex h-3.5 w-3.5 flex-col justify-center gap-[3px]" aria-hidden="true">
            <span
              className={`block h-0.5 w-3.5 bg-ink transition-transform duration-300 ${
                open ? "translate-y-[5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-3.5 bg-ink transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-3.5 bg-ink transition-transform duration-300 ${
                open ? "-translate-y-[5px] -rotate-45" : ""
              }`}
            />
          </span>
          {open ? "Close" : "Menu"}
        </button>

        <nav
          id="site-nav"
          aria-label="Primary"
          className={`${open ? "flex" : "hidden"} lg:flex absolute lg:static left-0 right-0 top-full lg:top-auto bg-white lg:bg-transparent border-b lg:border-0 border-line lg:flex-1 lg:justify-center flex-col lg:flex-row lg:items-center px-4 lg:px-0 py-3 lg:py-0`}
        >
          <ul className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-7">
            {nav.map((item) => {
              const active = isActive(item.href);
              const className = `group relative inline-flex items-center py-2.5 lg:py-0 text-[13.5px] leading-none no-underline transition-colors duration-200 ${
                active
                  ? "font-semibold text-cta"
                  : "font-medium text-ink hover:text-brand"
              }`;
              const underline = (
                <span
                  data-active={active ? "true" : "false"}
                  className="pointer-events-none absolute left-1/2 -bottom-[7px] hidden h-[2px] w-0 -translate-x-1/2 rounded-full bg-brand transition-[width] duration-300 ease-out group-hover:w-full data-[active=true]:w-full data-[active=true]:bg-cta lg:block"
                />
              );

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
                      <span>{item.label}</span>
                      {underline}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className={className}
                      onClick={() => setOpen(false)}
                    >
                      <span>{item.label}</span>
                      {underline}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="mt-3 lg:hidden">
            <Link
              href="/quote"
              className={headerCtaClass + " w-full"}
              onClick={() => setOpen(false)}
            >
              Get a Free Quote
            </Link>
          </div>
        </nav>

        <Link href="/quote" className={`${headerCtaClass} hidden lg:inline-flex shrink-0`}>
          Get a Free Quote
        </Link>
      </Container>
    </header>
  );
}
