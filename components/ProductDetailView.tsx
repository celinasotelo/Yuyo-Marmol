"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { Product } from "@/types/product"
import Link from "next/link"

interface ProductDetailViewProps {
  product: Product
}

export default function ProductDetailView({ product }: ProductDetailViewProps) {
  const gallery = useMemo(() => {
    if (product.images.length > 0) return product.images
    return ["/images/mesada0.jpg"]
  }, [product.images])

  const [selectedImage, setSelectedImage] = useState(gallery[0])

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <section>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#f4d2d9] bg-white shadow-sm">
            <Image
              src={selectedImage}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="mt-4 grid grid-cols-4 gap-3">
            {gallery.map((image, index) => {
              const isActive = image === selectedImage
              return (
                <button
                  key={`${image}-${index}`}
                  type="button"
                  onClick={() => setSelectedImage(image)}
                  className={`relative aspect-square overflow-hidden rounded-xl border transition ${
                    isActive
                      ? "border-[var(--primary)] ring-2 ring-[#f4d2d9]"
                      : "border-[#f4d2d9] hover:border-[#d98b9d]"
                  }`}
                  aria-label={`Ver imagen ${index + 1} de ${product.name}`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} - Vista ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              )
            })}
          </div>
        </section>

        <section className="space-y-6">
          <nav className="text-sm text-[#7a4b55]" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:underline">
                  Inicio
                </Link>
              </li>

              <li>/</li>

              <li>
                <Link href="/catalogo" className="hover:underline">
                  Catálogo
                </Link>
              </li>

              <li>/</li>

              <li className="text-[#56343c] font-medium">
                {product.name}
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl font-bold text-[var(--primary-strong)]">{product.name}</h1>
          <p className="text-md leading-relaxed text-[#56343c]">{product.description}</p>

          <div className="space-y-5 rounded-xl border border-[#f4d2d9] bg-[var(--surface)] p-6 shadow-sm">
            <div>
              <h2 className="text-xl font-semibold text-[var(--primary-strong)]">Dureza</h2>
              <p className="mt-2 text-md text-[#56343c]">{product.hardness ?? "Consultar"}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[var(--primary-strong)]">Formato</h2>
              <p className="mt-2 text-md text-[#56343c]">{product.format ?? "Variable según placa"}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[var(--primary-strong)]">Espesor</h2>
              <p className="mt-2 text-md text-[#56343c]">{product.thickness ?? "Consultar"}</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}