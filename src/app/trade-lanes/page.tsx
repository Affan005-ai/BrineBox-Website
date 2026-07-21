import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { MotionSection } from "@/components/sections/motion-section";
import { TradeLanes } from "@/components/sections/trade-lanes";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata(
  "Trade Lanes",
  "Trade lane coverage for Pakistan, the Middle East, Europe, China, South Asia and North America with routes including Karachi → Rotterdam, Karachi → Dubai, Shanghai → Singapore, and Los Angeles → Hamburg.",
  "/trade-lanes",
);

export default function TradeLanesPage() {
  return (
    <>
      <PageHero
        eyebrow="Trade Lanes"
        title="Interactive freight corridors built for BrineBox global shipping."
        copy="Explore premium route intelligence with live-hover details across our global corridors."
      />
      <MotionSection>
        <TradeLanes />
      </MotionSection>
    </>
  );
}
