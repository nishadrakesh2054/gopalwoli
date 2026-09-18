import type { MetadataRoute } from "next";
import { defaultDescription } from "@/lib/seo";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.name,
    description: defaultDescription,
    start_url: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#0f75bc",
    lang: "en-AU",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/gopalwalilogo.png",
        sizes: "200x148",
        type: "image/png",
      },
    ],
  };
}
