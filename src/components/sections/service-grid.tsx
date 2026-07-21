import Image from "next/image";
import fs from "fs";
import path from "path";
import { services } from "@/lib/content";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ServiceGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((service) => {
        const Icon = service.icon;

        // explicit mapping for known services (uses images found under public/images)
        const explicitMap: Record<string, string> = {
          "Ocean Freight": "ocean-freight.jpg",
          "Air Freight": "air-freight.jpg",
          "Warehousing": "warehouse.jpg",
          "Door Delivery": "trucking.jpg",
          FCL: "fcl.jpg",
          LCL: "lcl.jpg",
          "Customs Clearance": "custom.jpg",
          "Supply Chain Solutions": "supplychain.jpg",
        };

        const filename = explicitMap[service.title] ?? null;

        let imageSrc = "";
        try {
          if (filename) {
            const p = path.join(process.cwd(), "public", "images", filename);
            if (fs.existsSync(p)) imageSrc = `/images/${filename}`;
          }
        } catch {
          imageSrc = "";
        }

        return (
          <Card key={service.title} className="h-full overflow-hidden transition-transform hover:scale-[1.01] hover:shadow-lg">
            {imageSrc ? (
              <div className="h-40 w-full overflow-hidden bg-slate-100">
                <Image src={imageSrc} alt={`${service.title} image`} width={800} height={400} className="w-full h-full object-cover" />
              </div>
            ) : null}

            <CardHeader className="pt-4">
              {!imageSrc ? (
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-logistics-sky text-primary">
                  <Icon className="h-5 w-5" />
                </span>
              ) : (
                <div className="ml-2 h-11 w-11" aria-hidden />
              )}
              <CardTitle className="mt-0">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-6 text-muted-foreground">{service.description}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
