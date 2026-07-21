import Link from "next/link";
import { BriefcaseBusiness, Mail, MapPin, MessageCircle, Phone, Share2 } from "lucide-react";
import { siteConfig } from "../../../config/site";

const policyLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-logistics-ink text-white">
      <div className="container grid gap-10 py-14 lg:grid-cols-[1.2fr_0.9fr_0.9fr_0.9fr]">
        <div>
          <p className="text-lg font-semibold tracking-tight text-white">{siteConfig.company.name}</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/70">{siteConfig.company.description}</p>
        </div>

        <div>
          <p className="font-semibold text-white">Quick Links</p>
          <div className="mt-5 grid gap-3">
            {siteConfig.navigation.slice(0, 5).map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-white/70 transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="font-semibold text-white">Contact</p>
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
          </div>
        </div>

        <div>
          <p className="font-semibold text-white">Social</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={siteConfig.socialLinks.linkedin}
              aria-label="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 transition hover:bg-white/20"
            >
              <BriefcaseBusiness className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.socialLinks.twitter}
              aria-label="Twitter"
              className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 transition hover:bg-white/20"
            >
              <Share2 className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.socialLinks.facebook}
              aria-label="Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 transition hover:bg-white/20"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
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
