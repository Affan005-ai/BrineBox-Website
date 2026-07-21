"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Label, Select, Textarea } from "@/components/ui/form-controls";
import { submitForm } from "@/lib/form-submit";

const requiredFields = [
  "companyName",
  "contactPerson",
  "email",
  "phone",
  "originPort",
  "destinationPort",
  "shipmentType",
  "commodity",
];

export function QuoteForm() {
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const missing = requiredFields.filter((field) => !String(formData.get(field) || "").trim());

    if (missing.length > 0) {
      setMessage("Please complete the required fields before submitting.");
      return;
    }

    setSubmitting(true);
    const result = await submitForm({
      formType: "quote",
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
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Company Name" name="companyName" required />
        <Field label="Contact Person" name="contactPerson" required />
        <Field label="Email Address" name="email" type="email" required />
        <Field label="Phone Number" name="phone" required />
        <Field label="Country" name="country" />
        <Field label="Origin Port" name="originPort" required />
        <Field label="Destination Port" name="destinationPort" required />
        <SelectField label="Incoterm" name="incoterm" options={["FOB", "CFR", "CIF", "EXW", "DAP", "DDP"]} />
        <SelectField label="Shipment Type" name="shipmentType" required options={["Ocean Freight", "Air Freight", "FCL", "LCL", "Door Delivery"]} />
        <SelectField label="Container Type" name="containerType" options={["20ft", "40ft", "40ft HC", "Reefer", "Not applicable"]} />
        <Field label="Estimated Cargo Weight" name="estimatedCargoWeight" />
        <Field label="Commodity" name="commodity" required />
        <Field label="Preferred Shipping Date" name="preferredShippingDate" type="date" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="additionalNotes">Additional Notes</Label>
        <Textarea id="additionalNotes" name="additionalNotes" placeholder="Packaging, readiness date, documentation notes, or handling requirements" />
      </div>
      {message ? <p className="rounded-md bg-logistics-sky px-4 py-3 text-sm font-semibold text-logistics-ink">{message}</p> : null}
      <Button type="submit" disabled={submitting} className="w-full sm:w-fit">
        <Send className="h-4 w-4" />
        {submitting ? "Submitting" : "Submit Quote Request"}
      </Button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={name}>{label}{required ? " *" : ""}</Label>
      <Input id={name} name={name} type={type} required={required} />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  required = false,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={name}>{label}{required ? " *" : ""}</Label>
      <Select id={name} name={name} required={required} defaultValue="">
        <option value="" disabled>Select {label.toLowerCase()}</option>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </Select>
    </div>
  );
}
