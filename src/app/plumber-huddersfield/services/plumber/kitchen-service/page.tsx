import { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { seoConfigHuddersfield } from "@/config/seo-huddersfield";

export const metadata: Metadata = {
  title: "Kitchen Plumber Huddersfield | OnCall Home Repairs",
  description:
    "Kitchen plumbing in Huddersfield. Sink installations, dishwasher connections, waste disposal, and repairs. Call 0333 240 8428.",
  alternates: {
    canonical:
      "https://oncallhomerepairs.co.uk/plumber-huddersfield/services/plumber/kitchen-service",
  },
};

export default function KitchenPlumbingPage() {
  return (
    <ServicePage
      breadcrumbItems={[
        { name: "Services", href: "/plumber-huddersfield/services" },
        { name: "General Plumbing", href: "/plumber-huddersfield/services/general-plumbing" },
        {
          name: "Kitchen Service",
          href: "/plumber-huddersfield/services/plumber/kitchen-service",
        },
      ]}
      h1="Kitchen Plumbing in Huddersfield"
      heroIntro={
        <p>
          The kitchen is the busiest room in most homes, and the plumbing
          behind it handles more daily use than any other system in the house.
          OnCall Home Repairs connects you with experienced plumbers in
          Huddersfield who install, repair, and maintain kitchen plumbing &mdash;
          from leaking sink traps and blocked waste pipes to full kitchen
          plumbing fit-outs for new kitchens.
        </p>
      }
      whatWhyHeading="Kitchen Plumbing Work We Cover"
      whatWhyContent={
        <>
          <p>
            Kitchen plumbing covers a broad set of jobs. Sink installations
            and replacements are among the most common &mdash; whether you
            are fitting a new worktop with an undermount sink, swapping an
            old Belfast sink for a modern stainless steel unit, or simply
            replacing a leaking waste trap. Our plumbers also connect and
            disconnect dishwashers and washing machines, ensuring waste hoses
            and supply connections are fitted correctly to prevent leaks.
          </p>
          <p>
            Blocked kitchen sinks are a regular call-out in Huddersfield. Grease,
            food scraps, and soap residue build up inside the waste pipe and
            trap over time, eventually blocking the flow completely. Our
            plumbers clear these blockages using manual and mechanical methods,
            and can advise on preventing recurrence. For persistent kitchen
            drain problems, we may recommend a{" "}
            <a
              href="/plumber-huddersfield/services/plumber/drain-unblocking"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              professional drain unblocking
            </a>{" "}
            to clear the full waste run.
          </p>
          <p>
            If you are having a new kitchen fitted and need all the plumbing
            done in one go &mdash; sink, taps, dishwasher, washing machine,
            and waste connections &mdash; our plumbers work alongside kitchen
            fitters to ensure everything is connected, tested, and
            leak-free before the kitchen is handed over. We also handle{" "}
            <a
              href="/plumber-huddersfield/services/plumber/tap-repair"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              kitchen tap repairs and replacements
            </a>{" "}
            as standalone jobs.
          </p>
        </>
      }
      processHeading="How Kitchen Plumbing Works"
      processSteps={[
        {
          title: "Tell Us What You Need",
          description:
            "Describe the work required: a leaking sink, a new dishwasher connection, a full kitchen plumbing fit-out, or a blocked waste pipe. If you are working with a kitchen fitter, let us know the timeline so we can coordinate the plumbing around their schedule.",
        },
        {
          title: "Site Visit and Quote",
          description:
            "For larger jobs, the plumber visits to assess the existing plumbing layout, measure pipe runs, and check water pressure. For smaller repairs like a leaking trap or a tap replacement, the plumber can often diagnose and quote on arrival. All quotes are provided before work starts.",
        },
        {
          title: "Installation or Repair",
          description:
            "Work is carried out with minimal disruption. New sinks are fitted with waste traps, overflows, and tap connections. Appliance connections include check valves and correct waste hose routing. Repairs are completed and tested before the plumber leaves. All work is backed by our workmanship guarantee.",
        },
      ]}
      relatedHeading="Related Services"
      relatedServices={[
        {
          name: "Tap Repair and Replacement",
          href: "/plumber-huddersfield/services/plumber/tap-repair",
        },
        {
          name: "Blocked Drains",
          href: "/plumber-huddersfield/services/plumber/blocked-drains",
        },
        {
          name: "Pipe Replacement",
          href: "/plumber-huddersfield/services/plumber/plumbing-pipe-repair",
        },
      ]}
      serviceAreasHeading="Kitchen Plumbing Across Huddersfield"
      serviceAreasContent={
        <p>
          Our plumbers carry out kitchen plumbing work across Huddersfield,
          Holmfirth, Marsden, Slaithwaite, Lindley, Birkby, Market
          Bosworth, and all surrounding areas. Whether you are dealing with a
          minor leak or a complete kitchen refit, we can connect you with a
          qualified plumber who handles kitchen work regularly.
        </p>
      }
      faqs={[
        {
          question: "Can a plumber connect my new dishwasher?",
          answer:
            "Yes. Connecting a dishwasher involves routing a cold water supply hose to the machine, fitting a waste hose to the drainage system with an air gap or check valve, and ensuring the electrical supply is accessible. Our plumbers handle the full connection and test the machine through a cycle before leaving.",
        },
        {
          question: "How long does it take to fit a new kitchen sink?",
          answer:
            "A straightforward sink swap where the existing plumbing connections are compatible typically takes between one and two hours. If the new sink requires different pipe routing, additional waste connections, or a new tap installation, the job may take half a day. Your plumber will confirm the expected timeframe after seeing the setup.",
        },
        {
          question: "Why does my kitchen sink drain slowly?",
          answer:
            "Slow-draining kitchen sinks are almost always caused by a build-up of grease and food debris inside the waste trap and pipe. Pouring boiling water down the sink after washing up can help prevent build-up, but once the pipe is significantly narrowed, a plumber with the right tools can clear it much more effectively than a chemical drain cleaner.",
        },
      ]}
      ctaHeading="Kitchen Plumbing Sorted."
      ctaContent={
        <p>
          From a leaking tap to a full kitchen plumbing fit-out, OnCall Home
          Repairs will match you with a qualified plumber in Huddersfield. Call
          for a clear, upfront quote.
        </p>
      }
      serviceName="Kitchen Plumbing"
      serviceSlug="kitchen-service"
      serviceDescription="Kitchen plumbing in Huddersfield. Sink installations, appliance connections, waste pipe repairs, and full kitchen plumbing by vetted local plumbers."
      categorySlug="plumber"
      geoPrefix="/plumber-huddersfield"
      serviceAreas={seoConfigHuddersfield.serviceAreas}
      geoConfig={seoConfigHuddersfield}
    />
  );
}
