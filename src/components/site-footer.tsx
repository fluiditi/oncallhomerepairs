"use client";

import { usePathname } from "next/navigation";
import { Phone, Mail, MapPin, Wrench, Flame, Droplets, Bath } from "lucide-react";
import { seoConfig } from "@/config/seo";
import { geoRegistry, resolveGeo } from "@/config/geo-registry";

const categoryIcons: Record<string, React.ReactNode> = {
  "plumber": <Wrench className="size-3.5" />,
  "gasfitter": <Flame className="size-3.5" />,
};

export function SiteFooter() {
  const pathname = usePathname();
  const currentGeo = resolveGeo(pathname);
  const activeConfig = currentGeo?.config ?? seoConfig;
  const geoPrefix = currentGeo?.prefix ?? geoRegistry[0].prefix;

  return (
    <footer className="bg-navy text-white">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Column 1: Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex size-8 items-center justify-center rounded-lg bg-primary">
                <Wrench className="size-4 text-white" />
              </div>
              <div>
                <span className="font-heading text-base font-bold tracking-tight">
                  OnCall
                </span>
                <span className="ml-1 font-heading text-base font-bold tracking-tight text-primary">
                  Home Repairs
                </span>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Connecting homeowners with vetted, Gas Safe registered
              plumbers across the UK. Available 24 hours a day, 7 days a week.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-green-500" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              <span className="text-xs font-medium text-green-400">
                Taking calls now
              </span>
            </div>
          </div>

          {/* Column 2: Services — geo-aware */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white/40">
              {currentGeo ? `Services — ${currentGeo.city}` : "Services"}
            </h3>
            {currentGeo ? (
              <ul className="mt-4 space-y-2.5">
                {activeConfig.services.categories.map((cat) => (
                  <li key={cat.slug}>
                    <a
                      href={`${geoPrefix}/services/${cat.slug}`}
                      className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-primary"
                    >
                      {categoryIcons[cat.slug]}
                      {cat.name}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={`${geoPrefix}/services`}
                    className="text-sm font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    View all services
                  </a>
                </li>
              </ul>
            ) : (
              <ul className="mt-4 space-y-2.5">
                {geoRegistry.map((geo) => (
                  <li key={geo.slug}>
                    <a
                      href={`${geo.prefix}/services`}
                      className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-primary"
                    >
                      <MapPin className="size-3.5" />
                      {geo.city} Services
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white/40">
              {currentGeo ? currentGeo.city : "Locations"}
            </h3>
            {currentGeo ? (
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a
                    href={`${geoPrefix}/about`}
                    className="text-sm text-white/70 transition-colors hover:text-primary"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href={`${geoPrefix}/contact`}
                    className="text-sm text-white/70 transition-colors hover:text-primary"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href={`${geoPrefix}/services/plumber/emergency-plumbing`}
                    className="text-sm text-white/70 transition-colors hover:text-primary"
                  >
                    Emergency Plumbing
                  </a>
                </li>
                <li>
                  <a
                    href={`${geoPrefix}/contact`}
                    className="text-sm text-white/70 transition-colors hover:text-primary"
                  >
                    Get a Free Quote
                  </a>
                </li>
              </ul>
            ) : (
              <ul className="mt-4 space-y-2.5">
                {geoRegistry.map((geo) => (
                  <li key={geo.slug}>
                    <a
                      href={geo.prefix}
                      className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-primary"
                    >
                      <MapPin className="size-3.5" />
                      {geo.city}, {geo.county}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Column 4: Contact — geo-aware NAP */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white/40">
              {currentGeo ? `Contact — ${currentGeo.city}` : "Contact"}
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={activeConfig.business.phoneTel}
                  className="flex items-center gap-2.5 text-sm font-semibold text-white transition-colors hover:text-primary"
                >
                  <Phone className="size-4 text-primary" />
                  {activeConfig.business.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${activeConfig.business.email}`}
                  className="flex items-center gap-2.5 text-sm text-white/70 transition-colors hover:text-primary"
                >
                  <Mail className="size-4 text-primary" />
                  {activeConfig.business.email}
                </a>
              </li>
              {currentGeo ? (
                <li className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span className="text-sm text-white/70">
                    {activeConfig.location.address !== "TBC" && (
                      <>{activeConfig.location.address}<br /></>
                    )}
                    {activeConfig.location.city}, {activeConfig.location.county}
                    <br />
                    {activeConfig.location.postcode}
                  </span>
                </li>
              ) : (
                <li className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span className="text-sm text-white/70">
                    Serving {geoRegistry.map((g) => g.city).join(", ")}
                    <br />
                    and surrounding areas
                  </span>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Locations / Service Areas — geo-aware */}
        <div className="mt-10 border-t border-white/10 pt-8">
          {currentGeo ? (
            <>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
                Service Areas — {currentGeo.city}
              </p>
              <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
                {activeConfig.serviceAreas.map((area) => (
                  <span key={area} className="text-sm text-white/50">
                    {area}
                  </span>
                ))}
              </div>
            </>
          ) : (
            <>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
                Locations
              </p>
              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                {geoRegistry.map((geo) => (
                  <a
                    key={geo.slug}
                    href={geo.prefix}
                    className="text-sm text-white/50 transition-colors hover:text-primary"
                  >
                    {geo.city} &amp; {geo.county}
                  </a>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} {seoConfig.business.legalName}.
            All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Gas Safe registered plumbers &middot; UK-wide service
          </p>
        </div>
      </div>
    </footer>
  );
}
