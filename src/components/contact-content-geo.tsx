"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/breadcrumb";
import {
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema";
import type { SEOConfig } from "@/config/seo";

const WEBHOOK_URL =
  "https://n8n2.cloudportal.uk/webhook/b7a9f8dc-3ef8-4b12-9f99-b476addd6b23";

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

interface ContactContentGeoProps {
  config: SEOConfig;
}

export function ContactContentGeo({ config }: ContactContentGeoProps) {
  const city = config.location.city;
  const county = config.location.county;
  const prefix = config.geoPrefix;

  const [formState, setFormState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("submitting");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          location_city: city,
          location_county: county,
          source_page: `${config.business.url}${prefix}/contact`,
          submitted_at: new Date().toISOString(),
        }),
      });

      if (!res.ok) throw new Error("Submission failed");
      setFormState("success");
      form.reset();
    } catch {
      setFormState("error");
    }
  }

  const businessSchema = generateLocalBusinessSchema(config);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Contact", href: `${prefix}/contact` },
  ]);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Breadcrumb items={[{ name: "Contact", href: `${prefix}/contact` }]} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-navy text-white">
        <img
          src="/images/hero-contact.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
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
              Contact OnCall Home Repairs{" "}
              <span className="text-primary">in {city}</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="mt-6 text-lg leading-relaxed text-white/80"
            >
              Need a plumber? Call us directly for the fastest response, or fill
              in the form below and we&rsquo;ll get back to you promptly. For
              emergencies, always call &mdash; we answer 24 hours a day, 7 days
              a week.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT METHODS + FORM */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Contact info */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="lg:col-span-2"
            >
              <h2 className="font-heading text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                Get in Touch
              </h2>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Phone className="size-5" />
                  </div>
                  <div>
                    <p className="font-heading text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      Phone
                    </p>
                    <a
                      href="tel:03332408428"
                      className="mt-1 block text-xl font-bold text-navy transition-colors hover:text-primary"
                    >
                      0333 240 8428
                    </a>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Available 24/7 for emergencies
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <p className="font-heading text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      Email
                    </p>
                    <a
                      href="mailto:info@oncallhomerepairs.co.uk"
                      className="mt-1 block text-base font-medium text-navy transition-colors hover:text-primary"
                    >
                      info@oncallhomerepairs.co.uk
                    </a>
                    <p className="mt-1 text-sm text-muted-foreground">
                      We respond within a few hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MapPin className="size-5" />
                  </div>
                  <div>
                    <p className="font-heading text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      Service Area
                    </p>
                    <p className="mt-1 text-base text-navy">
                      {city}
                      <br />
                      {county}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Clock className="size-5" />
                  </div>
                  <div>
                    <p className="font-heading text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      Hours
                    </p>
                    <p className="mt-1 text-base text-navy">
                      Emergency line: 24/7
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Non-emergency enquiries: Mon&ndash;Fri, 8am&ndash;6pm
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-4">
                <p className="text-sm font-medium text-navy">
                  <span className="relative mr-2 inline-flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-green-500" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                  </span>
                  For emergencies, always call. We answer the phone 24 hours a
                  day, including weekends and bank holidays.
                </p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="lg:col-span-3"
            >
              <div className="rounded-2xl border border-border/60 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="font-heading text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                  Request a Free Quote
                </h2>
                <p className="mt-2 text-base text-muted-foreground">
                  Tell us what you need and we&rsquo;ll connect you with the
                  right plumber. Non-urgent requests are typically responded to
                  within a few hours.
                </p>

                {formState === "success" ? (
                  <div className="mt-8 flex flex-col items-center gap-4 rounded-xl border border-green-200 bg-green-50 p-8 text-center">
                    <CheckCircle2 className="size-12 text-green-600" />
                    <h3 className="font-heading text-xl font-bold text-navy">
                      Thank You!
                    </h3>
                    <p className="text-base text-muted-foreground">
                      We&rsquo;ve received your enquiry and will be in touch
                      shortly. For emergencies, call{" "}
                      <a
                        href="tel:03332408428"
                        className="font-semibold text-primary hover:underline"
                      >
                        0333 240 8428
                      </a>{" "}
                      for the fastest response.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setFormState("idle")}
                      className="mt-2"
                    >
                      Submit Another Enquiry
                    </Button>
                  </div>
                ) : (
                <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy">
                      Your Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text" id="name" name="name" required
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="John Smith"
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-navy">
                        Phone Number <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="tel" id="phone" name="phone" required
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="07700 900000"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy">
                        Email Address <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="email" id="email" name="email" required
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="john@example.co.uk"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-navy">
                      Service Needed <span className="text-destructive">*</span>
                    </label>
                    <select
                      id="service" name="service" required
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-base text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      defaultValue=""
                    >
                      <option value="" disabled>Select a service...</option>
                      {config.services.categories.map((cat) => (
                        <optgroup key={cat.slug} label={cat.name}>
                          {cat.services.map((s) => (
                            <option key={s.slug} value={s.slug}>{s.name}</option>
                          ))}
                        </optgroup>
                      ))}
                      <option value="other">Other / Not sure</option>
                    </select>
                  </div>

                  <div>
                    <p className="mb-2 text-sm font-medium text-navy">
                      Preferred Contact Method
                    </p>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 text-sm text-foreground">
                        <input type="radio" name="contact_method" value="phone" defaultChecked className="size-4 accent-primary" />
                        Phone
                      </label>
                      <label className="flex items-center gap-2 text-sm text-foreground">
                        <input type="radio" name="contact_method" value="email" className="size-4 accent-primary" />
                        Email
                      </label>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy">
                      Tell Us About the Job
                    </label>
                    <textarea
                      id="message" name="message" rows={4}
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Describe the issue, your postcode, and any urgency..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={formState === "submitting"}
                    className="h-14 w-full rounded-xl text-base font-semibold shadow-lg shadow-primary/30"
                  >
                    {formState === "submitting" ? (
                      <>
                        <Loader2 className="mr-2 size-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Get My Free Quote"
                    )}
                  </Button>

                  {formState === "error" && (
                    <p className="text-center text-sm font-medium text-destructive">
                      Something went wrong. Please try again, or call us on{" "}
                      <a href="tel:03332408428" className="underline">
                        0333 240 8428
                      </a>
                      .
                    </p>
                  )}

                  <p className="text-center text-xs text-muted-foreground">
                    We&rsquo;ll never share your information. Your details are
                    used solely to respond to your enquiry.
                  </p>
                </form>
                )}
              </div>
            </motion.div>
          </div>
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
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3">
              <MapPin className="size-6 text-primary" />
              <h2 className="font-heading text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                We Serve {city} and {county}
              </h2>
            </div>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
              Our plumber network covers {city} and the surrounding towns and
              villages across {county}. Not sure if we cover your area? Call
              and we&rsquo;ll confirm.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
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
            <p className="mt-6 text-sm text-muted-foreground">
              Not sure which service you need?{" "}
              <a
                href={`${prefix}/services`}
                className="font-medium text-primary underline underline-offset-2 hover:text-primary/80"
              >
                Browse all our plumbing services
              </a>{" "}
              or call us and we&rsquo;ll help.
            </p>
          </div>
        </motion.div>
      </section>

      {/* MAP */}
      <section className="bg-white px-4 pt-12 sm:px-6 sm:pt-16 lg:px-8">
        {config.gbp && "mapEmbed" in config.gbp && config.gbp.mapEmbed ? (
          <div className="mx-auto max-w-4xl overflow-hidden rounded-xl">
            <iframe
              src={config.gbp.mapEmbed as string}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`OnCall Home Repairs — ${city} on Google Maps`}
            />
          </div>
        ) : (
          <div
            className="flex h-64 items-center justify-center bg-muted/30 sm:h-80"
            aria-label={`Map showing OnCall Home Repairs service area in ${city}, ${county}`}
          >
            <div className="text-center">
              <MapPin className="mx-auto size-8 text-muted-foreground/40" />
              <p className="mt-2 text-sm text-muted-foreground">
                Google Maps embed coming soon
              </p>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
