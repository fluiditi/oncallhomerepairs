"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight, MapPin, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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

// Animation variants (matching homepage)
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

export interface ProcessStep {
  title: string;
  description: React.ReactNode;
}

export interface RelatedService {
  name: string;
  href: string;
}

export interface ServicePageProps {
  // Breadcrumb
  breadcrumbItems: { name: string; href: string }[];

  // Hero
  h1: React.ReactNode;
  heroIntro: React.ReactNode;
  heroImage?: string;

  // What/Why section
  whatWhyHeading: string;
  whatWhyContent: React.ReactNode;

  // Process section
  processHeading: string;
  processSteps: ProcessStep[];

  // Benefits section (core pages only — optional for child pages)
  benefitsHeading?: string;
  benefits?: { title: string; description: React.ReactNode }[];

  // Related services
  relatedHeading?: string;
  relatedServices?: RelatedService[];

  // Service areas
  serviceAreasHeading: string;
  serviceAreasContent: React.ReactNode;

  // FAQ
  faqs: FAQItem[];

  // CTA
  ctaHeading: string;
  ctaContent: React.ReactNode;

  // Schema data
  serviceName: string;
  serviceSlug: string;
  serviceDescription: string;
  categorySlug: string;

  // Geo overrides (for multi-geo support)
  geoPrefix?: string;
  serviceAreas?: string[];
  geoConfig?: GeoConfig;
}

export function ServicePage({
  breadcrumbItems,
  h1,
  heroIntro,
  heroImage,
  whatWhyHeading,
  whatWhyContent,
  processHeading,
  processSteps,
  benefitsHeading,
  benefits,
  relatedHeading,
  relatedServices,
  serviceAreasHeading,
  serviceAreasContent,
  faqs,
  ctaHeading,
  ctaContent,
  serviceName,
  serviceSlug,
  serviceDescription,
  categorySlug,
  geoPrefix: geoPrefixProp,
  serviceAreas: serviceAreasProp,
  geoConfig,
}: ServicePageProps) {
  const prefix = geoPrefixProp ?? seoConfig.geoPrefix;
  const areas = serviceAreasProp ?? seoConfig.serviceAreas;

  const serviceSchema = generateServiceSchema({
    name: serviceName,
    slug: serviceSlug,
    description: serviceDescription,
    categorySlug,
  }, geoConfig);

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

      {/* WHAT/WHY */}
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
              {whatWhyHeading}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {whatWhyContent}
            </div>
          </div>
        </motion.div>
      </section>

      {/* PROCESS */}
      <section className="bg-blue-soft py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <h2 className="text-center font-heading text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              {processHeading}
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:gap-8"
          >
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                className="relative rounded-2xl border border-border/60 bg-white p-6"
              >
                <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-heading text-lg font-semibold text-navy">
                  {step.title}
                </h3>
                <div className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BENEFITS (optional — core pages) */}
      {benefits && benefits.length > 0 && benefitsHeading && (
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <h2 className="text-center font-heading text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                {benefitsHeading}
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {benefits.map((b, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i}
                  className="rounded-2xl border border-border/60 bg-white p-6 transition-all hover:border-primary/30 hover:shadow-lg"
                >
                  <h3 className="font-heading text-lg font-semibold text-navy">
                    {b.title}
                  </h3>
                  <div className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {b.description}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* RELATED SERVICES (optional) */}
      {relatedServices && relatedServices.length > 0 && (
        <section
          className={`${benefits && benefits.length > 0 ? "bg-blue-soft" : "bg-white"} py-16 sm:py-20`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <h2 className="font-heading text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                {relatedHeading ?? "Related Services"}
              </h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {relatedServices.map((rs) => (
                  <a
                    key={rs.href}
                    href={rs.href}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-border/60 bg-white px-4 py-2.5 text-sm font-medium text-navy transition-all hover:border-primary/30 hover:shadow-md"
                  >
                    <ChevronRight className="size-3.5 text-primary" />
                    {rs.name}
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
            <div className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
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
