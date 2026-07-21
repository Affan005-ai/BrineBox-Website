import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { MotionSection } from "@/components/sections/motion-section";
import { ServiceGrid } from "@/components/sections/service-grid";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata(
  "Services",
  "Freight forwarding and logistics services including ocean, air, customs, warehousing and delivery coordination.",
  "/services",
);

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="End-to-end freight forwarding and supply chain services."
        copy="Freight services that connect origin, transit and delivery across international routes with documentation-led support."
      />
      <MotionSection>
        <ServiceGrid />
      </MotionSection>
    </>
  );
}
