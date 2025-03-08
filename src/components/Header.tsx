import InspireLogo from "../assets/inspire.svg";
export function Header() {
  return (
    <header className="relative w-full h-screen shadow">
      <img
        src={InspireLogo}
        alt="Inspire Logo"
        className="absolute top-1/2 left-1/2 -translate-1/2 "
      />
      <nav className="absolute bottom-0 w-full flex justify-evenly py-4 shadow">
        <Link href="#home">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#resources">Resources</Link>
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
      className="text-lg font-bold no-underline p-2 hover:text-sky-500"
      href={href}
    >
      {children}
    </a>
  );
}
