"use client";

import { motion } from "framer-motion";
import {
  Phone,
  ArrowRight,
  MapPin,
  ChevronRight,
  Wrench,
  Flame,
  Droplets,
  Bath,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/breadcrumb";
import { generateBreadcrumbSchema } from "@/lib/schema";
import type { SEOConfig } from "@/config/seo";

// ---------------------------------------------------------------------------
// Animation variants
// ---------------------------------------------------------------------------

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeIn = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

// ---------------------------------------------------------------------------
// Category icons
// ---------------------------------------------------------------------------

const categoryIcons: Record<string, typeof Wrench> = {
  "emergency-plumbing": Wrench,
  "boiler-heating": Flame,
  "drain-services": Droplets,
  "general-plumbing": Bath,
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

interface ServicesHubGeoProps {
  config: SEOConfig;
}

export function ServicesHubGeo({ config }: ServicesHubGeoProps) {
  const city = config.location.city;
  const county = config.location.county;
  const prefix = config.geoPrefix;

  const breadcrumbItems = [{ name: "Services", href: `${prefix}/services` }];
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);

  // Build category data from config
  const categories = config.services.categories.map((cat) => {
    const Icon = categoryIcons[cat.slug] ?? Wrench;
    const coreServices = cat.services.filter((s) => s.isCoreService);
    return {
      icon: Icon,
      title: cat.name,
      slug: cat.slug,
      description: cat.description,
      topServices: coreServices.slice(0, 3).map((s) => ({
        name: s.name,
        href: `${prefix}/services/${cat.slug}/${s.slug}`,
      })),
      allServices: cat.services.map((s) => ({
        name: s.name,
        href: `${prefix}/services/${cat.slug}/${s.slug}`,
        core: s.isCoreService,
      })),
    };
  });

  return (
    <main>
      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-navy text-white">
        <img
          src="/images/hero-plumber-kitchen.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -left-20 bottom-0 h-[300px] w-[300px] rounded-full bg-primary/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.h1
              variants={fadeUp}
              custom={0}
              className="font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
            >
              Plumbing Services in {city}
            </motion.h1>
            <motion.div
              variants={fadeUp}
              custom={1}
              className="mt-6 text-lg leading-relaxed text-white/80"
            >
              <p>
                OnCall Home Repairs connects you with vetted, qualified plumbers
                across {city} and {county}. From midnight burst
                pipes and boiler breakdowns to dripping taps and bathroom refits, our
                network handles every plumbing job &mdash; large or small. Every
                plumber is Gas Safe registered, fully insured, and backed by our
                workmanship guarantee. Call{" "}
                <a href="tel:03332408428" className="font-semibold text-white underline underline-offset-2 hover:text-primary">
                  0333 240 8428
                </a>{" "}
                for a fast, honest quote.
              </p>
            </motion.div>
            <motion.div
              variants={fadeUp}
              custom={2}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Button
                asChild
                size="lg"
                className="h-14 rounded-xl px-8 text-base font-semibold shadow-lg shadow-primary/30"
              >
                <a href={`${prefix}/contact`}>
                  Get a Free Quote
                  <ArrowRight className="ml-2 size-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-14 rounded-xl border-white/30 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
              >
                <a href="tel:03332408428">
                  <Phone className="mr-2 size-5" />
                  0333 240 8428
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CATEGORY CARDS */}
      <section className="bg-blue-soft py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center"
          >
            <h2 className="font-heading text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              What Do You Need Help With?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Choose a category below or scroll down for the full list of services
              we cover across {city} and surrounding areas.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-14 grid gap-6 sm:grid-cols-2"
          >
            {categories.map((cat, i) => (
              <motion.div key={cat.slug} variants={fadeUp} custom={i}>
                <Card className="group h-full border-0 bg-white shadow-sm transition-shadow hover:shadow-md">
                  <CardHeader>
                    <div className="mb-1 flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <cat.icon className="size-6" />
                    </div>
                    <CardTitle className="font-heading text-xl text-navy">
                      {cat.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {cat.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Top services
                    </p>
                    <ul className="space-y-1.5">
                      {cat.topServices.map((s) => (
                        <li key={s.href}>
                          <a
                            href={s.href}
                            className="inline-flex items-center text-sm text-primary hover:underline"
                          >
                            <ChevronRight className="mr-1 size-3.5" />
                            {s.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <a
                      href={`${prefix}/services/${cat.slug}`}
                      className="inline-flex items-center text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                    >
                      View all {cat.title.toLowerCase()} services
                      <ArrowRight className="ml-1.5 size-4 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FULL SERVICES LIST BY CATEGORY */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <h2 className="text-center font-heading text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              All Plumbing Services
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-base text-muted-foreground sm:text-lg">
              Every service offered through our network of vetted {city} plumbers,
              organised by category.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-12 grid gap-10 sm:grid-cols-2"
          >
            {categories.map((cat, i) => (
              <motion.div key={cat.slug} variants={fadeUp} custom={i}>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <cat.icon className="size-5" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-navy">
                    <a
                      href={`${prefix}/services/${cat.slug}`}
                      className="hover:text-primary"
                    >
                      {cat.title}
                    </a>
                  </h3>
                </div>
                <ul className="space-y-2 pl-1">
                  {cat.allServices.map((s) => (
                    <li key={s.href} className="flex items-center gap-2">
                      <ChevronRight className="size-3.5 shrink-0 text-primary" />
                      <a
                        href={s.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {s.name}
                      </a>
                      {s.core && (
                        <Badge className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary hover:bg-primary/10">
                          Core
                        </Badge>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="bg-blue-soft py-16 sm:py-20">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-3">
              <MapPin className="size-6 shrink-0 text-primary" />
              <h2 className="font-heading text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                Plumbing Services Across {city} and {county}
              </h2>
            </div>
            <div className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                Our network of vetted plumbers serves {city} and the surrounding
                towns and villages across {county}. Whether you
                need an{" "}
                <a
                  href={`${prefix}/services/emergency-plumbing`}
                  className="text-primary underline underline-offset-2 hover:text-primary/80"
                >
                  emergency plumber in {city}
                </a>
                , a{" "}
                <a
                  href={`${prefix}/services/boiler-heating/boiler-repair`}
                  className="text-primary underline underline-offset-2 hover:text-primary/80"
                >
                  boiler repair
                </a>
                , or{" "}
                <a
                  href={`${prefix}/services/drain-services/blocked-drains`}
                  className="text-primary underline underline-offset-2 hover:text-primary/80"
                >
                  drain clearing
                </a>
                , we can match you with a qualified, local plumber who knows your area.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {config.serviceAreas.map((area) => (
                <Badge
                  key={area}
                  variant="secondary"
                  className="rounded-full bg-white px-3 py-1 text-sm font-medium text-navy shadow-sm"
                >
                  {area}
                </Badge>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy py-16 text-white sm:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />
        </div>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8"
        >
          <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            Ready to Book a Plumber in {city}?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            Whether it&rsquo;s an emergency or a planned job, OnCall Home Repairs
            will match you with a vetted, local plumber who quotes honestly,
            turns up on time, and guarantees the work. Call now or request a
            callback online.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="h-14 rounded-xl px-8 text-base font-semibold shadow-lg shadow-primary/30"
            >
              <a href="tel:03332408428">
                <Phone className="mr-2 size-5" />
                Call 0333 240 8428
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-14 rounded-xl border-white/30 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
            >
              <a href={`${prefix}/contact`}>
                Request a Callback
                <ArrowRight className="ml-2 size-5" />
              </a>
            </Button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
