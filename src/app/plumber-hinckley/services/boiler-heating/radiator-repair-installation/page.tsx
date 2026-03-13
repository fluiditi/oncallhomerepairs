import { Metadata } from "next";
import { ServicePage } from "@/components/service-page";

export const metadata: Metadata = {
  title: "Radiator Repair Hinckley | OnCall Home Repairs",
  description:
    "Radiator repair and installation in Hinckley. Fix cold spots, leaks, and add new radiators. Gas Safe engineers. Call 0333 240 8428.",
  alternates: {
    canonical:
      "https://oncallhomerepairs.co.uk/plumber-hinckley/services/boiler-heating/radiator-repair-installation",
  },
};

export default function RadiatorRepairPage() {
  return (
    <ServicePage
      breadcrumbItems={[
        { name: "Services", href: "/plumber-hinckley/services" },
        { name: "Boiler & Heating", href: "/plumber-hinckley/services/boiler-heating" },
        {
          name: "Radiator Repair and Installation",
          href: "/plumber-hinckley/services/boiler-heating/radiator-repair-installation",
        },
      ]}
      h1="Radiator Repair and Installation in Hinckley"
      heroIntro={
        <p>
          Cold radiators, persistent leaks from valves, and rooms that never
          warm up properly are all signs that your radiators need attention.
          OnCall Home Repairs connects you with qualified heating engineers in
          Hinckley who can diagnose radiator faults, carry out repairs, and
          install new radiators &mdash; whether you need to replace a single
          unit or add radiators to rooms that currently lack heating.
        </p>
      }
      whatWhyHeading="Common Radiator Problems in Hinckley Homes"
      whatWhyContent={
        <>
          <p>
            A radiator that is cold at the bottom but warm at the top usually
            has sludge build-up inside. This black iron oxide sediment settles
            at the base of the radiator and blocks water circulation. A radiator
            that is cold at the top but warm at the bottom typically has trapped
            air and needs bleeding. And a radiator that does not heat up at all
            may have a stuck thermostatic valve or a circulation issue within
            the system.
          </p>
          <p>
            Leicestershire&rsquo;s hard water accelerates the build-up of
            limescale and sludge in central heating systems. Many homes in
            Hinckley, Burbage, and the surrounding area have heating systems
            that have not been flushed in years. When sludge accumulates, it
            reduces efficiency, puts strain on your{" "}
            <a
              href="/plumber-hinckley/services/boiler-heating/boiler-repair"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              boiler
            </a>
            , and can lead to premature component failure. In severe cases, a{" "}
            <a
              href="/plumber-hinckley/services/boiler-heating/power-flushing"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              power flush
            </a>{" "}
            is needed before radiator repairs can be effective.
          </p>
          <p>
            Our engineers handle everything from straightforward valve
            replacements and radiator bleeding to full radiator installations in
            new rooms. If you are extending your home, converting a garage, or
            adding heating to a conservatory, we can match you with an engineer
            who can size and fit the right radiators for the space.
          </p>
        </>
      }
      processHeading="How Radiator Repair and Installation Works"
      processSteps={[
        {
          title: "Describe the Issue",
          description:
            "Tell us which radiators are affected and what symptoms you have noticed. Cold spots, leaking valves, strange noises, or rooms that never reach temperature all point to different underlying problems. The more detail you can give, the better prepared the engineer will be.",
        },
        {
          title: "Diagnosis and Quote",
          description:
            "The engineer inspects the affected radiators, checks the valves, and assesses the overall system pressure and flow. They will explain what is causing the problem and provide a clear, written quote before starting any work.",
        },
        {
          title: "Repair or Installation",
          description:
            "Repairs may include replacing thermostatic radiator valves, fixing pinhole leaks, bleeding trapped air, or removing a radiator for internal cleaning. For new installations, the engineer will pipe in the new radiator, connect it to your existing system, and balance the flow across all radiators.",
        },
        {
          title: "System Balancing",
          description:
            "After any radiator work, the engineer will check and balance the system to ensure even heat distribution across every room. This prevents some radiators from overheating while others stay lukewarm.",
        },
      ]}
      relatedHeading="Related Heating Services"
      relatedServices={[
        {
          name: "Power Flushing",
          href: "/plumber-hinckley/services/boiler-heating/power-flushing",
        },
        {
          name: "Central Heating Repair",
          href: "/plumber-hinckley/services/boiler-heating/central-heating-repair",
        },
        {
          name: "Boiler Servicing",
          href: "/plumber-hinckley/services/boiler-heating/boiler-servicing",
        },
      ]}
      serviceAreasHeading="Radiator Repair Across Hinckley"
      serviceAreasContent={
        <p>
          Our heating engineers carry out radiator repairs and installations
          across Hinckley, Burbage, Earl Shilton, Barwell, Desford, Ratby,
          and the wider south-west Leicestershire area. Whether you need a
          quick valve replacement or a full radiator fit-out for a new
          extension, we can connect you with a qualified local engineer.
        </p>
      }
      faqs={[
        {
          question: "Why is my radiator cold at the bottom?",
          answer:
            "A radiator that is cold at the bottom but warm at the top almost always has sludge build-up. Iron oxide sediment settles at the base and restricts water flow. The radiator may need removing and flushing, or the entire system may benefit from a power flush to clear the sludge.",
        },
        {
          question: "How much does it cost to install a new radiator?",
          answer:
            "The cost of installing a new radiator depends on whether existing pipework reaches the location, the size of the radiator, and the type of valves fitted. A simple swap of a like-for-like radiator is at the lower end, while piping a radiator into a new room is more involved. Your engineer will provide an exact quote after assessing the job.",
        },
      ]}
      ctaHeading="Radiators Not Heating Properly? We Can Help."
      ctaContent={
        <p>
          Cold rooms and leaking radiators make winter miserable. Call OnCall
          Home Repairs and we will connect you with a qualified heating engineer
          in Hinckley who can get your radiators working as they should.
        </p>
      }
      serviceName="Radiator Repair and Installation"
      serviceSlug="radiator-repair-installation"
      serviceDescription="Radiator repair and installation in Hinckley. Fix cold spots, leaking valves, and add new radiators with qualified heating engineers."
      categorySlug="boiler-heating"
    />
  );
}
