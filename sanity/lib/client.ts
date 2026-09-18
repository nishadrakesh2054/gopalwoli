import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

/** Public client — used later to *read* posts. Never put a write token here. */
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

/** Server-only client — used by /api/contact to *create* documents in Studio. */
export function getWriteClient() {
  const token = process.env.SANITY_API_WRITE_TOKEN;
  if (!token) {
    throw new Error("Missing SANITY_API_WRITE_TOKEN in .env.local");
  }

  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
    token,
  });
}
