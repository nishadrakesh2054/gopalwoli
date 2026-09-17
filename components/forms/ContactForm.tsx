"use client";

import { useState } from "react";
import { FormSuccess } from "@/components/forms/FormSuccess";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";

export function ContactForm() {
  const [sent, setSent] = useState(false);

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
      onSubmit={(event) => {
        event.preventDefault();
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
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="sm">Send message</Button>
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
