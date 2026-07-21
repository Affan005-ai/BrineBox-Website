import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { PageHero } from "@/components/sections/page-hero";
import { MotionSection } from "@/components/sections/motion-section";
import { policyContent } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata("Privacy Policy", "Privacy policy guidance for the logistics website.", "/privacy-policy");

export default function PrivacyPolicyPage() {
  return <PolicyPage eyebrow="Privacy Policy" title="Privacy policy guidance." items={policyContent.privacy} />;
}

function PolicyPage({ eyebrow, title, items }: { eyebrow: string; title: string; items: string[] }) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} copy="Replace this legal copy with reviewed production policy language before launch." />
      <MotionSection>
        <Card className="grid gap-4 p-6">
          {items.map((item) => (
            <p key={item} className="text-sm leading-7 text-muted-foreground">{item}</p>
          ))}
        </Card>
      </MotionSection>
    </>
  );
}
