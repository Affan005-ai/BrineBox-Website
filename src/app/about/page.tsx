import type { Metadata } from "next";
import Image from "next/image";
import fs from "fs";
import path from "path";
import { PageHero } from "@/components/sections/page-hero";
import { MotionSection } from "@/components/sections/motion-section";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "../../../config/site";

export const metadata: Metadata = createMetadata(
  "About",
  "About BrineBox and our regional freight forwarding capabilities.",
  "/about",
);

export default function AboutPage() {
  const aboutImage = (() => {
    try {
      const p = path.join(process.cwd(), "public", "images", "about.jpg");
      if (fs.existsSync(p)) return "/images/about.jpg";
    } catch {
      // ignore
    }
    return "";
  })();
  return (
    <>
      <PageHero
        eyebrow="About"
        title="BrineBox brings Pakistan freight experience into a professional logistics platform."
        copy="BrineBox provides freight forwarding, customs clearance, warehousing and trade lane coordination for importers, exporters and manufacturers."
      />
      <MotionSection>
        <div className="container grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <p className="eyebrow">About</p>
            <h2 className="text-3xl font-semibold text-logistics-ink sm:text-4xl">
              Built for importers, exporters, and teams that need calm execution.
            </h2>
            <p className="text-lg leading-7 text-logistics-steel max-w-2xl">
              {siteConfig.company.description}
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1">
                <h3 className="font-semibold text-logistics-ink">Operational clarity</h3>
                <p className="text-sm text-muted-foreground">Professional workflows designed around visibility and dependable handoffs.</p>
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-logistics-ink">Scalable content</h3>
                <p className="text-sm text-muted-foreground">Structured pages ready for lane-level detail and customer modules.</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            {aboutImage ? (
              <Image
                src={aboutImage}
                alt="About office image"
                width={900}
                height={600}
                className="w-full rounded-lg object-cover shadow-soft"
                priority
              />
            ) : (
              <div className="w-full rounded-lg bg-slate-100 p-16 text-center shadow-soft">
                <svg width="160" height="100" viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <rect width="160" height="100" rx="8" fill="#F1F5F9" />
                  <path d="M10 70 L60 30 L110 70" stroke="#E2E8F0" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            )}
          </div>
        </div>
      </MotionSection>
    </>
  );
}
