import { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { seoConfigNottingham } from "@/config/seo-nottingham";

export const metadata: Metadata = {
  title: "Boiler Servicing Nottingham | OnCall Home Repairs",
  description:
    "Annual boiler servicing in Nottingham. Keep your warranty valid and your boiler running efficiently. Gas Safe engineers. Call 0333 240 8428.",
  alternates: {
    canonical:
      "https://oncallhomerepairs.co.uk/plumber-nottingham/services/boiler-heating/boiler-servicing",
  },
};

export default function BoilerServicingPage() {
  return (
    <ServicePage
      breadcrumbItems={[
        { name: "Services", href: "/plumber-nottingham/services" },
        { name: "Boiler & Heating", href: "/plumber-nottingham/services/boiler-heating" },
        {
          name: "Boiler Servicing",
          href: "/plumber-nottingham/services/boiler-heating/boiler-servicing",
        },
      ]}
      h1="Boiler Servicing in Nottingham"
      heroIntro={
        <p>
          An annual boiler service keeps your heating system running safely and
          efficiently, maintains your manufacturer warranty, and catches small
          faults before they become expensive breakdowns. OnCall Home Repairs
          connects you with Gas Safe registered engineers in Nottingham who carry
          out thorough boiler services on all major brands &mdash; Worcester
          Bosch, Vaillant, Baxi, Ideal, and more.
        </p>
      }
      whatWhyHeading="Why Annual Boiler Servicing Is Worth It"
      whatWhyContent={
        <>
          <p>
            Your boiler is the hardest-working appliance in your home. It fires
            up thousands of times a year to heat your water and keep your
            radiators warm. Over time, internal components wear, seals degrade,
            and small amounts of debris accumulate inside the heat exchanger.
            Without regular servicing, these issues build up until they trigger
            a breakdown &mdash; usually at the worst possible time.
          </p>
          <p>
            Most boiler manufacturers require an annual service to keep the
            warranty valid. If your boiler develops a fault and you cannot
            provide proof of servicing, the manufacturer may refuse to cover the
            repair. A service certificate from a Gas Safe registered engineer
            protects you against this.
          </p>
          <p>
            Beyond warranty protection, a well-serviced boiler uses less gas.
            An inefficient boiler can add noticeable amounts to your energy
            bills each quarter. If your engineer identifies that your boiler is
            nearing end of life, they can advise on{" "}
            <a
              href="/plumber-nottingham/services/boiler-heating/boiler-installation"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              boiler replacement options
            </a>{" "}
            that could save you money long-term. And if your heating system
            feels sluggish despite servicing, a{" "}
            <a
              href="/plumber-nottingham/services/boiler-heating/power-flushing"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              power flush
            </a>{" "}
            may be the next step to restore full performance.
          </p>
        </>
      }
      processHeading="What Happens During a Boiler Service"
      processSteps={[
        {
          title: "Visual Inspection",
          description:
            "The engineer checks the boiler casing, flue, and surrounding pipework for signs of damage, corrosion, or leaks. They inspect the condensate pipe and drainage, and check that ventilation around the boiler meets current regulations.",
        },
        {
          title: "Internal Component Check",
          description:
            "The boiler is opened and internal components are inspected. This includes the burner, heat exchanger, ignition system, fan, and all seals. Worn or degraded parts are flagged and replacements discussed with you before any work is carried out.",
        },
        {
          title: "Gas Pressure and Flue Analysis",
          description:
            "The engineer measures gas pressure at the inlet and checks the boiler operating pressure. A flue gas analysis is performed using a calibrated analyser to confirm the boiler is burning gas cleanly and efficiently. Any readings outside safe parameters are addressed immediately.",
        },
        {
          title: "Service Record and Advice",
          description:
            "You receive a written service record confirming the date, findings, and any recommendations. If the engineer spots issues that need watching or addressing, they will explain them clearly and provide a quote for any follow-up work.",
        },
      ]}
      relatedHeading="Related Boiler Services"
      relatedServices={[
        {
          name: "Boiler Repair",
          href: "/plumber-nottingham/services/boiler-heating/boiler-repair",
        },
        {
          name: "Gas Safety Checks",
          href: "/plumber-nottingham/services/boiler-heating/gas-safety-checks",
        },
        {
          name: "Central Heating Repair",
          href: "/plumber-nottingham/services/boiler-heating/central-heating-repair",
        },
      ]}
      serviceAreasHeading="Boiler Servicing Across Nottingham"
      serviceAreasContent={
        <p>
          Our Gas Safe registered engineers service boilers across Nottingham,
          West Bridgford, Beeston, Arnold, Hucknall, Carlton, and
          surrounding villages. Appointments can be booked for a time that suits
          you, including evenings and Saturdays where availability allows.
        </p>
      }
      faqs={[
        {
          question: "How often should I get my boiler serviced?",
          answer:
            "Once a year is the standard recommendation from all major boiler manufacturers. Most warranties require annual servicing to remain valid. The best time to book is in late summer or early autumn, before the heating season starts and engineers become busiest.",
        },
        {
          question: "How long does a boiler service take?",
          answer:
            "A typical boiler service takes between 45 minutes and one hour. If the engineer finds an issue that needs attention, they will discuss it with you and provide a separate quote. The service itself does not include repair work unless agreed beforehand.",
        },
        {
          question:
            "Can I combine a boiler service with a gas safety check?",
          answer:
            "Yes. Many homeowners and landlords book a boiler service and gas safety check together. This is especially common for landlords who need a CP12 certificate. Ask when you call and we will arrange both for the same appointment.",
        },
      ]}
      ctaHeading="Book Your Boiler Service Today"
      ctaContent={
        <p>
          Protect your warranty, reduce your energy bills, and avoid mid-winter
          breakdowns. Call OnCall Home Repairs to book a boiler service with a
          Gas Safe registered engineer in Nottingham.
        </p>
      }
      serviceName="Boiler Servicing"
      serviceSlug="boiler-servicing"
      serviceDescription="Annual boiler servicing in Nottingham by Gas Safe registered engineers. Manufacturer warranty protection, safety checks, and efficiency testing."
      categorySlug="boiler-heating"
      geoPrefix="/plumber-nottingham"
      serviceAreas={seoConfigNottingham.serviceAreas}
      geoConfig={seoConfigNottingham}
    />
  );
}
