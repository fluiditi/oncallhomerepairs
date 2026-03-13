import { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { seoConfigGlasgow } from "@/config/seo-glasgow";

export const metadata: Metadata = {
  title: "Tap Repair Glasgow | OnCall Home Repairs",
  description:
    "Tap repair and replacement in Glasgow. Fix dripping taps and install new ones. Vetted plumbers, transparent pricing. Call 0333 240 8428.",
  alternates: {
    canonical:
      "https://oncallhomerepairs.co.uk/plumber-glasgow/services/general-plumbing/tap-repair-replacement",
  },
};

export default function TapRepairPage() {
  return (
    <ServicePage
      breadcrumbItems={[
        { name: "Services", href: "/plumber-glasgow/services" },
        { name: "General Plumbing", href: "/plumber-glasgow/services/general-plumbing" },
        {
          name: "Tap Repair and Replacement",
          href: "/plumber-glasgow/services/general-plumbing/tap-repair-replacement",
        },
      ]}
      h1="Tap Repair and Replacement in Glasgow"
      heroIntro={
        <p>
          A dripping tap is more than an annoyance &mdash; it wastes water,
          increases your bill, and can stain sinks and basins over time. OnCall
          Home Repairs connects you with plumbers in Glasgow who can fix
          dripping, leaking, and stiff taps or install new ones to match your
          kitchen or bathroom. All work is quoted upfront with no hidden
          charges.
        </p>
      }
      whatWhyHeading="Why Taps Drip and When to Replace Them"
      whatWhyContent={
        <>
          <p>
            Most dripping taps are caused by a worn washer, a degraded ceramic
            disc, or a corroded valve seat inside the tap body. In
            Glasgow, the hard water supply accelerates wear on internal
            components by depositing limescale that grinds against seals and
            moving parts every time you turn the tap on and off.
          </p>
          <p>
            A simple washer replacement is often all that is needed to stop a
            traditional tap from dripping. Modern mixer taps and lever taps use
            ceramic disc cartridges that can also be replaced individually. If
            the tap body itself is corroded, cracked, or the design is
            discontinued and parts are unavailable, a full tap replacement is
            the more practical option.
          </p>
          <p>
            Our plumbers also handle tap installations as part of{" "}
            <a
              href="/plumber-glasgow/services/general-plumbing/kitchen-plumbing"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              kitchen plumbing
            </a>{" "}
            and{" "}
            <a
              href="/plumber-glasgow/services/general-plumbing/bathroom-plumbing"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              bathroom plumbing
            </a>{" "}
            projects. Whether you need a single tap changed or want new taps
            throughout the house, we can match you with a plumber who will
            ensure the installation is neat, leak-free, and properly connected
            to your hot and cold supply.
          </p>
        </>
      }
      processHeading="How Tap Repair Works"
      processSteps={[
        {
          title: "Identify the Tap and Fault",
          description:
            "Tell us which tap is affected and what it is doing: dripping from the spout, leaking from the base, stiff to turn, or not shutting off fully. If you know the tap brand and model, mention it so the plumber can bring the correct parts.",
        },
        {
          title: "Diagnosis and Quote",
          description:
            "The plumber isolates the water supply to the tap, disassembles it, and identifies the worn component. For washer-based taps, the fix is straightforward. For ceramic disc taps, the cartridge is checked and a replacement sourced if needed. You receive a quote before any work proceeds.",
        },
        {
          title: "Repair or Replacement",
          description:
            "Washers, O-rings, and cartridges are replaced. The tap is reassembled, the water turned back on, and the plumber checks for leaks at every connection point. If a full tap replacement is the better option, the plumber disconnects the old tap, fits the new one, and tests all connections.",
        },
      ]}
      relatedHeading="Related Services"
      relatedServices={[
        {
          name: "Kitchen Plumbing",
          href: "/plumber-glasgow/services/general-plumbing/kitchen-plumbing",
        },
        {
          name: "Bathroom Plumbing",
          href: "/plumber-glasgow/services/general-plumbing/bathroom-plumbing",
        },
        {
          name: "Leak Detection and Repair",
          href: "/plumber-glasgow/services/emergency-plumbing/leak-detection-repair",
        },
      ]}
      serviceAreasHeading="Tap Repair Across Glasgow"
      serviceAreasContent={
        <p>
          Our plumbers repair and replace taps across Glasgow, Partick, Hillhead,
          Govan, Anniesland, Springburn, and the surrounding area. Tap
          repairs are typically completed in under an hour. If you need a new
          tap supplied and fitted, the plumber can discuss options and pricing
          during the visit.
        </p>
      }
      faqs={[
        {
          question: "How much does it cost to fix a dripping tap?",
          answer:
            "A straightforward washer replacement on a traditional tap is one of the least expensive plumbing jobs. Ceramic disc cartridge replacements cost slightly more due to the part itself. A full tap replacement includes the cost of the new tap plus fitting. Your plumber will provide a clear, fixed quote before starting any work.",
        },
        {
          question: "Can I fix a dripping tap myself?",
          answer:
            "Replacing a washer on a traditional tap is a manageable DIY job if you know how to isolate the water supply and have basic tools. However, ceramic disc taps, mixer taps, and taps with concealed fittings can be more involved. If you are unsure or the drip returns after a DIY attempt, a plumber can diagnose and fix the underlying cause properly.",
        },
        {
          question: "Should I repair my old tap or replace it?",
          answer:
            "If the tap body is in good condition and the fault is limited to a washer or cartridge, repair is almost always the most cost-effective option. If the tap is visibly corroded, parts are no longer available, or you are updating your kitchen or bathroom, replacement makes more sense. Your plumber will advise based on the condition of the tap.",
        },
      ]}
      ctaHeading="Dripping Tap? Get It Fixed."
      ctaContent={
        <p>
          Stop the drip and stop the waste. Call OnCall Home Repairs and we
          will connect you with a plumber in Glasgow who can repair or
          replace your tap &mdash; usually within a single visit.
        </p>
      }
      serviceName="Tap Repair and Replacement"
      serviceSlug="tap-repair-replacement"
      serviceDescription="Tap repair and replacement in Glasgow. Fix dripping taps, replace worn components, and install new taps with vetted local plumbers."
      categorySlug="general-plumbing"
      geoPrefix="/plumber-glasgow"
      serviceAreas={seoConfigGlasgow.serviceAreas}
      geoConfig={seoConfigGlasgow}
    />
  );
}
