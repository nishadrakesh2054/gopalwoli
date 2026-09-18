import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function Breadcrumb({
  title,
  image = "/breadcrum.png",
  asHeading = true,
}: {
  title: string;
  image?: string;
  asHeading?: boolean;
}) {
  const TitleTag = asHeading ? "h1" : "p";

  return (
    <section className="relative overflow-hidden">
      <Image
        src={image}
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand/20 via-transparent to-navy/70" />
      <Container className="relative z-10 py-16 text-center md:py-20 lg:pt-36">
        <nav className="flex items-center justify-center gap-2 text-[13px] font-bold tracking-wide">
          <Link
            href="/"
            className="uppercase text-white no-underline hover:text-white"
          >
            home
          </Link>
          <span className="text-white" aria-hidden="true">
            /
          </span>
          <span className="uppercase text-white">{title}</span>
        </nav>
        <TitleTag className="mt-3 text-[32px] font-bold tracking-tight text-white md:text-[40px]">
          {title}
        </TitleTag>
      </Container>
    </section>
  );
}
