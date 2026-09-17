import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

const tiles = [
  {
    href: "/services/first-home-buyer",
    image: "/images/established-home.jpg",
    imageAlt: "Queenslander-style home with a garden and pool",
    title: "Buying Your First Home?",
    body: "Make your first step into homeownership with expert guidance and the right loan.",
  },
  {
    href: "/services/refinancing",
    image: "/images/commercial.jpg",
    imageAlt: "City skyline at dusk",
    title: "Looking to Refinance or Invest?",
    body: "Unlock better rates and new opportunities for your financial future.",
  },
];

export function HomePromos() {
  return (
    <section className="reveal bg-white py-14">
      <Container className="reveal-stagger grid gap-5 md:grid-cols-2">
        {tiles.map((tile) => (
          <article key={tile.href} className="grid sm:grid-cols-2 overflow-hidden rounded-2xl min-h-[220px]">
            <div className="relative min-h-[180px]">
              <Image
                src={tile.image}
                alt={tile.imageAlt}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 25vw, 100vw"
              />
            </div>
            <div className="bg-brand text-white p-6 flex flex-col justify-center">
              <h2 className="text-[22px] font-bold leading-snug">{tile.title}</h2>
              <p className="mt-3 text-[14.5px] text-white/90 leading-relaxed">{tile.body}</p>
              <Link
                href={tile.href}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white no-underline hover:underline"
              >
                Learn More →
              </Link>
            </div>
          </article>
        ))}
      </Container>
    </section>
  );
}
