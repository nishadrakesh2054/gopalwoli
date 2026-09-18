import { client } from "@/sanity/lib/client";

export const SANITY_REVALIDATE_SECONDS = 3600;

export function sanityFetch<T>(query: string, params: Record<string, unknown> = {}) {
  return client.fetch<T>(query, params, {
    next: { revalidate: SANITY_REVALIDATE_SECONDS, tags: ["sanity"] },
  });
}
