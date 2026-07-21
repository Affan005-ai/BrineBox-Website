import { MapPinned } from "lucide-react";
import { tradeLanes } from "@/lib/content";
import { Card } from "@/components/ui/card";

export function TradeLanes() {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
      <div className="hero-pattern rounded-md border border-border bg-white p-6 shadow-sm">
        <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-logistics-sky">
          <div className="absolute inset-6 rounded-[50%] border border-primary/20" />
          <div className="absolute inset-x-10 top-1/2 border-t border-dashed border-primary/30" />
          <div className="absolute inset-y-10 left-1/2 border-l border-dashed border-primary/30" />
          {["Pakistan", "China", "Europe", "Middle East", "North America"].map((label, index) => (
            <span
              key={label}
              className="absolute rounded-md bg-white px-2 py-1 text-xs font-semibold text-logistics-ink shadow-line"
              style={{
                left: `${12 + ((index * 19) % 70)}%`,
                top: `${20 + ((index * 17) % 54)}%`,
              }}
            >
              {label}
            </span>
          ))}
        </div>
      </div>
      <div className="grid gap-3">
        {tradeLanes.map((lane) => (
          <Card key={lane.region} className="flex gap-4 p-5">
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-logistics-sky text-primary">
              <MapPinned className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-semibold text-logistics-ink">{lane.region}</h3>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">{lane.detail}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
