import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { PageHero } from "@/components/sections/page-hero";
import { MotionSection } from "@/components/sections/motion-section";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "../../../config/site";

export const metadata: Metadata = createMetadata(
  "About",
  "About the freight forwarding and logistics company website architecture.",
  "/about",
);

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A premium corporate foundation for a real logistics company."
        copy={siteConfig.company.description}
      />
      <MotionSection>
        <div className="grid gap-4 md:grid-cols-3">
          {["Operational clarity", "Scalable content", "Configuration first"].map((item) => (
            <Card key={item} className="p-6">
              <CheckCircle2 className="h-6 w-6 text-primary" />
              <h2 className="mt-4 text-xl font-semibold text-logistics-ink">{item}</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Designed to support credible service pages, future customer modules, and easy company detail replacement.
              </p>
            </Card>
          ))}
        </div>
      </MotionSection>
    </>
  );
}
