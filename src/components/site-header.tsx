"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  Phone,
  Menu,
  ChevronDown,
  Wrench,
  Flame,
  Droplets,
  Bath,
  X,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import { seoConfig } from "@/config/seo";
import { geoRegistry, resolveGeo } from "@/config/geo-registry";

const categoryIcons: Record<string, React.ReactNode> = {
  "plumber": <Wrench className="size-4 text-primary" />,
  "gasfitter": <Flame className="size-4 text-primary" />,
};

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const pathname = usePathname();

  // Resolve the current geo from the URL
  const currentGeo = resolveGeo(pathname);
  // Use the current geo's config for service links, or fall back to the first geo
  const activeConfig = currentGeo?.config ?? seoConfig;
  const geoPrefix = currentGeo?.prefix ?? geoRegistry[0].prefix;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-white/95 shadow-sm backdrop-blur-md"
          : "bg-white"
      }`}
    >
      {/* Top bar — 24/7 availability */}
      <div className="bg-navy text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 sm:px-6 lg:px-8">
          <p className="flex items-center gap-2 text-xs font-medium sm:text-sm">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-green-500" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            24/7 Emergency Plumber Available
          </p>
          <a
            href="tel:03332408428"
            className="text-xs font-semibold text-white transition-colors hover:text-primary sm:text-sm"
          >
            0333 240 8428
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="flex size-9 items-center justify-center rounded-lg bg-primary">
            <Wrench className="size-5 text-white" />
          </div>
          <div>
            <span className="font-heading text-lg font-bold tracking-tight text-navy">
              OnCall
            </span>
            <span className="ml-1 font-heading text-lg font-bold tracking-tight text-primary">
              Home Repairs
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          <a
            href="/"
            className="rounded-lg px-3 py-2 text-sm font-medium text-navy transition-colors hover:bg-blue-soft hover:text-primary"
          >
            Home
          </a>

          {/* Services dropdown — geo-aware */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            {currentGeo ? (
              <a
                href={`${geoPrefix}/services`}
                className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-navy transition-colors hover:bg-blue-soft hover:text-primary"
              >
                Services
                <ChevronDown
                  className={`size-3.5 transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </a>
            ) : (
              <button
                className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-navy transition-colors hover:bg-blue-soft hover:text-primary"
              >
                Services
                <ChevronDown
                  className={`size-3.5 transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            )}

            {/* Dropdown panel */}
            <div
              className={`absolute left-1/2 top-full pt-2 -translate-x-1/2 transition-all duration-200 ${
                servicesOpen
                  ? "pointer-events-auto translate-y-0 opacity-100"
                  : "pointer-events-none -translate-y-1 opacity-0"
              }`}
            >
              {currentGeo ? (
                /* On a geo page — show that city's services */
                <div className="w-[520px] rounded-xl border border-border/60 bg-white p-4 shadow-lg">
                  <p className="mb-3 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    <MapPin className="size-3" />
                    Services in {currentGeo.city}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {activeConfig.services.categories.map((cat) => (
                      <a
                        key={cat.slug}
                        href={`${geoPrefix}/services/${cat.slug}`}
                        className="group flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-blue-soft"
                      >
                        <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-md bg-primary/10">
                          {categoryIcons[cat.slug]}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-navy group-hover:text-primary">
                            {cat.name}
                          </p>
                          <p className="mt-0.5 line-clamp-2 text-xs text-muted-foreground">
                            {cat.services.length} services
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                  <div className="mt-3 border-t border-border/60 pt-3">
                    <a
                      href={`${geoPrefix}/services`}
                      className="flex items-center justify-center gap-1 rounded-lg py-2 text-sm font-medium text-primary transition-colors hover:bg-blue-soft"
                    >
                      View all plumbing services
                    </a>
                  </div>
                </div>
              ) : (
                /* On the homepage — show location picker */
                <div className="w-72 rounded-xl border border-border/60 bg-white p-4 shadow-lg">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Choose your area for services
                  </p>
                  {geoRegistry.map((geo) => (
                    <a
                      key={geo.slug}
                      href={`${geo.prefix}/services`}
                      className="group flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-blue-soft"
                    >
                      <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-primary/10">
                        <MapPin className="size-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-navy group-hover:text-primary">
                          {geo.city}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {geo.county}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Locations dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setLocationsOpen(true)}
            onMouseLeave={() => setLocationsOpen(false)}
          >
            <button
              className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-navy transition-colors hover:bg-blue-soft hover:text-primary"
            >
              Locations
              <ChevronDown
                className={`size-3.5 transition-transform duration-200 ${
                  locationsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`absolute left-1/2 top-full pt-2 -translate-x-1/2 transition-all duration-200 ${
                locationsOpen
                  ? "pointer-events-auto translate-y-0 opacity-100"
                  : "pointer-events-none -translate-y-1 opacity-0"
              }`}
            >
              <div className="w-64 rounded-xl border border-border/60 bg-white p-3 shadow-lg">
                <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Our Areas
                </p>
                {geoRegistry.map((geo) => (
                  <a
                    key={geo.slug}
                    href={geo.prefix}
                    className={`flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-blue-soft ${
                      currentGeo?.slug === geo.slug
                        ? "bg-blue-soft text-primary"
                        : "text-navy"
                    }`}
                  >
                    <MapPin className="size-4 text-primary" />
                    <div>
                      <p className="font-semibold">{geo.city}</p>
                      <p className="text-xs text-muted-foreground">
                        {geo.county}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {currentGeo && (
            <>
              <a
                href={`${geoPrefix}/about`}
                className="rounded-lg px-3 py-2 text-sm font-medium text-navy transition-colors hover:bg-blue-soft hover:text-primary"
              >
                About
              </a>
              <a
                href={`${geoPrefix}/contact`}
                className="rounded-lg px-3 py-2 text-sm font-medium text-navy transition-colors hover:bg-blue-soft hover:text-primary"
              >
                Contact
              </a>
            </>
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex">
          <Button
            asChild
            className="h-10 rounded-lg px-5 font-semibold shadow-md shadow-primary/20"
          >
            <a href="tel:03332408428">
              <Phone className="mr-2 size-4" />
              0333 240 8428
            </a>
          </Button>
        </div>

        {/* Mobile menu */}
        <div className="flex items-center gap-3 lg:hidden">
          <Button
            asChild
            size="sm"
            className="h-9 rounded-lg px-3 text-sm font-semibold shadow-md shadow-primary/20"
          >
            <a href="tel:03332408428">
              <Phone className="mr-1.5 size-3.5" />
              Call
            </a>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <button
                className="flex size-10 items-center justify-center rounded-lg border border-border/60 text-navy transition-colors hover:bg-blue-soft"
                aria-label="Open menu"
              >
                <Menu className="size-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 p-0" showCloseButton={false}>
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex h-full flex-col">
                {/* Mobile header */}
                <div className="flex items-center justify-between border-b border-border/60 px-5 py-4">
                  <div className="flex items-center gap-2">
                    <div className="flex size-8 items-center justify-center rounded-lg bg-primary">
                      <Wrench className="size-4 text-white" />
                    </div>
                    <span className="font-heading text-base font-bold text-navy">
                      OnCall
                    </span>
                  </div>
                  <SheetClose asChild>
                    <button
                      className="flex size-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-navy"
                      aria-label="Close menu"
                    >
                      <X className="size-4" />
                    </button>
                  </SheetClose>
                </div>

                {/* Mobile links */}
                <nav className="flex-1 overflow-y-auto px-3 py-4">
                  <a
                    href="/"
                    className="flex rounded-lg px-3 py-2.5 text-sm font-medium text-navy transition-colors hover:bg-blue-soft"
                  >
                    Home
                  </a>

                  {/* Locations section */}
                  <div className="mt-3">
                    <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Locations
                    </p>
                    {geoRegistry.map((geo) => (
                      <a
                        key={geo.slug}
                        href={geo.prefix}
                        className={`flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-blue-soft ${
                          currentGeo?.slug === geo.slug
                            ? "bg-blue-soft text-primary"
                            : "text-navy"
                        }`}
                      >
                        <MapPin className="size-4 text-primary" />
                        {geo.city}
                      </a>
                    ))}
                  </div>

                  <div className="my-3 border-t border-border/60" />

                  {/* Services section — only show when geo is active */}
                  {currentGeo ? (
                    <div>
                      <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Services — {currentGeo.city}
                      </p>
                      {activeConfig.services.categories.map((cat) => (
                        <a
                          key={cat.slug}
                          href={`${geoPrefix}/services/${cat.slug}`}
                          className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium text-navy transition-colors hover:bg-blue-soft"
                        >
                          {categoryIcons[cat.slug]}
                          {cat.name}
                        </a>
                      ))}
                      <a
                        href={`${geoPrefix}/services`}
                        className="flex rounded-lg px-3 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-blue-soft"
                      >
                        All Services
                      </a>
                    </div>
                  ) : (
                    <div>
                      <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Services
                      </p>
                      <p className="px-3 py-1.5 text-xs text-muted-foreground">
                        Choose a location above to view services
                      </p>
                    </div>
                  )}

                  {currentGeo && (
                    <>
                      <div className="my-3 border-t border-border/60" />

                      <a
                        href={`${geoPrefix}/about`}
                        className="flex rounded-lg px-3 py-2.5 text-sm font-medium text-navy transition-colors hover:bg-blue-soft"
                      >
                        About
                      </a>
                      <a
                        href={`${geoPrefix}/contact`}
                        className="flex rounded-lg px-3 py-2.5 text-sm font-medium text-navy transition-colors hover:bg-blue-soft"
                      >
                        Contact
                      </a>
                    </>
                  )}
                </nav>

                {/* Mobile footer CTA */}
                <div className="border-t border-border/60 p-4">
                  <Button
                    asChild
                    className="h-12 w-full rounded-xl font-semibold shadow-md shadow-primary/20"
                  >
                    <a href="tel:03332408428">
                      <Phone className="mr-2 size-4" />
                      Call 0333 240 8428
                    </a>
                  </Button>
                  <p className="mt-2 text-center text-xs text-muted-foreground">
                    Available 24/7 for emergencies
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
