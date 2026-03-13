"use client";

import { motion } from "framer-motion";
import {
  Clock,
  ShieldCheck,
  Award,
  Phone,
  ArrowRight,
  MapPin,
  Wrench,
  Flame,
  Droplets,
  Bath,
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
import { Badge } from "@/components/ui/badge";

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
  visible: {
    transition: { staggerChildren: 0.12 },
  },
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
// Trust badges
// ---------------------------------------------------------------------------

const trustBadges = [
  {
    icon: Clock,
    title: "24/7 Availability",
    desc: "Day, night, weekends, bank holidays",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Pricing",
    desc: "Upfront quote before work begins",
  },
  {
    icon: Award,
    title: "Workmanship Guarantee",
    desc: "We put it right at no extra cost",
  },
  {
    icon: ShieldCheck,
    title: "Gas Safe Registered",
    desc: "Qualified, insured plumbers only",
  },
];

// ---------------------------------------------------------------------------
// Services overview
// ---------------------------------------------------------------------------

const services = [
  {
    icon: Wrench,
    title: "Emergency Plumbing",
    description:
      "Burst pipes, major leaks, flooding, and urgent plumbing failures. Our emergency plumbers respond around the clock.",
  },
  {
    icon: Flame,
    title: "Boiler & Heating",
    description:
      "Boiler repair, installation, servicing, and central heating work by Gas Safe registered engineers.",
  },
  {
    icon: Droplets,
    title: "Drain Services",
    description:
      "Blocked drain clearing, CCTV surveys, and toilet repairs using professional equipment.",
  },
  {
    icon: Bath,
    title: "General Plumbing",
    description:
      "Bathroom and kitchen plumbing, tap repairs, shower installations, and everyday pipe work.",
  },
];

// ---------------------------------------------------------------------------
// UK cities / locations
// ---------------------------------------------------------------------------

interface CityLink {
  name: string;
  slug: string;
  active: boolean;
}

const ukCities: CityLink[] = [
  // Active cities (12)
  { name: "London", slug: "plumber-london", active: true },
  { name: "Birmingham", slug: "plumber-birmingham", active: true },
  { name: "Manchester", slug: "plumber-manchester", active: true },
  { name: "Glasgow", slug: "plumber-glasgow", active: true },
  { name: "Leeds", slug: "plumber-leeds", active: true },
  { name: "Liverpool", slug: "plumber-liverpool", active: true },
  { name: "Edinburgh", slug: "plumber-edinburgh", active: true },
  { name: "Bristol", slug: "plumber-bristol", active: true },
  { name: "Sheffield", slug: "plumber-sheffield", active: true },
  { name: "Nottingham", slug: "plumber-nottingham", active: true },
  { name: "Hinckley", slug: "plumber-hinckley", active: true },
  { name: "Huddersfield", slug: "plumber-huddersfield", active: true },
  // Coming soon
  { name: "Leicester", slug: "plumber-leicester", active: false },
  { name: "Cardiff", slug: "plumber-cardiff", active: false },
  { name: "Coventry", slug: "plumber-coventry", active: false },
  { name: "Newcastle", slug: "plumber-newcastle", active: false },
  { name: "Southampton", slug: "plumber-southampton", active: false },
  { name: "Brighton", slug: "plumber-brighton", active: false },
  { name: "Derby", slug: "plumber-derby", active: false },
  { name: "Stoke-on-Trent", slug: "plumber-stoke-on-trent", active: false },
  { name: "Wolverhampton", slug: "plumber-wolverhampton", active: false },
  { name: "Plymouth", slug: "plumber-plymouth", active: false },
  { name: "Reading", slug: "plumber-reading", active: false },
  { name: "Oxford", slug: "plumber-oxford", active: false },
  { name: "Cambridge", slug: "plumber-cambridge", active: false },
  { name: "Swansea", slug: "plumber-swansea", active: false },
  { name: "Portsmouth", slug: "plumber-portsmouth", active: false },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function UKHomepage() {
  return (
    <main>
      {/* ================================================================= */}
      {/* HERO                                                              */}
      {/* ================================================================= */}
      <section className="relative overflow-hidden bg-navy text-white">
        {/* Hero background image */}
        <img
          src="/images/hero-uk-homepage.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -left-20 bottom-0 h-[400px] w-[400px] rounded-full bg-primary/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            {/* Availability badge */}
            <motion.div variants={fadeUp} custom={0} className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-green-500" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                </span>
                Available 24/7 Across the UK
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="font-heading text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            >
              Emergency Plumber{" "}
              <span className="text-primary">&mdash; Available 24/7</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl"
            >
              When a burst pipe, boiler breakdown, or blocked drain strikes,
              OnCall Home Repairs connects you with a vetted, local plumber
              &mdash; fast. Gas Safe registered, transparent pricing, and backed
              by our workmanship guarantee.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              custom={3}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Button
                asChild
                size="lg"
                className="h-14 rounded-xl px-8 text-base font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-shadow"
              >
                <a href="#locations">
                  Find Your Local Plumber
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
                  Or call 0333 240 8428
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4"
          >
            {trustBadges.map((badge, i) => (
              <motion.div
                key={badge.title}
                variants={fadeUp}
                custom={i + 4}
                className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
              >
                <badge.icon className="mb-2 size-6 text-primary" />
                <p className="font-heading text-sm font-semibold">
                  {badge.title}
                </p>
                <p className="mt-0.5 text-xs text-white/60">{badge.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* SERVICES OVERVIEW                                                 */}
      {/* ================================================================= */}
      <section className="bg-blue-soft py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center"
          >
            <h2 className="font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Our Plumbing Services
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
              From midnight emergencies to planned renovations, our network of
              vetted plumbers covers every job &mdash; large or small.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-14 grid gap-6 sm:grid-cols-2"
          >
            {services.map((service, i) => (
              <motion.div key={service.title} variants={fadeUp} custom={i}>
                <Card className="group h-full border-0 bg-white shadow-sm transition-shadow hover:shadow-md">
                  <CardHeader>
                    <div className="mb-1 flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <service.icon className="size-6" />
                    </div>
                    <CardTitle className="font-heading text-xl text-navy">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <a
                      href="#locations"
                      className="inline-flex items-center text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                    >
                      Find in your area
                      <ArrowRight className="ml-1.5 size-4 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* WHY CHOOSE US                                                     */}
      {/* ================================================================= */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Why Choose OnCall Home Repairs?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              We connect homeowners with vetted, qualified plumbers who answer
              when others don&rsquo;t, quote honestly before they start, and
              guarantee every job they complete.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              {
                icon: Clock,
                title: "24/7 Emergency Response",
                description:
                  "Plumbing emergencies don\u2019t wait for office hours. Our network is available around the clock \u2014 weekends and bank holidays included.",
              },
              {
                icon: ShieldCheck,
                title: "Transparent Pricing",
                description:
                  "You\u2019ll receive a clear quote before any work begins. The price you\u2019re quoted is the price you pay. No surprises.",
              },
              {
                icon: ShieldCheck,
                title: "Vetted, Gas Safe Plumbers",
                description:
                  "Every plumber in our network is Gas Safe registered, fully qualified, and insured. We verify all credentials before they join.",
              },
              {
                icon: Award,
                title: "Workmanship Guarantee",
                description:
                  "If something isn\u2019t right after the job, we come back and put it right at no extra cost. That\u2019s how we operate.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                custom={i}
                className="group rounded-2xl border border-border/60 bg-white p-6 transition-all hover:border-primary/30 hover:shadow-lg"
              >
                <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <item.icon className="size-6" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* AREAS WE COVER                                                    */}
      {/* ================================================================= */}
      <section id="locations" className="scroll-mt-32 bg-blue-soft py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <MapPin className="size-8 text-primary" />
              <h2 className="font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Areas We Cover
              </h2>
            </div>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
              OnCall Home Repairs is expanding across the UK. Select your area
              below to find a vetted local plumber.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-14 flex flex-wrap justify-center gap-3"
          >
            {ukCities.map((city, i) => (
              <motion.div key={`${city.name}-${i}`} variants={fadeUp} custom={i % 10}>
                {city.active ? (
                  <a href={`/${city.slug}`}>
                    <Badge
                      variant="secondary"
                      className="cursor-pointer rounded-full bg-white px-5 py-2 text-sm font-medium text-navy shadow-sm transition-all hover:bg-primary hover:text-white hover:shadow-md"
                    >
                      <ChevronRight className="mr-1 size-3.5 text-primary" />
                      {city.name}
                    </Badge>
                  </a>
                ) : (
                  <Badge
                    variant="secondary"
                    className="rounded-full bg-white/60 px-5 py-2 text-sm font-medium text-muted-foreground shadow-sm"
                  >
                    {city.name}
                    <span className="ml-1.5 text-[10px] uppercase tracking-wider text-muted-foreground/60">
                      Soon
                    </span>
                  </Badge>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* HOW IT WORKS                                                      */}
      {/* ================================================================= */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center"
          >
            <h2 className="font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              How It Works
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
              Getting a qualified plumber to your home is simple.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              {
                number: "01",
                title: "Call or Request Online",
                description:
                  "Ring 0333 240 8428 or submit a request. We\u2019re available 24/7.",
              },
              {
                number: "02",
                title: "We Match You",
                description:
                  "Based on your location and job type, we match you with a vetted local plumber.",
              },
              {
                number: "03",
                title: "Upfront Quote",
                description:
                  "Your plumber arrives, assesses the situation, and gives you a clear quote.",
              },
              {
                number: "04",
                title: "Job Done, Guaranteed",
                description:
                  "Work completed to a professional standard, backed by our workmanship guarantee.",
              },
            ].map((step, i) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                custom={i}
                className="relative rounded-2xl border border-border/60 bg-white p-6 text-center"
              >
                <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-primary text-lg font-bold text-white shadow-lg shadow-primary/30">
                  {step.number}
                </div>
                <h3 className="font-heading text-lg font-semibold text-navy">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* FINAL CTA                                                         */}
      {/* ================================================================= */}
      <section className="relative overflow-hidden bg-navy py-20 text-white sm:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -left-32 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
        </div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8"
        >
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Need a Plumber?{" "}
            <span className="text-primary">Call Now</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            Don&rsquo;t wait for the damage to get worse. OnCall Home Repairs
            connects you with a vetted, local plumber who turns up on time,
            quotes honestly, and guarantees the work.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="h-14 rounded-xl px-8 text-base font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-shadow"
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
              <a href="#locations">
                Or find your local plumber
                <ArrowRight className="ml-2 size-5" />
              </a>
            </Button>
          </div>

          <p className="mt-8 text-sm text-white/60">
            Every job is backed by our workmanship guarantee. If it&rsquo;s not
            right, we come back and fix it at no extra cost.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
