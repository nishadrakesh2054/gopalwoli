import { NextResponse } from "next/server";
import { getWriteClient } from "@/sanity/lib/client";

/**
 * CONTACT → SANITY WORKFLOW
 * Browser form  →  POST /api/contact  →  Sanity document  →  Studio dashboard
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
  const financeType = String(body.financeType ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !email) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  try {
    const doc = await getWriteClient().create({
      _type: "contactSubmission",
      name,
      email,
      phone,
      financeType,
      message,
      status: "new",
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true, id: doc._id });
  } catch (error) {
    const detail = error instanceof Error ? error.message : "Could not save message.";
    return NextResponse.json({ error: detail }, { status: 500 });
  }
}
