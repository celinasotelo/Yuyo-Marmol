import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/catalogo", label: "Productos" },
  { href: "/contacto", label: "Contacto" },
  { href: "/trabajos-realizados", label: "Trabajos realizados" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-[#7a1328]">
        <Link
          href="/"
          className="flex items-center gap-3 font-display text-3xl font-semibold tracking-wide"
        >
          <Image
            src="/images/logo0.png"
            alt="Logo Yuyo Marmol"
            width={60}
            height={60}
            className="object-contain"
          />
          <span>Yuyo Marmol</span>
        </Link>

        <ul className="flex flex-wrap items-center gap-3 text-base md:gap-8 md:text-lg">
          {links.map((link) => (
            <li key={link.label}>
              <Link href={link.href} className="transition hover:text-[#3f0a15]">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
