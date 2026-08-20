import Image from "next/image"
import Link from "next/link"
import { products } from "@/data/product"
import ProductCard from "@/components/ProductCard"

export default function Home() {
  const featuredProducts = products.filter(p => p.featured)

  return (
    <main className="flex flex-col">
      <section className="relative h-[85vh] flex items-center justify-center text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/mesada0.jpg"
            alt="Cocina moderna con mesada de mármol"
            fill
            priority
            className="object-cover brightness-50"
          />
        </div>

        <div className="relative text-center max-w-3xl px-6">
          <h1 className="font-display text-4xl font-bold">
            Descubrí los mejores productos para transformar tu espacio.
          </h1>

          <p className="text-lg md:text-xl mb-8 text-[#ffe6eb]">
            Mesadas, revestimientos y trabajos en mármol y granito
            de alta calidad.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="/catalogo"
              className="bg-[var(--accent)] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[var(--primary)] transition"
            >
              Ver catálogo
            </Link>

            <a
              href="https://wa.me/5493794697318"
              target="_blank"
              className="border border-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-[var(--primary)] transition"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 text-center gap-8 px-6">
          <div>
            <h3 className="font-semibold text-lg mb-2 text-[var(--primary-strong)]">Instalación profesional</h3>
            <p className="text-[#7a4b55] text-sm">
              Trabajo realizado por especialistas con experiencia.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2 text-[var(--primary-strong)]">Material premium</h3>
            <p className="text-[#7a4b55] text-sm">
              Granitos y mármoles seleccionados de primera calidad.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2 text-[var(--primary-strong)]">Presupuesto sin cargo</h3>
            <p className="text-[#7a4b55] text-sm">
              Cotizamos tu proyecto sin compromiso.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2 text-[var(--primary-strong)]">Atención personalizada</h3>
            <p className="text-[#7a4b55] text-sm">
              Asesoramiento adaptado a tu necesidad.
            </p>
          </div>
        </div>
      </section>

      <section id="trabajos" className="py-20 scroll-mt-24 bg-[var(--primary)]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--surface-soft)]">
            Productos destacados
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/catalogo"
              className="bg-[var(--surface-soft)] text-[var(--primary-strong)] px-8 py-3 rounded-xl font-semibold hover:bg-white transition"
            >
              Ver todo el catálogo
            </Link>
          </div>
        </div>
      </section>

      <section id="contacto" className="bg-[var(--surface-soft)] py-20 text-center scroll-mt-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--primary-strong)]">
          ¿Listo para renovar tu espacio?
        </h2>

        <p className="text-[#7a4b55] mb-8 max-w-2xl mx-auto">
          Solicitá tu presupuesto sin compromiso y transformá tu cocina,
          baño o proyecto con materiales de alta calidad.
        </p>

        <a
          href="https://wa.me/5493794697318"
          target="_blank"
          className="bg-[var(--accent)] text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-[var(--primary)] transition"
        >
          Solicitar presupuesto 
        </a>
      </section>
    </main>
  )
}
