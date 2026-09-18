import type { PortableTextBlock } from "next-sanity";
import type { SanityImageSource } from "@sanity/image-url";
import { cache } from "react";
import { sanityFetch } from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  image: string;
  imageAlt: string;
  tags: string[];
  paragraphs: string[];
};

export type PostArticle = Post & {
  publishedAt?: string;
  updatedAt?: string;
  body: PortableTextBlock[];
  plainText: string;
  seo: {
    title: string;
    description: string;
    image?: string;
    canonicalUrl?: string;
    noIndex: boolean;
  };
};

export const posts: Post[] = [
  {
    slug: "what-is-home-loan-pre-approval",
    title: "What is home loan pre-approval, and what does it actually mean?",
    excerpt:
      "Pre-approval is a lender’s conditional view of how much you may be able to borrow. It is not a final offer of credit.",
    category: "Home Loans",
    date: "12 March 2026",
    author: "Gopal Woli",
    image: "/images/keys-handover.jpg",
    imageAlt: "House keys on a table after settlement",
    tags: ["home loan pre-approval", "conditional approval", "Canberra mortgage broker"],
    paragraphs: [
      "Pre-approval — sometimes called conditional approval — is a lender’s early look at your borrowing position. It is useful when you are ready to inspect properties and make offers, because it gives a clearer sense of a range the lender may consider.",
      "It is not a guarantee. The lender still needs to assess the property, confirm your information has not changed, and apply their credit policy at the time of the full application. Valuation, income verification and the contract itself can all change the outcome.",
      "Most pre-approvals are time-limited. If your job, debts, deposit or the type of property changes, the indication may no longer apply. A conversation before you rely on an old letter is worthwhile.",
      "This article is general information only. It is not personal financial, tax or legal advice, and it is not an offer of credit.",
    ],
  },
  {
    slug: "first-home-documents-to-gather",
    title: "Documents first-home buyers are usually asked to provide",
    excerpt:
      "A short list of the paperwork lenders typically request, so the first conversation is more useful.",
    category: "First Home Buyers",
    date: "4 March 2026",
    author: "Gopal Woli",
    image: "/images/first-home.jpg",
    imageAlt: "Front of a family home suited to first-home buyers",
    tags: ["first home buyer", "home loan documents", "genuine savings"],
    paragraphs: [
      "Most lenders start with identification, recent payslips, savings statements and details of any existing debts. Self-employed applicants are usually asked for tax returns, notices of assessment and often business activity statements.",
      "Gifted deposits, visa status and family guarantees each add documents. It is better to know that before you start making offers, rather than discovering a gap after you have a property under contract.",
      "Keeping statements in one folder — digital or paper — saves time. Lenders often want a clear trail of genuine savings, not only a closing balance.",
      "This is a general guide. The exact list depends on the lender, the loan and your circumstances.",
    ],
  },
  {
    slug: "when-refinancing-is-worth-a-conversation",
    title: "When refinancing is worth a conversation — and when it may not be",
    excerpt:
      "A lower advertised rate is only part of the picture. Fees, remaining term and how you use offset all matter.",
    category: "Refinancing",
    date: "18 February 2026",
    author: "Gopal Woli",
    image: "/images/established-home.jpg",
    imageAlt: "Established home with a garden",
    tags: ["refinancing", "home loan rate", "offset account"],
    paragraphs: [
      "People refinance to reduce repayments, change features, access equity, or move off a loan that no longer fits. Each of those reasons has a cost: application fees, discharge fees, and sometimes break costs on a fixed rate.",
      "A useful conversation starts with the current statement, not the headline rate on a comparison site. If staying is the better outcome, that is a valid conclusion.",
      "Also check how you use the loan day to day. An offset, redraw or split structure can matter more than a small rate difference if those features support how you actually repay.",
      "This article is general information. It is not a recommendation to refinance.",
    ],
  },
  {
    slug: "investment-property-loans-explained",
    title: "Investment property loans: what lenders usually look at",
    excerpt:
      "Rental income, existing debts and the property itself all shape whether an investment loan is realistic.",
    category: "Property Investment",
    date: "9 February 2026",
    author: "Gopal Woli",
    image: "/images/investment.jpg",
    imageAlt: "Apartment buildings used as investment property",
    tags: ["investment property loan", "rental income", "serviceability"],
    paragraphs: [
      "An investment loan is assessed differently from an owner-occupied home loan. Lenders look at rental income, existing commitments, and how much of the rent they are willing to count toward serviceability.",
      "The property type matters. Units in large complexes, regional locations and short-stay arrangements are treated differently by different lenders. A conversation about the actual property is more useful than a generic borrowing figure.",
      "Interest-only periods, offset accounts and splitting facilities are common questions. Each has trade-offs for cash flow and the long-term cost of the loan.",
      "This is general information only. Tax treatment of investment property should be confirmed with a registered tax adviser.",
    ],
  },
  {
    slug: "house-and-land-finance-basics",
    title: "House and land packages: how construction finance usually works",
    excerpt:
      "Land, progress payments and the build contract all affect which lenders may consider the file.",
    category: "Home Loans",
    date: "28 January 2026",
    author: "Gopal Woli",
    image: "/images/construction.jpg",
    imageAlt: "Home under construction on a residential block",
    tags: ["house and land package", "construction loan", "progress payments"],
    paragraphs: [
      "A house and land package is not the same as buying an established home. You may need finance for the land first, then a construction facility that releases funds in stages as the build progresses.",
      "Lenders look at the builder’s contract, the construction programme and how interest is charged while the home is unfinished. Variations and delays can change the cash you need along the way.",
      "Not every builder contract is acceptable to every lender. Checking that early can avoid a situation where the package is signed but the loan cannot proceed as expected.",
      "This article is a general overview. Contract and lending details should be checked against the documents in front of you.",
    ],
  },
  {
    slug: "offset-accounts-and-redraw",
    title: "Offset accounts and redraw: a plain-English comparison",
    excerpt:
      "Both can reduce interest, but they work in different ways and are not available on every loan.",
    category: "Finance Tips",
    date: "15 January 2026",
    author: "Gopal Woli",
    image: "/images/interior-home.jpg",
    imageAlt: "Interior of a modern living room",
    tags: ["offset account", "redraw", "home loan features"],
    paragraphs: [
      "An offset account is a transaction account linked to the loan. Money sitting in the offset usually reduces the balance the lender charges interest on, while remaining available to spend.",
      "Redraw is extra money you have already paid into the loan. You may be able to withdraw it later, subject to the lender’s rules, fees and remaining redraw limits.",
      "Some people want everyday access and choose offset. Others want extra repayments sitting against the loan and use redraw. Many products offer one, both, or neither — the feature set should match how you actually use money.",
      "This is general information, not a product comparison or a recommendation of any lender.",
    ],
  },
  {
    slug: "deposits-and-lenders-mortgage-insurance",
    title: "Deposits and Lenders Mortgage Insurance, explained simply",
    excerpt:
      "A smaller deposit can still be possible, but LMI and genuine savings rules vary by lender.",
    category: "First Home Buyers",
    date: "6 January 2026",
    author: "Gopal Woli",
    image: "/images/family-home.jpg",
    imageAlt: "Family home with a garden",
    tags: ["LMI", "home loan deposit", "first home buyer"],
    paragraphs: [
      "Lenders Mortgage Insurance (LMI) is usually charged when you borrow a high percentage of the property value. It protects the lender, not you, if the loan is not repaid.",
      "A larger genuine deposit can reduce or remove LMI. Gifted funds, first-home schemes and guarantees may be treated differently depending on the lender and the product.",
      "LMI is sometimes added to the loan rather than paid upfront. That increases the amount you borrow and the interest you pay over time, so it is worth understanding before you decide.",
      "Scheme eligibility and LMI waivers change. Confirm current rules rather than relying on an older example.",
    ],
  },
  {
    slug: "how-a-broker-compares-lenders",
    title: "How a broker compares lenders without chasing the headline rate",
    excerpt:
      "Rate matters, but fees, serviceability settings and the property itself often decide which file can proceed.",
    category: "Finance Tips",
    date: "12 December 2025",
    author: "Gopal Woli",
    image: "/images/consultation.jpg",
    imageAlt: "Two people reviewing documents during a finance meeting",
    tags: ["mortgage broker", "compare home loans", "serviceability"],
    paragraphs: [
      "A broker does not lend the money. Lenders make the credit decision. The work is to understand your situation, compare suitable options from a panel, and help you prepare an application.",
      "The lowest advertised rate is not always the loan that can be approved. Lenders treat overtime, bonuses, rental income, visa status and property type in different ways.",
      "Fees, offset, redraw, fixed-rate break costs and how quickly a lender assesses a file all belong in the same conversation as the rate.",
      "This website is general information only. Credit assistance is subject to lender assessment and your individual circumstances.",
    ],
  },
];

const POST_CARD_FIELDS = /* groq */ `
  "slug": slug.current,
  title,
  excerpt,
  category,
  author,
  publishedAt,
  tags,
  image,
  "imageAlt": coalesce(image.alt, title)
`;

const POSTS_QUERY = /* groq */ `
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    ${POST_CARD_FIELDS}
  }
`;

const POST_QUERY = /* groq */ `
  *[_type == "post" && slug.current == $slug][0]{
    ${POST_CARD_FIELDS},
    _updatedAt,
    description,
    "plainText": pt::text(description),
    "seoTitle": coalesce(seoTitle, title, ""),
    "seoDescription": coalesce(seoDescription, excerpt, ""),
    "seoImage": coalesce(ogImage, image),
    canonicalUrl,
    "noIndex": noIndex == true
  }
`;

const RELATED_QUERY = /* groq */ `
  *[_type == "post" && defined(slug.current) && slug.current != $slug]
    | order(publishedAt desc)[0...3] {
    ${POST_CARD_FIELDS}
  }
`;

export const POST_SITEMAP_QUERY = /* groq */ `
  *[_type == "post" && defined(slug.current) && noIndex != true]{
    "slug": slug.current,
    _updatedAt
  }
`;

type SanityPostCard = {
  slug?: string;
  title?: string;
  excerpt?: string;
  category?: string;
  author?: string;
  publishedAt?: string;
  tags?: string[];
  image?: SanityImageSource;
  imageAlt?: string;
};

type SanityPostArticle = SanityPostCard & {
  _updatedAt?: string;
  description?: PortableTextBlock[];
  plainText?: string;
  seoTitle?: string;
  seoDescription?: string;
  seoImage?: SanityImageSource;
  canonicalUrl?: string;
  noIndex?: boolean;
};

function formatDate(value?: string, fallback = "") {
  if (!value) return fallback;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return fallback || value;
  return new Intl.DateTimeFormat("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

function imageUrl(image: SanityImageSource | undefined, fallback: string, width: number, height: number) {
  if (!image) return fallback;
  try {
    return urlFor(image).width(width).height(height).fit("crop").url() || fallback;
  } catch {
    return fallback;
  }
}

function fallbackBySlug(slug: string) {
  return posts.find((item) => item.slug === slug);
}

function mapCard(item: SanityPostCard): Post | null {
  if (!item.slug || !item.title) return null;
  const fallback = fallbackBySlug(item.slug);
  return {
    slug: item.slug,
    title: item.title,
    excerpt: item.excerpt || fallback?.excerpt || "",
    category: item.category || fallback?.category || "Finance Tips",
    date: formatDate(item.publishedAt, fallback?.date || ""),
    author: item.author || fallback?.author || "Gopal Woli",
    image: imageUrl(item.image, fallback?.image || "/images/consultation.jpg", 1200, 720),
    imageAlt: item.imageAlt || fallback?.imageAlt || item.title,
    tags: item.tags?.filter(Boolean) ?? fallback?.tags ?? [],
    paragraphs: fallback?.paragraphs ?? [],
  };
}

function mapArticle(item: SanityPostArticle): PostArticle | null {
  const card = mapCard(item);
  if (!card) return null;
  const seoImage = imageUrl(item.seoImage || item.image, card.image, 1200, 630);
  return {
    ...card,
    publishedAt: item.publishedAt,
    updatedAt: item._updatedAt,
    body: Array.isArray(item.description) ? item.description : [],
    plainText: item.plainText || card.paragraphs.join(" "),
    seo: {
      title: item.seoTitle || card.title,
      description: item.seoDescription || card.excerpt,
      image: seoImage,
      canonicalUrl: item.canonicalUrl || undefined,
      noIndex: item.noIndex === true,
    },
  };
}

function articleFromFallback(post: Post): PostArticle {
  return {
    ...post,
    body: [],
    plainText: post.paragraphs.join(" "),
    seo: {
      title: post.title,
      description: post.excerpt,
      image: post.image,
      noIndex: false,
    },
  };
}

export function getPost(slug: string) {
  return posts.find((item) => item.slug === slug);
}

export function relatedPosts(slug: string) {
  return posts.filter((item) => item.slug !== slug).slice(0, 3);
}

export const getPosts = cache(async function getPosts(): Promise<Post[]> {
  try {
    const items = await sanityFetch<SanityPostCard[]>(POSTS_QUERY);
    const mapped = (items ?? []).map(mapCard).filter((item): item is Post => Boolean(item));
    return mapped.length ? mapped : posts;
  } catch {
    return posts;
  }
});

export const getPostBySlug = cache(async function getPostBySlug(slug: string): Promise<PostArticle | null> {
  try {
    const item = await sanityFetch<SanityPostArticle | null>(POST_QUERY, { slug });
    const mapped = item ? mapArticle(item) : null;
    if (mapped) return mapped;
  } catch {
    // Fall through to the static article used on the current site.
  }
  const fallback = getPost(slug);
  return fallback ? articleFromFallback(fallback) : null;
});

export const getRelatedPosts = cache(async function getRelatedPosts(slug: string): Promise<Post[]> {
  try {
    const items = await sanityFetch<SanityPostCard[]>(RELATED_QUERY, { slug });
    const mapped = (items ?? []).map(mapCard).filter((item): item is Post => Boolean(item));
    if (mapped.length) return mapped;
  } catch {
    // Fall through.
  }
  return relatedPosts(slug);
});

export const getPostSlugs = cache(async function getPostSlugs(): Promise<string[]> {
  try {
    const items = await sanityFetch<{ slug?: string }[]>(
      `*[_type == "post" && defined(slug.current)]{ "slug": slug.current }`,
    );
    const slugs = (items ?? []).map((item) => item.slug).filter((slug): slug is string => Boolean(slug));
    return slugs.length ? slugs : posts.map((item) => item.slug);
  } catch {
    return posts.map((item) => item.slug);
  }
});
