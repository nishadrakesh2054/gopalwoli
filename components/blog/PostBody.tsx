import Image from "next/image";
import { PortableText, type PortableTextBlock, type PortableTextComponents } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="mb-5 text-[17px] leading-[1.75]">{children}</p>,
    h2: ({ children }) => (
      <h2 className="mt-10 mb-4 text-[24px] font-semibold tracking-tight text-ink">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 mb-3 text-[20px] font-semibold tracking-tight text-ink">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-6 mb-3 text-[18px] font-semibold tracking-tight text-ink">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-brand pl-4 text-[17px] leading-[1.75] text-muted">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-5 list-disc space-y-2 pl-6 text-[17px] leading-[1.75]">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mb-5 list-decimal space-y-2 pl-6 text-[17px] leading-[1.75]">{children}</ol>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-ink">{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ children, value }) => {
      const href = value?.href as string | undefined;
      const external = href ? !href.startsWith("/") : false;
      return (
        <a
          href={href}
          className="font-semibold text-brand underline-offset-2 hover:underline"
          rel={external ? "noreferrer noopener" : undefined}
          target={external ? "_blank" : undefined}
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      const alt = (value.alt as string | undefined) || "";
      return (
        <figure className="my-8">
          <Image
            src={urlFor(value).width(900).url()}
            alt={alt}
            width={900}
            height={560}
            className="h-auto w-full object-cover"
            sizes="(min-width: 900px) 720px, 100vw"
          />
        </figure>
      );
    },
  },
};

export function PostBody({
  value,
  fallback,
}: {
  value: PortableTextBlock[];
  fallback: string[];
}) {
  if (value.length) {
    return <PortableText value={value} components={components} />;
  }

  return (
    <>
      {fallback.map((paragraph) => (
        <p key={paragraph} className="mb-5 text-[17px] leading-[1.75]">
          {paragraph}
        </p>
      ))}
    </>
  );
}
