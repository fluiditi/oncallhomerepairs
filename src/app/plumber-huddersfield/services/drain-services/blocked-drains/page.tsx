import { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { seoConfigHuddersfield } from "@/config/seo-huddersfield";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blocked Drains Huddersfield | OnCall Home Repairs",
  description:
    "Blocked drain clearing in Huddersfield. Fast, effective unblocking for homes and businesses. Call 0333 240 8428.",
  alternates: {
    canonical:
      "https://oncallhomerepairs.co.uk/plumber-huddersfield/services/drain-services/blocked-drains",
  },
};

export default function BlockedDrainsPage() {
  return (
    <ServicePage
      breadcrumbItems={[
        { name: "Services", href: "/plumber-huddersfield/services" },
        { name: "Drain Services", href: "/plumber-huddersfield/services/drain-services" },
        {
          name: "Blocked Drains",
          href: "/plumber-huddersfield/services/drain-services/blocked-drains",
        },
      ]}
      h1="Blocked Drains in Huddersfield"
      heroIntro={
        <p>
          A blocked drain is more than an inconvenience — it can cause foul
          smells, slow-draining water, and if left untreated, sewage backing up
          into your property. OnCall Home Repairs connects you with experienced
          drainage plumbers in Huddersfield who can clear blockages quickly and
          effectively. Whether it is a slow kitchen sink, a gurgling bathroom
          drain, or a completely blocked external drain, call us and we will
          match you with a plumber who can sort it out — often on the same day.
        </p>
      }
      whatWhyHeading="What Causes Blocked Drains and Why Act Fast"
      whatWhyContent={
        <>
          <p>
            Drains block for different reasons depending on where they are in
            your property. Kitchen drains commonly block with a build-up of
            grease, fat, and food waste that solidifies inside the pipe.
            Bathroom drains are typically clogged by hair, soap residue, and
            toothpaste. External drains and soil pipes can block with tree
            roots, leaves, silt, and — in some cases — objects that should never
            have been flushed, such as wet wipes and sanitary products.
          </p>
          <p>
            The early warning signs are usually clear: water draining slowly
            from sinks or baths, a gurgling sound from plugholes, bad smells
            coming from drains, or water pooling around external drain covers.
            These signs mean a partial blockage is forming, and acting at this
            stage is far easier and cheaper than waiting until the drain is
            completely blocked. A full blockage in a soil pipe can cause raw
            sewage to back up through{" "}
            <Link
              href="/plumber-huddersfield/services/drain-services/toilet-unblocking"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              toilets
            </Link>{" "}
            and low-level drains, creating a health hazard that requires
            immediate attention.
          </p>
          <p>
            The plumbers in our network use professional-grade tools to clear
            blockages: manual drain rods for straightforward obstructions,
            high-pressure water jetting for stubborn or grease-based blockages,
            and where necessary, a{" "}
            <Link
              href="/plumber-huddersfield/services/drain-services/cctv-drain-survey"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              CCTV drain camera
            </Link>{" "}
            to inspect the inside of the pipe and identify the exact location
            and cause of the problem. Once cleared, your plumber can advise on
            steps to prevent the blockage from recurring.
          </p>
        </>
      }
      processHeading="How Blocked Drain Clearing Works"
      processSteps={[
        {
          title: "Call with the Symptoms",
          description: (
            <p>
              Ring 0333 240 8428 and describe what is happening — which drains
              are affected, whether there is standing water or a bad smell, and
              how long the problem has been developing. This helps us match you
              with the right plumber.
            </p>
          ),
        },
        {
          title: "Plumber Assesses the Blockage",
          description: (
            <p>
              Your matched plumber visits the property and identifies which
              section of the drainage system is blocked. They check internal
              waste pipes, external drains, and access points to determine where
              the obstruction is and what has caused it.
            </p>
          ),
        },
        {
          title: "Blockage Cleared",
          description: (
            <p>
              Using drain rods, high-pressure jetting, or specialist tools as
              appropriate, the plumber clears the blockage. For deep or
              recurring blockages, they may use a CCTV camera to check for
              structural damage, root ingress, or collapsed sections that need
              further attention.
            </p>
          ),
        },
        {
          title: "Flow Tested and Advice Given",
          description: (
            <p>
              Once the drain is clear, the plumber tests the flow to confirm
              water is draining freely. They then advise on what caused the
              blockage and how to prevent it happening again — whether that
              means fitting a drain guard, changing disposal habits, or
              scheduling periodic maintenance.
            </p>
          ),
        },
      ]}
      benefitsHeading="Why Choose OnCall for Blocked Drains"
      benefits={[
        {
          title: "Fast Response, Often Same Day",
          description: (
            <p>
              Blocked drains are urgent. We aim to connect you with a plumber
              who can attend the same day, particularly for complete blockages
              causing sewage issues.
            </p>
          ),
        },
        {
          title: "Professional Equipment",
          description: (
            <p>
              Our plumbers use drain rods, high-pressure jetting machines, and
              CCTV cameras — not just a plunger. Blockages are cleared properly
              and the cause is identified.
            </p>
          ),
        },
        {
          title: "Internal and External Drains",
          description: (
            <p>
              Whether the blockage is under your kitchen sink, in a bathroom
              waste pipe, or in an external manhole, our plumbers can deal with
              it.
            </p>
          ),
        },
        {
          title: "Clear Pricing, No Hidden Fees",
          description: (
            <p>
              Your plumber quotes a price before starting work. You know exactly
              what the job will cost, with no surprises on the invoice.
            </p>
          ),
        },
        {
          title: "Prevention Advice Included",
          description: (
            <p>
              After clearing the blockage, your plumber explains what caused it
              and gives you practical tips to stop it happening again.
            </p>
          ),
        },
      ]}
      relatedHeading="Related Drain Services"
      relatedServices={[
        {
          name: "Drain Unblocking",
          href: "/plumber-huddersfield/services/drain-services/drain-unblocking",
        },
        {
          name: "CCTV Drain Survey",
          href: "/plumber-huddersfield/services/drain-services/cctv-drain-survey",
        },
        {
          name: "Toilet Unblocking",
          href: "/plumber-huddersfield/services/drain-services/toilet-unblocking",
        },
        {
          name: "Emergency Plumber",
          href: "/plumber-huddersfield/services/emergency-plumbing/emergency-plumber",
        },
      ]}
      serviceAreasHeading="Blocked Drain Clearing Across Huddersfield"
      serviceAreasContent={
        <p>
          Our drainage plumbers cover Huddersfield and every surrounding town and
          village. From terraced properties in Huddersfield centre with shared
          drainage runs to detached homes in Holmfirth, Marsden, and Market
          Bosworth with private systems, our plumbers are experienced with all
          types of domestic drainage. Older properties in the area may have
          clay or cast-iron drainage pipes that are more prone to blockages and
          root ingress — our plumbers know what to look for.
        </p>
      }
      faqs={[
        {
          question: "What are the most common causes of blocked drains?",
          answer:
            "The most common causes are grease and fat build-up in kitchen drains, hair and soap in bathroom drains, and foreign objects such as wet wipes, cotton buds, and sanitary products flushed down toilets. External drains can block due to tree root ingress, leaf debris, and ground settlement causing pipes to sag or crack.",
          answerJsx: (
            <p>
              The most common causes are grease and fat build-up in kitchen
              drains, hair and soap in bathroom drains, and foreign objects such
              as wet wipes, cotton buds, and sanitary products flushed down
              toilets. External drains can block due to tree root ingress, leaf
              debris, and ground settlement causing pipes to sag or crack.
            </p>
          ),
        },
        {
          question: "How much does it cost to clear a blocked drain?",
          answer:
            "The cost depends on the severity and location of the blockage. A straightforward internal blockage cleared with rods is at the lower end of the price scale. External blockages requiring high-pressure jetting or CCTV inspection cost more. Your plumber provides a clear quote after assessing the situation, so you always know the price before work begins.",
          answerJsx: (
            <p>
              The cost depends on the severity and location of the blockage. A
              straightforward internal blockage cleared with rods is at the
              lower end of the price scale. External blockages requiring
              high-pressure jetting or CCTV inspection cost more. Your plumber
              provides a clear quote after assessing the situation, so you
              always know the price before work begins.
            </p>
          ),
        },
        {
          question: "How can I prevent blocked drains?",
          answer:
            "Never pour cooking oil or fat down the kitchen sink — let it cool and put it in the bin. Use a drain strainer in the shower to catch hair. Only flush toilet paper down the toilet — no wet wipes, cotton pads, or sanitary products. Outside, keep drain covers clear of leaves and debris. A periodic hot water flush down kitchen drains can help dissolve minor grease build-up before it becomes a problem.",
          answerJsx: (
            <p>
              Never pour cooking oil or fat down the kitchen sink — let it cool
              and put it in the bin. Use a drain strainer in the shower to catch
              hair. Only flush toilet paper down the toilet — no wet wipes,
              cotton pads, or sanitary products. Outside, keep drain covers
              clear of leaves and debris. A periodic hot water flush down
              kitchen drains can help dissolve minor grease build-up before it
              becomes a problem.
            </p>
          ),
        },
        {
          question: "When does a blocked drain become an emergency?",
          answer:
            "A blocked drain becomes an emergency when sewage is backing up into your property, when multiple drains are blocked simultaneously (suggesting a main drain blockage), or when standing water is posing a health risk. If you are experiencing any of these situations, call us immediately and we will prioritise getting a plumber to you as quickly as possible.",
          answerJsx: (
            <p>
              A blocked drain becomes an emergency when sewage is backing up
              into your property, when multiple drains are blocked simultaneously
              (suggesting a main drain blockage), or when standing water is
              posing a health risk. If you are experiencing any of these
              situations, call us immediately and we will prioritise getting an{" "}
              <Link
                href="/plumber-huddersfield/services/emergency-plumbing/emergency-plumber"
                className="text-primary underline underline-offset-2 hover:text-primary/80"
              >
                emergency plumber
              </Link>{" "}
              to you as quickly as possible.
            </p>
          ),
        },
      ]}
      ctaHeading="Blocked Drain in Huddersfield?"
      ctaContent={
        <p>
          Do not live with slow drains or foul smells. Call OnCall Home Repairs
          on 0333 240 8428 and we will connect you with a local drainage plumber
          who can clear the blockage fast. Same-day service available with clear,
          upfront pricing.
        </p>
      }
      serviceName="Blocked Drains"
      serviceSlug="blocked-drains"
      serviceDescription="Blocked drain clearing in Huddersfield. Fast, effective unblocking for homes and businesses."
      categorySlug="drain-services"
      geoPrefix="/plumber-huddersfield"
      serviceAreas={seoConfigHuddersfield.serviceAreas}
      geoConfig={seoConfigHuddersfield}
    />
  );
}
