import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { PageHero } from "@/components/sections/page-hero";
import { MotionSection } from "@/components/sections/motion-section";
import { whyChooseUs } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata(
  "Why Choose Us",
  "A clean, credible logistics website architecture without fabricated proof points.",
  "/why-choose-us",
);

export default function WhyChooseUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Choose Us"
        title="Credibility comes from clarity, not invented proof points."
        copy="The site is structured to become a real corporate presence once company details, assets, and form endpoints are configured."
      />
      <MotionSection>
        <div className="grid gap-4 md:grid-cols-2">
          {whyChooseUs.map((item) => (
            <Card key={item} className="flex gap-4 p-6">
              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <p className="text-sm leading-6 text-logistics-steel">{item}</p>
            </Card>
          ))}
        </div>
      </MotionSection>
    </>
  );
}
