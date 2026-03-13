import { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { seoConfigLiverpool } from "@/config/seo-liverpool";

export const metadata: Metadata = {
  title: "Toilet Unblocking Liverpool | OnCall Home Repairs",
  description:
    "Toilet unblocking in Liverpool. Fast, hygienic clearance of blocked toilets by vetted plumbers. Call 0333 240 8428.",
  alternates: {
    canonical:
      "https://oncallhomerepairs.co.uk/plumber-liverpool/services/drain-services/toilet-unblocking",
  },
};

export default function ToiletUnblockingPage() {
  return (
    <ServicePage
      breadcrumbItems={[
        { name: "Services", href: "/plumber-liverpool/services" },
        { name: "Drain Services", href: "/plumber-liverpool/services/drain-services" },
        {
          name: "Toilet Unblocking",
          href: "/plumber-liverpool/services/drain-services/toilet-unblocking",
        },
      ]}
      h1="Toilet Unblocking in Liverpool"
      heroIntro={
        <p>
          A blocked toilet that will not clear with a plunger is one of those
          problems that needs sorting immediately &mdash; especially if it is
          your only toilet. OnCall Home Repairs connects you with plumbers in
          Liverpool who carry out fast, hygienic toilet unblocking using
          professional tools. No judgment, no fuss, and your toilet is back in
          service quickly.
        </p>
      }
      whatWhyHeading="What Causes a Toilet to Block?"
      whatWhyContent={
        <>
          <p>
            The most frequent cause of a blocked toilet is flushing items that
            the drainage system was not designed to handle. Wet wipes, sanitary
            products, cotton buds, nappies, and excessive amounts of toilet
            paper can all create a blockage in the trap or the soil pipe
            downstream. Even products labelled &ldquo;flushable&rdquo; can
            cause problems because they do not break down as quickly as
            standard toilet tissue.
          </p>
          <p>
            In older Liverpool properties, narrow soil pipes and ageing clay
            drainage contribute to the problem. A partial blockage further down
            the line can cause the toilet to drain slowly before eventually
            backing up completely. If your toilet blocks repeatedly, it may
            indicate a deeper issue in the drainage system that requires a{" "}
            <a
              href="/plumber-liverpool/services/drain-services/cctv-drain-survey"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              CCTV drain survey
            </a>{" "}
            to investigate.
          </p>
          <p>
            Our plumbers use professional toilet augers and, where necessary,{" "}
            <a
              href="/plumber-liverpool/services/drain-services/drain-unblocking"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              drain jetting equipment
            </a>{" "}
            to clear the blockage completely. They work cleanly and
            hygienically, leaving your bathroom in the same condition they
            found it.
          </p>
        </>
      }
      processHeading="How Toilet Unblocking Works"
      processSteps={[
        {
          title: "Call and Describe the Problem",
          description: (
            <>
              Ring{" "}
              <a
                href="tel:03332408428"
                className="font-semibold text-primary"
              >
                0333 240 8428
              </a>{" "}
              and tell us what has happened. Let us know whether the toilet is
              completely blocked or draining slowly, whether the water level is
              rising, and how many toilets are affected. If all toilets in the
              house are blocked, it likely points to a main drain issue.
            </>
          ),
        },
        {
          title: "Professional Clearing",
          description:
            "The plumber uses a toilet auger to reach and break up the blockage within the trap. If the obstruction is further down the soil pipe, they may need to access the drain externally and use rodding or jetting equipment. The approach depends on the location and nature of the blockage.",
        },
        {
          title: "Test and Clean Up",
          description:
            "Once cleared, the plumber flushes the toilet several times to confirm full drainage has been restored. They clean the work area thoroughly and advise on preventing future blockages. If they suspect a deeper drainage issue, they will recommend a camera survey.",
        },
      ]}
      relatedHeading="Related Services"
      relatedServices={[
        {
          name: "Toilet Repair",
          href: "/plumber-liverpool/services/drain-services/toilet-repair",
        },
        {
          name: "Blocked Drains",
          href: "/plumber-liverpool/services/drain-services/blocked-drains",
        },
        {
          name: "Emergency Plumber",
          href: "/plumber-liverpool/services/emergency-plumbing/emergency-plumber",
        },
      ]}
      serviceAreasHeading="Toilet Unblocking Across Liverpool"
      serviceAreasContent={
        <p>
          Our plumbers attend toilet unblocking jobs across Liverpool, Toxteth,
          Allerton, Woolton, Childwall, West Derby, and all surrounding areas.
          If your only toilet is blocked and you need urgent help, let us know
          when you call and we will prioritise your booking for same-day
          attendance.
        </p>
      }
      faqs={[
        {
          question:
            "Should I keep trying to flush a blocked toilet?",
          answer:
            "No. Repeatedly flushing a blocked toilet risks overflowing the bowl and flooding your bathroom floor. If one flush does not clear the blockage, stop flushing and call a plumber. If the water level is already high, do not flush again at all.",
        },
        {
          question:
            "Why does my toilet block regularly?",
          answer:
            "Recurring toilet blockages usually indicate either a partial obstruction further down the drainage line or a habit of flushing items that do not break down easily. If clearing the toilet resolves the problem only temporarily, a CCTV drain survey can identify whether there is a structural issue such as a displaced joint, tree root intrusion, or a narrowing in the pipe.",
        },
      ]}
      ctaHeading="Toilet Blocked? Get It Sorted Fast."
      ctaContent={
        <p>
          A blocked toilet is urgent and embarrassing. Call OnCall Home Repairs
          and we will connect you with a plumber in Liverpool who can clear it
          quickly and discreetly &mdash; same-day where possible.
        </p>
      }
      serviceName="Toilet Unblocking"
      serviceSlug="toilet-unblocking"
      serviceDescription="Fast, hygienic toilet unblocking in Liverpool. Professional clearance of blocked toilets by vetted local plumbers."
      categorySlug="drain-services"
      geoPrefix="/plumber-liverpool"
      serviceAreas={seoConfigLiverpool.serviceAreas}
      geoConfig={seoConfigLiverpool}
    />
  );
}
