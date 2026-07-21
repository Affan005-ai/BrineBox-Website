import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { PageHero } from "@/components/sections/page-hero";
import { MotionSection } from "@/components/sections/motion-section";
import { whyChooseUs } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata(
  "Why Choose Us",
  "Why BrineBox is a reliable partner for freight movement and logistics coordination.",
  "/why-choose-us",
);

export default function WhyChooseUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Choose Us"
        title="Why BrineBox is a reliable partner for freight movement and logistics coordination."
        copy="We deliver logistics support through transparent communication, consistent execution and practical service options."
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
