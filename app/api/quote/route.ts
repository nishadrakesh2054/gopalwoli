import { NextResponse } from "next/server";
import { getWriteClient } from "@/sanity/lib/client";

/**
 * QUOTE → SANITY WORKFLOW
 * Browser form  →  POST /api/quote  →  Sanity document  →  Studio dashboard
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const requirement = String(body.requirement ?? "").trim();
  const employment = String(body.employment ?? "").trim();
  const amount = String(body.amount ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !email || !phone || !requirement) {
    return NextResponse.json(
      { error: "Name, email, mobile and finance requirement are required." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  try {
    const doc = await getWriteClient().create({
      _type: "quoteRequest",
      name,
      email,
      phone,
      requirement,
      employment,
      amount,
      message,
      status: "new",
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true, id: doc._id });
  } catch (error) {
    const detail = error instanceof Error ? error.message : "Could not save quote request.";
    return NextResponse.json({ error: detail }, { status: 500 });
  }
}
