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
      <div className="container grid gap-10 py-12 lg:grid-cols-[1.3fr_0.8fr_0.9fr_0.8fr]">
        <div>
          <p className="text-lg font-semibold">{siteConfig.company.name}</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-white/70">{siteConfig.company.description}</p>
        </div>

        <div>
          <p className="font-semibold">Quick Links</p>
          <div className="mt-4 grid gap-3">
            {siteConfig.navigation.slice(0, 5).map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-white/70 hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="font-semibold">Contact</p>
          <div className="mt-4 grid gap-3 text-sm text-white/70">
            <a className="flex gap-2 hover:text-white" href={`mailto:${siteConfig.company.email}`}>
              <Mail className="mt-0.5 h-4 w-4 shrink-0" />
              {siteConfig.company.email}
            </a>
            <a className="flex gap-2 hover:text-white" href={`tel:${siteConfig.company.phone}`}>
              <Phone className="mt-0.5 h-4 w-4 shrink-0" />
              {siteConfig.company.phone}
            </a>
            <span className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              {siteConfig.company.address}
            </span>
          </div>
        </div>

        <div>
          <p className="font-semibold">Social</p>
          <div className="mt-4 flex gap-3">
            <a
              href={siteConfig.socialLinks.linkedin}
              aria-label="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/10 hover:bg-white/20"
            >
              <BriefcaseBusiness className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.socialLinks.twitter}
              aria-label="Twitter"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/10 hover:bg-white/20"
            >
              <Share2 className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.socialLinks.facebook}
              aria-label="Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/10 hover:bg-white/20"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-4 py-5 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} {siteConfig.company.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            {policyLinks.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
