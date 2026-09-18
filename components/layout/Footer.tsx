import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { footerPages, footerServices } from "@/lib/nav";
import { site } from "@/lib/site";

function Arrow({ className = "h-3 w-3" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M3 8h10M9.5 4.5 13 8l-3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const className =
    "group inline-flex items-center gap-1.5 text-[13.5px] font-medium text-[#b8c4cf] no-underline transition-colors duration-200 hover:text-white";
  const content = (
    <>
      <span>{children}</span>
      <Arrow className="h-3 w-3 shrink-0 text-cta/55 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-cta" />
    </>
  );

  if (href.startsWith("http")) {
    return (
      <a href={href} className={className} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  if (href === "#") {
    return (
      <a href="#" className={className}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}

function ColumnTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-3.5 flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em] text-white uppercase">
      <span className="h-[2px] w-4 bg-cta" aria-hidden="true" />
      {children}
    </h2>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy text-[#b8c4cf]">
      <div className="h-px bg-gradient-to-r from-transparent via-cta to-transparent" />
      <Container className="grid gap-8 py-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
        <div>
          <Link href="/" className="inline-block leading-none">
            <Image
              src="/gopalwalilogo.png"
              alt="Gopal Woli"
              width={160}
              height={118}
              className="mb-3 h-[56px] w-auto"
              sizes="76px"
              quality={70}
            />
          </Link>
          <p className="max-w-[30ch] text-[13.5px] leading-relaxed text-[#9aa8b5]">
            Independent mortgage and finance broking in Canberra.
          </p>
          <Link
            href="/quote"
            className="group mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-cta no-underline transition-colors hover:text-white"
          >
            Get a free quote
            <Arrow className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div>
          <ColumnTitle>Quick links</ColumnTitle>
          <ul className="space-y-1.5">
            {footerPages.map((item) => (
              <li key={item.label}>
                <FooterLink href={item.href}>{item.label}</FooterLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <ColumnTitle>Services</ColumnTitle>
          <ul className="space-y-1.5">
            {footerServices.map((item) => (
              <li key={item.href}>
                <FooterLink href={item.href}>{item.label}</FooterLink>
              </li>
            ))}
            <li>
              <FooterLink href="/services">All services</FooterLink>
            </li>
          </ul>
        </div>

        <div>
          <ColumnTitle>Contact</ColumnTitle>
          <ul className="space-y-2.5 text-[13.5px]">
            <li className="leading-relaxed text-[#9aa8b5]">
              {site.address}
            </li>
            <li>
              <a
                href={site.phoneHref}
                className="group inline-flex items-center gap-1.5 font-medium text-[#b8c4cf] no-underline transition-colors hover:text-white"
              >
                Mobile: {site.phone}
                <Arrow className="h-3 w-3 text-cta/70 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-cta" />
              </a>
            </li>
            <li>
              <a
                href={site.emailHref}
                className="group inline-flex items-center gap-1.5 font-medium text-[#b8c4cf] no-underline transition-colors hover:text-white"
              >
                Email: {site.email}
                <Arrow className="h-3 w-3 text-cta/70 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-cta" />
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <Container className="flex flex-col gap-3 border-t border-white/10 py-3.5 pb-6 text-[12.5px] md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-[#8b98a6]">© {site.name}</span>
          <span className="text-[11.5px] leading-relaxed text-[#8b98a6]">
            Credit Representative {site.creditRep} of {site.licensee}, Australian Credit Licence{" "}
            {site.acl}.
          </span>
        </div>
        <span className="flex flex-wrap items-center gap-5">
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/terms">Terms &amp; Conditions</FooterLink>
          <FooterLink href={site.creditGuideHref}>Credit Guide</FooterLink>
        </span>
      </Container>
    </footer>
  );
}
