import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/posts";

export function FeaturedPost({ post }: { post: Post }) {
  return (
    <article className="grid lg:grid-cols-2 gap-8 items-center mb-12">
      <div className="relative min-h-[280px] lg:min-h-[360px]">
        <Image src={post.image} alt={post.imageAlt} fill className="object-cover" />
      </div>
      <div>
        <p className="text-xs font-semibold tracking-[0.12em] uppercase text-brand">
          {post.category}
        </p>
        <h2 className="text-[28px] md:text-[32px] font-semibold text-ink tracking-tight mt-2">
          <Link href={`/blog/${post.slug}`} className="no-underline hover:text-brand">
            {post.title}
          </Link>
        </h2>
        <p className="mt-3 leading-relaxed">{post.excerpt}</p>
        <p className="mt-4 text-[13px] text-muted">
          {post.date} · {post.author}
        </p>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-block mt-5 text-sm font-semibold text-brand no-underline hover:underline"
        >
          Read article
        </Link>
      </div>
    </article>
  );
}
