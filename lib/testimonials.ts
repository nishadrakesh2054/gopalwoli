import { client } from "@/sanity/lib/client";

export type HomeTestimonial = {
  name: string;
  text: string;
  image?: string;
  imageAlt?: string;
};

/** Shown on home until testimonials exist in Studio. */
export const fallbackHomeTestimonials: HomeTestimonial[] = [
  {
    name: "John Bolf",
    image: "/testimonial/john.jpeg",
    imageAlt: "Portrait of John Bolf",
    text: "Great service! They helped us secure the perfect home loan at an amazing rate. Highly recommended!",
  },
  {
    name: "Anna Fury",
    image: "/testimonial/anna.jpeg",
    imageAlt: "Portrait of Anna Fury",
    text: "Professional and knowledgeable team. They made the refinancing process smooth and stress-free!",
  },
  {
    name: "David Linn",
    image: "/testimonial/david.jpeg",
    imageAlt: "Portrait of David Linn",
    text: "Excellent mortgage brokers! They found me competitive rates and saved thousands on my investment property.",
  },
];

const TESTIMONIAL_QUERY = `*[_type == "testimonial" && defined(name) && defined(description)] | order(_createdAt asc) {
  name,
  description
}`;

export async function getHomeTestimonials(): Promise<HomeTestimonial[]> {
  try {
    const items = await client.fetch<{ name?: string; description?: string }[]>(TESTIMONIAL_QUERY);
    const testimonials = (items ?? [])
      .filter((item) => item.name && item.description)
      .map((item) => ({
        name: item.name as string,
        text: item.description as string,
      }));
    return testimonials.length ? testimonials : fallbackHomeTestimonials;
  } catch {
    return fallbackHomeTestimonials;
  }
}
