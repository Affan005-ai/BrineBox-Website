"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Label, Textarea } from "@/components/ui/form-controls";
import { submitForm } from "@/lib/form-submit";

export function ContactForm() {
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setSubmitting(true);
    const result = await submitForm({
      formType: "contact",
      ...Object.fromEntries(formData.entries()),
    });
    setMessage(result.message);
    setSubmitting(false);

    if (result.success) {
      form.reset();
    }
  }

  return (
    <form onSubmit={handleSubmit} className="surface-card grid gap-5 p-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="name">Name *</Label>
          <Input id="name" name="name" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="company">Company</Label>
          <Input id="company" name="company" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input id="email" name="email" type="email" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" name="phone" />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea id="message" name="message" required placeholder="Tell us how we can help with your shipment or supply chain requirement" />
      </div>
      {message ? <p className="rounded-md bg-logistics-sky px-4 py-3 text-sm font-semibold text-logistics-ink">{message}</p> : null}
      <Button type="submit" disabled={submitting} className="w-full sm:w-fit">
        <Send className="h-4 w-4" />
        {submitting ? "Submitting" : "Send Message"}
      </Button>
    </form>
  );
}
