"use client";

import { useState } from "react";
import { MapPinned } from "lucide-react";
import { tradeLanes } from "@/lib/content";
import { Card } from "@/components/ui/card";

type RouteKey =
  | "karachi-rotterdam"
  | "karachi-dubai"
  | "shanghai-singapore"
  | "la-hamburg"
  | "mumbai-rotterdam"
  | "shenzhen-losangeles"
  | "jebelali-rotterdam"
  | "singapore-hamburg";

const routes = [
  {
    key: "karachi-rotterdam" as const,
    label: "Karachi → Rotterdam",
    type: "Ocean Freight",
    transit: "28–35 days",
    pathId: "route-rotterdam",
    description: "A primary ocean corridor from Pakistan through the Suez Canal to European import gateways.",
  },
  {
    key: "karachi-dubai" as const,
    label: "Karachi → Dubai",
    type: "Sea & Air Freight",
    transit: "12–18 days",
    pathId: "route-dubai",
    description: "A hybrid route linking Pakistan and the UAE with flexible cargo movement options.",
  },
  {
    key: "shanghai-singapore" as const,
    label: "Shanghai → Singapore",
    type: "Air Freight",
    transit: "4–6 days",
    pathId: "route-singapore",
    description: "Time-sensitive cargo flow across Asia with premium routing.",
  },
  {
    key: "la-hamburg" as const,
    label: "Los Angeles → Hamburg",
    type: "Air Freight",
    transit: "6–9 days",
    pathId: "route-hamburg",
    description: "A key transatlantic priority route for U.S.–Europe cargo.",
  },
  {
    key: "mumbai-rotterdam" as const,
    label: "Mumbai → Rotterdam",
    type: "Ocean Freight",
    transit: "26–33 days",
    pathId: "route-mumbai-rotterdam",
    description: "An important South Asia–Europe ocean corridor via Suez.",
  },
  {
    key: "shenzhen-losangeles" as const,
    label: "Shenzhen → Los Angeles",
    type: "Sea & Air Freight",
    transit: "18–28 days",
    pathId: "route-shenzhen-la",
    description: "High-volume Asia–North America corridor serving west-coast gateways.",
  },
  {
    key: "jebelali-rotterdam" as const,
    label: "Jebel Ali → Rotterdam",
    type: "Ocean Freight",
    transit: "12–20 days",
    pathId: "route-jebelali-rotterdam",
    description: "Gulf–Europe ocean connections with consolidated services.",
  },
  {
    key: "singapore-hamburg" as const,
    label: "Singapore → Hamburg",
    type: "Ocean Freight",
    transit: "22–30 days",
    pathId: "route-singapore-hamburg",
    description: "Asia–Europe ocean trade lane with regular liner services.",
  },
];

const ports = [
  { name: "Karachi", x: 42, y: 58 },
  { name: "Mumbai", x: 44, y: 56 },
  { name: "Shanghai", x: 72, y: 34 },
  { name: "Ningbo", x: 74, y: 36 },
  { name: "Shenzhen", x: 74, y: 40 },
  { name: "Qingdao", x: 70, y: 30 },
  { name: "Singapore", x: 72, y: 62 },
  { name: "Jebel Ali", x: 48, y: 44 },
  { name: "Dubai", x: 48, y: 42 },
  { name: "Rotterdam", x: 26, y: 26 },
  { name: "Antwerp", x: 28, y: 28 },
  { name: "Hamburg", x: 32, y: 22 },
  { name: "Los Angeles", x: 8, y: 44 },
  { name: "New York", x: 12, y: 30 },
  { name: "Seattle", x: 6, y: 30 },
];

export function TradeLanes() {
  const [activeRoute, setActiveRoute] = useState<RouteKey | null>(null);

  const activeDetails = routes.find((route) => route.key === activeRoute);

  return (
    <div className="grid gap-8 lg:grid-cols-[1.35fr_0.75fr] lg:items-start">
      <div className="rounded-[32px] border border-slate-800 bg-slate-950 p-5 shadow-soft">
        <div className="relative overflow-hidden rounded-[28px] border border-slate-800 bg-slate-950 p-4">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.16),_transparent_16%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.1),_transparent_22%)]" />
          <svg viewBox="0 0 1000 520" className="relative h-[420px] w-full" aria-label="Interactive world freight map">
            <defs>
              <linearGradient id="routeGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.55" />
              </linearGradient>
              <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
                <feGaussianBlur stdDeviation="5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <rect width="1000" height="520" rx="32" fill="#061323" />
            <path
              d="M64 108C86 74 132 58 176 64C234 72 282 104 330 118C378 132 432 132 486 130C540 128 596 118 642 112C688 106 742 104 788 116C832 128 856 166 874 206C890 246 902 292 888 334C872 378 838 412 794 430C752 448 710 438 666 434C622 430 576 428 534 420C490 412 444 402 400 398C356 394 312 394 268 398C224 402 184 410 148 432C118 450 90 476 72 510C60 538 52 576 74 600C100 630 148 634 194 628C244 620 292 606 336 580C372 560 402 526 430 489C458 452 482 408 510 378C540 350 574 330 608 312C644 294 684 286 720 298C760 312 802 344 840 378C876 410 906 450 930 496C954 542 970 602 952 652C934 702 884 724 832 706C786 690 748 652 708 622C674 596 632 578 592 560C548 538 506 518 462 500C418 482 372 466 326 456C286 448 244 444 202 446C160 448 120 456 84 478C54 498 40 546 64 578Z"
              fill="#ffffff"
              fillOpacity="0.06"
            />

            <path id="route-rotterdam" d="M420 300 C480 252 540 210 620 176" fill="none" stroke="url(#routeGlow)" strokeWidth="5" strokeLinecap="round" className="route-path" />
            <path id="route-dubai" d="M450 318 C500 300 560 286 620 286" fill="none" stroke="url(#routeGlow)" strokeWidth="5" strokeLinecap="round" className="route-path route-dashed" />
            <path id="route-singapore" d="M715 144 C690 192 708 236 743 280" fill="none" stroke="url(#routeGlow)" strokeWidth="4" strokeLinecap="round" className="route-path route-air" />
            <path id="route-hamburg" d="M95 236 C150 196 208 166 300 118 C340 92 380 78 420 60" fill="none" stroke="url(#routeGlow)" strokeWidth="4" strokeLinecap="round" className="route-path route-air" />

            {routes.map((route) => (
              <g
                key={route.key}
                className="cursor-pointer"
                onMouseEnter={() => setActiveRoute(route.key)}
                onMouseLeave={() => setActiveRoute(null)}
              >
                <circle className="route-dot" r="6" fill="#7dd3fc" filter="url(#glow)">
                  <animateMotion dur={route.key === "karachi-rotterdam" ? "8s" : route.key === "karachi-dubai" ? "6s" : "5s"} repeatCount="indefinite" rotate="auto">
                    <mpath xlinkHref={`#${route.pathId}`} />
                  </animateMotion>
                </circle>
              </g>
            ))}

            {ports.map((port) => (
              <g key={port.name}>
                <circle cx={`${port.x}%`} cy={`${port.y}%`} r="8" fill="#60a5fa" filter="url(#glow)" />
                <circle cx={`${port.x}%`} cy={`${port.y}%`} r="3.5" fill="#ffffff" />
                <text x={`${port.x + 1.5}%`} y={`${port.y - 2}%`} className="map-label">{port.name}</text>
              </g>
            ))}

            <style>{`
              .route-path {
                stroke-dasharray: 1200;
                stroke-dashoffset: 1200;
                animation: draw 2.5s ease forwards;
                opacity: 0.85;
              }
              .route-dashed {
                stroke-dasharray: 12 10;
              }
              .route-air {
                stroke-width: 4;
              }
              .route-dot {
                animation: pulse 2s ease-in-out infinite alternate;
              }
              @keyframes draw {
                to { stroke-dashoffset: 0; }
              }
              @keyframes pulse {
                from { opacity: 0.75; transform: scale(1); }
                to { opacity: 1; transform: scale(1.3); }
              }
              .map-label {
                font: 600 11px Inter, system-ui, sans-serif;
                fill: #bfdbfe;
                pointer-events: none;
              }
            `}</style>
          </svg>

          <div className="mt-5 rounded-3xl border border-slate-800 bg-slate-950/95 p-5 text-sm text-slate-300 shadow-[0_20px_80px_rgba(15,23,42,0.35)]">
            <p className="text-xs uppercase tracking-[0.24em] text-sky-300">Route details</p>
            {activeDetails ? (
              <div className="mt-4 space-y-3">
                <p className="text-sm font-semibold text-white">{activeDetails.label}</p>
                <p className="text-sm text-slate-300">{activeDetails.description}</p>
                <div className="grid gap-2 sm:grid-cols-2">
                  <div className="rounded-2xl bg-slate-900/80 px-4 py-3">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">Service</p>
                    <p className="mt-1 text-sm font-medium text-slate-100">{activeDetails.type}</p>
                  </div>
                  <div className="rounded-2xl bg-slate-900/80 px-4 py-3">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">Transit</p>
                    <p className="mt-1 text-sm font-medium text-slate-100">{activeDetails.transit}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mt-4 space-y-3">
                <p className="text-sm text-slate-300">Hover on a route to reveal service type and transit time.</p>
                <div className="grid gap-2 sm:grid-cols-2">
                  <div className="rounded-2xl bg-slate-900/80 px-4 py-3">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">Active routes</p>
                    <p className="mt-1 text-sm font-medium text-slate-100">{routes.map((r) => r.label).join(", ")}</p>
                  </div>
                  <div className="rounded-2xl bg-slate-900/80 px-4 py-3">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">Ports</p>
                    <p className="mt-1 text-sm font-medium text-slate-100">{ports.map((p) => p.name).join(", ")}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid gap-4">
        {tradeLanes.map((lane) => (
          <Card key={lane.region} className="rounded-3xl border border-slate-800 bg-slate-950 p-6 text-slate-200 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-400/30 hover:shadow-lg">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-300">
                <MapPinned className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-white">{lane.region}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">{lane.detail}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
