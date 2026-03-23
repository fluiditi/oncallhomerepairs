import { Metadata } from "next";
import { CategoryPage } from "@/components/category-page";
import { seoConfigHuddersfield } from "@/config/seo-huddersfield";

export const metadata: Metadata = {
  title: "Plumber Huddersfield | All Plumbing Services | OnCall Home Repairs",
  description:
    "Full-service plumber in Huddersfield. Emergency plumbing, boiler repairs, heating, gas safety, drain clearing, and more. Vetted, Gas Safe plumbers. Call 0333 240 8428.",
  alternates: {
    canonical: "https://oncallhomerepairs.co.uk/plumber-huddersfield/services/plumber",
  },
};

const category = seoConfigHuddersfield.services.categories.find(
  (c) => c.slug === "plumber"
)!;

export default function PlumberCategoryPage() {
  return (
    <CategoryPage
      breadcrumbItems={[
        { name: "Services", href: "/plumber-huddersfield/services" },
        { name: "Plumber", href: "/plumber-huddersfield/services/plumber" },
      ]}
      h1="Plumber in Huddersfield"
      heroIntro={
        <p>
          OnCall Home Repairs connects you with vetted, qualified plumbers
          across Huddersfield and West Yorkshire. From emergency burst pipe
          repairs to boiler installations, gas safety certificates to bathroom
          fit-outs — our network of Gas Safe registered, fully insured
          professionals covers every plumbing need. Available 24/7 with
          transparent pricing and guaranteed workmanship.
        </p>
      }
      overviewHeading="Complete Plumbing Services in Huddersfield"
      overviewContent={
        <>
          <p>
            Whether you have a plumbing emergency at 3am or need a planned
            installation during the week, OnCall Home Repairs has you covered.
            We are a plumber matching network — we connect you directly with
            vetted, local plumbers who specialise in the work you need. No call
            centres, no middlemen, just qualified professionals on your doorstep.
          </p>
          <p>
            Every plumber in our Huddersfield network is fully qualified,
            insured, and where gas work is involved, Gas Safe registered. You
            get a clear, upfront quote before any work begins. No hidden fees.
            No surprise charges. And every job comes with our workmanship
            guarantee — if something is not right, we send a plumber back at
            no extra cost.
          </p>
        </>
      }
      servicesHeading="Our Plumbing Services in Huddersfield"
      categorySlug="plumber"
      services={category.services}
      whyChooseHeading="Why Choose OnCall Home Repairs"
      differentiators={[
        {
          title: "24/7 Availability",
          description: (
            <p>
              Day or night, weekends or bank holidays — our network of plumbers
              is ready to respond when you need them most.
            </p>
          ),
        },
        {
          title: "Vetted and Gas Safe",
          description: (
            <p>
              Every plumber is qualified, insured, and vetted. Gas Safe
              registered where required. You can trust the work will be done
              safely and properly.
            </p>
          ),
        },
        {
          title: "Transparent Pricing",
          description: (
            <p>
              Clear, upfront quote before any work begins. You approve the
              cost and there are no hidden charges added afterwards.
            </p>
          ),
        },
        {
          title: "Workmanship Guarantee",
          description: (
            <p>
              All work is guaranteed. If something is not right, we send a
              plumber back to put it right at no extra cost.
            </p>
          ),
        },
        {
          title: "Local Plumbers",
          description: (
            <p>
              Our plumbers live and work in the Huddersfield area. They know
              the local housing stock and common plumbing issues in West Yorkshire.
            </p>
          ),
        },
        {
          title: "Constant Communication",
          description: (
            <p>
              We keep you informed at every stage — from the moment you call
              to the moment the job is signed off.
            </p>
          ),
        },
      ]}
      crossLinks={[
        {
          name: "Gasfitter",
          href: "/plumber-huddersfield/services/gasfitter",
          description:
            "Gas fitting services including boiler breakdowns and gas appliance work.",
        },
      ]}
      serviceAreasHeading="Plumber Services Across Huddersfield"
      serviceAreasContent={
        <p>
          We connect homeowners and businesses with plumbers across
          Huddersfield and the surrounding towns. Whether you are in
          Holmfirth, Marsden, Slaithwaite, Meltham, or further afield in
          Mirfield or Denby Dale, our network has local plumbers who can
          reach you quickly.
        </p>
      }
      faqs={[
        {
          question: "What plumbing services do you offer in Huddersfield?",
          answer:
            "We cover everything from emergency plumbing and burst pipe repair to boiler installations, gas safety certificates, drain clearing, bathroom and kitchen plumbing, heating repairs, and much more. If it involves pipes, water, gas, or heating, our plumbers can handle it.",
        },
        {
          question: "Are your plumbers available 24/7?",
          answer:
            "Yes. Our network of plumbers is available 24 hours a day, 7 days a week, including bank holidays. For emergencies like burst pipes, gas leaks, or flooding, call 0333 240 8428 any time.",
        },
        {
          question: "How do I book a plumber through OnCall Home Repairs?",
          answer:
            "Call 0333 240 8428 or use our contact form. Tell us what you need and we will match you with the right plumber for the job. They will contact you to arrange a time and provide a quote.",
        },
        {
          question: "Do you charge a call-out fee?",
          answer:
            "Your plumber will explain all costs upfront before starting any work. There are no hidden fees or surprise charges. You approve the quote before the plumber begins.",
        },
      ]}
      ctaHeading="Need a Plumber in Huddersfield?"
      ctaContent={
        <p>
          Call OnCall Home Repairs on 0333 240 8428. We will connect you with
          a vetted, local plumber who can help — whether it is an emergency or
          a planned job. Transparent pricing and guaranteed workmanship.
        </p>
      }
      categoryName="Plumber"
      categoryDescription="Full-service plumber in Huddersfield. Emergency plumbing, boiler repairs, heating, gas safety, drain clearing, and more."
      geoPrefix="/plumber-huddersfield"
      serviceAreas={seoConfigHuddersfield.serviceAreas}
    />
  );
}
