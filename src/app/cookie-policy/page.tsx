import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { PageHero } from "@/components/sections/page-hero";
import { MotionSection } from "@/components/sections/motion-section";
import { policyContent } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata("Cookie Policy", "Cookie policy guidance for the logistics website.", "/cookie-policy");

export default function CookiePolicyPage() {
  return (
    <>
      <PageHero eyebrow="Cookie Policy" title="Cookie policy guidance." copy="BrineBox does not set tracking cookies by default. Update this policy when analytics or third-party tools are added." />
      <MotionSection>
        <Card className="grid gap-4 p-6">
          {policyContent.cookies.map((item) => (
            <p key={item} className="text-sm leading-7 text-muted-foreground">{item}</p>
          ))}
        </Card>
      </MotionSection>
    </>
  );
}
