import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { PageHero } from "@/components/sections/page-hero";
import { MotionSection } from "@/components/sections/motion-section";
import { faqs } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata(
  "FAQ",
  "Frequently asked questions about configuration, assets, forms, and Cloudflare Pages deployment.",
  "/faq",
);

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Answers for setup, replacement assets, and deployment."
        copy="These questions explain how the static logistics website is configured and prepared for production ownership."
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
