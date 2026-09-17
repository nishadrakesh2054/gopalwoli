import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function FeatureBand({
  image,
  imageAlt,
  eyebrow,
  title,
  body,
  href,
  cta = "Learn More",
}: {
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  body: string;
  href: string;
  cta?: string;
}) {
  return (
    <section className="reveal relative min-h-[380px] md:min-h-[440px] flex items-end">
      <Image src={image} alt={imageAlt} fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
      <div className="relative z-10 mx-auto w-full max-w-[1140px] px-4 sm:px-6 py-12 md:py-16 text-white">
        <p className="text-xs font-semibold tracking-[0.14em] uppercase text-cta mb-3">{eyebrow}</p>
        <h2 className="text-[32px] md:text-[40px] font-semibold tracking-tight max-w-[16ch]">{title}</h2>
        <p className="mt-4 max-w-xl text-[16px] text-white/90 leading-relaxed">{body}</p>
        <div className="mt-6">
          <Button href={href}>{cta}</Button>
        </div>
      </div>
    </section>
  );
}
