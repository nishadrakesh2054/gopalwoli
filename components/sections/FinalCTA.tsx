import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function FinalCTA({
  title = "Let’s Find the Right Finance Solution for You",
  body = "Get in touch with Gopal Woli today for a free, no-obligation quote.",
  cta = "Get a Free Quote",
  href = "/quote",
}: {
  title?: string;
  body?: string;
  cta?: string;
  href?: string;
}) {
  return (
    <section className="reveal relative overflow-hidden py-16 md:py-20">
      <Image
        src="/images/commercial.jpg"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
        quality={50}
      />
      <div className="absolute inset-0 bg-brand/88" />
      <Container className="relative z-10 text-center">
        <h2 className="text-[24px] leading-snug font-bold tracking-tight text-white text-balance sm:text-[32px] md:text-[36px]">
          {title}
        </h2>
        <p className="mt-3 text-[#eaf4fb] leading-relaxed">{body}</p>
        <div className="mt-7">
          <Button href={href}>{cta}</Button>
        </div>
      </Container>
    </section>
  );
}
