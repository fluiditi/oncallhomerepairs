import { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { seoConfigNottingham } from "@/config/seo-nottingham";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Leak Detection Nottingham | OnCall Home Repairs",
  description:
    "Professional leak detection and repair in Nottingham. Find and fix hidden leaks fast. Transparent pricing. Call 0333 240 8428.",
  alternates: {
    canonical:
      "https://oncallhomerepairs.co.uk/plumber-nottingham/services/emergency-plumbing/leak-detection-repair",
  },
};

export default function LeakDetectionRepairPage() {
  return (
    <ServicePage
      breadcrumbItems={[
        { name: "Services", href: "/plumber-nottingham/services" },
        { name: "Emergency Plumbing", href: "/plumber-nottingham/services/emergency-plumbing" },
        {
          name: "Leak Detection and Repair",
          href: "/plumber-nottingham/services/emergency-plumbing/leak-detection-repair",
        },
      ]}
      h1="Leak Detection and Repair in Nottingham"
      heroIntro={
        <p>
          Not all leaks announce themselves with a dramatic flood. Some hide
          behind walls, beneath floors, or underground — slowly causing damage
          you cannot see until it becomes a serious problem. OnCall Home Repairs
          connects you with skilled plumbers in Nottingham who specialise in
          tracking down hidden leaks and repairing them at the source. If your
          water bill has spiked, you have noticed damp patches, or you can hear
          dripping but cannot find it, call us and we will get to the bottom of
          it.
        </p>
      }
      whatWhyHeading="Why Hidden Leaks Are More Dangerous Than You Think"
      whatWhyContent={
        <>
          <p>
            A visible leak from a tap or pipe joint is straightforward to spot
            and fix. Hidden leaks are different. Water seeping behind plasterboard,
            under floor tiles, or within cavity walls can go undetected for weeks
            or even months. During that time, the moisture is doing real damage:
            weakening structural timbers, causing plaster to crumble, promoting
            black mould growth, and driving up your water bill without any
            obvious explanation.
          </p>
          <p>
            In Nottingham, many homes are built with traditional construction
            methods that make leak detection more challenging. Solid walls, concrete
            floors, and older pipework routed through hard-to-reach spaces mean
            that tracing a leak often requires specialist knowledge and equipment.
            The plumbers in our network use proven detection methods — including
            moisture meters, acoustic listening devices, and thermal imaging where
            appropriate — to pinpoint exactly where the leak is without
            unnecessary disruption to your property.
          </p>
          <p>
            Once the source is found, the repair is usually straightforward. A
            failed joint, a corroded pipe section, or a cracked fitting can
            typically be fixed the same day. For more extensive issues — such as
            deteriorating pipework behind a{" "}
            <Link
              href="/plumber-nottingham/services/general-plumbing/bathroom-plumbing"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              bathroom
            </Link>{" "}
            wall or beneath a ground floor — your plumber will explain the options
            and provide a clear quote before starting work. If the leak has caused
            secondary problems like an{" "}
            <Link
              href="/plumber-nottingham/services/emergency-plumbing/overflow-repair"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              overflowing cistern
            </Link>{" "}
            or a damaged pipe joint, those can be addressed at the same visit.
          </p>
        </>
      }
      processHeading="How Leak Detection Works"
      processSteps={[
        {
          title: "Report the Problem",
          description: (
            <p>
              Call 0333 240 8428 and describe what you have noticed — damp
              patches, a water bill increase, dripping sounds, or visible
              moisture. The more detail you can share, the faster your plumber
              can narrow down the likely source.
            </p>
          ),
        },
        {
          title: "Plumber Investigates",
          description: (
            <p>
              Your matched plumber visits your property and carries out a
              systematic investigation. They check visible pipework, test water
              pressure, and use detection equipment to trace the leak through
              walls, floors, or underground runs without tearing your home apart.
            </p>
          ),
        },
        {
          title: "Source Located and Explained",
          description: (
            <p>
              Once the leak is found, your plumber explains the cause and the
              best repair approach. You receive an upfront quote covering the
              repair and any making-good work needed to access the pipe. No work
              starts until you agree.
            </p>
          ),
        },
        {
          title: "Repair Completed",
          description: (
            <p>
              The plumber repairs or replaces the faulty section of pipework,
              restores the water supply, and checks for any additional weak points
              nearby. All work is covered by our workmanship guarantee.
            </p>
          ),
        },
      ]}
      benefitsHeading="Why Choose OnCall for Leak Detection"
      benefits={[
        {
          title: "Specialist Detection Methods",
          description: (
            <p>
              Our plumbers use moisture meters, acoustic equipment, and thermal
              imaging to find leaks without ripping out walls and floors
              unnecessarily.
            </p>
          ),
        },
        {
          title: "Same-Day Repair in Most Cases",
          description: (
            <p>
              Once the leak is located, the repair is usually completed during
              the same visit. No waiting for follow-up appointments.
            </p>
          ),
        },
        {
          title: "Prevent Further Damage",
          description: (
            <p>
              The longer a hidden leak goes unfixed, the worse the damage
              becomes. Early detection saves you money on structural repairs and
              mould remediation.
            </p>
          ),
        },
        {
          title: "Clear Pricing Before Work Starts",
          description: (
            <p>
              You get a full quote once the leak is located. There are no
              charges for the detection visit beyond the agreed fee, and no
              hidden extras.
            </p>
          ),
        },
        {
          title: "Vetted Local Plumbers",
          description: (
            <p>
              Every plumber in our Nottingham network is qualified, insured, and
              experienced with the types of properties and pipework common in
              the area.
            </p>
          ),
        },
      ]}
      relatedHeading="Related Services"
      relatedServices={[
        {
          name: "Burst Pipe Repair",
          href: "/plumber-nottingham/services/emergency-plumbing/burst-pipe-repair",
        },
        {
          name: "Overflow Repair",
          href: "/plumber-nottingham/services/emergency-plumbing/overflow-repair",
        },
        {
          name: "Bathroom Plumbing",
          href: "/plumber-nottingham/services/general-plumbing/bathroom-plumbing",
        },
      ]}
      serviceAreasHeading="Leak Detection Across Nottingham"
      serviceAreasContent={
        <p>
          Our leak detection service covers Nottingham and all nearby towns and
          villages. From Victorian terraces in Nottingham centre to modern estates
          in West Bridgford and Beeston, our plumbers are experienced with the
          property types and plumbing systems found across the area. Whether
          your leak is in a ground-floor flat in Arnold or a detached house in
          Long Eaton, we can match you with someone local who can investigate
          promptly.
        </p>
      }
      faqs={[
        {
          question: "What are the signs of a hidden water leak?",
          answer:
            "Look out for unexplained damp patches on walls or ceilings, a musty or mouldy smell, peeling paint or bubbling wallpaper, warm spots on the floor (indicating a hot water pipe leak), and a water meter that keeps running when all taps are off. A sudden increase in your water bill with no change in usage is one of the most common early indicators.",
          answerJsx: (
            <p>
              Look out for unexplained damp patches on walls or ceilings, a
              musty or mouldy smell, peeling paint or bubbling wallpaper, warm
              spots on the floor (indicating a hot water pipe leak), and a water
              meter that keeps running when all taps are off. A sudden increase
              in your water bill with no change in usage is one of the most
              common early indicators.
            </p>
          ),
        },
        {
          question: "How do plumbers detect leaks without digging up floors?",
          answer:
            "Modern leak detection uses several non-invasive methods. Acoustic listening equipment amplifies the sound of water escaping from a pipe, allowing the plumber to pinpoint its location through solid surfaces. Moisture meters measure dampness levels in walls and floors. Thermal imaging cameras can reveal temperature differences caused by escaping water. These methods mean your plumber can find the leak with minimal disruption.",
          answerJsx: (
            <p>
              Modern leak detection uses several non-invasive methods. Acoustic
              listening equipment amplifies the sound of water escaping from a
              pipe, allowing the plumber to pinpoint its location through solid
              surfaces. Moisture meters measure dampness levels in walls and
              floors. Thermal imaging cameras can reveal temperature differences
              caused by escaping water. These methods mean your plumber can find
              the leak with minimal disruption.
            </p>
          ),
        },
        {
          question: "How much does leak detection and repair cost?",
          answer:
            "Costs depend on the complexity of the detection and the nature of the repair. A straightforward leak behind an accessible panel may cost significantly less than one buried under a concrete floor. Your plumber will give you a clear quote once the source has been identified. The detection visit itself is charged at an agreed rate, which your plumber confirms before attending.",
          answerJsx: (
            <p>
              Costs depend on the complexity of the detection and the nature of
              the repair. A straightforward leak behind an accessible panel may
              cost significantly less than one buried under a concrete floor.
              Your plumber will give you a clear quote once the source has been
              identified. The detection visit itself is charged at an agreed
              rate, which your plumber confirms before attending.
            </p>
          ),
        },
        {
          question:
            "My water bill has increased but I cannot see a leak — should I call?",
          answer:
            "Yes. An unexplained increase in your water bill is one of the strongest indicators of a hidden leak. Even a small, steady leak can waste thousands of litres of water over a few months. Call us and we will connect you with a plumber who can investigate. Catching a hidden leak early will save you money on both water bills and potential damage repairs.",
          answerJsx: (
            <p>
              Yes. An unexplained increase in your water bill is one of the
              strongest indicators of a hidden leak. Even a small, steady leak
              can waste thousands of litres of water over a few months. Call us
              and we will connect you with a plumber who can investigate.
              Catching a hidden leak early will save you money on both water
              bills and potential damage repairs.
            </p>
          ),
        },
      ]}
      ctaHeading="Suspect a Leak in Your Nottingham Home?"
      ctaContent={
        <p>
          Do not let a hidden leak cause expensive damage. Call OnCall Home
          Repairs on 0333 240 8428 and we will connect you with a vetted plumber
          who can find and fix the problem fast. Same-day visits available with
          clear, upfront pricing.
        </p>
      }
      serviceName="Leak Detection and Repair"
      serviceSlug="leak-detection-repair"
      serviceDescription="Professional leak detection and repair in Nottingham. Find and fix hidden leaks fast."
      categorySlug="emergency-plumbing"
      geoPrefix="/plumber-nottingham"
      serviceAreas={seoConfigNottingham.serviceAreas}
      geoConfig={seoConfigNottingham}
    />
  );
}
