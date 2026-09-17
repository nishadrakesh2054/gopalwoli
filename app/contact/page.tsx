import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Gopal Woli in Belconnen, Canberra — phone, email and consultation request.",
};

const details: { label: string; lines: string[]; href?: string }[] = [
  { label: "Location", lines: [...site.addressLines] },
  { label: "Mobile", lines: [site.phone], href: site.phoneHref },
  { label: "Email", lines: [site.email], href: site.emailHref },
  { label: "Hours", lines: [site.hours] },
  { label: "Languages", lines: [site.languages] },
];

export default function ContactPage() {
  return (
    <>
      <Breadcrumb title="Contact" />

      <section className="reveal bg-sky py-12 md:py-16">
        <Container className="grid items-stretch gap-6 lg:grid-cols-2">
          <div className="flex flex-col bg-white p-6 md:p-8">
            <p className="mb-2 flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.16em] text-brand uppercase">
              <span className="h-[2px] w-6 bg-cta" aria-hidden="true" />
              Office
            </p>
            <h3 className="text-[22px] font-bold tracking-tight text-ink">Visit or call</h3>
            <div className="mt-6 flex-1 space-y-0">
              {details.map((item) => (
                <div key={item.label} className="border-t border-line py-4 first:border-t-0 first:pt-0">
                  <p className="text-[11px] font-semibold tracking-[0.14em] text-brand uppercase">
                    {item.label}
                  </p>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-ink">
                    {item.href ? (
                      <a href={item.href} className="text-ink no-underline hover:text-brand">
                        {item.lines[0]}
                      </a>
                    ) : (
                      item.lines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))
                    )}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-2">
              <Button href="/quote" size="sm">Request a Free Consultation</Button>
            </div>
          </div>

          <div className="flex flex-col bg-white p-6 md:p-8">
            <p className="mb-2 flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.16em] text-brand uppercase">
              <span className="h-[2px] w-6 bg-cta" aria-hidden="true" />
              Message
            </p>
            <h3 className="mb-6 text-[22px] font-bold tracking-tight text-ink">Send a message</h3>
            <ContactForm />
          </div>
        </Container>

        <Container className="mt-6">
          <iframe
            title="Map of Gopal Woli office in Belconnen"
            src="https://maps.google.com/maps?q=2-10%20Oatley%20Court%20Belconnen%20ACT%202617&z=16&output=embed"
            className="h-[320px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Container>
      </section>
    </>
  );
}
