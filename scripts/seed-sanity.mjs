import { createReadStream, existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createClient } from "@sanity/client";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

function loadEnvLocal() {
  const path = resolve(root, ".env.local");
  if (!existsSync(path)) {
    throw new Error("Missing .env.local — add SANITY_API_WRITE_TOKEN first.");
  }

  for (const line of readFileSync(path, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq < 0) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!process.env[key]) process.env[key] = value;
  }
}

const faqs = [
  {
    question: "What does a mortgage broker do?",
    answer:
      "A broker helps you understand lending requirements, compare suitable loan options, and prepare an application. We do not lend the money ourselves — lenders make the credit decision.",
  },
  {
    question: "How does the home loan process work?",
    answer:
      "Typically: a conversation about your goals, an assessment of borrowing position, a comparison of suitable products, an application, then unconditional approval and settlement.",
  },
  {
    question: "What is pre-approval?",
    answer:
      "Pre-approval is a lender’s conditional indication of how much you may be able to borrow, usually before you have a property under contract. It is not a final offer of credit.",
  },
  {
    question: "Can you help first home buyers?",
    answer:
      "Yes. We help first-home buyers understand deposits, Lenders Mortgage Insurance, documents and the steps through to settlement. Scheme eligibility is always confirmed against current rules.",
  },
  {
    question: "Can you help with refinancing?",
    answer:
      "Yes. We review your current loan — rate, fees, remaining term and features — and whether a change is actually worth the switching costs.",
  },
  {
    question: "Do I pay a broker fee?",
    answer:
      "For most home loans we are paid a commission by the lender if a loan settles. You should still compare the overall cost of the loan. Any fee that would apply to a particular product is explained before you proceed.",
  },
  {
    question: "What documents do I need?",
    answer:
      "Typical starting documents include identification, recent payslips or tax returns, bank statements, and details of existing loans or credit cards. We confirm an exact list after the first conversation — it depends on your situation and the lender.",
  },
];

const testimonials = [
  {
    name: "John Bolf",
    description:
      "Great service! They helped us secure the perfect home loan at an amazing rate. Highly recommended!",
  },
  {
    name: "Anna Fury",
    description:
      "Professional and knowledgeable team. They made the refinancing process smooth and stress-free!",
  },
  {
    name: "David Linn",
    description:
      "Excellent mortgage brokers! They found me competitive rates and saved thousands on my investment property.",
  },
];

const lenders = [
  { file: "anz.webp", link: "https://www.anz.com.au" },
  { file: "auswide.webp", link: "https://www.auswidebank.com.au" },
  { file: "banksa.webp", link: "https://www.banksa.com.au" },
  { file: "citi.webp", link: "https://www.citibank.com.au" },
  { file: "firefighter.webp", link: "https://www.fmbank.com.au" },
  { file: "firstmac.webp", link: "https://www.firstmac.com.au" },
  { file: "healthprofessionals.webp", link: "https://www.hpbank.com.au" },
  { file: "ingbank.webp", link: "https://www.ing.com.au" },
  { file: "latrobe.webp", link: "https://www.latrobefinancial.com.au" },
  { file: "liberty.webp", link: "https://www.liberty.com.au" },
  { file: "mystate.webp", link: "https://www.mystate.com.au" },
  { file: "nab.webp", link: "https://www.nab.com.au" },
  { file: "newcastlep.webp", link: "https://www.newcastlepermanent.com.au" },
  { file: "pandnbank.webp", link: "https://www.pnbank.com.au" },
  { file: "peppermoney.webp", link: "https://www.pepper.com.au" },
  { file: "suncorp.webp", link: "https://www.suncorp.com.au" },
  { file: "teachersmb.webp", link: "https://www.tmbank.com.au" },
  { file: "westpac.webp", link: "https://www.westpac.com.au" },
];

function slug(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

async function seedType(client, type, existingCount, create) {
  if (existingCount > 0) {
    console.log(`Skip ${type}: ${existingCount} already in Studio`);
    return;
  }
  await create();
}

async function main() {
  loadEnvLocal();

  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
  const token = process.env.SANITY_API_WRITE_TOKEN;
  const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-09-18";

  if (!projectId || !dataset) {
    throw new Error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID or NEXT_PUBLIC_SANITY_DATASET");
  }
  if (!token) {
    throw new Error("Missing SANITY_API_WRITE_TOKEN in .env.local");
  }

  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    token,
    useCdn: false,
  });

  const [faqCount, testimonialCount, lenderCount] = await Promise.all([
    client.fetch("count(*[_type == 'faq'])"),
    client.fetch("count(*[_type == 'testimonial'])"),
    client.fetch("count(*[_type == 'lender'])"),
  ]);

  await seedType(client, "faq", faqCount, async () => {
    for (const [index, item] of faqs.entries()) {
      await client.createIfNotExists({
        _id: `seed.faq.${index + 1}`,
        _type: "faq",
        question: item.question,
        answer: item.answer,
        order: index + 1,
      });
    }
    console.log(`Seeded ${faqs.length} FAQs`);
  });

  await seedType(client, "testimonial", testimonialCount, async () => {
    for (const item of testimonials) {
      await client.createIfNotExists({
        _id: `seed.testimonial.${slug(item.name)}`,
        _type: "testimonial",
        name: item.name,
        description: item.description,
      });
    }
    console.log(`Seeded ${testimonials.length} testimonials`);
  });

  await seedType(client, "lender", lenderCount, async () => {
    for (const item of lenders) {
      const imagePath = resolve(root, "public/partner", item.file);
      if (!existsSync(imagePath)) {
        throw new Error(`Missing lender image: ${item.file}`);
      }
      const asset = await client.assets.upload("image", createReadStream(imagePath), {
        filename: item.file,
      });
      await client.createIfNotExists({
        _id: `seed.lender.${slug(item.file.replace(/\.[^.]+$/, ""))}`,
        _type: "lender",
        image: {
          _type: "image",
          asset: { _type: "reference", _ref: asset._id },
        },
        link: item.link,
      });
    }
    console.log(`Seeded ${lenders.length} trusted lenders`);
  });

  console.log("Sanity seed complete.");
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
