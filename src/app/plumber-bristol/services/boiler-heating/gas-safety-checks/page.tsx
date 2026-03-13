import { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { seoConfigBristol } from "@/config/seo-bristol";

export const metadata: Metadata = {
  title: "Gas Safety Check Bristol | OnCall Home Repairs",
  description:
    "Gas safety checks and CP12 certificates in Bristol. For landlords and homeowners. Gas Safe registered engineers. Call 0333 240 8428.",
  alternates: {
    canonical:
      "https://oncallhomerepairs.co.uk/plumber-bristol/services/boiler-heating/gas-safety-checks",
  },
};

export default function GasSafetyChecksPage() {
  return (
    <ServicePage
      breadcrumbItems={[
        { name: "Services", href: "/plumber-bristol/services" },
        { name: "Boiler & Heating", href: "/plumber-bristol/services/boiler-heating" },
        {
          name: "Gas Safety Checks",
          href: "/plumber-bristol/services/boiler-heating/gas-safety-checks",
        },
      ]}
      h1="Gas Safety Checks in Bristol"
      heroIntro={
        <p>
          A gas safety check is a legal requirement for landlords and a
          sensible precaution for any homeowner with gas appliances. OnCall
          Home Repairs connects you with Gas Safe registered engineers in
          Bristol who carry out thorough inspections of your boiler, gas
          cooker, gas fire, and all associated pipework. Landlords receive a
          CP12 gas safety certificate upon completion.
        </p>
      }
      whatWhyHeading="Who Needs a Gas Safety Check?"
      whatWhyContent={
        <>
          <p>
            Under UK law, landlords must have all gas appliances in their rental
            properties checked annually by a Gas Safe registered engineer. The
            engineer issues a Gas Safety Record (commonly called a CP12
            certificate) that must be provided to tenants within 28 days of the
            check and kept on file for at least two years. Failing to comply
            can result in fines, prosecution, and invalidated insurance.
          </p>
          <p>
            Homeowners are not legally required to have a gas safety check, but
            it is strongly recommended. Carbon monoxide leaks from faulty
            boilers and gas fires are silent and odourless &mdash; they cause
            dozens of deaths in the UK each year. An annual check gives you
            peace of mind that your appliances are burning gas safely and
            venting correctly.
          </p>
          <p>
            Our engineers check every gas appliance in the property, including
            the{" "}
            <a
              href="/plumber-bristol/services/boiler-heating/boiler-repair"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              boiler
            </a>
            , gas hob, gas fire, and any exposed gas pipework. If they identify
            a fault, they will explain the issue and provide a quote for the
            repair. Dangerous appliances are isolated immediately in line with
            Gas Safe regulations. Many landlords combine a gas safety check
            with a{" "}
            <a
              href="/plumber-bristol/services/boiler-heating/boiler-servicing"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              boiler service
            </a>{" "}
            during the same appointment.
          </p>
        </>
      }
      processHeading="What Happens During a Gas Safety Check"
      processSteps={[
        {
          title: "Appliance Inspection",
          description:
            "The engineer visually inspects each gas appliance, checking for damage, signs of incomplete combustion (sooting, staining), and correct installation. Gas connections and flexible hoses are examined for wear and compliance with current standards.",
        },
        {
          title: "Flue and Ventilation Check",
          description:
            "Every flue is checked for correct termination, secure connections, and proper function. Room ventilation is assessed to confirm that each appliance has adequate air supply for safe combustion. Blocked or incorrectly terminated flues are flagged immediately.",
        },
        {
          title: "Operational Testing",
          description:
            "Each appliance is fired up and tested under operating conditions. The engineer checks gas pressure, flame picture, and uses a flue gas analyser to confirm safe combustion ratios. Carbon monoxide spillage tests are performed where applicable.",
        },
        {
          title: "Certificate Issued",
          description:
            "If all appliances pass, the engineer issues your Gas Safety Record (CP12 certificate). Landlords receive a copy for their records and one for each tenant. If an appliance fails, the engineer explains the fault, the risk level, and provides a repair quote.",
        },
      ]}
      relatedHeading="Related Services"
      relatedServices={[
        {
          name: "Boiler Servicing",
          href: "/plumber-bristol/services/boiler-heating/boiler-servicing",
        },
        {
          name: "Boiler Repair",
          href: "/plumber-bristol/services/boiler-heating/boiler-repair",
        },
        {
          name: "Boiler Installation",
          href: "/plumber-bristol/services/boiler-heating/boiler-installation",
        },
      ]}
      serviceAreasHeading="Gas Safety Checks Across Bristol"
      serviceAreasContent={
        <p>
          Our Gas Safe registered engineers carry out gas safety checks across
          Bristol, Clifton, Redland, Bishopston, Southville, Fishponds,
          Knowle, Brislington, and all surrounding areas. Landlords with multiple
          properties across the region can book checks for several addresses
          through a single phone call.
        </p>
      }
      faqs={[
        {
          question: "How much does a gas safety check cost in Bristol?",
          answer:
            "The cost depends on the number of gas appliances in the property. A single-appliance check is at the lower end, while a property with a boiler, gas cooker, and gas fire costs more due to the additional testing required. Your engineer will confirm the price before the appointment.",
        },
        {
          question: "What is the difference between a gas safety check and a boiler service?",
          answer:
            "A gas safety check is a safety inspection of all gas appliances to confirm they are burning gas correctly and venting safely. A boiler service is a more detailed maintenance procedure focused specifically on the boiler, including internal cleaning and component inspection. Many landlords book both together for efficiency.",
        },
      ]}
      ctaHeading="Need a Gas Safety Check? Book Today."
      ctaContent={
        <p>
          Protect your tenants, your family, and your compliance. Call OnCall
          Home Repairs and we will connect you with a Gas Safe registered
          engineer in Bristol for your annual gas safety check.
        </p>
      }
      serviceName="Gas Safety Checks"
      serviceSlug="gas-safety-checks"
      serviceDescription="Gas safety checks and CP12 certificates in Bristol. Annual inspections for landlords and homeowners by Gas Safe registered engineers."
      categorySlug="boiler-heating"
      geoPrefix="/plumber-bristol"
      serviceAreas={seoConfigBristol.serviceAreas}
      geoConfig={seoConfigBristol}
    />
  );
}
