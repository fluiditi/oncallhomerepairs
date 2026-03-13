import { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { seoConfigBristol } from "@/config/seo-bristol";

export const metadata: Metadata = {
  title: "Frozen Pipe Repair Bristol | OnCall Home Repairs",
  description:
    "Frozen pipe repair in Bristol. Prevent burst pipes this winter. Vetted plumbers, 24/7. Call 0333 240 8428.",
  alternates: {
    canonical:
      "https://oncallhomerepairs.co.uk/plumber-bristol/services/emergency-plumbing/frozen-pipe-repair",
  },
};

export default function FrozenPipeRepairPage() {
  return (
    <ServicePage
      breadcrumbItems={[
        { name: "Services", href: "/plumber-bristol/services" },
        { name: "Emergency Plumbing", href: "/plumber-bristol/services/emergency-plumbing" },
        {
          name: "Frozen Pipe Repair",
          href: "/plumber-bristol/services/emergency-plumbing/frozen-pipe-repair",
        },
      ]}
      h1="Frozen Pipe Repair in Bristol"
      heroIntro={
        <p>
          When temperatures across Bristol drop below freezing, pipes in
          lofts, garages, and exterior walls are at serious risk of freezing
          solid. A frozen pipe that is not dealt with quickly can crack and
          burst, flooding your property and causing thousands of pounds in
          damage. OnCall Home Repairs connects you with vetted, local plumbers
          who can safely thaw frozen pipes and carry out any repairs needed
          &mdash; day or night, including weekends and bank holidays.
        </p>
      }
      whatWhyHeading="Why Frozen Pipes Are a Serious Risk in Bristol"
      whatWhyContent={
        <>
          <p>
            Bristol sits in the East Midlands where winter temperatures
            regularly dip below zero. Many of the town&rsquo;s older properties
            &mdash; particularly the Victorian and Edwardian terraces around
            New Street and the Chapel Hill area &mdash; have pipework routed
            through uninsulated loft spaces and against exterior walls. These
            pipes are especially vulnerable when cold snaps set in overnight.
          </p>
          <p>
            When water inside a pipe freezes, it expands and puts enormous
            pressure on the pipe walls. Copper pipes can split along a seam, and
            plastic pipes may crack at joints. The real danger comes when the ice
            thaws: water rushes through the damaged section and can flood
            ceilings, walls, and floors before you even notice the leak.
          </p>
          <p>
            Our network of{" "}
            <a
              href="/plumber-bristol/services/emergency-plumbing"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              emergency plumbers
            </a>{" "}
            understands the specific risks Bristol winters pose to local
            housing stock. They carry the equipment needed to thaw pipes safely
            without causing further damage, and can repair or replace any
            sections that have already cracked. If a frozen pipe has already
            burst, our plumbers also handle{" "}
            <a
              href="/plumber-bristol/services/emergency-plumbing/burst-pipe-repair"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              burst pipe repair
            </a>{" "}
            and{" "}
            <a
              href="/plumber-bristol/services/emergency-plumbing/flood-response"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              flood response
            </a>{" "}
            to minimise the damage.
          </p>
        </>
      }
      processHeading="What to Expect During a Frozen Pipe Repair"
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
              and tell us which taps have stopped working, whether you can see
              any frost or bulging on exposed pipes, and where the affected
              pipes are located. This helps us match you with the right plumber
              quickly.
            </>
          ),
        },
        {
          title: "Locate and Assess the Frozen Section",
          description:
            "Your plumber will identify the frozen section using thermal detection and visual inspection. They will check for any cracks, splits, or joint failures that may have already occurred before the ice has melted.",
        },
        {
          title: "Safe Thawing and Repair",
          description:
            "Using controlled heat application, the plumber will gradually thaw the pipe to prevent thermal shock. If the pipe has cracked, the damaged section is cut out and replaced with new pipework. Joints are pressure-tested to confirm the repair is sound.",
        },
        {
          title: "Prevention Advice",
          description:
            "Once the repair is complete, your plumber will advise on insulation for vulnerable pipes, including lagging for loft pipework and exterior wall runs. Proper insulation can prevent the same problem from recurring next winter.",
        },
      ]}
      relatedHeading="Related Emergency Services"
      relatedServices={[
        {
          name: "Burst Pipe Repair",
          href: "/plumber-bristol/services/emergency-plumbing/burst-pipe-repair",
        },
        {
          name: "Flood Response",
          href: "/plumber-bristol/services/emergency-plumbing/flood-response",
        },
        {
          name: "Boiler Repair",
          href: "/plumber-bristol/services/boiler-heating/boiler-repair",
        },
      ]}
      serviceAreasHeading="Frozen Pipe Repair Across Bristol"
      serviceAreasContent={
        <p>
          Our plumbers attend frozen pipe emergencies across Bristol, Clifton,
          Redland, Bishopston, and the surrounding villages. Properties in
          older parts of town and those with loft conversions or conservatories
          are particularly susceptible during cold weather. Wherever you are in
          Bristol, we can connect you with a plumber who
          knows the area and can reach you promptly.
        </p>
      }
      faqs={[
        {
          question: "How can I tell if my pipes have frozen?",
          answer:
            "The most obvious sign is reduced or no water flow from taps when you turn them on. You may also notice frost on visible pipes in your loft, garage, or under the kitchen sink. If a pipe looks swollen or has visible cracks, do not attempt to thaw it yourself and call a plumber immediately.",
        },
        {
          question:
            "Is it safe to use a hairdryer to thaw a frozen pipe?",
          answer:
            "A hairdryer on a low setting can help with minor freezing on accessible copper pipes, but it is not recommended for plastic pipes or pipes you cannot fully see. Uneven heating can cause thermal shock and split the pipe. A qualified plumber uses controlled methods that reduce this risk significantly.",
        },
        {
          question:
            "How much does frozen pipe repair cost in Bristol?",
          answer:
            "The cost depends on the location and severity of the freeze. Simple thawing of an accessible pipe is typically less expensive than replacing a cracked section behind a wall. Your plumber will assess the situation and provide a clear, upfront quote before starting any work.",
        },
      ]}
      ctaHeading="Frozen Pipes? Act Before They Burst."
      ctaContent={
        <p>
          Do not wait for a frozen pipe to crack and flood your home. Call OnCall
          Home Repairs and we will connect you with a vetted plumber in Bristol
          who can thaw and repair frozen pipes safely &mdash; any time of day or
          night.
        </p>
      }
      serviceName="Frozen Pipe Repair"
      serviceSlug="frozen-pipe-repair"
      serviceDescription="Frozen pipe thawing and repair in Bristol. Prevent burst pipes this winter with safe, professional pipe repair from vetted local plumbers."
      categorySlug="emergency-plumbing"
      geoPrefix="/plumber-bristol"
      serviceAreas={seoConfigBristol.serviceAreas}
      geoConfig={seoConfigBristol}
    />
  );
}
