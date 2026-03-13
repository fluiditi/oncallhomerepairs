import { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { seoConfigHuddersfield } from "@/config/seo-huddersfield";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Emergency Plumber Huddersfield | OnCall Home Repairs",
  description:
    "24-hour emergency plumber in Huddersfield. Fast response for burst pipes, leaks, flooding. Vetted, Gas Safe. Call 0333 240 8428.",
  alternates: {
    canonical:
      "https://oncallhomerepairs.co.uk/plumber-huddersfield/services/emergency-plumbing/emergency-plumber",
  },
};

export default function EmergencyPlumberPage() {
  return (
    <ServicePage
      breadcrumbItems={[
        { name: "Services", href: "/plumber-huddersfield/services" },
        { name: "Emergency Plumbing", href: "/plumber-huddersfield/services/emergency-plumbing" },
        {
          name: "Emergency Plumber",
          href: "/plumber-huddersfield/services/emergency-plumbing/emergency-plumber",
        },
      ]}
      h1="Emergency Plumber in Huddersfield — Available 24/7"
      heroIntro={
        <p>
          When a plumbing emergency strikes, every minute counts. OnCall Home
          Repairs connects you with vetted, experienced emergency plumbers in
          Huddersfield and the surrounding West Yorkshire area. Whether it is the
          middle of the night, a Sunday morning, or a bank holiday afternoon, our
          network of qualified plumbers is ready to respond. One call and we
          match you with the right person for the job — fast, reliable, and
          transparent from start to finish.
        </p>
      }
      whatWhyHeading="Why You Need an Emergency Plumber You Can Trust"
      whatWhyContent={
        <>
          <p>
            Plumbing emergencies do not wait for convenient times. A{" "}
            <Link
              href="/plumber-huddersfield/services/emergency-plumbing/burst-pipe-repair"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              burst pipe
            </Link>{" "}
            at 2am, a major leak flooding your kitchen, or a boiler that stops
            working on the coldest night of the year — these situations demand an
            immediate, skilled response. Attempting DIY fixes on pressurised
            water systems or gas appliances can make things worse, and waiting
            until morning often means more damage, higher repair costs, and
            unnecessary stress.
          </p>
          <p>
            That is where OnCall Home Repairs comes in. We are not a single
            plumbing firm — we are a matching network that connects Huddersfield
            homeowners with fully vetted, Gas Safe registered plumbers who
            specialise in urgent call-outs. Every plumber in our network is
            qualified, insured, and experienced in handling high-pressure
            emergency situations. You get the speed of a local tradesperson
            backed by the accountability of a trusted network.
          </p>
          <p>
            From{" "}
            <Link
              href="/plumber-huddersfield/services/emergency-plumbing/leak-detection-repair"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              leak detection
            </Link>{" "}
            to{" "}
            <Link
              href="/plumber-huddersfield/services/emergency-plumbing/flood-response"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              flood response
            </Link>
            , from frozen pipes to faulty stopcocks, our plumbers have seen it
            all. They arrive equipped to diagnose and repair common emergency
            faults on the spot, so you are not left waiting for parts or
            follow-up visits unless absolutely necessary.
          </p>
        </>
      }
      processHeading="How Our Emergency Plumber Service Works"
      processSteps={[
        {
          title: "Call Us Any Time",
          description: (
            <p>
              Ring 0333 240 8428 day or night, 365 days a year. Tell us what has
              happened — a burst pipe, a leak, a boiler failure — and we will
              take it from there. No automated phone trees. A real person
              assesses your situation straight away.
            </p>
          ),
        },
        {
          title: "Matched with a Local Plumber",
          description: (
            <p>
              We match you with an available, vetted emergency plumber near
              Huddersfield. Because our network covers the local area, response times
              are kept as short as possible. You will know who is coming and when
              to expect them.
            </p>
          ),
        },
        {
          title: "Plumber Arrives and Quotes",
          description: (
            <p>
              Your plumber arrives, assesses the problem on site, and gives you a
              clear, upfront quote before starting any work. No hidden call-out
              fees, no surprises. You approve the price before a single tool
              comes out.
            </p>
          ),
        },
        {
          title: "Job Completed and Guaranteed",
          description: (
            <p>
              The repair is carried out to a high standard using quality parts.
              All work comes with a workmanship guarantee — if something is not
              right, we come back and put it right at no extra cost to you.
            </p>
          ),
        },
      ]}
      benefitsHeading="Why Choose OnCall Home Repairs for Emergencies"
      benefits={[
        {
          title: "Genuine 24/7 Availability",
          description: (
            <p>
              Our network operates around the clock, including weekends and bank
              holidays. There is no voicemail and no waiting until Monday.
            </p>
          ),
        },
        {
          title: "Vetted, Gas Safe Plumbers",
          description: (
            <p>
              Every plumber in our network is qualified, insured, and Gas Safe
              registered. We check credentials so you do not have to.
            </p>
          ),
        },
        {
          title: "Transparent, Upfront Pricing",
          description: (
            <p>
              You receive a clear quote before any work begins. No hidden
              call-out charges and no invoice shocks after the job is done.
            </p>
          ),
        },
        {
          title: "Fast Local Response",
          description: (
            <p>
              Our plumbers live and work in and around Huddersfield. Local knowledge
              means faster arrival times and familiarity with common property
              types in the area.
            </p>
          ),
        },
        {
          title: "Workmanship Guarantee",
          description: (
            <p>
              All repairs are backed by a guarantee. If the same fault returns,
              we send a plumber back to fix it without additional charges.
            </p>
          ),
        },
        {
          title: "Constant Communication",
          description: (
            <p>
              From the moment you call to the moment the job is signed off, we
              keep you updated. You will always know what is happening and what
              comes next.
            </p>
          ),
        },
      ]}
      relatedHeading="Related Emergency Services"
      relatedServices={[
        {
          name: "Burst Pipe Repair",
          href: "/plumber-huddersfield/services/emergency-plumbing/burst-pipe-repair",
        },
        {
          name: "Leak Detection and Repair",
          href: "/plumber-huddersfield/services/emergency-plumbing/leak-detection-repair",
        },
        {
          name: "Flood Response",
          href: "/plumber-huddersfield/services/emergency-plumbing/flood-response",
        },
        {
          name: "Boiler Repair",
          href: "/plumber-huddersfield/services/boiler-heating/boiler-repair",
        },
      ]}
      serviceAreasHeading="Emergency Plumber Coverage Areas"
      serviceAreasContent={
        <p>
          Our emergency plumber network covers Huddersfield and all surrounding towns
          and villages across West Yorkshire. Whether you are in the
          centre of Huddersfield or in a nearby village, we can connect you with a
          qualified plumber who knows the area. Response times vary depending on
          time of day and demand, but our priority is always to get someone to
          you as quickly as possible.
        </p>
      }
      faqs={[
        {
          question:
            "How much does an emergency plumber call-out in Huddersfield cost?",
          answer:
            "Emergency call-out costs vary depending on the time of day, the nature of the fault, and parts required. Our plumbers provide a clear, upfront quote before starting any work, so you will never face surprise charges. Evening and weekend call-outs may carry a higher rate than daytime visits, but you will always know the price in advance.",
          answerJsx: (
            <p>
              Emergency call-out costs vary depending on the time of day, the
              nature of the fault, and parts required. Our plumbers provide a
              clear, upfront quote before starting any work, so you will never
              face surprise charges. Evening and weekend call-outs may carry a
              higher rate than daytime visits, but you will always know the price
              in advance.
            </p>
          ),
        },
        {
          question: "How quickly can an emergency plumber get to my property?",
          answer:
            "Response times depend on current demand and your exact location in the Huddersfield area. In most cases, we aim to have a plumber with you within one to two hours of your call. For urgent situations such as major leaks or gas concerns, we prioritise the fastest possible dispatch.",
          answerJsx: (
            <p>
              Response times depend on current demand and your exact location in
              the Huddersfield area. In most cases, we aim to have a plumber with you
              within one to two hours of your call. For urgent situations such as
              major leaks or gas concerns, we prioritise the fastest possible
              dispatch.
            </p>
          ),
        },
        {
          question:
            "What should I do while waiting for the emergency plumber to arrive?",
          answer:
            "If you have a water leak or burst pipe, locate your stopcock and turn off the water supply. For a boiler issue involving a gas smell, turn off the gas at the meter, open windows, and leave the property. For electrical contact with water, switch off the electricity at the consumer unit if it is safe to do so. When you call us, we will talk you through the right steps for your situation.",
          answerJsx: (
            <p>
              If you have a water leak or{" "}
              <Link
                href="/plumber-huddersfield/services/emergency-plumbing/burst-pipe-repair"
                className="text-primary underline underline-offset-2 hover:text-primary/80"
              >
                burst pipe
              </Link>
              , locate your stopcock and turn off the water supply. For a boiler
              issue involving a gas smell, turn off the gas at the meter, open
              windows, and leave the property. For electrical contact with water,
              switch off the electricity at the consumer unit if it is safe to do
              so. When you call us, we will talk you through the right steps for
              your situation.
            </p>
          ),
        },
        {
          question:
            "Do you provide emergency plumbing outside normal working hours?",
          answer:
            "Yes. Our network operates 24 hours a day, seven days a week, including bank holidays and Christmas. There is no period when you cannot reach us. After-hours calls are handled with the same urgency and professionalism as daytime enquiries.",
          answerJsx: (
            <p>
              Yes. Our network operates 24 hours a day, seven days a week,
              including bank holidays and Christmas. There is no period when you
              cannot reach us. After-hours calls are handled with the same
              urgency and professionalism as daytime enquiries.
            </p>
          ),
        },
      ]}
      ctaHeading="Plumbing Emergency in Huddersfield?"
      ctaContent={
        <p>
          Do not wait for the damage to get worse. Call OnCall Home Repairs now
          and we will connect you with a vetted, local emergency plumber who can
          be with you fast. Available 24/7, with transparent pricing and a
          workmanship guarantee on every job.
        </p>
      }
      serviceName="Emergency Plumber"
      serviceSlug="emergency-plumber"
      serviceDescription="24-hour emergency plumber in Huddersfield. Fast response for burst pipes, leaks, and flooding."
      categorySlug="emergency-plumbing"
      geoPrefix="/plumber-huddersfield"
      serviceAreas={seoConfigHuddersfield.serviceAreas}
      geoConfig={seoConfigHuddersfield}
    />
  );
}
