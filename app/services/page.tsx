import type { Metadata } from "next";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ServiceCardGrid } from "@/components/sections/ServiceCardGrid";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { getServices } from "@/lib/services";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description:
    "Home loans, house and land, investment, refinancing, commercial, SMSF, business, vehicle and personal finance in Canberra.",
  path: "/services",
  ogTitle: "Finance services in Canberra | Gopal Woli",
});

export default async function ServicesPage() {
  const items = await getServices();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <Breadcrumb title="Services" />
      <section className="reveal bg-[#f7f9fc] py-14 md:py-16">
        <Container>
          <div className="mb-10">
            <p className="flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.16em] uppercase text-brand mb-3">
              <span className="h-[2px] w-6 bg-cta" aria-hidden="true" />
              Our services
            </p>
            <h2 className="text-[32px] md:text-[42px] leading-[1.15] tracking-tight text-ink font-bold">
              Finance Solutions for Every Stage
            </h2>
          </div>

          <ServiceCardGrid headingLevel="h2" items={items} />
        </Container>
      </section>

      <FinalCTA
        title="Not sure which service you need?"
        body="Start with a conversation. We will point you to the right type of finance, or tell you if you are not ready to apply yet."
      />
    </>
  );
}
