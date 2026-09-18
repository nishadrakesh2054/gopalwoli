"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SocialWidget } from "@/components/layout/SocialWidget";
import { PageMotion } from "@/components/motion/PageMotion";

export function AppChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (pathname.startsWith("/studio")) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main id="main" className="min-w-0 flex-1 overflow-x-clip">
        {children}
      </main>
      <Footer />
      <SocialWidget />
      <PageMotion />
    </>
  );
}
