import type { MetadataRoute } from "next";
import { POST_SITEMAP_QUERY, posts } from "@/lib/posts";
import { SERVICE_SITEMAP_QUERY, services } from "@/lib/services";
import { absoluteUrl } from "@/lib/site";
import { sanityFetch } from "@/sanity/lib/fetch";

const staticPaths = [
  "/",
  "/about",
  "/services",
  "/blog",
  "/contact",
  "/quote",
  "/credit-guide",
  "/privacy",
  "/terms",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  try {
    const sanityPosts = await sanityFetch<{ slug?: string; _updatedAt?: string }[]>(
      POST_SITEMAP_QUERY,
    );
    if (sanityPosts?.length) {
      blogEntries = sanityPosts
        .filter((post) => post.slug)
        .map((post) => ({
          url: absoluteUrl(`/blog/${post.slug}`),
          lastModified: post._updatedAt ? new Date(post._updatedAt) : undefined,
          changeFrequency: "monthly" as const,
          priority: 0.7,
        }));
    }
  } catch {
    // Keep the local article list if Sanity is unavailable.
  }

  let serviceEntries: MetadataRoute.Sitemap = services.map((service) => ({
    url: absoluteUrl(`/services/${service.slug}`),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  try {
    const sanityServices = await sanityFetch<{ slug?: string; _updatedAt?: string }[]>(
      SERVICE_SITEMAP_QUERY,
    );
    if (sanityServices?.length) {
      serviceEntries = sanityServices
        .filter((service) => service.slug)
        .map((service) => ({
          url: absoluteUrl(`/services/${service.slug}`),
          lastModified: service._updatedAt ? new Date(service._updatedAt) : undefined,
          changeFrequency: "monthly" as const,
          priority: 0.8,
        }));
    }
  } catch {
    // Keep the local service list if Sanity is unavailable.
  }

  const pages: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "/" ? 1 : path === "/blog" ? 0.8 : 0.6,
  }));

  return [...pages, ...serviceEntries, ...blogEntries];
}
