import type { Metadata } from "next";
import { QuoteForm } from "@/components/forms/quote-form";
import { PageHero } from "@/components/sections/page-hero";
import { MotionSection } from "@/components/sections/motion-section";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata(
  "Request a Quote",
  "Request a freight forwarding quotation using a configurable static-site form.",
  "/request-quote",
);

export default function RequestQuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Request a Quote"
        title="Share shipment details for a structured freight quote."
        copy="The form is ready for Formspree, EmailJS, Resend via a secure endpoint, or Cloudflare Workers through one configuration file."
      />
      <MotionSection>
        <QuoteForm />
      </MotionSection>
    </>
  );
}
