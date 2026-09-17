import type { Metadata } from "next";
import { BlogCard } from "@/components/blog/BlogCard";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Container } from "@/components/ui/Container";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights to help you make informed finance decisions.",
};

export default function BlogPage() {
  return (
    <>
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
        </Container>
      </section>
    </>
  );
}
