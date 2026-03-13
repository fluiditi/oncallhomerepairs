import { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { seoConfigManchester } from "@/config/seo-manchester";

export const metadata: Metadata = {
  title: "Pipe Replacement Manchester | OnCall Home Repairs",
  description:
    "Pipe replacement in Manchester. Copper, plastic, and lead pipe upgrades by vetted plumbers. Transparent pricing. Call 0333 240 8428.",
  alternates: {
    canonical:
      "https://oncallhomerepairs.co.uk/plumber-manchester/services/general-plumbing/pipe-replacement",
  },
};

export default function PipeReplacementPage() {
  return (
    <ServicePage
      breadcrumbItems={[
        { name: "Services", href: "/plumber-manchester/services" },
        { name: "General Plumbing", href: "/plumber-manchester/services/general-plumbing" },
        {
          name: "Pipe Replacement",
          href: "/plumber-manchester/services/general-plumbing/pipe-replacement",
        },
      ]}
      h1="Pipe Replacement in Manchester"
      heroIntro={
        <p>
          Ageing, corroded, or damaged pipework can cause leaks, reduce water
          pressure, and contaminate your water supply. OnCall Home Repairs
          connects you with qualified plumbers in Manchester who replace old
          copper, plastic, and lead pipes with modern materials that will last
          for decades. Whether you need a single section replaced after a
          repair or a full re-pipe of your property, we can match you with
          the right plumber for the job.
        </p>
      }
      whatWhyHeading="When Pipe Replacement Is Needed"
      whatWhyContent={
        <>
          <p>
            Pipes do not last forever. Copper pipes can develop pinhole leaks
            from internal corrosion, particularly in areas with aggressive
            water chemistry. Lead pipes &mdash; still present in many pre-1970s
            Manchester properties &mdash; pose a health risk and should be
            replaced with modern alternatives. Older push-fit plastic
            connections can weaken over time and begin to weep, especially in
            hot water runs where the material expands and contracts repeatedly.
          </p>
          <p>
            Common signs that you need pipe replacement include persistent
            damp patches on walls or ceilings, reduced water pressure at taps,
            discoloured water when taps are first turned on, and visible green
            verdigris or white limescale deposits on exposed pipework. If you
            have experienced a{" "}
            <a
              href="/plumber-manchester/services/emergency-plumbing/burst-pipe-repair"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              burst pipe
            </a>{" "}
            and the surrounding pipework is in poor condition, your plumber may
            recommend replacing a longer section rather than patching a single
            point of failure.
          </p>
          <p>
            Our plumbers work with modern copper, barrier polyethylene, and
            push-fit systems. They can replace individual sections, upgrade
            supply pipes from the{" "}
            <a
              href="/plumber-manchester/services/emergency-plumbing/stopcock-repair"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              stopcock
            </a>{" "}
            to the kitchen and bathroom, or carry out full re-pipes where the
            existing system is beyond economical repair. For heating pipework,
            they coordinate with the{" "}
            <a
              href="/plumber-manchester/services/boiler-heating/central-heating-repair"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              central heating system
            </a>{" "}
            to ensure everything is reconnected and tested as a complete
            system.
          </p>
        </>
      }
      processHeading="How Pipe Replacement Works"
      processSteps={[
        {
          title: "Assessment",
          description:
            "The plumber inspects the existing pipework, identifies the material and condition of the pipes, and determines which sections need replacing. They check for hidden leaks using pressure testing and visual inspection behind access panels where available.",
        },
        {
          title: "Plan and Quote",
          description:
            "Based on the assessment, the plumber maps out the pipe runs that need replacing, selects the most appropriate material for each section, and provides a clear, itemised quote. For larger re-pipe jobs, this may include a brief site survey with measurements.",
        },
        {
          title: "Replacement",
          description:
            "The water supply is isolated, old pipes are removed, and new pipework is installed. Connections to fixtures, appliances, and the boiler are made and tested under pressure. The plumber checks every joint for leaks and confirms normal water flow to all outlets before leaving.",
        },
      ]}
      relatedHeading="Related Services"
      relatedServices={[
        {
          name: "Burst Pipe Repair",
          href: "/plumber-manchester/services/emergency-plumbing/burst-pipe-repair",
        },
        {
          name: "Stopcock Repair",
          href: "/plumber-manchester/services/emergency-plumbing/stopcock-repair",
        },
        {
          name: "Bathroom Plumbing",
          href: "/plumber-manchester/services/general-plumbing/bathroom-plumbing",
        },
      ]}
      serviceAreasHeading="Pipe Replacement Across Manchester"
      serviceAreasContent={
        <p>
          Our plumbers replace pipework in properties across Manchester, Didsbury,
          Chorlton, Salford, Trafford, Ashton-under-Lyne, and all surrounding areas.
          Lead pipe replacement is particularly relevant for older properties in
          the town centre and established residential streets built before the
          1970s. If you are unsure what type of pipes you have, a plumber can
          identify them during a visit.
        </p>
      }
      faqs={[
        {
          question: "Do I still have lead pipes?",
          answer:
            "If your home was built before 1970, there is a reasonable chance that some of the original lead supply pipes are still in place. Lead pipes are dull grey, soft enough to scratch with a coin, and slightly swollen at the joints. If you are unsure, a plumber can check during a routine visit and advise on whether replacement is recommended.",
        },
        {
          question: "How much does a full re-pipe cost?",
          answer:
            "The cost of re-piping a property depends on the size of the house, the number of fixtures served, and how accessible the existing pipework is. A small terraced house will cost significantly less than a large detached property. Your plumber will provide a detailed, itemised quote after assessing the specific requirements of your home.",
        },
        {
          question: "How long does pipe replacement take?",
          answer:
            "Replacing a single short section of pipe can be done in under an hour. Upgrading the full supply pipe from the stopcock to the kitchen takes approximately half a day. A complete re-pipe of a three-bedroom house typically takes two to three days, depending on the layout and accessibility of the pipe runs.",
        },
      ]}
      ctaHeading="Old Pipes Causing Problems? Replace Them."
      ctaContent={
        <p>
          Stop patching failing pipework and invest in a long-term fix. Call
          OnCall Home Repairs and we will connect you with a qualified plumber
          in Manchester who can assess your pipes and carry out replacements
          that last.
        </p>
      }
      serviceName="Pipe Replacement"
      serviceSlug="pipe-replacement"
      serviceDescription="Pipe replacement in Manchester. Copper, plastic, and lead pipe upgrades for homes and businesses by vetted local plumbers."
      categorySlug="general-plumbing"
      geoPrefix="/plumber-manchester"
      serviceAreas={seoConfigManchester.serviceAreas}
      geoConfig={seoConfigManchester}
    />
  );
}
