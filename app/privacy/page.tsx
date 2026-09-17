import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy layout for Gopal Woli. Placeholder legal copy pending formal review.",
};

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumb title="Privacy Policy" />
      <article className="reveal py-12 md:py-16">
      <Container className="max-w-[760px]">
        <h2 className="text-[36px] md:text-[42px] font-semibold tracking-tight text-ink">
          Privacy Policy
        </h2>
        <span className="mt-4 mb-6 block h-[3px] w-10 bg-cta" />
        <p className="text-[17px] leading-relaxed mb-8">
          Placeholder legal copy for layout only. Replace with a policy prepared for Gopal Woli’s
          practice, credit licence arrangements and the Privacy Act 1988 (Cth) before publication.
        </p>
        {[
          ["Introduction", "This policy would explain who is collecting personal information, the credit representative and licensee relationship, and how to contact the privacy officer."],
          ["Information we collect", "Typical categories include identification, contact details, employment and income information, property details and information required to provide credit assistance."],
          ["How we use information", "Describe purposes such as responding to enquiries, assessing lending options, lodging applications with lenders, and meeting legal obligations."],
          ["Information sharing", "Set out sharing with lenders, aggregators, insurers, valuers, referees and regulators where required."],
          ["Data security", "Describe the safeguards you actually operate. Do not assert certifications that have not been confirmed."],
          ["Cookies", "If this website later uses analytics or advertising cookies, disclose them here."],
          ["Your rights", "Access, correction and complaint pathways, including AFCA if a complaint cannot be resolved internally."],
        ].map(([title, body]) => (
          <section key={title} className="mb-8">
            <h2 className="text-[22px] font-semibold text-ink mb-2">{title}</h2>
            <p className="leading-relaxed">[Placeholder] {body}</p>
          </section>
        ))}
        <section>
          <h2 className="text-[22px] font-semibold text-ink mb-2">Contact</h2>
          <p className="leading-relaxed">
            {site.name}
            <br />
            {site.addressLines.join(", ")}
            <br />
            <a href={site.emailHref}>{site.email}</a>
            <br />
            <a href={site.phoneHref}>{site.phone}</a>
          </p>
        </section>
      </Container>
    </article>
    </>
  );
}
