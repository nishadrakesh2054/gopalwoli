import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Website terms and conditions layout for Gopal Woli. Placeholder legal copy pending review.",
};

export default function TermsPage() {
  return (
    <>
      <Breadcrumb title="Terms & Conditions" />
      <article className="reveal py-12 md:py-16">
      <Container className="max-w-[760px]">
        <h2 className="text-[36px] md:text-[42px] font-semibold tracking-tight text-ink">
          Terms &amp; Conditions
        </h2>
        <span className="mt-4 mb-6 block h-[3px] w-10 bg-cta" />
        <p className="text-[17px] leading-relaxed mb-8">
          Placeholder terms for layout. Have these reviewed for credit assistance, website use and
          the licensee’s requirements before the site is published.
        </p>
        <section className="mb-8">
          <h2 className="text-[22px] font-semibold text-ink mb-2">Use of this website</h2>
          <p className="leading-relaxed">
            [Placeholder] Information on this site is general in nature. It is not an offer of credit
            or personal financial advice. Lending criteria change and examples may not apply to you.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-[22px] font-semibold text-ink mb-2">Credit assistance</h2>
          <p className="leading-relaxed">
            [Placeholder] Credit assistance is provided by {site.name} as Credit Representative{" "}
            {site.creditRep} of {site.licensee}, Australian Credit Licence {site.acl}. A Credit Guide
            should be provided when credit assistance is offered.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-[22px] font-semibold text-ink mb-2">No guarantee of approval</h2>
          <p className="leading-relaxed">
            Approval, rates and features are determined by lenders. Nothing on this website guarantees
            a loan will be approved or that refinancing will reduce your costs.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-[22px] font-semibold text-ink mb-2">Changes</h2>
          <p className="leading-relaxed">
            [Placeholder] These terms may be updated. The published version on this page would be the
            current version once legally settled.
          </p>
        </section>
        <section>
          <h2 className="text-[22px] font-semibold text-ink mb-2">Contact</h2>
          <p>
            Questions about these terms: <a href={site.emailHref}>{site.email}</a>.
          </p>
        </section>
      </Container>
    </article>
    </>
  );
}
