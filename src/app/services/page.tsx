import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { MotionSection } from "@/components/sections/motion-section";
import { ServiceGrid } from "@/components/sections/service-grid";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata(
  "Services",
  "Ocean freight, air freight, FCL, LCL, customs clearance, warehousing, door delivery, and supply chain solutions.",
  "/services",
);

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="End-to-end freight forwarding and supply chain services."
        copy="A clear service architecture covering international freight movement, customs, storage, and delivery workflows."
      />
      <MotionSection>
        <ServiceGrid />
      </MotionSection>
    </>
  );
}
