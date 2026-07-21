import { services } from "@/lib/content";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ServiceGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((service) => {
        const Icon = service.icon;
        return (
          <Card key={service.title} className="h-full transition-shadow hover:shadow-soft">
            <CardHeader>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-logistics-sky text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <CardTitle>{service.title}</CardTitle>
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
