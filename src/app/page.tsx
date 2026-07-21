import Image from "next/image";
import { ArrowRight, CheckCircle2, Download, Mail } from "lucide-react";
import { LinkButton } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MotionSection } from "@/components/sections/motion-section";
import { SectionHeading } from "@/components/sections/section-heading";
import { ServiceGrid } from "@/components/sections/service-grid";
import { TradeLanes } from "@/components/sections/trade-lanes";
import { industries, processSteps, whyChooseUs } from "@/lib/content";
import { siteConfig } from "../../config/site";

export default function Home() {
  return (
    <>
      <section className="gradient-bg overflow-hidden">
        <div className="container grid min-h-[calc(100svh-4rem)] gap-10 py-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:py-16">
          <div>
            <p className="eyebrow">Freight Forwarding & Logistics</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-normal text-logistics-ink sm:text-5xl lg:text-6xl">
              {siteConfig.company.name}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-logistics-steel">
              {siteConfig.company.tagline} Ocean freight, air freight, customs clearance, warehousing, and delivery support for modern trade lanes.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LinkButton href="/request-quote" size="lg">
                Request a Quote
                <ArrowRight className="h-4 w-4" />
              </LinkButton>
              <LinkButton href="/company-profile" variant="outline" size="lg">
                <Download className="h-4 w-4" />
                Company Profile
              </LinkButton>
            </div>
          </div>

          <Image
            src="/images/hero-freight.svg"
            alt="Container vessel, cargo aircraft, and freight route illustration"
            width={900}
            height={700}
            priority
            className="aspect-[4/3] w-full rounded-md border border-border bg-white object-cover shadow-soft"
          />
        </div>
      </section>

      <MotionSection>
        <SectionHeading
          eyebrow="Company Overview"
          title="Built for importers, exporters, and teams that need calm execution."
          copy={siteConfig.company.description}
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {["Clear coordination", "Documentation discipline", "Trade lane focus"].map((item) => (
            <Card key={item} className="p-6">
              <CheckCircle2 className="h-6 w-6 text-primary" />
              <h3 className="mt-4 font-semibold text-logistics-ink">{item}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Professional workflows designed around visibility, responsive communication, and dependable handoffs.
              </p>
            </Card>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="bg-slate-50">
        <SectionHeading
          eyebrow="Services"
          title="Freight services for complete cargo movement."
          copy="Use the service pages as a scalable foundation for detailed operating capabilities, lane pages, and future customer workflows."
        />
        <div className="mt-8">
          <ServiceGrid />
        </div>
      </MotionSection>

      <MotionSection>
        <SectionHeading
          eyebrow="Industries"
          title="Industry coverage for recurring commercial cargo."
          copy="Structured around real categories commonly served by freight forwarding and logistics teams."
        />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <Card key={industry} className="p-5 text-sm font-semibold text-logistics-ink">
              {industry}
            </Card>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="bg-slate-50">
        <SectionHeading
          eyebrow="Trade Lanes"
          title="Focused support across priority international corridors."
          copy="A clean lane model for Pakistan, China, Europe, the Middle East, and North America."
        />
        <div className="mt-8">
          <TradeLanes />
        </div>
      </MotionSection>

      <MotionSection>
        <SectionHeading
          eyebrow="Why Choose Us"
          title="A website architecture that reflects a serious logistics operation."
          copy="No fabricated proof points. No fake partner strips. Just a polished public experience ready for real company information."
        />
        <div className="mt-8 grid gap-3">
          {whyChooseUs.map((item) => (
            <div key={item} className="flex gap-3 rounded-md border border-border bg-white p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <p className="text-sm leading-6 text-logistics-steel">{item}</p>
            </div>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="bg-slate-50">
        <SectionHeading
          eyebrow="Process"
          title="A practical shipment workflow from scope to delivery."
          copy="The timeline is written as operational guidance, not as fabricated performance claims."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {processSteps.map((step) => {
            const Icon = step.icon;
            return (
              <Card key={step.title} className="p-6">
                <Icon className="h-6 w-6 text-primary" />
                <h3 className="mt-4 font-semibold text-logistics-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.description}</p>
              </Card>
            );
          })}
        </div>
      </MotionSection>

      <section className="bg-logistics-ink text-white">
        <div className="container grid gap-6 py-14 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="eyebrow text-blue-200">Professional CTA</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-normal sm:text-4xl">
              Ready to configure this site with real company details?
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <LinkButton href="/request-quote">Request Quote</LinkButton>
            <LinkButton href="/contact" variant="outline" className="border-white/25 bg-transparent text-white hover:bg-white/10">
              <Mail className="h-4 w-4" />
              Contact
            </LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}
