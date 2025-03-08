import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";
import { SectionParagraph } from "./ui/SectionParagraph";
import { SectionSubHeading } from "./ui/SectionSubHeading";

export function About() {
  return (
    <Section>
      <SectionHeading>ABOUT</SectionHeading>
      <SectionParagraph>
        At <strong>Inspire Kidney Transplant Resources</strong>, we believe that
        everyone deserves a fair chance at receiving a life-saving kidney
        transplant. However, we also recognize that many people, especially
        those from Black, Brown, and underserved communities, face serious
        obstacles when trying to access kidney care.
      </SectionParagraph>
      <SectionParagraph>
        These barriers include racial bias in healthcare, financial struggles,
        lack of reliable transportation, food and housing insecurity, and
        limited access to medical information. Many people are not given the
        same opportunities to get evaluated for a transplant because of these
        challenges. This is not fair, and we are here to change that.
      </SectionParagraph>
      <SectionParagraph>
        Our goal is to provide easy-to-understand education, one-on-one patient
        support, and strong community partnerships to help break down these
        barriers. By doing this, we empower people with the tools and knowledge
        they need to navigate the complicated transplant process with
        confidence.
      </SectionParagraph>
      <SectionSubHeading>How We Help</SectionSubHeading>
      <SectionParagraph>
        We work with trusted doctors, hospitals, and community organizations to
        design programs that make kidney transplant access more fair and equal
        for everyone. One of our most important programs is the Community Health
        Worker initiative.
      </SectionParagraph>
      <SectionParagraph>
        Our CHWs are trained professionals who help patients and families
        understand their transplant options, connect them with doctors, and
        provide support every step of the way . <br />
        <br />
        <strong>They assist with:</strong>
      </SectionParagraph>
      {/* The beginning of the ul-li  */}
      <HelpList />
      <SectionSubHeading>
        YOU ARE NOT ALONE<strong className="text-red-700"> !</strong>
      </SectionSubHeading>
      <SectionParagraph>
        We understand that the journey to a kidney transplant can feel
        overwhelming, but you do not have to go through it alone. Whether you
        need guidance, resources, or just someone to answer your questions, we
        are here to help.
      </SectionParagraph>
      <SectionParagraph>
        Explore our resources today to learn more about how we can support you
        on your path to a healthier future.
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
