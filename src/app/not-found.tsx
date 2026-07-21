import { ArrowLeft } from "lucide-react";
import { LinkButton } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="section-shell">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-normal text-logistics-ink">
        This page could not be found.
      </h1>
      <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
        The route may have moved, or the page may not exist in the static export.
      </p>
      <div className="mt-8">
        <LinkButton href="/" variant="secondary">
          <ArrowLeft className="h-4 w-4" />
          Back Home
        </LinkButton>
      </div>
    </section>
  );
}
