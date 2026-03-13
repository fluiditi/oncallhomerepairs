"use client";

import { motion } from "framer-motion";
import {
  Phone,
  ArrowRight,
  MapPin,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/breadcrumb";
import {
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  type GeoConfig,
} from "@/lib/schema";
import { seoConfig } from "@/config/seo";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

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

// Types
export interface FAQItem {
  question: string;
  answer: string;
  answerJsx?: React.ReactNode;
}

export interface CategoryService {
  name: string;
  slug: string;
  description: string;
  isCoreService: boolean;
}

export interface Differentiator {
  title: string;
  description: React.ReactNode;
}

export interface CategoryPageProps {
  // Breadcrumb
  breadcrumbItems: { name: string; href: string }[];

  // Hero
  h1: React.ReactNode;
  heroIntro: React.ReactNode;
  heroImage?: string;

  // Overview
  overviewHeading: string;
  overviewContent: React.ReactNode;

  // Services list
  servicesHeading: string;
  categorySlug: string;
  services: CategoryService[];

  // Why choose us
  whyChooseHeading: string;
  differentiators: Differentiator[];

  // Cross-links to other categories
  crossLinks?: { name: string; href: string; description: string }[];

  // Service areas
  serviceAreasHeading: string;
  serviceAreasContent: React.ReactNode;

  // FAQ
  faqs: FAQItem[];

  // CTA
  ctaHeading: string;
  ctaContent: React.ReactNode;

  // Schema data
  categoryName: string;
  categoryDescription: string;

  // Geo overrides (for multi-geo support)
  geoPrefix?: string;
  serviceAreas?: string[];
  geoConfig?: GeoConfig;
}

export function CategoryPage({
  breadcrumbItems,
  h1,
  heroIntro,
  heroImage,
  overviewHeading,
  overviewContent,
  servicesHeading,
  categorySlug,
  services,
  whyChooseHeading,
  differentiators,
  crossLinks,
  serviceAreasHeading,
  serviceAreasContent,
  faqs,
  ctaHeading,
  ctaContent,
  categoryName,
  categoryDescription,
  geoPrefix: geoPrefixProp,
  serviceAreas: serviceAreasProp,
  geoConfig,
}: CategoryPageProps) {
  const prefix = geoPrefixProp ?? seoConfig.geoPrefix;
  const areas = serviceAreasProp ?? seoConfig.serviceAreas;
  const baseUrl = geoConfig?.business.url ?? seoConfig.business.url;

  const serviceSchema = generateServiceSchema({
    name: categoryName,
    slug: categorySlug,
    description: categoryDescription,
    categorySlug: "",
  }, geoConfig);

  // Override the service URL for category-level pages
  serviceSchema.url = `${baseUrl}${prefix}/services/${categorySlug}`;

  const faqSchema = generateFAQSchema(
    faqs.map((f) => ({ question: f.question, answer: f.answer }))
  );

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);

  return (
    <main>
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-navy text-white">
        {heroImage && (
          <img
            src={heroImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-20"
          />
        )}
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
              {h1}
            </motion.h1>
            <motion.div
              variants={fadeUp}
              custom={1}
              className="mt-6 text-lg leading-relaxed text-white/80"
            >
              {heroIntro}
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

      {/* OVERVIEW */}
      <section className="bg-white py-16 sm:py-20">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              {overviewHeading}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {overviewContent}
            </div>
          </div>
        </motion.div>
      </section>

      {/* SERVICES LIST */}
      <section className="bg-blue-soft py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <h2 className="text-center font-heading text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              {servicesHeading}
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service, i) => (
              <motion.div key={service.slug} variants={fadeUp} custom={i}>
                <a
                  href={`${prefix}/services/${categorySlug}/${service.slug}`}
                  className="block h-full"
                >
                  <Card className="group h-full border-0 bg-white shadow-sm transition-all hover:shadow-md hover:border-primary/20">
                    <CardHeader>
                      {service.isCoreService && (
                        <Badge className="mb-2 w-fit rounded-full bg-primary/10 text-xs font-semibold text-primary hover:bg-primary/10">
                          Core Service
                        </Badge>
                      )}
                      <CardTitle className="font-heading text-lg text-navy">
                        {service.name}
                      </CardTitle>
                      <CardDescription className="text-sm leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <span className="inline-flex items-center text-sm font-semibold text-primary transition-colors group-hover:text-primary/80">
                        Learn more
                        <ArrowRight className="ml-1.5 size-4 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </CardFooter>
                  </Card>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <h2 className="text-center font-heading text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              {whyChooseHeading}
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {differentiators.map((d, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                className="rounded-2xl border border-border/60 bg-white p-6 transition-all hover:border-primary/30 hover:shadow-lg"
              >
                <h3 className="font-heading text-lg font-semibold text-navy">
                  {d.title}
                </h3>
                <div className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {d.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CROSS-LINKS */}
      {crossLinks && crossLinks.length > 0 && (
        <section className="bg-blue-soft py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <h2 className="font-heading text-xl font-bold tracking-tight text-navy sm:text-2xl">
                Other Services You May Need
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {crossLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="group flex items-start gap-3 rounded-xl border border-border/60 bg-white p-4 transition-all hover:border-primary/30 hover:shadow-md"
                  >
                    <ChevronRight className="mt-0.5 size-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-heading text-base font-semibold text-navy group-hover:text-primary">
                        {link.name}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {link.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

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
                {serviceAreasHeading}
              </h2>
            </div>
            <div className="mt-6 text-base leading-relaxed text-muted-foreground">
              {serviceAreasContent}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {areas.map((area) => (
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

      {/* FAQ */}
      <section className="bg-white py-16 sm:py-20">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center font-heading text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="mt-10">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left font-heading text-base font-semibold text-navy hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                    {faq.answerJsx ?? faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
            {ctaHeading}
          </h2>
          <div className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            {ctaContent}
          </div>
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
