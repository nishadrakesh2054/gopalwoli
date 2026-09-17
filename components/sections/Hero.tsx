import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[calc(100svh-72px)] bg-[#eaf5fc]">
      <div className="absolute inset-0">
        <Image
          src="/home.jpeg"
          alt="Family looking at their new home"
          fill
          className="object-cover object-[72%_center] md:object-[center_center]"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-y-0 left-0 w-[72%] md:w-[54%] bg-gradient-to-r from-[#eaf5fc] from-35% via-[#eaf5fc]/80 to-transparent" />
      </div>

      <Container className="relative z-10 flex min-h-[calc(100svh-72px)] flex-col">
        <div className="flex flex-1 items-center py-12 md:py-16">
          <div className="hero-enter max-w-[520px]">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-brand mb-4">
              Australian mortgage broker
            </p>
            <h1 className="text-[40px] md:text-[52px] leading-[1.12] tracking-tight font-bold text-ink">
              Home Loans Made
              <br />
              Simpler.
            </h1>
            <p className="mt-5 text-[16.5px] leading-relaxed text-body max-w-[46ch]">
              Expert mortgage and finance guidance for home buyers, property investors, businesses and
              families across Australia.
            </p>
            <p className="mt-4 text-[14px] font-medium text-ink">Based in Belconnen, Canberra, ACT</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/quote" size="sm">
                Get a Free Quote
              </Button>
              <Button href="/services" variant="outline" size="sm" className="bg-white">
                Explore Our Services
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
