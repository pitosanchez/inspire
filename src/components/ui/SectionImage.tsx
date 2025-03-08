type SectionImageProps = {
  src: string;
  alt: string;
};

export function SectionImage({ src, alt }: SectionImageProps) {
  return (
    <img src={src} alt={alt} className="mx-auto h-auto w-full max-w-3/4" />
  );
}
