import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";
import KdTool from "../assets/kd-toolkit.webp";

export function Booklet() {
  const pdfUrl =
    "https://www.kidneyfund.org/sites/default/files/media/documents/AKF_TransplantToolkit_Digital.pdf";

  return (
    <Section>
      <SectionHeading id="booklet">Transplant Toolkit</SectionHeading>
      <div className="flex flex-col items-center gap-6">
        {/* Embedded PDF */}
        <img src={KdTool} alt="Kidney Disease Tool Kit" />

        {/* Download Button */}
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-blue-600 px-6 py-3 font-bold text-white shadow-md transition hover:bg-blue-700"
        >
          Download PDF
        </a>
      </div>
    </Section>
  );
}
