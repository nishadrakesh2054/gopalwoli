import type { Metadata } from "next";
import type { PostArticle } from "@/lib/posts";
import type { Service } from "@/lib/services";
import { absoluteUrl, site } from "@/lib/site";

export const defaultTitle = "Gopal Woli | Mortgage Broker Canberra";
export const defaultDescription =
  "Canberra mortgage broker for home loans, first-home buying, refinancing and investment finance in Belconnen, ACT.";

const defaultKeywords = [
  "Canberra mortgage broker",
  "home loans Canberra",
  "first home buyer Canberra",
  "refinancing ACT",
  "investment property loan",
  "Belconnen mortgage broker",
];

export function logoUrl() {
  return absoluteUrl("/gopalwalilogo.png");
}

export function ogImageUrl() {
  return absoluteUrl("/og.png");
}

export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  noIndex = false,
  ogTitle,
}: {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
  noIndex?: boolean;
  ogTitle?: string;
}): Metadata {
  const canonical = absoluteUrl(path);
  const socialTitle = ogTitle || (absoluteTitle ? title : `${title} | ${site.name}`);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      type: "website",
      url: canonical,
      title: socialTitle,
      description,
      locale: "en_AU",
      siteName: site.name,
      images: [
        {
          url: ogImageUrl(),
          width: 1200,
          height: 630,
          alt: `${site.name} mortgage broker logo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [ogImageUrl()],
    },
  };
}

function organizationLd() {
  return {
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    logo: {
      "@type": "ImageObject",
      url: logoUrl(),
      width: 200,
      height: 148,
    },
    image: ogImageUrl(),
    email: site.email,
    telephone: site.phone,
    address: postalAddressLd(),
  };
}

function postalAddressLd() {
  return {
    "@type": "PostalAddress",
    streetAddress: "Level 1, Unit 11 2-10 Oatley Court",
    addressLocality: "Belconnen",
    addressRegion: "ACT",
    postalCode: "2617",
    addressCountry: "AU",
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationLd(),
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        description: defaultDescription,
        inLanguage: "en-AU",
        publisher: { "@id": `${site.url}/#organization` },
      },
    ],
  };
}

export function homeJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["FinancialService", "LocalBusiness"],
        "@id": `${site.url}/#business`,
        name: site.name,
        alternateName: "Gopal Woli Mortgage Broker",
        description: defaultDescription,
        url: site.url,
        image: [logoUrl(), ogImageUrl()],
        logo: logoUrl(),
        email: site.email,
        telephone: site.phone,
        priceRange: "$$",
        currenciesAccepted: "AUD",
        address: postalAddressLd(),
        areaServed: [
          { "@type": "City", name: "Canberra" },
          { "@type": "AdministrativeArea", name: "Australian Capital Territory" },
          { "@type": "Country", name: "Australia" },
        ],
        knowsLanguage: ["en", "ne", "hi"],
        parentOrganization: {
          "@type": "Organization",
          name: site.licensee,
        },
        founder: {
          "@type": "Person",
          name: site.name,
          jobTitle: "Mortgage Broker",
          address: postalAddressLd(),
        },
        openingHours: "Mo-Su by appointment",
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Credit Representative",
          identifier: site.creditRep,
          recognizedBy: {
            "@type": "Organization",
            name: site.licensee,
          },
        },
      },
      ...(faqs.length
        ? [
            {
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.a,
                },
              })),
            },
          ]
        : []),
    ],
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function postCanonical(post: Pick<PostArticle, "slug" | "seo">) {
  return post.seo.canonicalUrl || absoluteUrl(`/blog/${post.slug}`);
}

function socialImage(image?: string) {
  if (!image) return ogImageUrl();
  if (/^https?:\/\//i.test(image)) return image;
  return absoluteUrl(image);
}

export function postMetadata(post: PostArticle): Metadata {
  const canonical = postCanonical(post);
  const title = post.seo.title || post.title;
  const description = post.seo.description || post.excerpt;
  const image = socialImage(post.seo.image || post.image);
  const usesOverride = Boolean(post.seo.title);

  return {
    title: usesOverride ? { absolute: title } : title,
    description,
    keywords: post.tags.length ? post.tags : defaultKeywords,
    alternates: { canonical },
    robots: post.seo.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      type: "article",
      url: canonical,
      title,
      description,
      locale: "en_AU",
      siteName: site.name,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author],
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: post.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function postJsonLd(post: PostArticle) {
  const canonical = postCanonical(post);
  const image = socialImage(post.seo.image || post.image);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.seo.description || post.excerpt,
        image,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt || post.publishedAt,
        author: {
          "@type": "Person",
          name: post.author,
        },
        publisher: {
          "@id": `${site.url}/#organization`,
          "@type": "Organization",
          name: site.name,
          url: site.url,
          logo: {
            "@type": "ImageObject",
            url: logoUrl(),
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": canonical,
        },
        keywords: post.tags.join(", "),
        articleSection: post.category,
        articleBody: post.plainText,
        inLanguage: "en-AU",
        url: canonical,
      },
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: post.title, path: `/blog/${post.slug}` },
      ]),
    ],
  };
}

export function blogIndexJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${site.name} Blog`,
    description:
      "General reading on home loans, first-home buying, refinancing and property finance in Canberra.",
    url: absoluteUrl("/blog"),
    inLanguage: "en-AU",
    publisher: {
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      logo: logoUrl(),
    },
  };
}

export function serviceCanonical(service: Pick<Service, "slug" | "seo">) {
  return service.seo?.canonicalUrl || absoluteUrl(`/services/${service.slug}`);
}

export function serviceMetadata(service: Service): Metadata {
  const canonical = serviceCanonical(service);
  const title = service.seo?.title || service.title;
  const description = service.seo?.description || service.summary;
  const image = socialImage(service.seo?.image || service.image);
  const usesOverride = Boolean(service.seo?.title);

  return {
    title: usesOverride ? { absolute: title } : title,
    description,
    alternates: { canonical },
    robots: service.seo?.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      type: "website",
      url: canonical,
      title,
      description,
      locale: "en_AU",
      siteName: site.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: service.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function serviceJsonLd(service: Service) {
  const canonical = serviceCanonical(service);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.title,
        description: service.seo?.description || service.summary,
        image: socialImage(service.seo?.image || service.image),
        url: canonical,
        areaServed: "Canberra",
        provider: {
          "@id": `${site.url}/#organization`,
          "@type": "Organization",
          name: site.name,
          url: site.url,
        },
      },
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: service.title, path: `/services/${service.slug}` },
      ]),
      ...(service.faqs.length
        ? [
            {
              "@type": "FAQPage",
              mainEntity: service.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.a,
                },
              })),
            },
          ]
        : []),
    ],
  };
}
