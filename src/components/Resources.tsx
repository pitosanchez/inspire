import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";
import { SectionSubHeading } from "./ui/SectionSubHeading";
import { SectionImage } from "./ui/SectionImage";

// assets
import Explore from "../assets/exploretrans.webp";
import LivingDonorToolkit from "../assets/ldtk.webp";
import TransplantLiving from "../assets/unos.webp";
import LivingDonorResources from "../assets/nldac.webp";

export function Resources() {
  return (
    <Section>
      <SectionHeading>PATIENT RESOURCES</SectionHeading>
      <div className="flex flex-col gap-8 lg:flex-row">
        <div>
          <SectionSubHeading>Become a Living Donor</SectionSubHeading>
          <Link href="https://exploretransplant.org/for-family-friends/become-a-living-donor/">
            <SectionImage src={Explore} alt="Explore Transplant" />
          </Link>
        </div>
        <div>
          <SectionSubHeading>Living Donor Kit</SectionSubHeading>
          <Link href="https://www.livingdonortoolkit.com/">
            <SectionImage
              src={LivingDonorToolkit}
              alt="Living Donor Tool Kit"
            />
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-8 lg:flex-row">
        <div>
          <SectionSubHeading>Transplant Living</SectionSubHeading>
          <Link href="https://transplantliving.org/kidney/about-living-donor-transplant/">
            <SectionImage
              src={TransplantLiving}
              alt="Preview of the United Network for Organ Sharing Website"
            />
          </Link>
        </div>
        <div>
          <SectionSubHeading>Living Donor Resources</SectionSubHeading>
          <Link href="https://www.livingdonorassistance.org/Resources/Additional-Resources">
            <SectionImage
              src={LivingDonorResources}
              alt="Preview of the National Living Donor Assistance Center Website"
            />
          </Link>
        </div>
      </div>
      <div className="mx-auto max-w-2/5">
        <SectionSubHeading>National Kidney Foundation</SectionSubHeading>
        <Link href="https://www.kidney.org/news-stories/living-kidney-donor-experience-pre-and-post-transplant-surgery">
          TBD Get a picture of the Kidney.Org website
        </Link>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/-f5yuW9bmtY"
          allowFullScreen
        ></iframe>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/BJZ-kleYz40"
          allowFullScreen
        ></iframe>
      </div>

      <SectionSubHeading>HRSA Animated Video Series</SectionSubHeading>
      <div className="flex flex-wrap justify-center gap-8">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/YiHd7YCTnr0"
          allowFullScreen
        ></iframe>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/akqYQ3Tc8j8"
          allowFullScreen
        ></iframe>
      </div>
    </Section>
  );
}

type LinkProps = {
  href: string;
  children: React.ReactNode;
};

function Link({ href, children }: LinkProps) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="transform rounded-lg shadow-lg transition duration-300 ease-in-out hover:scale-105"
      href={href}
    >
      {children}
    </a>
  );
}
