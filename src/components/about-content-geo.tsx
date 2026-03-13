"use client";

import { motion } from "framer-motion";
import {
  Phone,
  ArrowRight,
  ShieldCheck,
  Clock,
  Award,
  MessageCircle,
  Users,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/breadcrumb";
import {
  generateOrganizationSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema";
import type { SEOConfig } from "@/config/seo";

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

const values = [
  {
    icon: Clock,
    title: "We Answer When Others Don\u2019t",
    description:
      "Plumbing emergencies happen at the worst times. That\u2019s why our network operates around the clock \u2014 at 3am on a Tuesday, on Christmas morning, on a bank holiday Monday. When you call, a real person answers and gets a plumber moving toward your property.",
  },
  {
    icon: ShieldCheck,
    title: "We Quote Before We Start",
    description:
      "Every job begins with a clear, written quote. The price you\u2019re told is the price you pay. No vague estimates that mysteriously double once the plumber has taken your boiler apart. If the scope changes, you\u2019ll be told before any additional work is carried out.",
  },
  {
    icon: Users,
    title: "We Vet Every Plumber Personally",
    description:
      "Before any plumber joins the OnCall network, we verify their Gas Safe registration, check their qualifications, confirm their insurance, and review their work history. If they don\u2019t meet our standards, they don\u2019t join. It\u2019s that simple.",
  },
  {
    icon: Award,
    title: "We Guarantee the Work",
    description:
      "If something isn\u2019t right after a job is completed, we send a plumber back to fix it at no additional cost. Our workmanship guarantee exists because we stand behind the quality of every plumber in our network.",
  },
  {
    icon: MessageCircle,
    title: "We Keep You Informed",
    description:
      "From the moment you call to the moment the job is signed off, you\u2019ll know exactly what\u2019s happening. No radio silence, no wondering whether the plumber is actually coming. We update you at every stage.",
  },
];

interface AboutContentGeoProps {
  config: SEOConfig;
}

export function AboutContentGeo({ config }: AboutContentGeoProps) {
  const city = config.location.city;
  const county = config.location.county;
  const prefix = config.geoPrefix;
  const areas = config.serviceAreas;
  const firstThreeAreas = areas.slice(1, 4).join(", ");
  const allAreasExceptCity = areas.slice(1).join(", ");

  const orgSchema = generateOrganizationSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "About", href: `${prefix}/about` },
  ]);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Breadcrumb items={[{ name: "About", href: `${prefix}/about` }]} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-navy text-white">
        <img
          src="/images/hero-team.webp"
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
              About OnCall Home Repairs{" "}
              <span className="text-primary">
                &mdash; {city}&rsquo;s Trusted Plumber Network
              </span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="mt-6 text-lg leading-relaxed text-white/80"
            >
              OnCall Home Repairs exists because finding a reliable plumber in an
              emergency shouldn&rsquo;t be a gamble. We connect {city}{" "}
              homeowners with vetted, qualified plumbers who answer when others
              don&rsquo;t, quote honestly before they start, and guarantee every
              job they complete.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* OUR STORY */}
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
              Why OnCall Home Repairs Exists
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                The idea behind OnCall Home Repairs came from a frustration that
                most homeowners in {city} will recognise. A pipe bursts on a
                Sunday evening. You search for an emergency plumber. The first
                number goes to voicemail. The second can&rsquo;t come until
                Wednesday. The third quotes you over the phone without seeing
                the job, and you have no idea if the price is fair or if the
                plumber is even qualified.
              </p>
              <p>
                That experience is unacceptable when water is coming through
                your ceiling or your boiler has died in the middle of January.
                Homeowners deserve better &mdash; and the qualified, reliable
                plumbers in our area deserve to be found more easily.
              </p>
              <p>
                OnCall Home Repairs bridges that gap. We built a network of
                vetted, Gas Safe registered plumbers who serve {city},{" "}
                {firstThreeAreas}, and the surrounding {county} towns and
                villages. When you call us, we match you with an available
                plumber based on your location, the type of job, and the
                urgency. For emergencies, that happens immediately &mdash; day
                or night, weekends and bank holidays included.
              </p>
              <p>
                We don&rsquo;t employ plumbers on a payroll. Instead, we
                maintain a curated network of independent, qualified
                tradespeople whose credentials we verify before they join. This
                means you get the reliability of a managed service with the
                skill and accountability of an experienced local tradesperson.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* HOW OUR NETWORK WORKS */}
      <section className="bg-blue-soft py-16 sm:py-20">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              How Our Plumber Network Works
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                Every plumber who joins the OnCall Home Repairs network goes
                through a vetting process. We verify their Gas Safe
                registration, check their qualifications and trade
                certifications, confirm their public liability insurance, and
                review their track record. Plumbers who don&rsquo;t meet our
                standards aren&rsquo;t accepted into the network.
              </p>
              <p>
                Once a plumber is in the network, the standards don&rsquo;t
                stop. We require transparent, upfront quoting on every job. If a
                customer reports an issue with workmanship, we investigate and
                ensure it&rsquo;s resolved under our{" "}
                <a
                  href={`${prefix}/services`}
                  className="font-medium text-primary underline underline-offset-2 hover:text-primary/80"
                >
                  workmanship guarantee
                </a>
                . This accountability structure protects both the homeowner and
                the reputation of the plumbers in our network.
              </p>
              <p>
                The result is a service that works for everyone. Homeowners get
                access to qualified, reliable plumbers without the guesswork.
                Plumbers get a steady stream of jobs from customers who value
                quality work and fair pricing. And emergencies get handled
                quickly because our network always has capacity.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* VALUES */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <h2 className="text-center font-heading text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              The OnCall Home Repairs Difference
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                variants={fadeUp}
                custom={i}
                className="group rounded-2xl border border-border/60 bg-white p-6 transition-all hover:border-primary/30 hover:shadow-lg"
              >
                <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <value.icon className="size-6" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-navy">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="bg-blue-soft py-16 sm:py-20">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              Credentials and Standards
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                Every plumber and heating engineer in the OnCall Home Repairs
                network holds current Gas Safe registration &mdash; the legal
                requirement for anyone working on gas appliances in the United
                Kingdom. You can ask to see their Gas Safe ID card when they
                arrive at your property, and we encourage you to do so.
              </p>
              <p>
                Beyond Gas Safe registration, our plumbers carry full public
                liability insurance, hold relevant NVQ or City &amp; Guilds
                qualifications in plumbing and heating, and comply with current
                Building Regulations. For specialist work such as{" "}
                <a
                  href={`${prefix}/services/boiler-heating/boiler-installation`}
                  className="font-medium text-primary underline underline-offset-2 hover:text-primary/80"
                >
                  boiler installations
                </a>{" "}
                and{" "}
                <a
                  href={`${prefix}/services/boiler-heating/gas-safety-checks`}
                  className="font-medium text-primary underline underline-offset-2 hover:text-primary/80"
                >
                  gas safety checks
                </a>
                , we match you with engineers who hold the specific
                certifications required for the job.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* LOCAL COMMITMENT */}
      <section className="bg-white py-16 sm:py-20">
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
                Local to {city} and {county}
              </h2>
            </div>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                OnCall Home Repairs serves {city} and our network covers{" "}
                {allAreasExceptCity}. The plumbers in our network live and work
                in these communities. They know the local housing stock,
                understand the common plumbing issues in {county} properties,
                and can reach your home quickly.
              </p>
              <p>
                This isn&rsquo;t a national call centre routing your job to
                whoever is cheapest. When you contact OnCall Home Repairs,
                you&rsquo;re getting a local service backed by local
                tradespeople who care about their reputation in the area.
              </p>
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
            Work With OnCall Home Repairs
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            Whether you need an{" "}
            <a
              href={`${prefix}/services/emergency-plumbing/emergency-plumber`}
              className="font-medium text-primary underline underline-offset-2 hover:text-primary/80"
            >
              emergency plumber at 2am
            </a>
            , a{" "}
            <a
              href={`${prefix}/services/boiler-heating/boiler-repair`}
              className="font-medium text-primary underline underline-offset-2 hover:text-primary/80"
            >
              boiler repair
            </a>{" "}
            before the cold sets in, or a{" "}
            <a
              href={`${prefix}/services/drain-services/blocked-drains`}
              className="font-medium text-primary underline underline-offset-2 hover:text-primary/80"
            >
              blocked drain cleared
            </a>{" "}
            before it gets worse &mdash; call us and we&rsquo;ll connect you
            with a vetted, local plumber who gets the job done right.
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
                Get in Touch
                <ArrowRight className="ml-2 size-5" />
              </a>
            </Button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
