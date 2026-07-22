"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone, Share2 } from "lucide-react";
import { services } from "@/lib/content";
import { siteConfig } from "../../../config/site";

const policyLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

function QuickActions() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.seo.siteUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // ignore clipboard errors
    }
  };

  return (
    <div className="mt-3 flex items-center gap-3">
      <a
        href={`mailto:${siteConfig.company.email}`}
        aria-label="email"
        className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 transition hover:bg-white/20"
      >
        <Mail className="h-4 w-4" />
      </a>

      <button
        type="button"
        onClick={handleCopy}
        aria-label="copy site link"
        className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 transition hover:bg-white/20"
      >
        <Share2 className="h-4 w-4" />
      </button>

      <a
        href={`tel:${siteConfig.company.phone.replace(/[^0-9]/g, "")}`}
        aria-label="phone"
        className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 transition hover:bg-white/20"
      >
        <Phone className="h-4 w-4" />
      </a>

      {copied && <span className="ml-2 text-sm text-white/80">Copied!</span>}
    </div>
  );
}

export function Footer() {


  return (
    <footer className="border-t border-border bg-logistics-ink text-white">
      <div className="container grid gap-10 py-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
        <div>
          <p className="text-lg font-semibold tracking-tight text-white">Get in Touch</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/70">
            Have questions about shipping, freight forwarding, or customs support? Contact our team by email, phone, WhatsApp, or the inquiry form. We're here to discuss your logistics requirements.
          </p>
          <p className="mt-6 max-w-md text-sm leading-7 text-white/70">{siteConfig.company.description}</p>
        </div>

        <div>
          <p className="font-semibold text-white">Quick Links</p>
          <div className="mt-5 grid gap-3">
            {siteConfig.navigation.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-white/70 transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="font-semibold text-white">Services</p>
          <div className="mt-5 grid gap-3 text-sm text-white/70">
            {services.slice(0, 6).map((service) => (
              <span key={service.title} className="block transition hover:text-white">
                {service.title}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="font-semibold text-white">Contact Information</p>
          <div className="mt-5 grid gap-3 text-sm text-white/70">
            <a className="flex items-center gap-2 transition hover:text-white" href={`mailto:${siteConfig.company.email}`}>
              <Mail className="h-4 w-4 shrink-0 text-primary" />
              {siteConfig.company.email}
            </a>
            <a className="flex items-center gap-2 transition hover:text-white" href={`tel:${siteConfig.company.phone}`}>
              <Phone className="h-4 w-4 shrink-0 text-primary" />
              {siteConfig.company.phone}
            </a>
            <span className="flex items-center gap-2 text-white/70">
              <MapPin className="h-4 w-4 shrink-0 text-primary" />
              {siteConfig.company.address}
            </span>
            {siteConfig.company.whatsApp ? (
              <a className="flex items-center gap-2 transition hover:text-white" href={`https://wa.me/${siteConfig.company.whatsApp.replace(/[^0-9]/g, "")}`}>
                <MessageCircle className="h-4 w-4 shrink-0 text-primary" />
                WhatsApp
              </a>
            ) : null}

            <div>
              <p className="font-semibold text-white">Quick Actions</p>
              <QuickActions />
            </div>
          </div>
        </div>

        <div>
          <p className="font-semibold text-white">Business Hours</p>
          <div className="mt-5 grid gap-3 text-sm text-white/70">
            <p>Mon – Fri: 9:00 AM – 6:00 PM</p>
            <p>Sat: 10:00 AM – 2:00 PM</p>
            <p>Sun: Closed</p>
            <p className="text-white/60">Local Karachi time</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-4 py-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} {siteConfig.company.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            {policyLinks.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
