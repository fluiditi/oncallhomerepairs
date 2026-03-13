import { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { seoConfigNottingham } from "@/config/seo-nottingham";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Boiler Installation Nottingham | OnCall Home Repairs",
  description:
    "New boiler installation in Nottingham. Gas Safe engineers, competitive quotes, workmanship guarantee. Call 0333 240 8428.",
  alternates: {
    canonical:
      "https://oncallhomerepairs.co.uk/plumber-nottingham/services/boiler-heating/boiler-installation",
  },
};

export default function BoilerInstallationPage() {
  return (
    <ServicePage
      breadcrumbItems={[
        { name: "Services", href: "/plumber-nottingham/services" },
        { name: "Boiler & Heating", href: "/plumber-nottingham/services/boiler-heating" },
        {
          name: "Boiler Installation",
          href: "/plumber-nottingham/services/boiler-heating/boiler-installation",
        },
      ]}
      h1="Boiler Installation in Nottingham"
      heroIntro={
        <p>
          Whether your existing boiler has reached the end of its life or you
          want to upgrade to a more efficient model, OnCall Home Repairs connects
          you with Gas Safe registered heating engineers in Nottingham who carry
          out professional boiler installations. From the initial survey to final
          testing and handover, every step is handled by a qualified engineer.
          We match you with installers who offer competitive pricing, honest
          advice on which boiler suits your property, and a workmanship
          guarantee on every installation.
        </p>
      }
      whatWhyHeading="When Is It Time for a New Boiler?"
      whatWhyContent={
        <>
          <p>
            Most gas boilers have a working life of 10 to 15 years. As they age,
            they lose efficiency, break down more frequently, and become
            increasingly expensive to repair. If your{" "}
            <Link
              href="/plumber-nottingham/services/boiler-heating/boiler-repair"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              boiler repair
            </Link>{" "}
            bills are mounting up, or your engineer has told you that parts are no
            longer available for your model, replacement is usually the more
            sensible investment. A modern condensing boiler can achieve efficiency
            ratings of 90% or higher, compared to 60-70% for older
            non-condensing units. That difference translates directly into lower
            gas bills — often by several hundred pounds per year.
          </p>
          <p>
            Choosing the right boiler depends on several factors: the size of
            your property, the number of bathrooms, your hot water demand, and
            where the boiler will be sited. Combi boilers are the most popular
            choice in the UK because they heat water on demand without needing a
            separate hot water cylinder, making them ideal for smaller to
            medium-sized homes. System boilers work with a cylinder and are
            better suited to larger properties with multiple bathrooms where
            several taps or showers may run at once.
          </p>
          <p>
            The engineers in our network are experienced with all major boiler
            brands — Worcester Bosch, Vaillant, Baxi, Ideal, Glow-worm, and
            Viessmann among others. They will carry out a full survey of your
            property, recommend the right type and size of boiler, and provide a
            detailed written quote. If your{" "}
            <Link
              href="/plumber-nottingham/services/boiler-heating/central-heating-repair"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              central heating system
            </Link>{" "}
            needs upgrading at the same time — for example, if radiators need
            replacing or the system needs flushing — that can be included in the
            same project.
          </p>
        </>
      }
      processHeading="How Boiler Installation Works"
      processSteps={[
        {
          title: "Home Survey",
          description: (
            <p>
              A Gas Safe engineer visits your property to assess your heating
              requirements. They check the size of your home, the number of
              bathrooms, your current pipework, flue position, and hot water
              usage to recommend the most suitable boiler type and output rating.
            </p>
          ),
        },
        {
          title: "Detailed Quote",
          description: (
            <p>
              You receive a written quote covering the boiler, all materials,
              labour, and any additional work such as relocating the boiler,
              upgrading the flue, or modifying pipework. The quote is fully
              itemised so you know exactly what you are paying for.
            </p>
          ),
        },
        {
          title: "Installation Day",
          description: (
            <p>
              On the agreed date, your engineer removes the old boiler and
              installs the new unit. This includes connecting gas, water, and
              electrics, fitting a new flue if required, and integrating with
              your existing heating controls or upgrading to a smart thermostat.
              Most installations are completed in a single day.
            </p>
          ),
        },
        {
          title: "Testing and Handover",
          description: (
            <p>
              Your engineer runs a full set of safety checks — gas tightness,
              flue flow, water pressure, and ignition — before handing the
              boiler over to you. They walk you through the controls, register
              the manufacturer warranty, and provide all necessary paperwork
              including the Gas Safe notification.
            </p>
          ),
        },
      ]}
      benefitsHeading="Why Choose OnCall for Boiler Installation"
      benefits={[
        {
          title: "Gas Safe Certified Installers",
          description: (
            <p>
              Every installer in our network is Gas Safe registered and
              qualified to work with all major boiler brands. Your installation
              is legal, safe, and warranty-valid.
            </p>
          ),
        },
        {
          title: "Honest Advice on Boiler Choice",
          description: (
            <p>
              Our engineers recommend the right boiler for your property and
              budget — not the most expensive one. You get unbiased guidance
              based on your actual needs.
            </p>
          ),
        },
        {
          title: "Competitive, Transparent Pricing",
          description: (
            <p>
              Your quote covers everything. There are no surprise extras for
              parts, fittings, or labour. The price you agree to is the price
              you pay.
            </p>
          ),
        },
        {
          title: "Usually Completed in One Day",
          description: (
            <p>
              A standard like-for-like boiler swap is typically finished within a
              single working day, so disruption to your household is kept to a
              minimum.
            </p>
          ),
        },
        {
          title: "Manufacturer Warranty Registration",
          description: (
            <p>
              Your engineer registers the new boiler with the manufacturer,
              activating the warranty (typically 5-10 years depending on the
              brand and model).
            </p>
          ),
        },
        {
          title: "Workmanship Guarantee",
          description: (
            <p>
              In addition to the manufacturer warranty, all installation work is
              backed by our workmanship guarantee. If anything is not right, we
              come back and fix it.
            </p>
          ),
        },
      ]}
      relatedHeading="Related Heating Services"
      relatedServices={[
        {
          name: "Boiler Repair",
          href: "/plumber-nottingham/services/boiler-heating/boiler-repair",
        },
        {
          name: "Boiler Servicing",
          href: "/plumber-nottingham/services/boiler-heating/boiler-servicing",
        },
        {
          name: "Central Heating Repair",
          href: "/plumber-nottingham/services/boiler-heating/central-heating-repair",
        },
        {
          name: "Gas Safety Checks",
          href: "/plumber-nottingham/services/boiler-heating/gas-safety-checks",
        },
      ]}
      serviceAreasHeading="Boiler Installation Across Nottingham"
      serviceAreasContent={
        <p>
          We connect homeowners across Nottingham and Nottinghamshire
          with qualified boiler installers. Whether you are in the centre of
          Nottingham, in West Bridgford, Beeston, or one of the surrounding
          villages, we can match you with a Gas Safe installer who serves your
          area. Our engineers understand the property types common in this part
          of Nottinghamshire and can advise on the best boiler setup for your
          home.
        </p>
      }
      faqs={[
        {
          question: "How much does a new boiler installation cost in Nottingham?",
          answer:
            "A new boiler installation typically costs between 1,800 and 4,500 pounds depending on the boiler brand, model, and any additional work required such as relocating the boiler or upgrading the flue. A straightforward combi-to-combi swap is at the lower end. Your engineer provides a detailed written quote after the survey so you know the exact cost before committing.",
          answerJsx: (
            <p>
              A new boiler installation typically costs between &pound;1,800 and
              &pound;4,500 depending on the boiler brand, model, and any
              additional work required such as relocating the boiler or upgrading
              the flue. A straightforward combi-to-combi swap is at the lower
              end. Your engineer provides a detailed written quote after the
              survey so you know the exact cost before committing.
            </p>
          ),
        },
        {
          question: "How long does a boiler installation take?",
          answer:
            "A like-for-like boiler replacement usually takes one day. If the boiler is being moved to a different location, the system type is changing (for example from a conventional to a combi), or significant pipework modifications are needed, the installation may take two days. Your engineer will confirm the expected timeline at the survey stage.",
          answerJsx: (
            <p>
              A like-for-like boiler replacement usually takes one day. If the
              boiler is being moved to a different location, the system type is
              changing (for example from a conventional to a combi), or
              significant pipework modifications are needed, the installation
              may take two days. Your engineer will confirm the expected
              timeline at the survey stage.
            </p>
          ),
        },
        {
          question:
            "What is the difference between a combi boiler and a system boiler?",
          answer:
            "A combi (combination) boiler heats water directly from the mains when you turn on a tap, so there is no need for a hot water cylinder or cold water tank. This saves space and is ideal for smaller homes with one bathroom. A system boiler works with a hot water cylinder and can supply multiple taps simultaneously, making it better suited to larger homes with two or more bathrooms.",
          answerJsx: (
            <p>
              A combi (combination) boiler heats water directly from the mains
              when you turn on a tap, so there is no need for a hot water
              cylinder or cold water tank. This saves space and is ideal for
              smaller homes with one bathroom. A system boiler works with a hot
              water cylinder and can supply multiple taps simultaneously, making
              it better suited to larger homes with two or more bathrooms.
            </p>
          ),
        },
        {
          question: "What warranty do I get with a new boiler?",
          answer:
            "Most major boiler manufacturers offer warranties between 5 and 10 years, provided the boiler is installed by a Gas Safe registered engineer and serviced annually. Some brands offer extended warranties of up to 12 years on selected models. Your engineer will explain the warranty terms for your chosen boiler and register it with the manufacturer on installation day.",
          answerJsx: (
            <p>
              Most major boiler manufacturers offer warranties between 5 and 10
              years, provided the boiler is installed by a Gas Safe registered
              engineer and serviced annually. Some brands offer extended
              warranties of up to 12 years on selected models. Your engineer
              will explain the warranty terms for your chosen boiler and register
              it with the manufacturer on installation day.
            </p>
          ),
        },
      ]}
      ctaHeading="Ready for a New Boiler in Nottingham?"
      ctaContent={
        <p>
          Call OnCall Home Repairs on 0333 240 8428 for a free, no-obligation
          survey and quote from a Gas Safe registered installer in your area.
          Competitive pricing, honest advice, and a workmanship guarantee on
          every installation.
        </p>
      }
      serviceName="Boiler Installation"
      serviceSlug="boiler-installation"
      serviceDescription="New boiler installation in Nottingham. Gas Safe registered, competitive pricing."
      categorySlug="boiler-heating"
      geoPrefix="/plumber-nottingham"
      serviceAreas={seoConfigNottingham.serviceAreas}
      geoConfig={seoConfigNottingham}
    />
  );
}
