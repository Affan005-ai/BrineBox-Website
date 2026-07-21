"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "../../../config/site";
import { LinkButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="glassmorphism sticky top-0 z-50">
      <div className="container flex min-h-16 items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3" aria-label={`${siteConfig.company.name} home`}>
          <Image
            src={siteConfig.company.logoPath}
            alt={siteConfig.company.logoAlt}
            width={44}
            height={44}
            className="h-11 w-11 rounded-md object-contain"
            priority
          />
          <span className="text-base font-bold tracking-normal text-logistics-ink sm:text-lg">
            {siteConfig.company.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-semibold text-logistics-steel transition-colors hover:text-primary",
                pathname === item.href && "text-primary",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <LinkButton href="/request-quote">Get Quote</LinkButton>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-logistics-ink lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-white lg:hidden">
          <nav className="container grid gap-2 py-4" aria-label="Mobile navigation">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-3 text-sm font-semibold text-logistics-steel hover:bg-accent hover:text-primary"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <LinkButton href="/request-quote" className="mt-2" onClick={() => setOpen(false)}>
              Get Quote
            </LinkButton>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
