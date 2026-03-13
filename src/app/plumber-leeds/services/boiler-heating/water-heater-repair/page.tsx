import { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { seoConfigLeeds } from "@/config/seo-leeds";

export const metadata: Metadata = {
  title: "Water Heater Repair Leeds | OnCall Home Repairs",
  description:
    "Water heater repair in Leeds. Immersion heaters, cylinders, and unvented systems. Vetted plumbers. Call 0333 240 8428.",
  alternates: {
    canonical:
      "https://oncallhomerepairs.co.uk/plumber-leeds/services/boiler-heating/water-heater-repair",
  },
};

export default function WaterHeaterRepairPage() {
  return (
    <ServicePage
      breadcrumbItems={[
        { name: "Services", href: "/plumber-leeds/services" },
        { name: "Boiler & Heating", href: "/plumber-leeds/services/boiler-heating" },
        {
          name: "Water Heater Repair",
          href: "/plumber-leeds/services/boiler-heating/water-heater-repair",
        },
      ]}
      h1="Water Heater Repair in Leeds"
      heroIntro={
        <p>
          No hot water is more than an inconvenience &mdash; it disrupts your
          morning routine, your washing, and your household. Whether your
          immersion heater has failed, your hot water cylinder is leaking, or
          your unvented system has lost pressure, OnCall Home Repairs connects
          you with qualified plumbers and heating engineers in Leeds who can
          diagnose and repair the fault promptly.
        </p>
      }
      whatWhyHeading="Types of Water Heater Problems We Handle"
      whatWhyContent={
        <>
          <p>
            Hot water systems vary considerably across Leeds properties.
            Newer homes typically have a combination boiler that heats water on
            demand, but many older properties still use a separate hot water
            cylinder heated by an immersion heater, a back boiler, or the
            central heating system. Each type has its own set of common faults.
          </p>
          <p>
            Immersion heater failures are among the most common call-outs.
            The heating element corrodes over time, especially in hard water
            areas like West Yorkshire, and eventually stops working. The
            thermostat can also fail, resulting in either no hot water or
            dangerously overheated water. Cylinder leaks usually develop at
            fittings or from internal corrosion, and unvented systems can
            lose pressure or trip safety devices if expansion vessels fail.
          </p>
          <p>
            Our plumbers handle all types of water heating systems. If the
            fault is related to your{" "}
            <a
              href="/plumber-leeds/services/boiler-heating/boiler-repair"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              boiler
            </a>
            , we can arrange that repair as well. For properties where the
            hot water cylinder has reached end of life, we can advise on
            replacement options including modern unvented cylinders or
            switching to a{" "}
            <a
              href="/plumber-leeds/services/boiler-heating/boiler-installation"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              combination boiler
            </a>{" "}
            that eliminates the need for a cylinder altogether.
          </p>
        </>
      }
      processHeading="How Water Heater Repair Works"
      processSteps={[
        {
          title: "Describe the Symptoms",
          description:
            "Tell us what is happening: no hot water at all, lukewarm water that does not get fully hot, a leaking cylinder, or water that overheats. Let us know the type of system you have if you can. This helps us send a plumber with the right parts and experience.",
        },
        {
          title: "Fault Diagnosis",
          description:
            "The plumber tests the heating element, thermostat, and any safety devices. For unvented systems, they check the expansion vessel pressure, temperature and pressure relief valve, and tundish discharge. The root cause is identified and explained to you in plain terms.",
        },
        {
          title: "Repair and Testing",
          description:
            "Faulty immersion elements are replaced, thermostats are recalibrated or swapped, leaking fittings are resealed, and safety valves are tested. The plumber confirms that the system is heating water to the correct temperature and holding pressure before leaving.",
        },
      ]}
      relatedHeading="Related Services"
      relatedServices={[
        {
          name: "Boiler Repair",
          href: "/plumber-leeds/services/boiler-heating/boiler-repair",
        },
        {
          name: "Boiler Installation",
          href: "/plumber-leeds/services/boiler-heating/boiler-installation",
        },
        {
          name: "Bathroom Plumbing",
          href: "/plumber-leeds/services/general-plumbing/bathroom-plumbing",
        },
      ]}
      serviceAreasHeading="Water Heater Repair Across Leeds"
      serviceAreasContent={
        <p>
          Our plumbers and heating engineers attend water heater repairs across
          Leeds, Headingley, Chapel Allerton, Roundhay, Pudsey, Morley, and
          surrounding areas. If you have no hot water and need a same-day
          repair, let us know when you call and we will prioritise your booking.
        </p>
      }
      faqs={[
        {
          question: "Why has my immersion heater stopped working?",
          answer:
            "The most common cause is a failed heating element. Hard water areas like Leeds accelerate limescale build-up on the element, which causes it to overheat and burn out. The thermostat can also fail independently. A plumber can test both components and replace whichever has failed.",
        },
        {
          question:
            "What is the difference between a vented and unvented hot water system?",
          answer:
            "A vented system has a cold water tank in the loft that feeds the hot water cylinder by gravity. An unvented system is connected directly to the mains water supply, giving higher water pressure at the taps. Unvented systems require annual servicing by a qualified engineer and have additional safety devices that need regular testing.",
        },
        {
          question: "Should I repair my hot water cylinder or replace it?",
          answer:
            "If the cylinder itself is leaking from the body rather than a fitting, replacement is usually the better option. A cylinder with internal corrosion will develop further leaks over time. If the fault is limited to the immersion element, thermostat, or a fitting, a repair is typically more cost-effective. Your plumber will advise based on the condition and age of the cylinder.",
        },
      ]}
      ctaHeading="No Hot Water? Get It Fixed."
      ctaContent={
        <p>
          A cold shower is nobody&rsquo;s idea of a good morning. Call OnCall
          Home Repairs and we will connect you with a qualified plumber in
          Leeds who can restore your hot water supply.
        </p>
      }
      serviceName="Water Heater Repair"
      serviceSlug="water-heater-repair"
      serviceDescription="Water heater repair in Leeds. Immersion heaters, hot water cylinders, and unvented systems repaired by qualified local plumbers."
      categorySlug="boiler-heating"
      geoPrefix="/plumber-leeds"
      serviceAreas={seoConfigLeeds.serviceAreas}
      geoConfig={seoConfigLeeds}
    />
  );
}
