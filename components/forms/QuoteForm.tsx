"use client";

import { useState } from "react";
import { FormSuccess } from "@/components/forms/FormSuccess";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";

/**
 * QUOTE → SANITY WORKFLOW
 * This form POSTs to /api/quote. That route creates a Sanity document.
 * Open /studio → Quote requests to see it.
 */
export function QuoteForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  if (sent) {
    return (
      <FormSuccess
        title="Quote request received"
        body="Thanks. We’ll review what you sent and get back to you to arrange a conversation."
        resetLabel="Request another quote"
        onReset={() => setSent(false)}
      />
    );
  }

  return (
    <form
      className="grid gap-5"
      onSubmit={async (event) => {
        event.preventDefault();
        setError("");
        setPending(true);

        const form = event.currentTarget;
        const data = new FormData(form);

        const response = await fetch("/api/quote", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: data.get("q-name"),
            email: data.get("q-email"),
            phone: data.get("q-phone"),
            requirement: data.get("q-requirement"),
            employment: data.get("q-employment"),
            amount: data.get("q-amount"),
            message: data.get("q-message"),
          }),
        });

        const result = (await response.json()) as { error?: string };
        setPending(false);

        if (!response.ok) {
          setError(result.error || "Could not send the quote request. Please try again.");
          return;
        }

        form.reset();
        setSent(true);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Input id="q-name" label="Full name" autoComplete="name" required />
        <Input id="q-email" label="Email" type="email" autoComplete="email" required />
        <Input id="q-phone" label="Mobile" type="tel" autoComplete="tel" required />
        <Select
          id="q-requirement"
          label="Finance requirement"
          required
          options={[
            "Buy a home",
            "First home",
            "Refinance",
            "Investment property",
            "House and land",
            "Commercial finance",
            "SMSF",
            "Business finance",
            "Vehicle finance",
            "Personal loan",
          ]}
        />
        <Select
          id="q-employment"
          label="Employment type"
          options={[
            "PAYG — full time",
            "PAYG — part time or casual",
            "Self-employed",
            "Contractor",
            "Other",
          ]}
        />
        <Input id="q-amount" label="Estimated loan amount (AUD)" placeholder="e.g. 550,000" />
      </div>
      <Textarea
        id="q-message"
        label="Message"
        optional
        rows={5}
        placeholder="Suburb, timing, or anything we should know before calling."
      />
      {error ? <p className="text-[13px] text-cta">{error}</p> : null}
      <div>
        <Button type="submit" size="sm" className="px-5" disabled={pending}>
          {pending ? "Sending…" : "Request a quote"}
        </Button>
      </div>
    </form>
  );
}
