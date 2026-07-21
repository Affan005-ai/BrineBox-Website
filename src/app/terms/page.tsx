import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { PageHero } from "@/components/sections/page-hero";
import { MotionSection } from "@/components/sections/motion-section";
import { policyContent } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata("Terms & Conditions", "Terms and conditions placeholder for the logistics website.", "/terms");

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Terms & Conditions" title="Terms and conditions placeholder." copy="Replace this placeholder legal content with reviewed production terms before launch." />
      <MotionSection>
        <Card className="grid gap-4 p-6">
          {policyContent.terms.map((item) => (
            <p key={item} className="text-sm leading-7 text-muted-foreground">{item}</p>
          ))}
        </Card>
      </MotionSection>
    </>
  );
}
