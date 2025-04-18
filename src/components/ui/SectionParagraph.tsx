type SectionParagraphProps = { children: React.ReactNode };

export function SectionParagraph({ children }: SectionParagraphProps) {
  return (
    <p className="text-md/8 mx-auto w-full font-normal lg:text-2xl">
      {children}
    </p>
  );
}
