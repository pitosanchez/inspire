import InspireLogo from "../assets/inspire.svg";

export function Header() {
  return (
    <header className="relative h-screen w-full shadow">
      <img
        src={InspireLogo}
        alt="Inspire Logo"
        className="absolute top-1/2 left-1/2 -translate-1/2"
      />
      <nav className="absolute bottom-0 flex w-full justify-evenly py-4 shadow">
        <Link href="#">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#resources">Resources</Link>
        <Link href="#booklet">Transplant Toolkit</Link> {/* New Link */}
        <Link href="#contact">Contact</Link>
      </nav>
    </header>
  );
}

type LinkProps = {
  href: string;
  children: React.ReactNode;
};

function Link({ href, children }: LinkProps) {
  return (
    <a
      className="p-2 text-lg font-bold no-underline hover:text-sky-500"
      href={href}
    >
      {children}
    </a>
  );
}
