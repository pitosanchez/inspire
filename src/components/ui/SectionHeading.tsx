type SectionHeadingProps = { children: React.ReactNode };

export function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h1 className="text-black-700 mt-10 mb-8 text-center text-6xl font-bold">
      {children}
    </h1>
  );
}
