"use client";

import { useState } from "react";
import { FormSuccess } from "@/components/forms/FormSuccess";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";

/**
 * CONTACT → SANITY WORKFLOW
 * This form POSTs to /api/contact. That route creates a Sanity document.
 * Open /studio → Contact messages to see it.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  if (sent) {
    return (
      <FormSuccess
        title="Message received"
        body="Thanks for getting in touch. We’ll reply using the details you provided."
        resetLabel="Send another message"
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

        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: data.get("name"),
            email: data.get("email"),
            phone: data.get("phone"),
            financeType: data.get("finance-type"),
            message: data.get("message"),
          }),
        });

        const result = (await response.json()) as { error?: string };
        setPending(false);

        if (!response.ok) {
          setError(result.error || "Could not send the message. Please try again.");
          return;
        }

        form.reset();
        setSent(true);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Input id="name" label="Full name" autoComplete="name" required />
        <Input id="email" label="Email" type="email" autoComplete="email" required />
        <Input id="phone" label="Mobile" type="tel" autoComplete="tel" />
        <Select
          id="finance-type"
          label="Finance type"
          options={[
            "Home loan",
            "First home buyer",
            "Refinancing",
            "Property investment",
            "House & land",
            "Commercial",
            "SMSF",
            "Business",
            "Vehicle",
            "Personal",
            "Not sure",
          ]}
        />
      </div>
      <Textarea id="message" label="Message" rows={5} />
      {error ? <p className="text-[13px] text-cta">{error}</p> : null}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="sm" disabled={pending}>
          {pending ? "Sending…" : "Send message"}
        </Button>
        <p className="text-[13px] text-muted">
          Messages are saved to the dashboard. See the{" "}
          <a href="/privacy" className="font-medium text-brand no-underline hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </form>
  );
}
