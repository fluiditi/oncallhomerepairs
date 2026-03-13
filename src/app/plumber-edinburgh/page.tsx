"use client";

import { motion } from "framer-motion";
import {
  Clock,
  ShieldCheck,
  Award,
  MessageCircle,
  MapPin,
  Phone,
  ArrowRight,
  ChevronRight,
  Star,
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
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { generateFAQSchema } from "@/lib/schema";

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
// FAQ data (used for both rendering and schema)
// ---------------------------------------------------------------------------

const faqs = [
  {
    question: "How much does a plumber cost in Edinburgh?",
    answer:
      "Plumbing costs in Edinburgh vary depending on the job. A straightforward tap repair might cost between \u00a380 and \u00a3150, while a full boiler installation typically ranges from \u00a31,500 to \u00a33,500. Emergency callouts outside normal hours may carry a higher rate. Every job through OnCall Home Repairs starts with a clear, upfront quote \u2014 so you\u2019ll always know the cost before work begins.",
    answerJsx: (
      <>
        Plumbing costs in Edinburgh vary depending on the job. A straightforward{" "}
        <a
          href="/plumber-edinburgh/services/general-plumbing/tap-repair-replacement"
          className="text-primary underline underline-offset-2 hover:text-primary/80"
        >
          tap repair
        </a>{" "}
        might cost between &pound;80 and &pound;150, while a full{" "}
        <a
          href="/plumber-edinburgh/services/boiler-heating/boiler-installation"
          className="text-primary underline underline-offset-2 hover:text-primary/80"
        >
          boiler installation
        </a>{" "}
        typically ranges from &pound;1,500 to &pound;3,500. Emergency callouts
        outside normal hours may carry a higher rate. Every job through OnCall
        Home Repairs starts with a clear, upfront quote &mdash; so you&rsquo;ll
        always know the cost before work begins.
      </>
    ),
  },
  {
    question: "Do you offer 24-hour emergency plumbing in Edinburgh?",
    answer:
      "Yes. Our network of emergency plumbers is available 24 hours a day, 7 days a week \u2014 including weekends and bank holidays. Whether it\u2019s a burst pipe at midnight or a boiler failure on Christmas morning, call 0333 240 8428 and we\u2019ll match you with an available plumber immediately.",
    answerJsx: (
      <>
        Yes. Our network of{" "}
        <a
          href="/plumber-edinburgh/services/emergency-plumbing"
          className="text-primary underline underline-offset-2 hover:text-primary/80"
        >
          emergency plumbers
        </a>{" "}
        is available 24 hours a day, 7 days a week &mdash; including weekends
        and bank holidays. Whether it&rsquo;s a burst pipe at midnight or a
        boiler failure on Christmas morning, call{" "}
        <a href="tel:03332408428" className="font-semibold text-primary">
          0333 240 8428
        </a>{" "}
        and we&rsquo;ll match you with an available plumber immediately.
      </>
    ),
  },
  {
    question: "Are your plumbers Gas Safe registered?",
    answer:
      "Every plumber and heating engineer in the OnCall Home Repairs network is Gas Safe registered, fully qualified, and insured. We verify all credentials before any plumber joins our network. You can ask to see their Gas Safe ID card when they arrive at your property.",
    answerJsx: null,
  },
  {
    question: "How quickly can a plumber get to my home in Edinburgh?",
    answer:
      "For emergencies in Edinburgh town centre and Leith, a plumber can typically reach your property within an hour. For the wider service area including Morningside, Stockbridge, and surrounding villages, response times are usually within 90 minutes. Non-emergency appointments are scheduled at a time that works for you.",
    answerJsx: null,
  },
  {
    question: "Do you provide a guarantee on plumbing work?",
    answer:
      "Yes. All work carried out through OnCall Home Repairs is covered by our workmanship guarantee. If something isn\u2019t right after the job is completed, we send a plumber back to put it right at no extra cost to you. Manufacturer warranties on parts and boilers are provided separately.",
    answerJsx: null,
  },
  {
    question: "What areas near Edinburgh do you cover?",
    answer:
      "We cover Edinburgh and 18 surrounding towns and villages: Leith, Morningside, Stockbridge, Bruntsfield, Marchmont, Portobello, Corstorphine, Gorgie, Dalry, Craigmillar, Liberton, Newington, Haymarket, Dean Village, Trinity, Leith, Morningside, and Stockbridge. If you\u2019re not sure whether your area is covered, call 0333 240 8428 and we\u2019ll confirm.",
    answerJsx: (
      <>
        We cover Edinburgh and 18 surrounding towns and villages: Leith, Morningside,
        Stockbridge, Bruntsfield, Marchmont, Portobello, Corstorphine,
        Gorgie, Dalry, Craigmillar, Liberton, Newington, Haymarket,
        Dean Village, Trinity, Leith, Morningside, and Stockbridge. If
        you&rsquo;re not sure whether your area is covered, call{" "}
        <a href="tel:03332408428" className="font-semibold text-primary">
          0333 240 8428
        </a>{" "}
        and we&rsquo;ll confirm.
      </>
    ),
  },
];

// ---------------------------------------------------------------------------
// Trust badges data
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
// Services data
// ---------------------------------------------------------------------------

const services = [
  {
    icon: Wrench,
    title: "Emergency Plumbing",
    description:
      "When water is coming through your ceiling or your boiler has died in January, you need a plumber who answers the phone at 2am. Our emergency plumbers respond around the clock, including weekends and bank holidays.",
    keyServices: [
      {
        name: "Emergency plumber callout",
        href: "/plumber-edinburgh/services/emergency-plumbing/emergency-plumber",
      },
      {
        name: "Burst pipe repair",
        href: "/plumber-edinburgh/services/emergency-plumbing/burst-pipe-repair",
      },
      {
        name: "Leak detection",
        href: "/plumber-edinburgh/services/emergency-plumbing/leak-detection-repair",
      },
    ],
    href: "/plumber-edinburgh/services/emergency-plumbing",
    linkText: "Learn more about emergency plumbing",
  },
  {
    icon: Flame,
    title: "Boiler & Heating",
    description:
      "A cold house is miserable. Whether your boiler has broken down, your radiators are cold at the bottom, or you need a full boiler replacement, our Gas Safe registered engineers handle it all.",
    keyServices: [
      { name: "Boiler repair", href: "/plumber-edinburgh/services/boiler-heating/boiler-repair" },
      {
        name: "Boiler installation",
        href: "/plumber-edinburgh/services/boiler-heating/boiler-installation",
      },
      {
        name: "Central heating repair",
        href: "/plumber-edinburgh/services/boiler-heating/central-heating-repair",
      },
    ],
    href: "/plumber-edinburgh/services/boiler-heating",
    linkText: "Learn more about boiler services",
  },
  {
    icon: Droplets,
    title: "Drain Services",
    description:
      "Blocked drains are unpleasant, disruptive, and a health hazard if left untreated. Our plumbers use professional equipment to clear blockages quickly.",
    keyServices: [
      {
        name: "Blocked drains",
        href: "/plumber-edinburgh/services/drain-services/blocked-drains",
      },
      {
        name: "CCTV drain survey",
        href: "/plumber-edinburgh/services/drain-services/cctv-drain-survey",
      },
    ],
    href: "/plumber-edinburgh/services/drain-services",
    linkText: "Learn more about drain services",
  },
  {
    icon: Bath,
    title: "General Plumbing",
    description:
      "From a dripping tap that\u2019s been driving you mad for months to a complete bathroom refit, our network handles the everyday plumbing jobs that keep your home running properly.",
    keyServices: [
      {
        name: "Bathroom plumbing",
        href: "/plumber-edinburgh/services/general-plumbing/bathroom-plumbing",
      },
      {
        name: "Tap repair",
        href: "/plumber-edinburgh/services/general-plumbing/tap-repair-replacement",
      },
    ],
    href: "/plumber-edinburgh/services/general-plumbing",
    linkText: "Learn more about general plumbing",
  },
];

// ---------------------------------------------------------------------------
// Why Choose Us data
// ---------------------------------------------------------------------------

const differentiators = [
  {
    icon: Clock,
    title: "24/7 Emergency Response",
    description:
      "Plumbing emergencies don\u2019t wait for office hours. Our network of Edinburgh plumbers is available around the clock \u2014 at 3am on a Wednesday, on Christmas Day, on a bank holiday Monday. When you call 0333 240 8428, a real person answers and gets a plumber moving toward your property.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent, Upfront Pricing",
    description:
      "You\u2019ll receive a clear quote before any work begins. No vague estimates, no charges that mysteriously double once the job is underway. The price you\u2019re quoted is the price you pay.",
  },
  {
    icon: ShieldCheck,
    title: "Vetted, Gas Safe Plumbers",
    description:
      "Every plumber in our network is qualified, Gas Safe registered, and fully insured. We verify credentials before anyone joins the network \u2014 because when someone enters your home, you need to know they\u2019re trustworthy and competent.",
    link: {
      text: "Gas Safe registered",
      href: "/plumber-edinburgh/services/boiler-heating/gas-safety-checks",
    },
  },
  {
    icon: Award,
    title: "Workmanship Guarantee",
    description:
      "If something isn\u2019t right after the job is done, we come back and put it right at no extra cost. That\u2019s not a marketing promise \u2014 it\u2019s how we operate.",
  },
  {
    icon: MessageCircle,
    title: "Constant Communication",
    description:
      "From the moment you call to the moment the job is signed off, you\u2019ll receive updates at every stage. No radio silence, no wondering whether the plumber is actually coming.",
  },
  {
    icon: MapPin,
    title: "Local to Edinburgh",
    description:
      "This isn\u2019t a faceless national company routing calls to whoever\u2019s cheapest. Our plumbers live and work in and around Edinburgh. They know the local housing stock, the common problems with Edinburgh properties, and they can reach your home quickly.",
  },
];

// ---------------------------------------------------------------------------
// How It Works data
// ---------------------------------------------------------------------------

const steps = [
  {
    number: "01",
    title: "Call or Request Online",
    description: (
      <>
        Ring{" "}
        <a href="tel:03332408428" className="font-semibold text-primary">
          0333 240 8428
        </a>{" "}
        or submit a request through our website. Tell us what&rsquo;s happened
        &mdash; whether it&rsquo;s an{" "}
        <a
          href="/plumber-edinburgh/services/emergency-plumbing"
          className="text-primary underline underline-offset-2 hover:text-primary/80"
        >
          emergency
        </a>{" "}
        or a planned job. We&rsquo;re available 24 hours a day, 7 days a week.
      </>
    ),
  },
  {
    number: "02",
    title: "We Match You With a Local Plumber",
    description:
      "Based on your location, the type of job, and availability, we match you with a vetted, qualified plumber from our Edinburgh network. For emergencies, this happens immediately.",
  },
  {
    number: "03",
    title: "Your Plumber Arrives and Quotes",
    description:
      "Your matched plumber arrives at your property, assesses the situation, and gives you a clear, upfront quote. No work begins until you\u2019ve agreed to the price.",
  },
  {
    number: "04",
    title: "Job Done, Guaranteed",
    description:
      "The work is completed to a professional standard. If anything isn\u2019t right, our workmanship guarantee means we come back and fix it at no extra cost.",
  },
];

// ---------------------------------------------------------------------------
// Testimonials data (placeholders)
// ---------------------------------------------------------------------------

const testimonials = [
  /* PLACEHOLDER: Replace with real reviews when available */
  {
    quote:
      "Called at 10pm on a Saturday with water pouring through our bathroom ceiling. They had a plumber at our door within the hour. He found the burst pipe, isolated it, and completed the repair that same night. Genuinely couldn\u2019t believe how fast and professional the whole experience was.",
    name: "Sarah T.",
    location: "Leith",
    rating: 5,
  },
  {
    quote:
      "What impressed me most was the pricing. The plumber walked through exactly what needed doing, gave me a fixed price, and stuck to it. No surprises on the bill, no add-ons I didn\u2019t ask for. After being stung by another company before, this was a massive relief.",
    name: "James W.",
    location: "Edinburgh",
    rating: 5,
  },
  {
    quote:
      "Our boiler packed in on one of the coldest nights of the year. OnCall had a Gas Safe engineer to us the next morning. He diagnosed the fault, ordered the part, and came back the same day to fit it. Kept us updated by text the entire time so we knew exactly what was happening.",
    name: "Rachel M.",
    location: "Morningside",
    rating: 5,
  },
];

// ---------------------------------------------------------------------------
// Service areas data
// ---------------------------------------------------------------------------

const serviceAreasList = [
  "Edinburgh",
  "Leith",
  "Morningside",
  "Stockbridge",
  "Bruntsfield",
  "Marchmont",
  "Portobello",
  "Corstorphine",
  "Gorgie",
  "Dalry",
  "Craigmillar",
  "Liberton",
  "Newington",
  "Haymarket",
  "Dean Village",
  "Trinity",
  "Leith",
  "Morningside",
  "Stockbridge",
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function Home() {
  const faqSchema = generateFAQSchema(
    faqs.map((f) => ({ question: f.question, answer: f.answer }))
  );

  return (
    <main>
      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ================================================================= */}
      {/* SECTION 1: HERO                                                   */}
      {/* ================================================================= */}
      <section className="relative overflow-hidden bg-navy text-white">
        {/* Hero background image */}
        <img
          src="/images/hero-plumber-kitchen.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        {/* Decorative diagonal */}
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
                Available 24/7
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="font-heading text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            >
              Emergency Plumber in Edinburgh{" "}
              <span className="text-primary">&mdash; Available 24/7</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl"
            >
              When a burst pipe, boiler breakdown, or blocked drain strikes your
              Edinburgh home, OnCall Home Repairs connects you with a vetted,
              local plumber &mdash; fast. No call centres, no waiting until
              Monday.
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
                <a href="/plumber-edinburgh/contact">
                  Get a Plumber Now
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
                <p className="font-heading text-sm font-semibold">{badge.title}</p>
                <p className="mt-0.5 text-xs text-white/60">{badge.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* SECTION 2: PROBLEM / PAIN                                         */}
      {/* ================================================================= */}
      <section className="bg-white py-20 sm:py-28">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Dealing With a Plumbing Emergency in Edinburgh?
            </h2>

            <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                A pipe bursts at 11pm on a Sunday night. Water is pooling across
                your kitchen floor. You grab your phone and start searching
                &mdash; but every plumber you call either doesn&rsquo;t answer,
                can&rsquo;t come until Tuesday, or won&rsquo;t give you a
                straight answer on price.
              </p>
              <p>
                If you live in Edinburgh, you know the frustration. Many of the
                town&rsquo;s older Victorian and Edwardian properties run on
                ageing pipework that wasn&rsquo;t built for modern demands.
                Edinburgh&rsquo;s hard water accelerates limescale build-up
                inside boilers and radiators. And when winter temperatures drop
                below freezing &mdash; something that happens more often than
                most of us would like &mdash; frozen pipes and boiler failures
                become an urgent reality, not just an inconvenience.
              </p>
              <p>
                The problem isn&rsquo;t just the leak or the blockage.
                It&rsquo;s the uncertainty. How much will it cost? Will they
                actually turn up? Will they bodge it and disappear?
              </p>
              <p>
                That&rsquo;s exactly why OnCall Home Repairs exists. We connect
                Edinburgh homeowners with{" "}
                <a
                  href="/plumber-edinburgh/about"
                  className="font-medium text-primary underline underline-offset-2 hover:text-primary/80"
                >
                  vetted, qualified plumbers
                </a>{" "}
                who answer when others don&rsquo;t &mdash; and who give you a
                clear price before they pick up a spanner.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================================================================= */}
      {/* SECTION 3: SERVICES OVERVIEW                                      */}
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
              Our Plumbing Services in Edinburgh
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Whether you&rsquo;re facing a midnight emergency or planning a
              bathroom renovation, our network of local plumbers covers every job
              &mdash; large or small.
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
                  <CardContent>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Key services
                    </p>
                    <ul className="space-y-1.5">
                      {service.keyServices.map((ks) => (
                        <li key={ks.href}>
                          <a
                            href={ks.href}
                            className="inline-flex items-center text-sm text-primary hover:underline"
                          >
                            <ChevronRight className="mr-1 size-3.5" />
                            {ks.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <a
                      href={service.href}
                      className="inline-flex items-center text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                    >
                      {service.linkText}
                      <ArrowRight className="ml-1.5 size-4 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <Button asChild variant="outline" size="lg" className="rounded-xl">
              <a href="/plumber-edinburgh/services">
                View All Services
                <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* SECTION 4: WHY CHOOSE US                                          */}
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
              Why Edinburgh Homeowners Choose OnCall Home Repairs
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {differentiators.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                custom={i}
                className="group relative rounded-2xl border border-border/60 bg-white p-6 transition-all hover:border-primary/30 hover:shadow-lg"
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
      {/* SECTION 5: HOW IT WORKS                                           */}
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
              How It Works
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
              Getting a qualified plumber to your Edinburgh home is simple.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="relative mt-16"
          >
            {/* Connecting line (desktop) */}
            <div className="absolute left-[calc(50%-1px)] top-0 hidden h-full w-0.5 bg-gradient-to-b from-primary/30 via-primary/20 to-transparent lg:block" />

            <div className="grid gap-12 lg:gap-16">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  variants={fadeUp}
                  custom={i}
                  className={`flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:gap-12 ${
                    i % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content side */}
                  <div className="flex-1 lg:text-left">
                    <div
                      className={`${
                        i % 2 === 1 ? "lg:text-right" : ""
                      }`}
                    >
                      <span className="font-heading text-sm font-bold uppercase tracking-widest text-primary">
                        Step {step.number}
                      </span>
                      <h3 className="mt-2 font-heading text-xl font-bold text-navy sm:text-2xl">
                        {step.title}
                      </h3>
                      <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Number circle */}
                  <div className="relative z-10 flex size-16 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-white shadow-lg shadow-primary/30">
                    {step.number}
                  </div>

                  {/* Empty spacer on the other side */}
                  <div className="hidden flex-1 lg:block" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* SECTION 6: TESTIMONIALS                                           */}
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
              What Our Edinburgh Customers Say
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-14 grid gap-8 md:grid-cols-3"
          >
            {/* PLACEHOLDER: Replace with real reviews when available */}
            {testimonials.map((t, i) => (
              <motion.div key={i} variants={fadeUp} custom={i}>
                <Card className="h-full border-0 bg-blue-soft shadow-none">
                  <CardContent className="pt-6">
                    {/* Stars */}
                    <div className="mb-4 flex gap-1">
                      {Array.from({ length: t.rating }).map((_, s) => (
                        <Star
                          key={s}
                          className="size-5 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <blockquote className="text-base leading-relaxed text-navy/80">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                  </CardContent>
                  <CardFooter>
                    <div>
                      <p className="font-heading text-sm font-semibold text-navy">
                        {t.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {t.location}
                      </p>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* SECTION 7: SERVICE AREAS                                          */}
      {/* ================================================================= */}
      <section className="bg-blue-soft py-20 sm:py-28">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-3xl">
            <div className="mb-6 flex items-center justify-center">
              <MapPin className="mr-3 size-8 text-primary" />
              <h2 className="font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Plumber Covering Edinburgh and Edinburgh
              </h2>
            </div>

            <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                OnCall Home Repairs connects homeowners across Edinburgh and the
                surrounding Edinburgh towns and villages with qualified
                local plumbers. Our network covers Leith, Morningside, and
                Stockbridge to the south, as well as the villages of Bruntsfield,
                Marchmont, and Portobello.
              </p>
              <p>
                To the west, we serve Corstorphine and Gorgie, and our
                coverage extends north to Dalry and Craigmillar. We also
                cover Liberton, Newington, Haymarket, Dean Village, Trinity,
                Leith, Morningside, and Stockbridge.
              </p>
              <p>
                Wherever you are in the Edinburgh area, a vetted plumber from our
                network can reach your home quickly. For emergencies, response
                times are fastest within Edinburgh town centre and Leith, with
                the wider villages typically covered within the same timeframe.
              </p>
            </div>

            {/* Area badges */}
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {serviceAreasList.map((area) => (
                <Badge
                  key={area}
                  variant="secondary"
                  className="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-navy shadow-sm"
                >
                  {area}
                </Badge>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 text-center">
              <p className="text-base font-medium text-navy sm:text-lg">
                Need a plumber in Edinburgh or any of these areas?
              </p>
              <Button
                asChild
                size="lg"
                className="mt-4 h-14 rounded-xl px-8 text-base font-semibold shadow-lg shadow-primary/30"
              >
                <a href="tel:03332408428">
                  <Phone className="mr-2 size-5" />
                  Call 0333 240 8428
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================================================================= */}
      {/* SECTION 8: FAQ                                                    */}
      {/* ================================================================= */}
      <section className="bg-white py-20 sm:py-28">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Plumber FAQ &mdash; Edinburgh
            </h2>

            <Accordion type="single" collapsible className="mt-12">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left font-heading text-base font-semibold text-navy hover:no-underline sm:text-lg">
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

      {/* ================================================================= */}
      {/* SECTION 9: FINAL CTA                                              */}
      {/* ================================================================= */}
      <section className="relative overflow-hidden bg-navy py-20 text-white sm:py-28">
        {/* Decorative */}
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
            Need a Plumber in Edinburgh?{" "}
            <span className="text-primary">Call Now</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            Don&rsquo;t wait for the damage to get worse. Whether it&rsquo;s an
            emergency at 3am or a job you&rsquo;ve been putting off for months,
            OnCall Home Repairs will match you with a vetted, local plumber who
            turns up on time, quotes honestly, and guarantees the work.
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
              <a href="/plumber-edinburgh/contact">
                Or request a callback
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
