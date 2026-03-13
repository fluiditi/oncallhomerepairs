import { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { seoConfigBirmingham } from "@/config/seo-birmingham";

export const metadata: Metadata = {
  title: "Toilet Repair Birmingham | OnCall Home Repairs",
  description:
    "Toilet repair in Birmingham. Cisterns, flush mechanisms, seals, and installations by vetted plumbers. Call 0333 240 8428.",
  alternates: {
    canonical:
      "https://oncallhomerepairs.co.uk/plumber-birmingham/services/drain-services/toilet-repair",
  },
};

export default function ToiletRepairPage() {
  return (
    <ServicePage
      breadcrumbItems={[
        { name: "Services", href: "/plumber-birmingham/services" },
        { name: "Drain Services", href: "/plumber-birmingham/services/drain-services" },
        {
          name: "Toilet Repair",
          href: "/plumber-birmingham/services/drain-services/toilet-repair",
        },
      ]}
      h1="Toilet Repair in Birmingham"
      heroIntro={
        <p>
          A toilet that will not flush, constantly runs, leaks from the base,
          or has a cracked cistern is a problem you want fixed quickly.
          OnCall Home Repairs connects you with experienced plumbers in
          Birmingham who repair and replace toilet components, cisterns, and
          complete toilet units &mdash; with upfront pricing and no hidden
          call-out fees.
        </p>
      }
      whatWhyHeading="Common Toilet Faults and How We Fix Them"
      whatWhyContent={
        <>
          <p>
            Toilets are mechanically simple but have several components that
            wear over time. The flush valve (siphon or dual flush mechanism)
            handles thousands of flushes before it starts to fail. The fill
            valve controls the water level in the cistern and can stick, leak,
            or fail to shut off &mdash; causing the toilet to run continuously
            and waste water. The wax or rubber seal between the toilet pan and
            the soil pipe can deteriorate, leading to leaks and unpleasant
            smells.
          </p>
          <p>
            In properties across Birmingham, hard water deposits also play a role.
            Limescale can build up inside the cistern, jamming flush mechanisms
            and reducing the effectiveness of each flush. Our plumbers can
            descale the cistern internals or replace the mechanism entirely,
            depending on the condition and age of the components.
          </p>
          <p>
            If your toilet is beyond economical repair &mdash; for example, a
            cracked pan or a cistern that is no longer manufactured &mdash; our
            plumbers can supply and fit a new toilet as part of a{" "}
            <a
              href="/plumber-birmingham/services/general-plumbing/bathroom-plumbing"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              bathroom plumbing
            </a>{" "}
            job. If the toilet is blocked rather than faulty, see our{" "}
            <a
              href="/plumber-birmingham/services/drain-services/toilet-unblocking"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              toilet unblocking
            </a>{" "}
            service instead.
          </p>
        </>
      }
      processHeading="How Toilet Repair Works"
      processSteps={[
        {
          title: "Describe the Fault",
          description:
            "Tell us what the toilet is doing: running constantly, not flushing fully, leaking from the base, or rocking on the floor. If you have already tried basic fixes like jiggling the handle, mention that too. This helps the plumber arrive with the right parts.",
        },
        {
          title: "Diagnosis",
          description:
            "The plumber inspects the cistern internals, fill valve, flush mechanism, overflow, and the seal at the base of the pan. For leaks, they check whether the issue is from the cistern, the supply connection, or the soil pipe seal beneath the toilet.",
        },
        {
          title: "Repair or Component Replacement",
          description:
            "Worn siphons, fill valves, flush buttons, and seals are replaced with new, compatible parts. If the cistern or pan is cracked, the plumber will discuss replacement options and can often fit a new unit on the same visit or within a day.",
        },
      ]}
      relatedHeading="Related Services"
      relatedServices={[
        {
          name: "Toilet Unblocking",
          href: "/plumber-birmingham/services/drain-services/toilet-unblocking",
        },
        {
          name: "Bathroom Plumbing",
          href: "/plumber-birmingham/services/general-plumbing/bathroom-plumbing",
        },
        {
          name: "Overflow Repair",
          href: "/plumber-birmingham/services/emergency-plumbing/overflow-repair",
        },
      ]}
      serviceAreasHeading="Toilet Repair Across Birmingham"
      serviceAreasContent={
        <p>
          Our plumbers carry out toilet repairs across Birmingham, Edgbaston,
          Moseley, Kings Heath, Harborne, Selly Oak, and all
          surrounding areas. Most toilet repairs are completed in a single
          visit. If a replacement toilet is needed, the plumber can source
          the unit and return to fit it within a short timeframe.
        </p>
      }
      faqs={[
        {
          question: "Why does my toilet keep running after flushing?",
          answer:
            "A toilet that runs continuously after flushing usually has a faulty fill valve or a worn flapper seal at the bottom of the cistern. The fill valve fails to shut off at the correct water level, or water leaks past the flapper back into the bowl, triggering the fill cycle endlessly. A plumber can replace the faulty component in under an hour.",
        },
        {
          question: "Can a leaking toilet damage my floor?",
          answer:
            "Yes. A toilet that leaks at the base can cause water damage to floor boards, chipboard, or tiles over time. In upstairs bathrooms, the water can seep through to the ceiling below. If you notice dampness or discolouration around the base of your toilet, have a plumber inspect and reseal it before the damage worsens.",
        },
      ]}
      ctaHeading="Toilet Playing Up? Get It Repaired."
      ctaContent={
        <p>
          A faulty toilet is disruptive for the whole household. Call OnCall
          Home Repairs and we will connect you with a vetted plumber in
          Birmingham who can diagnose and fix the problem &mdash; usually in a
          single visit.
        </p>
      }
      serviceName="Toilet Repair"
      serviceSlug="toilet-repair"
      serviceDescription="Toilet repair in Birmingham. Cistern mechanisms, fill valves, flush faults, and seal replacements by vetted local plumbers."
      categorySlug="drain-services"
      geoPrefix="/plumber-birmingham"
      serviceAreas={seoConfigBirmingham.serviceAreas}
      geoConfig={seoConfigBirmingham}
    />
  );
}
