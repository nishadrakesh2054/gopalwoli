import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BlogCard } from "@/components/blog/BlogCard";
import { PostBody } from "@/components/blog/PostBody";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Container } from "@/components/ui/Container";
import { getPostBySlug, getPostSlugs, getRelatedPosts } from "@/lib/posts";
import { postJsonLd, postMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Article", robots: { index: false, follow: false } };
  return postMetadata(post);
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();
  const related = await getRelatedPosts(slug);

  return (
    <>
      <JsonLd data={postJsonLd(post)} />
      <Breadcrumb title="Blog" asHeading={false} />
      <article className="reveal py-12 md:py-16">
        <Container className="max-w-[720px]">
          <p className="text-xs font-semibold tracking-[0.12em] uppercase text-brand">{post.category}</p>
          <h1 className="mt-3 text-[32px] md:text-[40px] font-semibold tracking-tight text-ink leading-tight">
            {post.title}
          </h1>
          <p className="mt-4 text-[14px] text-muted">
            {post.date} · {post.author}
          </p>
        </Container>
        <Container className="max-w-[900px] mt-8">
          <div className="relative h-[280px] md:h-[400px]">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              className="object-cover"
              sizes="(min-width: 900px) 900px, 100vw"
              priority
              quality={70}
            />
          </div>
        </Container>
        <Container className="max-w-[720px] mt-10">
          <PostBody value={post.body} fallback={post.paragraphs} />
          {post.tags.length ? (
            <ul className="mt-8 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <li
                  key={tag}
                  className="bg-sky px-3 py-1 text-[12px] font-semibold tracking-wide text-brand uppercase"
                >
                  {tag}
                </li>
              ))}
            </ul>
          ) : null}
        </Container>
      </article>

      {related.length > 0 ? (
        <section className="border-t border-line py-12">
          <Container>
            <h2 className="mb-6 text-xl font-semibold text-ink">Related articles</h2>
            <div className="reveal-stagger grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <BlogCard
                  key={item.slug}
                  href={`/blog/${item.slug}`}
                  image={item.image}
                  imageAlt={item.imageAlt}
                  category={item.category}
                  title={item.title}
                  excerpt={item.excerpt}
                  date={item.date}
                />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <FinalCTA />
    </>
  );
}
