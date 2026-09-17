"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function PageMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.getElementById("main");
    if (!root) return;

    const nodes = root.querySelectorAll(".reveal");
    if (typeof IntersectionObserver === "undefined") {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    nodes.forEach((node) => io.observe(node));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
