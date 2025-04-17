import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";
import { SectionParagraph } from "./ui/SectionParagraph";
import { SectionSubHeading } from "./ui/SectionSubHeading";

export function About() {
  return (
    <Section>
      <SectionHeading>ABOUT</SectionHeading>
      <SectionParagraph>
        At <strong>Inspire Kidney Transplant Resources</strong>, we understand
        that the road to receiving a kidney transplant can feel overwhelming and
        complex. We believe everyone deserves clear guidance and accessible
        support to navigate the many steps involved in securing this life-saving
        treatment.
      </SectionParagraph>

      <SectionParagraph>
        Many individuals face significant barriers when approaching the
        transplant system. Challenges such as financial burdens, lack of
        reliable transportation, unstable housing situations, limited
        nutritional resources, and insufficient access to clear medical guidance
        can all create substantial obstacles. At Inspire, we recognize these
        issues have often been overlooked, and we are dedicated to providing
        targeted solutions to ease these burdens.
      </SectionParagraph>

      <SectionParagraph>
        Our mission is to simplify the transplant process through comprehensive,
        patient-centered education, personalized support, and strong
        collaborative partnerships within the healthcare community. By
        addressing these everyday yet critical needs, we empower patients with
        the tools, information, and confidence required to advocate for their
        health and successfully navigate their transplant journey.
      </SectionParagraph>

      <SectionSubHeading>How We Help</SectionSubHeading>

      <SectionParagraph>
        Inspire collaborates closely with leading medical professionals,
        hospitals, and community organizations to design and implement
        practical, innovative programs aimed at improving transplant access for
        all patients. Central to our approach is the Community Health Worker
        (CHW) initiative, a program specifically crafted to address real-world
        patient needs in tangible, meaningful ways.
      </SectionParagraph>

      <SectionParagraph>
        Our CHWs are compassionate, trained professionals who act as patient
        navigators, ensuring that every patient and their family fully
        understands their transplant options, connecting them directly with
        healthcare providers, and offering ongoing support and guidance
        throughout the entire transplant process.
        <br />
        <br />
        <strong>They assist with:</strong>
      </SectionParagraph>

      <HelpList />

      <SectionSubHeading>
        YOU ARE NOT ALONE<strong className="text-red-700">!</strong>
      </SectionSubHeading>

      <SectionParagraph>
        We understand how daunting and isolating the kidney transplant journey
        can be. Our promise to you is simple—you don't have to navigate this
        path alone. Whether you're seeking clear answers, practical resources,
        or someone to support you through every question and challenge, Inspire
        Kidney Transplant Resources is here for you.
      </SectionParagraph>

      <SectionParagraph>
        Reach out today to learn more about how we can help guide you toward a
        healthier and more confident future.
      </SectionParagraph>
    </Section>
  );
}

function HelpList() {
  return (
    <ul className="mx-auto flex w-4/5 max-w-3xl list-none flex-col gap-4">
      <HelpListItem>
        ✅ <strong>Screening for barriers</strong> – helping patients figure out
        what challenges they may face in getting a transplant.
      </HelpListItem>
      <HelpListItem>
        ✅ <strong>Connecting to resources</strong> – making sure patients can
        access food programs, affordable housing, and financial aid.
      </HelpListItem>
      <HelpListItem>
        ✅ <strong>Navigating the healthcare system</strong> – guiding patients
        through medical paperwork, transplant referrals, and insurance issues.
      </HelpListItem>
      <HelpListItem>
        ✅ <strong>Fighting provider bias</strong> – identifying unfair
        treatment in healthcare and advocating for equal opportunities.
      </HelpListItem>
      <HelpListItem>
        ✅<strong>Helping with transportation & medication access</strong> –
        ensuring patients can get to doctor appointments and afford necessary
        medications.
      </HelpListItem>
    </ul>
  );
}

type HelpListItemProps = { children: React.ReactNode };

function HelpListItem({ children }: HelpListItemProps) {
  return <li className="rounded-lg bg-blue-200 p-3 text-base">{children}</li>;
}
