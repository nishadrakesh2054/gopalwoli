import type { Metadata } from "next";
import { BlogCard } from "@/components/blog/BlogCard";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { getPosts } from "@/lib/posts";
import { blogIndexJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Blog",
  description:
    "Guides on home loans, first-home buying, refinancing and property finance from Canberra mortgage broker Gopal Woli.",
  path: "/blog",
  ogTitle: "Home loan and finance articles | Gopal Woli",
});

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <JsonLd data={blogIndexJsonLd()} />
      <Breadcrumb title="Blog" />
      <section className="reveal bg-white py-12 md:py-16">
        <Container>
          <div className="mb-8">
            <h2 className="text-[28px] font-bold tracking-tight text-ink md:text-[32px]">
              Latest articles
            </h2>
            <p className="mt-2 max-w-2xl text-[15.5px] text-body">
              General reading on home loans, first-home buying, refinancing and property finance.
            </p>
          </div>
          {posts.length ? (
            <div className="reveal-stagger grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogCard
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  image={post.image}
                  imageAlt={post.imageAlt}
                  category={post.category}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                />
              ))}
            </div>
          ) : (
            <p className="text-[15.5px] text-muted">Articles will appear here once they are published.</p>
          )}
        </Container>
      </section>
    </>
  );
}
