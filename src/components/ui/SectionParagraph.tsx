type SectionParagraphProps = { children: React.ReactNode };

export function SectionParagraph({ children }: SectionParagraphProps) {
  return <p className="mx-auto w-full font-normal">{children}</p>;
}
