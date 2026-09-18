import { cache } from "react";
import { sanityFetch } from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";

export type HomeLender = { src: string; href: string; name: string };

/** Shown on home until lenders exist in Studio. */
export const fallbackHomeLenders: HomeLender[] = [
  { src: "/partner/anz.webp", name: "ANZ", href: "https://www.anz.com.au" },
  { src: "/partner/auswide.webp", name: "Auswide Bank", href: "https://www.auswidebank.com.au" },
  { src: "/partner/banksa.webp", name: "BankSA", href: "https://www.banksa.com.au" },
  { src: "/partner/citi.webp", name: "Citi", href: "https://www.citibank.com.au" },
  { src: "/partner/firefighter.webp", name: "Firefighters Mutual Bank", href: "https://www.fmbank.com.au" },
  { src: "/partner/firstmac.webp", name: "Firstmac", href: "https://www.firstmac.com.au" },
  { src: "/partner/healthprofessionals.webp", name: "Health Professionals Bank", href: "https://www.hpbank.com.au" },
  { src: "/partner/ingbank.webp", name: "ING", href: "https://www.ing.com.au" },
  { src: "/partner/latrobe.webp", name: "La Trobe Financial", href: "https://www.latrobefinancial.com.au" },
  { src: "/partner/liberty.webp", name: "Liberty", href: "https://www.liberty.com.au" },
  { src: "/partner/mystate.webp", name: "MyState", href: "https://www.mystate.com.au" },
  { src: "/partner/nab.webp", name: "NAB", href: "https://www.nab.com.au" },
  { src: "/partner/newcastlep.webp", name: "Newcastle Permanent", href: "https://www.newcastlepermanent.com.au" },
  { src: "/partner/pandnbank.webp", name: "P&N Bank", href: "https://www.pnbank.com.au" },
  { src: "/partner/peppermoney.webp", name: "Pepper Money", href: "https://www.pepper.com.au" },
  { src: "/partner/suncorp.webp", name: "Suncorp", href: "https://www.suncorp.com.au" },
  { src: "/partner/teachersmb.webp", name: "Teachers Mutual Bank", href: "https://www.tmbank.com.au" },
  { src: "/partner/westpac.webp", name: "Westpac", href: "https://www.westpac.com.au" },
];

const LENDER_QUERY = `*[_type == "lender" && defined(image) && defined(link)] | order(_createdAt asc) {
  image,
  link
}`;

function hostName(link: string) {
  try {
    return new URL(link).hostname.replace(/^www\./, "");
  } catch {
    return "Lender";
  }
}

export const getHomeLenders = cache(async function getHomeLenders(): Promise<HomeLender[]> {
  try {
    const items = await sanityFetch<{ image?: unknown; link?: string }[]>(LENDER_QUERY);
    const lenders = (items ?? [])
      .filter((item) => item.image && item.link)
      .map((item) => ({
        src: urlFor(item.image!).width(300).url(),
        href: item.link as string,
        name: hostName(item.link as string),
      }))
      .filter((item) => item.src && item.href);
    return lenders.length ? lenders : fallbackHomeLenders;
  } catch {
    return fallbackHomeLenders;
  }
});
