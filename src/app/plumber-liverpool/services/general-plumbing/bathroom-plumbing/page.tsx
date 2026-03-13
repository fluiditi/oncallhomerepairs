import { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { seoConfigLiverpool } from "@/config/seo-liverpool";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bathroom Plumber Liverpool | OnCall Home Repairs",
  description:
    "Bathroom plumbing in Liverpool. Installations, repairs, full refits. Vetted plumbers, upfront quotes. Call 0333 240 8428.",
  alternates: {
    canonical:
      "https://oncallhomerepairs.co.uk/plumber-liverpool/services/general-plumbing/bathroom-plumbing",
  },
};

export default function BathroomPlumbingPage() {
  return (
    <ServicePage
      breadcrumbItems={[
        { name: "Services", href: "/plumber-liverpool/services" },
        { name: "General Plumbing", href: "/plumber-liverpool/services/general-plumbing" },
        {
          name: "Bathroom Plumbing",
          href: "/plumber-liverpool/services/general-plumbing/bathroom-plumbing",
        },
      ]}
      h1="Bathroom Plumbing in Liverpool"
      heroIntro={
        <p>
          Whether you are planning a full bathroom refit or need a single repair,
          the plumbing work needs to be done right. Poorly connected waste pipes,
          leaking shower trays, and incorrectly installed toilets cause problems
          that are expensive to fix later. OnCall Home Repairs connects you with
          vetted, experienced plumbers in Liverpool who handle all aspects of
          bathroom plumbing — from installing new suites and fitting showers to
          repairing leaking taps and replacing faulty valves. Call us for a
          reliable plumber and a clear, upfront quote.
        </p>
      }
      whatWhyHeading="Bathroom Plumbing: Installations, Repairs, and Refits"
      whatWhyContent={
        <>
          <p>
            Bathrooms contain more plumbing connections per square metre than any
            other room in the house. The toilet, basin, bath, shower, radiator or
            towel rail, and potentially a bidet all require both hot and cold
            water feeds and waste pipe connections. Each connection is a potential
            point of failure if not installed or maintained properly. A dripping{" "}
            <Link
              href="/plumber-liverpool/services/general-plumbing/tap-repair-replacement"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              tap
            </Link>{" "}
            wastes water and stains your basin. A poorly sealed shower tray leaks
            into the floor below. A cistern that will not stop filling runs up
            your water bill and risks overflow damage.
          </p>
          <p>
            If you are refitting a bathroom, the plumbing is the foundation
            everything else depends on. Tile work, vanity units, and decorative
            finishes only look good if the plumbing behind them is solid and
            leak-free. The plumbers in our network work alongside other trades
            when needed, ensuring pipes and waste runs are positioned correctly
            before walls are tiled and panels are fitted. They can also advise
            on practical matters such as whether your existing water pressure
            will support the{" "}
            <Link
              href="/plumber-liverpool/services/general-plumbing/shower-installation-repair"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              shower
            </Link>{" "}
            type you want, or whether waste pipes can be routed to your
            preferred layout.
          </p>
          <p>
            For repairs, our plumbers handle everything from a running toilet to
            a leaking bath waste, from a mixer tap that will not mix to a
            radiator valve that is dripping onto the floor. No job is too small.
            If a repair uncovers a bigger underlying problem — such as corroded
            pipework behind the wall or a{" "}
            <Link
              href="/plumber-liverpool/services/emergency-plumbing/leak-detection-repair"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              hidden leak
            </Link>{" "}
            that has been causing damp — your plumber will explain the issue and
            quote for the additional work before proceeding.
          </p>
        </>
      }
      processHeading="How Bathroom Plumbing Works"
      processSteps={[
        {
          title: "Consultation",
          description: (
            <p>
              Call 0333 240 8428 and tell us what you need — a full bathroom
              refit, a new shower installation, a tap replacement, or a repair.
              For larger jobs, we arrange a site visit so the plumber can see the
              space, check existing pipework, and understand your requirements.
            </p>
          ),
        },
        {
          title: "Detailed Quote",
          description: (
            <p>
              Your plumber provides a written quote covering all labour and
              materials. For full refits, this includes the first and second fix
              plumbing, waste connections, and testing. The quote is itemised and
              transparent — no hidden charges.
            </p>
          ),
        },
        {
          title: "Plumbing Work Carried Out",
          description: (
            <p>
              Your plumber completes the work to a high standard, whether that
              is a quick tap swap or a multi-day bathroom plumb-in. For refits,
              they coordinate with tilers and other trades to ensure the
              plumbing is ready at each stage. Existing water is kept off for
              as little time as possible.
            </p>
          ),
        },
        {
          title: "Testing and Sign-Off",
          description: (
            <p>
              Every connection is tested for leaks, every tap and valve is
              checked for proper operation, and water pressure is verified. Your
              plumber walks you through everything that has been done and
              confirms all work is covered by our workmanship guarantee.
            </p>
          ),
        },
      ]}
      benefitsHeading="Why Choose OnCall for Bathroom Plumbing"
      benefits={[
        {
          title: "Small Repairs to Full Refits",
          description: (
            <p>
              Whether you need a single tap replaced or an entire bathroom
              plumbed from scratch, our network has plumbers with the right
              experience for the job.
            </p>
          ),
        },
        {
          title: "Vetted, Qualified Plumbers",
          description: (
            <p>
              Every plumber in our network is qualified, insured, and vetted. For
              any work involving gas (such as a bathroom radiator on a gas
              system), they hold Gas Safe registration.
            </p>
          ),
        },
        {
          title: "Works Alongside Other Trades",
          description: (
            <p>
              For bathroom refits, our plumbers are used to coordinating with
              tilers, electricians, and fitters to keep the project on schedule.
            </p>
          ),
        },
        {
          title: "Clear, Written Quotes",
          description: (
            <p>
              You receive a detailed quote before work starts. If the scope
              changes during the job, your plumber discusses it with you and
              agrees any cost adjustments upfront.
            </p>
          ),
        },
        {
          title: "Guaranteed Workmanship",
          description: (
            <p>
              All plumbing work is covered by a guarantee. If a connection leaks
              or a fitting fails after installation, we send a plumber back at
              no extra charge.
            </p>
          ),
        },
        {
          title: "Local Knowledge",
          description: (
            <p>
              Our plumbers are familiar with the plumbing configurations found
              in Liverpool properties — from Victorian terraces with old lead
              pipework to modern builds with plastic systems.
            </p>
          ),
        },
      ]}
      relatedHeading="Related Plumbing Services"
      relatedServices={[
        {
          name: "Shower Installation and Repair",
          href: "/plumber-liverpool/services/general-plumbing/shower-installation-repair",
        },
        {
          name: "Tap Repair and Replacement",
          href: "/plumber-liverpool/services/general-plumbing/tap-repair-replacement",
        },
        {
          name: "Toilet Repair",
          href: "/plumber-liverpool/services/drain-services/toilet-repair",
        },
        {
          name: "Kitchen Plumbing",
          href: "/plumber-liverpool/services/general-plumbing/kitchen-plumbing",
        },
      ]}
      serviceAreasHeading="Bathroom Plumbing Across Liverpool"
      serviceAreasContent={
        <p>
          Our bathroom plumbers serve Liverpool and all surrounding areas. From
          period properties in the town centre that need careful pipework
          modifications to new-build homes in Crosby, Garston, and Childwall
          that need a shower upgrade or suite replacement, our plumbers have
          the experience to handle it. We cover Toxteth, Allerton, Woolton,
          West Derby, and all villages in between.
        </p>
      }
      faqs={[
        {
          question: "How long does a full bathroom refit take?",
          answer:
            "The plumbing element of a bathroom refit typically takes two to four days depending on the complexity — whether pipes need to be rerouted, whether you are changing the layout, and how many fittings are involved. The total refit time, including tiling, flooring, and decoration, is usually one to two weeks. Your plumber will give you a clear timeline at the quoting stage.",
          answerJsx: (
            <p>
              The plumbing element of a bathroom refit typically takes two to
              four days depending on the complexity — whether pipes need to be
              rerouted, whether you are changing the layout, and how many
              fittings are involved. The total refit time, including tiling,
              flooring, and decoration, is usually one to two weeks. Your
              plumber will give you a clear timeline at the quoting stage.
            </p>
          ),
        },
        {
          question: "How much does bathroom plumbing cost?",
          answer:
            "Costs vary widely depending on the scope. A straightforward tap replacement might take under an hour. A full first and second fix plumb-in for a new bathroom suite involves significantly more time and materials. Your plumber provides an itemised quote after assessing the job, so you know the full cost before any work begins.",
          answerJsx: (
            <p>
              Costs vary widely depending on the scope. A straightforward tap
              replacement might take under an hour. A full first and second fix
              plumb-in for a new bathroom suite involves significantly more time
              and materials. Your plumber provides an itemised quote after
              assessing the job, so you know the full cost before any work
              begins.
            </p>
          ),
        },
        {
          question: "Can plumbing be moved to change the bathroom layout?",
          answer:
            "Yes. Waste pipes, water feeds, and radiator connections can be rerouted to accommodate a different layout. However, moving plumbing increases the cost and complexity of the job — especially if the toilet needs to be relocated, as soil pipes are larger and have specific fall requirements. Your plumber can advise on what is feasible and what the additional costs would be.",
          answerJsx: (
            <p>
              Yes. Waste pipes, water feeds, and radiator connections can be
              rerouted to accommodate a different layout. However, moving
              plumbing increases the cost and complexity of the job — especially
              if the toilet needs to be relocated, as soil pipes are larger and
              have specific fall requirements. Your plumber can advise on what
              is feasible and what the additional costs would be.
            </p>
          ),
        },
        {
          question: "Do your plumbers handle tiling and flooring as well?",
          answer:
            "Our plumbers focus on the plumbing work — connecting water supplies, waste pipes, taps, showers, toilets, and baths. For tiling, flooring, and electrical work, they can coordinate with trusted local trades to keep your project running smoothly. If you are managing the refit yourself, your plumber will ensure the plumbing is completed at the right stage for tilers and other trades to follow on.",
          answerJsx: (
            <p>
              Our plumbers focus on the plumbing work — connecting water
              supplies, waste pipes, taps, showers, toilets, and baths. For
              tiling, flooring, and electrical work, they can coordinate with
              trusted local trades to keep your project running smoothly. If you
              are managing the refit yourself, your plumber will ensure the
              plumbing is completed at the right stage for tilers and other
              trades to follow on.
            </p>
          ),
        },
      ]}
      ctaHeading="Need a Bathroom Plumber in Liverpool?"
      ctaContent={
        <p>
          From a dripping tap to a complete bathroom refit, OnCall Home Repairs
          connects you with vetted local plumbers who do the job properly. Call
          0333 240 8428 for a clear quote and reliable service, backed by our
          workmanship guarantee.
        </p>
      }
      serviceName="Bathroom Plumbing"
      serviceSlug="bathroom-plumbing"
      serviceDescription="Bathroom plumbing in Liverpool. Installations, repairs, and full bathroom fit-outs."
      categorySlug="general-plumbing"
      geoPrefix="/plumber-liverpool"
      serviceAreas={seoConfigLiverpool.serviceAreas}
      geoConfig={seoConfigLiverpool}
    />
  );
}
