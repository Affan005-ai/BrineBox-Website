import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";
import { Card } from "@/components/ui/card";
import { PageHero } from "@/components/sections/page-hero";
import { MotionSection } from "@/components/sections/motion-section";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "../../../config/site";

export const metadata: Metadata = createMetadata(
  "Contact",
  "Contact placeholders and a configurable logistics inquiry form.",
  "/contact",
);

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact details and inquiry handling in one configurable place."
        copy="Replace the placeholder company email, phone, office address, and map URL in config/site.ts before launch."
      />
      <MotionSection>
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="grid gap-4">
            <Card className="p-6">
              <Mail className="h-5 w-5 text-primary" />
              <h2 className="mt-4 font-semibold text-logistics-ink">Email</h2>
              <a className="mt-2 block text-sm text-muted-foreground hover:text-primary" href={`mailto:${siteConfig.company.email}`}>
                {siteConfig.company.email}
              </a>
            </Card>
            <Card className="p-6">
              <Phone className="h-5 w-5 text-primary" />
              <h2 className="mt-4 font-semibold text-logistics-ink">Phone</h2>
              <a className="mt-2 block text-sm text-muted-foreground hover:text-primary" href={`tel:${siteConfig.company.phone}`}>
                {siteConfig.company.phone}
              </a>
            </Card>
            <Card className="p-6">
              <MapPin className="h-5 w-5 text-primary" />
              <h2 className="mt-4 font-semibold text-logistics-ink">Office</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{siteConfig.company.address}</p>
              <a className="mt-3 inline-block text-sm font-semibold text-primary" href={siteConfig.company.googleMapsUrl}>
                Google Maps placeholder
              </a>
            </Card>
          </div>
          <ContactForm />
        </div>
      </MotionSection>
    </>
  );
}
