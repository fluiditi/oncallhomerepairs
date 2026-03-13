import { Metadata } from "next";
import { CategoryPage } from "@/components/category-page";
import { seoConfigLiverpool } from "@/config/seo-liverpool";

export const metadata: Metadata = {
  title: "Emergency Plumbing Liverpool | OnCall Home Repairs",
  description:
    "24/7 emergency plumbing in Liverpool. Burst pipes, leaks, flooding. Vetted, Gas Safe plumbers. Call 0333 240 8428.",
  alternates: {
    canonical: "https://oncallhomerepairs.co.uk/plumber-liverpool/services/emergency-plumbing",
  },
};

export default function EmergencyPlumbingPage() {
  return (
    <CategoryPage
      breadcrumbItems={[
        { name: "Services", href: "/plumber-liverpool/services" },
        { name: "Emergency Plumbing", href: "/plumber-liverpool/services/emergency-plumbing" },
      ]}
      h1="Emergency Plumbing Services in Liverpool"
      heroIntro={
        <>
          <p>
            When a pipe bursts at 2am or your kitchen floods on a Sunday
            morning, you need a qualified plumber fast — not an answering
            machine. OnCall Home Repairs connects you with vetted, Gas Safe
            registered emergency plumbers across Liverpool and the surrounding
            villages, available 24 hours a day, 7 days a week. Whether it is a{" "}
            <a href="/plumber-liverpool/services/emergency-plumbing/burst-pipe-repair" className="underline hover:text-white">
              burst pipe
            </a>
            , a hidden leak, or a flooding emergency, our network is ready to
            respond when you need help most.
          </p>
        </>
      }
      heroImage="/images/hero-emergency-plumbing.webp"
      overviewHeading="Reliable Emergency Plumbing When It Matters Most"
      overviewContent={
        <>
          <p>
            Plumbing emergencies rarely happen at a convenient time. A leaking
            pipe behind a wall, a frozen pipe that has cracked overnight, or an
            overflowing cistern can cause hundreds of pounds of damage if not
            dealt with quickly. That is why we built a network of experienced,
            locally based plumbers who can reach properties in Liverpool,
            Toxteth, Allerton, and beyond — often within the hour.
          </p>
          <p>
            Every plumber in our network carries the qualifications, insurance,
            and Gas Safe registration needed to work safely in your home. Before
            any work begins, you will receive a clear, upfront quote with no
            hidden fees. If the job is not completed to your satisfaction, our
            workmanship guarantee means the plumber returns to put it right at
            no extra cost.
          </p>
          <p>
            From{" "}
            <a href="/plumber-liverpool/services/emergency-plumbing/leak-detection-repair" className="text-primary underline hover:text-primary/80">
              leak detection and repair
            </a>{" "}
            to{" "}
            <a href="/plumber-liverpool/services/emergency-plumbing/flood-response" className="text-primary underline hover:text-primary/80">
              flood response
            </a>
            , we match you with the right specialist for the problem at hand. If
            the issue also involves your{" "}
            <a href="/plumber-liverpool/services/boiler-heating" className="text-primary underline hover:text-primary/80">
              boiler or heating system
            </a>{" "}
            or requires{" "}
            <a href="/plumber-liverpool/services/drain-services" className="text-primary underline hover:text-primary/80">
              drain clearance
            </a>
            , we can arrange that too — all through a single phone call.
          </p>
        </>
      }
      servicesHeading="Our Emergency Plumbing Services"
      categorySlug="emergency-plumbing"
      services={[
        {
          name: "Emergency Plumber",
          slug: "emergency-plumber",
          description:
            "Round-the-clock emergency plumber call-out in Liverpool. Fast attendance for urgent leaks, burst pipes, boiler failures, and any plumbing crisis that cannot wait until morning.",
          isCoreService: true,
        },
        {
          name: "Burst Pipe Repair",
          slug: "burst-pipe-repair",
          description:
            "Rapid burst pipe repair to stop water damage in its tracks. Our network plumbers isolate the supply, repair or replace the damaged section, and restore normal flow.",
          isCoreService: true,
        },
        {
          name: "Leak Detection and Repair",
          slug: "leak-detection-repair",
          description:
            "Professional leak detection using pressure testing and thermal imaging to find hidden leaks behind walls, under floors, and in ceiling voids — then fix them fast.",
          isCoreService: true,
        },
        {
          name: "Frozen Pipe Repair",
          slug: "frozen-pipe-repair",
          description:
            "Safe thawing and repair of frozen pipes during cold Merseyside winters. Prevents cracks and burst pipes before they cause costly water damage to your property.",
          isCoreService: false,
        },
        {
          name: "Flood Response",
          slug: "flood-response",
          description:
            "Emergency flood response for homes hit by burst pipes, failed appliances, or overflowing systems. Rapid water shut-off, damage control, and restoration of supply.",
          isCoreService: false,
        },
        {
          name: "Stopcock Repair",
          slug: "stopcock-repair",
          description:
            "Stopcock repair and replacement so you can shut off your water supply when it matters. Seized, leaking, or broken stopcocks repaired or replaced same-day.",
          isCoreService: false,
        },
        {
          name: "Overflow Repair",
          slug: "overflow-repair",
          description:
            "Overflow pipe repair for cold water tanks, toilet cisterns, and combination boilers. Stop persistent dripping and prevent water damage to external walls.",
          isCoreService: false,
        },
      ]}
      whyChooseHeading="Why Choose OnCall for Emergency Plumbing?"
      differentiators={[
        {
          title: "Genuine 24/7 Availability",
          description: (
            <p>
              Day or night, weekends or bank holidays — our network of emergency
              plumbers is available when you need them. No call centres, no
              waiting until Monday.
            </p>
          ),
        },
        {
          title: "Vetted, Gas Safe Plumbers",
          description: (
            <p>
              Every plumber we connect you with is fully qualified, Gas Safe
              registered, and carries public liability insurance. Your safety is
              never compromised.
            </p>
          ),
        },
        {
          title: "Transparent, Upfront Pricing",
          description: (
            <p>
              You will receive a clear quote before any work starts. No hidden
              call-out charges, no surprise fees on the invoice. The price you
              are quoted is the price you pay.
            </p>
          ),
        },
        {
          title: "Fast Local Response",
          description: (
            <p>
              Our plumbers are based across Liverpool and the surrounding
              villages, which means shorter travel times and faster attendance
              at your door.
            </p>
          ),
        },
        {
          title: "Workmanship Guarantee",
          description: (
            <p>
              If something is not right after the repair, the plumber comes back
              and fixes it at no additional cost. We stand behind the quality of
              every job.
            </p>
          ),
        },
      ]}
      crossLinks={[
        {
          name: "Boiler & Heating Services",
          href: "/plumber-liverpool/services/boiler-heating",
          description:
            "Boiler breakdowns, heating failures, and gas safety checks — our Gas Safe engineers handle it all.",
        },
        {
          name: "Drain Services",
          href: "/plumber-liverpool/services/drain-services",
          description:
            "Blocked drains, toilet blockages, and CCTV drain surveys to diagnose persistent drainage problems.",
        },
      ]}
      serviceAreasHeading="Emergency Plumbing Across Liverpool and Beyond"
      serviceAreasContent={
        <p>
          Our network of emergency plumbers covers Liverpool town centre and the
          surrounding villages throughout Merseyside. Whether you
          are in Toxteth, Allerton, Woolton, or as far as Kirkby
          and West Derby, we can connect you with a qualified plumber who knows
          the area and can reach you quickly.
        </p>
      }
      faqs={[
        {
          question:
            "How quickly can an emergency plumber reach my property in Liverpool?",
          answer:
            "Response times depend on the time of day and current demand, but our network plumbers are locally based and typically attend within one to two hours of your call. For severe emergencies like major leaks or flooding, we prioritise the fastest available plumber in your area.",
        },
        {
          question:
            "How much does an emergency plumbing call-out cost?",
          answer:
            "There is no fixed call-out fee across our network. The plumber will assess the situation and provide you with a clear, written quote before starting any work. You are never committed until you approve the price. Evening, weekend, and bank holiday rates may differ from standard daytime pricing.",
        },
        {
          question:
            "What counts as a plumbing emergency?",
          answer:
            "A plumbing emergency is any situation that risks water damage to your property or poses a safety hazard. Burst pipes, uncontrollable leaks, flooding, no hot water in winter, and gas-related boiler faults all qualify. If you are unsure, call us and we will advise whether you need an emergency visit or can wait for a standard appointment.",
        },
        {
          question:
            "Should I try to fix a burst pipe myself before the plumber arrives?",
          answer:
            "You should turn off your water at the stopcock and switch off your central heating to reduce pressure in the system. Place towels or buckets to catch dripping water. Do not attempt to solder or repair the pipe yourself — incorrect repairs can make the damage worse. Our plumber will handle the rest once they arrive.",
        },
      ]}
      ctaHeading="Plumbing Emergency? Call Now."
      ctaContent={
        <p>
          Do not wait for water damage to get worse. Call OnCall Home Repairs and
          we will connect you with a vetted emergency plumber in Liverpool —
          available 24 hours a day, every day of the year.
        </p>
      }
      categoryName="Emergency Plumbing"
      categoryDescription="24/7 emergency plumbing services in Liverpool — burst pipes, leaks, floods, and urgent repairs by vetted, Gas Safe registered plumbers."
      geoPrefix="/plumber-liverpool"
      serviceAreas={seoConfigLiverpool.serviceAreas}
      geoConfig={seoConfigLiverpool}
    />
  );
}
