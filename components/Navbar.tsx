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
      <nav className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 text-[#7a1328] sm:px-6 md:flex-row md:items-center md:justify-between md:py-4">
        <Link
          href="/"
          className="flex items-center gap-2 self-center font-display text-2xl font-semibold tracking-wide sm:gap-3 sm:text-3xl md:self-auto"
        >
          <Image
            src="/images/logo0.png"
            alt="Logo Yuyo Marmol"
            width={60}
            height={60}
            className="h-12 w-12 object-contain sm:h-[60px] sm:w-[60px]"
          />
          <span>Yuyo Marmol</span>
        </Link>

        <ul className="flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm sm:text-base md:w-auto md:justify-end md:gap-8 md:text-lg">
          {links.map((link) => (
            <li key={link.label}>
              <Link href={link.href} className="whitespace-nowrap transition hover:text-[#3f0a15]">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
