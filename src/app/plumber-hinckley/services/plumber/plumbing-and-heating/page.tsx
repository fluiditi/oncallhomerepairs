import { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Plumbing And Heating Hinckley | OnCall Home Repairs",
  description:
    "Full-service plumbing and central heating by vetted engineers. Transparent pricing. Call 0333 240 8428.",
  alternates: {
    canonical:
      "https://oncallhomerepairs.co.uk/plumber-hinckley/services/plumber/plumbing-and-heating",
  },
};

export default function PlumbingAndHeatingPage() {
  return (
    <ServicePage
      breadcrumbItems={[
        { name: "Services", href: "/plumber-hinckley/services" },
        { name: "Plumber", href: "/plumber-hinckley/services/plumber" },
        {
          name: "Plumbing And Heating",
          href: "/plumber-hinckley/services/plumber/plumbing-and-heating",
        },
      ]}
      h1="Plumbing And Heating in Hinckley"
      heroIntro={
        <p>
          Need plumbing and heating in Hinckley? OnCall Home Repairs connects you with
          vetted, qualified plumbers who can help. Whether it is an emergency
          or a planned job, our network of Gas Safe registered and fully insured
          professionals are available when you need them. Call us on 0333 240 8428
          for a fast, no-obligation quote.
        </p>
      }
      whatWhyHeading="Why You Need Professional Plumbing And Heating in Hinckley"
      whatWhyContent={
        <>
          <p>
            Plumbing And Heating is not something to leave to chance. Poorly fitted or
            repaired plumbing can lead to leaks, water damage, and costly
            remediation work down the line. A qualified plumber has the
            training, tools, and experience to get the job done right first
            time — saving you money and giving you peace of mind.
          </p>
          <p>
            In Hinckley and the surrounding areas, properties range from
            Victorian terraces to modern new-builds, each with their own
            plumbing configurations and challenges. Our network of local
            plumbers understands the common issues found in Hinckley homes
            and commercial premises, and arrives equipped to handle them.
          </p>
          <p>
            OnCall Home Repairs is a plumber matching network. We connect
            you with vetted, local plumbers — not call centre operators.
            Every plumber in our network is qualified, Gas Safe registered
            where required, and fully insured. You get a real professional
            on your doorstep, not a middleman.
          </p>
        </>
      }
      processHeading="How Plumbing And Heating Works with OnCall"
      processSteps={[
        {
          title: "Call or Request a Quote",
          description: (
            <p>
              Ring 0333 240 8428 or use our contact form. Tell us what you
              need — describe the problem or the job you want done. We will
              match you with the right plumber for the task.
            </p>
          ),
        },
        {
          title: "Get Matched with a Local Plumber",
          description: (
            <p>
              We connect you with a vetted, qualified plumber in the Hinckley
              area who specialises in this type of work. They will contact
              you to arrange a convenient time.
            </p>
          ),
        },
        {
          title: "Receive a Clear, Upfront Quote",
          description: (
            <p>
              Your plumber assesses the job and gives you a transparent quote
              before any work begins. No hidden fees, no surprise charges.
              You approve the price before they start.
            </p>
          ),
        },
        {
          title: "Job Completed to a High Standard",
          description: (
            <p>
              The work is carried out professionally and efficiently. Once
              complete, your plumber checks everything is working properly
              and cleans up after themselves. All work is covered by our
              workmanship guarantee.
            </p>
          ),
        },
      ]}
      relatedHeading="Related Services"
      relatedServices={[
        {
          name: "Heating And Gas",
          href: "/plumber-hinckley/services/plumber/heating-and-gas",
        },
        {
          name: "Boiler And Heating",
          href: "/plumber-hinckley/services/plumber/boiler-and-heating",
        },
        {
          name: "Heating Engineer",
          href: "/plumber-hinckley/services/plumber/heating-engineer",
        },
        {
          name: "Emergency Plumbing",
          href: "/plumber-hinckley/services/plumber/emergency-plumbing",
        },
      ]}
      serviceAreasHeading="Plumbing And Heating Across Hinckley"
      serviceAreasContent={
        <p>
          Our network of plumbers covers Hinckley and all surrounding areas.
          Whether you are in the town centre or one of the nearby villages,
          we have local plumbers who can reach you quickly. All plumbers in
          our network are familiar with the properties and plumbing systems
          common to the Hinckley area.
        </p>
      }
      faqs={[
        {
          question: "How much does plumbing and heating cost in Hinckley?",
          answer:
            "Costs vary depending on the specifics of the job. Our plumbers provide a clear, upfront quote before any work begins so you know exactly what you are paying. Call 0333 240 8428 for a no-obligation estimate.",
        },
        {
          question: "How quickly can you send a plumber for plumbing and heating?",
          answer:
            "For emergencies, we aim to have a plumber on the way as quickly as possible — often within the hour. For planned work, we can usually arrange an appointment within 24 to 48 hours, depending on availability.",
        },
        {
          question: "Are your plumbers qualified and insured?",
          answer:
            "Yes. Every plumber in our network is fully qualified, insured, and vetted. Where gas work is involved, they are Gas Safe registered. You can trust that the work will be done safely and to a high standard.",
        },
        {
          question: "Do you cover my area near Hinckley?",
          answer:
            "We cover Hinckley and all surrounding towns and villages. If you are unsure whether we cover your area, call us on 0333 240 8428 and we will confirm.",
        },
      ]}
      ctaHeading="Need Plumbing And Heating in Hinckley?"
      ctaContent={
        <p>
          Call OnCall Home Repairs on 0333 240 8428 and we will connect you
          with a vetted, local plumber who can help. Transparent pricing,
          guaranteed workmanship, and available when you need us.
        </p>
      }
      serviceName="Plumbing And Heating"
      serviceSlug="plumbing-and-heating"
      serviceDescription="Full-service plumbing and central heating by vetted engineers."
      categorySlug="plumber"
    />
  );
}
