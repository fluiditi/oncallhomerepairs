import { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { seoConfigLeeds } from "@/config/seo-leeds";

export const metadata: Metadata = {
  title: "Power Flushing Leeds | OnCall Home Repairs",
  description:
    "Power flushing in Leeds. Remove sludge and restore heating efficiency. Gas Safe engineers, transparent pricing. Call 0333 240 8428.",
  alternates: {
    canonical:
      "https://oncallhomerepairs.co.uk/plumber-leeds/services/boiler-heating/power-flushing",
  },
};

export default function PowerFlushingPage() {
  return (
    <ServicePage
      breadcrumbItems={[
        { name: "Services", href: "/plumber-leeds/services" },
        { name: "Boiler & Heating", href: "/plumber-leeds/services/boiler-heating" },
        {
          name: "Power Flushing",
          href: "/plumber-leeds/services/boiler-heating/power-flushing",
        },
      ]}
      h1="Power Flushing in Leeds"
      heroIntro={
        <p>
          If your radiators have cold patches, your boiler is making kettling
          noises, or your heating takes forever to warm up, sludge inside your
          central heating system is likely the cause. OnCall Home Repairs
          connects you with qualified engineers in Leeds who carry out
          professional power flushing to clear out the debris, restore
          circulation, and bring your heating back to full efficiency.
        </p>
      }
      whatWhyHeading="What Is Power Flushing and When Do You Need It?"
      whatWhyContent={
        <>
          <p>
            Power flushing is the process of circulating a high-flow, low-
            pressure chemical solution through your entire central heating
            system to dislodge and remove sludge, rust, and limescale. A
            specialised machine pushes the cleaning solution through the boiler,
            pipework, and every radiator, flushing out the contaminated water
            and replacing it with clean, treated water.
          </p>
          <p>
            Over time, the water in a central heating system reacts with the
            metal surfaces inside radiators and pipes, forming black iron oxide
            sludge. West Yorkshire&rsquo;s hard water makes this worse by adding
            limescale deposits. The sludge restricts water flow, causes cold
            spots on{" "}
            <a
              href="/plumber-leeds/services/boiler-heating/radiator-repair-installation"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              radiators
            </a>
            , and forces your{" "}
            <a
              href="/plumber-leeds/services/boiler-heating/boiler-repair"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              boiler
            </a>{" "}
            to work harder. Left untreated, it can block the heat exchanger and
            cause expensive breakdowns.
          </p>
          <p>
            A power flush is often recommended before a{" "}
            <a
              href="/plumber-leeds/services/boiler-heating/boiler-installation"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              new boiler installation
            </a>{" "}
            to protect the new unit from existing contamination. It is also
            recommended when radiators are cold at the bottom, when the boiler
            is noisy, or when the system has not been treated with inhibitor
            in several years.
          </p>
        </>
      }
      processHeading="How Power Flushing Works"
      processSteps={[
        {
          title: "System Assessment",
          description:
            "The engineer inspects your central heating system, tests the water for contamination levels, and checks each radiator for cold spots. This determines the severity of sludge build-up and whether a full power flush is the right course of action.",
        },
        {
          title: "Machine Connection",
          description:
            "The power flushing machine is connected to your central heating system, typically at a radiator or the boiler circulation pump. Each radiator is flushed individually while the machine reverses flow direction to dislodge deposits from every part of the system.",
        },
        {
          title: "Chemical Treatment and Flush",
          description:
            "A cleaning chemical breaks down sludge and limescale inside the system. The contaminated water is flushed out and replaced with fresh water until it runs clear. The engineer monitors the water quality throughout the process.",
        },
        {
          title: "Inhibitor and Completion",
          description:
            "Once the system is clean, a corrosion inhibitor is added to protect the metalwork and prevent sludge from forming again. The engineer checks every radiator for even heat distribution and confirms the system pressure is correct before leaving.",
        },
      ]}
      relatedHeading="Related Heating Services"
      relatedServices={[
        {
          name: "Radiator Repair and Installation",
          href: "/plumber-leeds/services/boiler-heating/radiator-repair-installation",
        },
        {
          name: "Boiler Installation",
          href: "/plumber-leeds/services/boiler-heating/boiler-installation",
        },
        {
          name: "Central Heating Repair",
          href: "/plumber-leeds/services/boiler-heating/central-heating-repair",
        },
      ]}
      serviceAreasHeading="Power Flushing Across Leeds"
      serviceAreasContent={
        <p>
          Our engineers carry out power flushing across Leeds, Headingley, Chapel Allerton,
          Roundhay, Otley, Guiseley, and surrounding
          villages. Most power flushes for an average-sized home can be
          completed in a single day. Larger properties or systems with severe
          contamination may require additional time.
        </p>
      }
      faqs={[
        {
          question: "How long does a power flush take?",
          answer:
            "For a typical three-bedroom home with six to eight radiators, a power flush takes between four and six hours. Larger systems or those with heavy contamination may take a full day. The engineer will give you a time estimate before starting the work.",
        },
        {
          question: "How often should a central heating system be power flushed?",
          answer:
            "Most systems only need a power flush once every five to ten years, provided a corrosion inhibitor is maintained in the system water. If you notice cold spots returning on radiators or your boiler becoming noisy again, it may be time for another flush.",
        },
        {
          question: "Will a power flush damage my radiators or boiler?",
          answer:
            "Power flushing uses low pressure and is safe for all standard central heating systems. In very old systems with severely corroded pipework, the cleaning process can occasionally reveal existing weaknesses. Your engineer will assess the condition of the system beforehand and advise if there are any risks.",
        },
      ]}
      ctaHeading="Heating Sluggish? A Power Flush Could Fix It."
      ctaContent={
        <p>
          Restore your central heating to full performance. Call OnCall Home
          Repairs and we will connect you with a qualified engineer in Leeds
          who can carry out a professional power flush on your system.
        </p>
      }
      serviceName="Power Flushing"
      serviceSlug="power-flushing"
      serviceDescription="Power flushing in Leeds. Remove sludge and limescale from your central heating system to restore efficiency and prevent boiler breakdowns."
      categorySlug="boiler-heating"
      geoPrefix="/plumber-leeds"
      serviceAreas={seoConfigLeeds.serviceAreas}
      geoConfig={seoConfigLeeds}
    />
  );
}
