import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getService, services } from "@/lib/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service" };
  return { title: service.title, description: service.summary };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <Breadcrumb title={service.title} />

      <section className="reveal bg-white py-12 md:py-16">
        <Container className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="relative min-h-[260px] overflow-hidden lg:min-h-[420px]">
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
            <span className="absolute bottom-0 left-0 h-1 w-full bg-cta" aria-hidden="true" />
          </div>
          <div>
            <p className="mb-3 flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.16em] text-brand uppercase">
              <span className="h-[2px] w-6 bg-cta" aria-hidden="true" />
              Service
            </p>
            <h2 className="text-[28px] font-bold leading-snug tracking-tight text-ink md:text-[36px]">
              {service.tagline}
            </h2>
            <div className="mt-5 space-y-4 text-[15.5px] leading-relaxed text-body">
              {service.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-7">
              <Button href="/quote" size="sm">
                Get a Free Quote
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="reveal bg-sky py-12 md:py-16">
        <Container>
          <div className="mb-10">
            <p className="mb-3 flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.16em] text-brand uppercase">
              <span className="h-[2px] w-6 bg-cta" aria-hidden="true" />
              How we help
            </p>
            <h2 className="text-[28px] font-bold tracking-tight text-ink md:text-[36px]">
              Simple steps
            </h2>
          </div>
          <ol className="reveal-stagger grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {service.steps.map((step, index) => (
              <li key={step.title} className="bg-white p-5 text-center">
                <span className="relative mx-auto mb-3 flex h-14 w-14 items-center justify-center">
                  <span className="absolute inset-0 rounded-full border-2 border-brand" aria-hidden="true" />
                  <span className="absolute inset-[5px] rounded-full bg-[#fff4e8]" aria-hidden="true" />
                  <span className="relative text-[14px] font-bold tracking-tight text-cta">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </span>
                <h3 className="text-[15px] font-semibold text-ink">{step.title}</h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="reveal bg-white py-12 md:py-16">
        <Container>
          <div className="mb-10">
            <p className="mb-3 flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.16em] text-brand uppercase">
              <span className="h-[2px] w-6 bg-cta" aria-hidden="true" />
              What to expect
            </p>
            <h2 className="text-[28px] font-bold tracking-tight text-ink md:text-[36px]">
              How this conversation helps
            </h2>
          </div>
          <div className="reveal-stagger grid gap-5 md:grid-cols-3">
            {service.benefits.map((item) => (
              <div key={item.title} className="bg-sky p-6">
                <span className="mb-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#fff4e8] text-cta">
                  <CheckIcon />
                </span>
                <h3 className="text-[16px] font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-body">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="reveal bg-sky py-12 md:py-16">
        <Container className="max-w-3xl">
          <p className="mb-3 flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.16em] text-brand uppercase">
            <span className="h-[2px] w-6 bg-cta" aria-hidden="true" />
            Frequently asked questions
          </p>
          <h2 className="mb-6 text-[28px] font-bold tracking-tight text-ink md:text-[36px]">
            Your questions answered
          </h2>
          <div>
            {service.faqs.map((item) => (
              <details key={item.q} className="group border-b border-line">
                <summary className="relative cursor-pointer py-4 pr-8 text-[15px] font-semibold text-ink">
                  {item.q}
                  <span className="absolute top-4 right-0 text-lg font-normal text-brand group-open:hidden">
                    +
                  </span>
                  <span className="absolute top-4 right-0 hidden text-lg font-normal text-brand group-open:inline">
                    –
                  </span>
                </summary>
                <p className="pb-4 pr-8 text-[14.5px] leading-relaxed text-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {others.length > 0 ? (
        <section className="reveal bg-white py-12 md:py-16">
          <Container>
            <p className="mb-3 flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.16em] text-brand uppercase">
              <span className="h-[2px] w-6 bg-cta" aria-hidden="true" />
              More services
            </p>
            <h2 className="mb-6 text-[28px] font-bold tracking-tight text-ink md:text-[36px]">
              You may also need
            </h2>
            <div className="reveal-stagger grid gap-4 sm:grid-cols-3">
              {others.map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className="group bg-sky p-5 no-underline transition-colors hover:bg-[#dff0fa]"
                >
                  <h3 className="text-[16px] font-semibold text-ink group-hover:text-brand">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted">{item.summary}</p>
                  <span className="mt-3 inline-block text-[13.5px] font-semibold text-brand">
                    Learn More →
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <FinalCTA
        title="Ready to take the next step?"
        body="Share a few details and we will follow up to discuss whether this type of finance is a fit."
      />
    </>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 12 12" fill="none" className="h-3 w-3" aria-hidden="true">
      <path
        d="M2.2 6.2 4.7 8.6 9.8 3.4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
