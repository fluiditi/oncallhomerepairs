import { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { seoConfigGlasgow } from "@/config/seo-glasgow";

export const metadata: Metadata = {
  title: "Shower Installation Glasgow | OnCall Home Repairs",
  description:
    "Shower installation and repair in Glasgow. Electric, mixer, and thermostatic showers. Vetted plumbers. Call 0333 240 8428.",
  alternates: {
    canonical:
      "https://oncallhomerepairs.co.uk/plumber-glasgow/services/general-plumbing/shower-installation-repair",
  },
};

export default function ShowerInstallationPage() {
  return (
    <ServicePage
      breadcrumbItems={[
        { name: "Services", href: "/plumber-glasgow/services" },
        { name: "General Plumbing", href: "/plumber-glasgow/services/general-plumbing" },
        {
          name: "Shower Installation and Repair",
          href: "/plumber-glasgow/services/general-plumbing/shower-installation-repair",
        },
      ]}
      h1="Shower Installation and Repair in Glasgow"
      heroIntro={
        <p>
          Whether your electric shower has stopped heating, your mixer valve
          is dripping, or you want a new shower installed in your bathroom or
          en-suite, OnCall Home Repairs connects you with qualified plumbers
          in Glasgow who handle all types of shower work. From quick repairs
          to full installations, every job is quoted upfront and backed by our
          workmanship guarantee.
        </p>
      }
      whatWhyHeading="Shower Problems We Fix"
      whatWhyContent={
        <>
          <p>
            Shower faults take many forms. Electric showers can cut out
            mid-use, produce only cold water, or trip the circuit breaker.
            Mixer showers can lose temperature control, drip from the head
            or hose, or develop low water pressure. Thermostatic showers
            may fail to regulate temperature, running too hot or too cold
            regardless of the valve setting.
          </p>
          <p>
            In Glasgow homes with hard water, limescale build-up inside
            the shower unit, on the showerhead, and within the mixing valve
            is a frequent cause of reduced performance. Descaling or
            replacing the affected parts can restore a shower to full
            working order without needing to replace the entire unit.
          </p>
          <p>
            For new installations, our plumbers can fit electric showers
            over baths or in standalone cubicles, install mixer valves
            connected to your hot water system, and set up thermostatic
            bar valves or concealed shower systems. If the installation is
            part of a larger{" "}
            <a
              href="/plumber-glasgow/services/general-plumbing/bathroom-plumbing"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              bathroom refit
            </a>
            , we can coordinate the plumbing work alongside your other
            tradespeople. If poor water pressure is affecting your shower,
            it may be worth considering a{" "}
            <a
              href="/plumber-glasgow/services/boiler-heating/water-heater-repair"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              water heater upgrade
            </a>{" "}
            or a pump installation to improve flow.
          </p>
        </>
      }
      processHeading="How Shower Installation and Repair Works"
      processSteps={[
        {
          title: "Describe What You Need",
          description:
            "Tell us whether you need a repair on an existing shower or a new installation. For repairs, describe the fault. For installations, let us know the type of shower you want and the location. If you are unsure which type suits your property, the plumber can advise during the visit.",
        },
        {
          title: "Assessment and Quote",
          description:
            "For repairs, the plumber tests the shower, checks water pressure and electrical supply (for electric units), and identifies the faulty component. For installations, they assess the plumbing and electrical connections available and confirm what work is needed. A clear quote is provided before anything starts.",
        },
        {
          title: "Repair or Installation",
          description:
            "Repairs may include replacing heating elements, thermostatic cartridges, diverter valves, or showerheads. Installations involve mounting the shower unit, connecting hot and cold water supplies, fitting the tray or screen if required, and testing the system at full operating pressure.",
        },
        {
          title: "Testing and Handover",
          description:
            "The plumber runs the shower through a full operating cycle, checking temperature regulation, flow rate, and drainage. For electric showers, they verify that the electrical connection is safe and the unit is correctly earthed. You receive guidance on maintaining the shower and prolonging its lifespan.",
        },
      ]}
      relatedHeading="Related Services"
      relatedServices={[
        {
          name: "Bathroom Plumbing",
          href: "/plumber-glasgow/services/general-plumbing/bathroom-plumbing",
        },
        {
          name: "Tap Repair and Replacement",
          href: "/plumber-glasgow/services/general-plumbing/tap-repair-replacement",
        },
        {
          name: "Water Heater Repair",
          href: "/plumber-glasgow/services/boiler-heating/water-heater-repair",
        },
      ]}
      serviceAreasHeading="Shower Installation Across Glasgow"
      serviceAreasContent={
        <p>
          Our plumbers install and repair showers across Glasgow, Partick,
          Hillhead, Govan, Shawlands, Dennistoun, and surrounding
          villages. Whether you need a quick repair to get your morning shower
          back in action or a full installation for a new en-suite, we can
          connect you with the right plumber for the job.
        </p>
      }
      faqs={[
        {
          question: "Which type of shower is best for my home?",
          answer:
            "It depends on your hot water system. If you have a combination boiler, a thermostatic mixer shower gives the best performance. If you have a gravity-fed system with a hot water cylinder, an electric shower or a pumped mixer shower may be better. Properties with low water pressure often benefit from an electric shower since it heats water independently. Your plumber can recommend the best option after assessing your property.",
        },
        {
          question: "Why does my electric shower keep cutting out?",
          answer:
            "The most common causes are a failing heating element, a faulty thermal cut-out switch, or low water flow triggering the overheat protection. Limescale build-up inside the unit can also restrict water flow enough to cause the shower to shut down. A plumber can diagnose which component has failed and whether a repair or replacement unit is the better option.",
        },
      ]}
      ctaHeading="Shower Not Working? Or Need One Installed?"
      ctaContent={
        <p>
          From a quick repair to a brand new shower installation, OnCall Home
          Repairs will match you with a qualified plumber in Glasgow. Call now
          for an upfront quote.
        </p>
      }
      serviceName="Shower Installation and Repair"
      serviceSlug="shower-installation-repair"
      serviceDescription="Shower installation and repair in Glasgow. Electric, mixer, and thermostatic showers fitted and repaired by vetted local plumbers."
      categorySlug="general-plumbing"
      geoPrefix="/plumber-glasgow"
      serviceAreas={seoConfigGlasgow.serviceAreas}
      geoConfig={seoConfigGlasgow}
    />
  );
}
