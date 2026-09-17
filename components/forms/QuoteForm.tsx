"use client";

import { useState } from "react";
import { FormSuccess } from "@/components/forms/FormSuccess";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";

export function QuoteForm() {
  const [sent, setSent] = useState(false);

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
      onSubmit={(event) => {
        event.preventDefault();
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
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="sm">Request a quote</Button>
        <p className="text-[13px] text-muted">
          Visual prototype only. See the{" "}
          <a href="/privacy" className="font-medium text-brand no-underline hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </form>
  );
}
