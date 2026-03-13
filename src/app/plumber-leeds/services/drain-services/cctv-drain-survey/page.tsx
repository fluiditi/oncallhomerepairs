import { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { seoConfigLeeds } from "@/config/seo-leeds";

export const metadata: Metadata = {
  title: "CCTV Drain Survey Leeds | OnCall Home Repairs",
  description:
    "CCTV drain survey in Leeds. Camera inspection to diagnose drainage problems accurately. Vetted engineers. Call 0333 240 8428.",
  alternates: {
    canonical:
      "https://oncallhomerepairs.co.uk/plumber-leeds/services/drain-services/cctv-drain-survey",
  },
};

export default function CCTVDrainSurveyPage() {
  return (
    <ServicePage
      breadcrumbItems={[
        { name: "Services", href: "/plumber-leeds/services" },
        { name: "Drain Services", href: "/plumber-leeds/services/drain-services" },
        {
          name: "CCTV Drain Survey",
          href: "/plumber-leeds/services/drain-services/cctv-drain-survey",
        },
      ]}
      h1="CCTV Drain Survey in Leeds"
      heroIntro={
        <p>
          When a drain keeps blocking, smells persist despite cleaning, or you
          are buying a property and want to check the drainage before
          committing, a CCTV drain survey gives you a clear picture of what is
          happening underground. OnCall Home Repairs connects you with drain
          engineers in Leeds who use professional camera equipment to inspect
          your drainage system from the inside &mdash; without digging up your
          garden.
        </p>
      }
      whatWhyHeading="When and Why You Need a CCTV Drain Survey"
      whatWhyContent={
        <>
          <p>
            A CCTV drain survey involves feeding a waterproof camera on a
            flexible cable through your drainage system. The live footage is
            recorded and allows the engineer to see cracks, tree root
            intrusions, displaced joints, build-up of debris, and any
            structural issues affecting your drains. It removes the guesswork
            from drainage problems entirely.
          </p>
          <p>
            Homebuyers in Leeds increasingly request drain surveys as part
            of their pre-purchase checks. Older properties in the town centre,
            around the town centre, and in the established estates off Leeds
            Road often have clay drainage pipes that deteriorate over decades.
            A survey can reveal problems that a standard house survey would miss,
            potentially saving you thousands in repair costs after moving in.
          </p>
          <p>
            For existing homeowners, a CCTV survey is the recommended next step
            when{" "}
            <a
              href="/plumber-leeds/services/drain-services/drain-unblocking"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              drain unblocking
            </a>{" "}
            does not resolve a recurring problem, or when you notice subsidence
            near a drain run. The footage also provides evidence for insurance
            claims and disputes with{" "}
            <a
              href="/plumber-leeds/services/drain-services/blocked-drains"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              shared drainage
            </a>{" "}
            responsibility between neighbours.
          </p>
        </>
      }
      processHeading="How a CCTV Drain Survey Works"
      processSteps={[
        {
          title: "Access and Preparation",
          description:
            "The engineer locates the nearest manhole cover or access point and feeds the camera head into the drainage system. If the drain is partially blocked, a preliminary clearing may be carried out first to allow the camera a clear view of the pipe walls.",
        },
        {
          title: "Camera Inspection",
          description:
            "The camera is guided through the full length of the drainage run, recording high-definition footage as it moves. The engineer watches the live feed on a monitor, noting the location and nature of any defects, blockages, root intrusions, or collapsed sections.",
        },
        {
          title: "Report and Recommendations",
          description:
            "You receive a written report summarising the findings, accompanied by the recorded footage. The report details the condition of each section of pipe, highlights any faults, and recommends the most appropriate repair method for each issue identified.",
        },
      ]}
      relatedHeading="Related Drain Services"
      relatedServices={[
        {
          name: "Drain Unblocking",
          href: "/plumber-leeds/services/drain-services/drain-unblocking",
        },
        {
          name: "Blocked Drains",
          href: "/plumber-leeds/services/drain-services/blocked-drains",
        },
        {
          name: "Emergency Plumber",
          href: "/plumber-leeds/services/emergency-plumbing/emergency-plumber",
        },
      ]}
      serviceAreasHeading="CCTV Drain Surveys Across Leeds"
      serviceAreasContent={
        <p>
          Our drain engineers carry out CCTV surveys across Leeds, Headingley,
          Chapel Allerton, Roundhay, Guiseley, Garforth, Rothwell, and all
          surrounding areas. Pre-purchase drain surveys are available at short
          notice to fit conveyancing timelines. If you need a survey urgently
          due to a recurring blockage or suspected collapse, let us know when
          you call.
        </p>
      }
      faqs={[
        {
          question: "How much does a CCTV drain survey cost in Leeds?",
          answer:
            "The cost of a CCTV drain survey depends on the length of the drainage run and the number of access points involved. A standard domestic survey covering the main sewer run is typically a fixed price. Larger properties or commercial premises with extensive drainage networks may cost more. Your engineer will confirm the price before starting.",
        },
        {
          question: "Do I need a CCTV drain survey before buying a house?",
          answer:
            "It is not a legal requirement, but it is a wise investment, especially for older properties. A standard house survey does not inspect underground drainage. Problems like cracked pipes, root intrusion, and collapsed sections are common in properties over 30 years old and can cost several thousand pounds to repair. A pre-purchase survey gives you negotiating power or the option to walk away.",
        },
      ]}
      ctaHeading="Need to See Inside Your Drains?"
      ctaContent={
        <p>
          Stop guessing and get a clear diagnosis. Call OnCall Home Repairs and
          we will connect you with a drain engineer in Leeds who can carry
          out a CCTV survey and give you a full picture of your drainage system.
        </p>
      }
      serviceName="CCTV Drain Survey"
      serviceSlug="cctv-drain-survey"
      serviceDescription="CCTV drain survey in Leeds. Professional camera inspection to diagnose drainage problems, root intrusion, and pipe damage."
      categorySlug="drain-services"
      geoPrefix="/plumber-leeds"
      serviceAreas={seoConfigLeeds.serviceAreas}
      geoConfig={seoConfigLeeds}
    />
  );
}
