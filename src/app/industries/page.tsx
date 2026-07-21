import type { Metadata } from "next";
import { industryIcon, industries } from "@/lib/content";
import { Card } from "@/components/ui/card";
import { PageHero } from "@/components/sections/page-hero";
import { MotionSection } from "@/components/sections/motion-section";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata(
  "Industries",
  "Logistics support for textiles, garments, rice, agriculture, chemicals, electronics, industrial equipment, and automotive cargo.",
  "/industries",
);

export default function IndustriesPage() {
  const Icon = industryIcon;

  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Professional cargo support for recurring industry needs."
        copy="Industry sections are structured for real service detail later, without relying on fabricated claims or placeholder customer logos."
      />
      <MotionSection>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <Card key={industry} className="p-6">
              <Icon className="h-6 w-6 text-primary" />
              <h2 className="mt-4 text-lg font-semibold text-logistics-ink">{industry}</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Freight planning, documentation, and movement support tailored to cargo type and route requirements.
              </p>
            </Card>
          ))}
        </div>
      </MotionSection>
    </>
  );
}
