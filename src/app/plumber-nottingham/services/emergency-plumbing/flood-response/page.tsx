import { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { seoConfigNottingham } from "@/config/seo-nottingham";

export const metadata: Metadata = {
  title: "Flood Response Plumber Nottingham | OnCall Home Repairs",
  description:
    "Emergency flood response in Nottingham. Rapid water damage control by vetted plumbers, available 24/7. Call 0333 240 8428.",
  alternates: {
    canonical:
      "https://oncallhomerepairs.co.uk/plumber-nottingham/services/emergency-plumbing/flood-response",
  },
};

export default function FloodResponsePage() {
  return (
    <ServicePage
      breadcrumbItems={[
        { name: "Services", href: "/plumber-nottingham/services" },
        { name: "Emergency Plumbing", href: "/plumber-nottingham/services/emergency-plumbing" },
        {
          name: "Flood Response",
          href: "/plumber-nottingham/services/emergency-plumbing/flood-response",
        },
      ]}
      h1="Flood Response Plumber in Nottingham"
      heroIntro={
        <p>
          When water is spreading across your floor and dripping through your
          ceiling, every minute matters. OnCall Home Repairs connects you with
          experienced flood response plumbers in Nottingham who can reach your
          property quickly, stop the source of the flooding, and help you
          regain control of the situation. Our network operates 24/7 &mdash;
          because flooding does not wait for a convenient time.
        </p>
      }
      whatWhyHeading="Fast Action to Limit Water Damage"
      whatWhyContent={
        <>
          <p>
            Internal flooding is one of the most stressful plumbing emergencies
            a homeowner can face. It can be triggered by a{" "}
            <a
              href="/plumber-nottingham/services/emergency-plumbing/burst-pipe-repair"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              burst pipe
            </a>
            , a failed appliance connection, an overflowing tank, or even a
            severe{" "}
            <a
              href="/plumber-nottingham/services/drain-services/blocked-drains"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              blocked drain
            </a>{" "}
            that backs up into your property. Whatever the cause, the priority
            is always the same: stop the water, contain the damage, and begin
            restoring normal service.
          </p>
          <p>
            Our plumbers arrive equipped with the tools needed to isolate your
            water supply, identify the source of the flood, and carry out
            immediate repairs where possible. For larger incidents, they can
            advise on temporary protective measures while permanent repairs are
            arranged.
          </p>
          <p>
            Properties across Nottingham, West Bridgford, and the surrounding villages
            are particularly vulnerable during winter months when{" "}
            <a
              href="/plumber-nottingham/services/emergency-plumbing/frozen-pipe-repair"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              frozen pipes
            </a>{" "}
            can crack and release large volumes of water once they thaw. Older
            properties with ageing pipework face year-round risks from corroded
            joints and weakened fittings.
          </p>
        </>
      }
      processHeading="How Our Flood Response Works"
      processSteps={[
        {
          title: "Emergency Call",
          description: (
            <>
              Call{" "}
              <a
                href="tel:03332408428"
                className="font-semibold text-primary"
              >
                0333 240 8428
              </a>{" "}
              and describe the situation. Tell us where the water is coming
              from, how much has spread, and whether you have been able to turn
              off the water supply. We will match you with the nearest available
              plumber immediately.
            </>
          ),
        },
        {
          title: "Water Isolation",
          description:
            "The plumber's first action is to stop the water at its source. This may involve turning off your stopcock, isolating a specific valve, or shutting down a faulty appliance. The faster the water is stopped, the less damage your property sustains.",
        },
        {
          title: "Source Identification and Repair",
          description:
            "Once the water is controlled, the plumber identifies the root cause of the flooding. Whether it is a burst pipe, a failed joint, or a blocked drain causing backflow, they carry out the repair on-site wherever possible.",
        },
        {
          title: "Assessment and Next Steps",
          description:
            "After the immediate repair, your plumber will assess any secondary damage and advise on drying out, dehumidifying, and any follow-up work that may be needed. You will receive a full breakdown of what was done and what to watch for in the following days.",
        },
      ]}
      relatedHeading="Related Emergency Services"
      relatedServices={[
        {
          name: "Burst Pipe Repair",
          href: "/plumber-nottingham/services/emergency-plumbing/burst-pipe-repair",
        },
        {
          name: "Stopcock Repair",
          href: "/plumber-nottingham/services/emergency-plumbing/stopcock-repair",
        },
        {
          name: "Leak Detection and Repair",
          href: "/plumber-nottingham/services/emergency-plumbing/leak-detection-repair",
        },
      ]}
      serviceAreasHeading="Flood Response Across Nottingham and Nottinghamshire"
      serviceAreasContent={
        <p>
          Our flood response plumbers cover Nottingham town centre, West Bridgford,
          Beeston, Arnold, Carlton, and surrounding villages.
          Response times are fastest within the Nottingham and West Bridgford area,
          with the wider Nottinghamshire area typically reached
          within the same timeframe. We prioritise flood calls above all
          other bookings.
        </p>
      }
      faqs={[
        {
          question:
            "What should I do while waiting for the flood response plumber?",
          answer:
            "Turn off your water at the stopcock if you know where it is. Switch off your electricity at the consumer unit if water is near electrical fittings or sockets. Move valuables and furniture away from the water. Use towels, buckets, and mops to contain spreading where you can.",
        },
        {
          question:
            "Will my home insurance cover a plumbing flood?",
          answer:
            "Most home insurance policies cover sudden and accidental water damage from burst pipes or appliance failures. However, damage caused by gradual leaks or poor maintenance may not be covered. Your plumber can provide a written report of the cause and repair for your insurance claim.",
        },
      ]}
      ctaHeading="Flooding Emergency? Call Now."
      ctaContent={
        <p>
          Every minute matters during a flood. Call OnCall Home Repairs and we
          will have a vetted flood response plumber heading to your Nottingham
          property as quickly as possible.
        </p>
      }
      serviceName="Flood Response"
      serviceSlug="flood-response"
      serviceDescription="Emergency flood response plumber in Nottingham. Rapid water damage control, source isolation, and immediate repair by vetted local plumbers."
      categorySlug="emergency-plumbing"
      geoPrefix="/plumber-nottingham"
      serviceAreas={seoConfigNottingham.serviceAreas}
      geoConfig={seoConfigNottingham}
    />
  );
}
