import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { MotionSection } from "@/components/sections/motion-section";
import { TradeLanes } from "@/components/sections/trade-lanes";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata(
  "Trade Lanes",
  "Priority trade lanes for Pakistan, China, Europe, the Middle East, and North America.",
  "/trade-lanes",
);

export default function TradeLanesPage() {
  return (
    <>
      <PageHero
        eyebrow="Trade Lanes"
        title="Focused route coverage across major international corridors."
        copy="A simple trade lane model that can later expand into port guides, transit assumptions, and corridor-specific service pages."
      />
      <MotionSection>
        <TradeLanes />
      </MotionSection>
    </>
  );
}
