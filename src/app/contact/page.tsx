import type { Metadata } from "next";
import Image from "next/image";
 
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";
import { Card } from "@/components/ui/card";
import { PageHero } from "@/components/sections/page-hero";
import { MotionSection } from "@/components/sections/motion-section";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "../../../config/site";

export const metadata: Metadata = createMetadata(
  "Contact",
  "Contact BrineBox for freight, customs, warehousing and logistics inquiries.",
  "/contact",
);

export default function ContactPage() {
  const contactImage = (() => {
    try {
      return "/images/contact-office.jpg";
    } catch {
      return "";
    }
  })();

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Reach out for logistics support, freight quotes and customs coordination."
        copy="Use the configured contact points to request shipment assistance, warehousing support or trade lane planning."
      />
      <MotionSection>
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="grid gap-4">
            <Card className="p-6">
              <Mail className="h-5 w-5 text-primary" />
              <h2 className="mt-4 text-lg font-semibold text-logistics-ink">Email</h2>
              <a className="mt-2 block text-sm text-muted-foreground hover:text-primary" href={`mailto:${siteConfig.company.email}`}>
                {siteConfig.company.email}
              </a>
            </Card>
            <Card className="p-6">
              <Phone className="h-5 w-5 text-primary" />
              <h2 className="mt-4 text-lg font-semibold text-logistics-ink">Phone</h2>
              <a className="mt-2 block text-sm text-muted-foreground hover:text-primary" href={`tel:${siteConfig.company.phone}`}>
                {siteConfig.company.phone}
              </a>
            </Card>
            <Card className="p-6">
              <MapPin className="h-5 w-5 text-primary" />
              <h2 className="mt-4 text-lg font-semibold text-logistics-ink">Office</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{siteConfig.company.address}</p>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-border bg-white p-6 shadow-soft">
              <ContactForm />
            </div>
            {contactImage ? (
              <div className="overflow-hidden rounded-3xl border border-border bg-slate-100 shadow-sm">
                <Image
                  src={contactImage}
                  alt="Office reception and meeting area"
                  width={900}
                  height={700}
                  className="h-full w-full object-cover"
                />
              </div>
            ) : null}
          </div>
        </div>
      </MotionSection>
    </>
  );
}
