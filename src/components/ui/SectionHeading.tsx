type SectionHeadingProps = { children: React.ReactNode; id?: string };

export function SectionHeading({ children, id }: SectionHeadingProps) {
  return (
    <h1
      id={id}
      className="text-black-700 mt-10 mb-8 text-center text-5xl font-bold"
    >
      {children}
    </h1>
  );
}
