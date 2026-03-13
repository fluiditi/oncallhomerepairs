import { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { seoConfigNottingham } from "@/config/seo-nottingham";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Central Heating Repair Nottingham | OnCall Home Repairs",
  description:
    "Central heating repair in Nottingham. Radiators, pumps, valves, thermostats. Gas Safe engineers. Call 0333 240 8428.",
  alternates: {
    canonical:
      "https://oncallhomerepairs.co.uk/plumber-nottingham/services/boiler-heating/central-heating-repair",
  },
};

export default function CentralHeatingRepairPage() {
  return (
    <ServicePage
      breadcrumbItems={[
        { name: "Services", href: "/plumber-nottingham/services" },
        { name: "Boiler & Heating", href: "/plumber-nottingham/services/boiler-heating" },
        {
          name: "Central Heating Repair",
          href: "/plumber-nottingham/services/boiler-heating/central-heating-repair",
        },
      ]}
      h1="Central Heating Repair in Nottingham"
      heroIntro={
        <p>
          When your central heating is not working properly, your home becomes
          uncomfortable fast — especially during a Nottinghamshire winter. Cold
          radiators, uneven heating, strange noises from the system, and
          thermostats that do not respond are all signs that something needs
          attention. OnCall Home Repairs connects you with qualified heating
          engineers in Nottingham who diagnose and repair central heating faults
          efficiently. From individual radiator problems to full system
          diagnostics, we will match you with the right engineer for the job.
        </p>
      }
      whatWhyHeading="What Goes Wrong with Central Heating Systems"
      whatWhyContent={
        <>
          <p>
            A central heating system is made up of many interconnected
            components: the boiler, a network of pipes, radiators, a pump,
            motorised valves, a thermostat, and a programmer or timer. A fault
            in any one of these can affect how the whole system performs. Cold
            radiators might be caused by trapped air, a blocked valve, sludge
            build-up, or a failing circulation pump. A system that takes a long
            time to warm up could have a pump running at the wrong speed, a
            partially blocked pipe, or a{" "}
            <Link
              href="/plumber-nottingham/services/boiler-heating/boiler-repair"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              boiler that is not firing correctly
            </Link>
            .
          </p>
          <p>
            Some heating problems develop gradually. You might notice that one
            radiator is always colder than the others, or that the system makes
            banging and clanking noises when it fires up. These are often signs
            of sludge and corrosion building up inside the system — a mixture of
            rust, limescale, and debris that settles in radiators and pipe runs,
            restricting water flow and reducing efficiency. Left untreated, this
            sludge can eventually damage the boiler itself, leading to far more
            expensive repairs.
          </p>
          <p>
            The heating engineers in our network are experienced in diagnosing
            all types of central heating faults. They can bleed radiators,
            replace thermostatic radiator valves (TRVs), swap out failed pumps
            and motorised valves, and recommend a{" "}
            <Link
              href="/plumber-nottingham/services/boiler-heating/power-flushing"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              power flush
            </Link>{" "}
            if your system is clogged with sludge. For older systems that have
            reached the end of their useful life, they can also advise on
            whether a full system upgrade would be more cost-effective than
            repeated repairs.
          </p>
        </>
      }
      processHeading="How Central Heating Repair Works"
      processSteps={[
        {
          title: "Describe the Heating Problem",
          description: (
            <p>
              Call 0333 240 8428 and tell us what is happening with your heating.
              Which rooms are cold? Are all radiators affected or just some? Is
              the boiler running but nothing is getting warm? These details help
              us identify the likely area of the fault.
            </p>
          ),
        },
        {
          title: "Engineer Inspects the System",
          description: (
            <p>
              Your matched engineer visits your property and carries out a
              thorough inspection of the heating system — checking the boiler,
              pump, valves, thermostat, and individual radiators to locate the
              source of the problem.
            </p>
          ),
        },
        {
          title: "Fault Diagnosed and Explained",
          description: (
            <p>
              Once the fault is identified, your engineer explains what has gone
              wrong and what needs to be done to fix it. You receive a clear
              quote for the repair. No work goes ahead without your agreement.
            </p>
          ),
        },
        {
          title: "Repair Carried Out",
          description: (
            <p>
              The engineer completes the repair — whether that is replacing a
              valve, fitting a new pump, bleeding the system, or carrying out a
              more involved fix. They test the full system afterwards to make
              sure every radiator is heating up properly and the controls are
              responding correctly.
            </p>
          ),
        },
      ]}
      benefitsHeading="Why Choose OnCall for Central Heating Repair"
      benefits={[
        {
          title: "Experienced Heating Engineers",
          description: (
            <p>
              Our network includes engineers who specialise in central heating
              systems and understand the common faults found in Nottingham
              properties.
            </p>
          ),
        },
        {
          title: "Full System Diagnostics",
          description: (
            <p>
              Rather than just treating the symptom, our engineers check the
              entire system to find the root cause and prevent repeat call-outs.
            </p>
          ),
        },
        {
          title: "Same-Day Service Available",
          description: (
            <p>
              For urgent heating failures — especially in cold weather — we can
              often arrange a same-day visit to get your system working again.
            </p>
          ),
        },
        {
          title: "Upfront, Fixed Pricing",
          description: (
            <p>
              You approve the cost before any work begins. There are no hourly
              rate surprises and no additional charges for parts used.
            </p>
          ),
        },
        {
          title: "All Components Covered",
          description: (
            <p>
              Radiators, valves, pumps, thermostats, timers, motorised valves —
              whatever the faulty component, our engineers can repair or replace
              it.
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
          name: "Radiator Repair and Installation",
          href: "/plumber-nottingham/services/boiler-heating/radiator-repair-installation",
        },
        {
          name: "Power Flushing",
          href: "/plumber-nottingham/services/boiler-heating/power-flushing",
        },
        {
          name: "Boiler Servicing",
          href: "/plumber-nottingham/services/boiler-heating/boiler-servicing",
        },
      ]}
      serviceAreasHeading="Central Heating Repair Across Nottingham"
      serviceAreasContent={
        <p>
          Our heating engineers cover Nottingham and the surrounding towns and
          villages throughout Nottinghamshire. From older properties
          in Nottingham town centre to newer-build estates in Arnold, Hucknall,
          and Carlton, our engineers are familiar with the heating
          systems commonly installed in the area. Whether your system uses a
          combi boiler, a conventional system, or an older gravity-fed setup, we
          can connect you with someone who knows how to fix it.
        </p>
      }
      faqs={[
        {
          question: "Why are my radiators cold at the bottom but hot at the top?",
          answer:
            "This is usually caused by sludge — a mixture of rust and debris that settles at the bottom of the radiator, preventing hot water from circulating properly. The solution is to drain and flush the affected radiator, or in more severe cases, carry out a full power flush of the entire system. Your engineer can assess the extent of the problem and recommend the best approach.",
          answerJsx: (
            <p>
              This is usually caused by sludge — a mixture of rust and debris
              that settles at the bottom of the radiator, preventing hot water
              from circulating properly. The solution is to drain and flush the
              affected radiator, or in more severe cases, carry out a full{" "}
              <Link
                href="/plumber-nottingham/services/boiler-heating/power-flushing"
                className="text-primary underline underline-offset-2 hover:text-primary/80"
              >
                power flush
              </Link>{" "}
              of the entire system. Your engineer can assess the extent of the
              problem and recommend the best approach.
            </p>
          ),
        },
        {
          question:
            "Why does my heating take so long to warm up the house?",
          answer:
            "Slow heating can be caused by several factors: the circulation pump may be running at too low a speed, there may be air trapped in the system, or sludge build-up could be restricting water flow through the radiators and pipes. A faulty or incorrectly set thermostat can also be responsible. An engineer can test each component and identify which one is causing the delay.",
          answerJsx: (
            <p>
              Slow heating can be caused by several factors: the circulation
              pump may be running at too low a speed, there may be air trapped
              in the system, or sludge build-up could be restricting water flow
              through the radiators and pipes. A faulty or incorrectly set
              thermostat can also be responsible. An engineer can test each
              component and identify which one is causing the delay.
            </p>
          ),
        },
        {
          question:
            "My heating system makes banging or clanking noises — is that dangerous?",
          answer:
            "Banging and clanking noises are usually caused by air trapped in the system, a failing pump, or kettling in the boiler due to limescale build-up. While these noises are not typically dangerous, they indicate a problem that will worsen over time and could eventually lead to a breakdown. An engineer can identify the source of the noise and carry out the appropriate repair.",
          answerJsx: (
            <p>
              Banging and clanking noises are usually caused by air trapped in
              the system, a failing pump, or kettling in the boiler due to
              limescale build-up. While these noises are not typically dangerous,
              they indicate a problem that will worsen over time and could
              eventually lead to a breakdown. An engineer can identify the
              source of the noise and carry out the appropriate repair.
            </p>
          ),
        },
        {
          question: "How much does central heating repair cost?",
          answer:
            "Costs vary depending on the fault. Bleeding radiators or replacing a single thermostatic valve is relatively inexpensive. Replacing a circulation pump, motorised valve, or carrying out a power flush costs more. Your engineer provides an upfront quote after inspecting the system, so you know exactly what you will pay before any work starts.",
          answerJsx: (
            <p>
              Costs vary depending on the fault. Bleeding radiators or replacing
              a single thermostatic valve is relatively inexpensive. Replacing a
              circulation pump, motorised valve, or carrying out a power flush
              costs more. Your engineer provides an upfront quote after
              inspecting the system, so you know exactly what you will pay
              before any work starts.
            </p>
          ),
        },
      ]}
      ctaHeading="Heating Not Working Properly?"
      ctaContent={
        <p>
          Call OnCall Home Repairs on 0333 240 8428 and we will connect you with
          a qualified heating engineer in Nottingham who can diagnose and fix the
          problem. Clear pricing, guaranteed workmanship, and same-day
          availability when you need it most.
        </p>
      }
      serviceName="Central Heating Repair"
      serviceSlug="central-heating-repair"
      serviceDescription="Central heating repair in Nottingham. Radiators, pumps, valves, and full system diagnostics."
      categorySlug="boiler-heating"
      geoPrefix="/plumber-nottingham"
      serviceAreas={seoConfigNottingham.serviceAreas}
      geoConfig={seoConfigNottingham}
    />
  );
}
