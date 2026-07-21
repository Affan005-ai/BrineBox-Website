import Image from "next/image";
import fs from "fs";
import path from "path";
import { ArrowRight, CheckCircle2, Download, Mail } from "lucide-react";
import { LinkButton } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MotionSection } from "@/components/sections/motion-section";
import { SectionHeading } from "@/components/sections/section-heading";
import { ServiceGrid } from "@/components/sections/service-grid";
import { TradeLanes } from "@/components/sections/trade-lanes";
import { industries, processSteps, whyChooseUs, industryIcon } from "@/lib/content";
import { siteConfig } from "../../config/site";

export default function Home() {
  const heroImage = (() => {
    try {
      const p1 = path.join(process.cwd(), "public", "images", "hero.jpg");
      if (fs.existsSync(p1)) return "/images/hero.jpg";
      const p2 = path.join(process.cwd(), "public", "images", "hero-freight.jpg");
      if (fs.existsSync(p2)) return "/images/hero-freight.jpg";
    } catch {
      // ignore and fall through
    }
    return "";
  })();

  return (
    <>
      <section className="relative bg-slate-50">
        <div className="absolute inset-0">
          {heroImage ? (
            <Image
              src={heroImage}
              alt={siteConfig.company.name + " hero image"}
              fill
              priority
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200" aria-hidden />
          )}
          <div className="absolute inset-0 bg-black/55" aria-hidden />
        </div>

        <div className="relative z-10">
          <div className="container grid min-h-[calc(100svh-4rem)] items-center py-20">
            <div className="max-w-3xl">
              <p className="eyebrow text-white/90">Freight Forwarding & Logistics</p>
              <h1 className="mt-4 text-white font-semibold leading-tight tracking-tight text-4xl sm:text-5xl lg:text-7xl">
                {siteConfig.company.name}
              </h1>
              <p className="mt-6 text-lg leading-8 text-white/85 max-w-2xl">
                Freight services for ocean, air, road, customs and warehousing designed for exporters, importers and manufacturers working across Pakistan and international trade lanes.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <LinkButton href="/request-quote" size="lg" aria-label="Request a quote">
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </LinkButton>
                <LinkButton href="/company-profile" variant="outline" size="lg" aria-label="Download company profile">
                  <Download className="h-4 w-4" />
                  Company Profile
                </LinkButton>
              </div>
            </div>
          </div>
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
          copy="A portfolio of practical logistics services designed for importers, exporters and cargo teams working across global trade lanes."
        />
        <div className="mt-8">
          <ServiceGrid />
        </div>
      </MotionSection>

      <MotionSection>
        <SectionHeading
          eyebrow="Industries"
          title="Industry coverage for recurring commercial cargo."
          copy="Focused on the segments most relevant to Pakistan export and import markets, with practical cargo handling and documentation support."
        />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {industries.map((industry) => {
            const Icon = industryIcon;
            return (
              <Card key={industry} className="p-6 text-center">
                <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-md bg-logistics-sky text-primary">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-logistics-ink">{industry}</h3>
              </Card>
            );
          })}
        </div>
      </MotionSection>

      <MotionSection className="bg-slate-50">
        <SectionHeading
          eyebrow="Trade Lanes"
          title="Focused support across priority international corridors."
          copy="Clear lane coverage from Pakistan to strategic markets, with operational coordination for each corridor."
        />
        <div className="mt-8">
          <TradeLanes />
        </div>
      </MotionSection>

      <MotionSection>
        <SectionHeading
          eyebrow="Why Choose Us"
          title="A polished logistics experience built for clarity and confidence."
          copy="Dependable logistics begins with transparent processes, clear communication and operational discipline."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {whyChooseUs.map((item) => (
            <div key={item} className="rounded-3xl border border-border bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-logistics-sky text-primary">
                <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="mt-4 text-sm leading-7 text-logistics-steel">{item}</p>
            </div>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="bg-slate-50">
        <SectionHeading
          eyebrow="Process"
          title="A practical shipment workflow from scope to delivery."
          copy="A realistic logistics process that emphasizes cargo planning, booking, compliance and final delivery."
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

      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/cta-background.jpg"
            alt="Logistics warehouse and freight operations background"
            fill
            priority
            className="object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-slate-900/70" aria-hidden="true" />
        </div>

        <div className="relative container grid gap-8 py-20 lg:grid-cols-[1.15fr_auto] lg:items-center">
          <div className="max-w-2xl">
            <p className="eyebrow text-slate-200">Strategic Logistics</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to align your freight operation with a premium execution platform?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200">
              Discover a corporate-forward logistics website experience built for clarity, trust, and real operational information.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <LinkButton href="/request-quote" className="bg-white text-slate-900 hover:bg-slate-100">
              Request Quote
            </LinkButton>
            <LinkButton href="/contact" variant="outline" className="border-white/25 bg-white/10 text-white hover:bg-white/20">
              <Mail className="h-4 w-4" />
              Contact
            </LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}
