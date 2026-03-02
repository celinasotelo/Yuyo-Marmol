import Link from "next/link";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/catalogo", label: "Productos" },
  { href: "/contacto", label: "Contacto" },
  { href: "/trabajos-realizados", label: "Trabajos realizados" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-white">
        <Link href="/" className="font-display text-xl font-semibold tracking-wide">
          Yuyo Marmol
        </Link>

        <ul className="flex flex-wrap items-center gap-3 text-sm md:gap-8 md:text-base">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="transition hover:text-gray-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}