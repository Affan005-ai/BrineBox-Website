import type { Metadata } from "next";
import { Download } from "lucide-react";
import { Card } from "@/components/ui/card";
import { PageHero } from "@/components/sections/page-hero";
import { MotionSection } from "@/components/sections/motion-section";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata(
  "Company Profile",
  "Download the company profile brochure for BrineBox.",
  "/company-profile",
);

export default function CompanyProfilePage() {
  return (
    <>
      <PageHero
        eyebrow="Company Profile"
        title="Download the BrineBox profile brochure."
        copy="The company profile PDF is ready to be replaced with your final brochure for production launch."
      />
      <MotionSection>
        <Card className="grid gap-5 p-6 sm:grid-cols-[1fr_auto] sm:items-center">
          <div>
            <h2 className="text-xl font-semibold text-logistics-ink">Company profile PDF</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Replace this draft profile with the final BrineBox company brochure before launching the site.
            </p>
          </div>
          <a
            href="/company-profile.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Download className="h-4 w-4" />
            Download Company Profile
          </a>
        </Card>
      </MotionSection>
    </>
  );
}
