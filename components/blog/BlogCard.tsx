import Image from "next/image";
import Link from "next/link";

export function BlogCard({
  href,
  image,
  imageAlt,
  category,
  title,
  excerpt,
  date,
}: {
  href: string;
  image: string;
  imageAlt: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
}) {
  return (
    <article className="overflow-hidden bg-white ring-1 ring-line transition-shadow hover:shadow-[0_10px_24px_rgba(23,32,43,0.08)]">
      <Link href={href} className="block no-underline">
        <div className="relative aspect-[5/3] overflow-hidden">
          <Image src={image} alt={imageAlt} fill className="object-cover" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" quality={65} />
        </div>
        <div className="p-5">
          <p className="text-[11px] font-semibold tracking-[0.14em] text-brand uppercase">
            {category}
          </p>
          <h3 className="mt-2 text-[18px] font-semibold leading-snug tracking-tight text-ink">
            {title}
          </h3>
          <p className="mt-2 line-clamp-2 text-[14.5px] leading-relaxed text-muted">{excerpt}</p>
          <div className="mt-4 flex items-center justify-between gap-3 text-[13px]">
            <span className="text-muted">{date}</span>
            <span className="font-semibold text-brand">Read More →</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
