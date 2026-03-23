import { Metadata } from "next";
import { ServicePage } from "@/components/service-page";

export const metadata: Metadata = {
  title: "Stopcock Repair Hinckley | OnCall Home Repairs",
  description:
    "Stopcock repair and replacement in Hinckley. Regain control of your water supply. Vetted plumbers. Call 0333 240 8428.",
  alternates: {
    canonical:
      "https://oncallhomerepairs.co.uk/plumber-hinckley/services/plumber/stopcock-repair",
  },
};

export default function StopcockRepairPage() {
  return (
    <ServicePage
      breadcrumbItems={[
        { name: "Services", href: "/plumber-hinckley/services" },
        { name: "Emergency Plumbing", href: "/plumber-hinckley/services/emergency-plumbing" },
        {
          name: "Stopcock Repair",
          href: "/plumber-hinckley/services/plumber/stopcock-repair",
        },
      ]}
      h1="Stopcock Repair and Replacement in Hinckley"
      heroIntro={
        <p>
          Your stopcock is the main shut-off valve for your entire water supply.
          If it seizes, leaks, or fails to close properly, you lose the ability
          to stop water flow during an emergency. OnCall Home Repairs connects
          you with vetted plumbers in Hinckley who can repair or replace faulty
          stopcocks &mdash; often on the same day you call. Regain full control
          of your water supply before a minor problem becomes a major one.
        </p>
      }
      whatWhyHeading="Why a Working Stopcock Matters"
      whatWhyContent={
        <>
          <p>
            Most homeowners never think about their stopcock until they need it
            urgently. When a pipe bursts or an appliance starts leaking, the
            first thing any plumber will ask you to do is turn off the water at
            the stopcock. If the valve is seized solid, corroded, or the handle
            snaps off, you cannot stop the flow &mdash; and the damage escalates
            rapidly.
          </p>
          <p>
            In many Hinckley properties, especially those built before the 1980s,
            the internal stopcock sits under the kitchen sink and has not been
            turned in years. Mineral deposits from Leicestershire&rsquo;s hard
            water build up around the valve seat, gradually seizing the
            mechanism. By the time you need it, it will not budge.
          </p>
          <p>
            Our plumbers can free seized stopcocks, replace worn washers and
            seals, or fit an entirely new valve if the existing one is beyond
            repair. If you also need work on your{" "}
            <a
              href="/plumber-hinckley/services/plumber/plumbing-pipe-repair"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              pipework
            </a>{" "}
            or have experienced a{" "}
            <a
              href="/plumber-hinckley/services/plumber/flood-response"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              flood
            </a>{" "}
            because your stopcock failed, we can arrange both jobs through a
            single call to{" "}
            <a href="tel:03332408428" className="font-semibold text-primary">
              0333 240 8428
            </a>
            .
          </p>
        </>
      }
      processHeading="How Stopcock Repair Works"
      processSteps={[
        {
          title: "Describe Your Stopcock Problem",
          description:
            "Tell us whether the stopcock is seized, leaking from the spindle, or if the handle has broken. Let us know the location of the valve and whether you currently have an active leak that needs isolating. This helps us send the right plumber.",
        },
        {
          title: "Inspection and Quote",
          description:
            "Your plumber will inspect the stopcock, check the surrounding pipework for corrosion or damage, and determine whether a repair or full replacement is the best course of action. You will receive a clear quote before any work starts.",
        },
        {
          title: "Repair or Replacement",
          description:
            "For seized stopcocks, the plumber will attempt to free the mechanism and replace internal seals. If the valve body is corroded or damaged beyond repair, a new stopcock is fitted. The water supply is temporarily shut off at the external stop valve during replacement.",
        },
      ]}
      relatedHeading="Related Services"
      relatedServices={[
        {
          name: "Emergency Plumber",
          href: "/plumber-hinckley/services/plumber/emergency-plumber",
        },
        {
          name: "Pipe Replacement",
          href: "/plumber-hinckley/services/plumber/plumbing-pipe-repair",
        },
        {
          name: "Leak Detection and Repair",
          href: "/plumber-hinckley/services/plumber/plumbing-leak-detection",
        },
      ]}
      serviceAreasHeading="Stopcock Repair Across Hinckley"
      serviceAreasContent={
        <p>
          We connect homeowners with plumbers who carry out stopcock repairs
          across Hinckley, Burbage, Earl Shilton, Barwell, and all surrounding
          villages. If your stopcock has failed during an emergency, let us know
          when you call and we will prioritise your booking accordingly.
        </p>
      }
      faqs={[
        {
          question: "Where is my stopcock located?",
          answer:
            "In most UK homes, the internal stopcock is under the kitchen sink, usually on the pipe that comes through the wall or floor from the street. Some properties have them in a downstairs cloakroom, utility room, or under the stairs. There is also an external stop valve at the boundary of your property, typically under a small metal cover in the pavement or front path.",
        },
        {
          question: "Can a seized stopcock be freed without replacing it?",
          answer:
            "In many cases, yes. A plumber can apply penetrating oil and carefully work the valve until it moves freely again. However, if the valve body is cracked, heavily corroded, or the internal washer has disintegrated, replacement is the safer long-term option. Your plumber will advise on the best approach after inspection.",
        },
        {
          question: "How long does a stopcock replacement take?",
          answer:
            "A straightforward stopcock replacement typically takes between one and two hours, including draining down the affected section of pipe and testing the new valve. If additional pipework is needed due to corrosion around the old valve, it may take slightly longer.",
        },
      ]}
      ctaHeading="Stopcock Not Working? Get It Fixed Today."
      ctaContent={
        <p>
          A faulty stopcock leaves your home unprotected against water damage.
          Call OnCall Home Repairs and we will connect you with a vetted plumber
          in Hinckley who can repair or replace your stopcock &mdash; often the
          same day.
        </p>
      }
      serviceName="Stopcock Repair"
      serviceSlug="stopcock-repair"
      serviceDescription="Stopcock repair and replacement in Hinckley. Regain control of your water supply with same-day service from vetted local plumbers."
      categorySlug="plumber"
    />
  );
}
