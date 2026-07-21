import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { PageHero } from "@/components/sections/page-hero";
import { MotionSection } from "@/components/sections/motion-section";
import { faqs } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata(
  "FAQ",
  "Common questions about freight services, documentation, and logistics support.",
  "/faq",
);

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Answers for freight services, documentation and logistics inquiries."
        copy="Frequently asked questions about how BrineBox supports air, sea and customs logistics for business customers."
      />
      <MotionSection>
        <div className="grid gap-4">
          {faqs.map((faq) => (
            <Card key={faq.question} className="p-6">
              <h2 className="text-lg font-semibold text-logistics-ink">{faq.question}</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{faq.answer}</p>
            </Card>
          ))}
        </div>
      </MotionSection>
    </>
  );
}
