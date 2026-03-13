import { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { seoConfigBirmingham } from "@/config/seo-birmingham";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Boiler Repair Birmingham | OnCall Home Repairs",
  description:
    "Boiler repair in Birmingham by Gas Safe engineers. Same-day repairs, upfront quotes. Available 24/7. Call 0333 240 8428.",
  alternates: {
    canonical:
      "https://oncallhomerepairs.co.uk/plumber-birmingham/services/boiler-heating/boiler-repair",
  },
};

export default function BoilerRepairPage() {
  return (
    <ServicePage
      breadcrumbItems={[
        { name: "Services", href: "/plumber-birmingham/services" },
        { name: "Boiler & Heating", href: "/plumber-birmingham/services/boiler-heating" },
        {
          name: "Boiler Repair",
          href: "/plumber-birmingham/services/boiler-heating/boiler-repair",
        },
      ]}
      h1="Boiler Repair in Birmingham"
      heroIntro={
        <p>
          A broken boiler means no heating and no hot water — two things no
          household can do without for long. OnCall Home Repairs connects you
          with Gas Safe registered heating engineers in Birmingham who diagnose
          and repair boiler faults quickly and safely. Whether your boiler has
          stopped firing, is making unusual noises, is losing pressure, or is
          showing an error code, we will match you with an engineer who can get
          it working again. Available 24/7 for emergency breakdowns.
        </p>
      }
      whatWhyHeading="Common Boiler Problems and When to Call an Engineer"
      whatWhyContent={
        <>
          <p>
            Boilers are complex appliances that combine water, gas, and
            electronics. When something goes wrong, the symptoms can be
            confusing. You might find your radiators are lukewarm but the hot
            water is fine. The boiler might fire up and then shut down after a
            few seconds — a fault known as lockout. You could notice a drop in
            boiler pressure on the gauge, or hear banging, gurgling, or
            whistling sounds from the unit. Some faults trigger an error code on
            the display panel, while others give no obvious clue at all.
          </p>
          <p>
            Whatever the symptom, the underlying cause needs to be identified by
            a qualified Gas Safe engineer. Gas appliance repair is not a job for
            a general handyperson or a DIY attempt — it is a legal requirement
            that only Gas Safe registered engineers work on gas boilers. The
            engineers in our network hold current Gas Safe registration,
            specialise in domestic boiler repair, and carry common replacement
            parts so that many faults can be resolved in a single visit.
          </p>
          <p>
            Typical repairs include replacing faulty diverter valves, fan
            assemblies, printed circuit boards (PCBs), thermistors, and
            pressure relief valves. If your boiler is beyond economical repair,
            your engineer will explain why and discuss{" "}
            <Link
              href="/plumber-birmingham/services/boiler-heating/boiler-installation"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              boiler replacement options
            </Link>
            . For issues affecting your wider{" "}
            <Link
              href="/plumber-birmingham/services/boiler-heating/central-heating-repair"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              central heating system
            </Link>{" "}
            — such as cold radiators or pump failures — we can help with that
            too.
          </p>
        </>
      }
      processHeading="How Boiler Repair Works"
      processSteps={[
        {
          title: "Describe the Fault",
          description: (
            <p>
              Call 0333 240 8428 and tell us what your boiler is doing — or not
              doing. Is it showing an error code? Has it lost pressure? Is there
              no hot water, no heating, or both? These details help us match you
              with the right engineer.
            </p>
          ),
        },
        {
          title: "Gas Safe Engineer Dispatched",
          description: (
            <p>
              We connect you with a Gas Safe registered heating engineer near
              Birmingham. For emergency breakdowns, engineers are available 24/7.
              For non-urgent faults, we can arrange a convenient appointment
              time.
            </p>
          ),
        },
        {
          title: "Diagnosis on Site",
          description: (
            <p>
              Your engineer inspects the boiler, runs diagnostic checks, and
              identifies the fault. They explain the problem in plain English and
              give you a clear, upfront quote for the repair. No work starts
              without your approval.
            </p>
          ),
        },
        {
          title: "Repair with Quality Parts",
          description: (
            <p>
              The engineer carries out the repair using manufacturer-approved or
              equivalent-quality parts. Once the repair is complete, they test
              the boiler thoroughly — checking ignition, pressure, flue output,
              and safety controls before handing it back to you.
            </p>
          ),
        },
      ]}
      benefitsHeading="Why Choose OnCall for Boiler Repair"
      benefits={[
        {
          title: "Gas Safe Registered Engineers",
          description: (
            <p>
              Every engineer in our network holds current Gas Safe registration.
              Your boiler is in safe, qualified hands — always.
            </p>
          ),
        },
        {
          title: "Same-Day Repairs When Possible",
          description: (
            <p>
              Many boiler faults can be diagnosed and fixed during the first
              visit. Our engineers carry common parts to minimise waiting time.
            </p>
          ),
        },
        {
          title: "All Major Boiler Brands Covered",
          description: (
            <p>
              Worcester Bosch, Vaillant, Baxi, Ideal, Glow-worm, Viessmann —
              our engineers are experienced with all major brands found in
              Birmingham homes.
            </p>
          ),
        },
        {
          title: "Transparent Pricing",
          description: (
            <p>
              You receive a fixed quote after diagnosis. The price you agree to
              is the price you pay. No hourly rate surprises or extra charges
              for parts.
            </p>
          ),
        },
        {
          title: "24/7 Emergency Availability",
          description: (
            <p>
              Boiler breakdowns in winter cannot wait. Our network is available
              around the clock, including evenings, weekends, and bank holidays.
            </p>
          ),
        },
        {
          title: "Workmanship Guarantee",
          description: (
            <p>
              All repair work is guaranteed. If the same fault returns after
              the repair, we send an engineer back to resolve it at no
              additional cost.
            </p>
          ),
        },
      ]}
      relatedHeading="Related Heating Services"
      relatedServices={[
        {
          name: "Boiler Servicing",
          href: "/plumber-birmingham/services/boiler-heating/boiler-servicing",
        },
        {
          name: "Central Heating Repair",
          href: "/plumber-birmingham/services/boiler-heating/central-heating-repair",
        },
        {
          name: "Boiler Installation",
          href: "/plumber-birmingham/services/boiler-heating/boiler-installation",
        },
        {
          name: "Emergency Plumber",
          href: "/plumber-birmingham/services/emergency-plumbing/emergency-plumber",
        },
      ]}
      serviceAreasHeading="Boiler Repair Across Birmingham"
      serviceAreasContent={
        <p>
          Our network of Gas Safe heating engineers covers Birmingham and the
          surrounding area. Whether you live in Edgbaston, Moseley, Kings Heath,
          or one of the smaller villages like Sutton Coldfield or Solihull, we
          can connect you with a local engineer who can attend quickly. Our
          engineers are familiar with the boiler types commonly installed in
          properties across West Midlands.
        </p>
      }
      faqs={[
        {
          question: "What are the most common boiler faults?",
          answer:
            "The most frequent boiler issues include loss of pressure (often caused by a small leak in the system or a faulty pressure relief valve), the boiler locking out and displaying an error code, no hot water despite the heating working (usually a faulty diverter valve), strange banging or kettling noises (caused by limescale build-up on the heat exchanger), and the pilot light going out on older models.",
          answerJsx: (
            <p>
              The most frequent boiler issues include loss of pressure (often
              caused by a small leak in the system or a faulty pressure relief
              valve), the boiler locking out and displaying an error code, no
              hot water despite the heating working (usually a faulty diverter
              valve), strange banging or kettling noises (caused by limescale
              build-up on the heat exchanger), and the pilot light going out on
              older models.
            </p>
          ),
        },
        {
          question: "How much does a boiler repair typically cost?",
          answer:
            "Boiler repair costs depend on the specific fault and the parts required. A simple fix like repressurisung the system or replacing a sensor may be relatively inexpensive. Replacing a PCB, heat exchanger, or fan motor costs more. Your engineer provides a clear quote after diagnosing the fault, so you know the full cost before agreeing to proceed.",
          answerJsx: (
            <p>
              Boiler repair costs depend on the specific fault and the parts
              required. A simple fix like repressurising the system or replacing
              a sensor may be relatively inexpensive. Replacing a PCB, heat
              exchanger, or fan motor costs more. Your engineer provides a clear
              quote after diagnosing the fault, so you know the full cost before
              agreeing to proceed.
            </p>
          ),
        },
        {
          question: "Should I repair my boiler or replace it?",
          answer:
            "As a general guide, if your boiler is over 10-15 years old and the repair cost is more than a third of a new boiler, replacement is often the better investment. Newer boilers are significantly more energy-efficient, which can lower your gas bills. Your engineer will give you an honest assessment and never push a replacement if a repair makes more sense.",
          answerJsx: (
            <p>
              As a general guide, if your boiler is over 10-15 years old and
              the repair cost is more than a third of a new boiler, replacement
              is often the better investment. Newer boilers are significantly
              more energy-efficient, which can lower your gas bills. Your
              engineer will give you an honest assessment and never push a{" "}
              <Link
                href="/plumber-birmingham/services/boiler-heating/boiler-installation"
                className="text-primary underline underline-offset-2 hover:text-primary/80"
              >
                replacement
              </Link>{" "}
              if a repair makes more sense.
            </p>
          ),
        },
        {
          question: "How long does a typical boiler repair take?",
          answer:
            "Most boiler repairs are completed within one to three hours, depending on the fault. Common issues like a faulty thermostat or pressure sensor can be fixed in under an hour. More involved repairs, such as replacing a heat exchanger, may take longer. If a part needs to be ordered, your engineer will arrange a return visit as soon as it arrives.",
          answerJsx: (
            <p>
              Most boiler repairs are completed within one to three hours,
              depending on the fault. Common issues like a faulty thermostat or
              pressure sensor can be fixed in under an hour. More involved
              repairs, such as replacing a heat exchanger, may take longer. If a
              part needs to be ordered, your engineer will arrange a return visit
              as soon as it arrives.
            </p>
          ),
        },
      ]}
      ctaHeading="Boiler Broken? Get It Fixed Today"
      ctaContent={
        <p>
          Call OnCall Home Repairs on 0333 240 8428 and we will connect you with
          a Gas Safe registered engineer in Birmingham. Upfront pricing,
          guaranteed workmanship, and same-day repairs where possible. Available
          24/7 for emergency breakdowns.
        </p>
      }
      serviceName="Boiler Repair"
      serviceSlug="boiler-repair"
      serviceDescription="Expert boiler repair in Birmingham. Gas Safe registered engineers available 24/7."
      categorySlug="boiler-heating"
      geoPrefix="/plumber-birmingham"
      serviceAreas={seoConfigBirmingham.serviceAreas}
      geoConfig={seoConfigBirmingham}
    />
  );
}
