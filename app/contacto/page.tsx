import ContactForm from "@/components/ContactForm"

export default function ContactoPage() {
  return (
    <main className="bg-white">
            <section id="contacto" className="bg-white py-20 scroll-mt-24">
                <div className="mx-auto max-w-6xl px-6">
                    <h2 className="text-center text-3xl md:text-4xl font-bold mb-4 text-[var(--primary-strong)]">
                    Contacto
                    </h2>
                    <p className="text-center text-[#7a4b55] mb-10 max-w-2xl mx-auto">
                    Completá el formulario para enviarnos tu consulta y te responderemos a la brevedad. También podés contactarnos por WhatsApp, Instagram o correo electrónico.
                    </p>

                    <div className="grid gap-8 md:grid-cols-2 items-start">
                    <ContactForm />

                    <div className="rounded-2xl bg-white p-6 md:p-8 shadow-lg border border-[#f0c7cf] text-[#4b2b32]">
                        <h3 className="text-2xl font-semibold text-[var(--primary-strong)] mb-6">Yuyo Marmolería</h3>
                        <ul className="space-y-4 text-[#7a4b55]">
                        <li>
                            <span className="font-semibold text-[var(--primary-strong)]">WhatsApp:</span>{" "}
                            <a href="https://wa.me/5493794697318" target="_blank" className="hover:underline">
                            +54 9 379 4697318
                            </a>
                        </li>
                        <li>
                            <span className="font-semibold text-[var(--primary-strong)]">Instagram:</span>{" "}
                            <a
                            href="https://www.instagram.com/yuyomarmoleria/"
                            target="_blank"
                            className="hover:underline"
                            >
                            @yuyomarmoleria
                            </a>
                        </li>
                        <li>
                            <span className="font-semibold text-[var(--primary-strong)]">Correo:</span>{" "}
                            yuyodemarmol@hotmail.com.ar
                        </li>
                        <li>
                            <span className="font-semibold text-[var(--primary-strong)]">Ubicación:</span>{" "}
                            Av. Armenia 3880, Corrientes Capital
                                    <div className="overflow-hidden rounded-xl border border-[#ffffff40]">
                                        <iframe
                                        title="Mapa de ubicación del local"
                                        src="https://www.google.com/maps?q=Av.+Armenia+3880,+Corrientes&output=embed"
                                        className="h-64 w-full"
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        />
                                    </div>
                        </li>
                        <li>
                            <span className="font-semibold text-[var(--primary-strong)]">Horario de atención:</span>{" "}
                            Lunes a Viernes 9:00 a 12:30 y 16:30 a 20:00 · Sábados 9:00 a 12:30
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </section>
    </main>
  )
}