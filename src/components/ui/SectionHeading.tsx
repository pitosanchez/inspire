type SectionHeadingProps = { children: React.ReactNode; id?: string };

export function SectionHeading({ children, id }: SectionHeadingProps) {
  return (
    <h1
      id={id}
      className="mt-15 mb-8 text-center text-4xl font-bold text-blue-400"
    >
      {children}
    </h1>
  );
}
