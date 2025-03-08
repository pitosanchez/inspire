type SectionSubHeadingProps = { children: React.ReactNode };

export function SectionSubHeading({ children }: SectionSubHeadingProps) {
  return (
    <h2 className="mt-10 mb-8 text-center text-4xl font-bold text-blue-700">
      {children}
    </h2>
  );
}
