type SectionParagraphProps = { children: React.ReactNode };

export function SectionParagraph({ children }: SectionParagraphProps) {
  return (
    <p className="mx-auto w-full text-lg/8 font-normal lg:text-2xl">
      {children}
    </p>
  );
}
