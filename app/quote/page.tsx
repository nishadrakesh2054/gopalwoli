import { QuoteForm } from "@/components/forms/QuoteForm";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Get a Free Quote",
  description:
    "Request a conversation about home loans, refinancing or other finance with Canberra mortgage broker Gopal Woli.",
  path: "/quote",
});

export default function QuotePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Free quote", path: "/quote" },
        ])}
      />
      <Breadcrumb title="Free Quote" />
      <section className="reveal bg-sky py-12 md:py-16">
        <Container className="max-w-[760px]">
          <div className="bg-white p-6 md:p-8">
            <p className="mb-2 flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.16em] text-brand uppercase">
              <span className="h-[2px] w-6 bg-cta" aria-hidden="true" />
              Quote
            </p>
            <h2 className="mb-6 text-[22px] font-bold tracking-tight text-ink">Request a quote</h2>
            <QuoteForm />
          </div>
        </Container>
      </section>
    </>
  );
}
