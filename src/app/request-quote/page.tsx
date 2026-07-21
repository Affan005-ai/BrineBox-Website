import type { Metadata } from "next";
import { QuoteForm } from "@/components/forms/quote-form";
import { PageHero } from "@/components/sections/page-hero";
import { MotionSection } from "@/components/sections/motion-section";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata(
  "Request a Quote",
  "Request a freight rate or logistics quote from BrineBox.",
  "/request-quote",
);

export default function RequestQuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Request a Quote"
        title="Share your shipment details for a practical logistics estimate."
        copy="Tell us the cargo profile, route and timing so we can provide a clear freight forwarding or customs support quote."
      />
      <MotionSection>
        <QuoteForm />
      </MotionSection>
    </>
  );
}
