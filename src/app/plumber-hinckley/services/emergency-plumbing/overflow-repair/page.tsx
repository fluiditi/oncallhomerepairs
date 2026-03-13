import { Metadata } from "next";
import { ServicePage } from "@/components/service-page";

export const metadata: Metadata = {
  title: "Overflow Repair Hinckley | OnCall Home Repairs",
  description:
    "Overflow pipe repair in Hinckley. Stop water leaks from tanks and cisterns. Transparent pricing. Call 0333 240 8428.",
  alternates: {
    canonical:
      "https://oncallhomerepairs.co.uk/plumber-hinckley/services/emergency-plumbing/overflow-repair",
  },
};

export default function OverflowRepairPage() {
  return (
    <ServicePage
      breadcrumbItems={[
        { name: "Services", href: "/plumber-hinckley/services" },
        { name: "Emergency Plumbing", href: "/plumber-hinckley/services/emergency-plumbing" },
        {
          name: "Overflow Repair",
          href: "/plumber-hinckley/services/emergency-plumbing/overflow-repair",
        },
      ]}
      h1="Overflow Pipe Repair in Hinckley"
      heroIntro={
        <p>
          Water dripping or streaming from an overflow pipe on the outside of
          your house is a clear sign that something inside is not working
          correctly. Whether it is a faulty ball valve in your loft tank, a
          failing toilet cistern, or a pressure issue in your heating system,
          OnCall Home Repairs connects you with vetted Hinckley plumbers who
          can diagnose and fix the cause quickly &mdash; before damp and water
          damage set in.
        </p>
      }
      whatWhyHeading="What Causes an Overflow and Why You Should Act Fast"
      whatWhyContent={
        <>
          <p>
            An overflow pipe is a safety outlet that allows excess water to
            escape rather than flood your property. If water is running from
            it continuously or frequently, it means a valve or float mechanism
            inside your home has failed. The most common causes are a stuck
            ball valve in the cold water tank, a faulty fill valve in the
            toilet cistern, or an expansion issue in your{" "}
            <a
              href="/plumber-hinckley/services/boiler-heating/boiler-repair"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              boiler and heating system
            </a>
            .
          </p>
          <p>
            Left unattended, a running overflow wastes water, increases your
            bills, and can cause damp patches on exterior walls that lead to
            mould growth and masonry damage. In winter, the constant trickle
            of water from an overflow can freeze on the wall surface and cause
            further problems.
          </p>
          <p>
            Our plumbers will trace the overflow back to its source, identify
            the faulty component, and carry out the repair or replacement. If
            the issue relates to your{" "}
            <a
              href="/plumber-hinckley/services/drain-services/toilet-repair"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              toilet cistern
            </a>
            , loft tank, or{" "}
            <a
              href="/plumber-hinckley/services/boiler-heating/central-heating-repair"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              central heating system
            </a>
            , they have the experience to deal with all three.
          </p>
        </>
      }
      processHeading="How Overflow Repair Works"
      processSteps={[
        {
          title: "Identify the Source",
          description:
            "Your plumber will determine which overflow pipe is running and trace it back to the tank, cistern, or system it serves. This is the critical first step, as different overflows have different causes.",
        },
        {
          title: "Diagnose the Fault",
          description:
            "Common faults include a stuck or worn ball valve, a cracked float, a failed fill valve in a toilet cistern, or excessive pressure in a sealed heating system. The plumber will inspect the mechanism and explain the problem clearly.",
        },
        {
          title: "Repair and Test",
          description:
            "The faulty component is repaired or replaced. Ball valves and floats are replaced with new parts, fill valves are swapped out, or pressure relief valves are adjusted. The system is tested to confirm the overflow has stopped completely before the plumber leaves.",
        },
      ]}
      relatedHeading="Related Services"
      relatedServices={[
        {
          name: "Toilet Repair",
          href: "/plumber-hinckley/services/drain-services/toilet-repair",
        },
        {
          name: "Boiler Repair",
          href: "/plumber-hinckley/services/boiler-heating/boiler-repair",
        },
        {
          name: "Leak Detection and Repair",
          href: "/plumber-hinckley/services/emergency-plumbing/leak-detection-repair",
        },
      ]}
      serviceAreasHeading="Overflow Repair Across Hinckley"
      serviceAreasContent={
        <p>
          Our plumbers carry out overflow repairs across Hinckley, Burbage,
          Earl Shilton, Barwell, Stoke Golding, and the wider Leicestershire
          area. Overflow problems are common in properties with loft-based cold
          water tanks, which are still found in many older homes throughout the
          region.
        </p>
      }
      faqs={[
        {
          question: "Why is water constantly dripping from my overflow pipe?",
          answer:
            "The most likely cause is a faulty ball valve or float inside the water tank or cistern connected to that overflow. When the valve fails to shut off the water supply as the tank fills, excess water escapes through the overflow pipe. A plumber can replace the valve or float to stop the dripping.",
        },
        {
          question: "Is an overflowing pipe an emergency?",
          answer:
            "A slow drip from an overflow is not usually an immediate emergency, but it should be addressed within a few days to prevent water waste and damp damage. If the overflow is running heavily or continuously, it may indicate a more serious fault and should be looked at as soon as possible.",
        },
      ]}
      ctaHeading="Overflow Running? Get It Sorted."
      ctaContent={
        <p>
          Stop wasting water and prevent damp damage to your Hinckley home.
          Call OnCall Home Repairs and we will connect you with a vetted plumber
          who can trace and fix the cause of your overflowing pipe.
        </p>
      }
      serviceName="Overflow Repair"
      serviceSlug="overflow-repair"
      serviceDescription="Overflow pipe repair in Hinckley. Diagnose and fix faulty ball valves, cisterns, and tank overflows with vetted local plumbers."
      categorySlug="emergency-plumbing"
    />
  );
}
