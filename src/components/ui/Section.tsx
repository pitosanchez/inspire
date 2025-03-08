type SectionProps = {
  children: React.ReactNode;
};

export function Section({ children }: SectionProps) {
  return (
    <section className="mx-auto flex max-w-7xl flex-col gap-6">
      {children}
    </section>
  );
}
