import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Credit Guide",
  description: `Credit Guide for Gopal Woli, Credit Representative ${site.creditRep} of ${site.licensee}, Australian Credit Licence ${site.acl}.`,
  path: "/credit-guide",
});

export default function CreditGuidePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Credit Guide", path: "/credit-guide" },
        ])}
      />
      <Breadcrumb title="Credit Guide" />
      <article className="reveal py-12 md:py-16">
        <Container className="max-w-[760px]">
          <h2 className="text-[36px] font-semibold tracking-tight text-ink md:text-[42px]">Credit Guide</h2>
          <span className="mt-4 mb-6 block h-[3px] w-10 bg-cta" />
          <p className="mb-8 text-[17px] leading-relaxed">
            A Credit Guide will be published here before launch. Until then, this page is a layout
            placeholder.
          </p>
          <section className="mb-8">
            <h2 className="mb-2 text-[22px] font-semibold text-ink">Who provides credit assistance</h2>
            <p className="leading-relaxed">
              {site.name} is Credit Representative {site.creditRep} of {site.licensee}, Australian
              Credit Licence {site.acl}.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="mb-2 text-[22px] font-semibold text-ink">What the guide covers</h2>
            <p className="leading-relaxed">
              [Placeholder] The published Credit Guide should explain the credit assistance offered,
              how we are paid, the licensee relationship, dispute resolution, and how to obtain a
              copy.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-[22px] font-semibold text-ink">Request a copy</h2>
            <p className="leading-relaxed">
              A Credit Guide should also be provided when credit assistance is offered. Contact{" "}
              <a href={site.emailHref}>{site.email}</a> or visit the{" "}
              <a href="/contact">contact page</a> if you need one before that.
            </p>
          </section>
        </Container>
      </article>
    </>
  );
}
