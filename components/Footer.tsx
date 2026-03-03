import Link from "next/link";

const contactLinks = [
  {
    label: "WhatsApp",
    href: "https://wa.me/5493794697318",
    text: "+54 9 379 4697318",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/yuyomarmoleria/",
    text: "@yuyomarmoleria",
  },
  {
    label: "Correo",
    href: "mailto:contacto@tumarmoleria.com",
    text: "contacto@tumarmoleria.com",
  },
];

export default function Footer() {
  return (
    <footer className="mt-auto bg-[var(--primary-strong)] text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 md:grid-cols-2">
        <section>
          <h2 className="mb-4 font-display text-2xl font-semibold">Contacto</h2>
          <ul className="space-y-3 text-[#ffe6eb]">
            {contactLinks.map((contact) => (
              <li key={contact.label}>
                <Link
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  <span className="font-semibold text-white">{contact.label}:</span>{" "}
                  {contact.text}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-4 font-display text-2xl font-semibold">Nuestro local</h2>
          <p className="mb-2 text-[#ffe6eb]">Av. Armenia 3880, Corrientes Capital</p>
          <p className="mb-4 text-[#ffe6eb]">
            <span className="font-semibold text-white">Horario:</span> Lunes a Viernes 9:00 a 12:30 y 16:30 a 20:00 · Sábados 9:00 a 12:30
          </p>

          <div className="overflow-hidden rounded-xl border border-[#ffffff40]">
            <iframe
              title="Mapa de ubicación del local"
              src="https://www.google.com/maps?q=Av.+Armenia+3880,+Corrientes&output=embed"
              className="h-64 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </div>
    </footer>
  );
}