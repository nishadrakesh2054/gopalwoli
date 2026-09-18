import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Breadcrumb title="Page not found" />
      <section className="reveal bg-sky py-12 md:py-16">
        <Container className="max-w-[640px]">
          <div className="bg-white p-6 md:p-8">
            <p className="mb-2 flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.16em] text-brand uppercase">
              <span className="h-[2px] w-6 bg-cta" aria-hidden="true" />
              404
            </p>
            <h2 className="text-[22px] font-bold tracking-tight text-ink">This page is not available</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-body">
              The link may be out of date, or the page may have moved. Try one of these instead.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/" size="sm">
                Back to home
              </Button>
              <Button href="/services" variant="outline" size="sm">
                Services
              </Button>
              <Button href="/contact" variant="outline" size="sm">
                Contact
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
