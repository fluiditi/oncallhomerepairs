import { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { seoConfigNottingham } from "@/config/seo-nottingham";

export const metadata: Metadata = {
  title: "Drain Unblocking Nottingham | OnCall Home Repairs",
  description:
    "Professional drain unblocking in Nottingham. High-pressure jetting and manual rodding. Vetted plumbers. Call 0333 240 8428.",
  alternates: {
    canonical:
      "https://oncallhomerepairs.co.uk/plumber-nottingham/services/drain-services/drain-unblocking",
  },
};

export default function DrainUnblockingPage() {
  return (
    <ServicePage
      breadcrumbItems={[
        { name: "Services", href: "/plumber-nottingham/services" },
        { name: "Drain Services", href: "/plumber-nottingham/services/drain-services" },
        {
          name: "Drain Unblocking",
          href: "/plumber-nottingham/services/drain-services/drain-unblocking",
        },
      ]}
      h1="Drain Unblocking in Nottingham"
      heroIntro={
        <p>
          A blocked drain is unpleasant, inconvenient, and a potential health
          hazard if left unresolved. OnCall Home Repairs connects you with
          experienced drain engineers in Nottingham who use professional-grade
          equipment &mdash; including high-pressure water jetting and manual
          drain rods &mdash; to clear blockages quickly and thoroughly. We
          cover internal and external drains for both homes and businesses.
        </p>
      }
      whatWhyHeading="Why Drains Block and What We Do About It"
      whatWhyContent={
        <>
          <p>
            Most drain blockages in Nottingham homes are caused by a gradual
            build-up of grease, food waste, hair, soap residue, and wet wipes
            in the pipework. Over time, this accumulation narrows the pipe bore
            until water can no longer flow through. External drains can also
            block due to leaf debris, tree root intrusion, or ground movement
            that displaces pipe joints.
          </p>
          <p>
            Our drain engineers arrive with the equipment needed to deal with
            both straightforward and stubborn blockages. For minor clogs, manual
            rodding is often sufficient. For more severe blockages &mdash;
            particularly those deep in the drainage system or caused by
            solidified grease &mdash; high-pressure water jetting blasts the
            obstruction clear and scours the pipe walls to prevent rapid
            re-blocking.
          </p>
          <p>
            If the blockage keeps coming back or the drain shows signs of
            structural damage, the engineer may recommend a{" "}
            <a
              href="/plumber-nottingham/services/drain-services/cctv-drain-survey"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              CCTV drain survey
            </a>{" "}
            to investigate further. For{" "}
            <a
              href="/plumber-nottingham/services/drain-services/blocked-drains"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              blocked drain emergencies
            </a>{" "}
            that cannot wait, our network is available for same-day attendance
            across the Nottingham area.
          </p>
        </>
      }
      processHeading="How Drain Unblocking Works"
      processSteps={[
        {
          title: "Initial Assessment",
          description:
            "The engineer identifies which drain is affected, checks access points, and determines the likely location and cause of the blockage. They may run water through the system to gauge how severe the restriction is before selecting the right clearing method.",
        },
        {
          title: "Clearing the Blockage",
          description:
            "Depending on the nature of the blockage, the engineer uses manual drain rods, a mechanical auger, or a high-pressure jetting unit. Jetting is particularly effective for grease build-up and compacted debris, as it clears the full diameter of the pipe rather than just punching a hole through the centre.",
        },
        {
          title: "Flow Test and Inspection",
          description:
            "After clearing, the engineer runs water through the drain to confirm full flow has been restored. They inspect the drain opening for signs of damage, root intrusion, or collapse that could cause future blockages. If further investigation is needed, a CCTV survey is recommended.",
        },
      ]}
      relatedHeading="Related Drain Services"
      relatedServices={[
        {
          name: "Blocked Drains",
          href: "/plumber-nottingham/services/drain-services/blocked-drains",
        },
        {
          name: "CCTV Drain Survey",
          href: "/plumber-nottingham/services/drain-services/cctv-drain-survey",
        },
        {
          name: "Toilet Unblocking",
          href: "/plumber-nottingham/services/drain-services/toilet-unblocking",
        },
      ]}
      serviceAreasHeading="Drain Unblocking Across Nottingham"
      serviceAreasContent={
        <p>
          Our drain engineers cover Nottingham, West Bridgford, Beeston, Arnold,
          Bulwell, Sherwood, and the surrounding area. External drain
          blockages are common after heavy rainfall and during autumn when
          leaves enter the drainage system. If you need urgent drain clearing,
          call us and we will arrange same-day attendance where possible.
        </p>
      }
      faqs={[
        {
          question: "What is the difference between drain unblocking and drain cleaning?",
          answer:
            "Drain unblocking is the process of clearing a specific blockage that is preventing water from flowing. Drain cleaning is a more thorough process that removes build-up from the full length of the pipe to improve flow and prevent future blockages. Jetting effectively does both at the same time, which is why it is the preferred method for most professional jobs.",
        },
        {
          question: "Can I unblock a drain myself with shop-bought products?",
          answer:
            "Supermarket drain unblockers can help with minor clogs close to the plug hole, but they rarely clear deeper blockages. They can also damage older pipework if used repeatedly. For a blockage that a plunger or shop product cannot shift, a professional drain engineer with the right equipment will resolve the problem permanently.",
        },
        {
          question: "How can I prevent my drains from blocking?",
          answer:
            "Avoid pouring cooking oil or fat down the sink, use drain guards over plug holes to catch hair and debris, and never flush wet wipes or cotton buds. Running hot water through your kitchen sink after washing up helps keep grease moving through the system rather than solidifying in the pipes.",
        },
      ]}
      ctaHeading="Drain Blocked? Get It Cleared Today."
      ctaContent={
        <p>
          A blocked drain only gets worse the longer you leave it. Call OnCall
          Home Repairs and we will connect you with a drain engineer in
          Nottingham who can clear the blockage and restore full flow.
        </p>
      }
      serviceName="Drain Unblocking"
      serviceSlug="drain-unblocking"
      serviceDescription="Professional drain unblocking in Nottingham using high-pressure jetting and manual rodding. Fast, effective clearance for homes and businesses."
      categorySlug="drain-services"
      geoPrefix="/plumber-nottingham"
      serviceAreas={seoConfigNottingham.serviceAreas}
      geoConfig={seoConfigNottingham}
    />
  );
}
