import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { services, type Service } from "@/lib/services";

export const serviceCards = [
  {
    slug: "first-home-buyer",
    title: "First Home Buyer",
    blurb: "Get expert guidance on your first home loan and make your dreams a reality.",
    icon: "home",
    tone: "cta",
  },
  {
    slug: "house-and-land",
    title: "House & Land Packages",
    blurb: "Finance for land and new home builds with competitive options.",
    icon: "land",
    tone: "brand",
  },
  {
    slug: "property-investment",
    title: "Property Investment",
    blurb: "Build your wealth with investment property loans and expert advice.",
    icon: "chart",
    tone: "cta",
  },
  {
    slug: "refinancing",
    title: "Refinancing",
    blurb: "Explore better rates and features for your current loan.",
    icon: "refresh",
    tone: "brand",
  },
  {
    slug: "commercial-finance",
    title: "Commercial Finance",
    blurb: "Finance for your business and commercial property.",
    icon: "office",
    tone: "cta",
  },
  {
    slug: "smsf",
    title: "SMSF",
    blurb: "Take control of your super with property investment.",
    icon: "document",
    tone: "brand",
  },
  {
    slug: "business-finance",
    title: "Business Finance",
    blurb: "Funding for your business growth and goals.",
    icon: "briefcase",
    tone: "cta",
  },
  {
    slug: "vehicle-finance",
    title: "Vehicle Finance",
    blurb: "Finance options for your next vehicle.",
    icon: "car",
    tone: "brand",
  },
  {
    slug: "personal-finance",
    title: "Personal Finance",
    blurb: "Flexible loans for your personal needs.",
    icon: "user",
    tone: "cta",
  },
] as const;

export function ServiceCardGrid({
  headingLevel = "h3",
  items,
}: {
  headingLevel?: "h2" | "h3";
  items?: Service[];
}) {
  const Title = headingLevel;
  const list = items?.length ? items : services;

  return (
    <div className="reveal-stagger grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {list.map((item) => {
        const card = serviceCards.find((entry) => entry.slug === item.slug);
        const icon = card?.icon ?? "home";
        const tone = card?.tone ?? "brand";
        const iconWrap =
          tone === "cta" ? "bg-[#fff4e8] text-cta" : "bg-[#e8f3fb] text-brand";

        return (
          <article
            key={item.slug}
            className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_8px_24px_rgba(23,32,43,0.05)]"
          >
            <div className="relative p-3 pb-0">
              <div className="relative aspect-[5/3] overflow-hidden rounded-xl">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                  quality={65}
                />
              </div>
              <span
                className={`absolute bottom-2 left-6 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full shadow-[0_6px_16px_rgba(23,32,43,0.12)] ${iconWrap}`}
              >
                <Icon name={icon} className="w-6 h-6" />
              </span>
            </div>

            <div className="flex flex-1 flex-col px-5 pt-4 pb-5">
              <Title className="text-[17px] font-semibold tracking-[-0.02em] leading-snug text-ink">
                {item.title}
              </Title>
              <p className="mt-1.5 text-[13.5px] text-muted leading-relaxed">
                {item.cardBlurb || item.summary}
              </p>
              <Link
                href={`/services/${item.slug}`}
                className="mt-3 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-brand no-underline hover:underline"
              >
                Learn More
                <ArrowIcon className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
